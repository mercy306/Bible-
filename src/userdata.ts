import { useSyncExternalStore } from 'react'

/** Bookmarks and personal notes live in localStorage so they survive restarts. */

export interface VerseRef {
  translation: string
  book: number
  chapter: number
  verse: number
}

export interface Bookmark {
  ref: VerseRef
  note: string
  at: number
  /** Which collection it was filed under, if any. */
  collection?: string
}

export interface RecentPlace extends VerseRef {
  at: number
}

/** A verse the reader marked to stand out while reading. */
export interface Highlight {
  ref: VerseRef
  at: number
  /** Which collection it was filed under, if any. */
  collection?: string
}

const BOOKMARKS_KEY = 'bible:bookmarks'
const RECENT_KEY = 'bible:recent'
const HIGHLIGHTS_KEY = 'bible:highlights'
const COLLECTIONS_KEY = 'bible:collections'
const MAX_RECENT = 30

/** Offered from the start; the reader can rename or add more. */
export const DEFAULT_COLLECTIONS = ['Faith', 'Prayer', 'Love', 'Important Verses']

function read<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : fallback
  } catch {
    return fallback
  }
}

// useSyncExternalStore compares snapshots by identity, so the parsed value is
// cached here. Returning a freshly parsed array on every call would re-render
// forever.
let bookmarks: Bookmark[] = []
let recent: RecentPlace[] = []
let highlights: Highlight[] = []
let collections: string[] = [...DEFAULT_COLLECTIONS]
let loaded = false

function load() {
  if (loaded) return
  loaded = true
  bookmarks = read<Bookmark[]>(BOOKMARKS_KEY, [])
  recent = read<RecentPlace[]>(RECENT_KEY, []).slice(0, MAX_RECENT)
  highlights = read<Highlight[]>(HIGHLIGHTS_KEY, [])
  const saved = read<string[]>(COLLECTIONS_KEY, [])
  // Older backups predate collections, so the defaults are always offered.
  collections = [...new Set([...DEFAULT_COLLECTIONS, ...saved])]
}

let listeners: Array<() => void> = []
function notify() {
  for (const listener of listeners) listener()
}

function subscribe(listener: () => void) {
  listeners.push(listener)
  window.addEventListener('storage', listener)
  return () => {
    listeners = listeners.filter((l) => l !== listener)
    window.removeEventListener('storage', listener)
  }
}

function saveBookmarks(next: Bookmark[]) {
  bookmarks = next
  try {
    localStorage.setItem(BOOKMARKS_KEY, JSON.stringify(next))
  } catch {
    // A full or unavailable store must not break reading.
  }
  notify()
}

