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
  const [expandedInterludes, setExpandedInterludes] = useState<Record<string, boolean>>({})

  const totalProgress = useMemo(() => getTotalSagaProgress(), [progressState])

  const selectedAct: SagaAct = useMemo(() => {
    return SAGA_ACTS.find((a) => a.id === selectedActId) ?? SAGA_ACTS[0]
  }, [selectedActId])

  const selectedActProgress = useMemo(() => {
    return getActProgress(selectedActId)
  }, [selectedActId, progressState])

  function handleToggleScene(sceneId: string) {
    const next = toggleSceneCompleted(sceneId)
    setProgressState(next)
  }

  function toggleInterlude(sceneId: string) {
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
        return { label: isEn ? 'Poetry / Psalm' : 'መዝሙር / ቅኔ', icon: '🎵' }
      case 'prophecy':
        return { label: isEn ? 'Prophecy' : 'ትንቢት', icon: '📣' }
      case 'gospel':
        return { label: isEn ? 'Gospel' : 'ወንጌል', icon: '✝️' }
      case 'epistle':
        return { label: isEn ? 'Epistle' : 'መልእክት', icon: '✉️' }
      case 'law':
        return { label: isEn ? 'Law / Torah' : 'ሕግ / ቶራ', icon: '📜' }
      case 'apocalyptic':
        return { label: isEn ? 'Apocalyptic' : 'ራእይ', icon: '👁️' }
    }
  }

  return (
    <div className="sagaView">
      {/* Top Navigation & Header */}
      <header className="sagaHeader">
        <div className="sagaHeader__topRow">
          {onBack && (
            <button
              type="button"
              className="sagaHeader__backBtn"
              onClick={onBack}
              aria-label={isEn ? 'Back to Bible' : 'ወደ መጽሐፍ ተመለስ'}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          <div className="sagaHeader__titleBlock">
            <div className="sagaHeader__badge">
              <span className="sagaHeader__badgeDot" />
              <span>{isEn ? 'Chronological Saga' : 'የዘመን ታሪክ ቅደም ተከተል'}</span>
            </div>
            <h1 className="sagaHeader__title">
              {isEn ? 'The Epic Biblical Saga' : 'የመጽሐፍ ቅዱስ ታሪካዊ ጉዞ'}
            </h1>
          </div>
        </div>

        <p className="sagaHeader__desc">
          {isEn
            ? 'The entire 66-book canon reimagined as one continuous, cinematic historical saga. Narrative, poetry, and prophecy interwoven into the exact moments they happened.'
            : 'መላው 66ቱ መጻሕፍት በአንድ ወጥ፣ ታሪካዊና መንፈሳዊ ፍሰት። ታሪኩ፣ መዝሙራቱና ትንቢቶቹ በተከናወኑበት ትክክለኛ የዘመን ቅደም ተከተል ተዋህደው ቀርበዋል።'}
        </p>

        {/* Global Progress Bar */}
        <div className="sagaGlobalProgress">
          <div className="sagaGlobalProgress__meta">
            <span>
              {isEn ? 'Overall Saga Progress' : 'ጠቅላላ የጉዞው እድገት'}
            </span>
            <span className="sagaGlobalProgress__stat">
              {totalProgress.completed} / {totalProgress.total} {isEn ? 'Scenes' : 'ክፍሎች'} ({totalProgress.percent}%)
            </span>
          </div>
          <div className="sagaProgressBar">
            <div
              className="sagaProgressBar__fill"
              style={{ width: `${totalProgress.percent}%` }}
            />
          </div>
        </div>
      </header>

      {/* Act Switcher Tabs */}
      <nav className="sagaActTabs" aria-label="Acts">
        {SAGA_ACTS.map((act) => {
          const isSelected = act.id === selectedActId
          const actProg = getActProgress(act.id)
          return (
            <button
              key={act.id}
              type="button"
              className={`sagaActTab ${isSelected ? 'is-active' : ''}`}
              onClick={() => setSelectedActId(act.id)}
              style={{ ['--act-color' as string]: act.color }}
            >
              <div className="sagaActTab__top">
                <span className="sagaActTab__icon">{act.badgeIcon}</span>
                <span className="sagaActTab__roman">Act {act.romanNr}</span>
              </div>
              <div className="sagaActTab__name">
                {isEn ? act.titleEn.split('(')[0].trim() : act.titleAm.split('-')[0].trim()}
              </div>
              <div className="sagaActTab__progress">
                <div
                  className="sagaActTab__progressFill"
                  style={{ width: `${actProg.percent}%` }}
                />
              </div>
            </button>
          )
        })}
      </nav>

      {/* Selected Act Banner */}
      <section
        className="sagaActBanner"
        style={{ ['--act-color' as string]: selectedAct.color }}
      >
        <div className="sagaActBanner__header">
          <div className="sagaActBanner__pill">
            <span>{selectedAct.badgeIcon}</span>
            <span>Act {selectedAct.romanNr}</span>
            <span className="sagaActBanner__divider">•</span>
            <span>{isEn ? selectedAct.eraEn : selectedAct.eraAm}</span>
          </div>
          <span className="sagaActBanner__stat">
            {selectedActProgress.completed} / {selectedActProgress.total} {isEn ? 'Completed' : 'ተጠናቋል'} ({selectedActProgress.percent}%)
          </span>
        </div>

        <h2 className="sagaActBanner__title">
          {isEn ? selectedAct.titleEn : selectedAct.titleAm}
        </h2>

        <p className="sagaActBanner__summary">
          {isEn ? selectedAct.summaryEn : selectedAct.summaryAm}
        </p>
      </section>

      {/* Scene Timeline */}
      <div className="sagaTimeline">
        {selectedAct.scenes.map((scene, index) => {
          const isDone = progressState.completedScenes.includes(scene.id)
          const isInterludeExpanded = !!expandedInterludes[scene.id]

          return (
            <article
              key={scene.id}
              className={`sagaSceneCard ${isDone ? 'is-done' : ''}`}
              id={scene.id}
            >
              {/* Timeline spine with scene number */}
              <div className="sagaSceneCard__node">
                <div className="sagaSceneCard__circle">
                  {isDone ? '✓' : scene.sceneNr}
                </div>
                {index < selectedAct.scenes.length - 1 && (
                  <div className="sagaSceneCard__line" />
                )}
              </div>

              {/* Scene Content */}
              <div className="sagaSceneCard__content">
                <div className="sagaSceneCard__top">
                  <div className="sagaSceneCard__eraTag">
                    <span className="sagaSceneCard__eraIcon">⏳</span>
                    <span>{scene.eraEstimate}</span>
                  </div>

                  <button
                    type="button"
                    className={`sagaSceneCard__checkBtn ${isDone ? 'is-checked' : ''}`}
                    onClick={() => handleToggleScene(scene.id)}
                    title={isDone ? (isEn ? 'Mark unread' : 'አልተነበበም በል') : (isEn ? 'Mark completed' : 'ተነቧል በል')}
                  >
                    <span className="sagaSceneCard__checkIcon">
                      {isDone ? '✓' : '○'}
                    </span>
                    <span>{isDone ? (isEn ? 'Completed' : 'ተነቧል') : (isEn ? 'Mark as Read' : 'ተነቧል')}</span>
                  </button>
                </div>

                <h3 className="sagaSceneCard__title">
                  {isEn ? scene.titleEn : scene.titleAm}
                </h3>
                {language !== 'en' && (
                  <div className="sagaSceneCard__titleEn">{scene.titleEn}</div>
                )}

                <p className="sagaSceneCard__summary">
                  {isEn ? scene.summaryEn : scene.summaryAm}
                </p>

                {/* Geopolitical Interlude (if present) */}
                {scene.geopolitical && (
                  <div className="sagaInterlude">
                    <button
                      type="button"
                      className="sagaInterlude__toggle"
                      onClick={() => toggleInterlude(scene.id)}
                      aria-expanded={isInterludeExpanded}
                    >
                      <div className="sagaInterlude__toggleLeft">
                        <span className="sagaInterlude__icon">🏛️</span>
                        <div>
                          <div className="sagaInterlude__badge">
                            {isEn ? 'Geopolitical Context' : 'ታሪካዊና ጂኦፖለቲካዊ ዳራ'}
                          </div>
                          <div className="sagaInterlude__title">
                            {isEn ? scene.geopolitical.titleEn : scene.geopolitical.titleAm}
                          </div>
                        </div>
                      </div>
                      <span className="sagaInterlude__chevron">
                        {isInterludeExpanded ? '▲' : '▼'}
                      </span>
                    </button>

                    {isInterludeExpanded && (
                      <div className="sagaInterlude__body">
                        <div className="sagaInterlude__empire">
                          <span>{isEn ? 'Superpower' : 'ኃያል መንግሥት'}:</span>{' '}
                          <strong>{isEn ? scene.geopolitical.empireNameEn : scene.geopolitical.empireNameAm}</strong>
                          <span className="sagaInterlude__date">({scene.geopolitical.historicalDate})</span>
                        </div>
                        <p className="sagaInterlude__text">
                          {isEn ? scene.geopolitical.bodyEn : scene.geopolitical.bodyAm}
                        </p>
                      </div>
                    )}
                  </div>
                )}

                {/* Interwoven Passages Section */}
                <div className="sagaPassages">
                  <div className="sagaPassages__header">
                    <span className="sagaPassages__icon">🔗</span>
                    <span>
                      {isEn ? 'Interwoven Scriptures' : 'የተዋሃዱ የመጽሐፍ ቅዱስ ክፍሎች'}
                    </span>
                  </div>

                  <div className="sagaPassages__list">
                    {scene.passages.map((passage, pIdx) => {
                      const badge = getGenreBadge(passage.genre)
                      const bookName = isEn ? passage.bookNameEn : passage.bookNameAm
                      const refStr = passage.verseStart
                        ? passage.verseEnd && passage.verseEnd !== passage.verseStart
                          ? `${bookName} ${passage.chapter}:${passage.verseStart}–${passage.verseEnd}`
                          : `${bookName} ${passage.chapter}:${passage.verseStart}`
                        : `${bookName} ${passage.chapter}`

                      return (
                        <div
                          key={`${passage.bookNr}-${passage.chapter}-${pIdx}`}
                          className="sagaPassageRow"
                        >
                          <div className="sagaPassageRow__left">
                            <div className="sagaPassageRow__refBadge">
                              <span className="sagaPassageRow__genreIcon">{badge.icon}</span>
                              <span className="sagaPassageRow__refText">{refStr}</span>
                              <span className="sagaPassageRow__genreTag">{badge.label}</span>
                            </div>
                            <div className="sagaPassageRow__context">
                              {isEn ? passage.contextEn : passage.contextAm}
                            </div>
                          </div>

                          <button
                            type="button"
                            className="sagaPassageRow__readBtn"
                            onClick={() =>
                              onOpenPassage(
                                passage.bookNr,
                                passage.chapter,
                                passage.verseStart,
                                passage.verseEnd
                              )
                            }
                          >
                            <span>{isEn ? 'Read' : 'አንብብ'}</span>
                            <span aria-hidden="true">›</span>
                          </button>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </article>
          )
        })}
      </div>

      {/* Act Navigation Footer */}
      <footer className="sagaFooterNav">
        {selectedActId > 1 && (
          <button
            type="button"
            className="sagaFooterNav__btn"
            onClick={() => {
              setSelectedActId(selectedActId - 1)
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
          >
            ‹ Act {selectedActId - 1}
          </button>
        )}

        <div className="sagaFooterNav__spacer" />

        {selectedActId < 5 && (
          <button
            type="button"
            className="sagaFooterNav__btn sagaFooterNav__btn--primary"
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
