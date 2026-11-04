import type { LanguageMode } from '../prefs'

interface Props {
  language?: LanguageMode
  message?: string
}

export default function LoadingView({ language = 'am', message }: Props) {
  const isEn = language === 'en'
  const title = isEn ? 'The Holy Bible' : 'መጽሐፍ ቅዱስ'
  const defaultStatus = isEn ? 'Loading Scripture…' : 'በመጫን ላይ…'
  const displayStatus = message || defaultStatus

  return (
    <div
      className="bibleLoading"
      role="status"
      aria-live="polite"
      aria-label={displayStatus}
    >
      <div className="bibleLoading__aura" aria-hidden="true" />

      <div className="bibleLoading__content">
        {/* Ornate Closed Leather Bible with Center Gold Cross Medallion */}
        <div className="bibleLoading__bookWrapper">
          <img
            src="/bible-closed-cross.png"
            alt="The Holy Bible with Ornate Golden Cross Medallion"
            className="bibleLoading__bookImg"
            width={150}
            height={165}
          />
          <div className="bibleLoading__crossGlow" aria-hidden="true" />
        </div>

        {/* Title */}
        <h2 className="bibleLoading__title">{title}</h2>

        {/* Status text */}
        <p className="bibleLoading__status">{displayStatus}</p>

        {/* Elegant glowing loading dots */}
        <div className="bibleLoading__dots" aria-hidden="true">
          <span className="bibleLoading__dot" />
          <span className="bibleLoading__dot" />
          <span className="bibleLoading__dot" />
        </div>
      </div>
    </div>
  )
}
