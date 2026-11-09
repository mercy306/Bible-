import { useState, type ReactNode } from 'react'
import { useReadingPlan } from '../readingPlan'
import {
  ACCENTS,
  FONTS,
  LANGUAGES,
  SIZE_RANGE,
  THEMES,
  type LanguageMode,
  type Prefs,
} from '../prefs'
import type { Route } from '../route'
import type { Translation } from '../types'

interface Props {
  route: Route
  translations: Translation[]
  prefs: Prefs
  setPref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void
  compare: 'off' | 'am54'
  memorize: boolean
  onCompare: (value: 'off' | 'am54') => void
  onMemorize: (value: boolean) => void
  wordLookup: boolean
  onWordLookup: (value: boolean) => void
  onTranslation: (id: string) => void
  onLanguage?: (lang: LanguageMode) => void
  onSearch: () => void
  onSaved: () => void
  onPrayers: () => void
  onPlan?: () => void
  onSaga?: () => void
  onLineage?: () => void
  onAtlas?: () => void
  onTimeCapsule?: () => void
  savedCount: number
  prayerCount: number
  onGoTo: (reference: string) => void
  onPrint: () => void
}

type Tab = 'read' | 'look' | 'tools'

/** One labelled control on one row with optional description */
function Row({
  label,
  description,
  children,
}: {
  label: string
  description?: string
  children: ReactNode
}) {
  return (
    <div className="mrow">
      <div className="mrow__text">
        <span className="mrow__label">{label}</span>
        {description && <span className="mrow__desc">{description}</span>}
      </div>
      <div className="mrow__control">{children}</div>
    </div>
  )
}

/** Slider control for comfort settings like text size */
function Slide({
  label,
  description,
  min,
  max,
  step,
  value,
  show,
  onChange,
}: {
  label: string
  description?: string
  min: number
  max: number
  step: number
  value: number
  show: (v: number) => string
  onChange: (v: number) => void
}) {
  return (
    <Row label={label} description={description}>
      <div className="slider__wrap slider__wrap--inline">
        <input
          type="range"
          className="slider"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          aria-label={label}
        />
        <span className="slider__label">{show(value)}</span>
      </div>
    </Row>
  )
}

/** Segmented on/off switch */
function OnOff({
  label,
  description,
  on,
  onChange,
  yes = 'On',
  no = 'Off',
}: {
  label: string
  description?: string
  on: boolean
  onChange: (v: boolean) => void
  yes?: string
  no?: string
}) {
  return (
    <Row label={label} description={description}>
      <div className="segbar segbar--tiny" role="group" aria-label={label}>
        <button
          type="button"
          className={`segbar__btn ${!on ? 'is-active' : ''}`}
          onClick={() => onChange(false)}
          aria-pressed={!on}
        >
          {no}
        </button>
        <button
          type="button"
          className={`segbar__btn ${on ? 'is-active' : ''}`}
          onClick={() => onChange(true)}
          aria-pressed={on}
        >
          {yes}
        </button>
      </div>
    </Row>
  )
}

/**
 * Settings & Appearance Body:
 * Organized into 3 classic tabs (Reading, Look, Tools) as requested,
 * with thoroughly fixed, polished, and descriptive inside texts in Amharic & English.
 */
