import { useState, useMemo, useRef, useEffect } from 'react'
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

const BOOK_NAME_TO_NR: Record<string, number> = {
  genesis: 1, exodus: 2, leviticus: 3, numbers: 4, deuteronomy: 5,
  joshua: 6, judges: 7, ruth: 8, '1 samuel': 9, '2 samuel': 10,
  '1 kings': 11, '2 kings': 12, '1 chronicles': 13, '2 chronicles': 14,
  ezra: 15, nehemiah: 16, esther: 17, job: 18, psalm: 19, psalms: 19,
  proverbs: 20, ecclesiastes: 21, 'song of solomon': 22, 'song of songs': 22,
  isaiah: 23, jeremiah: 24, lamentations: 25, ezekiel: 26, daniel: 27,
  hosea: 28, joel: 29, amos: 30, obadiah: 31, jonah: 32,
  micah: 33, nahum: 34, habakkuk: 35, zephaniah: 36, haggai: 37,
  zechariah: 38, malachi: 39, matthew: 40, mark: 41, luke: 42,
  john: 43, acts: 44, romans: 45, '1 corinthians': 46, '2 corinthians': 47,
  galatians: 48, ephesians: 49, philippians: 50, colossians: 51,
  '1 thessalonians': 52, '2 thessalonians': 53, '1 timothy': 54, '2 timothy': 55,
  titus: 56, philemon: 57, hebrews: 58, james: 59, '1 peter': 60,
  '2 peter': 61, '1 john': 62, '2 john': 63, '3 john': 64, jude: 65,
  revelation: 66,
}

function parsePassageRef(refStr: string): { book: number; chapter: number } | null {
  const match = refStr.match(/^(\d?\s*[a-zA-Z]+(?:\s+of\s+[a-zA-Z]+)?)\s+(\d+)/)
  if (!match) return null
  const bookKey = match[1].trim().toLowerCase().replace(/\s+/g, ' ')
  const bookNr = BOOK_NAME_TO_NR[bookKey]
  const chapter = parseInt(match[2], 10)
  if (bookNr && chapter >= 1) return { book: bookNr, chapter }
  return null
}

