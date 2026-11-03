import { useState, useEffect } from 'react'

interface Props {
  onFinish?: () => void
  durationMs?: number
}

export default function SplashScreen({ onFinish, durationMs = 1800 }: Props) {
  const [stage, setStage] = useState<'enter' | 'exit' | 'gone'>('enter')

  useEffect(() => {
    const timer = setTimeout(() => {
      setStage('exit')
      const cleanup = setTimeout(() => {
        setStage('gone')
        onFinish?.()
      }, 450)
      return () => clearTimeout(cleanup)
    }, durationMs)

    return () => clearTimeout(timer)
  }, [durationMs, onFinish])

  if (stage === 'gone') return null

  const handleDismiss = () => {
    if (stage === 'enter') {
      setStage('exit')
      setTimeout(() => {
        setStage('gone')
        onFinish?.()
      }, 350)
    }
  }

  return (
    <div
      className={`appSplash ${stage === 'exit' ? 'appSplash--exit' : ''}`}
      onClick={handleDismiss}
      role="banner"
      aria-label="የአማርኛ መጽሐፍ ቅዱስ Splash Screen"
    >
      <div className="appSplash__content">
        {/* Ambient Warm Golden Aura */}
        <div className="appSplash__aura" aria-hidden="true" />

        {/* 3D Bible Book Icon with Ethiopian Cross */}
        <div className="appSplash__book">
          <div className="appSplash__bookCover">
            <span className="appSplash__bookTitle">መጽሐፍ ቅዱስ</span>

            {/* Traditional Ethiopian Lalibela / Ge'ez Cross */}
            <svg
              className="appSplash__cross"
              viewBox="0 0 100 140"
              fill="none"
              stroke="#D4AF37"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {/* Outer decorative halo / rays */}
              <circle cx="50" cy="45" r="24" stroke="#D4AF37" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.6" />

              {/* Central vertical shaft */}
              <line x1="50" y1="15" x2="50" y2="125" strokeWidth="4" />
              {/* Central horizontal beam */}
              <line x1="22" y1="45" x2="78" y2="45" strokeWidth="4" />

              {/* Ethiopian Cross Top Finial & Trefoils */}
              <path d="M50 15 C 44 8, 56 8, 50 15 Z" fill="#D4AF37" />
              <path d="M42 22 Q 50 12 58 22" strokeWidth="2.5" />
              <circle cx="50" cy="12" r="3.5" fill="#D4AF37" />

              {/* Left Beam Finial */}
              <circle cx="20" cy="45" r="3.5" fill="#D4AF37" />
              <path d="M22 37 Q 12 45 22 53" strokeWidth="2.5" />

              {/* Right Beam Finial */}
              <circle cx="80" cy="45" r="3.5" fill="#D4AF37" />
              <path d="M78 37 Q 88 45 78 53" strokeWidth="2.5" />

              {/* Inner Diamond Openwork (Lalibela Pattern) */}
              <path d="M50 32 L 63 45 L 50 58 L 37 45 Z" strokeWidth="2.5" fill="rgba(212, 175, 55, 0.15)" />
              <circle cx="50" cy="45" r="3.5" fill="#D4AF37" />

              {/* Diagonal Diamond Brackets */}
              <path d="M37 32 L 43 38 M 63 32 L 57 38 M 37 58 L 43 52 M 63 58 L 57 52" strokeWidth="2" />

              {/* Lower Shaft Ornaments */}
              <path d="M40 75 Q 50 68 60 75" strokeWidth="2.5" />
              <circle cx="50" cy="74" r="3" fill="#D4AF37" />
              <path d="M42 95 Q 50 88 58 95" strokeWidth="2" />

              {/* Base Pedestal Handle */}
              <path d="M44 118 L 56 118 L 50 128 Z" fill="#D4AF37" />
            </svg>

            {/* Inner Spine & Ribbon */}
            <div className="appSplash__ribbon" />
          </div>
          <div className="appSplash__pages" />
        </div>

        {/* Title & Subtitle */}
        <div className="appSplash__textGroup">
          <h1 className="appSplash__amharicTitle">የአማርኛ መጽሐፍ ቅዱስ</h1>
          <p className="appSplash__englishTitle">Amharic & English Bible</p>
        </div>

        {/* Small subtle loader bar */}
        <div className="appSplash__loaderTrack">
          <div className="appSplash__loaderBar" />
        </div>
      </div>
    </div>
  )
}
