import { useEffect, useState } from 'react'
import MountainHero from './MountainHero'
import { getGreeting } from './GreetingHero'
import { fetchChapter } from '../api'
import {
  useBookmarks,
  useHighlights,
  type VerseRef,
} from '../userdata'
import type { BooksResponse, ChapterResponse } from '../types'
import type { LanguageMode } from '../prefs'

interface Props {
  books: BooksResponse | null
  language?: LanguageMode
  onOpen: (book: number, chapter: number, verse?: number) => void
  onBack?: () => void
  onDaily?: () => void
}

type Tab = 'bookmarks' | 'notes' | 'highlights' | 'collections'

const TABS_EN: { id: Tab; label: string }[] = [
  { id: 'bookmarks', label: 'Bookmarks' },
  { id: 'notes', label: 'Notes' },
  { id: 'highlights', label: 'Highlights' },
  { id: 'collections', label: 'Collections' },
]

const TABS_AM: { id: Tab; label: string }[] = [
  { id: 'bookmarks', label: 'ምልክቶች' },
  { id: 'notes', label: 'ማስታወሻዎች' },
  { id: 'highlights', label: 'ቀለሞች' },
  { id: 'collections', label: 'ስብስቦች' },
]

interface Shown {
  text: string
  label: string
}

function formatDate(at: number, isEn: boolean): string {
  if (isEn) {
    return new Date(at).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    })
  }
  const d = new Date(at)
  return `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`
}

/**
 * Saved Screen matching Screen 6 of The Sixty-Six design mockup:
 * Top bar with back arrow ← and "Saved" title
 * 4 pill tabs: Bookmarks (active purple) | Notes | Highlights | Collections
 * Clean white cards with purple bookmark icon, reference, note, date, and chevron ›
 */
