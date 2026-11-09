import { useEffect, useState } from 'react'

interface Props {
  ready?: boolean
  onFinish: () => void
}

/**
 * Luxury Dark Glass Launch Screen:
 * - Pure obsidian dark glass aesthetic matching DOMORE design
 * - Minimalist golden cross emblem & bilingual sacred typography
 * - Coordinates directly with offline data loading (zero double loading screen)
 * - Smooth cubic-bezier auto-fade directly into the scripture reader
 * - Tap anywhere to skip instantly
 */
export default function LaunchScreen({ ready = true, onFinish }: Props) {
  const [exiting, setExiting] = useState(false)
  const [minTimeElapsed, setMinTimeElapsed] = useState(false)

  // Ensure sacred brand animation plays smoothly for at least 850ms so it doesn't flash
  useEffect(() => {
    const timer = setTimeout(() => {
      setMinTimeElapsed(true)
    }, 850)
    return () => clearTimeout(timer)
  }, [])

  // Once minimum duration has passed AND chapter data is ready, trigger seamless exit
  useEffect(() => {
    let timer: ReturnType<typeof setTimeout> | undefined

    if (minTimeElapsed && ready && !exiting) {
      setExiting(true)
      timer = setTimeout(() => {
        onFinish()
      }, 400)
    }

    return () => {
      if (timer) clearTimeout(timer)
    }
  }, [minTimeElapsed, ready, exiting, onFinish])

  // Safety maximum duration (2400ms) to ensure the reader is never stuck
  useEffect(() => {
    const maxTimer = setTimeout(() => {
      if (!exiting) {
        setExiting(true)
        setTimeout(onFinish, 400)
      }
    }, 2400)
    return () => clearTimeout(maxTimer)
  }, [exiting, onFinish])

  const handleSkip = () => {
    if (exiting) return
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
