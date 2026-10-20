import type { LanguageMode } from '../prefs'

interface Props {
  count: number
  current: number
  /** Chapters the commentary does not cover, marked so they can be skipped. */
  uncovered?: number[]
  language?: LanguageMode
  onPick: (chapter: number) => void
}

/** Opened from the middle of the pager, so no rail of chips sits in the text. */
export default function ChapterPicker({ count, current, uncovered = [], language = 'am', onPick }: Props) {
  const isEn = language === 'en'
  return (
    <>
      <div className="chaptersheet">
        {Array.from({ length: count }, (_, i) => i + 1).map((n) => {
          const gap = uncovered.includes(n)
          return (
            <button
              key={n}
              type="button"
              className={`chaptersheet__btn ${n === current ? 'is-active' : ''} ${
                gap ? 'is-gap' : ''
              }`}
              onClick={() => onPick(n)}
              aria-current={n === current ? 'true' : undefined}
              title={gap ? (isEn ? 'No commentary for this chapter' : 'ለዚህ ምዕራፍ ማብራሪያ የለም') : undefined}
            >
              {n}
            </button>
          )
        })}
      </div>
      {uncovered.length > 0 && (
        <p className="sheet__count">
          {isEn ? 'Faded chapters have no commentary yet.' : 'የፈዘዙት ምዕራፎች ማብራሪያ አልተዘጋጀላቸውም።'}
        </p>
      )}
    </>
  )
}
