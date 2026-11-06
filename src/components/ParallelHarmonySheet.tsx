import { useState } from 'react'
import Sheet from './Sheet'
import {
  PARALLEL_HARMONY_ENTRIES,
  type ParallelHarmonyEntry,
} from '../parallelHarmonyData'
import type { LanguageMode } from '../prefs'

interface Props {
  open: boolean
  initialHarmonyId?: string
  bookNr?: number
  chapter?: number
  verse?: number
  language?: LanguageMode
  onClose: () => void
  onOpenPassage?: (book: number, chapter: number) => void
}

export default function ParallelHarmonySheet({
  open,
  initialHarmonyId,
  bookNr,
  chapter,
  verse: _verse,
  language = 'am',
  onClose,
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'

  // Pick initial entry based on id or book/chapter
  const defaultEntry =
    PARALLEL_HARMONY_ENTRIES.find((h) => h.id === initialHarmonyId) ||
    (bookNr && chapter
      ? PARALLEL_HARMONY_ENTRIES.find(
          (h) =>
            (h.passageA.bookNr === bookNr && h.passageA.chapter === chapter) ||
            (h.passageB.bookNr === bookNr && h.passageB.chapter === chapter) ||
            (h.passageC &&
              h.passageC.bookNr === bookNr &&
              h.passageC.chapter === chapter)
        )
      : undefined) ||
    PARALLEL_HARMONY_ENTRIES[0]

  const [selectedId, setSelectedId] = useState<string>(defaultEntry.id)
  const [copiedKey, setCopiedKey] = useState<string | null>(null)

  const activeHarmony: ParallelHarmonyEntry =
    PARALLEL_HARMONY_ENTRIES.find((h) => h.id === selectedId) || defaultEntry

  const handleCopy = (key: string, text: string) => {
    navigator.clipboard?.writeText(text).catch(() => {})
    setCopiedKey(key)
    setTimeout(() => setCopiedKey(null), 1800)
  }

  return (
    <Sheet
      open={open}
      title={
        isEn
          ? 'Parallel Scripture Harmony'
          : 'የተዛማጅ ክፍሎች ማነጻጸሪያና ውህደት'
      }
      onClose={onClose}
    >
      <div className="harmonySheetBody">
        {/* Top Header & Principle Banner */}
        <div className="harmonyBanner">
          <div className="harmonyBanner__badge">
            ⚖️ {isEn ? 'Scripture Interprets Scripture' : 'መጽሐፍ ቅዱስ ራሱን በራሱ ይተረጉማል'}
          </div>
          <h2 className="harmonyBanner__title">
            {isEn ? activeHarmony.titleEn : activeHarmony.titleAm}
          </h2>
          <span className="harmonyBanner__category">
            {isEn ? activeHarmony.categoryLabelEn : activeHarmony.categoryLabelAm}
          </span>
        </div>

        {/* Quick Selector Pills for Key Parallel Passages */}
        <div className="harmonySelector" role="tablist">
          {PARALLEL_HARMONY_ENTRIES.map((item) => {
            const isSel = item.id === activeHarmony.id
            return (
              <button
                key={item.id}
                type="button"
                className={`harmonySelector__pill ${isSel ? 'is-active' : ''}`}
                onClick={() => setSelectedId(item.id)}
              >
                <span>🔄</span>
                <span>{isEn ? item.titleEn : item.titleAm}</span>
              </button>
            )
          })}
        </div>

        {/* Side-by-Side Scripture Comparison Cards */}
        <div className="harmonyComparison">
          <div className="harmonyPassageCard harmonyPassageCard--a">
            <div className="harmonyPassageCard__head">
              <span className="harmonyPassageCard__ref">
                {isEn ? activeHarmony.passageA.refEn : activeHarmony.passageA.refAm}
              </span>
              <button
                type="button"
                className="harmonyPassageCard__copyBtn"
                onClick={() =>
                  handleCopy(
                    'a',
                    `${isEn ? activeHarmony.passageA.refEn : activeHarmony.passageA.refAm}\n"${isEn ? activeHarmony.passageA.textEn : activeHarmony.passageA.textAm}"`
                  )
                }
                title={isEn ? 'Copy' : 'ገልብጥ'}
              >
                {copiedKey === 'a' ? '✓' : '📋'}
              </button>
            </div>
            <p className="harmonyPassageCard__context">
              👤 {isEn ? activeHarmony.passageA.writerContextEn : activeHarmony.passageA.writerContextAm}
            </p>
            <blockquote className="harmonyPassageCard__text">
              «{isEn ? activeHarmony.passageA.textEn : activeHarmony.passageA.textAm}»
            </blockquote>
            {onOpenPassage && (
              <button
                type="button"
                className="harmonyPassageCard__openBtn"
                onClick={() => {
                  onClose()
                  onOpenPassage(
                    activeHarmony.passageA.bookNr,
                    activeHarmony.passageA.chapter
                  )
                }}
              >
                📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
              </button>
            )}
          </div>

          <div className="harmonyDivider">
            <span className="harmonyDivider__icon">⚡</span>
            <span className="harmonyDivider__label">VS</span>
          </div>

          <div className="harmonyPassageCard harmonyPassageCard--b">
            <div className="harmonyPassageCard__head">
              <span className="harmonyPassageCard__ref">
                {isEn ? activeHarmony.passageB.refEn : activeHarmony.passageB.refAm}
              </span>
              <button
                type="button"
                className="harmonyPassageCard__copyBtn"
                onClick={() =>
                  handleCopy(
                    'b',
                    `${isEn ? activeHarmony.passageB.refEn : activeHarmony.passageB.refAm}\n"${isEn ? activeHarmony.passageB.textEn : activeHarmony.passageB.textAm}"`
                  )
                }
                title={isEn ? 'Copy' : 'ገልብጥ'}
              >
                {copiedKey === 'b' ? '✓' : '📋'}
              </button>
            </div>
            <p className="harmonyPassageCard__context">
              👤 {isEn ? activeHarmony.passageB.writerContextEn : activeHarmony.passageB.writerContextAm}
            </p>
            <blockquote className="harmonyPassageCard__text">
              «{isEn ? activeHarmony.passageB.textEn : activeHarmony.passageB.textAm}»
            </blockquote>
            {onOpenPassage && (
              <button
                type="button"
                className="harmonyPassageCard__openBtn"
                onClick={() => {
                  onClose()
                  onOpenPassage(
                    activeHarmony.passageB.bookNr,
                    activeHarmony.passageB.chapter
                  )
                }}
              >
                📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
              </button>
            )}
          </div>

          {activeHarmony.passageC && (
            <>
              <div className="harmonyDivider">
                <span className="harmonyDivider__icon">➕</span>
                <span className="harmonyDivider__label">AND</span>
              </div>
              <div className="harmonyPassageCard harmonyPassageCard--c">
                <div className="harmonyPassageCard__head">
                  <span className="harmonyPassageCard__ref">
                    {isEn
                      ? activeHarmony.passageC.refEn
                      : activeHarmony.passageC.refAm}
                  </span>
                  <button
                    type="button"
                    className="harmonyPassageCard__copyBtn"
                    onClick={() =>
                      handleCopy(
                        'c',
                        `${isEn ? activeHarmony.passageC!.refEn : activeHarmony.passageC!.refAm}\n"${isEn ? activeHarmony.passageC!.textEn : activeHarmony.passageC!.textAm}"`
                      )
                    }
                    title={isEn ? 'Copy' : 'ገልብጥ'}
                  >
                    {copiedKey === 'c' ? '✓' : '📋'}
                  </button>
                </div>
                <p className="harmonyPassageCard__context">
                  👤 {isEn
                    ? activeHarmony.passageC.writerContextEn
                    : activeHarmony.passageC.writerContextAm}
                </p>
                <blockquote className="harmonyPassageCard__text">
                  «{isEn
                    ? activeHarmony.passageC.textEn
                    : activeHarmony.passageC.textAm}»
                </blockquote>
                {onOpenPassage && (
                  <button
                    type="button"
                    className="harmonyPassageCard__openBtn"
                    onClick={() => {
                      onClose()
                      onOpenPassage(
                        activeHarmony.passageC!.bookNr,
                        activeHarmony.passageC!.chapter
                      )
                    }}
                  >
                    📖 {isEn ? 'Read Chapter' : 'ምዕራፉን አንብብ'} →
                  </button>
                )}
              </div>
            </>
          )}
        </div>

        {/* 3 Core Harmonization Insights */}
        <div className="harmonyPillars">
          {/* Pillar 1: Why Did the Words Differ? */}
          <div className="harmonyPillarCard harmonyPillarCard--bridge">
            <h3 className="harmonyPillarCard__title">
              🔍 {isEn ? 'Why Did the Words Differ?' : 'ለምን አገላለጹ ተለያየ? (የቋንቋና የታሪክ ልዩነት)'}
            </h3>
            <p className="harmonyPillarCard__body">
              {isEn ? activeHarmony.whyDiffersEn : activeHarmony.whyDiffersAm}
            </p>
          </div>

          {/* Pillar 2: The False Teaching Trap */}
          <div className="harmonyPillarCard harmonyPillarCard--trap">
            <h3 className="harmonyPillarCard__title harmonyPillarCard__title--alert">
              ⚠️ {isEn ? 'The False Teaching Trap' : 'የሐሰት መምህራን ወጥመድ (ጥቅሱን ብቻ በመነጠል የሚፈጠር ስህተት)'}
            </h3>
            <p className="harmonyPillarCard__body">
              {isEn ? activeHarmony.falseTrapEn : activeHarmony.falseTrapAm}
            </p>
          </div>

          {/* Pillar 3: The Harmonized Divine Truth */}
          <div className="harmonyPillarCard harmonyPillarCard--truth">
            <h3 className="harmonyPillarCard__title harmonyPillarCard__title--truth">
              🛡️ {isEn ? 'The Harmonized Divine Truth' : 'የተዛማጁ እውነተኛ ውህደት (ሁለቱን አንድ ላይ ስናነብ)'}
            </h3>
            <p className="harmonyPillarCard__body harmonyPillarCard__body--highlight">
              {isEn
                ? activeHarmony.harmonizedTruthEn
                : activeHarmony.harmonizedTruthAm}
            </p>
          </div>
        </div>
      </div>
    </Sheet>
  )
}
