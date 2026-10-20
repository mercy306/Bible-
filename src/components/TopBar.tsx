import { useState, useEffect, useRef, useMemo } from 'react'
import { createPortal } from 'react-dom'
import MountainHero from './MountainHero'
import AmharicKeyboard from './AmharicKeyboard'
import { getGreeting } from './GreetingHero'
import { useBookNames } from './useBookNames'
import { fetchCommentarySearch, fetchSearch } from '../api'
import { parseReference } from '../route'
import { usePrefs, setPref, type LanguageMode } from '../prefs'
import type { Route } from '../route'
import type { CommentarySearchResponse, SearchResponse } from '../types'

interface Props {
  book: number
  chapter: number
  /** Which name leads; the other language follows when both are known. */
  primary: 'am' | 'en'
  view?: Route['view']
  moreOpen: boolean
  language?: LanguageMode
  onLanguage?: (lang: LanguageMode) => void
  onBooks: () => void
  onMore: () => void
  onBack?: () => void
  onDaily?: () => void
  translation?: string
  books?: { nr: number; name: string }[]
  onNavigate?: (book: number, chapter: number, verse?: number) => void
  searchOpen?: boolean
  onToggleSearch?: (open: boolean) => void
  initialQuery?: string
}

/**
 * TopBar matching The Sixty-Six mockup with in-place search:
 * - Search opens right in the top bar without navigating to a new page!
 * - Instant reference jump ("John 3:16", "Genesis 1") & full-text keyword search
 * - Built-in Amharic on-screen Fidel keyboard!
 */
