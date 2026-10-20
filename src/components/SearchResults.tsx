import type { LanguageMode } from '../prefs'
import type { BookInfo, CommentarySearchResponse, SearchResponse } from '../types'

interface Props {
  search: SearchResponse
  commentary?: CommentarySearchResponse | null
  scope: 'text' | 'commentary'
  books: BookInfo[]
  filterTestament?: 'OT' | 'NT'
  filterBook: number | null
  language?: LanguageMode
  onScope: (scope: 'text' | 'commentary') => void
  onFilter: (next: { testament?: 'OT' | 'NT' | 'all'; book: number | null }) => void
  onOpen: (book: number, chapter: number) => void
}

export default function SearchResults({
  search,
  commentary,
  scope,
  books,
  filterTestament,
  filterBook,
  language = 'am',
  onScope,
  onFilter,
  onOpen,
}: Props) {
  const inCommentary = scope === 'commentary'
  const isEn = language === 'en'

  return (
    <section className="results">
      <div className="results__scopes" role="group" aria-label={isEn ? "Search scope" : "የፍለጋ ወሰን"}>
        <button
          type="button"
          className={`chip ${!inCommentary ? 'is-active' : ''}`}
          onClick={() => onScope('text')}
          aria-pressed={!inCommentary}
        >
          {isEn ? 'Bible text' : 'የመጽሐፍ ቅዱስ ጽሑፍ'}
        </button>
        <button
          type="button"
          className={`chip ${inCommentary ? 'is-active' : ''}`}
          onClick={() => onScope('commentary')}
          aria-pressed={inCommentary}
        >
          አማርኛ ማብራሪያ
        </button>
      </div>

      {!inCommentary && (
        <div className="results__filters">
          <div className="results__filterRow" role="group" aria-label={isEn ? "Limit to testament" : "በኪዳን ወስን"}>
            <span className="results__filterLabel">{isEn ? 'Limit' : 'ወሰን'}</span>
            {(
              [
                ['all', isEn ? 'All 66' : 'ሁሉም 66'],
                ['NT', isEn ? 'New Testament' : 'ሐዲስ ኪዳን'],
                ['OT', isEn ? 'Old Testament' : 'ብሉይ ኪዳን'],
              ] as const
            ).map(([id, label]) => (
              <button
                key={id}
                type="button"
                className={`chip chip--sm ${(filterTestament ?? 'all') === id ? 'is-active' : ''}`}
                aria-pressed={(filterTestament ?? 'all') === id}
                onClick={() =>
                  onFilter({
                    testament: id,
                    // A book from the other testament must not stay selected.
                    book: filterBook && id !== 'all' ? null : filterBook,
                  })
                }
              >
                {label}
              </button>
            ))}
          </div>

          <div className="results__filterRow">
            <span className="results__filterLabel">{isEn ? 'Book' : 'መጽሐፍ'}</span>
            <select
              className="field__select"
              value={filterBook ?? ''}
              onChange={(e) =>
                onFilter({ testament: filterTestament, book: Number(e.target.value) || null })
              }
              aria-label={isEn ? "Limit to one book" : "በአንድ መጽሐፍ ወስን"}
            >
              <option value="">{isEn ? 'Every book' : 'ሁሉም መጻሕፍት'}</option>
              {books
                .filter((b) => !filterTestament || b.testament === filterTestament)
                .map((b) => (
                  <option key={b.nr} value={b.nr}>
                    {b.name}
                  </option>
                ))}
            </select>
            {filterBook && (
              <button
                type="button"
                className="linkbutton"
                onClick={() => onFilter({ testament: filterTestament, book: null })}
              >
                {isEn ? 'clear' : 'አጽዳ'}
              </button>
            )}
          </div>
        </div>
      )}

      {inCommentary ? (
        <CommentaryResults commentary={commentary} onOpen={onOpen} language={language} />
      ) : (
        <TextResults search={search} onOpen={onOpen} language={language} />
      )}
    </section>
  )
}

