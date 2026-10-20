interface Props {
  children?: React.ReactNode
  className?: string
  style?: React.CSSProperties
}

/**
 * Scenic mountain lake photo background matching The Sixty-Six design mockup.
 */
export default function MountainHero({ children, className = '', style }: Props) {
  return (
    <div className={`mountainHero ${className}`} style={style}>
      <img
        src="/mountain-hero.jpg"
        alt="Scenic misty mountain lake"
        className="mountainHero__bg"
        aria-hidden="true"
      />
      <div className="mountainHero__overlay" aria-hidden="true" />
      {children && <div className="mountainHero__content">{children}</div>}
    </div>
  )
}
