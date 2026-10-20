import { useEffect, useState } from 'react'
import { fetchCommentaryIndex, fetchStrongs } from '../api'
import PagePicker from './PagePicker'
import type { LanguageMode } from '../prefs'
import type { CommentaryIndex, StrongsResponse } from '../types'

interface StrongsProps {
  initialTerm?: string
  language?: LanguageMode
}

export function StrongsPanel({ initialTerm = '', language = 'am' }: StrongsProps) {
  const [term, setTerm] = useState(initialTerm)
  const [result, setResult] = useState<StrongsResponse | null>(null)
  const isEn = language === 'en'
  const [lang, setLang] = useState<'en' | 'am'>(isEn ? 'en' : 'am')

  useEffect(() => {
    if (term.trim().length < 2) {
      setResult(null)
      return
    }
    let cancelled = false
    const controller = new AbortController()
    const handle = setTimeout(() => {
      fetchStrongs(term, controller.signal)
        .then((res) => !cancelled && setResult(res))
        .catch(() => !cancelled && setResult({ query: term, total: 0, results: [] }))
    }, 250)
    return () => {
      cancelled = true
      controller.abort()
      clearTimeout(handle)
    }
  }, [term])

  return (
    <>
      <p className="guide__hint">
        {isEn ? (
          <>
            Search 14,298 Hebrew and Greek entries. Try <code>love</code>, <code>G26</code> or{' '}
            <code>H430</code>.
          </>
        ) : (
          <>
            14,298 የዕብራይስጥና የግሪክ ቃላት ይፈልጉ። ለምሳሌ <code>ፍቅር</code>፣ <code>G26</code> ወይም{' '}
            <code>H430</code>።
          </>
        )}
      </p>
      <input
        className="guide__search"
        type="search"
        value={term}
        placeholder={isEn ? "Search Strong’s — love, G26, H430…" : "ስትሮንግስን ፈልግ — ፍቅር፣ G26፣ H430…"}
        onChange={(e) => setTerm(e.target.value)}
        aria-label={isEn ? "Search Strong's concordance" : "የስትሮንግስ መዝገበ ቃላት ፈልግ"}
      />

      {result && result.hasAmharic && (
        <div className="langtoggle" role="group" aria-label={isEn ? "Entry language" : "የውጤት ቋንቋ"}>
          {(['en', 'am'] as const).map((code) => (
            <button
              key={code}
              type="button"
              className={`langtoggle__btn ${lang === code ? 'is-active' : ''}`}
              onClick={() => setLang(code)}
              aria-pressed={lang === code}
            >
              {code === 'en' ? 'English' : 'አማርኛ'}
            </button>
          ))}
        </div>
      )}

      {result && result.total === 0 && (
        <p className="notice">
          {isEn ? `No entries for “${result.query}”.` : `ለ“${result.query}” ምንም ውጤት አልተገኘም።`}
        </p>
      )}

      {result && result.total > 0 && (
        <>
          <p className="guide__hint">
            {isEn
              ? `${result.total.toLocaleString()} ${result.total === 1 ? 'entry' : 'entries'} · showing ${result.results.length}`
              : `${result.total.toLocaleString()} ውጤቶች · ${result.results.length} እየታዩ ነው`}
          </p>
          <ol className="entries">
            {result.results.map((entry) => {
              const amSenses = entry.sensesAmharic
              const senses = lang === 'am' && amSenses ? amSenses.split('\n') : entry.senses
              const derivation =
                lang === 'am' && entry.derivationAmharic
                  ? entry.derivationAmharic
                  : entry.derivation

              return (
                <li key={entry.number} className="entry">
                  <div className="entry__head">
                    <span className="entry__number">{entry.number}</span>
                    <span className="entry__word" lang={entry.lang === 'grk' ? 'grc' : 'hbo'}>
                      {entry.word}
                    </span>
                    <span className="entry__translit">{entry.translit}</span>
                  </div>
                  {senses.length > 0 && (
                    <ul className="entry__senses">
                      {senses.slice(0, 6).map((sense, i) => (
                        <li key={i}>{sense}</li>
                      ))}
                    </ul>
                  )}
                  {derivation && (
                    <p className="entry__note">
                      {isEn ? `From ${derivation}` : `መነሻ፦ ${derivation}`}
                    </p>
                  )}
                </li>
              )
            })}
          </ol>
        </>
      )}
    </>
  )
}

export function ContentsPanel({
  onOpen,
  currentBook,
  language = 'am',
}: {
  onOpen: (book: number, chapter: number) => void
  currentBook: number
  language?: LanguageMode
}) {
  const [index, setIndex] = useState<CommentaryIndex | null>(null)
  const isEn = language === 'en'

  useEffect(() => {
    fetchCommentaryIndex().then(setIndex).catch(() => setIndex(null))
  }, [])

  if (!index) return <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>

  return (
    <>
      <p className="guide__machine">
        {isEn ? (
          <>
            What <strong>{index.title}</strong> covers. Chapters outside this list have no commentary in
            the book.
          </>
        ) : (
          <>
            <strong>{index.title}</strong> የሚያካትተው። በዚህ ዝርዝር ውስጥ የሌሉ ምዕራፎች በመጽሐፉ ውስጥ ማብራሪያ የላቸውም።
          </>
        )}
      </p>

      <nav className="contents">
        {index.books.map((book) => (
          <section key={book.book} className="contents__book">
            <h3 className={`contents__title ${book.book === currentBook ? 'is-current' : ''}`}>
              {book.name}
            </h3>
            <div className="contents__chapters">
              {book.chapters.map((c) => (
                <button
                  key={c}
                  type="button"
                  className="chip chip--sm"
                  onClick={() => onOpen(book.book, c)}
                >
                  {c}
                </button>
              ))}
            </div>
          </section>
        ))}
      </nav>

      <section className="contents__general">
        <h3 className="contents__title">
          {isEn
            ? `Word studies and front sections (${index.generalCount})`
            : `የቃላት ጥናቶችና መነሻ ክፍሎች (${index.generalCount})`}
        </h3>
        <p className="guide__foot">
          {isEn
            ? 'These sit at the front of the book and belong to no chapter. The scanned headings were too unclear to read reliably, so they are listed by their position in the PDF.'
            : 'እነዚህ በመጽሐፉ መጀመሪያ ላይ የሚገኙ ሲሆኑ የማንኛውም ምዕራፍ አካል አይደሉም። በፒዲኤፉ ውስጥ ባላቸው ቅደም ተከተል ተዘርዝረዋል።'}
        </p>
        <ol className="contents__list">
          {index.generalSections.map((section) => (
            <li key={section.label}>
              <span className="contents__label">
                {section.label}
                {section.pages.length > 0 && (
                  <span className="contents__pages"> · PDF p. {section.pages.join(', ')}</span>
                )}
              </span>
              <PagePicker pages={section.pages} frontMatter language={language}>
                <span className="contents__preview">
                  {section.preview.split('—').slice(1).join('').trim()}
                </span>
              </PagePicker>
            </li>
          ))}
        </ol>
      </section>
    </>
  )
}