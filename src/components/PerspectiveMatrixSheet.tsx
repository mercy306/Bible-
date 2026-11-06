import { useState } from 'react'
import Sheet from './Sheet'
import { useBookNames } from './useBookNames'
import type { LanguageMode } from '../prefs'
import type {
  PerspectiveMatrixItem,
  PerspectiveLensKey,
  LinguisticTerm,
  ArchaeologicalEvidence,
  KeyVerseExegesis,
  TheologicalQA
} from '../perspectiveMatrixData'

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
  const [openQAIndex, setOpenQAIndex] = useState<number | null>(null)
  const isEn = language === 'en'

  const { am: bookAm, en: bookEn } = useBookNames(item?.bookNr ?? 1)

  if (!item) return null

  const title = isEn ? item.titleEn : item.titleAm
  const era = isEn ? item.eraEn : item.eraAm
  const bookName = isEn ? (bookEn || `Book ${item.bookNr}`) : (bookAm || `መጽሐፍ ${item.bookNr}`)
  const chapterRef =
    item.chapterEnd && item.chapterEnd !== item.chapterStart
      ? `${bookName} ${item.chapterStart}–${item.chapterEnd}`
      : `${bookName} ${item.chapterStart}`

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
    {
      key: 'exposition',
      icon: '📖',
      label: isEn ? 'Deep Dive' : 'ሙሉ ዝርዝር',
    },
  ]

  const deep = item.deepExposition

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
            <span className="matrixHeader__ref">{chapterRef}</span>
          </div>
          <h2 className="matrixHeader__title">{title}</h2>
          <p className="matrixHeader__subtitle">
            {isEn
              ? 'Explore this passage in depth across 5 real-time perspectives: imperial geopolitics, divine covenant architecture, Hebrew & Greek root etymology, raw human psychology, and comprehensive scholarly exposition.'
              : 'ይህን ታሪክ በ5 የተለያዩ ጥልቅ አቅጣጫዎች ይመርምሩ፡ የምድር ታሪክና ፖለቲካ፣ መለኮታዊ ቃል ኪዳን፣ የዕብራይስጥና የግሪክ ሥነ-ቃል፣ የሰው ልጅ ስነ-ልቦናዊ ቀውስ፣ እና ሙሉ ዝርዝር ነገረ-መለኮታዊ ትንታኔ።'}
          </p>
        </header>

        {/* 5-Lens Segmented Switcher */}
        <div className="matrixTabs matrixTabs--5col" role="tablist" aria-label="Perspective Lenses">
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
                  <span>{isEn ? 'Ground Realities & Living Conditions' : 'የባህልና የአኗኗር ነባራዊ ሁኔታዎች'}</span>
                </div>
                <p className="matrixSection__p">
                  {isEn ? item.geopolitical.groundRealitiesEn : item.geopolitical.groundRealitiesAm}
                </p>
              </div>

              {/* Extra Archaeological Evidences */}
              {item.geopolitical.archaeologicalEvidences && item.geopolitical.archaeologicalEvidences.length > 0 && (
                <div className="matrixSection matrixSection--archaeology">
                  <div className="matrixSection__label">
                    <span className="matrixSection__icon">🏛️</span>
                    <span>{isEn ? 'Archaeological & Extrabiblical Discoveries' : 'አርኪኦሎጂያዊና ታሪካዊ ማስረጃዎች'}</span>
                  </div>
                  <div className="matrixArchList">
                    {item.geopolitical.archaeologicalEvidences.map((arch: ArchaeologicalEvidence, idx: number) => (
                      <div key={idx} className="matrixArchItem">
                        <div className="matrixArchItem__top">
                          <strong className="matrixArchItem__name">
                            {isEn ? arch.siteOrArtifactEn : arch.siteOrArtifactAm}
                          </strong>
                          {arch.era && <span className="matrixArchItem__era">{arch.era}</span>}
                        </div>
                        <p className="matrixArchItem__sig">
                          {isEn ? arch.significanceEn : arch.significanceAm}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Social Customs & Everyday Life */}
              {item.geopolitical.socialCustomsAm && (
                <div className="matrixSection">
                  <div className="matrixSection__label">
                    <span className="matrixSection__icon">📜</span>
                    <span>{isEn ? 'Ancient Legal & Social Customs' : 'የጥንት ሕግጋትና ማህበራዊ ሥርዓቶች'}</span>
                  </div>
                  <p className="matrixSection__p">
                    {isEn ? item.geopolitical.socialCustomsEn : item.geopolitical.socialCustomsAm}
                  </p>
                </div>
              )}

              {/* Quick Jump to Full Deep Dive */}
              <button
                type="button"
                className="matrixJumpBtn"
                onClick={() => setActiveLens('exposition')}
              >
                <span>📖 {isEn ? 'Explore In-Depth Chapter Exposition' : 'ሙሉውን ዝርዝር ታሪካዊና ነገረ-መለኮታዊ ትንታኔ አንብብ'}</span>
                <span className="matrixJumpBtn__arrow">→</span>
              </button>
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

              {/* Core Doctrines Chips */}
              {item.theological.coreDoctrinesAm && item.theological.coreDoctrinesAm.length > 0 && (
                <div className="matrixSection">
                  <div className="matrixSection__label">
                    <span className="matrixSection__icon">💎</span>
                    <span>{isEn ? 'Core Doctrines Taught Here' : 'በዚህ ክፍል የሚገኙ ዋና ዋና አስተምህሮዎች'}</span>
                  </div>
                  <div className="matrixDoctrinesList">
                    {(isEn ? item.theological.coreDoctrinesEn || [] : item.theological.coreDoctrinesAm).map((doc, idx) => (
                      <span key={idx} className="matrixDoctrineChip">
                        {doc}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Scriptural Cross-References */}
              {item.theological.crossReferences && item.theological.crossReferences.length > 0 && (
                <div className="matrixSection">
                  <div className="matrixSection__label">
                    <span className="matrixSection__icon">📖</span>
                    <span>{isEn ? 'Canonical Scriptural Cross-References' : 'ተዛማጅ የመጽሐፍ ቅዱስ ጥቅሶችና ማብራሪያዎች'}</span>
                  </div>
                  <div className="matrixCrossRefList">
                    {item.theological.crossReferences.map((ref, idx) => (
                      <div key={idx} className="matrixCrossRefItem">
                        <span className="matrixCrossRefItem__ref">{ref.ref}</span>
                        <span className="matrixCrossRefItem__note">
                          {isEn ? ref.noteEn : ref.noteAm}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick Jump to Full Deep Dive */}
              <button
                type="button"
                className="matrixJumpBtn"
                onClick={() => setActiveLens('exposition')}
              >
                <span>📖 {isEn ? 'Explore In-Depth Chapter Exposition' : 'ሙሉውን ዝርዝር ታሪካዊና ነገረ-መለኮታዊ ትንታኔ አንብብ'}</span>
                <span className="matrixJumpBtn__arrow">→</span>
              </button>
            </div>
          )}

          {/* 3. LINGUISTIC / HEBREW-GREEK ROOT LENS */}
          {activeLens === 'linguistic' && (
            <div className="matrixLensView matrixLensView--ling">
              <div className="matrixLinguisticHeader">
                <span className="matrixLinguisticHeader__count">
                  {item.linguistic.length} {isEn ? 'Theological Roots Analyzed' : 'የተተነተኑ ዋና ዋና ቃላት'}
                </span>
                <span className="matrixLinguisticHeader__badge">
                  {isEn ? 'Original Script & Etymology' : 'የመጀመሪያው ቋንቋና ሥርወ-ትርጉም'}
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
                      <div className="matrixLinguisticCard__badges">
                        {term.strongsNumber && (
                          <span className="matrixLinguisticCard__strongs">{term.strongsNumber}</span>
                        )}
                        <span className="matrixLinguisticCard__langBadge">{term.language}</span>
                      </div>
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
                        <strong>{isEn ? 'Theological & Ancient Nuance:' : 'ነገረ-መለኮታዊና ባህላዊ ጥልቀት፡'} </strong>
                        <span>{isEn ? term.theologicalDepthEn : term.theologicalDepthAm}</span>
                      </div>

                      <div className="matrixLinguisticCard__block matrixLinguisticCard__block--sub">
                        <strong>{isEn ? 'Canonical Usage & Scripture:' : 'በመጽሐፍ ቅዱስ አጠቃቀም፡'} </strong>
                        <span>{isEn ? term.canonicalUsageEn : term.canonicalUsageAm}</span>
                      </div>
                    </div>
                  </article>
                ))}
              </div>

              {/* Quick Jump to Full Deep Dive */}
              <button
                type="button"
                className="matrixJumpBtn"
                onClick={() => setActiveLens('exposition')}
              >
                <span>📖 {isEn ? 'Explore In-Depth Chapter Exposition' : 'ሙሉውን ዝርዝር ታሪካዊና ነገረ-መለኮታዊ ትንታኔ አንብብ'}</span>
                <span className="matrixJumpBtn__arrow">→</span>
              </button>
            </div>
          )}

          {/* 4. PSYCHOLOGICAL / HUMAN EXPERIENCE LENS */}
          {activeLens === 'psychological' && (
            <div className="matrixLensView matrixLensView--psych">
              <div className="matrixLensMeta">
                <div className="matrixLensMeta__badge">
                  <span className="matrixLensMeta__label">{isEn ? 'Primary Character(s)' : 'ዋና ገጸ-ባህሪያት'}</span>
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

              {/* Probing Meditation Questions */}
              {item.psychological.transformativeQuestionsAm && item.psychological.transformativeQuestionsAm.length > 0 && (
                <div className="matrixSection">
                  <div className="matrixSection__label">
                    <span className="matrixSection__icon">🕯️</span>
                    <span>{isEn ? 'Probing Questions for Self-Reflection' : 'ለግል ሕይወት ጥልቅ የማሰላሰያ ጥያቄዎች'}</span>
                  </div>
                  <ul className="matrixQuestionsList">
                    {(isEn ? item.psychological.transformativeQuestionsEn || [] : item.psychological.transformativeQuestionsAm).map((q, idx) => (
                      <li key={idx} className="matrixQuestionItem">
                        {q}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Quick Jump to Full Deep Dive */}
              <button
                type="button"
                className="matrixJumpBtn"
                onClick={() => setActiveLens('exposition')}
              >
                <span>📖 {isEn ? 'Explore In-Depth Chapter Exposition' : 'ሙሉውን ዝርዝር ታሪካዊና ነገረ-መለኮታዊ ትንታኔ አንብብ'}</span>
                <span className="matrixJumpBtn__arrow">→</span>
              </button>
            </div>
          )}

          {/* 5. IN-DEPTH EXPOSITION & COMPREHENSIVE DEEP DIVE */}
          {activeLens === 'exposition' && (
            <div className="matrixLensView matrixLensView--expo">
              {deep && (
                <>
                  {/* Executive Narrative Summary */}
                  <div className="matrixSection matrixSection--expoLead">
                    <div className="matrixSection__label">
                      <span className="matrixSection__icon">📚</span>
                      <span>{isEn ? 'Executive Narrative & Historical Synthesis' : 'አጠቃላይ የታሪክና የመንፈስ ዳራ ማጠቃለያ'}</span>
                    </div>
                    <p className="matrixSection__p matrixSection__p--lead">
                      {isEn ? deep.summaryEn : deep.summaryAm}
                    </p>
                  </div>

                  {/* Key Verses Exegesis */}
                  {deep.keyVersesExegesis && deep.keyVersesExegesis.length > 0 && (
                    <div className="matrixSection">
                      <div className="matrixSection__label">
                        <span className="matrixSection__icon">🔍</span>
                        <span>{isEn ? 'Key Verses In-Depth Exegesis' : 'የምዕራፉ ቁልፍ ጥቅሶች ዝርዝር ፍቺ'}</span>
                      </div>
                      <div className="matrixExegesisList">
                        {deep.keyVersesExegesis.map((kv: KeyVerseExegesis, idx: number) => (
                          <div key={idx} className="matrixExegesisCard">
                            <div className="matrixExegesisCard__header">
                              <span className="matrixExegesisCard__badge">{kv.verseRef}</span>
                            </div>
                            <blockquote className="matrixExegesisCard__quote">
                              “{isEn ? kv.textEn : kv.textAm}”
                            </blockquote>
                            <div className="matrixExegesisCard__body">
                              <strong>{isEn ? 'Theological Insight & Meaning:' : 'ነገረ-መለኮታዊ ትንታኔና ትርጉም፡'} </strong>
                              <span>{isEn ? kv.exegesisEn : kv.exegesisAm}</span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Historical & Archaeological Dossier */}
                  <div className="matrixSection">
                    <div className="matrixSection__label">
                      <span className="matrixSection__icon">🏛️</span>
                      <span>{isEn ? 'Historical Reality & Imperial Politics' : 'ታሪካዊ ነባራዊ ሁኔታና የፖለቲካ ድባብ'}</span>
                    </div>
                    <p className="matrixSection__p">
                      {isEn ? deep.historicalDossierEn : deep.historicalDossierAm}
                    </p>
                  </div>

                  {/* Covenantal & Typological Architecture */}
                  <div className="matrixSection">
                    <div className="matrixSection__label">
                      <span className="matrixSection__icon">✝️</span>
                      <span>{isEn ? 'Covenant Progression & Divine Blueprint' : 'የቃል ኪዳን ደረጃና መለኮታዊ ንድፍ'}</span>
                    </div>
                    <p className="matrixSection__p">
                      {isEn ? deep.covenantalFrameworkEn : deep.covenantalFrameworkAm}
                    </p>
                  </div>

                  {/* Original Language Linguistic Depth */}
                  <div className="matrixSection">
                    <div className="matrixSection__label">
                      <span className="matrixSection__icon">🔤</span>
                      <span>{isEn ? 'Original Language Root Etymology' : 'የመጀመሪያ ቋንቋዎች የሥነ-ቃል ትንታኔ'}</span>
                    </div>
                    <p className="matrixSection__p">
                      {isEn ? deep.linguisticInsightsEn : deep.linguisticInsightsAm}
                    </p>
                  </div>

                  {/* Human Heart & Psychological Anatomy */}
                  <div className="matrixSection">
                    <div className="matrixSection__label">
                      <span className="matrixSection__icon">🧠</span>
                      <span>{isEn ? 'Human Heart & Psychological Anatomy' : 'የሰው ልጅ ውስጣዊ ቀውስና ስነ-ልቦናዊ ትግል'}</span>
                    </div>
                    <p className="matrixSection__p">
                      {isEn ? deep.humanHeartAnalysisEn : deep.humanHeartAnalysisAm}
                    </p>
                  </div>

                  {/* Theological Q&A Accordion */}
                  {deep.theologicalQandA && deep.theologicalQandA.length > 0 && (
                    <div className="matrixSection">
                      <div className="matrixSection__label">
                        <span className="matrixSection__icon">❓</span>
                        <span>{isEn ? 'Frequently Asked Theological Questions' : 'በዚህ ምዕራፍ የሚነሱ ጥያቄዎችና ጥልቅ መልሶቻቸው'}</span>
                      </div>
                      <div className="matrixQAList">
                        {deep.theologicalQandA.map((qa: TheologicalQA, idx: number) => {
                          const isOpen = openQAIndex === idx
                          return (
                            <div key={idx} className={`matrixQACard ${isOpen ? 'is-open' : ''}`}>
                              <button
                                type="button"
                                className="matrixQACard__btn"
                                onClick={() => setOpenQAIndex(isOpen ? null : idx)}
                                aria-expanded={isOpen}
                              >
                                <span className="matrixQACard__q">
                                  {isEn ? qa.questionEn : qa.questionAm}
                                </span>
                                <span className="matrixQACard__chevron">{isOpen ? '▲' : '▼'}</span>
                              </button>
                              {isOpen && (
                                <div className="matrixQACard__ans">
                                  <p>{isEn ? qa.answerEn : qa.answerAm}</p>
                                </div>
                              )}
                            </div>
                          )
                        })}
                      </div>
                    </div>
                  )}

                  {/* Transformative Takeaways */}
                  {deep.transformativeTakeawaysAm && deep.transformativeTakeawaysAm.length > 0 && (
                    <div className="matrixSection matrixSection--takeaways">
                      <div className="matrixSection__label">
                        <span className="matrixSection__icon">🌟</span>
                        <span>{isEn ? 'Transformative Life Takeaways' : 'ለዕለት ተዕለት ሕይወት የሚሆኑ ተግባራዊ ትምህርቶች'}</span>
                      </div>
                      <ul className="matrixTakeawaysList">
                        {(isEn ? deep.transformativeTakeawaysEn : deep.transformativeTakeawaysAm).map((t, idx) => (
                          <li key={idx} className="matrixTakeawayItem">
                            <span className="matrixTakeawayItem__num">{idx + 1}</span>
                            <span className="matrixTakeawayItem__text">{t}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </>
              )}
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
