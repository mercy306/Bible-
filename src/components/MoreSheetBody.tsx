import { useState, useRef, type ReactNode } from 'react'
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

/** One labelled control with title, subtitle description, and right control */
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
    <div className="mrow settingsRow">
      <div className="settingsRow__text">
        <span className="mrow__label settingsRow__label">{label}</span>
        {description && <span className="settingsRow__desc">{description}</span>}
      </div>
      <div className="mrow__control settingsRow__control">{children}</div>
    </div>
  )
}

/** Slider control with description and dynamic value display */
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

/** Segmented on/off switch with clean toggle styling */
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

interface ToolCardProps {
  icon: string
  title: string
  description: string
  badge?: string
  onClick: () => void
}

/** Touch-optimized feature card with icon, title, description, badge and arrow */
function ToolCard({ icon, title, description, badge, onClick }: ToolCardProps) {
  return (
    <button type="button" className="settingsToolCard" onClick={onClick}>
      <div className="settingsToolCard__iconWrap" aria-hidden="true">
        <span className="settingsToolCard__icon">{icon}</span>
      </div>
      <div className="settingsToolCard__content">
        <div className="settingsToolCard__titleRow">
          <span className="settingsToolCard__title">{title}</span>
          {badge && <span className="settingsToolCard__badge">{badge}</span>}
        </div>
        <p className="settingsToolCard__desc">{description}</p>
      </div>
      <div className="settingsToolCard__arrow" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="9 18 15 12 9 6" />
        </svg>
      </div>
    </button>
  )
}