function CommentaryResults({
  commentary,
  onOpen,
  language = 'am',
}: {
  commentary: CommentarySearchResponse | null | undefined
  onOpen: (book: number, chapter: number) => void
  language?: LanguageMode
}) {
  const isEn = language === 'en'
  if (!commentary || !commentary.query) {
    return null
  }

  if (commentary.total === 0) {
    return (
      <>
        <h2 className="results__title">
          {isEn
            ? `No commentary match for “${commentary.query}”`
            : `ለ“${commentary.query}” ምንም የማብራሪያ ውጤት አልተገኘም`}
        </h2>
        <p className="results__hint">
          {isEn
            ? 'This searches the Amharic commentary only. English commentary is not searched here.'
            : 'ይህ የሚፈልገው በአማርኛ ማብራሪያ ውስጥ ብቻ ነው።'}
        </p>
      </>
    )
  }

  return (
    <>
      <h2 className="results__title">
        {isEn
          ? `${commentary.total.toLocaleString()} ${commentary.total === 1 ? 'place' : 'places'} in the commentary for “${commentary.query}”`
          : `${commentary.total.toLocaleString()} የማብራሪያ ቦታዎች ለ“${commentary.query}”`}
      </h2>
      {commentary.total > commentary.results.length && (
        <p className="results__hint">
          {isEn
            ? `Showing the first ${commentary.results.length}.`
            : `የመጀመሪያዎቹ ${commentary.results.length} እየታዩ ነው።`}
        </p>
      )}

      <ol className="hits">
        {commentary.results.map((hit, i) => (
          <li key={`${hit.book}-${hit.chapter}-${i}`}>
            {hit.general ? (
              <div className="hit hit--static">
                <span className="hit__ref">
                  <span className="hit__testament">{isEn ? 'Front' : 'መነሻ'}</span>
                  {hit.reference}
                  {hit.pages.length > 0 && (
                    <span className="hit__pages"> · {isEn ? 'PDF p.' : 'የፒዲኤፍ ገጽ'} {hit.pages.join(', ')}</span>
                  )}
                </span>
                <span className="hit__text">{hit.snippet}</span>
              </div>
            ) : (
              <button
                type="button"
                className="hit"
                onClick={() => onOpen(hit.book, hit.chapter)}
              >
                <span className="hit__ref">
                  <span className="hit__testament">{isEn ? 'Ch.' : 'ምዕ.'}</span>
                  {hit.reference}
                  {hit.pages.length > 0 && (
                    <span className="hit__pages"> · {isEn ? 'PDF p.' : 'የፒዲኤፍ ገጽ'} {hit.pages.join(', ')}</span>
                  )}
                </span>
                <span className="hit__text">{hit.snippet}</span>
              </button>
            )}
          </li>
        ))}
      </ol>
    </>
  )
}

function TextResults({
  search,
  onOpen,
  language = 'am',
}: {
  search: SearchResponse
  onOpen: (book: number, chapter: number) => void
  language?: LanguageMode
}) {
  const isEn = language === 'en'
  if (!search.query || search.query.trim().length < 2) {
    return null
  }

  if (search.total === 0) {
    return (
      <>
        <h2 className="results__title">
          {isEn ? `No matches for “${search.query}”` : `ለ“${search.query}” ምንም አልተገኘም`}
        </h2>
        <p className="results__hint">
          {isEn
            ? 'Check the spelling, or try a shorter word.'
            : 'ፊደላቱን ይፈትሹ ወይም አጭር ቃል ይሞክሩ።'}
        </p>
      </>
    )
  }

  return (
    <>
      <h2 className="results__title">
        {isEn
          ? `${search.total.toLocaleString()} ${search.total === 1 ? 'verse' : 'verses'} for “${search.query}”`
          : `${search.total.toLocaleString()} ጥቅሶች ለ“${search.query}”`}
      </h2>
      {search.total > search.results.length && (
        <p className="results__hint">
          {isEn
            ? `Showing the first ${search.results.length}.`
            : `የመጀመሪያዎቹ ${search.results.length} እየታዩ ነው።`}
        </p>
      )}

      <ol className="hits">
        {search.results.map((hit) => (
          <li key={`${hit.book}-${hit.chapter}-${hit.verse}`}>
            <button
              type="button"
              className="hit"
              onClick={() => onOpen(hit.book, hit.chapter)}
            >
              <span className="hit__ref">
                <span className="hit__testament">
                  {hit.testament === 'OT' ? (isEn ? 'OT' : 'ብሉይ') : (isEn ? 'NT' : 'ሐዲስ')}
                </span>
                {hit.reference}
              </span>
              <span className="hit__text">{hit.snippet}</span>
            </button>
          </li>
        ))}
      </ol>
    </>
  )
}