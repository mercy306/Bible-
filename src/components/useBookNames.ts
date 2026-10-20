import { useEffect, useState } from 'react'
import { fetchBooks } from '../api'

/**
 * Book names in both languages, so the heading can read
 * "Genesis 1 / ዘፍጥረት 1" whichever translation is open. Loaded once and shared.
 */
const names = new Map<number, { am?: string; en?: string }>()
let pending: Promise<void> | null = null

function loadOnce() {
  if (!pending) {
    pending = Promise.all([fetchBooks('am').catch(() => null), fetchBooks('kjv').catch(() => null)])
      .then(([am, en]) => {
        if (am) for (const book of am.books) names.set(book.nr, { ...names.get(book.nr), am: book.name })
        if (en) for (const book of en.books) names.set(book.nr, { ...names.get(book.nr), en: book.name })
      })
      .then(() => undefined)
  }
  return pending
}

export function useBookNames(bookNr: number): { am?: string; en?: string } {
  const [value, setValue] = useState(() => names.get(bookNr) ?? {})

  useEffect(() => {
    let cancelled = false
    loadOnce().then(() => {
      if (!cancelled) setValue(names.get(bookNr) ?? {})
    })
    return () => {
      cancelled = true
    }
  }, [bookNr])

  return value
}

export function useAllBookNames(): Map<number, { am?: string; en?: string }> {
  const [value, setValue] = useState(() => new Map(names))

  useEffect(() => {
    let cancelled = false
    loadOnce().then(() => {
      if (!cancelled) setValue(new Map(names))
    })
    return () => {
      cancelled = true
    }
  }, [])

  return value
}