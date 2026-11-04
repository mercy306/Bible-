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
        {/* Ornate Closed Leather Bible with Center Gold Cross Medallion */}
        <div className="launchScreen__bookWrapper" aria-hidden="true">
          <img
            src="/bible-closed-cross.png"
            alt="The Holy Bible with Ornate Golden Cross Medallion"
            className="launchScreen__bookImg"
            width={155}
            height={171}
          />
          <div className="launchScreen__crossGlow" />
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
