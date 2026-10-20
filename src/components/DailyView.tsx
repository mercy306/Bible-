import { useEffect, useMemo, useState } from 'react'
import { fetchChapter } from '../api'
import MountainHero from './MountainHero'
import { isBookmarked, toggleBookmark, useBookmarks } from '../userdata'
import type { BooksResponse } from '../types'
import type { LanguageMode } from '../prefs'

import { getGreeting } from './GreetingHero'

interface Props {
  books: BooksResponse | null
  translation: string
  language?: LanguageMode
  onOpen: (book: number, chapter: number) => void
  onBack?: () => void
}

function todayIndex() {
  const now = new Date()
  return Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86_400_000,
  )
}

/**
 * Daily Verse Screen matching Screen 5 of The Sixty-Six design mockup:
 * Top: Mountain Hero with back button ←, Daily Verse title, calendar icon 📅
 * Card: Floating white card with Amharic banner, quote, reference, Save button
 * Bottom: Read Chapter dark purple button
 */
export default function DailyView({ books, translation, language = 'am', onOpen, onBack }: Props) {
  const bookmarks = useBookmarks()
  const [amharic, setAmharic] = useState<string | null>(null)
  const [english, setEnglish] = useState<string | null>(null)
  const day = todayIndex()

  const target = useMemo(() => {
    if (!books || books.books.length === 0) return null
    // Psalm 46:10 or day-derived favorite
    const book = books.books.find((b) => b.nr === 19) ?? books.books[0]
    return { book, chapter: 46 }
  }, [books])

  useEffect(() => {
    if (!target) return
    let cancelled = false

    // Fetch primary chapter
    fetchChapter('kjv', target.book.nr, target.chapter)
      .then(async (res) => {
        if (cancelled) return
        const v10 = res.verses.find((v) => v.verse === 10) ?? res.verses[0]
        if (v10) setEnglish(v10.text)

        // Fetch Amharic counterpart
        const amRes = await fetchChapter('am', target.book.nr, target.chapter).catch(() => null)
        if (cancelled || !amRes) return
        const am10 = amRes.verses.find((v) => v.verse === (v10?.verse ?? 1)) ?? amRes.verses[0]
        if (am10) setAmharic(am10.text)
      })
      .catch(() => {})

    return () => {
      cancelled = true
    }
  }, [target, translation, day])

  const isEn = language === 'en'
  const isAm = language === 'am'
  const reference = isEn ? 'Psalm 46:10' : isAm ? 'መዝሙር 46:10' : 'መዝሙር 46:10 (Psalm 46:10)'
  const verseRef = {
    translation,
    book: 19,
    chapter: 46,
    verse: 10,
  }

  const saved = isBookmarked(bookmarks, verseRef)
  const quoteText = english ?? 'Be still, and know that I am God.'
  const amharicText = amharic ?? 'ዕረፉ፥ እኔም አምላክ እንደ ሆንሁ እወቁ፤'

  return (
    <div className="dailyScreen">
      {/* Mountain Hero Header */}
      <MountainHero className="dailyScreen__hero">
        <div className="dailyScreen__topBar">
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

          <h1 className="dailyScreen__title">{isEn ? 'Daily Verse' : 'የዕለቱ ጥቅስ'}</h1>

          <button
            type="button"
            className="dailyScreen__calBtn"
            title={isEn ? "Today's date" : "የዛሬ ቀን"}
            aria-label={isEn ? "Today" : "ዛሬ"}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
          </button>
        </div>

        <div className="homeScreen__heroText" style={{ marginTop: '16px', marginBottom: '8px' }}>
          <h2 className="homeScreen__greeting">{getGreeting(isEn)}</h2>
          <blockquote className="homeScreen__quote">
            {isEn ? '“The Lord is my shepherd; I shall not want.”' : '“እግዚአብሔር እረኛዬ ነው፥ የሚያሳጣኝም የለም።”'}
            <cite className="homeScreen__quoteRef">{isEn ? 'Psalm 23:1' : 'መዝሙር 23:1'}</cite>
          </blockquote>
        </div>
      </MountainHero>

      {/* Floating Scripture Card */}
      <div className="dailyScreen__body">
        <div className="dailyScreen__card">
          {language === 'both' ? (
            <>
              <div className="dailyScreen__amharicBanner" lang="am">
                {amharicText}
              </div>
              <blockquote className="dailyScreen__quote">
                “{quoteText}”
              </blockquote>
            </>
          ) : isEn ? (
            <blockquote className="dailyScreen__quote">
              “{quoteText}”
            </blockquote>
          ) : (
            <blockquote className="dailyScreen__quote" lang="am">
              “{amharicText}”
            </blockquote>
          )}

          <cite className="dailyScreen__ref">{reference}</cite>

          <button
            type="button"
            className={`dailyScreen__saveBtn ${saved ? 'is-saved' : ''}`}
            onClick={() => toggleBookmark(bookmarks, verseRef)}
          >
            <svg viewBox="0 0 24 24" fill={saved ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2" width="18" height="18">
              <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
            </svg>
            <span>{isEn ? (saved ? 'Saved' : 'Save') : (saved ? 'ተቀምጧል' : 'አስቀምጥ')}</span>
          </button>
        </div>

        {/* Read Chapter Button below card */}
        <button
          type="button"
          className="dailyScreen__readBtn"
          onClick={() => onOpen(19, 46)}
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="20" height="20">
            <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
            <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
          </svg>
          <span>{isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'}</span>
        </button>
      </div>
    </div>
  )
}
