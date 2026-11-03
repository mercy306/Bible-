import { useCallback, useEffect, useMemo, useState } from 'react'
import {
  fetchBooks,
  fetchChapter,
  fetchTranslations,
} from './api'
import { DEFAULT_TRANSLATION, hashFor, parseHash, parseReference, type Route } from './route'
import { rememberPlace, useBookmarks, useHighlights } from './userdata'
import { readPrayers } from './journal'
import { setPref, usePrefs, type LanguageMode } from './prefs'
import type {
  BooksResponse,
  ChapterResponse,
  Translation,
} from './types'

import BottomNav from './components/BottomNav'
import BooksSheetBody from './components/BooksSheetBody'
import DailyView from './components/DailyView'
import MoreSheetBody from './components/MoreSheetBody'
import PrayerJournal from './components/PrayerJournal'
import SavedView from './components/SavedView'
import Reader from './components/Reader'
import Sheet from './components/Sheet'
import TopBar from './components/TopBar'

const LAST_PLACE = 'bible:last-place'

function initialRoute(): Route {
  const fallback = parseHash()
  if (window.location.hash) return fallback

  try {
    const saved = JSON.parse(localStorage.getItem(LAST_PLACE) ?? '{}') as {
      translation?: string
      book?: number
      chapter?: number
    }
    return {
      ...fallback,
      view: 'read',
      translation: saved.translation ?? DEFAULT_TRANSLATION,
      book: saved.book ?? fallback.book,
      chapter: saved.chapter ?? fallback.chapter,
    }
  } catch {
    return { ...fallback, view: 'read', translation: DEFAULT_TRANSLATION }
  }
}

