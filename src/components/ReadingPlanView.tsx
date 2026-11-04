import { useState, useMemo } from 'react'
import {
  useReadingPlan,
  PLAN_LIST,
  setActivePlan,
  toggleChapterRead,
  markDayRead,
  resetPlanStartDate,
  formatPlanChapterRange,
  BOOK_BY_NR,
  type PlanChapter,
} from '../readingPlan'
import type { LanguageMode } from '../prefs'

interface Props {
  language?: LanguageMode
  onOpenChapter: (book: number, chapter: number) => void
  onBack?: () => void
}

export default function ReadingPlanView({
  language = 'am',
  onOpenChapter,
  onBack,
}: Props) {
  const isEn = language === 'en'
  const planInfo = useReadingPlan()
  const {
    plan,
    completedChaptersCount,
    totalChaptersInPlan,
    planCompletedPercent,
    bibleCompletedPercent,
    totalBibleChaptersRead,
    currentDay,
    todayDayData,
    todayChaptersCompletedCount,
    isTodayDone,
    streak,
    isChapterDone,
  } = planInfo

  const [filterMode, setFilterMode] = useState<'all' | 'remaining'>('all')
  const [showPlanSwitcher, setShowPlanSwitcher] = useState(false)
  const [confirmReset, setConfirmReset] = useState(false)

  // Format today's range
  const todayRange = useMemo(() => {
    if (!todayDayData) return ''
    return formatPlanChapterRange(todayDayData.chapters, isEn ? 'en' : 'am')
  }, [todayDayData, isEn])

  // Filter days
  const displayedDays = useMemo(() => {
    if (filterMode === 'all') return plan.days
    return plan.days.filter((d) => {
      const allRead = d.chapters.every((c) => isChapterDone(c.book, c.chapter))
      return !allRead
    })
  }, [plan.days, filterMode, isChapterDone])

  const handleOpen = (c: PlanChapter) => {
    onOpenChapter(c.book, c.chapter)
  }

  return (
    <div className="planScreen">
      {/* Top Header */}
      <div className="planScreen__header">
        {onBack && (
          <button
            type="button"
            className="planScreen__backBtn"
            onClick={onBack}
            aria-label={isEn ? 'Back to Bible' : 'ወደ መጽሐፍ ተመለስ'}
            title={isEn ? 'Back to Bible' : 'ወደ መጽሐፍ ተመለስ'}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="planScreen__headerTitles">
          <h1 className="planScreen__title">
            {isEn ? 'Bible Reading Plan' : 'የመጽሐፍ ቅዱስ ንባብ እቅድ'}
          </h1>
          <span className="planScreen__subTitle">
            {isEn ? plan.titleEn : plan.titleAm}
          </span>
        </div>

        <button
          type="button"
          className="planScreen__planSwitchBtn"
          onClick={() => setShowPlanSwitcher((s) => !s)}
          title={isEn ? 'Switch Reading Plan' : 'እቅድ ቀይር'}
          aria-label={isEn ? 'Switch Reading Plan' : 'እቅድ ቀይር'}
        >
          <span className="planScreen__planIcon">{plan.icon}</span>
          <span className="planScreen__planSwitchLabel">{isEn ? 'Change' : 'ቀይር'}</span>
          <svg viewBox="0 0 20 20" fill="currentColor" width="14" height="14">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>
      </div>

      {/* Plan Switcher Dropdown Modal */}
      {showPlanSwitcher && (
        <div className="planSwitcherModal">
          <div className="planSwitcherModal__backdrop" onClick={() => setShowPlanSwitcher(false)} />
          <div className="planSwitcherModal__panel">
            <div className="planSwitcherModal__header">
              <h3>{isEn ? 'Select a Reading Plan' : 'የንባብ እቅድ ይምረጡ'}</h3>
              <button
                type="button"
                className="planSwitcherModal__close"
                onClick={() => setShowPlanSwitcher(false)}
              >
                ✕
              </button>
            </div>
            <div className="planSwitcherModal__list">
              {PLAN_LIST.map((p) => {
                const isActive = p.id === plan.id
                return (
                  <button
                    key={p.id}
                    type="button"
                    className={`planOptionCard ${isActive ? 'is-active' : ''}`}
                    onClick={() => {
                      setActivePlan(p.id)
                      setShowPlanSwitcher(false)
                    }}
                  >
                    <div className="planOptionCard__icon">{p.icon}</div>
                    <div className="planOptionCard__text">
                      <div className="planOptionCard__title">
                        {isEn ? p.titleEn : p.titleAm}
                        {isActive && <span className="planOptionCard__activeBadge">{isEn ? 'Active' : 'የተመረጠ'}</span>}
                      </div>
                      <div className="planOptionCard__desc">
                        {isEn ? p.descEn : p.descAm}
                      </div>
                      <div className="planOptionCard__meta">
                        <span>{p.totalDays} {isEn ? 'days' : 'ቀናት'}</span> • <span>{p.totalChapters} {isEn ? 'chapters' : 'ምዕራፎች'}</span>
                      </div>
                    </div>
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      )}

      {/* Hero Progress Card */}
      <div className="planHeroCard">
        <div className="planHeroCard__top">
          <div className="planHeroCard__info">
            <span className="planHeroCard__badge">
              {isEn ? `Day ${currentDay} of ${plan.totalDays}` : `ቀን ${currentDay} ከ ${plan.totalDays}`}
            </span>
            <h2 className="planHeroCard__planName">
              {isEn ? plan.titleEn : plan.titleAm}
            </h2>
            <p className="planHeroCard__planDesc">
              {completedChaptersCount} {isEn ? 'of' : 'ከ'} {totalChaptersInPlan} {isEn ? 'chapters read' : 'ምዕራፎች ተነበዋል'}
            </p>
          </div>

          <div className="planHeroCard__percentBox">
            <div className="planProgressRing">
              <svg viewBox="0 0 80 80" width="80" height="80">
                <circle
                  className="planProgressRing__bg"
                  cx="40"
                  cy="40"
                  r="34"
                  strokeWidth="7"
                />
                <circle
                  className="planProgressRing__fill"
                  cx="40"
                  cy="40"
                  r="34"
                  strokeWidth="7"
                  strokeDasharray={213.6}
                  strokeDashoffset={213.6 - (213.6 * planCompletedPercent) / 100}
                />
              </svg>
              <div className="planProgressRing__label">
                <span className="planProgressRing__num">{planCompletedPercent}%</span>
              </div>
            </div>
          </div>
        </div>

        {/* Linear Progress Bar */}
        <div className="planHeroCard__barWrap">
          <div
            className="planHeroCard__barFill"
            style={{ width: `${Math.min(100, Math.max(0, planCompletedPercent))}%` }}
          />
        </div>

        {/* Quick Stats Grid */}
        <div className="planHeroCard__stats">
          <div className="planStatItem">
            <span className="planStatItem__icon">🔥</span>
            <div className="planStatItem__text">
              <span className="planStatItem__val">
                {streak.currentStreak} {isEn ? 'days' : 'ቀናት'}
              </span>
              <span className="planStatItem__lbl">
                {isEn ? 'Streak' : 'ተከታታይ ንባብ'} ({isEn ? 'Best' : 'ምርጥ'}: {streak.bestStreak})
              </span>
            </div>
          </div>

          <div className="planStatItem">
            <span className="planStatItem__icon">📖</span>
            <div className="planStatItem__text">
              <span className="planStatItem__val">
                {totalBibleChaptersRead} / 1,189
              </span>
              <span className="planStatItem__lbl">
                {isEn ? 'Total Bible' : 'መላው መጽሐፍ'} ({bibleCompletedPercent}%)
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Today's Reading Section */}
      {todayDayData && (
        <div className="planTodaySection">
          <div className="planTodaySection__header">
            <div className="planTodaySection__titleCol">
              <span className="planTodaySection__tag">
                {isEn ? "TODAY'S READING" : "የዛሬ ንባብ"}
              </span>
              <h3 className="planTodaySection__title">
                {todayRange}
              </h3>
            </div>

            <div className="planTodaySection__count">
              {todayChaptersCompletedCount} / {todayDayData.chapters.length} {isEn ? 'done' : 'ተጠናቋል'}
            </div>
          </div>

          {isTodayDone && (
            <div className="planTodayDoneBanner">
              <span className="planTodayDoneBanner__icon">🎉</span>
              <span>
                {isEn
                  ? "Great job! You've finished all assigned chapters for today."
                  : 'እንኳን ደስ አለዎት! የዛሬውን የንባብ ድርሻዎን አጠናቀዋል። ቃል በልብዎ ይኑር!'}
              </span>
            </div>
          )}

          <div className="planTodayChaptersList">
            {todayDayData.chapters.map((c) => {
              const done = isChapterDone(c.book, c.chapter)
              const bookMeta = BOOK_BY_NR.get(c.book)
              const bookTitle = isEn ? (bookMeta?.en ?? 'Book') : (bookMeta?.am ?? 'መጽሐፍ')

              return (
                <div
                  key={`${c.book}:${c.chapter}`}
                  className={`planTodayChapterCard ${done ? 'is-completed' : ''}`}
                >
                  <button
                    type="button"
                    className={`planCheckBtn ${done ? 'is-checked' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleChapterRead(c.book, c.chapter)
                    }}
                    aria-label={
                      done
                        ? (isEn ? 'Mark as unread' : 'አልተነበበም በል')
                        : (isEn ? 'Mark as read' : 'እንደተነበበ ምልክት አድርግ')
                    }
                    title={
                      done
                        ? (isEn ? 'Mark as unread' : 'አልተነበበም በል')
                        : (isEn ? 'Mark as read' : 'እንደተነበበ ምልክት አድርግ')
                    }
                  >
                    {done ? '✓' : ''}
                  </button>

                  <div className="planTodayChapterCard__info" onClick={() => handleOpen(c)}>
                    <div className="planTodayChapterCard__name">
                      {bookTitle} {isEn ? `Chapter ${c.chapter}` : `ምዕራፍ ${c.chapter}`}
                    </div>
                    <div className="planTodayChapterCard__status">
                      {done
                        ? (isEn ? 'Completed' : 'ተነቧል')
                        : (isEn ? 'Tap to start reading' : 'ለማንበብ ይንኩ')}
                    </div>
                  </div>

                  <button
                    type="button"
                    className="planTodayChapterCard__readBtn"
                    onClick={() => handleOpen(c)}
                  >
                    <span>{isEn ? 'Read' : 'አንብብ'}</span>
                    <svg viewBox="0 0 20 20" fill="currentColor" width="16" height="16">
                      <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clipRule="evenodd" />
                    </svg>
                  </button>
                </div>
              )
            })}
          </div>

          {/* Quick Mark All Today Button */}
          {!isTodayDone && todayDayData.chapters.length > 1 && (
            <button
              type="button"
              className="planMarkAllBtn"
              onClick={() => markDayRead(plan.id, currentDay, true)}
            >
              <span>✓ {isEn ? "Mark All Today's Chapters Read" : 'የዛሬውን ሁሉ እንደተነበበ ምልክት አድርግ'}</span>
            </button>
          )}
        </div>
      )}

      {/* Schedule by Days */}
      <div className="planDaysSection">
        <div className="planDaysSection__header">
          <h3 className="planDaysSection__title">
            {isEn ? 'Full Schedule' : 'የቀናት ዝርዝር መርሃግብር'}
          </h3>

          <div className="planDaysFilterTabs">
            <button
              type="button"
              className={`planFilterTab ${filterMode === 'all' ? 'is-active' : ''}`}
              onClick={() => setFilterMode('all')}
            >
              {isEn ? 'All Days' : 'ሁሉም ቀናት'} ({plan.totalDays})
            </button>
            <button
              type="button"
              className={`planFilterTab ${filterMode === 'remaining' ? 'is-active' : ''}`}
              onClick={() => setFilterMode('remaining')}
            >
              {isEn ? 'Remaining' : 'ያልተጠናቀቁ'}
            </button>
          </div>
        </div>

        <div className="planDaysList">
          {displayedDays.map((d) => {
            const isToday = d.day === currentDay
            const allDone = d.chapters.every((c) => isChapterDone(c.book, c.chapter))
            const doneCount = d.chapters.filter((c) => isChapterDone(c.book, c.chapter)).length
            const range = formatPlanChapterRange(d.chapters, isEn ? 'en' : 'am')

            return (
              <div
                key={d.day}
                className={`planDayRow ${isToday ? 'is-today' : ''} ${allDone ? 'is-all-done' : ''}`}
              >
                <div className="planDayRow__left">
                  <div className="planDayRow__dayNum">
                    {isEn ? `Day ${d.day}` : `ቀን ${d.day}`}
                    {isToday && <span className="planDayRow__todayPill">{isEn ? 'Today' : 'ዛሬ'}</span>}
                  </div>
                  <div className="planDayRow__range">{range}</div>
                  <div className="planDayRow__chips">
                    {d.chapters.map((c) => {
                      const cDone = isChapterDone(c.book, c.chapter)
                      const b = BOOK_BY_NR.get(c.book)
                      const name = isEn ? (b?.en ?? '') : (b?.am ?? '')
                      return (
                        <button
                          key={`${c.book}:${c.chapter}`}
                          type="button"
                          className={`planChapterChip ${cDone ? 'is-done' : ''}`}
                          onClick={() => handleOpen(c)}
                          title={isEn ? `Read ${name} ${c.chapter}` : `${name} ${c.chapter}ን አንብብ`}
                        >
                          {cDone ? '✓ ' : ''}{name} {c.chapter}
                        </button>
                      )
                    })}
                  </div>
                </div>

                <div className="planDayRow__right">
                  <button
                    type="button"
                    className={`planDayRow__toggleBtn ${allDone ? 'is-done' : ''}`}
                    onClick={(e) => {
                      e.stopPropagation()
                      markDayRead(plan.id, d.day, !allDone)
                    }}
                    title={
                      allDone
                        ? (isEn ? 'Mark day incomplete' : 'ያልተጠናቀቀ አድርግ')
                        : (isEn ? 'Mark day completed' : 'ቀኑን እንደተጠናቀቀ ምልክት አድርግ')
                    }
                  >
                    {allDone
                      ? '✓'
                      : `${doneCount}/${d.chapters.length}`}
                  </button>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Plan Management Footer */}
      <div className="planFooterSettings">
        <button
          type="button"
          className="planResetBtn"
          onClick={() => {
            if (confirmReset) {
              resetPlanStartDate()
              setConfirmReset(false)
            } else {
              setConfirmReset(true)
            }
          }}
        >
          {confirmReset
            ? (isEn ? '⚠️ Confirm: Restart plan from Day 1 today?' : '⚠️ አረጋግጥ: እቅዱን ከቀን 1 እንደገና ጀምር?')
            : (isEn ? '🔄 Restart Plan from Today' : '🔄 እቅዱን ከዛሬ ጀምር')}
        </button>
      </div>
    </div>
  )
}