function saveRecent(next: RecentPlace[]) {
  recent = next
  try {
    localStorage.setItem(RECENT_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
  notify()
}

function saveHighlights(next: Highlight[]) {
  highlights = next
  try {
    localStorage.setItem(HIGHLIGHTS_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
  notify()
}

function saveCollections(next: string[]) {
  collections = next
  try {
    localStorage.setItem(COLLECTIONS_KEY, JSON.stringify(next))
  } catch {
    // ignore
  }
  notify()
}

export function verseKey(ref: VerseRef) {
  return `${ref.translation}:${ref.book}:${ref.chapter}:${ref.verse}`
}

function getBookmarks() {
  load()
  return bookmarks
}

function getRecent() {
  load()
  return recent
}

function getHighlights() {
  load()
  return highlights
}

function getCollections() {
  load()
  return collections
}

export function useBookmarks(): Bookmark[] {
  return useSyncExternalStore(subscribe, getBookmarks, getBookmarks)
}

export function useRecent(): RecentPlace[] {
  return useSyncExternalStore(subscribe, getRecent, getRecent)
}

export function useHighlights(): Highlight[] {
  return useSyncExternalStore(subscribe, getHighlights, getHighlights)
}

export function useCollections(): string[] {
  return useSyncExternalStore(subscribe, getCollections, getCollections)
}

/** Everything saved that belongs to one collection, bookmarks and highlights. */
export function useCollection(name: string) {
  const list = useBookmarks()
  const lit = useHighlights()
  return {
    bookmarks: list.filter((b) => (b.collection ?? '') === name),
    highlights: lit.filter((h) => (h.collection ?? '') === name),
  }
}

/**
 * Files a verse under a collection, or takes it out again when the same name is
 * chosen twice. A verse is only ever in one collection, and nothing stops it
 * being unfiled.
 */
export function toggleCollection(ref: VerseRef, name: string) {
  load()
  const key = verseKey(ref)
  const target = name.trim()
  if (!target) return
  if (!collections.includes(target)) saveCollections([...collections, target])

  const bIndex = bookmarks.findIndex((b) => verseKey(b.ref) === key)
  const hIndex = highlights.findIndex((h) => verseKey(h.ref) === key)

  const current =
    (bIndex >= 0 ? bookmarks[bIndex].collection : undefined) ??
    (hIndex >= 0 ? highlights[hIndex].collection : undefined) ??
    ''
  const next = current === target ? '' : target

  if (bIndex >= 0) {
    saveBookmarks(
      bookmarks.map((b) => (verseKey(b.ref) === key ? { ...b, collection: next || undefined } : b)),
    )
  } else if (next) {
    saveBookmarks([{ ref, note: '', collection: next, at: Date.now() }, ...bookmarks])
  }

  if (hIndex >= 0) {
    saveHighlights(
      highlights.map((h) => (verseKey(h.ref) === key ? { ...h, collection: next || undefined } : h)),
    )
  }
}

export function isHighlighted(list: Highlight[], ref: VerseRef) {
  return list.some((h) => verseKey(h.ref) === verseKey(ref))
}

export function toggleHighlight(list: Highlight[], ref: VerseRef) {
  const key = verseKey(ref)
  saveHighlights(
    list.some((h) => verseKey(h.ref) === key)
      ? list.filter((h) => verseKey(h.ref) !== key)
      : [{ ref, at: Date.now() }, ...list],
  )
}

export function isBookmarked(list: Bookmark[], ref: VerseRef) {
  return list.some((b) => verseKey(b.ref) === verseKey(ref))
}

export function findBookmark(list: Bookmark[], ref: VerseRef) {
  return list.find((b) => verseKey(b.ref) === verseKey(ref))
}

export function toggleBookmark(list: Bookmark[], ref: VerseRef) {
  const key = verseKey(ref)
  saveBookmarks(
    list.some((b) => verseKey(b.ref) === key)
      ? list.filter((b) => verseKey(b.ref) !== key)
      : [{ ref, note: '', at: Date.now() }, ...list],
  )
}

export function saveNote(list: Bookmark[], ref: VerseRef, note: string) {
  const key = verseKey(ref)
  const existing = findBookmark(list, ref)
  const trimmed = note.trim()

  if (!existing && !trimmed) return
  // Clearing the text of an existing note leaves it as a plain bookmark.
  saveBookmarks(
    existing
      ? list.map((b) => (verseKey(b.ref) === key ? { ...b, note: trimmed } : b))
      : [{ ref, note: trimmed, at: Date.now() }, ...list],
  )
}

export function removeBookmark(list: Bookmark[], ref: VerseRef) {
  saveBookmarks(list.filter((b) => verseKey(b.ref) !== verseKey(ref)))
}

export function rememberPlace(ref: VerseRef) {
  load()
  const key = verseKey(ref)
  saveRecent(
    [{ ...ref, at: Date.now() }, ...recent.filter((p) => verseKey(p) !== key)].slice(0, MAX_RECENT),
  )
}

/**
 * Bookmarks and notes live only in this browser, so clearing browsing data
 * would destroy them. These two functions let the reader keep a real copy.
 */
export function exportAll(): string {
  load()
  return JSON.stringify(
    {
      format: 'sixty-six-notes',
      version: 1,
      exported: new Date().toISOString(),
      bookmarks,
      recent,
      highlights,
      collections,
    },
    null,
    2,
  )
}

export function importAll(json: string): { bookmarks: number; highlights: number; recent: number } {
  const parsed = JSON.parse(json) as {
    format?: string
    bookmarks?: Bookmark[]
    recent?: RecentPlace[]
    highlights?: Highlight[]
    collections?: string[]
  }
  if (parsed.format !== 'sixty-six-notes' || !Array.isArray(parsed.bookmarks)) {
    throw new Error('That file is not a Sixty-Six notes backup.')
  }

  // Merge rather than replace, so restoring an old copy cannot lose newer notes.
  const merged = new Map<string, Bookmark>()
  for (const item of [...parsed.bookmarks, ...bookmarks]) {
    const key = verseKey(item.ref)
    const existing = merged.get(key)
    if (!existing || (item.note && !existing.note)) merged.set(key, item)
  }

  const recentMerged = new Map<string, RecentPlace>()
  for (const item of [...(parsed.recent ?? []), ...recent]) {
    recentMerged.set(verseKey(item), item)
  }

  const highlightMerged = new Map<string, Highlight>()
  for (const item of [...(parsed.highlights ?? []), ...highlights]) {
    highlightMerged.set(verseKey(item.ref), item)
  }

  const nextBookmarks = [...merged.values()].sort((a, b) => b.at - a.at)
  const nextRecent = [...recentMerged.values()].sort((a, b) => b.at - a.at).slice(0, MAX_RECENT)
  const nextHighlights = [...highlightMerged.values()].sort((a, b) => b.at - a.at)

  saveBookmarks(nextBookmarks)
  saveRecent(nextRecent)
  saveHighlights(nextHighlights)
  if (Array.isArray(parsed.collections)) {
    saveCollections([...new Set([...collections, ...parsed.collections])])
  }
  return {
    bookmarks: nextBookmarks.length,
    recent: nextRecent.length,
    highlights: nextHighlights.length,
  }
}