import { useEffect, useMemo, useState } from 'react'
import { fetchAmharicCommentary, fetchGuideVerse } from '../api'
import {
  findBookmark,
  removeBookmark,
  saveNote,
  useBookmarks,
  type VerseRef,
} from '../userdata'
import { ContentsPanel, StrongsPanel } from './GuidePanels'
import { AmharicBody, CommentaryBody } from './commentaryParts'
import type { AmharicCommentary, ChapterResponse, GuideVerse } from '../types'
import type { LanguageMode } from '../prefs'

interface Props {
  chapter: ChapterResponse
  verse: number
  language?: LanguageMode
  onOpenChapter: (book: number, chapter: number) => void
  /** Opens on this tab and hides the tab bar, for a sheet with one purpose. */
  only?: Tab
}

type Tab = 'commentary' | 'amharic' | 'note' | 'strongs' | 'contents'

/**
 * The study material for one verse. It opens as a bottom sheet so the text
 * above is never covered or rearranged.
 */
export default function VerseCommentary({ chapter, verse, language = 'am', onOpenChapter, only }: Props) {
  const isEn = language === 'en'
  const [tab, setTab] = useState<Tab>(only ?? (isEn ? 'commentary' : 'amharic'))
  const [guide, setGuide] = useState<GuideVerse | null>(null)
  const [amharic, setAmharic] = useState<AmharicCommentary | null>(null)
  const [note, setNote] = useState('')
  const [saved, setSaved] = useState(false)

  const bookmarks = useBookmarks()
  const ref: VerseRef = useMemo(
    () => ({
      translation: chapter.translation.id,
      book: chapter.book.nr,
      chapter: chapter.chapter,
      verse,
    }),
    [chapter, verse],
  )
  const existing = findBookmark(bookmarks, ref)

  useEffect(() => {
    let cancelled = false
    setGuide(null)
    setAmharic(null)
    fetchGuideVerse(chapter.translation.id, chapter.book.nr, chapter.chapter, verse)
      .then((res) => !cancelled && setGuide(res))
      .catch(() => !cancelled && setGuide(null))
    fetchAmharicCommentary(chapter.book.nr, chapter.chapter)
      .then((res) => !cancelled && setAmharic(res))
      .catch(() => !cancelled && setAmharic(null))
    return () => {
      cancelled = true
    }
  }, [chapter.translation.id, chapter.book.nr, chapter.chapter, verse])

  useEffect(() => {
    setNote(existing?.note ?? '')
  }, [existing?.note])

  function storeNote() {
    saveNote(bookmarks, ref, note)
    setSaved(true)
    setTimeout(() => setSaved(false), 1600)
  }

  return (
    <div className="inline" onClick={(e) => e.stopPropagation()}>
      {!only && (
        <nav className="inline__tabs" aria-label="Study this verse">
          {(
            isEn
              ? [
                  ['commentary', 'Commentary'],
                  ['amharic', 'አማርኛ'],
                  ['note', 'Note'],
                  ['strongs', "Strong's"],
                  ['contents', 'Contents'],
                ]
              : [
                  ['amharic', 'አማርኛ'],
                  ['commentary', 'ማብራሪያ'],
                  ['note', 'ማስታወሻ'],
                  ['strongs', "ስትሮንግስ"],
                  ['contents', 'ማውጫ'],
                ]
          ).map(([id, label]) => (
            <button
              key={id}
              type="button"
              className={`inline__tab ${tab === id ? 'is-active' : ''}`}
              onClick={() => setTab(id as Tab)}
              aria-pressed={tab === id}
            >
              {label}
            </button>
          ))}
        </nav>
      )}

      <div className="inline__body">
        {tab === 'commentary' && (
          <CommentaryBody
            guide={guide}
            verse={verse}
            onOpenChapter={onOpenChapter}
            language={language}
          />
        )}

        {tab === 'amharic' && (
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

        {tab === 'note' && (
          <div className="inline__note">
            <textarea
              value={note}
              onChange={(e) => setNote(e.target.value)}
              placeholder={isEn ? "Your own note on this verse…" : "በዚህ ጥቅስ ላይ የእርስዎ ማስታወሻ…"}
              rows={6}
              aria-label={isEn ? "Your note" : "የእርስዎ ማስታወሻ"}
            />
            <div className="inline__noteActions">
              <button type="button" className="btn btn--accent" onClick={storeNote}>
                {isEn ? (saved ? 'Saved ✓' : 'Save note') : (saved ? 'ተቀምጧል ✓' : 'ማስታወሻ አስቀምጥ')}
              </button>
              {existing && (
                <button
                  type="button"
                  className="btn btn--quiet"
                  onClick={() => removeBookmark(bookmarks, ref)}
                >
                  {isEn ? 'Remove bookmark' : 'ምልክት አስወግድ'}
                </button>
              )}
            </div>
            <p className="inline__foot">
              {isEn ? 'Notes are kept on this computer only.' : 'ማስታወሻዎች በዚህ መሣሪያ ላይ ብቻ ይቀመጣሉ።'}
            </p>
          </div>
        )}

        {tab === 'strongs' && <StrongsPanel language={language} />}

        {tab === 'contents' && (
          <ContentsPanel
            currentBook={chapter.book.nr}
            onOpen={onOpenChapter}
            language={language}
          />
        )}
      </div>
    </div>
  )
}
