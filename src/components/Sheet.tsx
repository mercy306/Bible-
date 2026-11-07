import { useEffect, type ReactNode } from 'react'
import type { LanguageMode } from '../prefs'

interface Props {
  open: boolean
  title: string
  onClose: () => void
  onBack?: () => void
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
  onBack,
  children,
  side = 'bottom',
  labelId,
  language = 'am',
}: Props) {
  const effectiveBack = onBack ?? onClose

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        effectiveBack()
      }
    }
    const onAppBack = (e: Event) => {
      e.preventDefault()
      effectiveBack()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('app:back', onAppBack)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('app:back', onAppBack)
    }
  }, [open, effectiveBack])

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
          <div className="sheet__headLeft">
            <button
              type="button"
              className="sheet__back"
              onClick={effectiveBack}
              aria-label={language === 'en' ? 'Back' : 'ወደ ኋላ'}
              title={language === 'en' ? 'Back' : 'ወደ ኋላ'}
            >
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M19 12H5M12 19l-7-7 7-7" />
              </svg>
              <span className="sheet__backText">{language === 'en' ? 'Back' : 'ወደ ኋላ'}</span>
            </button>
            <h2 className="sheet__title">{title}</h2>
          </div>
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