export default function TopBar({
  book,
  chapter,
  primary,
  moreOpen: _moreOpen,
  language,
  onLanguage: _onLanguage,
  onBooks,
  onMore: _onMore,
  onBack: _onBack,
  onDaily,
  translation = 'kjv',
  books = [],
  onNavigate,
  searchOpen,
  onToggleSearch,
  initialQuery = '',
}: Props) {
  const prefs = usePrefs()
  const [internalSearchOpen, setInternalSearchOpen] = useState(false)
  const isSearchOpen = searchOpen !== undefined ? searchOpen : internalSearchOpen
  const setIsSearchOpen = (open: boolean) => {
    if (onToggleSearch) onToggleSearch(open)
    else setInternalSearchOpen(open)
  }

  const [showKeyboard, setShowKeyboard] = useState(false)
  const [query, setQuery] = useState(initialQuery)
  const [scope] = useState<'bible' | 'commentary'>('bible')
  const [results, setResults] = useState<SearchResponse | null>(null)
  const [commentaryResults, setCommentaryResults] = useState<CommentarySearchResponse | null>(null)
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<HTMLInputElement>(null)

  const isEn = language === 'en'
  const isAm = language === 'am'
  const { am, en } = useBookNames(book)
  const lead = isEn
    ? (en ?? am ?? `Book ${book}`)
    : isAm
    ? (am ?? en ?? `Book ${book}`)
    : (am && en ? `${am} (${en})` : (primary === 'am' ? (am ?? en ?? `Book ${book}`) : (en ?? am ?? `Book ${book}`)))

  // Sync initialQuery if provided
  useEffect(() => {
    if (initialQuery) {
      setQuery(initialQuery)
    }
  }, [initialQuery])

  // Focus input and show Amharic keyboard when search opens
  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => inputRef.current?.focus(), 60)
      setShowKeyboard(true)
    } else {
      setQuery('')
      setResults(null)
      setCommentaryResults(null)
      setShowKeyboard(false)
    }
  }, [isSearchOpen])

  // Escape key closes search
  useEffect(() => {
    if (!isSearchOpen) return
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsSearchOpen(false)
    }
    window.addEventListener('keydown', handleKey)
    return () => window.removeEventListener('keydown', handleKey)
  }, [isSearchOpen])

  // Check if query is a direct reference like "John 3:16" or "Genesis 1"
  const parsedRef = useMemo(() => {
    if (!books || books.length === 0 || !query.trim()) return null
    return parseReference(query.trim(), books)
  }, [query, books])

  // Resolve parsed reference label
  const parsedRefName = useMemo(() => {
    if (!parsedRef || !books) return ''
    const b = books.find((x) => x.nr === parsedRef.book)
    return `${b?.name ?? `Book ${parsedRef.book}`} ${parsedRef.chapter}${
      parsedRef.verse ? `:${parsedRef.verse}` : ''
    }`
  }, [parsedRef, books])

  const hasSearchContent = Boolean(
    parsedRef || loading || (query.trim().length >= 2 && (results || commentaryResults))
  )

  // Debounced live search across Bible text or Commentary
  useEffect(() => {
    const q = query.trim()
    if (q.length < 2) {
      setResults(null)
      setCommentaryResults(null)
      setLoading(false)
      return
    }

    setLoading(true)
    const controller = new AbortController()
    const timer = setTimeout(() => {
      if (scope === 'commentary') {
        fetchCommentarySearch(q, controller.signal)
          .then((res) => {
            setCommentaryResults(res)
            setLoading(false)
          })
          .catch((e: Error) => {
            if (e.name !== 'AbortError') setLoading(false)
          })
      } else {
        fetchSearch(translation, q, controller.signal)
          .then((res) => {
            setResults(res)
            setLoading(false)
          })
          .catch((e: Error) => {
            if (e.name !== 'AbortError') setLoading(false)
          })
      }
    }, 250)

    return () => {
      clearTimeout(timer)
      controller.abort()
    }
  }, [query, translation, scope])

  const handleOpenPlace = (b: number, c: number, v?: number) => {
    setIsSearchOpen(false)
    onNavigate?.(b, c, v)
  }

  const handleFormSubmit = () => {
    if (parsedRef) {
      handleOpenPlace(parsedRef.book, parsedRef.chapter, parsedRef.verse)
    } else if (scope === 'commentary' && commentaryResults && commentaryResults.results.length > 0) {
      const first = commentaryResults.results[0]
      handleOpenPlace(first.book, first.chapter)
    } else if (results && results.results.length > 0) {
      const first = results.results[0]
      handleOpenPlace(first.book, first.chapter, first.verse)
    }
  }

  return (
    <header className="topbar topbar--mountain">
      <MountainHero className="topbar__hero">
        {isSearchOpen ? (
        <div className="topbar__searchRow">
          <button
            type="button"
            className="topbar__backBtn"
            onClick={() => setIsSearchOpen(false)}
            aria-label={isEn ? "Close search" : "ፍለጋ ዝጋ"}
            title={isEn ? "Back to reading" : "ወደ ንባብ ተመለስ"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>

          <form
            className="topbar__searchForm"
            onSubmit={(e) => {
              e.preventDefault()
              handleFormSubmit()
            }}
          >
            <svg className="topbar__searchIcon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
              <circle cx="11" cy="11" r="8" />
            </svg>
            <input
              ref={inputRef}
              type="search"
              className="topbar__searchInput"
              placeholder={scope === 'commentary' ? (isEn ? 'Search commentary…' : 'ማብራሪያ ይፈልጉ…') : (isEn ? 'Search words or John 3:16…' : 'ቃል ወይም ዮሐንስ 3:16 ይፈልጉ…')}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onFocus={() => setShowKeyboard(true)}
              aria-label={scope === 'commentary' ? (isEn ? 'Search commentary' : 'ማብራሪያ ይፈልጉ') : (isEn ? 'Search Bible' : 'መጽሐፍ ቅዱስ ይፈልጉ')}
            />
            <button
              type="button"
              className={`topbar__kbToggleBtn ${showKeyboard ? 'is-active' : ''}`}
              onClick={() => setShowKeyboard((prev) => !prev)}
              title={isEn ? "Amharic Keyboard" : "የአማርኛ ኪቦርድ"}
              aria-label={isEn ? "Amharic Keyboard" : "የአማርኛ ኪቦርድ"}
            >
              አማ
            </button>
            {query && (
              <button
                type="button"
                className="topbar__clearBtn"
                onClick={() => {
                  setQuery('')
                  setResults(null)
                  setCommentaryResults(null)
                  inputRef.current?.focus()
                }}
                aria-label={isEn ? "Clear text" : "አጥፋ"}
              >
                ✕
              </button>
            )}
          </form>
        </div>
      ) : (
        <>
          <div className="topbar__mainRow">
            <button
              type="button"
              className="topbar__titleBtn"
              onClick={onBooks}
              title={isEn ? "Choose Book or Chapter" : "መጽሐፍ ወይም ምዕራፍ ይምረጡ"}
            >
              <h1 className="topbar__chapterTitle">{lead} {chapter}</h1>
            </button>

            <div className="topbar__rightActions">
              <button
                type="button"
                className="topbar__actionBtn"
                onClick={() => setIsSearchOpen(true)}
                title={isEn ? "Search Bible" : "መጽሐፍ ቅዱስ ይፈልጉ"}
                aria-label={isEn ? "Search Bible" : "መጽሐፍ ቅዱስ ይፈልጉ"}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <button
                type="button"
                className="topbar__actionBtn"
                onClick={onBooks}
                title={isEn ? "All 66 Books" : "ሁሉም 66 መጻሕፍት"}
                aria-label={isEn ? "All 66 Books" : "ሁሉም 66 መጻሕፍት"}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              </button>

              <button
                type="button"
                className="topbar__actionBtn topbar__themeToggleBtn"
                onClick={() => setPref('theme', prefs.theme === 'bw' || prefs.theme === 'dark' ? 'light' : 'bw')}
                title={prefs.theme === 'bw' || prefs.theme === 'dark' ? (isEn ? "Switch to Green theme" : "ወደ አረንጓዴ ገጽታ ቀይር") : (isEn ? "Switch to Black theme" : "ወደ ጥቁር ገጽታ ቀይር")}
                aria-label={prefs.theme === 'bw' || prefs.theme === 'dark' ? "Switch to Green theme" : "Switch to Black theme"}
              >
                {prefs.theme === 'bw' || prefs.theme === 'dark' ? (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M12 2v20" />
                    <path d="M12 2a10 10 0 0 1 0 20z" fill="currentColor" />
                  </svg>
                )}
              </button>
            </div>
          </div>

          <div className="homeScreen__heroText">
            <h2 className="homeScreen__greeting">{getGreeting(isEn)}</h2>
            <blockquote
              className="homeScreen__quote"
              style={{ cursor: onDaily ? 'pointer' : undefined }}
              onClick={onDaily}
              title={onDaily ? (isEn ? 'Go to Daily Devotional' : 'ወደ ዕለቱ ጥቅስ ይሂዱ') : undefined}
            >
              <div className="homeScreen__quoteText">
                {isEn ? '“The Lord is my shepherd; I shall not want.”' : '“እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።”'}
              </div>
              <cite className="homeScreen__quoteRef">{isEn ? 'PSALM 23:1' : 'መዝሙር 23:1'}</cite>
            </blockquote>
          </div>
        </>
      )}
      </MountainHero>

      {/* In-place search results dropdown - stays right here on the current page! */}
      {isSearchOpen && hasSearchContent && (
        <>
          <div
            className="topbar__searchBackdrop"
            onClick={() => setIsSearchOpen(false)}
          />

          <div className={`topbar__searchDropdown ${showKeyboard ? 'has-keyboard' : ''}`}>
            {parsedRef && (
              <button
                type="button"
                className="topbar__refHit"
                onClick={() => handleOpenPlace(parsedRef.book, parsedRef.chapter, parsedRef.verse)}
              >
                <div className="topbar__refHitIcon" aria-hidden="true">📖</div>
                <div className="topbar__refHitInfo">
                  <span className="topbar__refHitBadge">{isEn ? 'Go directly to' : 'ቀጥታ ይሂዱ ወደ'}</span>
                  <span className="topbar__refHitTitle">{parsedRefName}</span>
                </div>
                <span className="topbar__refHitArrow" aria-hidden="true">›</span>
              </button>
            )}

            {loading && (
              <div className="topbar__searchState">
                <span>{isEn ? 'Searching…' : 'በመፈለግ ላይ…'}</span>
              </div>
            )}

            {!loading && scope === 'bible' && results && results.results.length === 0 && !parsedRef && query.trim().length >= 2 && (
              <div className="topbar__searchState">
                <span>{isEn ? `No matches found for “${results.query}”` : `ምንም የተገኘ ውጤት የለም “${results.query}”`}</span>
              </div>
            )}

            {!loading && scope === 'commentary' && commentaryResults && commentaryResults.results.length === 0 && query.trim().length >= 2 && (
              <div className="topbar__searchState">
                <span>{isEn ? `No commentary found for “${commentaryResults.query}”` : `ምንም የተገኘ ማብራሪያ የለም “${commentaryResults.query}”`}</span>
              </div>
            )}

            {scope === 'bible' && results && results.results.length > 0 && (
              <div className="topbar__searchHits">
                <div className="topbar__searchHitsHeader">
                  <span>{results.total.toLocaleString()} {isEn ? 'verses found' : 'ጥቅሶች ተገኝተዋል'}</span>
                </div>
                <div className="topbar__searchHitsList">
                  {results.results.map((hit, index) => (
                    <button
                      key={`${hit.book}-${hit.chapter}-${hit.verse}-${index}`}
                      type="button"
                      className="topbar__hitItem"
                      onClick={() => handleOpenPlace(hit.book, hit.chapter, hit.verse)}
                    >
                      <div className="topbar__hitHead">
                        <span className="topbar__hitRef">{hit.reference}</span>
                        <span className="topbar__hitArrow" aria-hidden="true">›</span>
                      </div>
                      <p
                        className="topbar__hitText"
                        dangerouslySetInnerHTML={{ __html: hit.snippet }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {scope === 'commentary' && commentaryResults && commentaryResults.results.length > 0 && (
              <div className="topbar__searchHits">
                <div className="topbar__searchHitsHeader">
                  <span>{commentaryResults.total.toLocaleString()} {isEn ? 'commentary entries found' : 'የማብራሪያ ክፍሎች ተገኝተዋል'}</span>
                </div>
                <div className="topbar__searchHitsList">
                  {commentaryResults.results.map((hit, index) => (
                    <button
                      key={`${hit.book}-${hit.chapter}-${index}`}
                      type="button"
                      className="topbar__hitItem"
                      onClick={() => handleOpenPlace(hit.book, hit.chapter)}
                    >
                      <div className="topbar__hitHead">
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                          <span className="topbar__hitRef">{hit.reference}</span>
                          <span className="topbar__hitBadge">{isEn ? 'Commentary' : 'ማብራሪያ'}</span>
                        </div>
                        <span className="topbar__hitArrow" aria-hidden="true">›</span>
                      </div>
                      <p
                        className="topbar__hitText"
                        dangerouslySetInnerHTML={{ __html: hit.snippet }}
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </>
      )}

      {isSearchOpen && showKeyboard && typeof document !== 'undefined' && createPortal(
        <AmharicKeyboard
          onInsert={(char) => {
            setQuery((prev) => prev + char)
            inputRef.current?.focus()
          }}
          onBackspace={() => {
            setQuery((prev) => prev.slice(0, -1))
            inputRef.current?.focus()
          }}
          onClose={() => setShowKeyboard(false)}
        />,
        document.body
      )}
    </header>
  )
}