export default function App() {
  const [route, setRoute] = useState<Route>(initialRoute)
  const [translations, setTranslations] = useState<Translation[]>([])
  const [books, setBooks] = useState<BooksResponse | null>(null)
  const [chapter, setChapter] = useState<ChapterResponse | null>(null)
  // Typed references are usually written in English ("John 3:16") even while
  // reading Amharic, so English book names are always available for matching.
  const [englishBooks, setEnglishBooks] = useState<BooksResponse['books']>([])
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const [sheet, setSheet] = useState<'none' | 'books' | 'more'>('none')
  const [compare, setCompare] = useState<'off' | 'am54'>('off')
  const [memorize, setMemorize] = useState(false)
  const [wordLookup, setWordLookup] = useState(false)

  const prefs = usePrefs()
  const bookmarks = useBookmarks()
  const highlights = useHighlights()

  const go = useCallback((next: Route) => {
    const hash = hashFor(next)
    if (window.location.hash === hash) {
      setRoute(next)
    } else {
      window.location.hash = hash
    }
    setSheet('none')
  }, [])

  useEffect(() => {
    const onHashChange = () => setRoute(parseHash(route.translation))
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [route.translation])

  useEffect(() => {
    let cancelled = false
    fetchTranslations()
      .then((list) => {
        if (cancelled) return
        setTranslations(list)
        if (!list.some((t) => t.id === route.translation) && list[0]) {
          go({ ...route, translation: list[0].id })
        }
      })
      .catch((e: Error) => !cancelled && setError(e.message))
    return () => {
      cancelled = true
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Only the reading screen needs chapter text; the other sections are lists.
  useEffect(() => {
    let cancelled = false

    if (route.view === 'daily' || route.view === 'bookmarks' || route.view === 'prayers') {
      setLoading(false)
      return
    }

    setLoading(true)
    setError(null)

    fetchChapter(route.translation, route.book, route.chapter)
      .then((res) => {
        if (cancelled) return
        setChapter(res)
        localStorage.setItem(
          LAST_PLACE,
          JSON.stringify({ translation: route.translation, book: route.book, chapter: route.chapter }),
        )
        rememberPlace({
          translation: route.translation,
          book: route.book,
          chapter: route.chapter,
          verse: 0,
        })
        window.scrollTo({ top: 0 })
      })
      .catch((e: Error) => !cancelled && setError(e.message))
      .finally(() => !cancelled && setLoading(false))

    return () => {
      cancelled = true
    }
  }, [route])

  useEffect(() => {
    let cancelled = false
    fetchBooks(route.translation)
      .then((res) => {
        if (cancelled) return
        setBooks(res)
        document.documentElement.dataset.lang = res.translation.lang || 'en'
        document.documentElement.lang = res.translation.lang || 'en'
      })
      .catch((e: Error) => !cancelled && setError(e.message))
    return () => {
      cancelled = true
    }
  }, [route.translation])

  useEffect(() => {
    let cancelled = false
    if (route.translation === 'kjv') {
      setEnglishBooks([])
      return
    }
    fetchBooks('kjv')
      .then((res) => !cancelled && setEnglishBooks(res.books))
      .catch(() => !cancelled && setEnglishBooks([]))
    return () => {
      cancelled = true
    }
  }, [route.translation])

  const openChapter = useCallback(
    (book: number, chapterNr: number) =>
      go({ ...route, view: 'read', book, chapter: chapterNr, q: '', verse: undefined, verseEnd: undefined }),
    [go, route],
  )

  const goTo = useCallback(
    (book: number, chapterNr: number, verse?: number, verseEnd?: number) =>
      go({ ...route, view: 'read', book, chapter: chapterNr, verse, verseEnd, q: '' }),
    [go, route],
  )

  const openSection = useCallback(
    (view: Route['view']) => go({ ...route, view, q: '' }),
    [go, route],
  )

  const [inPlaceSearch, setInPlaceSearch] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  const openSearch = useCallback((q = '') => {
    if (q) setSearchQuery(q)
    setInPlaceSearch(true)
  }, [])

  useEffect(() => {
    if (route.view === 'search') {
      if (route.q) setSearchQuery(route.q)
      setInPlaceSearch(true)
      go({ ...route, view: 'read', q: '' })
    }
  }, [route, go])

  const referenceBooks = useMemo(
    () => [...(books?.books ?? []), ...englishBooks],
    [books, englishBooks],
  )

  const primary = prefs.language === 'en' ? 'en' : 'am'
  const showingChapter = route.view === 'read'

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const activeTag = (document.activeElement?.tagName || '').toLowerCase()
      const isInput =
        activeTag === 'input' ||
        activeTag === 'textarea' ||
        (document.activeElement as HTMLElement)?.isContentEditable

      if (e.key === 'Escape') {
        if (inPlaceSearch) {
          setInPlaceSearch(false)
          e.preventDefault()
          return
        }
        if (sheet !== 'none') {
          setSheet('none')
          e.preventDefault()
        }
        return
      }

      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setInPlaceSearch(true)
        return
      }

      if (!isInput && e.key === '/') {
        e.preventDefault()
        setInPlaceSearch(true)
        return
      }

      if (!isInput && route.view === 'read') {
        if (e.key === 'ArrowLeft' && chapter?.prev) {
          e.preventDefault()
          openChapter(chapter.prev.book, chapter.prev.chapter)
        } else if (e.key === 'ArrowRight' && chapter?.next) {
          e.preventDefault()
          openChapter(chapter.next.book, chapter.next.chapter)
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [sheet, inPlaceSearch, route.view, chapter, openChapter])

  const handleLanguage = (lang: LanguageMode) => {
    setPref('language', lang)
    if (lang === 'en' && route.translation !== 'kjv') {
      go({ ...route, translation: 'kjv' })
    } else if (lang === 'am' && route.translation === 'kjv') {
      go({ ...route, translation: 'am' })
    }
  }

  const showTopBar = route.view === 'read'
  const showBottomNav = sheet !== 'books'

  return (
    <div className="app" style={{ ['--reader-size' as string]: `${prefs.sizePx}px` }}>
      {showTopBar && (
        <TopBar
          book={route.book}
          chapter={route.chapter}
          primary={primary}
          view={route.view}
          moreOpen={sheet === 'more'}
          language={prefs.language}
          onLanguage={handleLanguage}
          onBooks={() => setSheet((s) => (s === 'books' ? 'none' : 'books'))}
          onMore={() => setSheet((s) => (s === 'more' ? 'none' : 'more'))}
          onBack={() => openSection('read')}
          onDaily={() => openSection('daily')}
          translation={route.translation}
          books={referenceBooks}
          onNavigate={(b, c, v) => goTo(b, c, v)}
          searchOpen={inPlaceSearch}
          onToggleSearch={setInPlaceSearch}
          initialQuery={searchQuery}
        />
      )}

      <main className="main">
        {error && <div className="notice notice--error">{error}</div>}
        {loading && (
          <div className="notice">
            {prefs.language === 'en' ? 'Loading…' : 'በመጫን ላይ…'}
          </div>
        )}

        {route.view === 'daily' && (
          <DailyView
            books={books}
            translation={route.translation}
            language={prefs.language}
            onOpen={openChapter}
            onBack={() => openSection('read')}
          />
        )}

        {route.view === 'bookmarks' && (
          <SavedView
            books={books}
            language={prefs.language}
            onOpen={openChapter}
            onBack={() => openSection('read')}
            onDaily={() => openSection('daily')}
          />
        )}

        {route.view === 'prayers' && (
          <PrayerJournal
            language={prefs.language}
            onDaily={() => openSection('daily')}
            onBack={() => openSection('read')}
          />
        )}

        {!loading && !error && route.view === 'read' && chapter && (
          <Reader
            chapter={chapter}
            onOpen={openChapter}
            onAppearance={() => setSheet('more')}
            language={prefs.language}
            compare={compare}
            memorize={memorize}
            wordLookup={wordLookup}
            passage={
              route.verse && route.verseEnd
                ? { from: route.verse, to: route.verseEnd }
                : null
            }
          />
        )}
      </main>

      {showBottomNav && (
        <BottomNav
          view={route.view}
          moreOpen={sheet === 'more'}
          savedCount={bookmarks.length + highlights.length}
          language={prefs.language}
          onBible={() => openSection('read')}
          onDaily={() => openSection('daily')}
          onSaved={() => openSection('bookmarks')}
          onMore={() => setSheet((s) => (s === 'more' ? 'none' : 'more'))}
        />
      )}

      <Sheet
        open={sheet === 'books'}
        title={prefs.language === 'en' ? 'Books' : 'መጻሕፍት'}
        side="left"
        onClose={() => setSheet('none')}
        labelId="books-sheet-title"
        language={prefs.language}
      >
        <BooksSheetBody
          books={books}
          book={showingChapter ? route.book : (books?.books[0]?.nr ?? 1)}
          language={prefs.language}
          onPick={(nr) => openChapter(nr, 1)}
          onOpenRecent={(place) => goTo(place.book, place.chapter, place.verse)}
        />
      </Sheet>

      <Sheet
        open={sheet === 'more'}
        title={prefs.language === 'en' ? 'Reading & Appearance' : 'ማስተካከያና ገጽታ'}
        onClose={() => setSheet('none')}
        language={prefs.language}
      >
        <MoreSheetBody
          route={route}
          translations={translations}
          prefs={prefs}
          setPref={setPref}
          compare={compare}
          memorize={memorize}
          onCompare={setCompare}
          onMemorize={setMemorize}
          wordLookup={wordLookup}
          onWordLookup={setWordLookup}
          onTranslation={(id) => go({ ...route, translation: id })}
          onLanguage={handleLanguage}
          onSearch={openSearch}
          onSaved={() => openSection('bookmarks')}
          onPrayers={() => openSection('prayers')}
          prayerCount={readPrayers().length}
          savedCount={bookmarks.length + highlights.length}
          onGoTo={(text) => {
            const parsed = parseReference(text, referenceBooks)
            if (parsed) goTo(parsed.book, parsed.chapter, parsed.verse, parsed.verseEnd)
            else openSearch(text)
          }}
          onPrint={() => window.print()}
        />
      </Sheet>
    </div>
  )
}
