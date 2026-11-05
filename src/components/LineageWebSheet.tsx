import { useState, useMemo } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import {
  LINEAGE_PEOPLE,
  findSixDegreesPath,
  PRESET_CONNECTIONS,
} from '../lineageData'
import '../lineageWeb.css'

interface Props {
  open: boolean
  onClose: () => void
  initialPersonId?: string
  language?: LanguageMode
  onOpenPassage?: (book: number, chapter: number) => void
}

type TabMode = 'tree' | 'cultural' | 'path'
type CulturalFilter = 'all' | 'gentile_women' | 'cushite_african' | 'royal' | 'priestly'

export default function LineageWebSheet({
  open,
  onClose,
  initialPersonId,
  language = 'am',
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'
  const [activeTab, setActiveTab] = useState<TabMode>('tree')
  const [activePersonId, setActivePersonId] = useState<string>(initialPersonId || 'jesus')
  const [searchQuery, setSearchQuery] = useState('')
  const [culturalFilter, setCulturalFilter] = useState<CulturalFilter>('all')

  // Six Degrees states
  const [fromId, setFromId] = useState<string>('ruth')
  const [toId, setToId] = useState<string>('jesus')

  const activePerson = LINEAGE_PEOPLE[activePersonId] || LINEAGE_PEOPLE['jesus']

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

  // Filtered Cultural list
  const culturalList = useMemo(() => {
    const all = Object.values(LINEAGE_PEOPLE)
    if (culturalFilter === 'gentile_women') {
      return all.filter((p) => ['tamar', 'rahab', 'ruth', 'bathsheba'].includes(p.id))
    }
    if (culturalFilter === 'cushite_african') {
      return all.filter((p) => ['cush', 'nimrod', 'zipporah', 'queen_of_sheba', 'ebed_melech', 'ethiopian_eunuch'].includes(p.id))
    }
    if (culturalFilter === 'royal') {
      return all.filter((p) => ['judah', 'perez', 'boaz', 'david', 'solomon', 'joseph_carpenter', 'mary_mother', 'jesus'].includes(p.id))
    }
    if (culturalFilter === 'priestly') {
      return all.filter((p) => ['levi', 'kohath', 'amram', 'moses', 'aaron', 'eleazar', 'phinehas', 'zadok', 'zechariah_priest', 'john_baptist'].includes(p.id))
    }
    return all
  }, [culturalFilter])

  // Computed shortest path for Six Degrees
  const pathSteps = useMemo(() => {
    return findSixDegreesPath(fromId, toId)
  }, [fromId, toId])

  const selectPerson = (id: string) => {
    if (LINEAGE_PEOPLE[id]) {
      setActivePersonId(id)
      setActiveTab('tree')
      setSearchQuery('')
    }
  }

  const allPersonsSorted = useMemo(() => {
    return Object.values(LINEAGE_PEOPLE).sort((a, b) => (isEn ? a.nameEn.localeCompare(b.nameEn) : a.nameAm.localeCompare(b.nameAm)))
  }, [isEn])

  return (
    <Sheet
      open={open}
      title={isEn ? 'Genealogical & Cultural Lineage Web' : 'የትውልድ ሐረግና የባህል ትሥሥር'}
      onClose={onClose}
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
            className={`lineageTabBtn ${activeTab === 'cultural' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('cultural')}
          >
            <span>🌍</span>
            <span>{isEn ? 'Cultural & Diaspora Web' : 'የባህልና ብሔር ትሥሥር'}</span>
          </button>
          <button
            type="button"
            className={`lineageTabBtn ${activeTab === 'path' ? 'is-active' : ''}`}
            onClick={() => setActiveTab('path')}
          >
            <span>🔗</span>
            <span>{isEn ? 'Six Degrees Connector' : 'የትውልድ ድልድይ'}</span>
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

            {/* Spotlight Card */}
            <article className="lineageSpotlight">
              <header className="lineageSpotlight__header">
                <div className="lineageBadgesRow">
                  <span className={`lineageBadge lineageBadge--${activePerson.culturalTag}`}>
                    {isEn ? activePerson.culturalBadgeEn : activePerson.culturalBadgeAm}
                  </span>
                  <span className="lineageBadge" style={{ background: 'rgba(0,0,0,0.05)', color: 'var(--text-muted)' }}>
                    {isEn ? activePerson.tribeOrNationEn : activePerson.tribeOrNationAm}
                  </span>
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
        {/* TAB 2: CULTURAL & DIASPORA MATRIX */}
        {/* ============================================================ */}
        {activeTab === 'cultural' && (
          <div className="lineageCulturalGrid">
            {/* Filter Chips */}
            <div className="lineageFilterRow">
              <button
                type="button"
                className={`lineageFilterChip ${culturalFilter === 'all' ? 'is-active' : ''}`}
                onClick={() => setCulturalFilter('all')}
              >
                {isEn ? 'All Figures' : 'ሁሉም'}
              </button>
              <button
                type="button"
                className={`lineageFilterChip ${culturalFilter === 'gentile_women' ? 'is-active' : ''}`}
                onClick={() => setCulturalFilter('gentile_women')}
              >
                👑 {isEn ? "Gentile Women in Christ's Line" : 'በክርስቶስ ሐረግ ያሉ አሕዛብ ሴቶች'}
              </button>
              <button
                type="button"
                className={`lineageFilterChip ${culturalFilter === 'cushite_african' ? 'is-active' : ''}`}
                onClick={() => setCulturalFilter('cushite_african')}
              >
                🌍 {isEn ? 'African & Cushite Roots' : 'የአፍሪካና የኩሽ ትሥሥር'}
              </button>
              <button
                type="button"
                className={`lineageFilterChip ${culturalFilter === 'royal' ? 'is-active' : ''}`}
                onClick={() => setCulturalFilter('royal')}
              >
                🦁 {isEn ? 'Royal Davidic Line' : 'የዳዊት የንግሥና መስመር'}
              </button>
              <button
                type="button"
                className={`lineageFilterChip ${culturalFilter === 'priestly' ? 'is-active' : ''}`}
                onClick={() => setCulturalFilter('priestly')}
              >
                🕯️ {isEn ? 'Priestly Levite Line' : 'የሌዊ የክህነት መስመር'}
              </button>
            </div>

            {/* List of Persons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {culturalList.map((p) => (
                <div
                  key={p.id}
                  className="lineagePersonCard"
                  onClick={() => selectPerson(p.id)}
                >
                  <div className="lineagePersonCard__left">
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span className="lineagePersonCard__name">{isEn ? p.nameEn : p.nameAm}</span>
                      <span className={`lineageBadge lineageBadge--${p.culturalTag}`} style={{ padding: '2px 6px', fontSize: '0.68rem' }}>
                        {isEn ? p.culturalBadgeEn : p.culturalBadgeAm}
                      </span>
                    </div>
                    <span className="lineagePersonCard__desc">
                      {isEn ? p.tribeOrNationEn : p.tribeOrNationAm} • {isEn ? p.eraEn : p.eraAm}
                    </span>
                  </div>
                  <span className="lineagePersonCard__action">
                    {isEn ? 'Explore →' : 'መርምር →'}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* ============================================================ */}
        {/* TAB 3: "SIX DEGREES OF SCRIPTURE" CONNECTOR */}
        {/* ============================================================ */}
        {activeTab === 'path' && (
          <div className="sixDegreesBox">
            {/* Presets */}
            <div className="sixDegreesPresets">
              <span className="sixDegreesPresetsTitle">
                {isEn ? '⚡ Famous Connections (Tap to Load)' : '⚡ ታዋቂ ትሥሥሮች (ለመክፈት ይንኩ)'}
              </span>
              <div className="sixDegreesChips">
                {PRESET_CONNECTIONS.map((c) => (
                  <button
                    key={c.fromId + c.toId}
                    type="button"
                    className="sixDegreesPresetBtn"
                    onClick={() => {
                      setFromId(c.fromId)
                      setToId(c.toId)
                    }}
                  >
                    {isEn ? c.labelEn : c.labelAm}
                  </button>
                ))}
              </div>
            </div>

            {/* Selectors */}
            <div className="sixDegreesSelectors">
              <select
                className="sixDegreesSelect"
                value={fromId}
                onChange={(e) => setFromId(e.target.value)}
              >
                {allPersonsSorted.map((p) => (
                  <option key={p.id} value={p.id}>
                    {isEn ? p.nameEn : p.nameAm}
                  </option>
                ))}
              </select>

              <span className="sixDegreesSwapIcon">➔</span>

              <select
                className="sixDegreesSelect"
                value={toId}
                onChange={(e) => setToId(e.target.value)}
              >
                {allPersonsSorted.map((p) => (
                  <option key={p.id} value={p.id}>
                    {isEn ? p.nameEn : p.nameAm}
                  </option>
                ))}
              </select>
            </div>

            {/* Path visualization */}
            {pathSteps.length > 0 ? (
              <div className="pathChain">
                <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--accent)', marginBottom: '8px' }}>
                  {isEn
                    ? `Found connection across ${pathSteps.length - 1} generational links:`
                    : `በ${pathSteps.length - 1} የትውልድ እርከኖች የተገኘ ትሥሥር፦`}
                </div>
                {pathSteps.map((step, idx) => (
                  <div key={step.person.id + idx} className="pathStep">
                    <div
                      className="pathStepNode"
                      onClick={() => selectPerson(step.person.id)}
                      title={isEn ? 'Click to inspect in Family Tree' : 'በትውልድ ዛፍ ውስጥ ለማየት ይንኩ'}
                    >
                      <span className="pathStepNumber">{idx + 1}</span>
                      <div className="pathStepInfo">
                        <span className="pathStepName">
                          {isEn ? step.person.nameEn : step.person.nameAm}
                        </span>
                        <span className="pathStepBadge">
                          {isEn ? step.person.culturalBadgeEn : step.person.culturalBadgeAm} • {isEn ? step.person.eraEn : step.person.eraAm}
                        </span>
                      </div>
                      <span style={{ fontSize: '0.78rem', color: 'var(--accent)', fontWeight: 600 }}>
                        {isEn ? 'Inspect 🌳' : 'እይ 🌳'}
                      </span>
                    </div>

                    {step.relationToNextEn && (
                      <div className="pathConnector">
                        <div className="pathLine" />
                        <span className="pathRelation">
                          ⬇️ {isEn ? step.relationToNextEn : step.relationToNextAm}
                        </span>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', padding: '24px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                {isEn ? 'No direct connection found between these two figures.' : 'በእነዚህ ሁለት ሰዎች መካከል ቀጥተኛ ትሥሥር አልተገኘም።'}
              </div>
            )}
          </div>
        )}
      </div>
    </Sheet>
  )
}
