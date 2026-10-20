import { useEffect, useState } from 'react'

interface Props {
  text: string
  label?: string
}

const ETHIOPIC = /[\u1200-\u137F]/

/**
 * Reads a verse aloud using the voices installed on this computer. Whether an
 * Amharic voice exists depends on Windows and cannot be assumed, so the button
 * reports what it found instead of silently doing nothing.
 */
export default function SpeakButton({ text, label = 'Listen' }: Props) {
  const [state, setState] = useState<'idle' | 'speaking' | 'blocked'>('idle')
  const [voiceNote, setVoiceNote] = useState<string | null>(null)
  const [hasAmharic, setHasAmharic] = useState<boolean | null>(null)

  const isAmharicText = ETHIOPIC.test(text)

  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      setState('blocked')
      return
    }
    const synth = window.speechSynthesis
    const check = () => {
      const voices = synth.getVoices()
      if (voices.length === 0) return
      const amharic = voices.find((v) => v.lang.toLowerCase().startsWith('am'))
      setHasAmharic(Boolean(amharic))
      setVoiceNote(amharic ? `Voice: ${amharic.name}` : null)
      if (voices.length === 0) setState('blocked')
    }
    check()
    synth.addEventListener('voiceschanged', check)
    return () => synth.removeEventListener('voiceschanged', check)
  }, [])

  // Reading Amharic with an English voice produces nonsense, so say so rather
  // than offering a button that cannot work.
  const cannotRead = hasAmharic === false && isAmharicText

  function speak() {
    if (!('speechSynthesis' in window)) return
    const synth = window.speechSynthesis
    if (state === 'speaking') {
      synth.cancel()
      setState('idle')
      return
    }
    const utterance = new SpeechSynthesisUtterance(text)
    const voices = synth.getVoices()
    const chosen =
      voices.find((v) => v.lang.toLowerCase().startsWith('am')) ??
      voices.find((v) => v.lang.toLowerCase().startsWith('en'))
    if (chosen) utterance.voice = chosen
    utterance.lang = chosen?.lang ?? 'am-ET'
    utterance.rate = 0.9
    utterance.onend = () => setState('idle')
    utterance.onerror = () => setState('idle')
    setState('speaking')
    synth.speak(utterance)
  }

  if (state === 'blocked') {
    return (
      <span className="speak speak--off" title="This computer has no speech voices installed">
        {label} unavailable
      </span>
    )
  }

  if (cannotRead) {
    return (
      <span
        className="speak speak--off"
        title="Windows needs an Amharic voice. Settings → Time &amp; language → Language → Add Amharic, then Speech."
      >
        No Amharic voice on this PC
      </span>
    )
  }

  return (
    <span className="speak">
      <button
        type="button"
        className={`chip chip--sm ${state === 'speaking' ? 'is-active' : ''}`}
        onClick={speak}
        title={voiceNote ?? undefined}
      >
        {state === 'speaking' ? '■ Stop' : `▶ ${label}`}
      </button>
      {voiceNote && state === 'idle' && <span className="speak__note">{voiceNote}</span>}
    </span>
  )
}