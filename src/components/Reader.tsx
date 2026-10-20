import { useEffect, useMemo, useState } from 'react'
import { fetchChapter, fetchCoverage } from '../api'
import ChapterPicker from './ChapterPicker'
import SharePanel from './SharePanel'
import Sheet from './Sheet'
import VerseCommentary from './VerseCommentary'
import WordPanel from './WordPanel'
import { useBookNames } from './useBookNames'
import {
  isBookmarked,
  isHighlighted,
  toggleBookmark,
  toggleHighlight,
  toggleCollection,
  saveNote,
  useBookmarks,
  useCollections,
  useHighlights,
  type VerseRef,
} from '../userdata'
import type { LanguageMode } from '../prefs'
import type { ChapterResponse } from '../types'

interface Props {
  chapter: ChapterResponse
  onOpen: (book: number, chapter: number) => void
  onAppearance?: () => void
  /** Passage limits from the route, e.g. 16 to 20. */
  passage?: { from: number; to: number } | null
  language: LanguageMode
  compare: 'off' | 'am54'
  memorize: boolean
  wordLookup: boolean
}

/** One verse, in whichever languages the reader asked for. */
interface Line {
  lang: 'am' | 'en'
  text: string
  /** Distinguishes the 2009 text from the older edition when both are shown. */
  edition?: 'am54'
  /** True when this line is the older edition shown beneath the current text. */
  alternate?: boolean
}

type Panel = 'none' | 'chapters' | 'commentary' | 'note' | 'share' | 'collections'

/**
 * One row of the chapter. A row labelled `from–to` covers several English
 * numbers because the 2009 text carries them inside the single Amharic verse
 * named by `holds`. `holds` is null when nothing in the chapter carries them,
 * in which case the row shows the English on its own.
 */
interface DisplayRow {
  from: number
  to: number
  holds: number | null
}

