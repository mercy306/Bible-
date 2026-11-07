import { useState, useMemo, useEffect, useRef } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import {
  TIME_CAPSULE_ENTRIES,
  type TimeCapsuleEntry,
} from '../timeCapsuleData'
import { findParallelHarmonies } from '../parallelHarmonyData'

interface Props {
  open: boolean
  onClose: () => void
  initialEntryId?: string
  initialTab?: TabType
  language?: LanguageMode
  onOpenPassage?: (book: number, chapter: number) => void
}

export type TabType = 'scene' | 'metaphor' | 'distortion' | 'truth' | 'harmony'

export default function TimeCapsuleSheet({
  open,
  onClose,
  initialEntryId,
  initialTab,
  language = 'am',
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'

  const [selectedId, setSelectedId] = useState<string>(
    initialEntryId || TIME_CAPSULE_ENTRIES[0].id
  )
  const [activeTab, setActiveTab] = useState<TabType>(initialTab || 'scene')

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab)
    }
  }, [initialTab])
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

  const matchingHarmonies = useMemo(() => {
    return findParallelHarmonies(entry.bookNr, entry.chapter, entry.verseStart)
  }, [entry.bookNr, entry.chapter, entry.verseStart])

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
      onBack={onClose}
      language={language}
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

          {/* Parallel Scripture Harmony Spotlight */}
          {matchingHarmonies.length > 0 && (
            <div className="capsuleHarmonyBanner">
              <div className="capsuleHarmonyBanner__left">
                <span className="capsuleHarmonyBanner__icon">🔄</span>
                <div>
                  <strong className="capsuleHarmonyBanner__title">
                    {isEn ? 'Parallel Scripture Harmony Available' : 'የተዛማጅ ክፍሎች ማነጻጸሪያና ውህደት'}
                  </strong>
                  <p className="capsuleHarmonyBanner__desc">
                    {isEn
                      ? 'Compare with parallel accounts to uncover why words differ and stop false teachings.'
                      : 'ይህ ክፍል በሌሎች ወንጌላት/መጻሕፍት እንዴት እንደተጻፈና ለምን አገላለጹ እንደተለያየ ጎን ለጎን አነጻጽር።'}
                  </p>
                </div>
              </div>
              <button
                type="button"
                className="capsuleHarmonyBanner__btn"
                onClick={() => setActiveTab('harmony')}
              >
                <span>{isEn ? 'Compare Side-by-Side' : 'ጎን ለጎን አነጻጽር'}</span>
                <span>→</span>
              </button>
            </div>
          )}
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
            <span>{isEn ? 'Context' : 'እውነታ'}</span>
          </button>

          <button
            type="button"
            className={`capsuleTabs__btn ${activeTab === 'harmony' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('harmony')}
          >
            <span className="capsuleTabs__icon">🔄</span>
            <span>{isEn ? 'Parallels' : 'ተዛማጅ'}</span>
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

        {/* Tab 5: Parallel Scripture Harmony (የተዛማጅ ክፍሎች ማነጻጸሪያና ውህደት) */}
        {activeTab === 'harmony' && (
          <div className="capsuleContentCard">
            {matchingHarmonies.length > 0 ? (
              (() => {
                const h = matchingHarmonies[0]
                return (
                  <div className="harmonyPillars">
                    <div className="harmonyBanner" style={{ margin: 0 }}>
                      <div className="harmonyBanner__badge">
                        ⚖️ {isEn ? 'Scripture Interprets Scripture' : 'መጽሐፍ ቅዱስ ራሱን በራሱ ይተረጉማል'}
                      </div>
                      <h3 className="harmonyBanner__title">
                        {isEn ? h.titleEn : h.titleAm}
                      </h3>
                      <span className="harmonyBanner__category">
                        {isEn ? h.categoryLabelEn : h.categoryLabelAm}
                      </span>
                    </div>

                    {/* Side by Side Comparison Cards */}
                    <div className="harmonyComparison">
                      <div className="harmonyPassageCard harmonyPassageCard--a">
                        <div className="harmonyPassageCard__head">
                          <span className="harmonyPassageCard__ref">
                            {isEn ? h.passageA.refEn : h.passageA.refAm}
                          </span>
                        </div>
                        <p className="harmonyPassageCard__context">
                          👤 {isEn ? h.passageA.writerContextEn : h.passageA.writerContextAm}
                        </p>
                        <blockquote className="harmonyPassageCard__text">
                          «{isEn ? h.passageA.textEn : h.passageA.textAm}»
                        </blockquote>
                        {onOpenPassage && (
                          <button
                            type="button"
                            className="harmonyPassageCard__openBtn"
                            onClick={() => {
                              onClose()
                              onOpenPassage(h.passageA.bookNr, h.passageA.chapter)
                            }}
                          >
                            📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
                          </button>
                        )}
                      </div>

                      <div className="harmonyDivider">
                        <span className="harmonyDivider__icon">⚡</span>
                        <span className="harmonyDivider__label">VS</span>
                      </div>

                      <div className="harmonyPassageCard harmonyPassageCard--b">
                        <div className="harmonyPassageCard__head">
                          <span className="harmonyPassageCard__ref">
                            {isEn ? h.passageB.refEn : h.passageB.refAm}
                          </span>
                        </div>
                        <p className="harmonyPassageCard__context">
                          👤 {isEn ? h.passageB.writerContextEn : h.passageB.writerContextAm}
                        </p>
                        <blockquote className="harmonyPassageCard__text">
                          «{isEn ? h.passageB.textEn : h.passageB.textAm}»
                        </blockquote>
                        {onOpenPassage && (
                          <button
                            type="button"
                            className="harmonyPassageCard__openBtn"
                            onClick={() => {
                              onClose()
                              onOpenPassage(h.passageB.bookNr, h.passageB.chapter)
                            }}
                          >
                            📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
                          </button>
                        )}
                      </div>

                      {h.passageC && (
                        <>
                          <div className="harmonyDivider">
                            <span className="harmonyDivider__icon">➕</span>
                            <span className="harmonyDivider__label">AND</span>
                          </div>
                          <div className="harmonyPassageCard harmonyPassageCard--c">
                            <div className="harmonyPassageCard__head">
                              <span className="harmonyPassageCard__ref">
                                {isEn ? h.passageC.refEn : h.passageC.refAm}
                              </span>
                            </div>
                            <p className="harmonyPassageCard__context">
                              👤 {isEn ? h.passageC.writerContextEn : h.passageC.writerContextAm}
                            </p>
                            <blockquote className="harmonyPassageCard__text">
                              «{isEn ? h.passageC.textEn : h.passageC.textAm}»
                            </blockquote>
                            {onOpenPassage && (
                              <button
                                type="button"
                                className="harmonyPassageCard__openBtn"
                                onClick={() => {
                                  onClose()
                                  onOpenPassage(h.passageC!.bookNr, h.passageC!.chapter)
                                }}
                              >
                                📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
                              </button>
                            )}
                          </div>
                        </>
                      )}
                    </div>

                    {/* 3 Core Harmonization Insights */}
                    <div className="harmonyPillarCard harmonyPillarCard--bridge">
                      <h4 className="harmonyPillarCard__title">
                        🔍 {isEn ? 'Why Did the Words Differ?' : 'ለምን አገላለጹ ተለያየ? (የቋንቋና የታሪክ ልዩነት)'}
                      </h4>
                      <p className="harmonyPillarCard__body">
                        {isEn ? h.whyDiffersEn : h.whyDiffersAm}
                      </p>
                    </div>

                    <div className="harmonyPillarCard harmonyPillarCard--trap">
                      <h4 className="harmonyPillarCard__title harmonyPillarCard__title--alert">
                        ⚠️ {isEn ? 'The False Teaching Trap' : 'የሐሰት መምህራን ወጥመድ (ጥቅሱን ብቻ በመነጠል የሚፈጠር ስህተት)'}
                      </h4>
                      <p className="harmonyPillarCard__body">
                        {isEn ? h.falseTrapEn : h.falseTrapAm}
                      </p>
                    </div>

                    <div className="harmonyPillarCard harmonyPillarCard--truth">
                      <h4 className="harmonyPillarCard__title harmonyPillarCard__title--truth">
                        🛡️ {isEn ? 'The Harmonized Divine Truth' : 'የተዛማጁ እውነተኛ ውህደት (ሁለቱን አንድ ላይ ስናነብ)'}
                      </h4>
                      <p className="harmonyPillarCard__body harmonyPillarCard__body--highlight">
                        {isEn ? h.harmonizedTruthEn : h.harmonizedTruthAm}
                      </p>
                    </div>
                  </div>
                )
              })()
            ) : (
              <div className="harmonyPillars">
                <div className="harmonyBanner" style={{ margin: 0 }}>
                  <div className="harmonyBanner__badge">
                    ⚖️ {isEn ? 'Scripture Interprets Scripture' : 'መጽሐፍ ቅዱስ ራሱን በራሱ ይተረጉማል'}
                  </div>
                  <h3 className="harmonyBanner__title">
                    {isEn ? 'Biblical Balance & Guard Verses' : 'የተዛማጅ ክፍሎች ማመዛዘኛ'}
                  </h3>
                  <p className="harmonyBanner__category">
                    {isEn
                      ? 'No verse should be isolated. Read these complementary scriptures to maintain total doctrinal integrity.'
                      : 'የሐሰት መምህራን አንድ ጥቅስ ብቻ ነጥለው እንዳያሳስቱ ይህንን ክፍል ከእነዚህ አጎራባችና ተዛማጅ ጥቅሶች ጋር አነጻጽር።'}
                  </p>
                </div>

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
            )}
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
