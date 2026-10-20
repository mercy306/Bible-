import { useMemo, useState } from 'react'
import type { BooksResponse, Testament } from '../types'
import { useRecent, type RecentPlace } from '../userdata'
import { useAllBookNames } from './useBookNames'
import type { LanguageMode } from '../prefs'

interface Props {
  books: BooksResponse | null
  book: number
  onPick: (book: number) => void
  /** Jumps straight to a remembered verse rather than to chapter one. */
  onOpenRecent?: (place: RecentPlace) => void
  language?: LanguageMode
}

const GROUP_NAMES_EN: Record<string, string> = {
  pentateuch: 'The Pentateuch',
  historical: 'Historical Books',
  wisdom: 'Wisdom & Poetry',
  poetry: 'Wisdom & Poetry',
  'major-prophets': 'Major Prophets',
  prophets_major: 'Major Prophets',
  'prophets-major': 'Major Prophets',
  'minor-prophets': 'Minor Prophets',
  prophets_minor: 'Minor Prophets',
  'prophets-minor': 'Minor Prophets',
  gospels: 'The Gospels & Acts',
  acts: 'Acts of the Apostles',
  paul: 'Pauline Epistles',
  epistles: 'Epistles',
  apocalypse: 'Prophecy',
  revelation: 'Prophecy',
  prophecy: 'Prophecy',
}

const GROUP_NAMES_AM: Record<string, string> = {
  pentateuch: 'ኦሪት',
  historical: 'የታሪክ መጻሕፍት',
  wisdom: 'ቅኔና ጥበብ',
  poetry: 'ቅኔና ጥበብ',
  'major-prophets': 'ዓበይት ነቢያት',
  prophets_major: 'ዓበይት ነቢያት',
  'prophets-major': 'ዓበይት ነቢያት',
  'minor-prophets': 'ደቂቀ ነቢያት',
  prophets_minor: 'ደቂቀ ነቢያት',
  'prophets-minor': 'ደቂቀ ነቢያት',
  gospels: 'ወንጌላትና የሐዋርያት ሥራ',
  acts: 'የሐዋርያት ሥራ',
  paul: 'የጳውሎስ መልእክቶች',
  epistles: 'መልእክታት',
  apocalypse: 'ትንቢት (ራእይ)',
  revelation: 'ትንቢት (ራእይ)',
  prophecy: 'ትንቢት (ራእይ)',
}

const GROUP_BY_NAME_AM: Record<string, string> = {
  'the pentateuch': 'ኦሪት',
  'pentateuch': 'ኦሪት',
  'historical books': 'የታሪክ መጻሕፍት',
  'historical': 'የታሪክ መጻሕፍት',
  'wisdom & poetry': 'ቅኔና ጥበብ',
  'poetry & wisdom': 'ቅኔና ጥበብ',
  'wisdom': 'ቅኔና ጥበብ',
  'poetry': 'ቅኔና ጥበብ',
  'major prophets': 'ዓበይት ነቢያት',
  'minor prophets': 'ደቂቀ ነቢያት',
  'the gospels & acts': 'ወንጌላትና የሐዋርያት ሥራ',
  'the gospels': 'ወንጌላት',
  'gospels': 'ወንጌላት',
  'acts of the apostles': 'የሐዋርያት ሥራ',
  'acts': 'የሐዋርያት ሥራ',
  'pauline epistles': 'የጳውሎስ መልእክቶች',
  'general epistles': 'አጠቃላይ መልእክቶች',
  'epistles': 'መልእክታት',
  'prophecy': 'ትንቢት (ራእይ)',
  'revelation': 'ትንቢት (ራእይ)',
  'apocalypse': 'ትንቢት (ራእይ)',
}

/** The 66 books, grouped and searchable, opened from the icon in the top bar. */
export default function BooksSheetBody({
  books,
  book,
  onPick,
  onOpenRecent,
  language = 'am',
}: Props) {
  const [filter, setFilter] = useState<'all' | Testament>('all')
  const allNames = useAllBookNames()

  const isEn = language === 'en'

  const sections = useMemo(() => {
    if (!books) return []
    return books.groups
      .map((group) => {
        const cleanName = (group.name ?? '').toLowerCase().trim()
        const groupTitle = isEn
          ? (GROUP_NAMES_EN[group.id] ?? group.name)
          : (GROUP_NAMES_AM[group.id] ?? GROUP_BY_NAME_AM[cleanName] ?? group.name)

        const items = books.books.filter((b) => {
          if (filter !== 'all' && b.testament !== filter) return false
          return true
        })

        return {
          ...group,
          name: groupTitle,
          items: items.filter((b) => b.group === group.id),
        }
      })
      .filter((section) => section.items.length > 0)
  }, [books, filter, isEn])

  const recent = useRecent()
  const recentList = useMemo(() => {
    return recent
      .slice(0, 8)
      .map((p) => {
        const bNames = allNames.get(p.book)
        const fallback = books?.books.find((b) => b.nr === p.book)?.name ?? `Book ${p.book}`
        const name = isEn ? (bNames?.en ?? fallback) : (bNames?.am ?? fallback)
        return { ...p, bookName: name }
      })
  }, [recent, isEn, allNames, books])

  return (
    <>
      {recentList.length > 0 && onOpenRecent && (
        <section className="recent">
          <h3 className="recent__title">{isEn ? 'Recently read' : 'በቅርብ የተነበቡ'}</h3>
          <ol className="recent__list">
            {recentList.map((p) => (
              <li key={`${p.translation}/${p.book}/${p.chapter}/${p.verse}`}>
                <button
                  type="button"
                  className="recent__row"
                  onClick={() => onOpenRecent(p)}
                >
                  <span className="recent__name">{p.bookName}</span>
                  <span className="recent__ref">
                    {p.chapter}:{p.verse}
                  </span>
                </button>
              </li>
            ))}
          </ol>
        </section>
      )}

      <div className="segbar" role="group" aria-label="Choose a testament">
        {(
          isEn
            ? [
                ['all', 'All'],
                ['OT', 'Old'],
                ['NT', 'New'],
              ]
            : [
                ['all', 'ሁሉም'],
                ['OT', 'ብሉይ'],
                ['NT', 'ሐዲስ'],
              ]
        ).map(([id, label]) => (
          <button
            key={id}
            type="button"
            className={`segbar__btn ${filter === id ? 'is-active' : ''}`}
            onClick={() => setFilter(id as 'all' | Testament)}
            aria-pressed={filter === id}
          >
            {label}
          </button>
        ))}
      </div>

      {sections.map((section) => (
        <section key={section.id} className="bookgroup">
          <h3 className="bookgroup__title">
            {section.name}
            <span>{section.items.length}</span>
          </h3>
          <ol className="bookgroup__list">
            {section.items.map((item) => {
              const bNames = allNames.get(item.nr)
              const displayName =
                language === 'en'
                  ? (bNames?.en ?? item.name)
                  : language === 'am'
                  ? (bNames?.am ?? item.name)
                  : (bNames?.am && bNames?.en ? `${bNames.am} (${bNames.en})` : item.name)

              return (
                <li key={item.nr}>
                  <button
                    type="button"
                    className={`bookrow ${item.nr === book ? 'is-active' : ''}`}
                    onClick={() => onPick(item.nr)}
                    title={`${item.chapters} chapters · ${item.verses} verses`}
                  >
                    <span className="bookrow__nr">{item.nr}</span>
                    <span className="bookrow__name">{displayName}</span>
                    <span className="bookrow__ch">{item.chapters}</span>
                  </button>
                </li>
              )
            })}
          </ol>
        </section>
      ))}
    </>
  )
}
