import { useEffect, useMemo, useState } from 'react'
import { fetchAmharicCommentary, fetchGuideVerse } from '../api'
import { AmharicBody, CommentaryBody } from './commentaryParts'
import {
  findBookmark,
  saveNote,
  toggleCollection,
  useBookmarks,
  useCollections,
  useHighlights,
  verseKey,
  type VerseRef,
} from '../userdata'
import type { AmharicCommentary, ChapterResponse, GuideVerse } from '../types'
import type { LanguageMode } from '../prefs'

interface Props {
  reference: string
  text: string
  chapter: ChapterResponse
  verse: number
  isHighlighted: boolean
  isBookmarked: boolean
  language?: LanguageMode
  onHighlight: () => void
  onBookmark: () => void
  onCommentary?: () => void
  onNote?: () => void
  onCollections?: () => void
  onShare: () => void
  onCopy: () => void
  onClose: () => void
  onOpenChapter?: (book: number, chapter: number) => void
}

type SheetView = 'actions' | 'commentary' | 'collections' | 'note'

export default function VerseActionSheet({
  reference,
  text,
  chapter,
  verse,
  isHighlighted,
  isBookmarked,
  language = 'am',
  onHighlight,
  onBookmark,
  onCommentary,
  onNote,
  onCollections,
  onShare,
  onCopy,
  onClose,
  onOpenChapter,
}: Props) {
  const isEn = language === 'en'
  const [isPlaying, setIsPlaying] = useState(false)
  const [copied, setCopied] = useState(false)
  const [view, setView] = useState<SheetView>('actions')
  const [commLang, setCommLang] = useState<'am' | 'en'>(isEn ? 'en' : 'am')
  const [guide, setGuide] = useState<GuideVerse | null>(null)
  const [amharic, setAmharic] = useState<AmharicCommentary | null>(null)
  const [loadingComm, setLoadingComm] = useState(false)
  const [noteSaved, setNoteSaved] = useState(false)

  const bookmarks = useBookmarks()
  const highlights = useHighlights()
  const collectionNames = useCollections()

  const verseRef: VerseRef = useMemo(
    () => ({
      translation: chapter.translation.id,
      book: chapter.book.nr,
      chapter: chapter.chapter,
      verse,
    }),
    [chapter.translation.id, chapter.book.nr, chapter.chapter, verse],
  )
  const key = verseKey(verseRef)
  const existingBookmark = findBookmark(bookmarks, verseRef)
  const [noteText, setNoteText] = useState(existingBookmark?.note ?? '')

  useEffect(() => {
    setNoteText(existingBookmark?.note ?? '')
  }, [existingBookmark?.note])

  const filedIn =
    bookmarks.find((b) => verseKey(b.ref) === key)?.collection ??
    highlights.find((h) => verseKey(h.ref) === key)?.collection ??
    ''

  function handleSaveNote() {
    saveNote(bookmarks, verseRef, noteText)
    setNoteSaved(true)
    setTimeout(() => setNoteSaved(false), 1600)
  }

  // Preload commentary for this verse so opening is instant
  useEffect(() => {
    let cancelled = false
    setLoadingComm(true)
    Promise.all([
      fetchGuideVerse(chapter.translation.id, chapter.book.nr, chapter.chapter, verse).catch(() => null),
      fetchAmharicCommentary(chapter.book.nr, chapter.chapter).catch(() => null),
    ]).then(([g, a]) => {
      if (cancelled) return
      setGuide(g)
      setAmharic(a)
      setLoadingComm(false)
    })
    return () => {
      cancelled = true
    }
  }, [chapter.translation.id, chapter.book.nr, chapter.chapter, verse])

  // Web Speech API text-to-speech for Listen action
  function handleListen() {
    if (!('speechSynthesis' in window)) return
    if (isPlaying) {
      window.speechSynthesis.cancel()
      setIsPlaying(false)
      return
    }
    window.speechSynthesis.cancel()
    const utterance = new SpeechSynthesisUtterance(text)
    utterance.lang = isEn ? 'en-US' : 'am-ET'
    utterance.rate = 0.95
    utterance.onend = () => setIsPlaying(false)
    utterance.onerror = () => setIsPlaying(false)

    setIsPlaying(true)
    window.speechSynthesis.speak(utterance)
  }

  useEffect(() => {
    return () => {
      if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    }
  }, [])

  function handleCopy() {
    onCopy()
    setCopied(true)
    setTimeout(() => setCopied(false), 1600)
  }

  function handleCommentaryClick() {
    setView('commentary')
    onCommentary?.()
  }

  return (
    <div className="actionSheet" role="dialog" aria-modal="true" aria-label={`Verse actions for ${reference}`}>
      <div className="actionSheet__backdrop" onClick={onClose} />
      <div className="actionSheet__panel">
        <div className="actionSheet__handle" />

        <div className="actionSheet__head">
          <h2 className="actionSheet__title">
            {view === 'commentary'
              ? (isEn ? `${reference} Commentary` : `${reference} ማብራሪያ`)
              : view === 'collections'
                ? (isEn ? `File ${reference}` : `${reference}ን መድብ`)
                : view === 'note'
                  ? (isEn ? `Note on ${reference}` : `በ${reference} ላይ ማስታወሻ`)
                  : reference}
          </h2>
          <p className="actionSheet__snippet">{text}</p>
        </div>

        {view === 'commentary' && (
          <>
            <div className="actionSheet__commHead">
              <button
                type="button"
                className="actionSheet__backBtn"
                onClick={() => setView('actions')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>{isEn ? 'Actions' : 'ተመለስ'}</span>
              </button>

              <div className="actionSheet__langPill" role="group" aria-label="Commentary language">
                <button
                  type="button"
                  className={`actionSheet__langBtn ${commLang === 'am' ? 'is-active' : ''}`}
                  onClick={() => setCommLang('am')}
                >
                  አማርኛ
                </button>
                <button
                  type="button"
                  className={`actionSheet__langBtn ${commLang === 'en' ? 'is-active' : ''}`}
                  onClick={() => setCommLang('en')}
                >
                  English
                </button>
              </div>
            </div>

            <div className="actionSheet__commBody">
              {loadingComm && <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>}

              {!loadingComm && commLang === 'am' && (
                <AmharicBody
                  data={amharic}
                  reference={chapter.reference}
                  language={language}
                  onOpenGeneral={async () => {
                    const res = await fetchAmharicCommentary(chapter.book.nr, chapter.chapter, true)
                    setAmharic(res)
                  }}
                />
              )}

              {!loadingComm && commLang === 'en' && (
                <CommentaryBody
                  guide={guide}
                  verse={verse}
                  language={language}
                  onOpenChapter={(b, c) => {
                    onClose()
                    onOpenChapter?.(b, c)
                  }}
                />
              )}
            </div>
          </>
        )}

        {view === 'collections' && (
          <>
            <div className="actionSheet__commHead">
              <button
                type="button"
                className="actionSheet__backBtn"
                onClick={() => setView('actions')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>{isEn ? 'Actions' : 'ተመለስ'}</span>
              </button>
              <span className="actionSheet__viewTitle">{isEn ? 'Collections' : 'ስብስቦች'}</span>
            </div>

            <div className="actionSheet__collectionsList">
              {collectionNames.map((name) => {
                const isActive = filedIn === name
                return (
                  <button
                    key={name}
                    type="button"
                    className={`actionSheet__collectionItem ${isActive ? 'is-active' : ''}`}
                    onClick={() => toggleCollection(verseRef, name)}
                  >
                    <span className="actionSheet__collectionName">{name}</span>
                    <span className="actionSheet__collectionCheck">
                      {isActive ? '✓' : ''}
                    </span>
                  </button>
                )
              })}
            </div>
            <p className="actionSheet__collectionsHint">
              {isEn
                ? 'A verse can sit in one collection. Choosing the same one again takes it back out.'
                : 'ጥቅስ በአንድ ስብስብ ውስጥ ሊቀመጥ ይችላል። ድጋሚ መምረጥ ያወጣዋል።'}
            </p>
          </>
        )}

        {view === 'note' && (
          <>
            <div className="actionSheet__commHead">
              <button
                type="button"
                className="actionSheet__backBtn"
                onClick={() => setView('actions')}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7" />
                </svg>
                <span>{isEn ? 'Actions' : 'ተመለስ'}</span>
              </button>
              <span className="actionSheet__viewTitle">{isEn ? 'Personal Note' : 'የግል ማስታወሻ'}</span>
            </div>

            <div className="actionSheet__noteForm">
              <textarea
                className="actionSheet__noteTextarea"
                value={noteText}
                onChange={(e) => setNoteText(e.target.value)}
                placeholder={isEn ? 'Write your note on this verse…' : 'በዚህ ጥቅስ ላይ ማስታወሻዎን ይጻፉ…'}
                rows={5}
                aria-label={isEn ? 'Personal Note' : 'የግል ማስታወሻ'}
              />
              <div className="actionSheet__noteActions">
                <button
                  type="button"
                  className="actionSheet__saveNoteBtn"
                  onClick={handleSaveNote}
                >
                  {isEn
                    ? (noteSaved ? 'Saved ✓' : 'Save Note')
                    : (noteSaved ? 'ተቀምጧል ✓' : 'ማስታወሻ አስቀምጥ')}
                </button>
              </div>
            </div>
          </>
        )}

        {view === 'actions' && (
          <div className="actionSheet__grid">
            <button
              type="button"
              className={`actionSheet__btn ${isHighlighted ? 'is-active' : ''}`}
              onClick={onHighlight}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m18 2 4 4-12 12-4 1 1-4 11-11Z" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Highlight' : 'አድምቅ'}</span>
            </button>

            <button
              type="button"
              className={`actionSheet__btn ${isBookmarked ? 'is-active' : ''}`}
              onClick={onBookmark}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill={isBookmarked ? 'currentColor' : 'none'} stroke="currentColor" strokeWidth="2">
                  <path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Bookmark' : 'ምልክት'}</span>
            </button>

            <button
              type="button"
              className="actionSheet__btn"
              onClick={handleCommentaryClick}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Commentary' : 'ማብራሪያ'}</span>
            </button>

            <button
              type="button"
              className={`actionSheet__btn ${existingBookmark?.note ? 'is-active' : ''}`}
              onClick={() => {
                setView('note')
                onNote?.()
              }}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                  <path d="M14 2v6h6" />
                  <line x1="16" y1="13" x2="8" y2="13" />
                  <line x1="16" y1="17" x2="8" y2="17" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Note' : 'ማስታወሻ'}</span>
            </button>

            <button
              type="button"
              className={`actionSheet__btn ${filedIn ? 'is-active' : ''}`}
              onClick={() => {
                setView('collections')
                onCollections?.()
              }}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="3" width="7" height="7" rx="1" />
                  <rect x="14" y="14" width="7" height="7" rx="1" />
                  <rect x="3" y="14" width="7" height="7" rx="1" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Collections' : 'ስብስቦች'}</span>
            </button>

            <button
              type="button"
              className={`actionSheet__btn ${isPlaying ? 'is-active' : ''}`}
              onClick={handleListen}
            >
              <div className="actionSheet__btnIcon">
                {isPlaying ? (
                  <svg viewBox="0 0 24 24" fill="currentColor">
                    <rect x="6" y="4" width="4" height="16" />
                    <rect x="14" y="4" width="4" height="16" />
                  </svg>
                ) : (
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
                    <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
                  </svg>
                )}
              </div>
              <span className="actionSheet__btnLabel">
                {isEn ? (isPlaying ? 'Stop' : 'Listen') : (isPlaying ? 'አቁም' : 'አዳምጥ')}
              </span>
            </button>

            <button
              type="button"
              className="actionSheet__btn"
              onClick={onShare}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="18" cy="5" r="3" />
                  <circle cx="6" cy="12" r="3" />
                  <circle cx="18" cy="19" r="3" />
                  <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                  <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">{isEn ? 'Share' : 'አጋራ'}</span>
            </button>

            <button
              type="button"
              className="actionSheet__btn"
              onClick={handleCopy}
            >
              <div className="actionSheet__btnIcon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
                  <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                </svg>
              </div>
              <span className="actionSheet__btnLabel">
                {isEn ? (copied ? 'Copied!' : 'Copy') : (copied ? 'ተቀድቷል!' : 'ገልብጥ')}
              </span>
            </button>
          </div>
        )}
      </div>
    </div>
  )
}