const PATRIARCH_LIST = [
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
  { id: 'rehoboam', en: 'Rehoboam', am: 'ሮብዓም' },
  { id: 'hezekiah', en: 'Hezekiah', am: 'ሕዝቅያስ' },
  { id: 'josiah', en: 'Josiah', am: 'ኢዮስያስ' },
  { id: 'zerubbabel', en: 'Zerubbabel', am: 'ዘሩባቤል' },
  { id: 'jesus', en: 'Jesus', am: 'ኢየሱስ' },
]

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
  const [expandedTribes, setExpandedTribes] = useState<Record<string, boolean>>({})
  const [selectedTribeId, setSelectedTribeId] = useState<string>('reuben')
  const [activePersonId, setActivePersonId] = useState<string>(initialPersonId || 'adam')
  const [history, setHistory] = useState<string[]>([])
  const [searchQuery, setSearchQuery] = useState('')
  const pillsRef = useRef<HTMLDivElement>(null)

  const activePerson = LINEAGE_PEOPLE[activePersonId] || LINEAGE_PEOPLE['adam']

  const currentTribeIndex = ISRAEL_TRIBES_DATA.findIndex((t) => t.id === selectedTribeId)
  const activeTribe = ISRAEL_TRIBES_DATA[currentTribeIndex] || ISRAEL_TRIBES_DATA[0]
  const prevTribe = currentTribeIndex > 0 ? ISRAEL_TRIBES_DATA[currentTribeIndex - 1] : null
  const nextTribe = currentTribeIndex < ISRAEL_TRIBES_DATA.length - 1 ? ISRAEL_TRIBES_DATA[currentTribeIndex + 1] : null

  const getGenerationBadge = (order: number) => {
    if (isEn) {
      if (order === 1) return '🥇 1st Born (Firstborn)'
      if (order === 12) return '👑 12th Born (Youngest)'
      const suffix = order === 2 ? 'nd' : order === 3 ? 'rd' : 'th'
      return `${order}${suffix} Son of Jacob`
    } else {
      if (order === 1) return '🥇 1ኛ ልጅ (የያዕቆብ በኩር)'
      if (order === 12) return '👑 12ኛ ልጅ (የያዕቆብ ታናሽ)'
      return `${order}ኛ የያዕቆብ ልጅ`
    }
  }


  useEffect(() => {
    if (pillsRef.current) {
      const activeEl = pillsRef.current.querySelector<HTMLElement>(`[data-person-id="${activePersonId}"]`)
      if (activeEl) {
        activeEl.scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' })
      }
    }
  }, [activePersonId])

  const scrollPills = (direction: 'left' | 'right') => {
    if (pillsRef.current) {
      const amount = direction === 'left' ? -150 : 150
      pillsRef.current.scrollBy({ left: amount, behavior: 'smooth' })
    }
  }

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

            {/* Quick-Jump Biblical Patriarchs Strip with Next / Prev buttons */}
            <div className="lineagePillsContainer">
              <button
                type="button"
                className="lineageScrollArrow"
                onClick={() => scrollPills('left')}
                title={isEn ? 'Scroll left' : 'ወደ ኋላ ሸብሽብ'}
                aria-label="Scroll left"
              >
                ‹
              </button>

              <div ref={pillsRef} className="lineagePillsScroll">
                {PATRIARCH_LIST.map((item) => (
                  <button
                    key={item.id}
                    data-person-id={item.id}
                    type="button"
                    className="lineagePillBtn"
                    onClick={() => selectPerson(item.id)}
                    style={{
                      flexShrink: 0,
                      fontWeight: activePersonId === item.id ? 700 : 500,
                      background: activePersonId === item.id ? 'var(--accent)' : 'var(--panel-2, rgba(128, 128, 128, 0.12))',
                      color: activePersonId === item.id ? 'var(--accent-ink, #ffffff)' : 'var(--ink)',
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

              <button
                type="button"
                className="lineageScrollArrow"
                onClick={() => scrollPills('right')}
                title={isEn ? 'Scroll right' : 'ወደ ቀኝ ሸብሽብ'}
                aria-label="Scroll right"
              >
                ›
              </button>
            </div>

            {/* Spotlight Card */}
            <article className="lineageSpotlight">
              <header className="lineageSpotlight__header">
                <div className="lineageBadgesRow">
                  <span className={`lineageBadge lineageBadge--${activePerson.culturalTag}`}>
                    {isEn ? activePerson.culturalBadgeEn : activePerson.culturalBadgeAm}
                  </span>
                </div>
                <div className="lineageSpotlight__names">
                  <h3 className="lineageSpotlight__nameEn">{isEn ? activePerson.nameEn : activePerson.nameAm}</h3>
                  <span className="lineageSpotlight__nameAm">({isEn ? activePerson.nameAm : activePerson.nameEn})</span>
                </div>
              </header>

              {/* Kinship Connections (Parents, Spouses, Children, Siblings) */}
              <div className="lineageKinshipBox">
                {/* Parents */}
                {(activePerson.fatherId || activePerson.motherId) && (
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
                          <span>{isEn ? LINEAGE_PEOPLE[activePerson.fatherId].nameEn : LINEAGE_PEOPLE[activePerson.fatherId].nameAm}</span>
                          <small className="lineagePillRole">({isEn ? 'Father' : 'አባት'})</small>
                        </button>
                      )}
                      {activePerson.motherId && LINEAGE_PEOPLE[activePerson.motherId] && (
                        <button
                          type="button"
                          className="lineagePillBtn"
                          onClick={() => selectPerson(activePerson.motherId!)}
                        >
                          <span>{isEn ? LINEAGE_PEOPLE[activePerson.motherId].nameEn : LINEAGE_PEOPLE[activePerson.motherId].nameAm}</span>
                          <small className="lineagePillRole">({isEn ? 'Mother' : 'እናት'})</small>
                        </button>
                      )}
                    </div>
                  </div>
                )}

                {/* Spouses */}
                {activePerson.spouseIds.length > 0 && (
                  <div className="lineageKinshipRow">
                    <span className="lineageKinshipLabel">
                      {isEn ? 'Spouse(s):' : 'የትዳር አጋር:'}
                    </span>
                    <div className="lineageKinshipLinks">
                      {activePerson.spouseIds.map((sId) => {
                        const sp = LINEAGE_PEOPLE[sId]
                        if (!sp) return null
                        return (
                          <button
                            key={sId}
                            type="button"
                            className="lineagePillBtn"
                            onClick={() => selectPerson(sId)}
                          >
                            <span>{isEn ? sp.nameEn : sp.nameAm}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

                {/* Children */}
                {activePerson.childrenIds.length > 0 && (
                  <div className="lineageKinshipRow">
                    <span className="lineageKinshipLabel">
                      {isEn ? 'Children:' : 'ልጆች:'}
                    </span>
                    <div className="lineageKinshipLinks">
                      {activePerson.childrenIds.map((cId) => {
                        const child = LINEAGE_PEOPLE[cId]
                        if (!child) return null
                        return (
                          <button
                            key={cId}
                            type="button"
                            className="lineagePillBtn"
                            onClick={() => selectPerson(cId)}
                          >
                            <span>{isEn ? child.nameEn : child.nameAm}</span>
                          </button>
                        )
                      })}
                    </div>
                  </div>
                )}

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
                            <span>{isEn ? sib.nameEn : sib.nameAm}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })()}
              </div>

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
                        const parsed = parsePassageRef(v)
                        if (parsed) {
                          onOpenPassage(parsed.book, parsed.chapter)
                          onClose()
                        }
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
                {/* Selected Tribe Information Card */}
                <article key={activeTribe.id} className="tribeCard">
                  {/* Header: Identity & Badges */}
                  <header className="tribeHeader">
                    <div className="tribeHeaderLeft">
                      <span className="tribeSymbol">{activeTribe.symbolEmoji}</span>
                      <div className="tribeTitles">
                        <h3 className="tribeName">{isEn ? activeTribe.nameEn : activeTribe.nameAm}</h3>
                        <span className="tribeMeaning">{isEn ? activeTribe.meaningEn : activeTribe.meaningAm} ({isEn ? activeTribe.symbolNameEn : activeTribe.symbolNameAm})</span>
                      </div>
                    </div>
                    <div className="tribeBadges">
                      <span className="tribeBadge" style={{ background: 'var(--panel-2)', fontWeight: 800 }}>
                        {getGenerationBadge(activeTribe.order)}
                      </span>
                      <span className="tribeBadge tribeBadge--mother">
                        👩 {isEn ? activeTribe.motherNameEn : activeTribe.motherNameAm}
                      </span>
                      <span className="tribeBadge tribeBadge--kingdom">
                        {activeTribe.kingdom === 'southern'
                          ? (isEn ? 'Southern (Judah)' : 'የደቡብ መንግሥት')
                          : (isEn ? 'Northern (Israel)' : 'የሰሜን መንግሥት')}
                      </span>
                    </div>
                  </header>

                  {/* Biblical Role & Summary */}
                  <div className="tribeQuickSummary">
                    <span className="tribeQuickText">
                      {isEn ? activeTribe.historicalRoleEn : activeTribe.historicalRoleAm}
                    </span>
                  </div>

                  {/* Collapsible Dropdown for Jacob's Blessing */}
                  <button
                    type="button"
                    className="tribeAccordionToggle"
                    onClick={() => setExpandedTribes(prev => ({ ...prev, [activeTribe.id]: !prev[activeTribe.id] }))}
                    aria-expanded={Boolean(expandedTribes[activeTribe.id])}
                  >
                    <span>📜 {isEn ? 'Jacob’s Blessing (Gen 49)' : 'የያዕቆብ ምርቃት (ዘፍጥረት 49)'}</span>
                    <span>{expandedTribes[activeTribe.id] ? '▲' : '▼'}</span>
                  </button>

                  {expandedTribes[activeTribe.id] && (
                    <div className="tribeAccordionContent">
                      <div className="tribeProphecyBox">
                        <p className="tribeProphecyText">
                          {isEn ? activeTribe.jacobBlessingEn : activeTribe.jacobBlessingAm}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Jump Actions & Previous/Next Navigation */}
                  <div className="tribeActions" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '8px' }}>
                    <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                      {LINEAGE_PEOPLE[activeTribe.id] && (
                        <button
                          type="button"
                          className="tribeJumpBtn"
                          onClick={() => {
                            setActiveTab('tree')
                            selectPerson(activeTribe.id)
                          }}
                        >
                          🌳 {isEn ? 'View in Family Tree' : 'በትውልድ ዛፍ እይ'}
                        </button>
                      )}
                      {onOpenPassage && activeTribe.keyVerses.length > 0 && (
                        <button
                          type="button"
                          className="tribeJumpBtn"
                          onClick={() => {
                            const parsed = parsePassageRef(activeTribe.keyVerses[0])
                            if (parsed) {
                              onOpenPassage(parsed.book, parsed.chapter)
                            } else {
                              onOpenPassage(1, 49)
                            }
                            onClose()
                          }}
                        >
                          📖 {activeTribe.keyVerses[0]}
                        </button>
                      )}
                    </div>

                    {/* Prev / Next tribe buttons to click one after another */}
                    <div style={{ display: 'flex', gap: '6px' }}>
                      {prevTribe && (
                        <button
                          type="button"
                          className="tribeJumpBtn"
                          onClick={() => setSelectedTribeId(prevTribe.id)}
                          title={isEn ? `Previous: ${prevTribe.nameEn}` : `ቀዳሚ፦ ${prevTribe.nameAm}`}
                        >
                          ‹ {prevTribe.order}. {isEn ? prevTribe.nameEn : prevTribe.nameAm}
                        </button>
                      )}
                      {nextTribe && (
                        <button
                          type="button"
                          className="tribeJumpBtn"
                          onClick={() => setSelectedTribeId(nextTribe.id)}
                          title={isEn ? `Next: ${nextTribe.nameEn}` : `ቀጣይ፦ ${nextTribe.nameAm}`}
                        >
                          {nextTribe.order}. {isEn ? nextTribe.nameEn : nextTribe.nameAm} ›
                        </button>
                      )}
                    </div>
                  </div>
                </article>
              </>
            )}

            {/* SUB-VIEW 2: NOAH'S 3 BRANCHES */}
            {nationsSubTab === 'noah' && (
              <>
                {/* Bloodline Stepper */}
                <div className="lineageBreadcrumb" style={{ overflowX: 'auto', padding: '10px 14px' }}>
                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)' }}>
                    {isEn ? 'Direct Covenant Bloodline:' : 'ቀጥተኛው የቃል ኪዳን የደም መስመር:'}
                  </span>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '0.8rem', fontWeight: 700, flexWrap: 'wrap', marginTop: 4 }}>
                    <span style={{ color: 'var(--ink)', fontWeight: 800 }}>ኖኅ (Noah)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 800 }}>ሴም (Shem)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>አርፋክስድ (Arpachshad)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ሳላ (Shelah)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 800 }}>ዔቦር (Eber / ዕብራዊ)</span>
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
                    <span style={{ color: 'var(--ink)', fontWeight: 800 }}>አብርሃም (Abraham)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span>ይስሐቅ (Isaac)</span>
                    <span style={{ color: 'var(--text-muted)' }}>➔</span>
                    <span style={{ color: 'var(--ink)', fontWeight: 800 }}>ያዕቆብ/እስራኤል (Jacob)</span>
                  </div>
                </div>

                {/* Noah Branches */}
                <div className="tribeCardsGrid">
                  {NOAH_SONS_DATA.map((s) => (
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

                      {/* Direct Sons */}
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

                      {/* Noah's Blessing */}
                      <div className="tribeProphecyBox" style={{ marginTop: 8 }}>
                        <span className="tribeProphecyTitle">
                          📜 {isEn ? 'Noah’s Blessing (Gen 9:26-27)' : 'የኖኅ ምርቃት (ዘፍጥረት 9:26-27)'}
                        </span>
                        <p className="tribeProphecyText">
                          {isEn ? s.blessingEn : s.blessingAm}
                        </p>
                      </div>
                    </article>
                  ))}
                </div>
              </>
            )}

            {/* SUB-VIEW 3: DIASPORA & WHERE ARE THEY NOW? */}
            {nationsSubTab === 'diaspora' && (
              <div className="diasporaBox">
                {/* Southern Kingdom Preservation */}
                <article className="diasporaCard">
                  <h3 className="diasporaHeader">
                    <span>🦁</span>
                    <span>{isEn ? DIASPORA_DISCOVERY_SUMMARY.southernKingdomTitleEn : DIASPORA_DISCOVERY_SUMMARY.southernKingdomTitleAm}</span>
                  </h3>
                  <p className="diasporaText" style={{ fontSize: '0.84rem' }}>
                    {isEn ? DIASPORA_DISCOVERY_SUMMARY.southernKingdomDescEn : DIASPORA_DISCOVERY_SUMMARY.southernKingdomDescAm}
                  </p>
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
                <article className="diasporaCard" style={{ borderColor: 'var(--lineage-card-border, var(--line))', background: 'var(--lineage-card-bg-sub, var(--panel-2))' }}>
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
