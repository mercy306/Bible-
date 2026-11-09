import type { LanguageMode } from '../prefs'

interface Props {
  language?: LanguageMode
  message?: string
}

/**
 * In-Reader Scripture Loading State:
 * Used exclusively for seamless chapter transitions inside the reader.
 * Uses a refined scripture skeleton & gentle gold bar rather than a duplicate
 * splash screen, keeping the reader immersed in their reading context.
 */
export default function LoadingView({ language = 'am', message }: Props) {
  const isEn = language === 'en'
  const defaultStatus = isEn ? 'Loading Scripture…' : 'በመጫን ላይ…'
  const displayStatus = message || defaultStatus

  return (
    <div
      className="readerLoading"
      role="status"
      aria-live="polite"
      aria-label={displayStatus}
    >
      {/* Top subtle gold ambient progress pulse */}
      <div className="readerLoading__bar" aria-hidden="true" />

      {/* Elegant compact badge */}
      <div className="readerLoading__badge">
        <span className="readerLoading__dot" aria-hidden="true" />
        <span className="readerLoading__text">{displayStatus}</span>
      </div>

      {/* Shimmering scripture verse skeleton */}
      <div className="readerLoading__skeleton" aria-hidden="true">
        <div className="readerLoading__skeletonHead" />
        <div className="readerLoading__skeletonVerse">
          <span className="readerLoading__vNum">{isEn ? '1' : '፩'}</span>
          <span className="readerLoading__vLine readerLoading__vLine--w90" />
          <span className="readerLoading__vLine readerLoading__vLine--w75" />
        </div>
        <div className="readerLoading__skeletonVerse">
          <span className="readerLoading__vNum">{isEn ? '2' : '፪'}</span>
          <span className="readerLoading__vLine readerLoading__vLine--w85" />
          <span className="readerLoading__vLine readerLoading__vLine--w95" />
          <span className="readerLoading__vLine readerLoading__vLine--w60" />
        </div>
        <div className="readerLoading__skeletonVerse">
          <span className="readerLoading__vNum">{isEn ? '3' : '፫'}</span>
          <span className="readerLoading__vLine readerLoading__vLine--w90" />
          <span className="readerLoading__vLine readerLoading__vLine--w80" />
        </div>
      </div>
    </div>
  )
}
