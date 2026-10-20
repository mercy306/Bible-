import { useEffect, useState, type ReactNode } from 'react'
import type { LanguageMode } from '../prefs'

interface Props {
  /** Printed page numbers this block covers, in order. */
  pages: number[]
  /** Front matter has no verses, so the label must not claim any. */
  frontMatter?: boolean
  /** Language mode */
  language?: LanguageMode
  /** Shown when no single page is chosen. */
  children?: ReactNode
}

/**
 * Shows the page numbers of a commentary block as buttons. Choosing one reveals
 * only that printed page and hides the rest of the block, so a block covering
 * dozens of pages never arrives as one wall of text.
 */
export default function PagePicker({
  pages,
  frontMatter = false,
  language = 'am',
  children,
}: Props) {
  const [chosen, setChosen] = useState<number | null>(null)
  const [text, setText] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [expanded, setExpanded] = useState(false)
  const isEn = language === 'en'

  // A long run of front matter would otherwise bury the page buttons.
  const COLLAPSED_AT = 8
  const isLong = pages.length > COLLAPSED_AT
  const shown = isLong && !expanded ? pages.slice(0, COLLAPSED_AT) : pages

  useEffect(() => {
    if (chosen === null) {
      setText(null)
      return
    }
    const controller = new AbortController()
    setLoading(true)
    setError(null)
    fetch(`/api/guide/amharic/page?page=${chosen}`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error(isEn ? 'That page has no text.' : 'ያን ገጽ ጽሑፍ የለውም።')
        return res.json()
      })
      .then((data: { text: string }) => setText(data.text))
      .catch((e: Error) => {
        if (e.name !== 'AbortError') setError(e.message)
      })
      .finally(() => {
        if (!controller.signal.aborted) setLoading(false)
      })
    return () => controller.abort()
  }, [chosen, isEn])

  if (pages.length === 0) return <>{children}</>

  if (chosen !== null) {
    return (
      <div className="pagepick">
        <p className="pagepick__bar">
          <button type="button" className="pagepick__back" onClick={() => setChosen(null)}>
            {isEn ? '← All pages' : '← ሁሉም ገጾች'}
          </button>
          <span className="pagepick__title">
            {isEn ? `Printed page ${chosen}` : `የታተመ ገጽ ${chosen}`}
            {frontMatter && (isEn ? ' · front matter' : ' · መነሻ ክፍሎች')}
          </span>
        </p>

        {loading && <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>}
        {error && <p className="notice">{error}</p>}
        {text &&
          text.split('\n').map((para, i) => (
            <p key={i} className="guide__text">
              {para}
            </p>
          ))}

        <div className="pagepick__nav">
          <button
            type="button"
            className="chip chip--sm"
            disabled={chosen <= Math.min(...pages)}
            onClick={() => setChosen(chosen - 1)}
          >
            {isEn ? '‹ Previous' : '‹ ቀዳሚ'}
          </button>
          <button
            type="button"
            className="chip chip--sm"
            disabled={chosen >= Math.max(...pages)}
            onClick={() => setChosen(chosen + 1)}
          >
            {isEn ? 'Next ›' : 'ቀጣይ ›'}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="pagepick">
      <p className="pagepick__bar">
        <span className="pagepick__title">
          {frontMatter
            ? isEn
              ? `Front matter — ${pages.length} printed pages, no verses`
              : `መነሻ ክፍሎች — ${pages.length} የታተሙ ገጾች፣ ጥቅስ የሌላቸው`
            : isEn
              ? 'PDF pages'
              : 'የፒዲኤፍ ገጾች'}
        </span>
      </p>

      <div className="pagepick__numbers">
        {shown.map((page) => (
          <button
            key={page}
            type="button"
            className="pageno"
            onClick={() => setChosen(page)}
            title={isEn ? `Show only printed page ${page}` : `የታተመ ገጽ ${page}ን ብቻ አሳይ`}
          >
            {page}
          </button>
        ))}
        {isLong && !expanded && (
          <button
            type="button"
            className="pageno pageno--more"
            onClick={() => setExpanded(true)}
          >
            +{pages.length - COLLAPSED_AT} {isEn ? 'more' : 'ተጨማሪ'}
          </button>
        )}
        {isLong && expanded && (
          <button
            type="button"
            className="pageno pageno--more"
            onClick={() => setExpanded(false)}
          >
            {isEn ? 'show less' : 'ያነሰ አሳይ'}
          </button>
        )}
      </div>
      <p className="pagepick__hint">
        {isEn ? 'Choose a page number to read only that page.' : 'ያንን ገጽ ብቻ ለማንበብ የገጽ ቁጥር ይምረጡ።'}
      </p>

      {children}
    </div>
  )
}