/**
 * Unified Single-Layout Settings & Appearance Panel:
 * Every setting, reading aid, appearance preset, and newly added study tool
 * is presented in ONE cohesive, beautifully structured layout without fragmented tabs.
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
  const [reference, setReference] = useState('')
  const isEn = prefs.language === 'en'
  const planInfo = useReadingPlan()

  const studyRef = useRef<HTMLElement>(null)
  const aidsRef = useRef<HTMLElement>(null)
  const lookRef = useRef<HTMLElement>(null)
  const fontRef = useRef<HTMLElement>(null)

  const scrollTo = (ref: React.RefObject<HTMLElement>) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="settingsLayout">
      {/* Quick Anchor Navigation Pills */}
      <nav className="settingsPills" aria-label={isEn ? "Quick settings sections" : "የማስተካከያ አቋራጮች"}>
        <button type="button" className="settingsPill" onClick={() => scrollTo(studyRef)}>
          🏛️ {isEn ? 'Study Tools' : 'የጥናት መሳሪያዎች'}
        </button>
        <button type="button" className="settingsPill" onClick={() => scrollTo(aidsRef)}>
          💡 {isEn ? 'Reading Aids' : 'የንባብ ድጋፍ'}
        </button>
        <button type="button" className="settingsPill" onClick={() => scrollTo(lookRef)}>
          🎨 {isEn ? 'Appearance' : 'ገጽታና ቀለም'}
        </button>
        <button type="button" className="settingsPill" onClick={() => scrollTo(fontRef)}>
          🔤 {isEn ? 'Typography' : 'ፊደልና መጠን'}
        </button>
      </nav>

      {/* =====================================================================
          SECTION 1: SACRED STUDY & HISTORY TOOLS
          ===================================================================== */}
      <section ref={studyRef} className="settingsSection" aria-labelledby="sec-study-title">
        <div className="settingsSection__header">
          <div className="settingsSection__titleRow">
            <span className="settingsSection__icon" aria-hidden="true">🏛️</span>
            <h3 id="sec-study-title" className="settingsSection__title">
              {isEn ? 'Sacred Study & History Tools' : 'የጥናትና የታሪክ መሳሪያዎች'}
            </h3>
          </div>
          <p className="settingsSection__subtitle">
            {isEn
              ? 'Deep exploration tools: family lineages, interactive atlas, cultural timeline & saga'
              : 'ጥልቅ የመጽሐፍ ቅዱስ ምርምር፡ የትውልድ ሐረግ፣ ሕያው ካርታ፣ የዘመን አውድና ታሪክ'}
          </p>
        </div>

        <div className="settingsSection__cardsGrid">
          {onLineage && (
            <ToolCard
              icon="🌳"
              title={isEn ? 'Genealogical & Cultural Web' : 'የትውልድ ሐረግና የቤተሰብ ትሥሥር'}
              description={
                isEn
                  ? 'Explore biblical family trees, Adam to David, multiple families & cultural heritage'
                  : 'የአዳም፣ የኖኅ፣ የአብርሃምና የዳዊት ቤተሰቦች ትሥሥር፣ የዘር ሐረግና ባህላዊ ቅርስ'
              }
              badge={isEn ? 'Roots' : 'ትሥሥር'}
              onClick={onLineage}
            />
          )}

          {onAtlas && (
            <ToolCard
              icon="🗺️"
              title={isEn ? 'The Living Chrono-Atlas' : 'የመጽሐፍ ቅዱስ ሕያው የጉዞ ካርታ'}
              description={
                isEn
                  ? 'Interactive journeys, sacred geography & historical routes on an offline map'
                  : 'የቀደምት አባቶች ጉዞዎች፣ ቦታዎችና ታሪካዊ ክስተቶች በይነተገናኝ ካርታ'
              }
              badge={isEn ? 'Atlas' : 'ካርታ'}
              onClick={onAtlas}
            />
          )}

          {onTimeCapsule && (
            <ToolCard
              icon="⏳"
              title={isEn ? 'The Generation Time-Capsule' : 'የዘመኑ እውነታና ታሪካዊ አውድ'}
              description={
                isEn
                  ? 'Historical context, archaeological insights & cultural backdrop of scripture'
                  : 'የጥቅሱ ዘመን ማኅበራዊ፣ ባህላዊና ፖለቲካዊ ዳራ በጊዜ መስመር'
              }
              badge={isEn ? 'Context' : 'አውድ'}
              onClick={onTimeCapsule}
            />
          )}

          {onSaga && (
            <ToolCard
              icon="👑"
              title={isEn ? 'Epic Chronological Saga' : 'የዘመን ታሪክ ቅደም ተከተል'}
              description={
                isEn
                  ? '5 grand chronological acts from Creation to Eternity unfolding the narrative'
                  : 'ከፍጥረት እስከ ዘላለም 5ቱ ታላላቅ የመጽሐፍ ቅዱስ ምዕራፎች በቅደም ተከተል'
              }
              badge={isEn ? '5 Acts' : '5 ዘመናት'}
              onClick={onSaga}
            />
          )}

          {onPlan && (
            <ToolCard
              icon="📖"
              title={isEn ? 'Annual Reading Plan & Progress' : 'የዓመት ንባብ እቅድና እድገት'}
              description={
                isEn
                  ? 'Track daily scriptures, build reading streaks and complete the Bible'
                  : 'ዕለታዊ የንባብ መርሐ ግብር፣ የንባብ ልምምድ እና የቀን እድገት'
              }
              badge={
                planInfo.streak.currentStreak > 0
                  ? `🔥 ${planInfo.streak.currentStreak}d • ${planInfo.planCompletedPercent}%`
                  : `${planInfo.planCompletedPercent}%`
              }
              onClick={onPlan}
            />
          )}
        </div>
      </section>

      {/* =====================================================================
          SECTION 2: READING AIDS & CONTROLS
          ===================================================================== */}
      <section ref={aidsRef} className="settingsSection" aria-labelledby="sec-aids-title">
        <div className="settingsSection__header">
          <div className="settingsSection__titleRow">
            <span className="settingsSection__icon" aria-hidden="true">💡</span>
            <h3 id="sec-aids-title" className="settingsSection__title">
              {isEn ? 'Reading Aids & Assistance' : 'የንባብ ድጋፎችና ረዳቶች'}
            </h3>
          </div>
          <p className="settingsSection__subtitle">
            {isEn
              ? 'Lexicon lookups, verse memorization, search and passage navigation'
              : 'የቃላት መዝገበ ቃላት፣ ጥቅስ የማስታወስ ልምምድ፣ ፍለጋና ፈጣን አሰሳ'}
          </p>
        </div>

        <div className="settingsSection__list">
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

          {/* Direct Passage Navigation */}
          <form
            className="mrow settingsRow"
            onSubmit={(e) => {
              e.preventDefault()
              if (reference.trim()) onGoTo(reference.trim())
            }}
          >
            <div className="settingsRow__text">
              <span className="mrow__label settingsRow__label">
                {isEn ? 'Go to Passage' : 'ወደ ጥቅስ ይሂዱ'}
              </span>
              <span className="settingsRow__desc">
                {isEn ? 'Enter book, chapter and verse' : 'የመጽሐፍና ምዕራፍ ቁጥር ያስገቡ'}
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

          {/* Quick Action Buttons */}
          <div className="settingsActionGroup">
            <button type="button" className="settingsActionBtn" onClick={onSearch}>
              <div className="settingsActionBtn__text">
                <span className="settingsActionBtn__title">
                  🔍 {isEn ? 'Search Bible & Commentary' : 'መጽሐፍ ቅዱስንና ማብራሪያውን ፈልግ'}
                </span>
                <span className="settingsActionBtn__desc">
                  {isEn
                    ? 'Search words and phrases across all 66 books and offline commentary'
                    : 'በሁሉም 66 መጻሕፍትና ማብራሪያዎች ውስጥ ቃላትንና ጥቅሶችን ፈልግ'}
                </span>
              </div>
              <span className="settingsActionBtn__arrow" aria-hidden="true">›</span>
            </button>

            <button type="button" className="settingsActionBtn" onClick={onPrint}>
              <div className="settingsActionBtn__text">
                <span className="settingsActionBtn__title">
                  🖨️ {isEn ? 'Print or Export Chapter' : 'ይህንን ምዕራፍ አትም ወይም አስቀምጥ'}
                </span>
                <span className="settingsActionBtn__desc">
                  {isEn
                    ? 'Format current scripture chapter for paper printing or clean PDF saving'
                    : 'የአሁኑን ምዕራፍ ለህትመት ወይም ለፒዲኤፍ (PDF) ማዘጋጀት'}
                </span>
              </div>
              <span className="settingsActionBtn__arrow" aria-hidden="true">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 3: APPEARANCE & COLOR THEMES
          ===================================================================== */}
      <section ref={lookRef} className="settingsSection" aria-labelledby="sec-look-title">
        <div className="settingsSection__header">
          <div className="settingsSection__titleRow">
            <span className="settingsSection__icon" aria-hidden="true">🎨</span>
            <h3 id="sec-look-title" className="settingsSection__title">
              {isEn ? 'Appearance & Color Themes' : 'የቀለም ገጽታና ማድመቂያ'}
            </h3>
          </div>
          <p className="settingsSection__subtitle">
            {isEn
              ? 'Curated background themes and custom accent colors for comfortable reading'
              : 'ለዓይን ምቹ የሆኑ የቀለም ገጽታዎችና የማድመቂያ አማራጮች'}
          </p>
        </div>

        <div className="settingsSection__list">
          {/* Theme Palette */}
          <div className="settingsPaletteBlock">
            <div className="settingsPaletteBlock__header">
              <span className="settingsPaletteBlock__label">
                {isEn ? 'Reading Theme' : 'የንባብ ገጽታ'}
              </span>
              <span className="settingsPaletteBlock__desc">
                {isEn ? 'Choose from 8 eye-comfort themes' : 'ከ 8ቱ የቀለም አማራጮች ይምረጡ'}
              </span>
            </div>

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
          </div>

          {/* Accent Color Row */}
          <div className="settingsAccentBlock">
            <div className="settingsAccentBlock__header">
              <span className="settingsAccentBlock__label">
                {isEn ? 'Accent & Highlight Color' : 'የማድመቂያ ቀለም'}
              </span>
              <span className="settingsAccentBlock__desc">
                {isEn ? 'Highlight color for active buttons and markers' : 'ለአዝራሮችና ለማድመቂያ የሚሆን ቀለም'}
              </span>
            </div>

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
          </div>
        </div>
      </section>

      {/* =====================================================================
          SECTION 4: TYPOGRAPHY & READING COMFORT
          ===================================================================== */}
      <section ref={fontRef} className="settingsSection" aria-labelledby="sec-font-title">
        <div className="settingsSection__header">
          <div className="settingsSection__titleRow">
            <span className="settingsSection__icon" aria-hidden="true">🔤</span>
            <h3 id="sec-font-title" className="settingsSection__title">
              {isEn ? 'Typography & Reading Comfort' : 'የፊደል ቅርጽና መጠን'}
            </h3>
          </div>
          <p className="settingsSection__subtitle">
            {isEn
              ? 'Interface language, scripture font size, sacred typeface and live preview'
              : 'የመተግበሪያ ቋንቋ፣ የፊደል መጠን፣ ውብ የፊደል ቅርጾችና የቀጥታ ቅድመ እይታ'}
          </p>
        </div>

        <div className="settingsSection__list">
          {/* Interface Language */}
          <Row
            label={isEn ? "Interface Language" : "የመተግበሪያው ቋንቋ"}
            description={isEn ? "Select interface display language" : "የመተግበሪያውን ቋንቋ ይምረጡ"}
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

          {/* Live Preview Card */}
          <div className="settingsPreviewCard">
            <span className="settingsPreviewCard__label">
              {isEn ? 'Live Scripture Preview' : 'የቀጥታ ቅድመ እይታ'}
            </span>
            <p className="settingsPreviewCard__text" lang={isEn ? 'en' : 'am'}>
              {isEn
                ? '“In the beginning God created the heaven and the earth.”'
                : '«በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።»'}
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
