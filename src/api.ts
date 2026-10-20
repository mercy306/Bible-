import type {
  AmharicCommentary,
  BooksResponse,
  ChapterResponse,
  CommentaryIndex,
  CommentarySearchResponse,
  EnglishChapter,
  GuideList,
  GuideVerse,
  SearchResponse,
  StrongsResponse,
  Translation,
} from './types'

async function getJSON<T>(url: string, signal?: AbortSignal): Promise<T> {
  const res = await fetch(url, { signal })
  if (!res.ok) {
    const body = await res.json().catch(() => ({}))
    throw new Error((body as { error?: string }).error ?? `Request failed (${res.status})`)
  }
  return res.json() as Promise<T>
}

export function fetchTranslations() {
  return getJSON<Translation[]>('/api/translations')
}

export function fetchBooks(translation: string) {
  return getJSON<BooksResponse>(`/api/books?translation=${encodeURIComponent(translation)}`)
}

export function fetchChapter(translation: string, book: number, chapter: number) {
  const params = new URLSearchParams({ translation, book: String(book), chapter: String(chapter) })
  return getJSON<ChapterResponse>(`/api/chapter?${params}`)
}

export function fetchSearch(
  translation: string,
  q: string,
  signal?: AbortSignal,
  filter?: { testament?: 'OT' | 'NT'; book?: number | null },
) {
  const params = new URLSearchParams({ translation, q, limit: '200' })
  if (filter?.testament) params.set('testament', filter.testament)
  if (filter?.book) params.set('book', String(filter.book))
  return getJSON<SearchResponse>(`/api/search?${params}`, signal)
}

export function fetchEnglishChapter(book: number, chapter: number) {
  const params = new URLSearchParams({ book: String(book), chapter: String(chapter) })
  return getJSON<EnglishChapter>(`/api/english?${params}`)
}

export function fetchGuide() {
  return getJSON<GuideList>('/api/guide')
}

export function fetchAmharicCommentary(book: number, chapter: number, general = false) {
  const params = new URLSearchParams({ book: String(book), chapter: String(chapter) })
  if (general) params.set('general', '1')
  return getJSON<AmharicCommentary>(`/api/guide/amharic?${params}`)
}

export function fetchGuideVerse(
  translation: string,
  book: number,
  chapter: number,
  verse: number,
) {
  const params = new URLSearchParams({ translation, book: String(book), chapter: String(chapter), verse: String(verse) })
  return getJSON<GuideVerse>(`/api/guide/verse?${params}`)
}

export function fetchStrongs(q: string, signal?: AbortSignal) {
  const params = new URLSearchParams({ q })
  return getJSON<StrongsResponse>(`/api/guide/strongs?${params}`, signal)
}

/** Looks up the Strong's entries behind an English word tapped in the text. */
export function fetchWordDefinition(word: string, signal?: AbortSignal) {
  const params = new URLSearchParams({ q: word, word: '1' })
  return getJSON<StrongsResponse>(`/api/guide/strongs?${params}`, signal)
}

export function fetchCommentarySearch(q: string, signal?: AbortSignal) {
  const params = new URLSearchParams({ q, limit: '80' })
  return getJSON<CommentarySearchResponse>(`/api/guide/amharic/search?${params}`, signal)
}

export function fetchCommentaryIndex(signal?: AbortSignal) {
  return getJSON<CommentaryIndex>('/api/guide/amharic/index', signal)
}

/** Which chapters of a book the imported commentary covers. */
export function fetchCoverage(signal?: AbortSignal) {
  return getJSON<{ chapters: Record<string, number[]> }>('/api/guide/amharic/coverage', signal)
}