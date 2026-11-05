import { useState } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import type { DilemmaCase } from '../ethicsSandboxData'

interface Props {
  open: boolean
  onClose: () => void
  dilemma: DilemmaCase | null
  language?: LanguageMode
  onOpenPassage?: (b: number, c: number, vs?: number, ve?: number) => void
}

export default function EthicsSandboxSheet({
  open,
  onClose,
  dilemma,
  language = 'am',
  onOpenPassage,
}: Props) {
  const [selectedOptionId, setSelectedOptionId] = useState<string | null>(null)
  const [isRevealed, setIsRevealed] = useState(false)
  const isEn = language === 'en'

  if (!dilemma) return null

  const handleSelectOption = (optionId: string) => {
    setSelectedOptionId(optionId)
  }

  const handleReveal = () => {
    if (selectedOptionId) {
      setIsRevealed(true)
    }
  }

  const handleReset = () => {
    setIsRevealed(false)
    setSelectedOptionId(null)
  }

  const userOption = dilemma.options.find((o) => o.id === selectedOptionId)
  const historicalOption = dilemma.options.find((o) => o.isHistoricalChoice)
  const isMatchedHistorical = userOption?.isHistoricalChoice ?? false

  return (
    <Sheet
      open={open}
      title={isEn ? 'Living Ethics & Wisdom Sandbox' : 'የውሳኔና የሥነ-ምግባር አውድማ'}
      onClose={() => {
        handleReset()
        onClose()
      }}
      language={language}
    >
      <div className="sheet__body ethicsSheetBody">
        {/* Header Brief */}
        <header className="ethicsHeader">
          <div className="ethicsHeader__meta">
            <span className="ethicsHeader__category">
              {isEn ? dilemma.categoryLabelEn : dilemma.categoryLabelAm}
            </span>
            <span className="ethicsHeader__hero">
              👤 {isEn ? dilemma.heroEn : dilemma.heroAm}
            </span>
          </div>
          <h2 className="ethicsHeader__title">
            {isEn ? dilemma.titleEn : dilemma.titleAm}
          </h2>
        </header>

        {/* The Scenario / Context */}
        <section className="ethicsSection ethicsScenarioCard">
          <div className="ethicsSection__lead">
            <span className="ethicsSection__icon">📜</span>
            <h3 className="ethicsSection__heading">
              {isEn ? 'The Crisis Context' : 'የሁኔታው ማዕቀፍና ፈተና'}
            </h3>
          </div>
          <p className="ethicsScenarioText">
            {isEn ? dilemma.scenarioEn : dilemma.scenarioAm}
          </p>

          <div className="ethicsStakeholders">
            <div className="ethicsStakeholders__title">
              {isEn ? 'Stakeholders & Risks:' : 'ባለድርሻዎችና ተጽዕኖዎች፡'}
            </div>
            <div className="ethicsStakeholders__chips">
              {(isEn ? dilemma.stakeholdersEn : dilemma.stakeholdersAm).map((s, idx) => (
                <span key={idx} className="ethicsStakeholderChip">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* The Question Prompt */}
        <div className="ethicsPromptBanner">
          <div className="ethicsPromptBanner__badge">
            {isEn ? 'Decision Fork' : 'የውሳኔ መስቀለኛ መንገድ'}
          </div>
          <p className="ethicsPromptBanner__question">
            {isEn ? dilemma.coreDilemmaQuestionEn : dilemma.coreDilemmaQuestionAm}
          </p>
        </div>

        {/* Options List */}
        {!isRevealed ? (
          <section className="ethicsOptionsSection">
            <div className="ethicsOptionsList">
              {dilemma.options.map((option, idx) => {
                const isSelected = selectedOptionId === option.id
                const letter = String.fromCharCode(65 + idx) // A, B, C
                return (
                  <button
                    key={option.id}
                    type="button"
                    className={`ethicsOptionCard ${isSelected ? 'is-selected' : ''}`}
                    onClick={() => handleSelectOption(option.id)}
                  >
                    <div className="ethicsOptionCard__radio">
                      <span className="ethicsOptionCard__letter">{letter}</span>
                    </div>
                    <div className="ethicsOptionCard__content">
                      <h4 className="ethicsOptionCard__title">
                        {isEn ? option.labelEn : option.labelAm}
                      </h4>
                      <p className="ethicsOptionCard__desc">
                        {isEn ? option.descriptionEn : option.descriptionAm}
                      </p>
                    </div>
                  </button>
                )
              })}
            </div>

            <div className="ethicsSubmitRow">
              <button
                type="button"
                className="ethicsSubmitBtn"
                disabled={!selectedOptionId}
                onClick={handleReveal}
              >
                {isEn ? 'Lock In Your Decision & Reveal Outcome ›' : 'ውሳኔህን መዝግብና ውጤቱን መርምር ›'}
              </button>
            </div>
          </section>
        ) : (
          /* Consequence & Scripture Engine */
          <section className="ethicsRevealSection">
            {/* Feedback Banner */}
            <div
              className={`ethicsFeedbackBanner ${
                isMatchedHistorical ? 'is-match' : 'is-alternative'
              }`}
            >
              <div className="ethicsFeedbackBanner__header">
                <span className="ethicsFeedbackBanner__icon">
                  {isMatchedHistorical ? '✨' : '💡'}
                </span>
                <span className="ethicsFeedbackBanner__status">
                  {isMatchedHistorical
                    ? isEn
                      ? 'Historical Alignment'
                      : 'ከታሪካዊው ውሳኔ ጋር ተዛምዷል'
                    : isEn
                    ? 'Alternative Path Explored'
                    : 'አማራጭ መንገድ ተፈትሿል'}
                </span>
              </div>
              <p className="ethicsFeedbackBanner__desc">
                {isMatchedHistorical
                  ? isEn
                    ? `You chose the exact moral path taken by ${dilemma.heroEn}.`
                    : `${dilemma.heroAm} የወሰደውን ትክክለኛ የሞራልና የእምነት መንገድ መርጠሃል።`
                  : isEn
                  ? `You explored an intuitive human move: "${userOption?.labelEn}". Here is what ${dilemma.heroEn} actually chose:`
                  : `የሰው ልጅ በቀላሉ የሚፈተንበትን መንገድ መርጠሃል፡ “${userOption?.labelAm}”። ገጸ-ባህሪው የወሰደው ውሳኔ ግን ይህ ነበር፡`}
              </p>
              {!isMatchedHistorical && historicalOption && (
                <div className="ethicsFeedbackBanner__actual">
                  <strong>{isEn ? 'The Scripture Choice:' : 'የመጽሐፍ ቅዱስ ውሳኔ፡'}</strong>{' '}
                  {isEn ? historicalOption.labelEn : historicalOption.labelAm}
                </div>
              )}
            </div>

            {/* Analysis Grid Cards */}
            <div className="ethicsAnalysisCards">
              {/* Short Term Friction */}
              <div className="ethicsAnalysisCard ethicsAnalysisCard--friction">
                <div className="ethicsAnalysisCard__header">
                  <span className="ethicsAnalysisCard__icon">⚡</span>
                  <h4>{isEn ? 'Immediate Price / Friction' : 'የአጭር ጊዜ ዋጋና ተግዳሮት'}</h4>
                </div>
                <p>
                  {isEn
                    ? dilemma.historicalAnalysis.shortTermCostEn
                    : dilemma.historicalAnalysis.shortTermCostAm}
                </p>
              </div>

              {/* Long Term Fruit */}
              <div className="ethicsAnalysisCard ethicsAnalysisCard--fruit">
                <div className="ethicsAnalysisCard__header">
                  <span className="ethicsAnalysisCard__icon">🌳</span>
                  <h4>{isEn ? 'Long-Term Compounding Fruit' : 'የረጅም ጊዜ ፍሬና በረከት'}</h4>
                </div>
                <p>
                  {isEn
                    ? dilemma.historicalAnalysis.longTermFruitEn
                    : dilemma.historicalAnalysis.longTermFruitAm}
                </p>
              </div>

              {/* Behavioral Psychology Insight */}
              <div className="ethicsAnalysisCard ethicsAnalysisCard--psych">
                <div className="ethicsAnalysisCard__header">
                  <span className="ethicsAnalysisCard__icon">🧠</span>
                  <h4>{isEn ? 'Behavioral Psychology Insight' : 'የባሕሪና የስነ-ልቦና ጥናት'}</h4>
                </div>
                <p>
                  {isEn
                    ? dilemma.historicalAnalysis.psychologicalInsightEn
                    : dilemma.historicalAnalysis.psychologicalInsightAm}
                </p>
              </div>

              {/* Biblical Anchor & Proverb */}
              <div className="ethicsAnalysisCard ethicsAnalysisCard--anchor">
                <div className="ethicsAnalysisCard__header">
                  <span className="ethicsAnalysisCard__icon">📜</span>
                  <h4>
                    {isEn ? 'Scriptural Wisdom Anchor' : 'የመጽሐፍ ቅዱስ መርሕና ምሳሌ'}{' '}
                    <span className="ethicsAnalysisCard__ref">
                      ({dilemma.historicalAnalysis.biblicalAnchorRef})
                    </span>
                  </h4>
                </div>
                <blockquote className="ethicsAnchorQuote">
                  {isEn
                    ? dilemma.historicalAnalysis.biblicalAnchorTextEn
                    : dilemma.historicalAnalysis.biblicalAnchorTextAm}
                </blockquote>
              </div>

              {/* Modern Executive / Workplace Application */}
              <div className="ethicsAnalysisCard ethicsAnalysisCard--modern">
                <div className="ethicsAnalysisCard__header">
                  <span className="ethicsAnalysisCard__icon">💼</span>
                  <h4>
                    {isEn ? 'Modern Leadership Takeaway' : 'የዘመናችን የሥራና የአመራር ትግበራ'}
                  </h4>
                </div>
                <p>
                  {isEn
                    ? dilemma.historicalAnalysis.modernLeadershipTakeawayEn
                    : dilemma.historicalAnalysis.modernLeadershipTakeawayAm}
                </p>
              </div>
            </div>

            {/* Bottom Actions */}
            <div className="ethicsActionsRow">
              <button
                type="button"
                className="ethicsSecondaryBtn"
                onClick={handleReset}
              >
                🔄 {isEn ? 'Test Another Choice' : 'ሌላ አማራጭ ሞክር'}
              </button>

              {onOpenPassage && (
                <button
                  type="button"
                  className="ethicsPrimaryBtn"
                  onClick={() => {
                    onOpenPassage(dilemma.bookNr, dilemma.chapterStart)
                    onClose()
                  }}
                >
                  📖 {isEn ? 'Read Scripture Context' : 'ሙሉውን ምዕራፍ አንብብ'}
                </button>
              )}
            </div>
          </section>
        )}
      </div>
    </Sheet>
  )
}
