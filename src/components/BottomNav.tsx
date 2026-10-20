import type { LanguageMode } from '../prefs'
import type { Route } from '../route'

type Section = 'read' | 'daily' | 'bookmarks' | 'more'

interface Props {
  view: Route['view']
  moreOpen?: boolean
  language?: LanguageMode
  onBible: () => void
  onDaily: () => void
  onSaved: () => void
  onMore: () => void
  savedCount: number
}

const ITEMS_EN: { id: Section; label: string }[] = [
  { id: 'read', label: 'Bible' },
  { id: 'daily', label: 'Daily' },
  { id: 'bookmarks', label: 'Saved' },
  { id: 'more', label: 'More' },
]

const ITEMS_AM: { id: Section; label: string }[] = [
  { id: 'read', label: 'መጽሐፍ' },
  { id: 'daily', label: 'የዕለቱ' },
  { id: 'bookmarks', label: 'የተቀመጡ' },
  { id: 'more', label: 'ተጨማሪ' },
]

/** The bottom navigation bar with 4 items matching the design. */
export default function BottomNav({
  view,
  moreOpen = false,
  language = 'am',
  onBible,
  onDaily,
  onSaved,
  onMore,
  savedCount,
}: Props) {
  const handlers: Record<Section, () => void> = {
    read: onBible,
    daily: onDaily,
    bookmarks: onSaved,
    more: onMore,
  }

  const items = language === 'en' ? ITEMS_EN : ITEMS_AM

  // Active section mapping
  const active: Section = moreOpen
    ? 'more'
    : view === 'bookmarks'
      ? 'bookmarks'
      : view === 'daily'
        ? 'daily'
        : 'read'

  return (
    <nav
      className="botbar"
      aria-label="Sections"
      style={{ ['--bot-items' as string]: String(items.length) }}
    >
      {items.map((item) => {
        const on = active === item.id
        const badge = item.id === 'bookmarks' && savedCount > 0 ? savedCount : null

        return (
          <button
            key={item.id}
            type="button"
            className={`botbar__btn ${on ? 'is-active' : ''}`}
            onClick={handlers[item.id]}
            aria-current={on ? 'page' : undefined}
          >
            <span className="botbar__icon" aria-hidden="true">
              <Icon id={item.id} />
            </span>
            <span className="botbar__label">{item.label}</span>
            {badge !== null && <span className="botbar__badge">{badge}</span>}
          </button>
        )
      })}
    </nav>
  )
}

function Icon({ id }: { id: string }) {
  switch (id) {
    case 'home':
      return (
        <svg viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
      )
    case 'read':
      return (
        <svg viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 19.5v-13a2.5 2.5 0 0 1 2.5-2.5C9 4 11 5 12 6c1-1 3-2 5.5-2a2.5 2.5 0 0 1 2.5 2.5v13a2.5 2.5 0 0 0-2.5-2.5C15 17 13 18 12 19c-1-1-3-2-5.5-2a2.5 2.5 0 0 0-2.5 2.5z" />
          <path d="M12 6v13" />
        </svg>
      )
    case 'daily':
      return (
        <svg viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="4" />
          <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
        </svg>
      )
    case 'bookmarks':
      return (
        <svg viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
        </svg>
      )
    case 'more':
      return (
        <svg viewBox="0 0 24 24" focusable="false" stroke="currentColor" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
          <line x1="3" y1="12" x2="21" y2="12" />
          <line x1="3" y1="6" x2="21" y2="6" />
          <line x1="3" y1="18" x2="21" y2="18" />
        </svg>
      )
    default:
      return null
  }
}
