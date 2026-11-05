import { useState } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import type { PerspectiveMatrixItem, PerspectiveLensKey, LinguisticTerm } from '../perspectiveMatrixData'

interface Props {
  open: boolean
  onClose: () => void
  item: PerspectiveMatrixItem | null
  language?: LanguageMode
  onOpenPassage?: (b: number, c: number, vs?: number, ve?: number) => void
}

export default function PerspectiveMatrixSheet({
  open,
  onClose,
  item,
  language = 'am',
  onOpenPassage,
}: Props) {
  const [activeLens, setActiveLens] = useState<PerspectiveLensKey>('geopolitical')
  const isEn = language === 'en'

  if (!item) return null

  const title = isEn ? item.titleEn : item.titleAm
  const era = isEn ? item.eraEn : item.eraAm

  const lenses: { key: PerspectiveLensKey; icon: string; label: string }[] = [
    {
      key: 'geopolitical',
      icon: '🏛️',
      label: isEn ? 'Geopolitical' : 'ፖለቲካዊ',
    },
    {
      key: 'theological',
      icon: '✝️',
      label: isEn ? 'Covenantal' : 'ኪዳናዊ',
    },
    {
      key: 'linguistic',
      icon: '🔤',
      label: isEn ? 'Root Words' : 'ሥነ-ቃል',
    },
    {
      key: 'psychological',
      icon: '🧠',
      label: isEn ? 'Psychological' : 'ስነ-ልቦናዊ',
    },
  ]

  return (
    <Sheet
      open={open}
      title={isEn ? 'Perspective Matrix (POV Bible)' : 'የዕይታ ማትሪክስ (4D ዕይታ)'}
      onClose={onClose}
      language={language}
    >
      <div className="sheet__body matrixSheetBody">
        {/* Header summary of current narrative */}
        <header className="matrixHeader">
          <div className="matrixHeader__tags">
            <span className="matrixHeader__era">{era}</span>
            <span className="matrixHeader__ref">
              {item.bookNr === 1 && item.chapterStart === 1
                ? (isEn ? 'Genesis 1–2' : 'ዘፍጥረት 1–2')
                : item.bookNr === 1 && item.chapterStart === 3
                ? (isEn ? 'Genesis 3–4' : 'ዘፍጥረት 3–4')
                : item.bookNr === 1 && item.chapterStart === 22
                ? (isEn ? 'Genesis 22' : 'ዘፍጥረት 22')
                : item.bookNr === 2
                ? (isEn ? 'Exodus 12–14' : 'ዘጸአት 12–14')
                : item.bookNr === 9
                ? (isEn ? '1 Samuel 22' : '1 ሳሙኤል 22')
                : (isEn ? 'Matthew 26–27' : 'ማቴዎስ 26–27')}
            </span>
          </div>
          <h2 className="matrixHeader__title">{title}</h2>
          <p className="matrixHeader__subtitle">
            {isEn
              ? 'Shift narrative lenses in real time to explore ground-level history, divine meta-narrative, original languages, and raw human experience.'
              : 'ይህን ታሪክ በአንድ ጊዜ በ4 የተለያዩ አቅጣጫዎች ይመርምሩ፡ የምድር ታሪክና ፖለቲካ፣ መለኮታዊ ቃል ኪዳን፣ የመጀመሪያ ቋንቋዎች ሥነ-ቃል፣ እና የሰው ልጅ ስሜታዊ ገጠመኝ።'}
          </p>
        </header>

        {/* 4-Lens Segmented Switcher */}
        <div className="matrixTabs" role="tablist" aria-label="Perspective Lenses">
          {lenses.map((lens) => {
            const isActive = activeLens === lens.key
            return (
              <button
                key={lens.key}
                type="button"
                role="tab"
                aria-selected={isActive}
                className={`matrixTab ${isActive ? 'is-active' : ''}`}
                onClick={() => setActiveLens(lens.key)}
              >
                <span className="matrixTab__icon">{lens.icon}</span>
                <span className="matrixTab__label">{lens.label}</span>
              </button>
            )
          })}
        </div>

        {/* Active Lens Content */}
        <div className="matrixContent">
          {/* 1. GEOPOLITICAL / EYEWITNESS LENS */}
          {activeLens === 'geopolitical' && (
            <div className="matrixLensView matrixLensView--geo">
              <div className="matrixLensMeta">
                <div className="matrixLensMeta__badge">
                  <span className="matrixLensMeta__label">{isEn ? 'Empire / Context' : 'ኢምፓየር / የታሪክ ድባብ'}</span>
                  <span className="matrixLensMeta__val">
                    {isEn ? item.geopolitical.empireEn : item.geopolitical.empireAm}
                  </span>
                </div>
                <div className="matrixLensMeta__badge">
                  <span className="matrixLensMeta__label">{isEn ? 'Timeframe' : 'የጊዜ ዘመን'}</span>
                  <span className="matrixLensMeta__val">{item.geopolitical.timeframe}</span>
                </div>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">👁️</span>
                  <span>{isEn ? 'Ground-Level Eyewitness Reality' : 'የአይን እማኝ ዕይታና ምድራዊ እውነታ'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.geopolitical.eyewitnessPOVEn : item.geopolitical.eyewitnessPOVAm}
                </p>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">⚔️</span>
                  <span>{isEn ? 'Imperial Powers & Historical Dynamics' : 'የአካባቢው ፖለቲካና የኃይል አሰላለፍ'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.geopolitical.historicalDynamicsEn : item.geopolitical.historicalDynamicsAm}
                </p>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">🏺</span>
                  <span>{isEn ? 'Ground Realities & Cultural Context' : 'የባህልና የአኗኗር ነባራዊ ሁኔታዎች'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.geopolitical.groundRealitiesEn : item.geopolitical.groundRealitiesAm}
                </p>
              </div>
            </div>
          )}

          {/* 2. THEOLOGICAL / COVENANTAL LENS */}
          {activeLens === 'theological' && (
            <div className="matrixLensView matrixLensView--theo">
              <div className="matrixLensMeta">
                <div className="matrixLensMeta__badge matrixLensMeta__badge--accent">
                  <span className="matrixLensMeta__label">{isEn ? 'Covenant Progression' : 'የቃል ኪዳን ደረጃ'}</span>
                  <span className="matrixLensMeta__val">
                    {isEn ? item.theological.covenantStageEn : item.theological.covenantStageAm}
                  </span>
                </div>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">📜</span>
                  <span>{isEn ? 'Redemptive Purpose & Divine Architecture' : 'የመዳን ዕቅድና መለኮታዊ ዓላማ'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.theological.redemptiveThemeEn : item.theological.redemptiveThemeAm}
                </p>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">✨</span>
                  <span>{isEn ? 'Christological Foreshadowing & Typology' : 'የክርስቶስ ጥላና የትንቢት ፍጻሜ'}</span>
                </div>
                <p className="matrixSection__p matrixSection__p--highlight">
                  {isEn ? item.theological.christForeshadowingEn : item.theological.christForeshadowingAm}
                </p>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">🔗</span>
                  <span>{isEn ? 'Canonical Meta-Narrative Anchor' : 'የመጽሐፍ ቅዱስ አጠቃላይ ትስስር'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.theological.metaNarrativeAnchorEn : item.theological.metaNarrativeAnchorAm}
                </p>
              </div>
            </div>
          )}

          {/* 3. LINGUISTIC / HEBREW-GREEK ROOT LENS */}
          {activeLens === 'linguistic' && (
            <div className="matrixLensView matrixLensView--ling">
              <div className="matrixLinguisticHeader">
                <span className="matrixLinguisticHeader__count">
                  {item.linguistic.length} {isEn ? 'Key Theological Roots Analyzed' : 'የተተነተኑ ዋና ቃላት'}
                </span>
              </div>

              <div className="matrixLinguisticGrid">
                {item.linguistic.map((term: LinguisticTerm, idx: number) => (
                  <article key={idx} className="matrixLinguisticCard">
                    <div className="matrixLinguisticCard__top">
                      <div className="matrixLinguisticCard__termGroup">
                        <span className="matrixLinguisticCard__original">{term.original}</span>
                        <span className="matrixLinguisticCard__translit">({term.translit})</span>
                      </div>
                      <span className="matrixLinguisticCard__langBadge">{term.language}</span>
                    </div>

                    <div className="matrixLinguisticCard__translationRow">
                      <div className="matrixLinguisticCard__subLabel">{isEn ? 'Amharic Equivalent' : 'የአማርኛ ትርጉም'}:</div>
                      <div className="matrixLinguisticCard__amharicTerm">{term.amharicTerm}</div>
                    </div>

                    <div className="matrixLinguisticCard__body">
                      <div className="matrixLinguisticCard__block">
                        <strong>{isEn ? 'Literal Root Meaning:' : 'ቀጥተኛ ፍቺ፡'} </strong>
                        <span>{isEn ? term.literalMeaningEn : term.literalMeaningAm}</span>
                      </div>

                      <div className="matrixLinguisticCard__block">
                        <strong>{isEn ? 'Theological Depth:' : 'ነገረ-መለኮታዊ ጥልቀት፡'} </strong>
                        <span>{isEn ? term.theologicalDepthEn : term.theologicalDepthAm}</span>
                      </div>

                      <div className="matrixLinguisticCard__block matrixLinguisticCard__block--sub">
                        <strong>{isEn ? 'Canonical Usage:' : 'በመጽሐፍ ቅዱስ አጠቃቀም፡'} </strong>
                        <span>{isEn ? term.canonicalUsageEn : term.canonicalUsageAm}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          )}

          {/* 4. PSYCHOLOGICAL / HUMAN EXPERIENCE LENS */}
          {activeLens === 'psychological' && (
            <div className="matrixLensView matrixLensView--psych">
              <div className="matrixLensMeta">
                <div className="matrixLensMeta__badge">
                  <span className="matrixLensMeta__label">{isEn ? 'Primary Character' : 'ዋና ገጸ-ባህሪ'}</span>
                  <span className="matrixLensMeta__val">
                    {isEn ? item.psychological.characterEn : item.psychological.characterAm}
                  </span>
                </div>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">💓</span>
                  <span>{isEn ? 'Emotional Landscape & State' : 'ስሜታዊ ድባብና ሁኔታ'}</span>
                </div>
                <div className="matrixPsychChips">
                  {(isEn ? item.psychological.emotionalStateEn : item.psychological.emotionalStateAm)
                    .split('፣')
                    .flatMap((s) => s.split(','))
                    .map((emotion, idx) => (
                      <span key={idx} className="matrixPsychChip">
                        {emotion.trim()}
                      </span>
                    ))}
                </div>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">⚡</span>
                  <span>{isEn ? 'Inner Conflict & Crisis' : 'ውስጣዊ ትግልና ቀውስ'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.psychological.innerConflictEn : item.psychological.innerConflictAm}
                </p>
              </div>

              <div className="matrixSection">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">❓</span>
                  <span>{isEn ? 'The Existential Question' : 'ዋናው ህልውናዊ ጥያቄ'}</span>
                </div>
                <blockquote className="matrixPsychQuote">
                  {isEn ? item.psychological.existentialQuestionEn : item.psychological.existentialQuestionAm}
                </blockquote>
              </div>

              <div className="matrixSection matrixSection--resonance">
                <div className="matrixSection__label">
                  <span className="matrixSection__icon">🌱</span>
                  <span>{isEn ? 'Modern Life Resonance' : 'ለዛሬ ህይወታችን ያለው ትርጉም'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.psychological.modernReflectionEn : item.psychological.modernReflectionAm}
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Read Passages Button Footer */}
        {onOpenPassage && (
          <div className="matrixFooter">
            <button
              type="button"
              className="matrixFooter__readBtn"
              onClick={() => {
                onClose()
                onOpenPassage(item.bookNr, item.chapterStart)
              }}
            >
              <span>{isEn ? 'Read Scripture in Reader' : 'ክፍሉን በመጽሐፍ ቅዱስ አንብብ'}</span>
              <span>›</span>
            </button>
          </div>
        )}
      </div>
    </Sheet>
  )
}
