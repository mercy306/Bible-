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

/** One labelled control on one line, so nothing needs a heading of its own. */
function Row({ label, children }: { label: string; children: ReactNode }) {
  return (
    <div className="mrow">
      <span className="mrow__label">{label}</span>
      <div className="mrow__control">{children}</div>
    </div>
  )
}

/** A slider with its value shown at the end, used for every comfort setting. */
function Slide({
  label,
  min,
  max,
  step,
  value,
  show,
  onChange,
}: {
  label: string
  min: number
  max: number
  step: number
  value: number
  show: (v: number) => string
  onChange: (v: number) => void
}) {
  return (
    <Row label={label}>
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

/** A short Yes/No pair, used wherever a setting is simply on or off. */
function OnOff({
  label,
  on,
  onChange,
  yes = 'On',
  no = 'Off',
}: {
  label: string
  on: boolean
  onChange: (v: boolean) => void
  yes?: string
  no?: string
}) {
  return (
    <Row label={label}>
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
 * Everything that is not reading, split into three short lists so the sheet is
 * never one long column of controls.
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

      {tab === 'read' && (
        <div className="mlist">
          <Row label={isEn ? "Language" : "ቋንቋ"}>
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

          


          <Slide
            label={isEn ? "Text size" : "የፊደል መጠን"}
            min={SIZE_RANGE.min}
            max={SIZE_RANGE.max}
            step={SIZE_RANGE.step}
            value={prefs.sizePx}
            show={(v) => `${v}px`}
            onChange={(v) => setPref('sizePx', v)}
          />
        </div>
      )}

      {tab === 'look' && (
        <div className="mlist">
          <Row label={isEn ? "Theme" : "የቀለም ገጽታ"}>
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

          <Row label={isEn ? "Accent Color" : "የማድመቂያ ቀለም"}>
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
                title={isEn ? "Custom Color Wheel (Any Color)" : "ብጁ ቀለም (የራስዎ ምርጫ)"}
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

          <Row label={isEn ? "Typeface" : "የፊደል ቅርጽ"}>
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
                  {item.label}
                </button>
              ))}
            </div>
          </Row>

          <p className="msample" lang={isEn ? 'en' : 'am'}>
            {isEn
              ? 'In the beginning God created the heaven and the earth.'
              : 'በመጀመሪያ እግዚአብሔር ሰማይንና ምድርን ፈጠረ።'}
          </p>
        </div>
      )}

      {tab === 'tools' && (
        <div className="mlist">
          {onPlan && (
            <button type="button" className="mwide" onClick={() => onPlan()}>
              <span>📖 {isEn ? 'Reading plan & progress' : 'የንባብ እቅድ እና እድገት'}</span>
              <span className="mwide__count">
                {planInfo.streak.currentStreak > 0 ? `🔥 ${planInfo.streak.currentStreak}d • ` : ''}
                {planInfo.planCompletedPercent}%
              </span>
            </button>
          )}

          {onSaga && (
            <button type="button" className="mwide" onClick={() => onSaga()}>
              <span>👑 {isEn ? 'Epic Chronological Saga' : 'የዘመን ታሪክ ቅደም ተከተል'}</span>
              <span className="mwide__count">5 Acts</span>
            </button>
          )}

          {onLineage && (
            <button type="button" className="mwide" onClick={() => onLineage()}>
              <span>🌳 {isEn ? 'Genealogical & Cultural Web' : 'የትውልድ ሐረግና የባህል ትሥሥር'}</span>
              <span className="mwide__count">Roots</span>
            </button>
          )}

          {onAtlas && (
            <button type="button" className="mwide" onClick={() => onAtlas()}>
              <span>🗺️ {isEn ? 'The Living Chrono-Atlas' : 'የመጽሐፍ ቅዱስ ሕያው የጉዞ ካርታ'}</span>
              <span className="mwide__count">Atlas</span>
            </button>
          )}

          {onTimeCapsule && (
            <button type="button" className="mwide" onClick={() => onTimeCapsule()}>
              <span>⏳ {isEn ? 'The Generation Time-Capsule' : 'የዘመኑ እውነታና የጥቅስ አውድ'}</span>
              <span className="mwide__count">Context</span>
            </button>
          )}

          <form
            className="mrow"
            onSubmit={(e) => {
              e.preventDefault()
              if (reference.trim()) onGoTo(reference.trim())
            }}
          >
            <span className="mrow__label">{isEn ? 'Go to' : 'ይሂዱ ወደ'}</span>
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

          <button type="button" className="mwide" onClick={() => onSearch()}>
            {isEn ? 'Search the Bible and commentary' : 'መጽሐፍ ቅዱስንና ማብራሪያውን ፈልግ'}
          </button>

          <OnOff
            label={isEn ? "Memorise" : "የማስታወስ ልምምድ"}
            on={memorize}
            onChange={onMemorize}
            yes={isEn ? "On" : "አብራ"}
            no={isEn ? "Off" : "አጥፋ"}
          />

          <OnOff
            label={isEn ? "Word lookup" : "የቃላት ፍቺ"}
            on={wordLookup}
            onChange={onWordLookup}
            yes={isEn ? "On" : "አብራ"}
            no={isEn ? "Off" : "አጥፋ"}
          />

          <button type="button" className="mwide" onClick={onPrint}>
            {isEn ? 'Print this chapter' : 'ይህንን ምዕራፍ አትም'}
          </button>
        </div>
      )}
    </>
  )
}
