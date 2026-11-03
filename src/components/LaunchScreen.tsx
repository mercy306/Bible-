import { useEffect, useState } from 'react'

interface Props {
  onFinish: () => void
}

/**
 * Luxury Dark Glass Launch Screen:
 * - Pure obsidian dark glass aesthetic matching DOMORE design
 * - Minimalist golden cross emblem & bilingual sacred typography
 * - Smooth 1.2s auto-fade directly into the scripture reader
 * - Tap anywhere to skip instantly
 */
export default function LaunchScreen({ onFinish }: Props) {
  const [exiting, setExiting] = useState(false)

  useEffect(() => {
    // Start exit transition after 1100ms
    const fadeTimer = setTimeout(() => {
      setExiting(true)
    }, 1100)

    // Complete removal after fade transition finishes (1500ms total)
    const finishTimer = setTimeout(() => {
      onFinish()
    }, 1500)

    return () => {
      clearTimeout(fadeTimer)
      clearTimeout(finishTimer)
    }
  }, [onFinish])

  const handleSkip = () => {
    setExiting(true)
    setTimeout(onFinish, 250)
  }

  return (
    <aside
      className={`launchScreen ${exiting ? 'launchScreen--exit' : ''}`}
      onClick={handleSkip}
      role="status"
      aria-live="polite"
      aria-label="The Holy Bible Launch"
    >
      <div className="launchScreen__backdrop" />
      <div className="launchScreen__aura" aria-hidden="true" />

      <div className="launchScreen__card">
        {/* Minimalist Sacred Cross Emblem */}
        <div className="launchScreen__emblem" aria-hidden="true">
          <svg
            viewBox="0 0 64 64"
            width="54"
            height="54"
            fill="none"
            stroke="currentColor"
            className="launchScreen__crossSvg"
          >
            {/* Outer soft halo */}
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="rgba(197, 160, 89, 0.2)"
              strokeWidth="1"
              strokeDasharray="2 4"
            />
            {/* Inner radiant diamond */}
            <path
              d="M32 18 L38 32 L32 46 L26 32 Z"
              fill="rgba(197, 160, 89, 0.12)"
              stroke="rgba(197, 160, 89, 0.35)"
              strokeWidth="0.8"
            />
            {/* Vertical cross beam */}
            <line
              x1="32"
              y1="10"
              x2="32"
              y2="54"
              stroke="url(#crossGoldGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Horizontal cross beam */}
            <line
              x1="18"
              y1="25"
              x2="46"
              y2="25"
              stroke="url(#crossGoldGrad)"
              strokeWidth="2.2"
              strokeLinecap="round"
            />
            {/* Crossbeam terminal accents */}
            <circle cx="32" cy="10" r="1.5" fill="#C5A059" />
            <circle cx="32" cy="54" r="1.5" fill="#C5A059" />
            <circle cx="18" cy="25" r="1.5" fill="#C5A059" />
            <circle cx="46" cy="25" r="1.5" fill="#C5A059" />
            {/* Center radiant jewel */}
            <circle cx="32" cy="25" r="2.5" fill="#F4E8C1" />

            <defs>
              <linearGradient id="crossGoldGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#F4E8C1" />
                <stop offset="50%" stopColor="#C5A059" />
                <stop offset="100%" stopColor="#8A6E32" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Sacred Bilingual Typography */}
        <div className="launchScreen__titles">
          <h1 className="launchScreen__amharic">መጽሐፍ ቅዱስ</h1>
          <div className="launchScreen__english">THE HOLY BIBLE</div>
          <div className="launchScreen__tagline">ብሉይና ሐዲስ ኪዳን • 66 BOOKS</div>
        </div>

        {/* Subtle Luxury Gold Progress Line */}
        <div className="launchScreen__track" aria-hidden="true">
          <div className="launchScreen__bar" />
        </div>
      </div>
    </aside>
  )
}
