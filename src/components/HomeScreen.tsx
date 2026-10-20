import { useMemo } from 'react'
import MountainHero from './MountainHero'
import { useRecent, type RecentPlace } from '../userdata'
import { useAllBookNames } from './useBookNames'
import type { BooksResponse } from '../types'
import type { LanguageMode } from '../prefs'

interface Props {
  books: BooksResponse | null
  translation?: string
  language?: LanguageMode
  onOpen: (book: number, chapter: number, verse?: number) => void
  onDaily?: () => void
  lastPlace?: { book: number; chapter: number; verse?: number } | null
}

function getGreeting(isEn: boolean): string {
  const hour = new Date().getHours()
  if (isEn) {
    if (hour < 12) return 'Good Morning'
    if (hour < 17) return 'Good Afternoon'
    return 'Good Evening'
  }
  if (hour < 12) return 'እንደምን አደሩ'
  if (hour < 17) return 'እንደምን ዋሉ'
  return 'እንደምን አመሹ'
}

function formatTimeAgo(at: number, isEn: boolean): string {
  const diff = Date.now() - at
  const mins = Math.floor(diff / 60_000)
  if (isEn) {
    if (mins < 2) return 'Just now'
    if (mins < 60) return `${mins}m ago`
    const hrs = Math.floor(mins / 60)
    if (hrs < 24) return `${hrs}h ago`
    const days = Math.floor(hrs / 24)
    if (days === 1) return 'Yesterday'
    if (days < 30) return `${days} days ago`
    return new Date(at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
  }
  if (mins < 2) return 'አሁን'
  if (mins < 60) return `${mins} ደቂቃ በፊት`
  const hrs = Math.floor(mins / 60)
  if (hrs < 24) return `${hrs} ሰዓት በፊት`
  const days = Math.floor(hrs / 24)
  if (days === 1) return 'ትናንት'
  if (days < 30) return `${days} ቀናት በፊት`
  return new Date(at).toLocaleDateString(undefined, { month: 'short', day: 'numeric' })
}

export default function HomeScreen({ books, translation: _translation, language = 'am', onOpen, onDaily, lastPlace }: Props) {
  const recent = useRecent()
  const isEn = language === 'en'
  const greeting = getGreeting(isEn)
  const allNames = useAllBookNames()

  // Resolve book names
  const bookMap = useMemo(() => {
    const map = new Map<number, string>()
    if (books) {
      for (const b of books.books) {
        const bNames = allNames.get(b.nr)
        const name = isEn ? (bNames?.en ?? b.name) : (bNames?.am ?? b.name)
        map.set(b.nr, name)
      }
    }
    return map
  }, [books, isEn, allNames])

  // Current reading position
  const current = lastPlace ?? (recent[0] ? { book: recent[0].book, chapter: recent[0].chapter, verse: recent[0].verse } : { book: 1, chapter: 1, verse: 1 })
  const currentBookName = bookMap.get(current.book) ?? (allNames.get(current.book)?.[isEn ? 'en' : 'am'] ?? (isEn ? `Book ${current.book}` : `መጽሐፍ ${current.book}`))

  // Default suggested readings if recent list is empty
  const defaultRecent: RecentPlace[] = [
    { translation: 'kjv', book: 19, chapter: 23, verse: 1, at: Date.now() - 2 * 86_400_000 },
    { translation: 'kjv', book: 43, chapter: 3, verse: 1, at: Date.now() - 3 * 86_400_000 },
    { translation: 'kjv', book: 20, chapter: 4, verse: 1, at: Date.now() - 5 * 86_400_000 },
  ]

  const displayRecent = recent.length > 0 ? recent.slice(0, 5) : defaultRecent

  return (
    <div className="homeScreen">
      {/* Mountain Hero Banner */}
      <MountainHero className="homeScreen__hero">
        <div className="homeScreen__heroText">
          <h1 className="homeScreen__greeting">{greeting}</h1>
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

      <div className="homeScreen__body">
        {/* Keep Reading Card */}
        <button
          type="button"
          className="homeScreen__keepCard"
          onClick={() => onOpen(current.book, current.chapter, current.verse)}
        >
          <div className="homeScreen__keepIcon" aria-hidden="true">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
              <path d="M6 6h10M6 10h10" />
            </svg>
          </div>
          <div className="homeScreen__keepInfo">
            <span className="homeScreen__keepLabel">{isEn ? 'Keep Reading' : 'ንባብዎን ይቀጥሉ'}</span>
            <span className="homeScreen__keepRef">
              {currentBookName} {current.chapter}:1 – {current.chapter + 1}:4
            </span>
          </div>
          <span className="homeScreen__arrow" aria-hidden="true">›</span>
        </button>

        {/* Recently Read Section */}
        <div className="homeScreen__section">
          <div className="homeScreen__sectionHead">
            <h2 className="homeScreen__sectionTitle">{isEn ? 'Recently Read' : 'በቅርብ የተነበቡ'}</h2>
            <button
              type="button"
              className="homeScreen__seeAll"
              onClick={() => onOpen(current.book, current.chapter)}
            >
              {isEn ? 'See all' : 'ሁሉንም'}
            </button>
          </div>

          <div className="homeScreen__recentList">
            {displayRecent.map((item, index) => {
              const name = bookMap.get(item.book) ?? (allNames.get(item.book)?.[isEn ? 'en' : 'am'] ?? (isEn ? `Book ${item.book}` : `መጽሐፍ ${item.book}`))
              return (
                <button
                  key={`${item.book}-${item.chapter}-${index}`}
                  type="button"
                  className="homeScreen__recentItem"
                  onClick={() => onOpen(item.book, item.chapter, item.verse)}
                >
                  <div className="homeScreen__recentIcon" aria-hidden="true">
                    <span>†</span>
                  </div>
                  <div className="homeScreen__recentInfo">
                    <span className="homeScreen__recentTitle">
                      {name} {item.chapter}
                    </span>
                    <span className="homeScreen__recentTime">
                      {formatTimeAgo(item.at, isEn)}
                    </span>
                  </div>
                  <span className="homeScreen__arrow" aria-hidden="true">›</span>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
