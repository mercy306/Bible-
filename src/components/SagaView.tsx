import { useState, useMemo } from 'react'
import {
  SAGA_ACTS,
  type SagaAct,
  type InterwovenPassage,
  getSagaProgress,
  toggleSceneCompleted,
  getActProgress,
  getTotalSagaProgress,
} from '../sagaData'
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

  function getGenreBadge(genre: InterwovenPassage['genre']) {
    switch (genre) {
      case 'narrative':
        return { label: isEn ? 'Narrative' : 'ታሪክ', icon: '📖' }
      case 'poetry':
        return { label: isEn ? 'Psalm/Poetry' : 'መዝሙር', icon: '🎵' }
      case 'prophecy':
        return { label: isEn ? 'Prophecy' : 'ትንቢት', icon: '📣' }
      case 'gospel':
        return { label: isEn ? 'Gospel' : 'ወንጌል', icon: '✝️' }
      case 'epistle':
        return { label: isEn ? 'Epistle' : 'መልእክት', icon: '✉️' }
      case 'law':
        return { label: isEn ? 'Law' : 'ሕግ', icon: '📜' }
      case 'apocalyptic':
        return { label: isEn ? 'Apocalypse' : 'ራእይ', icon: '👁️' }
    }
  }

  return (
    <div className="sagaView sagaView--minimized">
      {/* Minimized Clean Header */}
      <header className="sagaMiniHeader">
        <div className="sagaMiniHeader__left">
          {onBack && (
            <button
              type="button"
              className="sagaMiniHeader__backBtn"
              onClick={onBack}
              aria-label={isEn ? 'Back to Bible' : 'ወደ መጽሐፍ ተመለስ'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}
          <div>
            <h1 className="sagaMiniHeader__title">
              {isEn ? 'Chronological Saga' : 'የዘመን ታሪክ ቅደም ተከተል'}
            </h1>
            <div className="sagaMiniHeader__sub">
              {isEn ? '5 Acts • 66 Books Chronologically Harmonized' : '5 ታላላቅ ዘመናት • 66 መጻሕፍት በቅደም ተከተል'}
            </div>
          </div>
        </div>

        <div className="sagaMiniHeader__progressPill" title={isEn ? 'Overall progress' : 'አጠቃላይ እድገት'}>
          <span>{totalProgress.completed}/{totalProgress.total}</span>
          <span className="sagaMiniHeader__progressPct">({totalProgress.percent}%)</span>
        </div>
      </header>

      {/* Minimized Act Switcher Pill Tabs */}
      <nav className="sagaMiniActTabs" aria-label="Acts">
        {SAGA_ACTS.map((act) => {
          const isSelected = act.id === selectedActId
          const prog = getActProgress(act.id)
          return (
            <button
              key={act.id}
              type="button"
              className={`sagaMiniActTab ${isSelected ? 'is-active' : ''}`}
              onClick={() => setSelectedActId(act.id)}
            >
              <span className="sagaMiniActTab__icon">{act.badgeIcon}</span>
              <span className="sagaMiniActTab__label">Act {act.romanNr}</span>
              {prog.percent > 0 && (
                <span className="sagaMiniActTab__pct">{prog.percent}%</span>
              )}
            </button>
          )
        })}
      </nav>

      {/* Compact Act Summary Bar */}
      <div className="sagaMiniActBar">
        <div className="sagaMiniActBar__left">
          <span className="sagaMiniActBar__title">
            {isEn ? selectedAct.titleEn.split('(')[0].trim() : selectedAct.titleAm.split('-')[0].trim()}
          </span>
          <span className="sagaMiniActBar__dot">•</span>
          <span className="sagaMiniActBar__era">
            {isEn ? selectedAct.eraEn.split('(')[0].trim() : selectedAct.eraAm.split('(')[0].trim()}
          </span>
        </div>
        <div className="sagaMiniActBar__count">
          {selectedActProgress.completed}/{selectedActProgress.total} {isEn ? 'done' : 'ተጠናቋል'}
        </div>
      </div>

      {/* Minimized Scene List */}
      <div className="sagaMiniList">
        {selectedAct.scenes.map((scene) => {
          const isDone = progressState.completedScenes.includes(scene.id)
          const isExpanded = !!expandedScenes[scene.id]
          const isInterludeOpen = !!expandedInterludes[scene.id]

          return (
            <div
              key={scene.id}
              className={`sagaMiniCard ${isDone ? 'is-done' : ''} ${isExpanded ? 'is-expanded' : ''}`}
            >
              {/* Minimized Scene Header Row (Click to Expand / Collapse) */}
              <div
                className="sagaMiniCard__head"
                onClick={() => toggleSceneExpanded(scene.id)}
                role="button"
                tabIndex={0}
                aria-expanded={isExpanded}
              >
                {/* Checkbox button */}
                <button
                  type="button"
                  className={`sagaMiniCard__check ${isDone ? 'is-checked' : ''}`}
                  onClick={(e) => handleToggleScene(scene.id, e)}
                  title={isDone ? (isEn ? 'Mark unread' : 'አልተነበበም በል') : (isEn ? 'Mark read' : 'ተነቧል በል')}
                >
                  {isDone ? '✓' : scene.sceneNr}
                </button>

                {/* Title & Era */}
                <div className="sagaMiniCard__main">
                  <div className="sagaMiniCard__title">
                    {isEn ? scene.titleEn : scene.titleAm}
                  </div>
                  <div className="sagaMiniCard__meta">
                    <span className="sagaMiniCard__era">⏳ {scene.eraEstimate}</span>
                    <span className="sagaMiniCard__passagesCount">
                      📖 {scene.passages.length} {isEn ? 'passages' : 'ክፍሎች'}
                    </span>
                    {scene.geopolitical && (
                      <span className="sagaMiniCard__geoPill">🏛️ {isEn ? scene.geopolitical.empireNameEn.split('(')[0].trim() : scene.geopolitical.empireNameAm.split('(')[0].trim()}</span>
                    )}
                  </div>
                </div>

                {/* Expand / Collapse Indicator */}
                <span className="sagaMiniCard__arrow">
                  {isExpanded ? '▴' : '▾'}
                </span>
              </div>

              {/* Collapsible Body */}
              {isExpanded && (
                <div className="sagaMiniCard__body">
                  <p className="sagaMiniCard__summary">
                    {isEn ? scene.summaryEn : scene.summaryAm}
                  </p>

                  {/* Minimized Geopolitical Interlude */}
                  {scene.geopolitical && (
                    <div className="sagaMiniGeo">
                      <button
                        type="button"
                        className="sagaMiniGeo__head"
                        onClick={(e) => toggleInterlude(scene.id, e)}
                      >
                        <span className="sagaMiniGeo__title">
                          🏛️ {isEn ? scene.geopolitical.titleEn : scene.geopolitical.titleAm}
                        </span>
                        <span className="sagaMiniGeo__date">({scene.geopolitical.historicalDate})</span>
                        <span className="sagaMiniGeo__chev">{isInterludeOpen ? '▲' : '▼'}</span>
                      </button>

                      {isInterludeOpen && (
                        <div className="sagaMiniGeo__content">
                          {isEn ? scene.geopolitical.bodyEn : scene.geopolitical.bodyAm}
                        </div>
                      )}
                    </div>
                  )}

                  {/* Interwoven Scriptures List */}
                  <div className="sagaMiniPassages">
                    {scene.passages.map((p, idx) => {
                      const badge = getGenreBadge(p.genre)
                      const bookName = isEn ? p.bookNameEn : p.bookNameAm
                      const refStr = p.verseStart
                        ? p.verseEnd && p.verseEnd !== p.verseStart
                          ? `${bookName} ${p.chapter}:${p.verseStart}–${p.verseEnd}`
                          : `${bookName} ${p.chapter}:${p.verseStart}`
                        : `${bookName} ${p.chapter}`

                      return (
                        <div
                          key={`${p.bookNr}-${p.chapter}-${idx}`}
                          className="sagaMiniPassageItem"
                        >
                          <div className="sagaMiniPassageItem__left">
                            <div className="sagaMiniPassageItem__ref">
                              <span>{badge.icon}</span>
                              <strong>{refStr}</strong>
                              <span className="sagaMiniPassageItem__genre">{badge.label}</span>
                            </div>
                            <div className="sagaMiniPassageItem__ctx">
                              {isEn ? p.contextEn : p.contextAm}
                            </div>
                          </div>

                          <button
                            type="button"
                            className="sagaMiniPassageItem__btn"
                            onClick={() => onOpenPassage(p.bookNr, p.chapter, p.verseStart, p.verseEnd)}
                          >
                            <span>{isEn ? 'Read' : 'አንብብ'}</span>
                            <span>›</span>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              )}
            </div>
          )
        })}
      </div>

      {/* Compact Act Switcher Footer */}
      <footer className="sagaMiniFooter">
        {selectedActId > 1 && (
          <button
            type="button"
            className="sagaMiniFooter__btn"
            onClick={() => {
              setSelectedActId(selectedActId - 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            ‹ Act {selectedActId - 1}
          </button>
        )}
        <div className="sagaMiniFooter__spacer" />
        {selectedActId < 5 && (
          <button
            type="button"
            className="sagaMiniFooter__btn sagaMiniFooter__btn--next"
            onClick={() => {
              setSelectedActId(selectedActId + 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            Act {selectedActId + 1} ›
          </button>
        )}
      </footer>
    </div>
  )
}
