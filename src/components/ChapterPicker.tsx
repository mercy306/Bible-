import type { LanguageMode } from '../prefs'

interface Props {
  count: number
  current: number
  language?: LanguageMode
  onPick: (chapter: number) => void
}

/** Opened from the middle of the pager, so no rail of chips sits in the text. */
export default function ChapterPicker({ count, current, onPick }: Props) {
  return (
    <div className="chaptersheet">
      {Array.from({ length: count }, (_, i) => i + 1).map((n) => (
        <button
          key={n}
          type="button"
          className={`chaptersheet__btn ${n === current ? 'is-active' : ''}`}
          onClick={() => onPick(n)}
          aria-current={n === current ? 'true' : undefined}
        >
          {n}
        </button>
      ))}
    </div>
  )
}