export default function SavedView({ books: _books, language = 'am', onOpen, onBack, onDaily }: Props) {
  const bookmarks = useBookmarks()
  const highlights = useHighlights()

  const isEn = language === 'en'
  const tabs = isEn ? TABS_EN : TABS_AM
  const [tab, setTab] = useState<Tab>('bookmarks')
  const [shown, setShown] = useState<Record<string, Shown>>({})

  const notes = bookmarks.filter((b) => b.note && b.note.trim().length > 0)

  // Default demo items matching Screen 6 if no bookmarks yet
  const defaultItems = [
    { ref: { translation: isEn ? 'kjv' : 'am', book: 43, chapter: 3, verse: 16 }, note: isEn ? 'Loved this verse' : 'ይህን ጥቅስ ወደድኩት', at: Date.now() - 5 * 86_400_000 },
    { ref: { translation: isEn ? 'kjv' : 'am', book: 19, chapter: 23, verse: 1 }, note: isEn ? 'So comforting' : 'እጅግ የሚያጽናና', at: Date.now() - 7 * 86_400_000 },
    { ref: { translation: isEn ? 'kjv' : 'am', book: 20, chapter: 3, verse: 5 }, note: isEn ? 'Trust in the Lord' : 'በእግዚአብሔር ታመን', at: Date.now() - 10 * 86_400_000 },
    { ref: { translation: isEn ? 'kjv' : 'am', book: 23, chapter: 40, verse: 31 }, note: isEn ? 'New strength' : 'አዲስ ኃይል', at: Date.now() - 13 * 86_400_000 },
  ]

  const rawRows =
    tab === 'highlights'
      ? highlights.map((h) => ({ ref: h.ref, at: h.at, note: '' }))
      : tab === 'notes'
        ? notes.map((b) => ({ ref: b.ref, at: b.at, note: b.note }))
        : tab === 'collections'
          ? [
              ...bookmarks.filter((b) => b.collection).map((b) => ({ ref: b.ref, at: b.at, note: b.collection || '' })),
              ...highlights
                .filter((h) => h.collection && !bookmarks.some((b) => keyOf(b.ref) === keyOf(h.ref)))
                .map((h) => ({ ref: h.ref, at: h.at, note: h.collection || '' })),
            ]
          : bookmarks.map((b) => ({ ref: b.ref, at: b.at, note: b.note }))

  const rows = rawRows.length > 0 ? rawRows : tab === 'bookmarks' ? defaultItems : []

  const keyOf = (ref: VerseRef) => `${ref.translation}:${ref.book}:${ref.chapter}:${ref.verse}`

  // Fetch chapter text for preview
  useEffect(() => {
    let cancelled = false
    const missing = rows.filter((row) => !shown[keyOf(row.ref)])
    if (missing.length === 0) return

    const groups = new Map<string, { ref: VerseRef; verses: number[] }>()
    for (const row of missing) {
      const id = `${row.ref.translation}:${row.ref.book}:${row.ref.chapter}`
      const cur = groups.get(id)
      if (cur) {
        if (!cur.verses.includes(row.ref.verse)) cur.verses.push(row.ref.verse)
      } else {
        groups.set(id, { ref: row.ref, verses: [row.ref.verse] })
      }
    }

    for (const group of groups.values()) {
      fetchChapter(group.ref.translation, group.ref.book, group.ref.chapter)
        .then((res: ChapterResponse) => {
          if (cancelled) return
          setShown((prev) => {
            const next = { ...prev }
            for (const verseNr of group.verses) {
              const match = res.verses.find((v) => v.verse === verseNr)
              const key = `${group.ref.translation}:${group.ref.book}:${group.ref.chapter}:${verseNr}`
              next[key] = {
                text: match ? match.text : `Verse ${verseNr}`,
                label: `${res.book.name} ${res.chapter}:${verseNr}`,
              }
            }
            return next
          })
        })
        .catch(() => {
          if (cancelled) return
        })
    }

    return () => {
      cancelled = true
    }
  }, [rows, shown])

  return (
    <div className="savedScreen">
      {/* Mountain Hero Header */}
      <MountainHero className="dailyScreen__hero">
        <div className="dailyScreen__topRow">
          <button
            type="button"
            className="dailyScreen__backBtn"
            onClick={onBack}
            aria-label={isEn ? "Back to Bible" : "ወደ መጽሐፍ ተመለስ"}
            title={isEn ? "Back to Bible" : "ወደ መጽሐፍ ተመለስ"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <h1 className="dailyScreen__title">{isEn ? 'Saved' : 'የተቀመጡ'}</h1>

          <div style={{ width: 38 }} />
        </div>

        <div className="homeScreen__heroText" style={{ marginTop: '16px', marginBottom: '8px' }}>
          <h2 className="homeScreen__greeting">{getGreeting(isEn)}</h2>
          <blockquote
            className="homeScreen__quote"
            style={{ cursor: onDaily ? 'pointer' : undefined }}
            onClick={onDaily}
            title={onDaily ? (isEn ? 'Go to Daily Devotional' : 'ወደ ዕለቱ ጥቅስ ይሂዱ') : undefined}
          >
            {isEn ? '“The Lord is my shepherd; I shall not want.”' : '“እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።”'}
            <cite className="homeScreen__quoteRef">{isEn ? 'Psalm 23:1' : 'መዝሙር 23:1'}</cite>
          </blockquote>
        </div>
      </MountainHero>

      <div className="savedScreen__body">

        {/* 4 Tabs: Bookmarks | Notes | Highlights | Collections */}
        <nav className="savedScreen__tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={tab === t.id}
              className={`savedScreen__tab ${tab === t.id ? 'is-active' : ''}`}
              onClick={() => setTab(t.id)}
            >
              {t.label}
            </button>
          ))}
        </nav>

        {/* List of Saved Verse Cards */}
        <div className="savedScreen__list">
          {rows.length === 0 ? (
            <div className="savedScreen__empty">
              <p>
                {isEn
                  ? `No ${tab} saved yet. Tap any verse while reading to save it.`
                  : `እስካሁን ምንም የተቀመጠ ${tab === 'bookmarks' ? 'ምልክት' : tab === 'notes' ? 'ማስታወሻ' : tab === 'highlights' ? 'ቀለም' : 'ስብስብ'} የለም። በማንበብ ላይ እያሉ ጥቅስ በመንካት ያስቀምጡ።`}
              </p>
            </div>
          ) : (
            rows.map((row, i) => {
              const info = shown[keyOf(row.ref)]
              const label =
                info?.label ??
                (row.ref.book === 43
                  ? (isEn ? `John ${row.ref.chapter}:${row.ref.verse}` : `ዮሐንስ ${row.ref.chapter}:${row.ref.verse}`)
                  : row.ref.book === 19
                    ? (isEn ? `Psalm ${row.ref.chapter}:${row.ref.verse}` : `መዝሙር ${row.ref.chapter}:${row.ref.verse}`)
                    : row.ref.book === 20
                      ? (isEn ? `Proverbs ${row.ref.chapter}:${row.ref.verse}` : `ምሳሌ ${row.ref.chapter}:${row.ref.verse}`)
                      : row.ref.book === 23
                        ? (isEn ? `Isaiah ${row.ref.chapter}:${row.ref.verse}` : `ኢሳይያስ ${row.ref.chapter}:${row.ref.verse}`)
                        : (isEn ? `Reference ${row.ref.book}:${row.ref.chapter}:${row.ref.verse}` : `ጥቅስ ${row.ref.book}:${row.ref.chapter}:${row.ref.verse}`))
              const snippet = row.note || info?.text || (isEn ? 'Saved scripture verse' : 'የተቀመጠ ጥቅስ')

              return (
                <div
                  key={`${keyOf(row.ref)}-${i}`}
                  className="savedScreen__card"
                  onClick={() => onOpen(row.ref.book, row.ref.chapter, row.ref.verse)}
                >
                  <div className="savedScreen__icon" aria-hidden="true">
                    <svg viewBox="0 0 24 24" fill="currentColor">
                      <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                    </svg>
                  </div>

                  <div className="savedScreen__info">
                    <h3 className="savedScreen__ref">{label}</h3>
                    <p className="savedScreen__preview">{snippet}</p>
                    <span className="savedScreen__date">{formatDate(row.at, isEn)}</span>
                  </div>

                  <span className="savedScreen__chevron" aria-hidden="true">›</span>
                </div>
              )
            })
          )}
        </div>
      </div>
    </div>
  )
}
