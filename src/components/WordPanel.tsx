import { useEffect, useState } from 'react'
import { fetchWordDefinition } from '../api'
import type { StrongsEntry } from '../types'
import type { LanguageMode } from '../prefs'

interface Props {
  word: string
  reference: string
  language?: LanguageMode
  onClose: () => void
}

/**
 * Tapping a word in the English text offers the Strong's entries that gloss it.
 * The match is approximate: the source data does not map every English word back
 * to a single original-language term, so several candidates are shown.
 */
export default function WordPanel({ word, reference, language = 'am', onClose }: Props) {
  const isEn = language === 'en'
  const [entries, setEntries] = useState<StrongsEntry[] | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const controller = new AbortController()
    setLoading(true)
    fetchWordDefinition(word, controller.signal)
      .then((res) => setEntries(res.results))
      .catch(() => setEntries([]))
      .finally(() => setLoading(false))
    return () => controller.abort()
  }, [word])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  return (
    <>
      <div className="peek__scrim" onClick={onClose} />
      <aside className="wordpanel" role="dialog" aria-label={isEn ? `Meaning of ${word}` : `የ${word} ፍቺ`}>
        <header className="peek__head">
          <div>
            <p className="peek__ref">{reference}</p>
            <p className="wordpanel__word">{word}</p>
          </div>
          <button type="button" className="peek__close" onClick={onClose} aria-label={isEn ? "Close" : "ዝጋ"}>
            ✕
          </button>
        </header>

        <div className="wordpanel__body">
          {loading && <p className="notice">{isEn ? 'Loading…' : 'በመጫን ላይ…'}</p>}

          {!loading && entries?.length === 0 && (
            <p className="notice">
              {isEn
                ? `No original-language entry matches “${word}”. This lookup only works on English text.`
                : `ለ “${word}” ምንም የመጀመሪያ ቋንቋ ፍቺ አልተገኘም።`}
            </p>
          )}

          {!loading && entries && entries.length > 0 && (
            <>
              <p className="wordpanel__caveat">
                {isEn
                  ? 'Possible matches. The English word does not map to one original term, so check the verse context before trusting a definition.'
                  : 'ተቀራራቢ ፍቺዎች። የአውዱን ጥቅስ አብረው ይመልከቱ።'}
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
        </div>
      </aside>
    </>
  )
}