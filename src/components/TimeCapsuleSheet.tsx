import { useState, useMemo, useEffect, useRef } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import {
  TIME_CAPSULE_ENTRIES,
  type TimeCapsuleEntry,
} from '../timeCapsuleData'

interface Props {
  open: boolean
  onClose: () => void
  initialEntryId?: string
  language?: LanguageMode
  onOpenPassage?: (book: number, chapter: number) => void
}

type TabType = 'scene' | 'metaphor' | 'distortion' | 'truth'

export default function TimeCapsuleSheet({
  open,
  onClose,
  initialEntryId,
  language = 'am',
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'

  const [selectedId, setSelectedId] = useState<string>(
    initialEntryId || TIME_CAPSULE_ENTRIES[0].id
  )
  const [activeTab, setActiveTab] = useState<TabType>('scene')
  const [searchQuery, setSearchQuery] = useState('')
  const [testament, setTestament] = useState<'all' | 'ot' | 'nt'>('all')
  const [copied, setCopied] = useState(false)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const chipContainerRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    if (initialEntryId) {
      setSelectedId(initialEntryId)
    }
  }, [initialEntryId])

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = 0
    }
  }, [open, selectedId])

  const entry: TimeCapsuleEntry = useMemo(() => {
    return (
      TIME_CAPSULE_ENTRIES.find((e) => e.id === selectedId) ||
      TIME_CAPSULE_ENTRIES[0]
    )
  }, [selectedId])

  const filteredEntries = useMemo(() => {
    let list = TIME_CAPSULE_ENTRIES
    if (testament === 'ot') {
      list = list.filter((e) => e.bookNr <= 39)
    } else if (testament === 'nt') {
      list = list.filter((e) => e.bookNr >= 40)
    }

    if (!searchQuery.trim()) return list

    const q = searchQuery.toLowerCase().trim()
    return list.filter((e) => {
      const matchRef =
        e.verseRefAm.toLowerCase().includes(q) ||
        e.verseRefEn.toLowerCase().includes(q)
      const matchTitle =
        e.titleAm.toLowerCase().includes(q) ||
        e.titleEn.toLowerCase().includes(q)
      const matchTag =
        e.taglineAm.toLowerCase().includes(q) ||
        e.taglineEn.toLowerCase().includes(q)
      const matchDistortion =
        e.distortionAm.claim.toLowerCase().includes(q) ||
        e.distortionEn.claim.toLowerCase().includes(q)
      return matchRef || matchTitle || matchTag || matchDistortion
    })
  }, [testament, searchQuery])

  // Auto-scroll selected chip into view
  useEffect(() => {
    if (!chipContainerRef.current) return
    const activeBtn = chipContainerRef.current.querySelector<HTMLElement>(
      '.capsuleSelector__btn.is-active'
    )
    if (activeBtn) {
      activeBtn.scrollIntoView({
        behavior: 'smooth',
        inline: 'center',
        block: 'nearest',
      })
    }
  }, [entry.id, filteredEntries])

  const handleCopyScripture = () => {
    const textToCopy = `${isEn ? entry.verseRefEn : entry.verseRefAm}\n"${isEn ? entry.verseTextEn : entry.verseTextAm}"`
    navigator.clipboard?.writeText(textToCopy).catch(() => {})
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Sheet
      open={open}
      title={isEn ? 'The Generation Time-Capsule' : 'የዘመኑ እውነታና የጥቅስ አውድ'}
      onClose={onClose}
    >
      <div ref={bodyRef} className="capsuleSheetBody">
        {/* Top Control Header: Search & Quick Book Picker */}
        <div className="capsuleHeaderRow">
          <div className="capsuleSearchField">
            <span className="capsuleSearchField__icon">🔍</span>
            <input
              type="text"
              className="capsuleSearchField__input"
              placeholder={
                isEn
                  ? 'Search 66 books or topics (Camel, Law, Tithe)...'
                  : 'ከ66ቱ መጻሕፍት ወይም ርዕስ ፈልግ (ግመል፣ አስራት)...'
              }
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                type="button"
                className="capsuleSearchField__clear"
                onClick={() => setSearchQuery('')}
                aria-label="Clear search"
              >
                ✕
              </button>
            )}
          </div>

          <div className="capsuleJumpPill" title={isEn ? 'Select Book' : 'መጽሐፍ ይምረጡ'}>
            <span className="capsuleJumpPill__icon">{entry.keyIcon}</span>
            <select
              id="capsuleBookSelect"
              className="capsuleJumpPill__select"
              value={entry.id}
              onChange={(e) => {
                setSelectedId(e.target.value)
                setActiveTab('scene')
              }}
              aria-label="Jump to book"
            >
              <optgroup label={isEn ? 'Old Testament (39 Books)' : 'ብሉይ ኪዳን (39 መጻሕፍት)'}>
                {TIME_CAPSULE_ENTRIES.filter((e) => e.bookNr <= 39).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bookNr}. {isEn ? item.verseRefEn : item.verseRefAm}
                  </option>
                ))}
              </optgroup>
              <optgroup label={isEn ? 'New Testament (27 Books)' : 'ሐዲስ ኪዳን (27 መጻሕፍት)'}>
                {TIME_CAPSULE_ENTRIES.filter((e) => e.bookNr >= 40).map((item) => (
                  <option key={item.id} value={item.id}>
                    {item.bookNr}. {isEn ? item.verseRefEn : item.verseRefAm}
                  </option>
                ))}
              </optgroup>
            </select>
            <span className="capsuleJumpPill__arrow">▾</span>
          </div>
        </div>

        {/* Testament Filter Segmented Bar */}
        <div className="capsuleFilterPills">
          <button
            type="button"
            className={`capsuleFilterPill ${testament === 'all' ? 'is-active' : ''}`}
            onClick={() => setTestament('all')}
          >
            {isEn ? 'All (66 Books)' : 'ሁሉም (66 መጻሕፍት)'}
          </button>
          <button
            type="button"
            className={`capsuleFilterPill ${testament === 'ot' ? 'is-active' : ''}`}
            onClick={() => setTestament('ot')}
          >
            {isEn ? 'Old Testament (39)' : 'ብሉይ ኪዳን (39)'}
          </button>
          <button
            type="button"
            className={`capsuleFilterPill ${testament === 'nt' ? 'is-active' : ''}`}
            onClick={() => setTestament('nt')}
          >
            {isEn ? 'New Testament (27)' : 'ሐዲስ ኪዳን (27)'}
          </button>
        </div>

        {/* Horizontal Scrollable Book Chips */}
        <div ref={chipContainerRef} className="capsuleSelector" role="tablist">
          {filteredEntries.map((item) => {
            const isSel = item.id === entry.id
            return (
              <button
                key={item.id}
                type="button"
                className={`capsuleSelector__btn ${isSel ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedId(item.id)
                  setActiveTab('scene')
                }}
              >
                <span className="capsuleSelector__icon">{item.keyIcon}</span>
                <span className="capsuleSelector__label">
                  {isEn ? item.verseRefEn : item.verseRefAm}
                </span>
              </button>
            )
          })}
        </div>

        {/* Hero Header Card */}
        <div className="capsuleHeroCard">
          <div className="capsuleHeroCard__badges">
            <span className="capsuleBadge capsuleBadge--era">
              🏛️ {isEn ? entry.eraEn : entry.eraAm}
            </span>
            <span className="capsuleBadge capsuleBadge--loc">
              📍 {isEn ? entry.locationEn : entry.locationAm}
            </span>
            {entry.yearApprox && (
              <span className="capsuleBadge capsuleBadge--year">
                ⏳ {entry.yearApprox}
              </span>
            )}
          </div>

          <h2 className="capsuleHeroCard__title">
            {isEn ? entry.titleEn : entry.titleAm}
          </h2>
          <p className="capsuleHeroCard__tagline">
            {isEn ? entry.taglineEn : entry.taglineAm}
          </p>

          {/* Scripture Box */}
          <div className="capsuleScriptureBox">
            <div className="capsuleScriptureBox__head">
              <span className="capsuleScriptureBox__ref">
                {isEn ? entry.verseRefEn : entry.verseRefAm}
              </span>
              <button
                type="button"
                className="capsuleScriptureBox__copyBtn"
                onClick={handleCopyScripture}
                title={isEn ? 'Copy Verse' : 'ጥቅሱን ገልብጥ'}
              >
                {copied ? '✓' : '📋'}
              </button>
            </div>
            <blockquote className="capsuleScriptureBox__text">
              {isEn ? entry.verseTextEn : entry.verseTextAm}
            </blockquote>
          </div>
        </div>

        {/* 4 Interactive Lens Tabs (Sticky Under Header) */}
        <nav className="capsuleTabs" aria-label="Lenses">
          <button
            type="button"
            className={`capsuleTabs__btn ${activeTab === 'scene' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('scene')}
          >
            <span className="capsuleTabs__icon">🏛️</span>
            <span>{isEn ? 'The Scene' : 'የዘመኑ ድባብ'}</span>
          </button>

          <button
            type="button"
            className={`capsuleTabs__btn ${activeTab === 'metaphor' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('metaphor')}
          >
            <span className="capsuleTabs__icon">🔍</span>
            <span>{isEn ? 'Why This Picture?' : 'የምሳሌው ሚስጥር'}</span>
          </button>

          <button
            type="button"
            className={`capsuleTabs__btn ${activeTab === 'distortion' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('distortion')}
          >
            <span className="capsuleTabs__icon">⚠️</span>
            <span>{isEn ? 'The Distortion' : 'የተዛባው አረዳድ'}</span>
          </button>

          <button
            type="button"
            className={`capsuleTabs__btn ${activeTab === 'truth' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('truth')}
          >
            <span className="capsuleTabs__icon">✨</span>
            <span>{isEn ? 'Biblical Truth' : 'እውነተኛው አውድ'}</span>
          </button>
        </nav>

        {/* Tab 1: The Scene (በዚያ ዘመን ምን እየተካሄደ ነበር?) */}
        {activeTab === 'scene' && (
          <div className="capsuleContentCard">
            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                🏛️ {isEn ? 'What Was Happening in That Generation?' : 'በዚያ ዘመን በጎዳናው ምን እየተካሄደ ነበር?'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.sceneEn.setting : entry.sceneAm.setting}
              </p>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                🏺 {isEn ? 'Everyday Life & Domestic Reality' : 'የዕለት ተዕለት ኑሮና ልማድ'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.sceneEn.dailyLife : entry.sceneAm.dailyLife}
              </p>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                ⚖️ {isEn ? 'Power Dynamics & Social Tension' : 'የስልጣን ተዋረድና ማህበራዊ ውጥረት'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.sceneEn.socialTension : entry.sceneAm.socialTension}
              </p>
            </div>
          </div>
        )}

        {/* Tab 2: Why This Picture? (ለምን ይህ ምሳሌ ተመረጠ?) */}
        {activeTab === 'metaphor' && (
          <div className="capsuleContentCard">
            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                👁️ {isEn ? 'The Tangible Physical Origin' : 'ምሳሌው የመጣበት ተጨባጭ እውነታ'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.metaphorEn.origin : entry.metaphorAm.origin}
              </p>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                🗣️ {isEn ? 'Ancient Language & Cultural Pun' : 'የቋንቋውና የአረማይክ/ዕብራይስጥ ፈሊጥ'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.metaphorEn.linguisticNuance : entry.metaphorAm.linguisticNuance}
              </p>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                ⚡ {isEn ? 'How the Original Audience Reacted' : 'የአድማጮች ምላሽና ስሜት'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.metaphorEn.crowdReaction : entry.metaphorAm.crowdReaction}
              </p>
            </div>
          </div>
        )}

        {/* Tab 3: The Distortion (በዘመናችን እንዴት ይዛባል?) */}
        {activeTab === 'distortion' && (
          <div className="capsuleContentCard capsuleContentCard--warning">
            <div className="capsuleSection">
              <h3 className="capsuleSection__title capsuleSection__title--alert">
                🚫 {isEn ? 'How It Is Twisted Today' : 'የሐሰት መምህራን ጥቅሱን እንዴት ያዛቡታል?'}
              </h3>
              <div className="capsuleQuoteCallout">
                {isEn ? entry.distortionEn.claim : entry.distortionAm.claim}
              </div>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title capsuleSection__title--alert">
                💔 {isEn ? 'The Spiritual Damage' : 'በምእመናን ላይ የሚያስከትለው መንፈሳዊ ጉዳት'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.distortionEn.damage : entry.distortionAm.damage}
              </p>
            </div>
          </div>
        )}

        {/* Tab 4: Biblical Truth (እውነተኛው አውድ) */}
        {activeTab === 'truth' && (
          <div className="capsuleContentCard capsuleContentCard--truth">
            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                📜 {isEn ? 'What the Entire Passage Actually Teaches' : 'የሙሉው ምዕራፍ እውነተኛ መልእክት'}
              </h3>
              <p className="capsuleSection__body">
                {isEn ? entry.truthEn.contextSummary : entry.truthAm.contextSummary}
              </p>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                📖 {isEn ? 'The Surrounding Guard Verses' : 'እውነቱን የሚያበሩት አጎራባች ጥቅሶች'}
              </h3>
              <div className="capsuleContextBlock">
                {isEn ? entry.truthEn.surroundingVerses : entry.truthAm.surroundingVerses}
              </div>
            </div>

            <div className="capsuleSection">
              <h3 className="capsuleSection__title">
                ⭐ {isEn ? 'The Timeless Principle' : 'ለሕይወታችን ዘላለማዊ መመሪያ'}
              </h3>
              <p className="capsuleSection__body capsuleSection__body--highlight">
                {isEn ? entry.truthEn.timelessPrinciple : entry.truthAm.timelessPrinciple}
              </p>
            </div>
          </div>
        )}

        {/* Scripture Interprets Scripture Cross-References */}
        <div className="capsuleCrossRefs">
          <h4 className="capsuleCrossRefs__title">
            🔗 {isEn ? 'Scripture Interprets Scripture (Balancing Passages)' : 'መጽሐፍ ቅዱስ ራሱን ይተረጉማል (ማመዛዘኛ ጥቅሶች)'}
          </h4>
          <div className="capsuleCrossRefs__list">
            {entry.crossReferences.map((cr, idx) => (
              <div key={idx} className="capsuleCrossRefItem">
                <span className="capsuleCrossRefItem__ref">{cr.ref}</span>
                <span className="capsuleCrossRefItem__note">
                  {isEn ? cr.noteEn : cr.noteAm}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Read Chapter in Bible Action Button */}
        {onOpenPassage && (
          <button
            type="button"
            className="capsuleReadBtn"
            onClick={() => {
              onClose()
              onOpenPassage(entry.bookNr, entry.chapter)
            }}
          >
            <span>
              📖 {isEn ? `Open ${entry.verseRefEn} in Bible` : `${entry.verseRefAm} በመጽሐፍ ቅዱስ አንብብ`}
            </span>
            <span aria-hidden="true">→</span>
          </button>
        )}
      </div>
    </Sheet>
  )
}
