import { useState } from 'react'
import MountainHero from './MountainHero'
import { getGreeting } from './GreetingHero'
import {
  PRAYER_CATEGORIES,
  removePrayer,
  setAnswered,
  usePrayers,
  type PrayerCategory,
} from '../journal'

import type { LanguageMode } from '../prefs'

type Filter = 'all' | 'open' | 'answered' | PrayerCategory

interface Props {
  language?: LanguageMode
  onDaily?: () => void
  onBack?: () => void
}

const CATEGORY_NAMES_AM: Record<string, string> = {
  praise: 'ምስጋና',
  petition: 'ልመና',
  confession: 'ንስሐ',
  thanksgiving: 'ምስጋና',
  intercession: 'ምልጃ',
}

function when(at: number, isEn: boolean) {
  const days = Math.floor((Date.now() - at) / 86_400_000)
  if (isEn) {
    if (days <= 0) return 'today'
    if (days === 1) return 'yesterday'
    if (days < 30) return `${days} days ago`
    return new Date(at).toLocaleDateString()
  }
  if (days <= 0) return 'ዛሬ'
  if (days === 1) return 'ትናንት'
  if (days < 30) return `${days} ቀናት በፊት`
  return new Date(at).toLocaleDateString()
}

/**
 * Prayers the reader has written down. Everything stays on the device; nothing
 * here is shared or uploaded.
 */
export default function PrayerJournal({ language = 'am', onDaily, onBack }: Props) {
  const isEn = language === 'en'
  const prayers = usePrayers()
  const [filter, setFilter] = useState<Filter>('all')

  const shown = prayers.filter((p) => {
    if (filter === 'all') return true
    if (filter === 'open') return !p.answered
    if (filter === 'answered') return p.answered
    return p.category === filter
  })

  const open = prayers.filter((p) => !p.answered).length

  return (
    <section className="journal">
      <MountainHero className="dailyScreen__hero" style={{ margin: '-16px -16px 20px -16px' }}>
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

          <h1 className="dailyScreen__title">{isEn ? 'Prayer Journal' : 'የጸሎት ማስታወሻ'}</h1>

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
      <p className="journal__note">
        {prayers.length === 0
          ? (isEn ? 'Nothing written yet. A prayer started on the Daily page is kept here.' : 'እስካሁን ምንም አልተጻፈም። በዕለቱ ገጽ ላይ የተጀመረ ጸሎት እዚህ ይቀመጣል።')
          : (isEn ? `${prayers.length} kept, ${open} still open.` : `${prayers.length} ተቀምጠዋል፣ ${open} ክፍት ናቸው።`)}{' '}
        {isEn ? 'Kept on this device only.' : 'በዚህ መሣሪያ ላይ ብቻ ይቀመጣል።'}
      </p>

      <div className="collections" role="group" aria-label="Filter prayers">
        {(
          [
            ['all', isEn ? `All ${prayers.length}` : `ሁሉም ${prayers.length}`],
            ['open', isEn ? `Open ${open}` : `ክፍት ${open}`],
            ['answered', isEn ? `Answered ${prayers.length - open}` : `የተመለሱ ${prayers.length - open}`],
            ...PRAYER_CATEGORIES.map((c) => [
              c,
              `${isEn ? c : (CATEGORY_NAMES_AM[c] ?? c)} ${prayers.filter((p) => p.category === c).length}`,
            ]),
          ] as [Filter, string][]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`chip chip--sm ${filter === id ? 'is-active' : ''}`}
            onClick={() => setFilter(id)}
            aria-pressed={filter === id}
          >
            {label}
          </button>
        ))}
      </div>

      {shown.length === 0 && (
        <p className="notice">
          {prayers.length === 0
            ? (isEn ? 'No prayers yet.' : 'ምንም ጸሎት የለም።')
            : (isEn ? 'Nothing here. Try another filter.' : 'ምንም አልተገኘም። ሌላ ማጣሪያ ይሞክሩ።')}
        </p>
      )}

      <ul className="journal__list">
        {shown.map((prayer) => (
          <li
            key={prayer.id}
            className={`journal__item ${prayer.answered ? 'is-answered' : ''}`}
          >
            <p className="journal__meta">
              <span className="journal__cat">{isEn ? prayer.category : (CATEGORY_NAMES_AM[prayer.category] ?? prayer.category)}</span>
              <span>{when(prayer.created, isEn)}</span>
            </p>

            <p className="journal__text">{prayer.text}</p>

            {prayer.answered && prayer.answeredAt && (
              <p className="journal__answered">{isEn ? `Answered · ${when(prayer.answeredAt, isEn)}` : `ተመልሷል · ${when(prayer.answeredAt, isEn)}`}</p>
            )}

            <div className="journal__tools">
              <button
                type="button"
                className={`chip chip--sm ${prayer.answered ? 'is-active' : ''}`}
                onClick={() => setAnswered(prayer.id, !prayer.answered)}
                aria-pressed={prayer.answered}
              >
                {prayer.answered ? (isEn ? 'Answered ✓' : 'ተመልሷል ✓') : (isEn ? 'Mark answered' : 'ተመልሷል በል')}
              </button>
              <button
                type="button"
                className="chip chip--sm"
                onClick={() => removePrayer(prayer.id)}
              >
                {isEn ? 'Remove' : 'አስወግድ'}
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}