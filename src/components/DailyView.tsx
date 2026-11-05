import { useEffect, useMemo, useState } from 'react'
import { fetchChapter } from '../api'
import MountainHero from './MountainHero'
import ReadingPlanView from './ReadingPlanView'
import { isBookmarked, toggleBookmark, useBookmarks } from '../userdata'
import { useReadingPlan, formatPlanChapterRange } from '../readingPlan'
import type { BooksResponse } from '../types'
import type { LanguageMode } from '../prefs'
import { getGreeting } from './GreetingHero'

interface Props {
  books: BooksResponse | null
  translation: string
  language?: LanguageMode
  initialTab?: 'verse' | 'plan'
  onOpen: (book: number, chapter: number) => void
  onBack?: () => void
  onSaga?: () => void
}

function todayIndex() {
  const now = new Date()
  return Math.floor(
    Date.UTC(now.getFullYear(), now.getMonth(), now.getDate()) / 86_400_000,
  )
}

/**
 * Daily Screen:
 * Top: Segmented switch between Daily Verse and Reading Plan
 * Tab 1: Daily Verse (Mountain Hero, Amharic banner, quote, save, read button)
 * Tab 2: Reading Plan (Visual progress ring, streak, today's chapters, full schedule)
 */
export default function DailyView({
  books,
  translation,
  language = 'am',
  initialTab = 'verse',
  onOpen,
  onBack,
  onSaga,
}: Props) {
  const [tab, setTab] = useState<'verse' | 'plan'>(initialTab)

  useEffect(() => {
    if (initialTab) setTab(initialTab)
  }, [initialTab])

  const bookmarks = useBookmarks()
  const planInfo = useReadingPlan()
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

  const todayPlanRange = useMemo(() => {
    if (!planInfo.todayDayData) return ''
    return formatPlanChapterRange(planInfo.todayDayData.chapters, isEn ? 'en' : 'am')
  }, [planInfo.todayDayData, isEn])

  return (
    <div className="dailyScreen">
      {/* Top Segmented Tab Switch */}
      <div className="dailyScreen__tabBarWrap">
        <div className="dailyScreen__tabBar" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={tab === 'verse'}
            className={`dailyScreen__tabBtn ${tab === 'verse' ? 'is-active' : ''}`}
            onClick={() => setTab('verse')}
          >
            <span className="dailyScreen__tabBtnIcon">☀️</span>
            <span>{isEn ? 'Daily Verse' : 'የዕለቱ ጥቅስ'}</span>
          </button>

          <button
            type="button"
            role="tab"
            aria-selected={tab === 'plan'}
            className={`dailyScreen__tabBtn ${tab === 'plan' ? 'is-active' : ''}`}
            onClick={() => setTab('plan')}
          >
            <span className="dailyScreen__tabBtnIcon">📊</span>
            <span>{isEn ? 'Reading Plan' : 'የንባብ እቅድ'}</span>
            {planInfo.streak.currentStreak > 0 && (
              <span className="dailyScreen__streakPill">
                🔥 {planInfo.streak.currentStreak}
              </span>
            )}
          </button>
        </div>
      </div>

      {tab === 'plan' ? (
        <ReadingPlanView
          language={language}
          onOpenChapter={onOpen}
          onBack={onBack}
        />
      ) : (
        <>
          {/* Mountain Hero Header */}
          <MountainHero className="dailyScreen__hero">
            <div className="dailyScreen__topBar">
              {onBack && (
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
              )}

              <h1 className="dailyScreen__title">{isEn ? 'Daily Verse' : 'የዕለቱ ጥቅስ'}</h1>

              <button
                type="button"
                className="dailyScreen__calBtn"
                onClick={() => setTab('plan')}
                title={isEn ? "Reading Plan" : "የንባብ እቅድ"}
                aria-label={isEn ? "Reading Plan" : "የንባብ እቅድ"}
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

            {/* Reading Plan Teaser Card */}
            <div className="dailyScreen__planTeaser" onClick={() => setTab('plan')}>
              <div className="dailyScreen__planTeaserLeft">
                <div className="dailyScreen__planTeaserIcon">
                  {planInfo.isTodayDone ? '🎉' : '📖'}
                </div>
                <div className="dailyScreen__planTeaserText">
                  <div className="dailyScreen__planTeaserTitle">
                    {isEn ? "Today's Reading Plan" : "የዕለቱ የንባብ እቅድ"}
                  </div>
                  <div className="dailyScreen__planTeaserSub">
                    {todayPlanRange || (isEn ? 'View Plan' : 'እቅዱን ይመልከቱ')} • {planInfo.planCompletedPercent}% {isEn ? 'done' : 'ተጠናቋል'}
                  </div>
                </div>
              </div>

              <div className="dailyScreen__planTeaserAction">
                <span>{isEn ? 'Open' : 'ክፈት'}</span>
                <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                  <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                </svg>
              </div>
            </div>

            {/* Epic Chronological Saga Teaser Card */}
            {onSaga && (
              <div className="dailyScreen__planTeaser dailyScreen__sagaTeaser" onClick={onSaga}>
                <div className="dailyScreen__planTeaserLeft">
                  <div className="dailyScreen__planTeaserIcon dailyScreen__planTeaserIcon--gold">
                    👑
                  </div>
                  <div className="dailyScreen__planTeaserText">
                    <div className="dailyScreen__planTeaserTitle">
                      {isEn ? "Epic Chronological Saga" : "የዘመን ታሪክ ቅደም ተከተል"}
                    </div>
                    <div className="dailyScreen__planTeaserSub">
                      {isEn ? "5 Epic Acts • 66 Books Harmonized" : "5 ታላላቅ ክፍሎች • 66ቱ መጻሕፍት"}
                    </div>
                  </div>
                </div>

                <div className="dailyScreen__planTeaserAction">
                  <span>{isEn ? 'Explore' : 'ተመልከት'}</span>
                  <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                    <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  )
}
