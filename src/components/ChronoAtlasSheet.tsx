import { useEffect, useMemo, useRef, useState } from 'react'
import Sheet from './Sheet'
import type { LanguageMode } from '../prefs'
import {
  CHRONO_EXPEDITIONS,
  type AtlasExpedition,
  type AtlasWaypoint
} from '../chronoAtlasData'

interface Props {
  open: boolean
  onClose: () => void
  initialExpeditionId?: string
  language?: LanguageMode
  onOpenPassage?: (b: number, c: number) => void
}

export default function ChronoAtlasSheet({
  open,
  onClose,
  initialExpeditionId,
  language = 'am',
  onOpenPassage
}: Props) {
  const isEn = language === 'en'

  // Selected Expedition
  const [selectedId, setSelectedId] = useState<string>(
    initialExpeditionId || CHRONO_EXPEDITIONS[0].id
  )

  useEffect(() => {
    if (open && bodyRef.current) {
      bodyRef.current.scrollTop = 0
    }
  }, [open, selectedId])

  useEffect(() => {
    if (initialExpeditionId) {
      setSelectedId(initialExpeditionId)
    }
  }, [initialExpeditionId])

  const expedition: AtlasExpedition = useMemo(() => {
    return (
      CHRONO_EXPEDITIONS.find((e) => e.id === selectedId) ||
      CHRONO_EXPEDITIONS[0]
    )
  }, [selectedId])

  // Animation Playback State
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(0) // 0 to 1
  const [speedMultiplier, setSpeedMultiplier] = useState(1)
  const pathRef = useRef<SVGPathElement | null>(null)
  const bodyRef = useRef<HTMLDivElement | null>(null)
  const [pathLength, setPathLength] = useState(1000)

  // Measure path length on change
  useEffect(() => {
    if (pathRef.current) {
      try {
        const len = pathRef.current.getTotalLength()
        if (len > 0) setPathLength(len)
      } catch {
        // fallback
      }
    }
    setProgress(0)
    setIsPlaying(false)
  }, [expedition.id])

  // Animation loop with requestAnimationFrame
  useEffect(() => {
    if (!isPlaying) return
    let animId: number
    let lastTime = performance.now()

    const step = (now: number) => {
      const dt = (now - lastTime) / 1000
      lastTime = now

      // Base journey duration: 24 seconds at 1x
      const rate = (1 / 24) * speedMultiplier
      setProgress((prev) => {
        const next = prev + rate * dt
        if (next >= 1) {
          setIsPlaying(false)
          return 1
        }
        return next
      })

      animId = requestAnimationFrame(step)
    }

    animId = requestAnimationFrame(step)
    return () => cancelAnimationFrame(animId)
  }, [isPlaying, speedMultiplier])

  // Calculate current point on path
  const currentPos = useMemo(() => {
    if (pathRef.current && pathLength > 0) {
      try {
        const pt = pathRef.current.getPointAtLength(progress * pathLength)
        return { x: pt.x, y: pt.y }
      } catch {
        // fallback to interpolation
      }
    }
    const wpCount = expedition.waypoints.length
    if (wpCount === 0) return { x: 500, y: 325 }
    const approxIdx = Math.min(
      wpCount - 1,
      Math.floor(progress * (wpCount - 1))
    )
    return {
      x: expedition.waypoints[approxIdx].x,
      y: expedition.waypoints[approxIdx].y
    }
  }, [progress, pathLength, expedition.waypoints])

  // Active waypoint closest to progress
  const activeWaypointIdx = useMemo(() => {
    const totalWps = expedition.waypoints.length
    if (totalWps <= 1) return 0
    // Find closest waypoint by distance or index
    const targetIdx = Math.round(progress * (totalWps - 1))
    return Math.max(0, Math.min(totalWps - 1, targetIdx))
  }, [progress, expedition.waypoints.length])

  const activeWaypoint: AtlasWaypoint =
    expedition.waypoints[activeWaypointIdx] || expedition.waypoints[0]

  // Telemetry Calculations
  const currentDistanceKm = Math.round(progress * expedition.totalDistanceKm)
  const currentDays = Math.max(
    1,
    Math.round(progress * expedition.estimatedDays)
  )

  // Jump to specific waypoint
  const handleJumpToWaypoint = (idx: number) => {
    const totalWps = expedition.waypoints.length
    if (totalWps <= 1) return
    const p = idx / (totalWps - 1)
    setProgress(p)
  }

  return (
    <Sheet
      open={open}
      title={isEn ? 'The Living Chrono-Atlas' : 'የመጽሐፍ ቅዱስ ሕያው የጉዞ ካርታ'}
      onClose={() => {
        setIsPlaying(false)
        onClose()
      }}
      onBack={() => {
        setIsPlaying(false)
        onClose()
      }}
      language={language}
    >
      <div ref={bodyRef} className="sheet__body atlasSheetBody">
        {/* Expedition Selector Tabs */}
        <div className="atlasSelector" role="tablist">
          {CHRONO_EXPEDITIONS.map((exp) => {
            const isSel = exp.id === expedition.id
            return (
              <button
                key={exp.id}
                type="button"
                className={`atlasSelector__btn ${isSel ? 'is-active' : ''}`}
                onClick={() => {
                  setSelectedId(exp.id)
                  setProgress(0)
                  setIsPlaying(false)
                }}
              >
                <span className="atlasSelector__icon">{exp.icon}</span>
                <span className="atlasSelector__title">
                  {isEn ? exp.titleEn.split(':')[0] : exp.titleAm.split('፡')[0]}
                </span>
              </button>
            )
          })}
        </div>

        {/* Expedition Header Brief */}
        <header className="atlasHeader">
          <div className="atlasHeader__meta">
            <span className="atlasHeader__era">
              {isEn ? expedition.eraEn : expedition.eraAm}
            </span>
            <span className="atlasHeader__dist">
              🏁 {expedition.totalDistanceKm} km ({Math.round(expedition.totalDistanceKm * 0.621)} mi)
            </span>
            <span className="atlasHeader__time">
              ⏱️ {isEn ? `${expedition.estimatedDays} Days` : `${expedition.estimatedDays} ቀናት`}
            </span>
          </div>

          <h2 className="atlasHeader__title">
            {isEn ? expedition.titleEn : expedition.titleAm}
          </h2>
          <p className="atlasHeader__desc">
            {isEn ? expedition.descriptionEn : expedition.descriptionAm}
          </p>
        </header>

        {/* ==================================================================
            INTERACTIVE ANCIENT WORLD VECTOR MAP CANVAS (1000 x 650)
            ================================================================== */}
        <div className="atlasMapWrap">
          <svg
            className="atlasMapSvg"
            viewBox="0 0 1000 650"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              {/* Sea Water Gradient */}
              <radialGradient id="seaGrad" cx="45%" cy="45%" r="70%">
                <stop offset="0%" stopColor="var(--atlas-sea-1, #1e2820)" />
                <stop offset="100%" stopColor="var(--atlas-sea-2, #141c16)" />
              </radialGradient>

              {/* Landmass Pattern / Color */}
              <linearGradient id="landGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--atlas-land-1, #2b382d)" />
                <stop offset="100%" stopColor="var(--atlas-land-2, #212c23)" />
              </linearGradient>

              {/* Route Glow Filter */}
              <filter id="routeGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Waypoint Pulsing Marker */}
              <radialGradient id="markerGlow" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#88DE74" stopOpacity="0.9" />
                <stop offset="70%" stopColor="#4BB334" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#256B15" stopOpacity="0" />
              </radialGradient>
            </defs>

            {/* Background Sea Basin */}
            <rect width="1000" height="650" fill="url(#seaGrad)" />

            {/* Geographical Landmasses */}
            {/* Southern Europe & Greece & Italy */}
            <path
              className="atlasLand"
              d="M 50 50 L 260 50 L 250 160 L 220 220 L 200 240 L 170 200 L 140 180 L 100 200 L 50 160 Z"
              fill="url(#landGrad)"
            />
            {/* Greece & Balkans */}
            <path
              className="atlasLand"
              d="M 330 50 L 460 50 L 440 160 L 420 200 L 390 260 L 370 250 L 360 210 L 330 180 Z"
              fill="url(#landGrad)"
            />
            {/* Asia Minor / Anatolia */}
            <path
              className="atlasLand"
              d="M 460 110 L 710 110 L 700 250 L 630 265 L 530 265 L 470 240 L 460 180 Z"
              fill="url(#landGrad)"
            />
            {/* Levant & Mesopotamia */}
            <path
              className="atlasLand"
              d="M 680 250 L 980 250 L 980 600 L 890 530 L 780 470 L 710 430 L 675 420 L 670 320 Z"
              fill="url(#landGrad)"
            />
            {/* Egypt & North Africa & Sinai */}
            <path
              className="atlasLand"
              d="M 50 480 L 520 480 L 560 450 L 630 450 L 650 510 L 640 600 L 670 650 L 50 650 Z"
              fill="url(#landGrad)"
            />

            {/* Major Ancient Rivers */}
            {/* Nile River & Delta */}
            <path
              className="atlasRiver"
              d="M 590 650 Q 585 570 580 500 Q 575 470 560 450 M 580 500 Q 590 470 610 450"
            />
            {/* Tigris River */}
            <path
              className="atlasRiver"
              d="M 740 160 Q 770 230 830 330 T 910 460"
            />
            {/* Euphrates River */}
            <path
              className="atlasRiver"
              d="M 700 200 Q 750 250 810 350 T 890 475"
            />
            {/* Jordan River & Dead Sea */}
            <path
              className="atlasRiver"
              d="M 688 335 L 688 355 L 687 385"
            />
            {/* Sea of Galilee */}
            <ellipse cx="688" cy="333" rx="4" ry="6" className="atlasWaterBody" />
            {/* Dead Sea */}
            <ellipse cx="687" cy="390" rx="5" ry="14" className="atlasWaterBody" />
            {/* Red Sea / Gulfs */}
            <path
              className="atlasWaterBody"
              d="M 622 510 L 640 590 L 660 650 L 645 650 L 630 595 L 615 520 Z"
            />

            {/* Ancient Regional Labels */}
            <text x="830" y="300" className="atlasMapLabel">MESOPOTAMIA</text>
            <text x="560" y="180" className="atlasMapLabel">ASIA MINOR</text>
            <text x="360" y="130" className="atlasMapLabel">GREECE</text>
            <text x="140" y="120" className="atlasMapLabel">ROME</text>
            <text x="705" y="360" className="atlasMapLabel">CANAAN</text>
            <text x="520" y="540" className="atlasMapLabel">EGYPT</text>
            <text x="635" y="560" className="atlasMapLabel">SINAI</text>
            <text x="330" y="360" className="atlasMapLabel atlasMapLabel--sea">MEDITERRANEAN SEA (GREAT SEA)</text>

            {/* EXPEDITION ROUTE BASE (Dashed line) */}
            <path
              d={expedition.pathD}
              className="atlasRouteBase"
            />

            {/* EXPEDITION ROUTE ANIMATED GLOW PATH */}
            <path
              ref={pathRef}
              d={expedition.pathD}
              className="atlasRouteActive"
              strokeDasharray={pathLength}
              strokeDashoffset={pathLength * (1 - progress)}
              filter="url(#routeGlow)"
            />

            {/* Waypoint Markers */}
            {expedition.waypoints.map((wp, idx) => {
              const isPassed = idx <= activeWaypointIdx
              const isCurrent = idx === activeWaypointIdx
              return (
                <g
                  key={wp.id}
                  className={`atlasWpGroup ${isCurrent ? 'is-active' : ''} ${isPassed ? 'is-passed' : ''}`}
                  onClick={() => handleJumpToWaypoint(idx)}
                  style={{ cursor: 'pointer' }}
                >
                  {isCurrent && (
                    <circle
                      cx={wp.x}
                      cy={wp.y}
                      r="16"
                      fill="url(#markerGlow)"
                      className="atlasPulseRing"
                    />
                  )}
                  <circle
                    cx={wp.x}
                    cy={wp.y}
                    r={isCurrent ? 7 : 5}
                    className="atlasWpNode"
                  />
                  <text
                    x={wp.x}
                    y={wp.y - 10}
                    textAnchor="middle"
                    className="atlasWpLabel"
                  >
                    {isEn ? wp.nameEn : wp.nameAm}
                  </text>
                </g>
              )
            })}

            {/* Current Traveling Marker Avatar */}
            <g
              transform={`translate(${currentPos.x}, ${currentPos.y})`}
              className="atlasAvatarGroup"
            >
              <circle r="14" className="atlasAvatarRing" />
              <text textAnchor="middle" dy="5" fontSize="13">
                {expedition.icon}
              </text>
            </g>
          </svg>
        </div>

        {/* ==================================================================
            PLAYBACK HUD & CONTROLLER BAR
            ================================================================== */}
        <div className="atlasControlsBar">
          <div className="atlasControlsBar__top">
            {/* Play / Pause Toggle */}
            <button
              type="button"
              className="atlasPlayBtn"
              onClick={() => {
                if (progress >= 1) setProgress(0)
                setIsPlaying(!isPlaying)
              }}
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? '❚❚' : '▶'}
            </button>

            {/* Progress Scrubber */}
            <div className="atlasScrubberWrap">
              <input
                type="range"
                min="0"
                max="1000"
                value={Math.round(progress * 1000)}
                onChange={(e) => {
                  setIsPlaying(false)
                  setProgress(Number(e.target.value) / 1000)
                }}
                className="atlasScrubber"
              />
              <div className="atlasScrubber__stats">
                <span>{isEn ? 'Day' : 'ቀን'} {currentDays} / {expedition.estimatedDays}</span>
                <span>{currentDistanceKm} / {expedition.totalDistanceKm} km</span>
              </div>
            </div>

            {/* Speed Multiplier */}
            <button
              type="button"
              className="atlasSpeedBtn"
              onClick={() => {
                setSpeedMultiplier((prev) => (prev === 1 ? 2 : prev === 2 ? 4 : 1))
              }}
              title="Animation Speed"
            >
              {speedMultiplier}x
            </button>

            {/* Reset */}
            <button
              type="button"
              className="atlasResetBtn"
              onClick={() => {
                setIsPlaying(false)
                setProgress(0)
              }}
              title="Reset to Start"
            >
              ↺
            </button>
          </div>
        </div>

        {/* ==================================================================
            LIVE TRAVELER TELEMETRY & WAYPOINT DOSSIER HUD
            ================================================================== */}
        <div className="atlasWaypointCard">
          <div className="atlasWaypointCard__header">
            <div className="atlasWaypointCard__tag">
              📍 {isEn ? 'Waypoint' : 'የጉዞ ጣቢያ'} {activeWaypointIdx + 1} / {expedition.waypoints.length}
            </div>
            <div className="atlasWaypointCard__region">
              {isEn ? activeWaypoint.ancientRegionEn : activeWaypoint.ancientRegionAm}
            </div>
          </div>

          <h3 className="atlasWaypointCard__name">
            {isEn ? activeWaypoint.nameEn : activeWaypoint.nameAm}
          </h3>

          {/* Travel Stats Metrics */}
          <div className="atlasMetricsGrid">
            <div className="atlasMetric">
              <span className="atlasMetric__label">{isEn ? 'Distance' : 'የተጓዘው ርቀት'}</span>
              <span className="atlasMetric__val">{activeWaypoint.distanceKm} km</span>
            </div>
            <div className="atlasMetric">
              <span className="atlasMetric__label">{isEn ? 'Day' : 'የጉዞው ቀን'}</span>
              <span className="atlasMetric__val">{isEn ? `Day ${activeWaypoint.dayNumber}` : `ቀን ${activeWaypoint.dayNumber}`}</span>
            </div>
            {activeWaypoint.elevationMeters !== undefined && (
              <div className="atlasMetric">
                <span className="atlasMetric__label">{isEn ? 'Elevation' : 'ከፍታ'}</span>
                <span className="atlasMetric__val">{activeWaypoint.elevationMeters} m</span>
              </div>
            )}
            <div className="atlasMetric">
              <span className="atlasMetric__label">{isEn ? 'Terrain' : 'የመሬቱ አቀማመጥ'}</span>
              <span className="atlasMetric__val">{isEn ? activeWaypoint.terrainTypeEn : activeWaypoint.terrainTypeAm}</span>
            </div>
          </div>

          {/* Scripture Quote */}
          <div className="atlasWaypointCard__scripture">
            <div className="atlasWaypointCard__scriptureRef">
              📖 {activeWaypoint.scriptureRef}
            </div>
            <blockquote className="atlasWaypointCard__quote">
              “{isEn ? activeWaypoint.scriptureQuoteEn : activeWaypoint.scriptureQuoteAm}”
            </blockquote>
          </div>

          {/* Historical Significance */}
          <div className="atlasWaypointCard__sig">
            <strong>{isEn ? 'Biblical & Historical Event:' : 'ታሪካዊና መንፈሳዊ ክስተት፡'} </strong>
            <span>{isEn ? activeWaypoint.significanceEn : activeWaypoint.significanceAm}</span>
          </div>

          {/* Read in Reader Action Button */}
          {onOpenPassage && expedition.keyScriptures.length > 0 && (
            <button
              type="button"
              className="atlasReadBtn"
              onClick={() => {
                const target = expedition.keyScriptures[0]
                onClose()
                onOpenPassage(target.bookNr, target.chapter)
              }}
            >
              <span>📖 {isEn ? 'Read Journey Passage in Bible' : 'የጉዞውን ክፍል በመጽሐፍ ቅዱስ አንብብ'}</span>
              <span>›</span>
            </button>
          )}
        </div>

        {/* ==================================================================
            WAYPOINTS MILESTONE CHECKLIST
            ================================================================== */}
        <div className="atlasWaypointsList">
          <div className="atlasWaypointsList__title">
            📜 {isEn ? 'Complete Expedition Itinerary' : 'ሙሉው የጉዞ መስመርና ጣቢያዎች'}
          </div>
          <div className="atlasWaypointsGrid">
            {expedition.waypoints.map((wp, idx) => {
              const isCurrent = idx === activeWaypointIdx
              return (
                <button
                  key={wp.id}
                  type="button"
                  className={`atlasWpChip ${isCurrent ? 'is-selected' : ''}`}
                  onClick={() => handleJumpToWaypoint(idx)}
                >
                  <span className="atlasWpChip__num">{idx + 1}</span>
                  <div className="atlasWpChip__info">
                    <span className="atlasWpChip__name">
                      {isEn ? wp.nameEn : wp.nameAm}
                    </span>
                    <span className="atlasWpChip__sub">
                      {wp.distanceKm} km • {isEn ? `Day ${wp.dayNumber}` : `ቀን ${wp.dayNumber}`}
                    </span>
                  </div>
                </button>
              )
            })}
          </div>
        </div>
      </div>
    </Sheet>
  )
}
