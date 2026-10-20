import { useEffect, useState } from 'react'
import type { LanguageMode } from '../prefs'

interface Props {
  query: string
  onSearch: (query: string) => void
  language?: LanguageMode
}

/** The one field on the search screen: a word or a reference. */
export default function SearchBox({ query, onSearch, language = 'am' }: Props) {
  const [term, setTerm] = useState(query)
  const isEn = language === 'en'

  // Keep the box in step when the query changes from elsewhere, such as a
  // reference that could not be read.
  useEffect(() => {
    setTerm(query)
  }, [query])

  return (
    <form
      className="searchbox"
      role="search"
      onSubmit={(e) => {
        e.preventDefault()
        onSearch(term.trim())
      }}
    >
      <input
        className="textfield"
        type="search"
        value={term}
        onChange={(e) => setTerm(e.target.value)}
        placeholder={isEn ? "Search a word, or type John 3:16" : "ቃል ይፈልጉ፣ ወይም ዮሐንስ 3:16"}
        aria-label={isEn ? "Search the Bible" : "መጽሐፍ ቅዱስን ፈልግ"}
      />
      <button className="btn btn--accent" type="submit">
        {isEn ? 'Search' : 'ፈልግ'}
      </button>
    </form>
  )
}
