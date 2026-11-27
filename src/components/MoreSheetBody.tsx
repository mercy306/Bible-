import { useState } from 'react'
import { useReadingPlan } from '../readingPlan'
import {
  ACCENTS,
  FONTS,
  FONT_WEIGHTS,
  LEADING_RANGE,
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
          {/* Section 1: Themes */}
          <span className="toolsSectionLabel">
            {isEn ? 'Reading Themes' : 'የቀለም ገጽታ'}
          </span>
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

          {/* Section 2: Accent Swatches */}
          <span className="toolsSectionLabel">
            {isEn ? 'Accent & Highlight Color' : 'የማድመቂያ ቀለም'}
          </span>
          <div className="compactAccentCard">
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
                title={isEn ? "Custom Color Wheel" : "ብጁ ቀለም (የራስዎ ምርጫ)"}
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
                <span style={{ fontSize: '0.8rem', pointerEvents: 'none' }}>🎨</span>
              </label>
            </div>
          </div>

          {/* Section 3: Text & Reading Comfort */}
          <span className="toolsSectionLabel">
            {isEn ? 'Reading Comfort' : 'የንባብ ማስተካከያ'}
          </span>

          {/* Font Size Slider Card */}
          <div className="compactSliderCard">
            <span className="compactSliderCard__label">🔤 {isEn ? 'Font Size' : 'የፊደል መጠን'}</span>
            <div className="compactSliderCard__controls">
              <input
                type="range"
                className="slider"
                min={SIZE_RANGE.min}
                max={SIZE_RANGE.max}
                step={SIZE_RANGE.step}
                value={prefs.sizePx}
                onChange={(e) => setPref('sizePx', Number(e.target.value))}
                aria-label={isEn ? 'Font Size' : 'የፊደል መጠን'}
              />
              <span className="compactSliderCard__badge">{prefs.sizePx}px</span>
            </div>
          </div>

          {/* Verse Spacing Slider Card */}
          <div className="compactSliderCard">
            <span className="compactSliderCard__label">↕️ {isEn ? 'Verse Gap' : 'የጥቅስ ክፍተት'}</span>
            <div className="compactSliderCard__controls">
              <input
                type="range"
                className="slider"
                min={PARAGRAPH_RANGE.min}
                max={PARAGRAPH_RANGE.max}
                step={PARAGRAPH_RANGE.step}
                value={prefs.paragraphGap}
                onChange={(e) => setPref('paragraphGap', Number(e.target.value))}
                aria-label={isEn ? 'Verse Gap' : 'የጥቅስ ክፍተት'}
              />
              <span className="compactSliderCard__badge">{prefs.paragraphGap}px</span>
            </div>
          </div>

          {/* Line Height Slider Card */}
          <div className="compactSliderCard">
            <span className="compactSliderCard__label">📏 {isEn ? 'Line Spacing' : 'የመስመር ክፍተት'}</span>
            <div className="compactSliderCard__controls">
              <input
                type="range"
                className="slider"
                min={LEADING_RANGE.min}
                max={LEADING_RANGE.max}
                step={LEADING_RANGE.step}
                value={prefs.leading || 1.85}
                onChange={(e) => setPref('leading', Number(e.target.value))}
                aria-label={isEn ? 'Line Spacing' : 'የመስመር ክፍተት'}
              />
              <span className="compactSliderCard__badge">{(prefs.leading || 1.85).toFixed(2)}</span>
            </div>
          </div>

          {/* 2-Column Toggles: Verse Numbers & Font Weight */}
          <div className="toggleGrid">
            <div className="toggleCard">
              <span className="toggleCard__label">🔢 {isEn ? 'Verse Nrs' : 'የጥቅስ ቁጥሮች'}</span>
              <div className="segbar segbar--tiny" role="group" aria-label={isEn ? 'Verse Numbers' : 'የጥቅስ ቁጥሮች'}>
                <button
                  type="button"
                  className={`segbar__btn ${!prefs.verseNumbers ? 'is-active' : ''}`}
                  onClick={() => setPref('verseNumbers', false)}
                >
                  {isEn ? 'Hide' : 'ደብቅ'}
                </button>
                <button
                  type="button"
                  className={`segbar__btn ${prefs.verseNumbers ? 'is-active' : ''}`}
                  onClick={() => setPref('verseNumbers', true)}
                >
                  {isEn ? 'Show' : 'አሳይ'}
                </button>
              </div>
            </div>

            <div className="toggleCard">
              <span className="toggleCard__label">💪 {isEn ? 'Weight' : 'ውፍረት'}</span>
              <div className="segbar segbar--tiny" role="group" aria-label={isEn ? 'Font Weight' : 'የፊደል ውፍረት'}>
                {FONT_WEIGHTS.map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    className={`segbar__btn ${(prefs.fontWeight || 'normal') === item.id ? 'is-active' : ''}`}
                    onClick={() => setPref('fontWeight', item.id)}
                  >
                    {isEn ? item.label : item.am}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Typeface Selection Card */}
          <div className="toggleCard" style={{ marginTop: '8px' }}>
            <span className="toggleCard__label">🖋️ {isEn ? 'Typeface' : 'የፊደል ቅርጽ'}</span>
            <div className="segbar segbar--tiny" role="group" aria-label={isEn ? 'Typeface' : 'የፊደል ቅርጽ'}>
              {FONTS.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`segbar__btn ${prefs.font === item.id ? 'is-active' : ''}`}
                  onClick={() => setPref('font', item.id)}
                  title={item.note}
                >
                  {isEn ? item.label : item.am}
                </button>
              ))}
            </div>
          </div>

          {/* Live Scripture Font Preview Card */}
          <div className="fontPreviewCard">
            <div className="fontPreviewCard__meta">
              <span className="fontPreviewCard__title">
                {FONTS.find((f) => f.id === prefs.font)?.am || 'ቅርጽ'} · {prefs.sizePx}px · {prefs.fontWeight === 'bold' ? (isEn ? 'Bold' : 'ደማቅ') : (isEn ? 'Regular' : 'መደበኛ')}
              </span>
            </div>
            <p className="fontPreviewCard__sample">
              {isEn
                ? "In the beginning was the Word, and the Word was with God, and the Word was God."
                : "በመጀመሪያ ቃል ነበረ፥ ቃልም በእግዚአብሔር ዘንድ ነበረ፥ ቃልም እግዚአብሔር ነበረ።"}
            </p>
          </div>
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
