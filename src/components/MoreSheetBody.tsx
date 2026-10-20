import { useState, type ReactNode } from 'react'
import {
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
  onSaved,
  onPrayers,
  savedCount,
  prayerCount,
  onGoTo,
  onPrint,
}: Props) {
  const [tab, setTab] = useState<Tab>('read')
  const [reference, setReference] = useState('')
  const isEn = prefs.language === 'en'

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
          <Row label={isEn ? "Theme" : "ገጽታ"}>
            <div className="segbar segbar--tiny" role="group" aria-label={isEn ? "Color Theme" : "የቀለም ገጽታ"}>
              {THEMES.map((item) => (
                <button
                  key={item.id}
                  type="button"
                  className={`segbar__btn ${prefs.theme === item.id || (item.id === 'bw' && prefs.theme === 'dark') ? 'is-active' : ''}`}
                  onClick={() => setPref('theme', item.id)}
                  aria-pressed={prefs.theme === item.id || (item.id === 'bw' && prefs.theme === 'dark')}
                  title={item.note}
                >
                  {item.id === 'light'
                    ? (isEn ? '🌿 Sage Green' : '🌿 አረንጓዴ')
                    : (isEn ? '🖤 Luxury Black' : '🖤 ጥቁር')}
                </button>
              ))}
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
          <button type="button" className="mwide" onClick={() => onSaved()}>
            {isEn ? 'Saved verses' : 'የተቀመጡ ጥቅሶች'}
            <span className="mwide__count">{savedCount}</span>
          </button>

          <button type="button" className="mwide" onClick={() => onPrayers()}>
            {isEn ? 'Prayer journal' : 'የጸሎት ማስታወሻ'}
            <span className="mwide__count">{prayerCount}</span>
          </button>

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