export default function MoreSheetBody({
  route: _route,
  translations: _translations,
  prefs,
  setPref,
  compare: _compare,
  memorize,
  onCompare: _onCompare,
  onMemorize,
  wordLookup,
  onWordLookup,
  onTranslation: _onTranslation,
  onLanguage,
  onSearch,
  onSaved: _onSaved,
  onPrayers: _onPrayers,
  onPlan,
  onSaga,
  onLineage,
  onAtlas,
  onTimeCapsule,
  savedCount: _savedCount,
  prayerCount: _prayerCount,
  onGoTo,
  onPrint,
}: Props) {
  const [tab, setTab] = useState<Tab>('read')
  const [reference, setReference] = useState('')
  const isEn = prefs.language === 'en'
  const planInfo = useReadingPlan()

  const tabs: { id: Tab; label: string }[] = [
    { id: 'read', label: isEn ? 'Reading' : 'ንባብ' },
    { id: 'look', label: isEn ? 'Look' : 'ገጽታ' },
    { id: 'tools', label: isEn ? 'Tools' : 'መሳሪያዎች' },
  ]

  return (
    <>
      {/* 3 Classic Tabs Navigation */}
      <nav className="mtabs" aria-label={isEn ? "Settings sections" : "የማስተካከያ ክፍሎች"}>
        {tabs.map((item) => (
          <button
            key={item.id}
            type="button"
            className={`mtabs__btn ${tab === item.id ? 'is-active' : ''}`}
            onClick={() => setTab(item.id)}
            aria-pressed={tab === item.id}
          >
            {item.label}
          </button>
        ))}
      </nav>

      {/* =====================================================================
          TAB 1: READING (ንባብ)
          ===================================================================== */}
      {tab === 'read' && (
        <div className="mlist">
          {/* Language Selection */}
          <Row
            label={isEn ? "Interface Language" : "የመተግበሪያው ቋንቋ"}
            description={isEn ? "Select display language" : "የመተግበሪያውን ቋንቋ ይምረጡ"}
          >
            <div className="segbar segbar--tiny" role="group" aria-label={isEn ? "Language shown" : "የሚታይ ቋንቋ"}>
              {LANGUAGES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`segbar__btn ${prefs.language === item.id ? 'is-active' : ''}`}
                  onClick={() => {
                    setPref('language', item.id)
                    onLanguage?.(item.id)
                  }}
                  aria-pressed={prefs.language === item.id}
                  aria-label={item.note}
                  title={item.note}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </Row>

          {/* Text Size Slider */}
          <Slide
            label={isEn ? "Font Size" : "የፊደል መጠን"}
            description={isEn ? "Adjust reading text size (14px – 34px)" : "የንባቡን ፊደል መጠን ከ 14px እስከ 34px ያስተካክሉ"}
            min={SIZE_RANGE.min}
            max={SIZE_RANGE.max}
            step={SIZE_RANGE.step}
            value={prefs.sizePx}
            show={(v) => `${v}px`}
            onChange={(v) => setPref('sizePx', v)}
          />

          {/* Typeface Selection */}
          <Row
            label={isEn ? "Sacred Typeface" : "የፊደል ቅርጽ"}
            description={isEn ? "Curated fonts for Ethiopic & Latin scripts" : "ለግዕዝና ለአማርኛ የተመቻቹ ውብ ቅርጾች"}
          >
            <div className="segbar segbar--tiny" role="group" aria-label={isEn ? "Typeface" : "የፊደል ቅርጽ"}>
              {FONTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`segbar__btn ${prefs.font === item.id ? 'is-active' : ''}`}
                  onClick={() => setPref('font', item.id)}
                  aria-pressed={prefs.font === item.id}
                  data-font={item.id}
                  aria-label={item.note}
                  title={item.note}
                >
                  {isEn ? item.label : item.am}
                </button>
              ))}
            </div>
          </Row>

          {/* Live Sample Reading Text */}
          <p className="msample" lang={isEn ? 'en' : 'am'}>
            {isEn
              ? '“In the beginning God created the heaven and the earth.”'
              : '«በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።»'}
          </p>
        </div>
      )}

      {/* =====================================================================
          TAB 2: LOOK / APPEARANCE (ገጽታ)
          ===================================================================== */}
      {tab === 'look' && (
        <div className="mlist">
          {/* Theme Palette Grid */}
          <Row
            label={isEn ? "Reading Theme" : "የቀለም ገጽታ"}
            description={isEn ? "12 eye-comfort background themes" : "ለዓይን ምቹ የሆኑ 12 የተመረጡ የቀለም አማራጮች"}
          >
            <div className="themePaletteGrid" role="radiogroup" aria-label={isEn ? "Theme presets" : "የገጽታ አማራጮች"}>
              {THEMES.map((item) => {
                const isActive = prefs.theme === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`themePaletteCard ${isActive ? 'is-active' : ''}`}
                    onClick={() => setPref('theme', item.id)}
                    role="radio"
                    aria-checked={isActive}
                    title={item.note}
                  >
                    <div
                      className="themePalettePreview"
                      style={{ background: item.bg, color: item.ink }}
                    >
                      Aa
                    </div>
                    <span className="themePaletteLabel">
                      {isEn ? item.label : item.am}
                    </span>
                  </button>
                )
              })}
            </div>
          </Row>

          {/* Accent Color Swatches & Custom Color Wheel */}
          <Row
            label={isEn ? "Accent & Highlight Color" : "የማድመቂያ ቀለም"}
            description={isEn ? "Color for active buttons, markers & highlights" : "ለአዝራሮች፣ ለምልክቶችና ለማድመቂያ የሚሆን ቀለም"}
          >
            <div className="accentSwatchesRow" role="radiogroup" aria-label={isEn ? "Accent color options" : "የማድመቂያ ቀለም አማራጮች"}>
              {ACCENTS.map((item) => {
                const isActive = prefs.accent === item.id
                return (
                  <button
                    key={item.id}
                    type="button"
                    className={`accentSwatchBtn ${isActive ? 'is-active' : ''}`}
                    style={{ background: item.swatch }}
                    onClick={() => {
                      setPref('accent', item.id)
                      if (prefs.customColor) setPref('customColor', '')
                    }}
                    role="radio"
                    aria-checked={isActive}
                    title={isEn ? item.label : item.am}
                    aria-label={isEn ? item.label : item.am}
                  />
                )
              })}

              {/* Custom Color Wheel Swatch */}
              <label
                className={`accentSwatchBtn accentSwatchBtn--custom ${prefs.accent === 'custom' ? 'is-active' : ''}`}
                title={isEn ? "Custom Color Wheel (Select any color)" : "ብጁ ቀለም (የራስዎ ምርጫ)"}
                aria-label={isEn ? "Custom Color Wheel" : "ብጁ ቀለም"}
                style={{
                  background: prefs.accent === 'custom' && prefs.customColor
                    ? prefs.customColor
                    : 'conic-gradient(from 180deg at 50% 50%, #f43f5e, #fb923c, #facc15, #4ade80, #38bdf8, #818cf8, #c084fc, #f43f5e)',
                  position: 'relative',
                  cursor: 'pointer',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <input
                  type="color"
                  value={prefs.customColor || '#d4af37'}
                  style={{
                    opacity: 0,
                    position: 'absolute',
                    inset: 0,
                    width: '100%',
                    height: '100%',
                    cursor: 'pointer',
                  }}
                  onChange={(e) => {
                    const color = e.target.value
                    setPref('customColor', color)
                    setPref('accent', 'custom')
                  }}
                />
                <span style={{ fontSize: '0.85rem', pointerEvents: 'none', filter: 'drop-shadow(0 1px 2px rgba(0,0,0,0.6))' }}>🎨</span>
              </label>
            </div>
          </Row>
        </div>
      )}

      {/* =====================================================================
          TAB 3: TOOLS & STUDY AIDS (መሳሪያዎች)
          ===================================================================== */}
      {tab === 'tools' && (
        <div className="mlist">
          {/* Annual Reading Plan */}
          {onPlan && (
            <button type="button" className="mwide mwide--rich" onClick={() => onPlan()}>
              <div className="mwide__body">
                <span className="mwide__title">📖 {isEn ? 'Annual Reading Plan & Progress' : 'የዓመት ንባብ እቅድና እድገት'}</span>
                <span className="mwide__subtitle">
                  {isEn
                    ? 'Track daily scriptures, build reading streaks & complete the Bible'
                    : 'ዕለታዊ የንባብ መርሐ ግብር፣ የንባብ ልምምድ እና የቀን እድገት'}
                </span>
              </div>
              <span className="mwide__count">
                {planInfo.streak.currentStreak > 0 ? `🔥 ${planInfo.streak.currentStreak}d • ` : ''}
                {planInfo.planCompletedPercent}%
              </span>
            </button>
          )}

          {/* Epic Chronological Saga */}
          {onSaga && (
            <button type="button" className="mwide mwide--rich" onClick={() => onSaga()}>
              <div className="mwide__body">
                <span className="mwide__title">👑 {isEn ? 'Epic Chronological Saga' : 'የዘመን ታሪክ ቅደም ተከተል'}</span>
                <span className="mwide__subtitle">
                  {isEn
                    ? '5 grand chronological acts from Creation to Eternity unfolding the narrative'
                    : 'ከፍጥረት እስከ ዘላለም 5ቱ ታላላቅ የመጽሐፍ ቅዱስ ምዕራፎች በቅደም ተከተል'}
                </span>
              </div>
              <span className="mwide__count">{isEn ? '5 Acts' : '5 ዘመናት'}</span>
            </button>
          )}

          {/* Genealogical & Cultural Web */}
          {onLineage && (
            <button type="button" className="mwide mwide--rich" onClick={() => onLineage()}>
              <div className="mwide__body">
                <span className="mwide__title">🌳 {isEn ? 'Genealogical & Cultural Web' : 'የትውልድ ሐረግና የቤተሰብ ትሥሥር'}</span>
                <span className="mwide__subtitle">
                  {isEn
                    ? 'Explore biblical family trees, Adam to David, multiple families & cultural heritage'
                    : 'የአዳም፣ የኖኅ፣ የአብርሃምና የዳዊት ቤተሰቦች ትሥሥር፣ የዘር ሐረግና ባህላዊ ቅርስ'}
                </span>
              </div>
              <span className="mwide__count">{isEn ? 'Roots' : 'ትሥሥር'}</span>
            </button>
          )}

          {/* Living Chrono-Atlas */}
          {onAtlas && (
            <button type="button" className="mwide mwide--rich" onClick={() => onAtlas()}>
              <div className="mwide__body">
                <span className="mwide__title">🗺️ {isEn ? 'The Living Chrono-Atlas' : 'የመጽሐፍ ቅዱስ ሕያው የጉዞ ካርታ'}</span>
                <span className="mwide__subtitle">
                  {isEn
                    ? 'Interactive journeys, sacred geography & historical routes on an offline map'
                    : 'የቀደምት አባቶች ጉዞዎች፣ ቦታዎችና ታሪካዊ ክስተቶች በይነተገናኝ ካርታ'}
                </span>
              </div>
              <span className="mwide__count">{isEn ? 'Atlas' : 'ካርታ'}</span>
            </button>
          )}

          {/* Generation Time-Capsule */}
          {onTimeCapsule && (
            <button type="button" className="mwide mwide--rich" onClick={() => onTimeCapsule()}>
              <div className="mwide__body">
                <span className="mwide__title">⏳ {isEn ? 'The Generation Time-Capsule' : 'የዘመኑ እውነታና ታሪካዊ አውድ'}</span>
                <span className="mwide__subtitle">
                  {isEn
                    ? 'Historical context, archaeological insights & cultural backdrop of scripture'
                    : 'የጥቅሱ ዘመን ማኅበራዊ፣ ባህላዊና ፖለቲካዊ ዳራ በጊዜ መስመር'}
                </span>
              </div>
              <span className="mwide__count">{isEn ? 'Context' : 'አውድ'}</span>
            </button>
          )}

          {/* Direct Passage Navigation */}
          <form
            className="mrow"
            onSubmit={(e) => {
              e.preventDefault()
              if (reference.trim()) onGoTo(reference.trim())
            }}
          >
            <div className="mrow__text">
              <span className="mrow__label">{isEn ? 'Go to Passage' : 'ወደ ጥቅስ ይሂዱ'}</span>
              <span className="mrow__desc">
                {isEn ? 'Enter book, chapter and verse' : 'የመጽሐፍና ምዕራፍ ቁጥር ያስገቡ (ምሳሌ፦ ዮሐንስ 3:16)'}
              </span>
            </div>
            <div className="mrow__control mrow__control--pair">
              <input
                className="textfield textfield--sm"
                type="text"
                value={reference}
                onChange={(e) => setReference(e.target.value)}
                placeholder={isEn ? "John 3:16" : "ዮሐንስ 3:16"}
                aria-label={isEn ? "Go to a passage" : "ወደ ጥቅስ ይሂዱ"}
              />
              <button className="btn btn--accent btn--sm" type="submit">
                {isEn ? 'Go' : 'ሂድ'}
              </button>
            </div>
          </form>

          {/* Search Bible & Commentary */}
          <button type="button" className="mwide mwide--rich" onClick={() => onSearch()}>
            <div className="mwide__body">
              <span className="mwide__title">🔍 {isEn ? 'Search Bible & Commentary' : 'መጽሐፍ ቅዱስንና ማብራሪያውን ፈልግ'}</span>
              <span className="mwide__subtitle">
                {isEn
                  ? 'Search words and phrases across all 66 books and offline commentary'
                  : 'በሁሉም 66 መጻሕፍትና ማብራሪያዎች ውስጥ ቃላትንና ጥቅሶችን ፈልግ'}
              </span>
            </div>
            <span className="mwide__count">›</span>
          </button>

          {/* Verse Memorization Mode */}
          <OnOff
            label={isEn ? "Verse Memorization Mode" : "ጥቅስ የማስታወስ ልምምድ (Memorization)"}
            description={
              isEn
                ? "Gradually obscure words to practice memorizing sacred scripture verses"
                : "ቃላትን በመደበቅ ጥቅሶችን በቃለ አጋኖ ለማጥናትና ለመሸምደድ"
            }
            on={memorize}
            onChange={onMemorize}
            yes={isEn ? "On" : "አብራ"}
            no={isEn ? "Off" : "አጥፋ"}
          />

          {/* Word Lookup & Lexicon */}
          <OnOff
            label={isEn ? "Word Lookup & Strong's Lexicon" : "የቃላት ፍቺና መዝገበ ቃላት (Word Lookup)"}
            description={
              isEn
                ? "Tap words while reading to view Greek/Hebrew Strong's & Ge'ez roots"
                : "በንባብ ላይ ቃላትን ሲነኩ የግዕዝ፣ የዕብራይስጥና የግሪክ (Strong's) ፍቺ ያሳያል"
            }
            on={wordLookup}
            onChange={onWordLookup}
            yes={isEn ? "On" : "አብራ"}
            no={isEn ? "Off" : "አጥፋ"}
          />

          {/* Print / Save Chapter */}
          <button type="button" className="mwide mwide--rich" onClick={onPrint}>
            <div className="mwide__body">
              <span className="mwide__title">🖨️ {isEn ? 'Print or Export Chapter' : 'ይህንን ምዕራፍ አትም ወይም አስቀምጥ'}</span>
              <span className="mwide__subtitle">
                {isEn
                  ? 'Format current scripture chapter for paper printing or clean PDF saving'
                  : 'የአሁኑን ምዕራፍ ለህትመት ወይም ለፒዲኤፍ (PDF) ማዘጋጀት'}
              </span>
            </div>
            <span className="mwide__count">›</span>
          </button>
        </div>
      )}
    </>
  )
}
