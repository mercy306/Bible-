import { useEffect, useState, useMemo } from 'react'
import { fetchWordDefinition, fetchStrongs } from '../api'
import type { StrongsEntry } from '../types'
import type { LanguageMode } from '../prefs'
import { lookupAmharicWord, type AmharicLookupResult } from '../amharicLexicon'
import { parseReference } from '../route'

interface Props {
  word: string
  reference: string
  language?: LanguageMode
  verse?: number
  lang?: 'am' | 'en'
  books?: { nr: number; name: string }[]
  onClose: () => void
  onSearch?: (q: string) => void
  onNavigate?: (bookNr: number, chapter: number, verse?: number) => void
}

/**
 * WordPanel: Displays biblical concordance & definitions.
 * Full offline support for both Amharic (Ethiopic) and English words:
 * - Amharic: Ge'ez etymology, Hebrew/Greek equivalents, theological sense, morphology & cross-references.
 * - English: Strong's Concordance candidates with Greek/Hebrew originals and senses.
 */
export default function WordPanel({
  word,
  reference,
  language = 'am',
  lang,
  books,
  onClose,
  onSearch,
  onNavigate,
}: Props) {
  const isEn = language === 'en'
  const isEthiopic = /[\u1200-\u137F]/.test(word) || lang === 'am'

  // English Strong's state
  const [entries, setEntries] = useState<StrongsEntry[] | null>(null)
  const [loading, setLoading] = useState(false)

  // Amharic Strong's details state (when user expands original language for an Amharic entry)
  const [strongsDetail, setStrongsDetail] = useState<StrongsEntry[] | null>(null)
  const [loadingStrongs, setLoadingStrongs] = useState(false)
  const [showStrongs, setShowStrongs] = useState(false)

  // Copy feedback state
  const [copied, setCopied] = useState(false)

  // Amharic Lexicon result
  const amResult: AmharicLookupResult = useMemo(() => {
    if (!isEthiopic) {
      return { query: word, cleanWord: word.trim() }
    }
    return lookupAmharicWord(word)
  }, [word, isEthiopic])

  // Clean word for search
  const cleanTerm = isEthiopic ? (amResult.entry?.word || amResult.cleanWord || word) : word.replace(/[^a-zA-Z'-]/g, '')

  // Load English Strong's definition if this is an English word
  useEffect(() => {
    if (isEthiopic) return

    const controller = new AbortController()
    setLoading(true)
    fetchWordDefinition(word, controller.signal)
      .then((res) => setEntries(res.results))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [word, isEthiopic])

  // ESC key or Android app:back to close
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    const onAppBack = (e: Event) => {
      e.preventDefault()
      onClose()
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('app:back', onAppBack)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('app:back', onAppBack)
    }
  }, [onClose])

  // Fetch Strong's detail for Amharic entry when user clicks to inspect original Hebrew/Greek
  const handleLoadStrongs = (strongsStr: string) => {
    const codes = strongsStr.match(/[GH]\d+/gi) || []
    if (codes.length === 0) return

    setShowStrongs(true)
    setLoadingStrongs(true)
    Promise.all(codes.map((code) => fetchStrongs(code).catch(() => null)))
      .then((results) => {
        const collected: StrongsEntry[] = []
        for (const res of results) {
          if (res?.results) {
            collected.push(...res.results)
          }
        }
        setStrongsDetail(collected)
      })
      .finally(() => setLoadingStrongs(false))
  }

  const handleCopy = () => {
    const textToCopy = isEthiopic && amResult.entry
      ? `${amResult.entry.word} (${amResult.entry.category}): ${amResult.entry.meaning}`
      : word
    navigator.clipboard.writeText(textToCopy).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    })
  }

  const handleRefClick = (refStr: string) => {
    if (!onNavigate || !books) return
    const parsed = parseReference(refStr, books)
    if (parsed) {
      onNavigate(parsed.book, parsed.chapter, parsed.verse)
      onClose()
    }
  }

  const handleBibleSearch = () => {
    if (onSearch) {
      onSearch(cleanTerm)
      onClose()
    }
  }

  return (
    <>
      <div className="peek__scrim" onClick={onClose} />
      <aside className="wordpanel" role="dialog" aria-label={isEn ? `Meaning of ${word}` : `የ${word} ፍቺ`}>
        <header className="peek__head">
          <div>
            <p className="peek__ref">{reference}</p>
            <p className="wordpanel__word">{isEthiopic ? amResult.cleanWord || word : word}</p>
          </div>
          <button type="button" className="peek__close" onClick={onClose} aria-label={isEn ? 'Close' : 'ዝጋ'}>
            ✕
          </button>
        </header>

        <div className="wordpanel__body">
          {isEthiopic ? (
            /* --- AMHARIC LEXICON VIEW --- */
            <div>
              {amResult.entry ? (
                <article className="wordpanel__entry" style={{ borderTop: 'none', paddingTop: 0 }}>
                  {/* Category Pill */}
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 8 }}>
                    <span className="wordpanel__badge">{amResult.entry.category}</span>
                    {amResult.entry.phonetic && (
                      <span className="wordpanel__translit" style={{ fontSize: 13 }}>
                        /{amResult.entry.phonetic}/
                      </span>
                    )}
                  </div>

                  {/* Ge'ez Etymology */}
                  {amResult.entry.geezRoot && (
                    <div className="wordpanel__geez">
                      <div className="wordpanel__geez-label">የግዕዝ ሥርወ-ቃል (Ge'ez Etymology)</div>
                      <div>{amResult.entry.geezRoot}</div>
                    </div>
                  )}

                  {/* Original Biblical Term & Strong's Number */}
                  {amResult.entry.originalTerm && (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'baseline',
                        gap: 8,
                        margin: '8px 0',
                        fontSize: 14,
                        color: 'var(--ink-soft)',
                      }}
                    >
                      <span style={{ fontWeight: 600 }}>መጀመሪያ ቋንቋ:</span>
                      <span style={{ color: 'var(--ink)', fontSize: 16 }}>{amResult.entry.originalTerm}</span>
                      {amResult.entry.strongs && (
                        <span
                          style={{
                            fontSize: 12,
                            background: 'var(--panel)',
                            padding: '2px 6px',
                            borderRadius: 4,
                            border: '1px solid var(--line)',
                          }}
                        >
                          {amResult.entry.strongs}
                        </span>
                      )}
                    </div>
                  )}

                  {/* Core Biblical Meaning */}
                  <div className="wordpanel__meaning">
                    <strong>ትርጓሜ:</strong> {amResult.entry.meaning}
                    {amResult.entry.meaningEn && (
                      <div className="wordpanel__meaning-en">{amResult.entry.meaningEn}</div>
                    )}
                  </div>

                  {/* Biblical Context */}
                  {amResult.entry.biblicalContext && (
                    <div className="wordpanel__context">
                      <strong>የመጽሐፍ ቅዱስ አውድ:</strong> {amResult.entry.biblicalContext}
                    </div>
                  )}

                  {/* Scripture Cross References */}
                  {amResult.entry.references.length > 0 && (
                    <div style={{ marginTop: 14 }}>
                      <p style={{ margin: '0 0 6px', fontSize: 12.5, fontWeight: 700, color: 'var(--ink-soft)' }}>
                        ዋቢ ጥቅሶች (Scripture References):
                      </p>
                      <div className="wordpanel__refs">
                        {amResult.entry.references.map((ref) => (
                          <button
                            key={ref}
                            type="button"
                            className="wordpanel__ref-btn"
                            onClick={() => handleRefClick(ref)}
                            title={`ወደ ${ref} ሂድ`}
                          >
                            📖 {ref}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Strong's Detail Toggle if code exists */}
                  {amResult.entry.strongs && (
                    <div style={{ marginTop: 16 }}>
                      {!showStrongs ? (
                        <button
                          type="button"
                          className="wordpanel__act-btn"
                          style={{ fontSize: 12.5, padding: '6px 12px' }}
                          onClick={() => handleLoadStrongs(amResult.entry!.strongs!)}
                        >
                          📜 የዕብራይስጥ / የግሪክ Strong's ፍቺ አሳይ ({amResult.entry.strongs})
                        </button>
                      ) : (
                        <div style={{ marginTop: 8 }}>
                          <p style={{ margin: '0 0 6px', fontSize: 12, fontWeight: 700, color: 'var(--ink-soft)' }}>
                            የመጀመሪያ ቋንቋ ዝርዝር ፍቺ (Strong's Concordance):
                          </p>
                          {loadingStrongs && <p className="notice">በመጫን ላይ…</p>}
                          {!loadingStrongs && strongsDetail && strongsDetail.length > 0 && (
                            <div>
                              {strongsDetail.map((s) => (
                                <article key={s.number} className="wordpanel__entry" style={{ padding: '8px 0' }}>
                                  <p className="wordpanel__head">
                                    <span className="wordpanel__num">{s.number}</span>{' '}
                                    <span className="wordpanel__orig">{s.word}</span>{' '}
                                    <span className="wordpanel__translit">{s.translit}</span>
                                  </p>
                                  <ul className="wordpanel__senses">
                                    {s.senses.map((sense, i) => (
                                      <li key={i}>{sense}</li>
                                    ))}
                                  </ul>
                                  {s.kjv && <p className="wordpanel__kjv">KJV: {s.kjv}</p>}
                                </article>
                              ))}
                            </div>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </article>
              ) : (
                /* Morphology view for words not in the curated lexicon */
                <div style={{ padding: '8px 0' }}>
                  <p style={{ fontSize: 14, color: 'var(--ink)', lineHeight: 1.6 }}>
                    ለ <strong>«{amResult.cleanWord || word}»</strong> ቃል የስነ-መለኮት ፍቺ ለማየት ከታች ያሉትን አማራጮች ይጠቀሙ።
                  </p>

                  {/* Morphological Analysis */}
                  {amResult.morphology && (
                    <div className="wordpanel__morphology">
                      <p style={{ margin: '0 0 6px', fontWeight: 700, fontSize: 12, color: 'var(--ink-soft)' }}>
                        የቃሉ ቅርጽና ቅጥያዎች (Morphology):
                      </p>
                      {amResult.morphology.prefixes.map((p, i) => (
                        <div key={i} className="wordpanel__morphology-item">
                          <span style={{ color: 'var(--ink-soft)' }}>ቅድመ-ቅጥያ:</span>
                          <strong>{p.meaning}</strong>
                        </div>
                      ))}
                      <div className="wordpanel__morphology-item">
                        <span style={{ color: 'var(--ink-soft)' }}>የቃሉ መሠረት (Root):</span>
                        <strong>{amResult.morphology.stem}</strong>
                      </div>
                      {amResult.morphology.suffixes.map((s, i) => (
                        <div key={i} className="wordpanel__morphology-item">
                          <span style={{ color: 'var(--ink-soft)' }}>ድኅረ-ቅጥያ:</span>
                          <strong>{s.meaning}</strong>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="wordpanel__actions">
                <button
                  type="button"
                  className="wordpanel__act-btn"
                  onClick={handleBibleSearch}
                  title="በመላው መጽሐፍ ቅዱስ ውስጥ ፈልግ"
                >
                  🔎 «{cleanTerm}» በመላው መጽሐፍ ቅዱስ ፈልግ
                </button>

                <button
                  type="button"
                  className="wordpanel__act-btn"
                  onClick={handleCopy}
                  title="ፍቺውን ቅዳ"
                >
                  {copied ? '✓ ተቀድቷል!' : '📋 ቃሉንና ፍቺውን ቅዳ'}
                </button>
              </div>
            </div>
          ) : (
            /* --- ENGLISH STRONGS CONCORDANCE VIEW --- */
            <div>
              {loading && <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>}

              {!loading && entries?.length === 0 && (
                <p className="notice">
                  {isEn
                    ? `No original-language entry matches “${word}”.`
                    : `ለ “${word}” ምንም የመጀመሪያ ቋንቋ ፍቺ አልተገኘም።`}
                </p>
              )}

              {!loading && entries && entries.length > 0 && (
                <>
                  <p className="wordpanel__caveat">
                    {isEn
                      ? 'Possible matches from Hebrew/Greek Strong’s Concordance.'
                      : 'ተቀራራቢ የመጀመሪያ ቋንቋ ፍቺዎች። የአውዱን ጥቅስ አብረው ይመልከቱ።'}
                  </p>
                  {entries.map((entry) => (
                    <article key={entry.number} className="wordpanel__entry">
                      <p className="wordpanel__head">
                        <span className="wordpanel__num">{entry.number}</span>{' '}
                        <span className="wordpanel__orig">{entry.word}</span>{' '}
                        <span className="wordpanel__translit">{entry.translit}</span>
                      </p>
                      {entry.sensesAmharic ? (
                        <p className="guide__text">{entry.sensesAmharic}</p>
                      ) : (
                        <ul className="wordpanel__senses">
                          {entry.senses.map((sense, i) => (
                            <li key={i}>{sense}</li>
                          ))}
                        </ul>
                      )}
                      {entry.kjv && <p className="wordpanel__kjv">KJV: {entry.kjv}</p>}
                    </article>
                  ))}
                </>
              )}

              <div className="wordpanel__actions">
                <button
                  type="button"
                  className="wordpanel__act-btn"
                  onClick={handleBibleSearch}
                  title="Search word in Bible"
                >
                  🔎 Search “{cleanTerm}” in Bible
                </button>
                <button
                  type="button"
                  className="wordpanel__act-btn"
                  onClick={handleCopy}
                  title="Copy word"
                >
                  {copied ? '✓ Copied!' : '📋 Copy Word'}
                </button>
              </div>
            </div>
          )}
        </div>
      </aside>
    </>
  )
}
