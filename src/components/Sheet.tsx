import { useEffect, type ReactNode } from 'react'
import type { LanguageMode } from '../prefs'

interface Props {
  open: boolean
  title: string
  onClose: () => void
  children: ReactNode
  /** 'left' slides in from the side, 'bottom' rises from the bar. */
  side?: 'left' | 'bottom'
  labelId?: string
  language?: LanguageMode
}

/**
 * A single layer over the reading screen. Only one is ever open, so it takes
 * Escape and restores focus on the way out.
 */
export default function Sheet({
  open,
  title,
  onClose,
  children,
  side = 'bottom',
  labelId,
  language = 'am',
}: Props) {
  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open, onClose])

  if (!open) return null

  return (
    <>
      <div className="sheet__scrim" onClick={onClose} />
      <section
        className={`sheet sheet--${side}`}
        role="dialog"
        aria-modal="true"
        aria-label={labelId ? undefined : title}
        aria-labelledby={labelId}
      >
        <div className="sheet__grip" aria-hidden="true" />
        <header className="sheet__head">
          <h2 className="sheet__title">{title}</h2>
          <button
            type="button"
            className="sheet__close"
            onClick={onClose}
            aria-label={language === 'en' ? 'Close' : 'ዝጋ'}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </header>
        <div className="sheet__body">{children}</div>
      </section>
    </>
  )
}
