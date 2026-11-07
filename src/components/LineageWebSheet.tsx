import { useState, useMemo } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import {
  LINEAGE_PEOPLE,
} from '../lineageData'
import {
  NOAH_SONS_DATA,
  ISRAEL_TRIBES_DATA,
  DIASPORA_DISCOVERY_SUMMARY,
} from '../nationsTribesData'
import '../lineageWeb.css'

interface Props {
  open: boolean
  onClose: () => void
  initialPersonId?: string
  language?: LanguageMode
  onOpenPassage?: (book: number, chapter: number) => void
}

type TabMode = 'tree' | 'nations_tribes'
type NationsSubTab = 'tribes' | 'noah' | 'diaspora'

export default function LineageWebSheet({
  open,
  onClose,
  initialPersonId,
  language = 'am',
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'
  const [activeTab, setActiveTab] = useState<TabMode>('tree')
  const [nationsSubTab, setNationsSubTab] = useState<NationsSubTab>('tribes')
  const [tribeFilter, setTribeFilter] = useState<'all' | 'southern' | 'northern'>('all')
  const [expandedTribes, setExpandedTribes] = useState<Record<string, boolean>>({})
  const [expandedNoah, setExpandedNoah] = useState<Record<string, boolean>>({})
  const [activePersonId, setActivePersonId] = useState<string>(initialPersonId || 'adam')
  const [history, setHistory] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')

  const activePerson = LINEAGE_PEOPLE[activePersonId] || LINEAGE_PEOPLE['adam']

  // Search results
  const searchResults = useMemo(() => {
    const q = searchQuery.trim().toLowerCase()
    if (!q) return []
    return Object.values(LINEAGE_PEOPLE).filter(
      (p) =>
        p.nameEn.toLowerCase().includes(q) ||
        p.nameAm.includes(q) ||
        p.culturalBadgeEn.toLowerCase().includes(q) ||
        p.culturalBadgeAm.includes(q)
    )
  }, [searchQuery])

  const selectPerson = (id: string) => {
    if (LINEAGE_PEOPLE[id]) {
      if (id !== activePersonId) {
        setHistory((prev) => [...prev, activePersonId])
      }
      setActivePersonId(id)
      setActiveTab('tree')
      setSearchQuery('')
    }
  }

  const handleBack = () => {
    if (history.length > 0) {
      const prevId = history[history.length - 1]
      setHistory((prev) => prev.slice(0, -1))
      setActivePersonId(prevId)
    } else {
      onClose()
    }
  }

  return (
    <Sheet
      open={open}
      title={isEn ? 'Genealogical & Cultural Lineage Web' : 'የትውልድ ሐረግና የባህል ትሥሥር'}
      onClose={onClose}
      onBack={handleBack}
      language={language}
    >
      <div className="sheet__body lineageSheetBody">
        {/* Navigation Tabs */}
        <nav className="lineageTabs" role="tablist">
          <button
            type="button"
            className={`lineageTabBtn ${activeTab === 'tree' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('tree')}
          >
            <span>🌳</span>
            <span>{isEn ? 'Family Tree' : 'የትውልድ ዛፍ'}</span>
          </button>
          <button
            type="button"
            className={`lineageTabBtn ${activeTab === 'nations_tribes' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('nations_tribes')}
          >
            <span>👑</span>
            <span>{isEn ? '12 Tribes & Noah' : 'የኖኅ ልጆችና 12ቱ ነገዶች'}</span>
          </button>
          </nav>

        {/* ============================================================ */}
        {/* TAB 1: LIVING FAMILY TREE EXPLORER */}
        {/* ============================================================ */}
        {activeTab === 'tree' && (
          <div className="lineageTreeBox">
            {/* Search Input */}
            <div className="lineageSearchBox">
              <span className="lineageSearchIcon">🔍</span>
              <input
                type="text"
                className="lineageSearchInput"
                placeholder={isEn ? 'Search any biblical ancestor or descendant...' : 'ማንኛውንም አባት ወይም እናት ይፈልጉ...'}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            {/* Search dropdown results */}
            {searchResults.length > 0 && (
              <div className="lineageSearchResults" style={{ display: 'flex', flexDirection: 'column', gap: '6px', margin: '8px 0' }}>
                {searchResults.slice(0, 6).map((p) => (
                  <button
                    key={p.id}
                    type="button"
                    className="lineagePersonCard"
                    onClick={() => selectPerson(p.id)}
                  >
                    <div className="lineagePersonCard__left">
                      <span className="lineagePersonCard__name">{isEn ? p.nameEn : p.nameAm}</span>
                      <span className="lineagePersonCard__am">{isEn ? p.culturalBadgeEn : p.culturalBadgeAm}</span>
                    </div>
                    <span className="lineagePersonCard__action">{isEn ? 'View Tree →' : 'ዛፉን እይ →'}</span>
                  </button>
                ))}
              </div>
            )}

            {/* Quick-Jump Biblical Patriarchs / Family Heads */}
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', padding: '6px 0 12px', scrollbarWidth: 'none', WebkitOverflowScrolling: 'touch' }}>
              {history.length > 0 && (
                <button
                  type="button"
                  className="lineagePillBtn"
                  onClick={handleBack}
                  title={isEn ? 'Back to previous person' : 'ወደ ቀዳሚው ሰው ተመለስ'}
                  style={{
                    flexShrink: 0,
                    fontWeight: 700,
                    background: 'var(--ink, #1c1917)',
                    color: 'var(--paper, #ffffff)',
                    borderRadius: '999px',
                    padding: '4px 12px',
                    fontSize: '12px',
                    border: '1px solid var(--line, rgba(0,0,0,0.2))',
                    cursor: 'pointer',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '4px',
                  }}
                >
                  <span>←</span>
                  <span>{isEn ? `Back (${LINEAGE_PEOPLE[history[history.length - 1]]?.nameEn || 'Prev'})` : `ወደ ኋላ (${LINEAGE_PEOPLE[history[history.length - 1]]?.nameAm || 'ቀዳሚ'})`}</span>
                </button>
              )}
              {[
                { id: 'adam', en: 'Adam', am: 'አዳም' },
                { id: 'cain', en: 'Cain', am: 'ቃየል' },
                { id: 'seth', en: 'Seth', am: 'ሴት' },
                { id: 'noah', en: 'Noah', am: 'ኖኅ' },
                { id: 'abraham', en: 'Abraham', am: 'አብርሃም' },
                { id: 'jacob', en: 'Jacob', am: 'ያዕቆብ' },
                { id: 'amram', en: 'Amram', am: 'እንበረም' },
                { id: 'moses', en: 'Moses', am: 'ሙሴ' },
                { id: 'david', en: 'David', am: 'ዳዊት' },
                { id: 'solomon', en: 'Solomon', am: 'ሰሎሞን' },
                { id: 'jesus', en: 'Jesus', am: 'ኢየሱስ' },
              ].map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className="lineagePillBtn"
                  onClick={() => selectPerson(item.id)}
                  style={{
                    flexShrink: 0,
                    fontWeight: activePersonId === item.id ? 700 : 500,
                    background: activePersonId === item.id ? 'var(--accent, #2d6a4f)' : 'rgba(128, 128, 128, 0.12)',
                    color: activePersonId === item.id ? '#ffffff' : 'inherit',
                    borderRadius: '999px',
                    padding: '4px 10px',
                    fontSize: '12px',
                    border: '1px solid var(--line, rgba(0,0,0,0.1))',
                    cursor: 'pointer',
                  }}
                >
                  {isEn ? item.en : item.am}
                </button>
              ))}
            </div>

            {/* Spotlight Card */}
            <article className="lineageSpotlight">
              <header className="lineageSpotlight__header">
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap' }}>
                  <div className="lineageBadgesRow">
                    <span className={`lineageBadge lineageBadge--${activePerson.culturalTag}`}>
                      {isEn ? activePerson.culturalBadgeEn : activePerson.culturalBadgeAm}
                    </span>
                    <span className="lineageBadge" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-muted)' }}>
                      {isEn ? activePerson.tribeOrNationEn : activePerson.tribeOrNationAm}
                    </span>
                  </div>
                  {history.length > 0 && (
                    <button
                      type="button"
                      className="sheet__back"
                      onClick={handleBack}
                      style={{ height: '28px', padding: '0 10px', fontSize: '11.5px', borderRadius: '8px' }}
                      title={isEn ? 'Back to previous person' : 'ወደ ቀዳሚው ሰው ተመለስ'}
                    >
                      <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M19 12H5M12 19l-7-7 7-7" />
                      </svg>
                      <span>{isEn ? 'Back' : 'ወደ ኋላ'}</span>
                    </button>
                  )}
                </div>
                <div className="lineageSpotlight__names">
                  <h3 className="lineageSpotlight__nameEn">{isEn ? activePerson.nameEn : activePerson.nameAm}</h3>
                  <span className="lineageSpotlight__nameAm">({isEn ? activePerson.nameAm : activePerson.nameEn})</span>
                </div>
                <span className="lineageSpotlight__era">
                  ⏳ {isEn ? activePerson.eraEn : activePerson.eraAm}
                </span>
              </header>

              {/* Kinship Connections (Parents, Spouses, Children) */}
              <div className="lineageKinshipBox">
                {/* Parents */}
                <div className="lineageKinshipRow">
                  <span className="lineageKinshipLabel">
                    {isEn ? 'Parents:' : 'ወላጆች:'}
                  </span>
                  <div className="lineageKinshipLinks">
                    {activePerson.fatherId && LINEAGE_PEOPLE[activePerson.fatherId] && (
                      <button
                        type="button"
                        className="lineagePillBtn"
                        onClick={() => selectPerson(activePerson.fatherId!)}
                      >
                        <span>⬆️</span>
                        <span>{isEn ? LINEAGE_PEOPLE[activePerson.fatherId].nameEn : LINEAGE_PEOPLE[activePerson.fatherId].nameAm}</span>
                        <small style={{ opacity: 0.6 }}>({isEn ? 'Father' : 'አባት'})</small>
                      </button>
                    )}
                    {activePerson.motherId && LINEAGE_PEOPLE[activePerson.motherId] && (
                      <button
                        type="button"
                        className="lineagePillBtn"
                        onClick={() => selectPerson(activePerson.motherId!)}
                      >
                        <span>⬆️</span>
                        <span>{isEn ? LINEAGE_PEOPLE[activePerson.motherId].nameEn : LINEAGE_PEOPLE[activePerson.motherId].nameAm}</span>
                        <small style={{ opacity: 0.6 }}>({isEn ? 'Mother' : 'እናት'})</small>
                      </button>
                    )}
                    {!activePerson.fatherId && !activePerson.motherId && (
                      <span className="lineagePillNone">{isEn ? 'Earliest recorded origin' : 'የመጀመሪያ መነሻ'}</span>
                    )}
                  </div>
                </div>

                {/* Siblings (brothers & sisters) */}
                {(() => {
                  const siblings = Object.values(LINEAGE_PEOPLE).filter(
                    (p) =>
                      p.id !== activePerson.id &&
                      ((activePerson.fatherId && p.fatherId === activePerson.fatherId) ||
                        (activePerson.motherId && p.motherId === activePerson.motherId))
                  )
                  if (siblings.length === 0) return null
                  return (
                    <div className="lineageKinshipRow">
                      <span className="lineageKinshipLabel">
                        {isEn ? 'Siblings:' : 'ወንድሞችና እህቶች:'}
                      </span>
                      <div className="lineageKinshipLinks">
                        {siblings.map((sib) => (
                          <button
                            key={sib.id}
                            type="button"
                            className="lineagePillBtn"
                            onClick={() => selectPerson(sib.id)}
                          >
                            <span>↔️</span>
                            <span>{isEn ? sib.nameEn : sib.nameAm}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })()}

                {/* Spouses */}
                <div className="lineageKinshipRow">
                  <span className="lineageKinshipLabel">
                    {isEn ? 'Spouse(s):' : 'የትዳር አጋር:'}
                  </span>
                  <div className="lineageKinshipLinks">
                    {activePerson.spouseIds.length > 0 ? (
                      activePerson.spouseIds.map((sId) => {
                        const sp = LINEAGE_PEOPLE[sId]
                        if (!sp) return null
                        return (
                          <button
                            key={sId}
                            type="button"
                            className="lineagePillBtn"
                            onClick={() => selectPerson(sId)}
                          >
                            <span>💍</span>
                            <span>{isEn ? sp.nameEn : sp.nameAm}</span>
                          </button>
                        )
                      })
                    ) : (
                      <span className="lineagePillNone">{isEn ? 'None recorded' : 'አልተጠቀሰም'}</span>
                    )}
                  </div>
                </div>

                {/* Children */}
                <div className="lineageKinshipRow">
                  <span className="lineageKinshipLabel">
                    {isEn ? 'Children:' : 'ልጆች:'}
                  </span>
                  <div className="lineageKinshipLinks">
                    {activePerson.childrenIds.length > 0 ? (
                      activePerson.childrenIds.map((cId) => {
                        const child = LINEAGE_PEOPLE[cId]
                        if (!child) return null
                        return (
                          <button
                            key={cId}
                            type="button"
                            className="lineagePillBtn"
                            onClick={() => selectPerson(cId)}
                          >
                            <span>⬇️</span>
                            <span>{isEn ? child.nameEn : child.nameAm}</span>
                          </button>
                        )
                      })
                    ) : (
                      <span className="lineagePillNone">{isEn ? 'Climax of Lineage or not recorded' : 'የሐረጉ ፍጻሜ ወይም አልተጠቀሰም'}</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Theological Exegesis */}
              <div className="lineageTheologyBox">
                <span className="lineageTheologyTitle">
                  {isEn ? 'Redemptive & Theological Significance' : 'የቤዛነትና ሥነ-መለኮታዊ ትርጉም'}
                </span>
                <p className="lineageTheologyText">
                  {isEn ? activePerson.theologicalSignificanceEn : activePerson.theologicalSignificanceAm}
                </p>
              </div>

              {/* Bio & Key Verses */}
              <p className="lineageBioText">
                {isEn ? activePerson.bioEn : activePerson.bioAm}
              </p>

              <div className="lineageVersesRow">
                <span style={{ fontSize: '0.74rem', fontWeight: 700, color: 'var(--text-muted)' }}>
                  {isEn ? 'Key Passages:' : 'ዋና ጥቅሶች:'}
                </span>
                {activePerson.keyVerses.map((v) => (
                  <button
                    key={v}
                    type="button"
                    className="lineageVerseBadge"
                    style={{ border: 'none', cursor: onOpenPassage ? 'pointer' : 'default' }}
                    onClick={() => {
                      if (onOpenPassage) {
                        if (v.startsWith('Matthew 1')) onOpenPassage(40, 1)
                        else if (v.startsWith('Luke 3')) onOpenPassage(42, 3)
                        else if (v.startsWith('Ruth 4')) onOpenPassage(8, 4)
                        else if (v.startsWith('Genesis 12')) onOpenPassage(1, 12)
                        else if (v.startsWith('Genesis 22')) onOpenPassage(1, 22)
                        else if (v.startsWith('Acts 8')) onOpenPassage(44, 8)
                        else if (v.startsWith('Acts 10')) onOpenPassage(44, 10)
                        else if (v.startsWith('Hebrews 7')) onOpenPassage(58, 7)
                        onClose()
                      }
                    }}
                  >
                    {v}
                  </button>
                ))}
              </div>
            </article>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 2: 12 TRIBES & NOAH'S SONS (BLOODLINE & DIASPORA ENGINE) */}
        {/* ============================================================ */}
        {activeTab === 'nations_tribes' && (
          <div className="nationsTribesBox">
            {/* SubTab switcher */}
            <div className="nationsSubTabs" role="tablist">
              <button
                type="button"
                className={`nationsSubTabBtn ${nationsSubTab === 'tribes' ? 'is-active' : ''}`}
                onClick={() => setNationsSubTab('tribes')}
              >
                👑 {isEn ? '12 Tribes of Israel' : '12ቱ ነገዶች'}
              </button>
              <button
                type="button"
                className={`nationsSubTabBtn ${nationsSubTab === 'noah' ? 'is-active' : ''}`}
                onClick={() => setNationsSubTab('noah')}
              >
                🌍 {isEn ? 'Noah’s 3 Branches' : 'የኖኅ 3 ልጆች'}
              </button>
              <button
                type="button"
                className={`nationsSubTabBtn ${nationsSubTab === 'diaspora' ? 'is-active' : ''}`}
                onClick={() => setNationsSubTab('diaspora')}
              >
                📍 {isEn ? 'Where Are They Today?' : 'አሁን የት አሉ? (Diaspora)'}
              </button>
            </div>

            {/* SUB-VIEW 1: 12 TRIBES */}
            {nationsSubTab === 'tribes' && (
              <>
                <div className="nationsHeroBanner">
                  <div className="nationsHeroTitle">
                    <span>👑</span>
                    <span>{isEn ? 'The 12 Tribes of Israel (Sons of Jacob)' : 'የእስራኤል 12ቱ ነገዶች (የያዕቆብ ልጆች)'}</span>
                  </div>
                  <p className="nationsHeroDesc">
                    {isEn
                      ? 'The covenant bloodline divided among Jacob’s 12 sons by 4 mothers (Leah, Rachel, Bilhah, Zilpah), fulfilling ancient patriarchal blessings and prophetic destinies culminating in the Messiah.'
                      : 'ያዕቆብ ከ4ቱ እናቶች (ልያ፣ ራሔል፣ ቢልሃና ዚልጳ) የወለዳቸው 12 ልጆች፤ የበረከታቸው ሚስጥር፣ የተሰጣቸው ርስት፣ የስደታቸው ታሪክና እስከ ክርስቶስ ድረስ ያለው የመዳን ጉዞ።'}
                  </p>
                </div>

                {/* Kingdom Filter */}
                <div className="lineageFilterRow" style={{ marginTop: 0 }}>
                  <button
                    type="button"
                    className={`lineageFilterChip ${tribeFilter === 'all' ? 'is-active' : ''}`}
                    onClick={() => setTribeFilter('all')}
                  >
                    {isEn ? 'All 12 Tribes + Sons' : 'ሁሉም ነገዶች (14)'}
                  </button>
                  <button
                    type="button"
                    className={`lineageFilterChip ${tribeFilter === 'southern' ? 'is-active' : ''}`}
                    onClick={() => setTribeFilter('southern')}
                  >
                    🦁 {isEn ? 'Southern Kingdom (Judah/Benjamin/Levi)' : 'የደቡብ ይሁዳ መንግሥት'}
                  </button>
                  <button
                    type="button"
                    className={`lineageFilterChip ${tribeFilter === 'northern' ? 'is-active' : ''}`}
                    onClick={() => setTribeFilter('northern')}
                  >
                    🌾 {isEn ? 'Northern 10 Tribes (Exiled 722 BC)' : 'የሰሜን 10 ነገዶች (የተበተኑት)'}
                  </button>
                </div>

                {/* Tribe Cards Grid */}
                <div className="tribeCardsGrid">
                  {ISRAEL_TRIBES_DATA.filter((t) => {
                    if (tribeFilter === 'southern') return t.kingdom === 'southern'
                    if (tribeFilter === 'northern') return t.kingdom === 'northern'
                    return true
                  }).map((t) => {
                    const isExpanded = Boolean(expandedTribes[t.id])
                    return (
                      <article key={t.id} className="tribeCard">
                        {/* Header: Identity & Badges */}
                        <header className="tribeHeader">
                          <div className="tribeHeaderLeft">
                            <span className="tribeSymbol">{t.symbolEmoji}</span>
                            <div className="tribeTitles">
                              <h3 className="tribeName">{isEn ? t.nameEn : t.nameAm}</h3>
                              <span className="tribeMeaning">{isEn ? t.meaningEn : t.meaningAm} ({isEn ? t.symbolNameEn : t.symbolNameAm})</span>
                            </div>
                          </div>
                          <div className="tribeBadges">
                            <span className="tribeBadge tribeBadge--mother">
                              👩 {isEn ? t.motherNameEn : t.motherNameAm}
                            </span>
                            <span className="tribeBadge tribeBadge--kingdom">
                              {t.kingdom === 'southern'
                                ? (isEn ? 'Southern (Judah)' : 'የደቡብ መንግሥት')
                                : (isEn ? 'Northern (Israel)' : 'የሰሜን መንግሥት')}
                            </span>
                            <span className="tribeBadge">
                              💎 {isEn ? t.gemstoneEn : t.gemstoneAm}
                            </span>
                          </div>
                        </header>

                        {/* Visual 3-Step Journey Flow (Where it came from -> Exile -> Where it is now) */}
                        <div className="tribeJourneyFlow">
                          <div className="tribeJourneyStep tribeJourneyStep--origin">
                            <span className="tribeJourneyStepTitle tribeJourneyStepTitle--origin">
                              📍 {isEn ? '1. Origin & Role' : '1. መነሻና ርስት'}
                            </span>
                            <p className="tribeJourneyStepContent">
                              {isEn ? t.historicalRoleEn : t.historicalRoleAm}
                            </p>
                          </div>
                          <div className="tribeJourneyStep tribeJourneyStep--exile">
                            <span className="tribeJourneyStepTitle tribeJourneyStepTitle--exile">
                              ⚔️ {isEn ? '2. Exile & Dispersion' : '2. ስደትና መበተን'}
                            </span>
                            <p className="tribeJourneyStepContent">
                              {isEn ? t.exileFateEn : t.exileFateAm}
                            </p>
                          </div>
                          <div className="tribeJourneyStep tribeJourneyStep--now">
                            <span className="tribeJourneyStepTitle tribeJourneyStepTitle--now">
                              🌍 {isEn ? '3. Where They Are Today' : '3. አሁን የት አሉ?'}
                            </span>
                            <p className="tribeJourneyStepContent">
                              {isEn ? t.modernLocationEn : t.modernLocationAm}
                            </p>
                          </div>
                        </div>

                        {/* Ethiopian Connection (if exists) */}
                        {t.ethiopianConnectionAm && (
                          <div className="tribeEthiopiaHighlight">
                            <span className="tribeEthiopiaTitle">
                              🇪🇹 {isEn ? 'Ethiopian & Beta Israel Connection:' : 'የኢትዮጵያና የቤተ እስራኤል ትሥሥር:'}
                            </span>
                            <p className="tribeEthiopiaText">
                              {isEn ? t.ethiopianConnectionEn : t.ethiopianConnectionAm}
                            </p>
                          </div>
                        )}

                        {/* Collapsible Deep-Dive Details */}
                        <button
                          type="button"
                          className="tribeAccordionToggle"
                          onClick={() => setExpandedTribes(prev => ({ ...prev, [t.id]: !prev[t.id] }))}
                          aria-expanded={isExpanded}
                        >
                          <span>📜 {isEn ? 'Biblical Blessings & Prophetic Role' : 'የያዕቆብና የሙሴ ትንቢታዊ ምርቃት'}</span>
                          <span>{isExpanded ? '▲' : '▼'}</span>
                        </button>

                        {isExpanded && (
                          <div className="tribeAccordionContent">
                            {/* Jacob's Prophecy */}
                            <div className="tribeProphecyBox">
                              <span className="tribeProphecyTitle">
                                📜 {isEn ? 'Jacob’s Blessing (Gen 49)' : 'የያዕቆብ ምርቃት (ዘፍጥረት 49)'}
                              </span>
                              <p className="tribeProphecyText">
                                {isEn ? t.jacobBlessingEn : t.jacobBlessingAm}
                              </p>
                            </div>

                            {/* Moses' Blessing */}
                            <div className="tribeProphecyBox" style={{ borderLeftColor: '#60a5fa' }}>
                              <span className="tribeProphecyTitle" style={{ color: '#93c5fd' }}>
                                🕊️ {isEn ? 'Moses’ Blessing (Deut 33)' : 'የሙሴ ምርቃት (ዘዳግም 33)'}
                              </span>
                              <p className="tribeProphecyText">
                                {isEn ? t.mosesBlessingEn : t.mosesBlessingAm}
                              </p>
                            </div>

                            {/* Messianic Fulfillment */}
                            <div className="tribeDetailRow">
                              <span className="tribeDetailLabel">
                                ✝️ {isEn ? 'Messianic Fulfillment:' : 'መሲሐዊ ፍጻሜ:'}
                              </span>
                              <p className="tribeDetailText">
                                {isEn ? t.messianicFulfillmentEn : t.messianicFulfillmentAm}
                              </p>
                            </div>
                          </div>
                        )}

                        {/* Jump Actions */}
                        <div className="tribeActions">
                          {LINEAGE_PEOPLE[t.id] && (
                            <button
                              type="button"
                              className="tribeJumpBtn"
                              onClick={() => {
                                setActiveTab('tree')
                                selectPerson(t.id)
                              }}
                            >
                              🌳 {isEn ? 'View in Family Tree' : 'በትውልድ ዛፍ እይ'}
                            </button>
                          )}
                          {onOpenPassage && t.keyVerses.length > 0 && (
                            <button
                              type="button"
                              className="tribeJumpBtn"
                              onClick={() => {
                                if (t.id === 'reuben' || t.id === 'simeon' || t.id === 'judah') onOpenPassage(1, 49)
                                else if (t.id === 'dan') onOpenPassage(1, 30)
                                else if (t.id === 'joseph') onOpenPassage(1, 37)
                                else if (t.id === 'benjamin') onOpenPassage(1, 35)
                                else onOpenPassage(1, 49)
                                onClose()
                              }}
                            >
                              📖 {t.keyVerses[0]}
                            </button>
                          )}
                        </div>
                      </article>
                    )
                  })}
                </div>
              </>
            )}

            {/* SUB-VIEW 2: NOAH'S 3 BRANCHES */}
            {nationsSubTab === 'noah' && (
              <>
                <div className="nationsHeroBanner">
                  <div className="nationsHeroTitle">
                    <span>🌍</span>
                    <span>{isEn ? 'Table of Nations: Noah’s 3 Sons (Genesis 10)' : 'የአሕዛብ መሠረት፡ የኖኅ 3 ልጆች (ዘፍጥረት 10)'}</span>
                  </div>
                  <p className="nationsHeroDesc">
                    {isEn
                      ? 'The entire human race after the Great Deluge branched from Shem (Middle East & Asia), Ham (Africa & Canaan), and Japheth (Europe & Eurasia), preserving the messianic bloodline down to Abraham.'
                      : 'ከታላቁ የጥፋት ውሃ በኋላ የሰው ልጆች ሁሉ ከሦስቱ የኖኅ ልጆች ተነሥተው ምድርን ሞሉ፦ ሴም (መካከለኛው ምሥራቅና እስያ)፣ ካም (አፍሪካና ከነዓን)፣ ያፌት (አውሮፓና ዩራሲያ)፤ ይህም ወደ አብርሃም የሚያደርሰውን የቃል ኪዳን የደም መስመር ጠብቋል።'}
                  </p>
                </div>

                {/* Bloodline Stepper */}
                <div className="lineageBreadcrumb" style={{ overflowX: 'auto', padding: '10px 14px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)' }}>
                    {isEn ? 'Direct Covenant Bloodline:' : 'ቀጥተኛው የቃል ኪዳን የደም መስመር:'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, flexWrap: 'wrap', marginTop: 4 }}>
                    <span style={{ color: '#fff' }}>ኖኅ (Noah)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: 'var(--accent)' }}>ሴም (Shem)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>አርፋክስድ (Arpachshad)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ሳላ (Shelah)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: '#6ee7b7' }}>ዔቦር (Eber / ዕብራዊ)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ፋሌቅ (Peleg)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ራግው (Reu)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ሴሮህ (Serug)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ናኮር (Nahor)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ታራ (Terah)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: 'var(--accent)' }}>አብርሃም (Abraham)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ይስሐቅ (Isaac)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: '#f59e0b' }}>ያዕቆብ/እስራኤል (Jacob)</span>
                  </div>
                </div>

                {/* Noah Branches */}
                <div className="tribeCardsGrid">
                  {NOAH_SONS_DATA.map((s) => {
                    const isNoahExpanded = Boolean(expandedNoah[s.id])
                    return (
                      <article key={s.id} className="noahBranchCard">
                        <div className="noahBranchHeader">
                          <div>
                            <h3 className="noahBranchTitle">
                              {s.id === 'shem' ? '🕊️ ' : s.id === 'ham' ? '☀️ ' : '🌊 '}
                              {isEn ? s.nameEn : s.nameAm}
                            </h3>
                            <span className="tribeMeaning">{isEn ? s.meaningEn : s.meaningAm} — {isEn ? s.progenitorTitleEn : s.progenitorTitleAm}</span>
                          </div>
                          {LINEAGE_PEOPLE[s.id] && (
                            <button
                              type="button"
                              className="tribeJumpBtn"
                              onClick={() => {
                                setActiveTab('tree')
                                selectPerson(s.id)
                              }}
                            >
                              🌳 {isEn ? 'View in Tree' : 'በዛፉ ላይ እይ'}
                            </button>
                          )}
                        </div>

                        {/* 2-Step Journey Box */}
                        <div className="tribeJourneyFlow" style={{ gridTemplateColumns: '1fr 1fr' }}>
                          <div className="tribeJourneyStep tribeJourneyStep--origin">
                            <span className="tribeJourneyStepTitle tribeJourneyStepTitle--origin">
                              📍 {isEn ? 'Biblical Territories' : 'ዋና መኖሪያና ግዛቶች'}
                            </span>
                            <p className="tribeJourneyStepContent">
                              {isEn ? s.biblicalTerritoriesEn : s.biblicalTerritoriesAm}
                            </p>
                          </div>
                          <div className="tribeJourneyStep tribeJourneyStep--now">
                            <span className="tribeJourneyStepTitle tribeJourneyStepTitle--now">
                              🌍 {isEn ? 'Modern Descendant Peoples' : 'የዘመናችን ተወላጆችና ሕዝቦች'}
                            </span>
                            <p className="tribeJourneyStepContent">
                              {isEn ? s.modernPeoplesEn : s.modernPeoplesAm}
                            </p>
                          </div>
                        </div>

                        {/* Sons of this branch as clean visual tags */}
                        <div style={{ marginTop: 2 }}>
                          <span className="tribeDetailLabel">
                            👥 {isEn ? 'Direct Sons & Nations (Gen 10):' : 'ቀጥተኛ ልጆችና ሕዝቦች (ዘፍጥረት 10):'}
                          </span>
                          <div className="noahSonsChips">
                            {s.primarySons.map((sn) => (
                              <span key={sn.nameAm} className="noahSonChip">
                                <strong>{isEn ? sn.nameEn : sn.nameAm}</strong> ({isEn ? sn.nationsEn : sn.nationsAm})
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Collapsible Blessing & Theology */}
                        <button
                          type="button"
                          className="tribeAccordionToggle"
                          onClick={() => setExpandedNoah(prev => ({ ...prev, [s.id]: !prev[s.id] }))}
                          aria-expanded={isNoahExpanded}
                        >
                          <span>📜 {isEn ? 'Prophecy & Role in Salvation History' : 'የኖኅ ምርቃትና የመዳን ታሪክ'}</span>
                          <span>{isNoahExpanded ? '▲' : '▼'}</span>
                        </button>

                        {isNoahExpanded && (
                          <div className="tribeAccordionContent">
                            <div className="tribeProphecyBox">
                              <span className="tribeProphecyTitle">
                                📜 {isEn ? 'Noah’s Blessing/Prophecy (Gen 9:26-27)' : 'የኖኅ ምርቃት (ዘፍጥረት 9:26-27)'}
                              </span>
                              <p className="tribeProphecyText">
                                "{isEn ? s.blessingEn : s.blessingAm}"
                              </p>
                            </div>
                            <div className="tribeDetailRow">
                              <span className="tribeDetailLabel">
                                ✝️ {isEn ? 'Role in Salvation History:' : 'በማዳን ታሪክ ውስጥ ያለው ድርሻ:'}
                              </span>
                              <p className="tribeDetailText">
                                {isEn ? s.theologicalRoleEn : s.theologicalRoleAm}
                              </p>
                            </div>
                          </div>
                        )}
                      </article>
                    )
                  })}
                </div>
              </>
            )}

            {/* SUB-VIEW 3: DIASPORA & WHERE ARE THEY NOW? */}
            {nationsSubTab === 'diaspora' && (
              <div className="diasporaBox">
                <div className="nationsHeroBanner">
                  <div className="nationsHeroTitle">
                    <span>📍</span>
                    <span>{isEn ? 'Where Are They Now? The Diaspora & Modern Bloodlines' : 'አሁን የት ይገኛሉ? የስደቱ ታሪክና የዘመናችን ትሥሥር'}</span>
                  </div>
                  <p className="nationsHeroDesc">
                    {isEn
                      ? 'Tracing the dispersion of the Southern Kingdom (Judah, Benjamin, Levi) through Rome and Europe, and the Northern 10 Lost Tribes through Assyrian exile into Africa, Asia, and beyond.'
                      : 'የደቡብ ይሁዳ መንግሥት በባቢሎንና በሮማ ስደት ውስጥ እንዴት እንደተጠበቀ፤ እንዲሁም በ722 ቅ.ዓ በደብረ ሰማርያ የተማረኩት 10ሩ የሰሜን ነገዶች ወደ አፍሪካ፣ እስያና ልዩ ልዩ አህጉራት የተበተኑበት እውነተኛ የታሪክ መስመር።'}
                  </p>
                </div>

                {/* Southern Kingdom Preservation */}
                <article className="diasporaCard">
                  <h3 className="diasporaHeader">
                    <span>🦁</span>
                    <span>{isEn ? DIASPORA_DISCOVERY_SUMMARY.southernKingdomTitleEn : DIASPORA_DISCOVERY_SUMMARY.southernKingdomTitleAm}</span>
                  </h3>
                  <div className="tribeJourneyFlow" style={{ gridTemplateColumns: '1fr' }}>
                    <div className="tribeJourneyStep tribeJourneyStep--now">
                      <p className="tribeJourneyStepContent" style={{ fontSize: '0.84rem' }}>
                        {isEn ? DIASPORA_DISCOVERY_SUMMARY.southernKingdomDescEn : DIASPORA_DISCOVERY_SUMMARY.southernKingdomDescAm}
                      </p>
                    </div>
                  </div>
                </article>

                {/* Ten Lost Tribes Discoveries */}
                <article className="diasporaCard">
                  <h3 className="diasporaHeader">
                    <span>🧭</span>
                    <span>{isEn ? DIASPORA_DISCOVERY_SUMMARY.northernKingdomTitleEn : DIASPORA_DISCOVERY_SUMMARY.northernKingdomTitleAm}</span>
                  </h3>
                  <p className="diasporaText" style={{ fontSize: '0.82rem', marginBottom: 4 }}>
                    {isEn ? DIASPORA_DISCOVERY_SUMMARY.northernKingdomDescEn : DIASPORA_DISCOVERY_SUMMARY.northernKingdomDescAm}
                  </p>
                  <div className="diasporaGrid">
                    {DIASPORA_DISCOVERY_SUMMARY.points.map((pt) => (
                      <div key={pt.titleAm} className="diasporaSubCard">
                        <span className="diasporaSubTitle">
                          {pt.titleAm.includes('ቤተ እስራኤል') ? '🇪🇹 ' : '📍 '}
                          {isEn ? pt.titleEn : pt.titleAm}
                        </span>
                        <p className="diasporaSubDesc">
                          {isEn ? pt.descEn : pt.descAm}
                        </p>
                      </div>
                    ))}
                  </div>
                </article>

                {/* Spiritual & Messianic Fulfillment */}
                <article className="diasporaCard" style={{ borderColor: 'rgba(212, 175, 55, 0.4)', background: 'linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(22, 25, 33, 0.95) 100%)' }}>
                  <h3 className="diasporaHeader">
                    <span>✝️</span>
                    <span>{isEn ? DIASPORA_DISCOVERY_SUMMARY.spiritualFulfillmentTitleEn : DIASPORA_DISCOVERY_SUMMARY.spiritualFulfillmentTitleAm}</span>
                  </h3>
                  <p className="diasporaText" style={{ fontSize: '0.83rem' }}>
                    {isEn ? DIASPORA_DISCOVERY_SUMMARY.spiritualFulfillmentDescEn : DIASPORA_DISCOVERY_SUMMARY.spiritualFulfillmentDescAm}
                  </p>
                </article>
              </div>
            )}
          </div>
        )}

        {/* ============================================================ */}
              </div>
    </Sheet>
  )
}