export default function Reader({
  chapter,
  onOpen,
  onAppearance: _onAppearance,
  passage = null,
  language,
  compare,
  memorize,
  wordLookup,
}: Props) {
  const [selected, setSelected] = useState<number | null>(null)
  const [panel, setPanel] = useState<Panel>('none')
  const [word, setWord] = useState<{ text: string; verse: number } | null>(null)
  const [counterpart, setCounterpart] = useState<ChapterResponse | null>(null)
  const [coverage, setCoverage] = useState<Record<string, number[]> | null>(null)
  const [revealed, setRevealed] = useState<Set<number>>(new Set())
  const [isChapterPlaying, setIsChapterPlaying] = useState(false)
  const [currentNoteText, setCurrentNoteText] = useState('')
  const [noteSavedFeedback, setNoteSavedFeedback] = useState<number | null>(null)

  function handleChapterListen() {
    if (!('speechSynthesis' in window)) return
    if (isChapterPlaying) {
      window.speechSynthesis.cancel()
      setIsChapterPlaying(false)
      return
    }
    window.speechSynthesis.cancel()
    const isEn = language === 'en'
    const isAm = language === 'am'
    const textToSpeak = isEn
      ? (readingAmharic ? counterpart?.verses.map((v) => v.text).join('. ') : chapter.verses.map((v) => v.text).join('. ')) || chapter.verses.map((v) => v.text).join('. ')
      : (readingAmharic ? chapter.verses.map((v) => v.text).join('. ') : counterpart?.verses.map((v) => v.text).join('. ')) || chapter.verses.map((v) => v.text).join('. ')
    const utterance = new SpeechSynthesisUtterance(textToSpeak)
    utterance.lang = isEn || (!readingAmharic && !isAm) ? 'en-US' : 'am-ET'
    utterance.rate = 0.95
    utterance.onend = () => setIsChapterPlaying(false)
    utterance.onerror = () => setIsChapterPlaying(false)
    setIsChapterPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
      setIsChapterPlaying(false)
    }
  }, [chapter.book.nr, chapter.chapter])

  const bookmarks = useBookmarks()
  const highlights = useHighlights()

  const readingAmharic = chapter.translation.lang === 'am'

  const covered = coverage?.[String(chapter.book.nr)] ?? null
  const isCovered = covered ? covered.includes(chapter.chapter) : true

  useEffect(() => {
    setSelected(null)
    setPanel('none')
    setWord(null)
    setCounterpart(null)
    setRevealed(new Set())
  }, [chapter.book.nr, chapter.chapter, chapter.translation.id])

  useEffect(() => {
    setRevealed(new Set())
  }, [passage?.from, passage?.to])

  useEffect(() => {
    if (selected !== null) {
      const existing = bookmarks.find(
        (b) =>
          b.ref.verse === selected &&
          b.ref.chapter === chapter.chapter &&
          b.ref.book === chapter.book.nr,
      )
      setCurrentNoteText(existing?.note ?? '')
    } else {
      setCurrentNoteText('')
    }
  }, [selected, chapter.chapter, chapter.book.nr, bookmarks])

  useEffect(() => {
    let cancelled = false
    fetchCoverage()
      .then((res) => !cancelled && setCoverage(res.chapters))
      .catch(() => !cancelled && setCoverage(null))
    return () => {
      cancelled = true
    }
  }, [])

  // The other language of the same chapter, fetched once so the verse list can
  // show one language or both without a second request per verse.
  const otherTranslation = readingAmharic ? 'kjv' : 'am'
  // A run of English numbers the Amharic text does not separate needs the
  // English wording even when the reader has asked for Amharic only.
  const needsCounterpart =
    language !== (readingAmharic ? 'am' : 'en') || chapter.grouped.length > 0
  useEffect(() => {
    let cancelled = false
    setCounterpart(null)
    if (!needsCounterpart) return
    fetchChapter(otherTranslation, chapter.book.nr, chapter.chapter)
      .then((res) => !cancelled && setCounterpart(res))
      .catch(() => !cancelled && setCounterpart(null))
    return () => {
      cancelled = true
    }
  }, [otherTranslation, chapter.book.nr, chapter.chapter, needsCounterpart, readingAmharic])

  // The older Ethiopian Bible Society edition, fetched only while comparing.
  const [olderChapter, setOlderChapter] = useState<ChapterResponse | null>(null)
  useEffect(() => {
    let cancelled = false
    setOlderChapter(null)
    if (compare !== 'am54') return
    if (!readingAmharic) return
    fetchChapter('am54', chapter.book.nr, chapter.chapter)
      .then((res) => !cancelled && setOlderChapter(res))
      .catch(() => !cancelled && setOlderChapter(null))
    return () => {
      cancelled = true
    }
  }, [compare, chapter.book.nr, chapter.chapter, readingAmharic])

  function refFor(verse: number): VerseRef {
    return {
      translation: chapter.translation.id,
      book: chapter.book.nr,
      chapter: chapter.chapter,
      verse,
    }
  }

  /** Builds the two candidate lines for a verse, then keeps what was asked for. */
  function linesFor(verse: number): Line[] {
    const mine = chapter.verses.find((v) => v.verse === verse)?.text ?? ''
    const theirs = counterpart?.verses.find((v) => v.verse === verse)?.text ?? ''

    const amLine = { lang: 'am' as const, text: readingAmharic ? mine : theirs }
    const enLine = { lang: 'en' as const, text: readingAmharic ? theirs : mine }

    let kept: Line[]
    if (language === 'am') kept = amLine.text ? [amLine] : []
    else if (language === 'en') kept = enLine.text ? [enLine] : []
    else
      kept = [readingAmharic ? amLine : enLine, readingAmharic ? enLine : amLine].filter(
        (line) => line.text,
      )

    // Comparing only makes sense against the other Amharic edition, so it is
    // offered from the Amharic text and never replaces what is being read.
    if (compare !== 'am54') return kept
    const older = olderChapter?.verses.find((v) => v.verse === verse)?.text ?? ''
    if (!older) return kept
    if (kept.some((l) => l.lang === 'am' && l.text === older)) return kept

    const index = kept.findIndex((l) => l.lang === 'am')
    const alt: Line = { lang: 'am', text: older, edition: 'am54', alternate: true }
    if (index === -1) return [...kept, alt]
    return [...kept.slice(0, index + 1), alt, ...kept.slice(index + 1)]
  }

  const groupedText =
    language === 'en'
      ? '— the Amharic text runs this verse into the ones around it —'
      : '— የአማርኛ እትም ይህንን ጥቅስ ከቀደሙት ጋር ያጣምረዋል —'

  /** English words become buttons only when the reader asks for word lookup. */
  function renderLine(line: Line, verse: number) {
    if (!wordLookup || line.lang !== 'en') return line.text
    return (
      <span className="verse__english">
        {line.text.split(/(\s+)/).map((chunk, i) =>
          /^\s+$/.test(chunk) ? (
            chunk
          ) : (
            <button
              key={i}
              type="button"
              className="wordtap"
              onClick={() => setWord({ text: chunk, verse })}
              title={language === 'en' ? `Look up "${chunk}"` : `የ"${chunk}" ፍቺ ፈልግ`}
            >
              {chunk}
            </button>
          ),
        )}
      </span>
    )
  }

  async function copyVerse(verse: number, lines: Line[]) {
    const body = lines.map((l) => l.text).join(' ')
    try {
      await navigator.clipboard.writeText(`${chapter.reference}:${verse} ${body}`)
    } catch {
      // A blocked clipboard is not worth interrupting reading for.
    }
  }

  // A passage narrows the chapter; the pager still moves between chapters.
  const firstSlot = passage?.from ?? 1
  const lastSlot = passage?.to ?? chapter.slots
  const slots = useMemo(
    () => Array.from({ length: lastSlot - firstSlot + 1 }, (_, i) => i + firstSlot),
    [firstSlot, lastSlot],
  )
  /**
   * A printed chapter can carry fewer Amharic verses than English numbers,
   * because the edition absorbs short passages into the verse before. Some
   * editions also drop a verse at the start, which shifts the rest along. A
   * number with no text of its own is therefore folded into whichever
   * neighbouring verse really holds it, and the row is labelled with the whole
   * range, so a merged passage reads the way the book actually reads.
   */
  const rows = useMemo(() => {
    const missing = new Set(chapter.grouped)
    const textOf = (n: number) =>
      (chapter.verses.find((v) => v.verse === n)?.text ?? '').trim()

    // Work on whole runs of numbers with no text, then decide which single
    // verse really holds them. A run at the top of a chapter has nothing
    // before it and joins the verse after; a run at the end has nothing after
    // it and joins the verse before.
    const owner = new Map<number, number | null>()
    for (const n of [...missing].sort((a, b) => a - b)) {
      if (owner.has(n)) continue
      let end = n
      while (end + 1 <= slots.length && missing.has(end + 1)) end += 1
      const before = n - 1
      const after = end + 1
      const beforeHolds = before >= 1 && !missing.has(before) && textOf(before) !== ''
      const afterHolds = after <= slots.length && !missing.has(after) && textOf(after) !== ''
      const holder = beforeHolds ? before : afterHolds ? after : null
      for (let v = n; v <= end; v += 1) owner.set(v, holder)
    }

    const out: DisplayRow[] = []
    let i = 1
    while (i <= slots.length) {
      if (missing.has(i)) {
        // Numbers nobody holds still need a row so their English is not lost.
        if (owner.get(i) == null) {
          let end = i
          while (end + 1 <= slots.length && missing.has(end + 1)) end += 1
          out.push({ from: i, to: end, holds: null })
          i = end + 1
          continue
        }
        // Folding happens on the holding verse below, so step over it here.
        i += 1
        continue
      }

      // Extend this verse's row backwards over any numbers it holds.
      let from = i
      while (from - 1 >= 1 && missing.has(from - 1) && owner.get(from - 1) === i) from -= 1
      let to = i
      while (to + 1 <= slots.length && missing.has(to + 1) && owner.get(to + 1) === i) to += 1

      out.push({ from, to, holds: i })
      i = to + 1
    }
    return out
  }, [chapter.grouped, chapter.verses, slots.length])

  /** English wording for a run of numbers the Amharic text does not separate. */
  function englishForRange(from: number, to: number): string {
    const parts: string[] = []
    for (let v = from; v <= to; v += 1) {
      const text = counterpart?.verses.find((x) => x.verse === v)?.text ?? ''
      if (text) parts.push(text.trim())
    }
    return parts.join(' ')
  }

  /**
   * The lines for a folded row: the Amharic that really holds the passage, and
   * the English for every number the row covers.
   */
  function mergedLines(row: DisplayRow): Line[] {
    const out: Line[] = []
    const holder = row.holds
    if (holder != null && language !== 'en') {
      const text = chapter.verses.find((v) => v.verse === holder)?.text ?? ''
      if (text) out.push({ lang: 'am', text })
    }
    if (language !== 'am') {
      const text = englishForRange(row.from, row.to)
      if (text) out.push({ lang: 'en', text })
    }
    return out
  }

  const selectedLines = selected === null ? [] : linesFor(selected)
  const uncovered = covered ?? []
  const collectionNames = useCollections()

  // The collection this selected verse is already filed under, if any.
  const selectedRef = selected === null ? null : refFor(selected)
  const filedIn =
    selectedRef === null
      ? ''
      : (bookmarks.find((b) => b.ref.verse === selectedRef.verse && b.ref.chapter === selectedRef.chapter && b.ref.book === selectedRef.book)
          ?.collection ??
        highlights.find((h) => h.ref.verse === selectedRef.verse && h.ref.chapter === selectedRef.chapter && h.ref.book === selectedRef.book)
          ?.collection ??
        '')

  const { am: amBookName, en: enBookName } = useBookNames(chapter.book.nr)
  const displayBookName =
    language === 'en'
      ? (enBookName ?? chapter.book.name)
      : language === 'am'
      ? (amBookName ?? chapter.book.name)
      : (amBookName && enBookName ? `${amBookName} (${enBookName})` : chapter.book.name)

  return (
    <article className="read">
      {chapter.fallback && (
        <p className="notice notice--gap">
          {language === 'en'
            ? 'This chapter is shown from the earlier Ethiopian Bible Society edition.'
            : 'ይህ ምዕራፍ ከቀድሞው የኢትዮጵያ መጽሐፍ ቅዱስ ማኅበር እትም ቀርቧል።'}
        </p>
      )}

      {coverage !== null && !isCovered && (
        <p className="notice notice--gap">
          {language === 'en'
            ? 'Your Amharic commentary book does not cover this chapter. English commentary is still available from any verse.'
            : 'የአማርኛ ማብራሪያ መጽሐፉ ይህንን ምዕራፍ አያካትትም።'}
        </p>
      )}

      {/* The numbers the 2009 text does not separate are folded into the verse
          that holds them and labelled with the whole range, so a chapter note
          about them would only repeat what the text already shows. */}
      {passage && (
        <p className="notice notice--passage">
          {language === 'en' ? 'Showing ' : 'ከ '}
          {displayBookName} {chapter.chapter}:{passage.from}
          {passage.to !== passage.from ? `–${passage.to}` : ''}
          {language === 'en' ? ' only. ' : ' ብቻ ይታያል። '}
          <button
            type="button"
            className="linkbutton"
            onClick={() => onOpen(chapter.book.nr, chapter.chapter)}
          >
            {language === 'en' ? 'Read the whole chapter' : 'ሙሉውን ምዕራፍ አንብብ'}
          </button>
        </p>
      )}

      <ol className="verses">
        {rows.map((row) => {
          const n = row.from
          const folded = row.from !== row.to
          const label = folded ? `${row.from}–${row.to}` : `${n}`
          const lines = folded ? mergedLines(row) : linesFor(n)
          const missing = lines.length === 0
          const ref = refFor(n)
          const starred = isBookmarked(bookmarks, ref)
          const lit = isHighlighted(highlights, ref)
          const on = selected === n
          const hidden = memorize && !revealed.has(n)
          const verseBookmark = bookmarks.find(
            (b) =>
              b.ref.verse === n &&
              b.ref.chapter === chapter.chapter &&
              b.ref.book === chapter.book.nr,
          )
          const verseNote = verseBookmark?.note ?? ''
          const verseCollection =
            verseBookmark?.collection ??
            highlights.find(
              (h) =>
                h.ref.verse === n &&
                h.ref.chapter === chapter.chapter &&
                h.ref.book === chapter.book.nr,
            )?.collection ??
            ''

          return (
            <li
              key={n}
              className={`verse ${on ? 'is-on' : ''} ${lit ? 'is-lit' : ''} ${
                starred ? 'is-starred' : ''
              } ${missing ? 'verse--grouped' : ''} ${folded ? 'verse--run' : ''} ${hidden ? 'verse--hidden' : ''}`}
              id={`v${n}`}
              onClick={(e) => {
                // Tapping the row selects it, unless text is being selected.
                if ((window.getSelection()?.toString() ?? '').length > 0) return
                if ((e.target as HTMLElement).closest('button, a, textarea')) return
                if (memorize && !revealed.has(n)) {
                  setRevealed((prev) => new Set(prev).add(n))
                  return
                }
                setPanel('none')
                setSelected((cur) => (cur === n ? null : n))
              }}
            >
              <div className="verse__body">
                {hidden ? (
                  <button
                    type="button"
                    className="verse__reveal"
                    onClick={() => setRevealed((prev) => new Set(prev).add(n))}
                  >
                    <sup className={`verse__n ${folded ? 'verse__n--run' : ''}`}>{label}</sup>
                    {language === 'en' ? `Tap to reveal verse ${label}` : `ጥቅስ ${label}ን ለማየት ይንኩ`}
                  </button>
                ) : missing ? (
                  <p className="verse__line verse__line--missing">
                    <sup className={`verse__n ${folded ? 'verse__n--run' : ''}`}>{label}</sup>
                    {groupedText}
                  </p>
                ) : (
                  lines.map((line, index) => (
                    <p
                      key={`${line.lang}${line.edition ?? ''}`}
                      className={`verse__line ${line.alternate ? 'verse__line--alternate' : ''}`}
                      lang={line.lang === 'am' ? 'am' : 'en'}
                    >
                      {line.alternate && (
                        <span className="verse__edition">
                          {language === 'en' ? '1954 Edition' : 'የ1954 እትም'}
                        </span>
                      )}
                      {/* The number sits inside the first line so it can never
                          drift away from the text it belongs to. */}
                      {index === 0 && (
                        <sup className={`verse__n ${folded ? 'verse__n--run' : ''}`}>
                          {label}
                        </sup>
                      )}
                      {renderLine(line, n)}
                    </p>
                  ))
                )}

                {/* Persistent collection tag on the verse when saved */}
                {verseCollection && !on && (
                  <div className="verse__tagsRow">
                    <span className="verse__tagBadge">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
                        <line x1="7" y1="7" x2="7.01" y2="7" />
                      </svg>
                      {verseCollection}
                    </span>
                  </div>
                )}

                {/* Persistent note card directly on the verse when not selected */}
                {verseNote && !on && (
                  <div className="verse__inlineNoteCard" onClick={() => setSelected(n)}>
                    <div className="verse__inlineNoteHead">
                      <span className="verse__inlineNoteIcon">📝</span>
                      <span className="verse__inlineNoteLabel">{language === 'en' ? 'Note' : 'ማስታወሻ'}</span>
                    </div>
                    <p className="verse__inlineNoteBody">{verseNote}</p>
                  </div>
                )}

                {/* Inline Action & Collection Box right under selected verse */}
                {on && (
                  <div className="verse__inlineBox" onClick={(e) => e.stopPropagation()}>
                    <div className="verse__inlineHeader">
                      <span className="verse__inlineRef">
                        {displayBookName} {chapter.chapter}:{label}
                      </span>
                      <button
                        type="button"
                        className="verse__inlineCloseBtn"
                        onClick={() => setSelected(null)}
                        aria-label={language === 'en' ? "Close" : "ዝጋ"}
                        title={language === 'en' ? "Close" : "ዝጋ"}
                      >
                        ✕
                      </button>
                    </div>

                    {/* Collections row */}
                    <div className="verse__inlineSection">
                      <div className="verse__inlineSectionTitle">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
                        </svg>
                        <span>{language === 'en' ? 'Collections' : 'ስብስቦች'}</span>
                        <span className="verse__inlineHint">
                          {language === 'en' ? '(Tap to file)' : '(ለመመደብ ይንኩ)'}
                        </span>
                      </div>
                      <div className="verse__inlineChips">
                        {collectionNames.map((name) => {
                          const isFiled = verseCollection === name
                          return (
                            <button
                              key={name}
                              type="button"
                              className={`verse__collectionChip ${isFiled ? 'is-active' : ''}`}
                              onClick={() => toggleCollection(ref, name)}
                              title={isFiled ? `Remove from ${name}` : `Add to ${name}`}
                            >
                              {isFiled && <span className="verse__chipCheck">✓</span>}
                              <span>{name}</span>
                            </button>
                          )
                        })}
                      </div>
                    </div>

                    {/* Inline Note Section right under selected verse */}
                    <div className="verse__inlineNoteSection">
                      <div className="verse__inlineSectionTitle">
                        <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
                        </svg>
                        <span>{language === 'en' ? 'Note' : 'ማስታወሻ'}</span>
                        {noteSavedFeedback === n && (
                          <span className="verse__inlineSavedBadge">
                            ✓ {language === 'en' ? 'Saved' : 'ተቀምጧል'}
                          </span>
                        )}
                      </div>
                      <textarea
                        className="verse__inlineNoteInput"
                        rows={2}
                        placeholder={
                          language === 'en'
                            ? 'Write your note or reflection here...'
                            : 'የእርስዎን ማስታወሻ ወይም አስተያየት እዚህ ይጻፉ...'
                        }
                        value={currentNoteText}
                        onChange={(e) => setCurrentNoteText(e.target.value)}
                        onClick={(e) => e.stopPropagation()}
                      />
                      <div className="verse__inlineNoteActions">
                        <button
                          type="button"
                          className="verse__inlineNoteSaveBtn"
                          onClick={() => {
                            saveNote(bookmarks, ref, currentNoteText)
                            setNoteSavedFeedback(n)
                            setTimeout(() => setNoteSavedFeedback(null), 2500)
                          }}
                        >
                          <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
                            <polyline points="17 21 17 13 7 13 7 21" />
                            <polyline points="7 3 7 8 15 8" />
                          </svg>
                          <span>{language === 'en' ? 'Save Note' : 'ማስታወሻ አስቀምጥ'}</span>
                        </button>
                        {verseNote && (
                          <button
                            type="button"
                            className="verse__inlineNoteDeleteBtn"
                            onClick={() => {
                              saveNote(bookmarks, ref, '')
                              setCurrentNoteText('')
                            }}
                            title={language === 'en' ? 'Remove note' : 'ማስታወሻ አስወግድ'}
                          >
                            {language === 'en' ? 'Delete Note' : 'ማስታወሻ አጥፋ'}
                          </button>
                        )}
                      </div>
                    </div>

                    {/* Quick action buttons */}
                    <div className="verse__inlineActionsRow">
                      <button
                        type="button"
                        className={`verse__inlineActionBtn ${lit ? 'is-active' : ''}`}
                        onClick={() => toggleHighlight(highlights, ref)}
                        title={language === 'en' ? 'Highlight' : 'አድምቅ'}
                      >
                        <span className="verse__inlineActionIcon">🎨</span>
                        <span>{language === 'en' ? 'Highlight' : 'አድምቅ'}</span>
                      </button>

                      <button
                        type="button"
                        className={`verse__inlineActionBtn ${starred ? 'is-active' : ''}`}
                        onClick={() => toggleBookmark(bookmarks, ref)}
                        title={language === 'en' ? 'Bookmark' : 'ዕልባት'}
                      >
                        <span className="verse__inlineActionIcon">🔖</span>
                        <span>{language === 'en' ? 'Bookmark' : 'ዕልባት'}</span>
                      </button>

                      <button
                        type="button"
                        className="verse__inlineActionBtn"
                        onClick={() => setPanel('note')}
                        title={language === 'en' ? 'Note' : 'ማስታወሻ'}
                      >
                        <span className="verse__inlineActionIcon">📝</span>
                        <span>{language === 'en' ? 'Note' : 'ማስታወሻ'}</span>
                      </button>

                      <button
                        type="button"
                        className="verse__inlineActionBtn"
                        onClick={() => setPanel('commentary')}
                        title={language === 'en' ? 'Commentary' : 'ማብራሪያ'}
                      >
                        <span className="verse__inlineActionIcon">💬</span>
                        <span>{language === 'en' ? 'Commentary' : 'ማብራሪያ'}</span>
                      </button>

                      <button
                        type="button"
                        className="verse__inlineActionBtn"
                        onClick={() => copyVerse(n, lines)}
                        title={language === 'en' ? 'Copy' : 'ገልብጥ'}
                      >
                        <span className="verse__inlineActionIcon">📋</span>
                        <span>{language === 'en' ? 'Copy' : 'ገልብጥ'}</span>
                      </button>

                      <button
                        type="button"
                        className="verse__inlineActionBtn"
                        onClick={() => setPanel('share')}
                        title={language === 'en' ? 'Share' : 'አጋራ'}
                      >
                        <span className="verse__inlineActionIcon">↗️</span>
                        <span>{language === 'en' ? 'Share' : 'አጋራ'}</span>
                      </button>
                    </div>
                  </div>
                )}

              </div>
            </li>
          )
        })}
      </ol>



      <div className="readerBar" role="toolbar" aria-label={language === 'en' ? 'Reader controls' : 'የንባብ መቆጣጠሪያ'}>
        <button
          type="button"
          className="readerBar__navBtn"
          disabled={!chapter.prev}
          onClick={() => chapter.prev && onOpen(chapter.prev.book, chapter.prev.chapter)}
          aria-label={language === 'en' ? 'Previous chapter' : 'የቀደመው ምዕራፍ'}
          title={language === 'en' ? 'Previous chapter' : 'የቀደመው ምዕራፍ'}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="readerBar__chapterBtn"
          onClick={() => setPanel('chapters')}
          aria-label={language === 'en' ? 'Choose a chapter' : 'ምዕራፍ ይምረጡ'}
          title={language === 'en' ? 'Choose a chapter' : 'ምዕራፍ ይምረጡ'}
        >
          <span>{language === 'en' ? `Ch. ${chapter.chapter}` : `ምዕ. ${chapter.chapter}`}</span>
          <svg viewBox="0 0 20 20" width="14" height="14" fill="currentColor">
            <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
          </svg>
        </button>

        <button
          type="button"
          className="readerBar__navBtn"
          disabled={!chapter.next}
          onClick={() => chapter.next && onOpen(chapter.next.book, chapter.next.chapter)}
          aria-label={language === 'en' ? 'Next chapter' : 'ቀጣይ ምዕራፍ'}
          title={language === 'en' ? 'Next chapter' : 'ቀጣይ ምዕራፍ'}
        >
          <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>

        <div className="readerBar__divider" aria-hidden="true" />

        <button
          type="button"
          className={`readerBar__listenBtn ${isChapterPlaying ? 'is-playing' : ''}`}
          title={
            isChapterPlaying
              ? (language === 'en' ? 'Stop listening' : 'ማዳመጥ አቁም')
              : (language === 'en' ? 'Listen to chapter' : 'ምዕራፉን አዳምጥ')
          }
          aria-label={
            isChapterPlaying
              ? (language === 'en' ? 'Stop listening' : 'ማዳመጥ አቁም')
              : (language === 'en' ? 'Listen to chapter' : 'ምዕራፉን አዳምጥ')
          }
          onClick={handleChapterListen}
        >
          {isChapterPlaying ? (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <rect x="6" y="5" width="4" height="14" rx="1.5" />
              <rect x="14" y="5" width="4" height="14" rx="1.5" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path d="M8 5v14l11-7z" />
            </svg>
          )}
        </button>
      </div>

      <Sheet
        open={panel === 'chapters'}
        title={language === 'en' ? `Chapters in ${displayBookName}` : `የ${displayBookName} ምዕራፎች`}
        onClose={() => setPanel('none')}
        language={language}
      >
        <ChapterPicker
          count={chapter.chapterCount}
          current={chapter.chapter}
          uncovered={uncovered}
          language={language}
          onPick={(n) => {
            setPanel('none')
            onOpen(chapter.book.nr, n)
          }}
        />
      </Sheet>

      <Sheet
        open={panel === 'commentary'}
        title={selected === null ? (language === 'en' ? 'Commentary' : 'ማብራሪያ') : `${displayBookName} ${chapter.chapter}:${selected}`}
        onClose={() => setPanel('none')}
        language={language}
      >
        {selected !== null && (
          <VerseCommentary
            chapter={chapter}
            verse={selected}
            language={language}
            onOpenChapter={(b, c) => {
              setPanel('none')
              setSelected(null)
              onOpen(b, c)
            }}
          />
        )}
      </Sheet>

      <Sheet
        open={panel === 'collections'}
        title={selected === null ? (language === 'en' ? 'Collections' : 'ስብስቦች') : (language === 'en' ? `File ${displayBookName} ${chapter.chapter}:${selected}` : `${displayBookName} ${chapter.chapter}:${selected}ን መድብ`)}
        onClose={() => setPanel('none')}
        language={language}
      >
        <div className="mlist">
          {collectionNames.map((name) => (
            <button
              key={name}
              type="button"
              className={`mrow mrow--tap ${filedIn === name ? 'is-on' : ''}`}
              aria-pressed={filedIn === name}
              onClick={() => {
                if (selectedRef) toggleCollection(selectedRef, name)
              }}
            >
              <span className="mrow__label">{name}</span>
              <span className="mrow__control" aria-hidden="true">
                {filedIn === name ? '✓' : ''}
              </span>
            </button>
          ))}
        </div>
        <p className="sheet__count">
          {language === 'en'
            ? 'A verse can sit in one collection. Choosing the same one again takes it back out.'
            : 'ጥቅስ በአንድ ስብስብ ውስጥ ሊቀመጥ ይችላል። ድጋሚ መምረጥ ያወጣዋል።'}
        </p>
      </Sheet>

      <Sheet
        open={panel === 'note'}
        title={language === 'en' ? 'Your note' : 'የእርስዎ ማስታወሻ'}
        onClose={() => setPanel('none')}
        language={language}
      >
        {selected !== null && (
          <VerseCommentary
            chapter={chapter}
            verse={selected}
            only="note"
            language={language}
            onOpenChapter={(b, c) => {
              setPanel('none')
              setSelected(null)
              onOpen(b, c)
            }}
          />
        )}
      </Sheet>

      <Sheet
        open={panel === 'share'}
        title={selected === null ? (language === 'en' ? 'Share' : 'አጋራ') : (language === 'en' ? `Share ${displayBookName} ${chapter.chapter}:${selected}` : `${displayBookName} ${chapter.chapter}:${selected}ን አጋራ`)}
        onClose={() => setPanel('none')}
        language={language}
      >
        <SharePanel
          reference={selected === null ? `${displayBookName} ${chapter.chapter}` : `${displayBookName} ${chapter.chapter}:${selected}`}
          text={selectedLines.map((l) => l.text).join(' ')}
          language={language}
          onDone={() => setPanel('none')}
        />
      </Sheet>

      {word && (
        <WordPanel
          word={word.text}
          reference={`${displayBookName} ${chapter.chapter}:${word.verse}`}
          language={language}
          onClose={() => setWord(null)}
        />
      )}
    </article>
  )
}
