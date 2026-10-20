import { useState } from 'react'
import type { LanguageMode } from '../prefs'

interface Props {
  reference: string
  text: string
  language?: LanguageMode
  onDone: () => void
}

const WIDTH = 1080

/**
 * Copying the verse, or drawing it to a PNG so it can be sent to someone. The
 * canvas uses whatever font the browser has for Ethiopic script.
 */
export default function SharePanel({ reference, text, language = 'am', onDone }: Props) {
  const isEn = language === 'en'
  const [copied, setCopied] = useState(false)
  const [note, setNote] = useState<string | null>(null)

  async function copy() {
    try {
      await navigator.clipboard.writeText(`${reference} ${text}`)
      setCopied(true)
      setTimeout(onDone, 700)
    } catch {
      setNote(isEn ? 'Copy was blocked by the browser. Select the text and copy it manually.' : 'ቅጂው በአሳሹ ተከልክሏል። ጽሑፉን በእጅ ይቅዱ።')
    }
  }

  function drawImage() {
    try {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')
      if (!ctx) throw new Error('no canvas')

      const body = text.trim()
      const isAmharic = /[\u1200-\u137F]/.test(body)
      const fontSize = body.length > 220 ? 34 : body.length > 120 ? 40 : 48
      const lineHeight = fontSize * 1.55
      const padding = 80

      ctx.font = `${fontSize}px ${isAmharic ? 'Nyala, Abyssinica SIL, Segoe UI' : 'Georgia, serif'}`
      const maxWidth = WIDTH - padding * 2
      const words = body.split(/\s+/)
      const lines: string[] = []
      let line = ''
      for (const word of words) {
        const test = line ? `${line} ${word}` : word
        if (ctx.measureText(test).width > maxWidth && line) {
          lines.push(line)
          line = word
        } else {
          line = test
        }
      }
      if (line) lines.push(line)

      const height = padding * 2 + 70 + lines.length * lineHeight
      canvas.width = WIDTH
      canvas.height = Math.min(height, 4000)

      ctx.fillStyle = '#fbf8f1'
      ctx.fillRect(0, 0, canvas.width, canvas.height)
      ctx.fillStyle = '#8a6b3d'
      ctx.fillRect(padding, padding, canvas.width - padding * 2, 3)

      ctx.fillStyle = '#6b5a45'
      ctx.font = `600 30px ${isAmharic ? 'Nyala, Segoe UI' : 'Georgia, serif'}`
      ctx.fillText(reference, padding, padding + 58)

      ctx.fillStyle = '#241f1a'
      ctx.font = `${fontSize}px ${isAmharic ? 'Nyala, Abyssinica SIL, Segoe UI' : 'Georgia, serif'}`
      lines.forEach((l, i) => ctx.fillText(l, padding, padding + 130 + i * lineHeight))

      canvas.toBlob((blob) => {
        if (!blob) {
          setNote(isEn ? 'The image could not be created.' : 'ምስሉን ማዘጋጀት አልተቻለም።')
          return
        }
        const url = URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.href = url
        a.download = `${reference.replace(/[:\s]+/g, '-')}.png`
        a.click()
        URL.revokeObjectURL(url)
        setNote(isEn ? 'Image saved to your downloads.' : 'ምስሉ ወደ ማውረጃዎ ተቀምጧል።')
      }, 'image/png')
    } catch {
      setNote(isEn ? 'This browser blocked image creation.' : 'አሳሹ ምስል መፍጠርን ከልክሏል።')
    }
  }

  return (
    <div className="sharepanel">
      <p className="sharepanel__ref">{reference}</p>
      <button type="button" className="sharepanel__btn" onClick={copy}>
        <span aria-hidden="true">⧉</span>
        {copied ? (isEn ? 'Copied' : 'ተቀድቷል') : (isEn ? 'Copy verse text' : 'የጥቅሱን ጽሑፍ ቅዳ')}
      </button>
      <button type="button" className="sharepanel__btn" onClick={drawImage}>
        <span aria-hidden="true">↗</span>
        {isEn ? 'Save as an image' : 'እንደ ምስል አስቀምጥ'}
      </button>
      {note && (
        <p className="sharepanel__note" role="status">
          {note}
        </p>
      )}
    </div>
  )
}
