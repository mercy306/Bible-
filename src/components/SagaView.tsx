import { useState, useMemo } from 'react'
import MountainHero from './MountainHero'
import PerspectiveMatrixSheet from './PerspectiveMatrixSheet'
import {
  SAGA_ACTS,
  type SagaAct,
  getSagaProgress,
  toggleSceneCompleted,
  getActProgress,
  getTotalSagaProgress,
} from '../sagaData'
import {
  getPerspectiveMatrixForScene,
  type PerspectiveMatrixItem,
} from '../perspectiveMatrixData'
import type { LanguageMode } from '../prefs'

interface Props {
  language?: LanguageMode
  onOpenPassage: (book: number, chapter: number, verseStart?: number, verseEnd?: number) => void
  onBack?: () => void
}

export default function SagaView({
  language = 'am',
  onOpenPassage,
  onBack,
}: Props) {
  const isEn = language === 'en'
  const [selectedActId, setSelectedActId] = useState<number>(1)
  const [progressState, setProgressState] = useState(() => getSagaProgress())
  const [expandedScenes, setExpandedScenes] = useState<Record<string, boolean>>({})
  const [expandedInterludes, setExpandedInterludes] = useState<Record<string, boolean>>({})
  const [selectedMatrix, setSelectedMatrix] = useState<PerspectiveMatrixItem | null>(null)

  const totalProgress = useMemo(() => getTotalSagaProgress(), [progressState])

  const selectedAct: SagaAct = useMemo(() => {
    return SAGA_ACTS.find((a) => a.id === selectedActId) ?? SAGA_ACTS[0]
  }, [selectedActId])

  const selectedActProgress = useMemo(() => {
    return getActProgress(selectedActId)
  }, [selectedActId, progressState])

  function handleToggleScene(sceneId: string, e: React.MouseEvent) {
    e.stopPropagation()
    const next = toggleSceneCompleted(sceneId)
    setProgressState(next)
  }

  function toggleSceneExpanded(sceneId: string) {
    setExpandedScenes((prev) => ({
      ...prev,
      [sceneId]: !prev[sceneId],
    }))
  }

  function toggleInterlude(sceneId: string, e: React.MouseEvent) {
    e.stopPropagation()
    setExpandedInterludes((prev) => ({
      ...prev,
      [sceneId]: !prev[sceneId],
    }))
  }

  function cleanEra(raw: string, isEnLang: boolean) {
    if (!raw) return ''
    if (!raw.includes('/')) return raw.trim()
    const parts = raw.split('/')
    return isEnLang ? parts[1].trim() : parts[0].trim()
  }

  function cleanBook(bookName: string, isEnLang: boolean) {
    if (isEnLang) return bookName
    return bookName.replace(/^ኦሪት\s+/, '')
  }

  return (
    <div className="sagaMobileScreen">
      {/* Native Mobile Hero Header */}
      <MountainHero className="sagaMobileHero">
        <div className="sagaMobileHero__navRow">
          {onBack && (
            <button
              type="button"
              className="sagaMobileHero__backBtn"
              onClick={onBack}
              aria-label={isEn ? 'Back to Bible' : 'ወደ መጽሐፍ ተመለስ'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="sagaMobileHero__titleGroup">
            <span className="sagaMobileHero__pill">
              {isEn ? 'Chronological Saga' : 'የዘመን ታሪክ'}
            </span>
            <h1 className="sagaMobileHero__title">
              {isEn ? 'The Biblical Epic' : 'የመጽሐፍ ቅዱስ ጉዞ'}
            </h1>
          </div>

          <div className="sagaMobileHero__statPill">
            <span className="sagaMobileHero__statText">{totalProgress.completed}/{totalProgress.total}</span>
          </div>
        </div>

        {/* Horizontal Mobile Act Segmented Tabs */}
        <div className="sagaMobileActTabs" role="tablist">
          {SAGA_ACTS.map((act) => {
            const isSelected = act.id === selectedActId
            const prog = getActProgress(act.id)
            return (
              <button
                key={act.id}
                type="button"
                role="tab"
                aria-selected={isSelected}
                className={`sagaMobileActTab ${isSelected ? 'is-active' : ''}`}
                onClick={() => setSelectedActId(act.id)}
              >
                <span className="sagaMobileActTab__label">{isEn ? 'Act' : 'ክፍል'} {act.romanNr}</span>
                {prog.completed > 0 && (
                  <span className="sagaMobileActTab__badge">{prog.completed}/{prog.total}</span>
                )}
              </button>
            )
          })}
        </div>
      </MountainHero>

      {/* Main Mobile Feed Container */}
      <main className="sagaMobileFeed">
        {/* Compact Act Bar */}
        <div className="sagaMobileActSummaryBar">
          <div className="sagaMobileActSummaryBar__left">
            <span className="sagaMobileActSummaryBar__badge">{isEn ? 'Act' : 'ክፍል'} {selectedAct.romanNr}</span>
            <span className="sagaMobileActSummaryBar__title">
              {isEn ? selectedAct.titleEn.split('(')[0].trim() : selectedAct.titleAm.split('-')[0].trim()}
            </span>
          </div>
          <span className="sagaMobileActSummaryBar__count">
            {selectedActProgress.completed}/{selectedActProgress.total} {isEn ? 'read' : 'ተነቧል'}
          </span>
        </div>

        {/* Mobile Scene Cards */}
        <div className="sagaMobileScenesList">
          {selectedAct.scenes.map((scene) => {
            const isDone = progressState.completedScenes.includes(scene.id)
            const isExpanded = !!expandedScenes[scene.id]
            const isInterludeOpen = !!expandedInterludes[scene.id]
            const matrixItem = getPerspectiveMatrixForScene(scene.id)

            return (
              <article
                key={scene.id}
                className={`sagaMobileCard ${isDone ? 'is-done' : ''} ${isExpanded ? 'is-expanded' : ''}`}
                onClick={() => toggleSceneExpanded(scene.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
              >
                {/* Touch-Friendly Scene Card Header */}
                <div
                  className="sagaMobileCard__tapRow"
                  onClick={() => toggleSceneExpanded(scene.id)}
                >
                  {/* Round Completion Checkbox */}
                  <button
                    type="button"
                    className={`sagaMobileCard__checkBtn ${isDone ? 'is-checked' : ''}`}
                    onClick={(e) => handleToggleScene(scene.id, e)}
                    aria-label={isDone ? (isEn ? 'Mark unread' : 'አልተነበበም') : (isEn ? 'Mark read' : 'ተነቧል')}
                  >
                    {isDone ? (
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="20 6 9 17 4 12" />
                      </svg>
                    ) : (
                      <span>{scene.sceneNr}</span>
                    )}
                  </button>

                  <div className="sagaMobileCard__info">
                    <div className="sagaMobileCard__tags">
                      <span className="sagaMobileCard__eraTag">{cleanEra(scene.eraEstimate, isEn)}</span>
                      {matrixItem && (
                        <span className="sagaMobileCard__matrixTag">4D POV</span>
                      )}
                      {scene.geopolitical && (
                        <span className="sagaMobileCard__geoTag">
                          {isEn ? scene.geopolitical.empireNameEn.split('(')[0].trim() : scene.geopolitical.empireNameAm.split('(')[0].trim()}
                        </span>
                      )}
                    </div>

                    <h3 className="sagaMobileCard__title">
                      {isEn ? scene.titleEn : scene.titleAm}
                    </h3>
                  </div>

                  <div
                    className="sagaMobileCard__chevron"
                    onClick={(e) => {
                      e.stopPropagation()
                      toggleSceneExpanded(scene.id)
                    }}
                  >
                    <svg viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>

                {/* Expanded Details Section - Shown ONLY when clicked! */}
                {isExpanded && (
                  <div className="sagaMobileCard__details">
                    <p className="sagaMobileCard__summary">
                      {isEn ? scene.narrativeFlowEn : scene.narrativeFlowAm}
                    </p>

                    {/* Verses / Scripture Chips (Shown only when expanded) */}
                    <div className="sagaMobileCard__versesSection">
                      <div className="sagaMobileCard__versesHeader">
                        <span>{isEn ? 'Scriptures to Read:' : 'የሚነበቡ ክፍሎች፡'}</span>
                      </div>
                      <div className="sagaMobileCard__quickChips">
                        {scene.passages.map((p, idx) => {
                          const bookName = cleanBook(isEn ? p.bookNameEn : p.bookNameAm, isEn)
                          const refStr = p.verseStart
                            ? p.verseEnd && p.verseEnd !== p.verseStart
                              ? `${bookName} ${p.chapter}:${p.verseStart}–${p.verseEnd}`
                              : `${bookName} ${p.chapter}:${p.verseStart}`
                            : `${bookName} ${p.chapter}`

                          return (
                            <button
                              key={`${p.bookNr}-${p.chapter}-${idx}`}
                              type="button"
                              className="sagaMobileChip"
                              onClick={(e) => {
                                e.stopPropagation()
                                onOpenPassage(p.bookNr, p.chapter, p.verseStart, p.verseEnd)
                              }}
                            >
                              <span className="sagaMobileChip__ref">{refStr}</span>
                              <span className="sagaMobileChip__arrow">›</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Multidimensional Perspective Matrix (POV Bible) */}
                    {matrixItem && (
                      <div className="sagaMobileMatrixSection">
                        <button
                          type="button"
                          className="sagaMobileMatrixBtn"
                          onClick={(e) => {
                            e.stopPropagation()
                            setSelectedMatrix(matrixItem)
                          }}
                        >
                          <div className="sagaMobileMatrixBtn__lead">
                            <span className="sagaMobileMatrixBtn__badge">4D POV</span>
                            <div className="sagaMobileMatrixBtn__titles">
                              <span className="sagaMobileMatrixBtn__title">
                                {isEn ? 'Perspective Matrix (4 Lenses)' : 'የእይታ ማትሪክስ (4 ዕይታዎች)'}
                              </span>
                              <span className="sagaMobileMatrixBtn__subtitle">
                                {isEn
                                  ? 'Geopolitical • Covenant • Roots • Psychology'
                                  : 'ፖለቲካ • ኪዳን • ሥነ-ቃል • ስነ-ልቦና'}
                              </span>
                            </div>
                          </div>
                          <span className="sagaMobileMatrixBtn__arrow">›</span>
                        </button>
                      </div>
                    )}

                    {/* Collapsible Geopolitical Box */}
                    {scene.geopolitical && (
                      <div className="sagaMobileGeoBox">
                        <button
                          type="button"
                          className="sagaMobileGeoBox__header"
                          onClick={(e) => toggleInterlude(scene.id, e)}
                        >
                          <div className="sagaMobileGeoBox__title">
                            {isEn ? scene.geopolitical.titleEn : scene.geopolitical.titleAm}
                          </div>
                          <span className="sagaMobileGeoBox__icon">
                            {isInterludeOpen ? '▲' : '▼'}
                          </span>
                        </button>

                        {isInterludeOpen && (
                          <div className="sagaMobileGeoBox__body">
                            <div className="sagaMobileGeoBox__date">
                              {isEn ? 'Period' : 'ዘመን'}: <strong>{scene.geopolitical.historicalDate}</strong>
                            </div>
                            <p className="sagaMobileGeoBox__text">
                              {isEn ? scene.geopolitical.bodyEn : scene.geopolitical.bodyAm}
                            </p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </article>
            )
          })}
        </div>

        {/* Mobile Next / Prev Act Switcher */}
        <div className="sagaMobileNavFooter">
          {selectedActId > 1 && (
            <button
              type="button"
              className="sagaMobileNavFooter__btn"
              onClick={() => {
                setSelectedActId(selectedActId - 1)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              ‹ {isEn ? 'Act' : 'ክፍል'} {selectedActId - 1}
            </button>
          )}

          <div className="sagaMobileNavFooter__spacer" />

          {selectedActId < 5 && (
            <button
              type="button"
              className="sagaMobileNavFooter__btn sagaMobileNavFooter__btn--next"
              onClick={() => {
                setSelectedActId(selectedActId + 1)
                window.scrollTo({ top: 0, behavior: 'smooth' })
              }}
            >
              {isEn ? 'Act' : 'ክፍል'} {selectedActId + 1} ›
            </button>
          )}
        </div>
      </main>

      <PerspectiveMatrixSheet
        open={Boolean(selectedMatrix)}
        item={selectedMatrix}
        language={language}
        onClose={() => setSelectedMatrix(null)}
        onOpenPassage={onOpenPassage}
      />
    </div>
  )
}
