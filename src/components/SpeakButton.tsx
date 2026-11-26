import { useEffect, useRef, useState } from 'react'
import { speakText, stopAllSpeech, isAmharicText } from '../voiceover'

interface Props {
  text: string
  label?: string
}

/**
 * Reads a verse aloud using either native speech synthesis or high-definition
 * audio stream. Works seamlessly for both Amharic and English.
 */
export default function SpeakButton({ text, label = 'Listen' }: Props) {
  const [isPlaying, setIsPlaying] = useState(false)
  const cancelRef = useRef<(() => void) | null>(null)

  function speak() {
    if (isPlaying) {
      if (cancelRef.current) cancelRef.current()
      stopAllSpeech()
      setIsPlaying(false)
      return
    }

    const isAm = isAmharicText(text)
    setIsPlaying(true)
    cancelRef.current = speakText(text, {
      lang: isAm ? 'am' : 'en',
      onEnd: () => setIsPlaying(false),
      onError: () => setIsPlaying(false),
    })
  }

  useEffect(() => {
    return () => {
      if (cancelRef.current) cancelRef.current()
    }
  }, [])

  return (
    <span className="speak">
      <button
        type="button"
        className={`chip chip--sm ${isPlaying ? 'is-active' : ''}`}
        onClick={speak}
      >
        {isPlaying ? '■ Stop' : `▶ ${label}`}
      </button>
    </span>
  )
}
