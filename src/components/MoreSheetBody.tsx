import { useState, type ReactNode } from 'react'
import { useReadingPlan } from '../readingPlan'
import {
  ACCENTS,
  FONTS,
  PARAGRAPH_RANGE,
  SIZE_RANGE,
  THEMES,
  type Prefs,
} from '../prefs'

interface Props {
  prefs: Prefs
  setPref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void
  compare: 'off' | 'am54'
  memorize: boolean
  onCompare: (value: 'off' | 'am54') => void
  onMemorize: (value: boolean) => void
  wordLookup: boolean
  onWordLookup: (value: boolean) => void
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

type Tab = 'look' | 'tools'

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
 * Reading Preferences — one expandable card containing the reading
 * customization controls (font size, verse spacing, verse numbers, typeface).
 */
function ReadingPreferences({
  prefs,
  setPref,
  isEn,
}: {
  prefs: Prefs
  setPref: <K extends keyof Prefs>(key: K, value: Prefs[K]) => void
  isEn: boolean
}) {
  const [expanded, setExpanded] = useState(false)

  return (
    <div
      className="rpcard"
      role="region"
      aria-label={isEn ? 'Reading Preferences' : 'የማንበብ ምርጫዎች'}
    >
      <button
        type="button"
        className={`rpcard__header ${expanded ? 'is-expanded' : ''}`}
        onClick={() => setExpanded((v) => !v)}
        aria-expanded={expanded}
      >
        <span className="rpcard__headLeft">
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M3 12h18M3 6h18M3 18h18" />
          </svg>
          <span className="rpcard__title">{isEn ? 'Reading Preferences' : 'የማንበብ ምርጫዎች'}</span>
        </span>
        <span className="rpcard__subtitle">{isEn ? 'Customize your reading experience' : 'የአንበሳን ንባብ እንዲሁም እህትዎትን ያስለውምን'}</span>
        <svg
          viewBox="0 0 24 24"
          width="16"
          height="16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
          className={`rpcard__chev ${expanded ? 'is-open' : ''}`}
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {expanded && (
        <div className={`rpcard__body ${expanded ? 'is-visible' : ''}`}>
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
          <Slide
            label={isEn ? "Verse Spacing" : "የጥቅሶች ክፍተት"}
            description={isEn ? "Shrink the gap between verses (0 = tightest)" : "በጥቅሶች መካከል ያለውን ክፍተት ይቀንሱ (0 = በጣም የተጠጋ)"}
            min={PARAGRAPH_RANGE.min}
            max={PARAGRAPH_RANGE.max}
            step={PARAGRAPH_RANGE.step}
            value={prefs.paragraphGap}
            show={(v) => `${v}px`}
            onChange={(v) => setPref('paragraphGap', v)}
          />
          <OnOff
            label={isEn ? "Verse Numbers" : "የጥቅስ ቁጥሮች"}
            description={isEn ? "Hide the numbers for clean centred text" : "ለንጹሕ መሃከለኛ ጽሑፍ ቁጥሮቹን ደብቅ"}
            on={prefs.verseNumbers}
            onChange={(v) => setPref('verseNumbers', v)}
            yes={isEn ? 'Show' : 'አሳይ'}
            no={isEn ? 'Hide' : 'ደብቅ'}
          />
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
        </div>
      )}
    </div>
  )
}

/**
 * Settings & Appearance Body:
 * Organized into 2 classic tabs (Look, Tools) as requested,
 * with thoroughly fixed, polished, and descriptive inside texts in Amharic & English.
 */
export default function MoreSheetBody({
  prefs,
  setPref,
  compare: _compare,
  memorize,
  onCompare: _onCompare,
  onMemorize,
  wordLookup,
  onWordLookup,
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
  const [tab, setTab] = useState<Tab>('look')
  const [reference, setReference] = useState('')
  const isEn = prefs.language === 'en'
  const planInfo = useReadingPlan()

  const tabs: { id: Tab; label: string }[] = [
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
      {/* =====================================================================
          TAB 1: LOOK / APPEARANCE (ገጽታ)
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

          {/* Reading Preferences (Font Size, Verse Spacing, Verse Numbers, Typeface) */}
          <ReadingPreferences prefs={prefs} setPref={setPref} isEn={isEn} />
        </div>
      )}

      {/* =====================================================================
          TAB 3: TOOLS & STUDY AIDS (መሳሪያዎች)
          ===================================================================== */}
      {tab === 'tools' && (
        <div className="mlist">
          <span className="toolsSectionLabel">
            {isEn ? 'Interactive Study Aids' : 'የጥናት ክፍሎች'}
          </span>

          <div className="toolsGrid">
            {/* Annual Reading Plan */}
            {onPlan && (
              <button type="button" className="toolCard" onClick={() => onPlan()}>
                <span className="toolCard__icon">📖</span>
                <div className="toolCard__info">
                  <span className="toolCard__title">{isEn ? 'Reading Plan' : 'የዓመት ንባብ'}</span>
                  <span className="toolCard__badge">
                    {planInfo.streak.currentStreak > 0 ? `🔥 ${planInfo.streak.currentStreak}d • ` : ''}
                    {planInfo.planCompletedPercent}%
                  </span>
                </div>
              </button>
            )}

            {/* Epic Chronological Saga */}
            {onSaga && (
              <button type="button" className="toolCard" onClick={() => onSaga()}>
                <span className="toolCard__icon">👑</span>
                <div className="toolCard__info">
                  <span className="toolCard__title">{isEn ? 'Chrono Saga' : 'የዘመን ታሪክ'}</span>
                  <span className="toolCard__badge">{isEn ? '5 Acts' : '5 ዘመናት'}</span>
                </div>
              </button>
            )}

            {/* Genealogical & Cultural Web */}
            {onLineage && (
              <button type="button" className="toolCard" onClick={() => onLineage()}>
                <span className="toolCard__icon">🌳</span>
                <div className="toolCard__info">
                  <span className="toolCard__title">{isEn ? 'Family Web' : 'የትውልድ ሐረግ'}</span>
                  <span className="toolCard__badge">{isEn ? '12 Tribes' : '12ቱ ነገዶች'}</span>
                </div>
              </button>
            )}

            {/* Living Chrono-Atlas */}
            {onAtlas && (
              <button type="button" className="toolCard" onClick={() => onAtlas()}>
                <span className="toolCard__icon">🗺️</span>
                <div className="toolCard__info">
                  <span className="toolCard__title">{isEn ? 'Chrono-Atlas' : 'የጉዞ ካርታ'}</span>
                  <span className="toolCard__badge">{isEn ? 'Map' : 'ካርታ'}</span>
                </div>
              </button>
            )}

            {/* Generation Time-Capsule */}
            {onTimeCapsule && (
              <button type="button" className="toolCard" onClick={() => onTimeCapsule()}>
                <span className="toolCard__icon">⏳</span>
                <div className="toolCard__info">
                  <span className="toolCard__title">{isEn ? 'Time-Capsule' : 'የዘመኑ አውድ'}</span>
                  <span className="toolCard__badge">{isEn ? 'History' : 'አውድ'}</span>
                </div>
              </button>
            )}

            {/* Search Bible & Commentary */}
            <button type="button" className="toolCard" onClick={() => onSearch()}>
              <span className="toolCard__icon">🔍</span>
              <div className="toolCard__info">
                <span className="toolCard__title">{isEn ? 'Search Bible' : 'መጽሐፍ ቅዱስ ፈልግ'}</span>
                <span className="toolCard__badge">{isEn ? 'Search' : 'ፈልግ'}</span>
              </div>
            </button>
          </div>

          {/* Quick Jump Bar */}
          <form
            className="quickJumpBar"
            onSubmit={(e) => {
              e.preventDefault()
              if (reference.trim()) onGoTo(reference.trim())
            }}
          >
            <span className="quickJumpBar__icon">📖</span>
            <input
              className="quickJumpBar__input"
              type="text"
              value={reference}
              onChange={(e) => setReference(e.target.value)}
              placeholder={isEn ? "Go to passage (e.g. John 3:16)..." : "ወደ ጥቅስ ይሂዱ (ምሳሌ፦ ዮሐንስ 3:16)..."}
              aria-label={isEn ? "Go to a passage" : "ወደ ጥቅስ ይሂዱ"}
            />
            <button className="quickJumpBar__btn" type="submit">
              {isEn ? 'Go ›' : 'ሂድ ›'}
            </button>
          </form>

          {/* 2-Column Toggle Grid for Memorization & Word Lookup */}
          <div className="toggleGrid">
            <div className="toggleCard">
              <span className="toggleCard__label">
                🧠 {isEn ? 'Memorize' : 'ጥቅስ ማስታወስ'}
              </span>
              <div className="segbar segbar--tiny" role="group" aria-label={isEn ? "Verse Memorization" : "ጥቅስ የማስታወስ ልምምድ"}>
                <button
                  type="button"
                  className={`segbar__btn ${!memorize ? 'is-active' : ''}`}
                  onClick={() => onMemorize(false)}
                  aria-pressed={!memorize}
                >
                  {isEn ? 'Off' : 'አጥፋ'}
                </button>
                <button
                  type="button"
                  className={`segbar__btn ${memorize ? 'is-active' : ''}`}
                  onClick={() => onMemorize(true)}
                  aria-pressed={memorize}
                >
                  {isEn ? 'On' : 'አብራ'}
                </button>
              </div>
            </div>

            <div className="toggleCard">
              <span className="toggleCard__label">
                🔤 {isEn ? 'Lexicon' : 'የቃላት ፍቺ'}
              </span>
              <div className="segbar segbar--tiny" role="group" aria-label={isEn ? "Word Lookup" : "የቃላት ፍቺ"}>
                <button
                  type="button"
                  className={`segbar__btn ${!wordLookup ? 'is-active' : ''}`}
                  onClick={() => onWordLookup(false)}
                  aria-pressed={!wordLookup}
                >
                  {isEn ? 'Off' : 'አጥፋ'}
                </button>
                <button
                  type="button"
                  className={`segbar__btn ${wordLookup ? 'is-active' : ''}`}
                  onClick={() => onWordLookup(true)}
                  aria-pressed={wordLookup}
                >
                  {isEn ? 'On' : 'አብራ'}
                </button>
              </div>
            </div>
          </div>

          {/* Print / Save Chapter */}
          <button type="button" className="compactPrintBtn" onClick={onPrint}>
            <span>🖨️ {isEn ? 'Print or Export Chapter' : 'ይህንን ምዕራፍ አትም / አስቀምጥ'}</span>
            <span style={{ fontSize: '11.5px', color: 'var(--accent)', fontWeight: 700 }}>PDF / Print ›</span>
          </button>
        </div>
      )}
    </>
  )
}
