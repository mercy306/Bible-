import PagePicker from './PagePicker'
import type { LanguageMode } from '../prefs'
import type { AmharicCommentary, GuideVerse } from '../types'

/** Matthew Henry's note for a verse, with the cross-references underneath. */
export function CommentaryBody({
  guide,
  verse,
  onOpenChapter,
  language = 'am',
}: {
  guide: GuideVerse | null
  verse: number
  onOpenChapter: (book: number, chapter: number) => void
  language?: LanguageMode
}) {
  const isEn = language === 'en'
  if (!guide) return <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>

  return (
    <>
      {guide.commentary ? (
        <>
          <p className="guide__source">
            {guide.commentary.heading}
            {guide.commentary.covers.length > 1 && (
              <span className="guide__covers">
                {' '}· {isEn ? `covers v${guide.commentary.covers.join(', v')}` : `ጥቅስ ${guide.commentary.covers.join('፣ ')} ያካትታል`}
              </span>
            )}
            {!guide.commentary.exact && guide.commentary.nearestVerse !== null && (
              <span className="guide__covers">
                {' '}· {isEn ? `nearest note Henry wrote was for v${guide.commentary.nearestVerse}` : `የቀረበው ማብራሪያ ለጥቅስ ${guide.commentary.nearestVerse} የተጻፈው ነው`}
              </span>
            )}
          </p>
          {guide.commentary.text.split('\n').map((para, i) => (
            <p key={i} className="guide__text">
              {para}
            </p>
          ))}
        </>
      ) : (
        <p className="notice">
          {isEn ? `No commentary on verse ${verse} in this chapter.` : `በዚህ ምዕራፍ ውስጥ ለጥቅስ ${verse} ማብራሪያ አልተገኘም።`}
        </p>
      )}

      {guide.crossrefs.length > 0 && (
        <div className="xrefs">
          <h4 className="xrefs__title">{isEn ? 'Cross-references' : 'ተዛማጅ ጥቅሶች'}</h4>
          <ul className="xrefs__list">
            {guide.crossrefs.map((link) => (
              <li key={`${link.book}-${link.chapter}-${link.from}`}>
                <button type="button" onClick={() => onOpenChapter(link.book, link.chapter)}>
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </>
  )
}

/** The Amharic commentary, which is written for the whole chapter. */
export function AmharicBody({
  data,
  reference,
  onOpenGeneral,
  language = 'am',
}: {
  data: AmharicCommentary | null
  reference: string
  onOpenGeneral: () => Promise<void>
  language?: LanguageMode
}) {
  const isEn = language === 'en'
  if (!data) return <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>

  if (!data.available || (!data.general && data.blocks.length === 0)) {
    return (
      <>
        <p className="notice">
          {isEn
            ? `No commentary for ${reference}. In this book, commentary is only available in chapter ${data.covered}.`
            : `ለ${reference} ማብራሪያ የለም። በዚህ መጽሐፍ ውስጥ ማብራሪያ በ${data.covered} ምዕራፍ ውስጥ ብቻ ነው።`}
        </p>
        <button type="button" className="btn btn--quiet" onClick={onOpenGeneral}>
          {isEn ? 'Browse book front sections' : 'የመጽሐፍ ቅዱስ መነሻ ክፍሎችን ክትት'}
        </button>
      </>
    )
  }

  return (
    <>
      <p className="guide__machine">
        {data.general
          ? isEn
            ? 'Word studies from the front of the book (not tied to this chapter).'
            : 'ከመጽሐፉ መነሻ የተወሰዱ የቃላት ጥናቶች (ከዚህ ምዕራፍ ጋር ያልተያያዙ)።'
          : isEn
            ? `Your commentary is written for the whole chapter, not verse by verse. This covers all of ${reference}. Machine transcription.`
            : `የአማርኛ ማብራሪያው የተዘጋጀው ለሙሉ ምዕራፉ እንጂ ለየጥቅሱ አይደለም። ይህም ሙሉውን ${reference} ያካትታል። በኮምፒውተር የተቀዳ።`}
      </p>
      {data.blocks.map((block, i) => (
        <article key={i} className="amharic__block">
          <PagePicker pages={block.pages} frontMatter={Boolean(data.general)} language={language}>
            {!data.general && block.first !== block.last && (
              <p className="amharic__range">
                {isEn ? `v${block.first}–${block.last}` : `ጥቅስ ${block.first}–${block.last}`}
              </p>
            )}
            {block.text.split('\n').map((para, j) => (
              <p key={j} className="guide__text">
                {para}
              </p>
            ))}
          </PagePicker>
        </article>
      ))}
    </>
  )
}
