import { useState } from 'react'

interface Props {
  onInsert: (char: string) => void
  onBackspace: () => void
  onClear?: () => void
  onClose: () => void
}

/** Complete 33 Ge'ez base consonant families and their 7 or 8 orders */
const FIDEL_ORDERS: Record<string, string[]> = {
  'ሀ': ['ሀ', 'ሁ', 'ሂ', 'ሃ', 'ሄ', 'ህ', 'ሆ'],
  'ለ': ['ለ', 'ሉ', 'ሊ', 'ላ', 'ሌ', 'ል', 'ሎ', 'ሏ'],
  'ሐ': ['ሐ', 'ሑ', 'ሒ', 'ሓ', 'ሔ', 'ሕ', 'ሖ', 'ሗ'],
  'መ': ['መ', 'ሙ', 'ሚ', 'ማ', 'ሜ', 'ም', 'ሞ', 'ሟ'],
  'ሠ': ['ሠ', 'ሡ', 'ሢ', 'ሣ', 'ሤ', 'ሥ', 'ሦ', 'ሧ'],
  'ረ': ['ረ', 'ሩ', 'ሪ', 'ራ', 'ሬ', 'ር', 'ሮ', 'ሯ'],
  'ሰ': ['ሰ', 'ሱ', 'ሲ', 'ሳ', 'ሴ', 'ስ', 'ሶ', 'ሷ'],
  'ሸ': ['ሸ', 'ሹ', 'ሺ', 'ሻ', 'ሼ', 'ሽ', 'ሾ', 'ሿ'],
  'ቀ': ['ቀ', 'ቁ', 'ቂ', 'ቃ', 'ቄ', 'ቅ', 'ቆ', 'ቋ'],
  'በ': ['በ', 'ቡ', 'ቢ', 'ባ', 'ቤ', 'ብ', 'ቦ', 'ቧ'],
  'ተ': ['ተ', 'ቱ', 'ቲ', 'ታ', 'ቴ', 'ት', 'ቶ', 'ቷ'],
  'ቸ': ['ቸ', 'ቹ', 'ቺ', 'ቻ', 'ቼ', 'ች', 'ቾ', 'ቿ'],
  'ኀ': ['ኀ', 'ኁ', 'ኂ', 'ኃ', 'ኄ', 'ኅ', 'ኆ', 'ኋ'],
  'ነ': ['ነ', 'ኑ', 'ኒ', 'ና', 'ኔ', 'ን', 'ኖ', 'ኗ'],
  'ኘ': ['ኘ', 'ኙ', 'ኚ', 'ኛ', 'ኜ', 'ኝ', 'ኞ', 'ኟ'],
  'አ': ['አ', 'ኡ', 'ኢ', 'ኣ', 'ኤ', 'እ', 'ኦ', 'ኧ'],
  'ከ': ['ከ', 'ኩ', 'ኪ', 'ካ', 'ኬ', 'ክ', 'ኮ', 'ኳ'],
  'ኸ': ['ኸ', 'ኹ', 'ኺ', 'ኻ', 'ኼ', 'ኽ', 'ኾ'],
  'ወ': ['ወ', 'ዉ', 'ዊ', 'ዋ', 'ዌ', 'ው', 'ዎ'],
  'ዐ': ['ዐ', 'ዑ', 'ዒ', 'ዓ', 'ዔ', 'ዕ', 'ዖ'],
  'ዘ': ['ዘ', 'ዙ', 'ዚ', 'ዛ', 'ዜ', 'ዝ', 'ዞ', 'ዟ'],
  'ዠ': ['ዠ', 'ዡ', 'ዢ', 'ዣ', 'ዤ', 'ዥ', 'ዦ', 'ዧ'],
  'የ': ['የ', 'ዩ', 'ዪ', 'ያ', 'ዬ', 'ይ', 'ዮ'],
  'ደ': ['ደ', 'ዱ', 'ዲ', 'ዳ', 'ዴ', 'ድ', 'ዶ', 'ዷ'],
  'ጀ': ['ጀ', 'ጁ', 'ጂ', 'ጃ', 'ጄ', 'ጅ', 'ጆ', 'ጇ'],
  'ገ': ['ገ', 'ጉ', 'ጊ', 'ጋ', 'ጌ', 'ግ', 'ጎ', 'ጓ'],
  'ጠ': ['ጠ', 'ጡ', 'ጢ', 'ጣ', 'ጤ', 'ጥ', 'ጦ', 'ጧ'],
  'ጨ': ['ጨ', 'ጩ', 'ጪ', 'ጫ', 'ጬ', 'ጭ', 'ጮ', 'ቿ'],
  'ጰ': ['ጰ', 'ጱ', 'ጲ', 'ጳ', 'ጴ', 'ጵ', 'ጶ', 'ጷ'],
  'ጸ': ['ጸ', 'ጹ', 'ጺ', 'ጻ', 'ጼ', 'ጽ', 'ጾ', 'ጿ'],
  'ፀ': ['ፀ', 'ፁ', 'ፂ', 'ፃ', 'ፄ', 'ፅ', 'ፆ'],
  'ፈ': ['ፈ', 'ፉ', 'ፊ', 'ፋ', 'ፌ', 'ፍ', 'ፎ', 'ፏ'],
  'ፐ': ['ፐ', 'ፑ', 'ፒ', 'ፓ', 'ፔ', 'ፕ', 'ፖ', 'ፗ'],
}

/** 4 rows of base consonant keys for touch-typing */
const BASE_ROWS: string[][] = [
  ['ሀ', 'ለ', 'ሐ', 'መ', 'ሠ', 'ረ', 'ሰ', 'ሸ', 'ቀ', 'በ'],
  ['ተ', 'ቸ', 'ኀ', 'ነ', 'ኘ', 'አ', 'ከ', 'ኸ', 'ወ', 'ዐ'],
  ['ዘ', 'ዠ', 'የ', 'ደ', 'ጀ', 'ገ', 'ጠ', 'ጨ', 'ጰ', 'ጸ'],
  ['ፀ', 'ፈ', 'ፐ'],
]

/** English QWERTY keyboard rows */
const ENGLISH_ROWS_LOWER: string[][] = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['z', 'x', 'c', 'v', 'b', 'n', 'm'],
]

const ENGLISH_ROWS_UPPER: string[][] = [
  ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'],
  ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'],
  ['Z', 'X', 'C', 'V', 'B', 'N', 'M'],
]

/** Numbers & Ge'ez punctuation */
const NUMBERS_AND_PUNCT: string[][] = [
  ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'],
  ['፩', '፪', '፫', '፬', '፭', '፮', '፯', '፰', '፱', '፲'],
  [':', '፣', '፤', '፦', '?', '!', '-', '(', ')', '“'],
]

export default function AmharicKeyboard({ onInsert, onBackspace, onClose }: Props) {
  const [activeBase, setActiveBase] = useState<string | null>(null)
  const [mode, setMode] = useState<'fidel' | 'english' | '123'>('fidel')
  const [isShift, setIsShift] = useState<boolean>(false)

  const variations = activeBase ? FIDEL_ORDERS[activeBase] || [activeBase] : []

  function handleBaseClick(base: string) {
    if (activeBase === base) {
      onInsert(base)
      setActiveBase(null)
    } else {
      setActiveBase(base)
    }
  }

  function handlePickVariation(char: string) {
    onInsert(char)
    setActiveBase(null)
  }

  function handleEnglishKey(char: string) {
    onInsert(char)
  }

  return (
    <div
      className="amKeyboard"
      role="region"
      aria-label="የቁልፍ ሰሌዳ (Amharic & English Keyboard)"
      onMouseDown={(e) => e.preventDefault()}
    >
      {/* Top Header / Mode Switcher & Variation Bar */}
      <div className="amKeyboard__top">
        {activeBase && variations.length > 0 ? (
          <div className="amKeyboard__variations" role="group" aria-label={`${activeBase} ቅርጾች`}>
            {variations.map((v, i) => (
              <button
                key={v}
                type="button"
                className="amKeyboard__varBtn"
                onClick={() => handlePickVariation(v)}
                title={`Order ${i + 1}: ${v}`}
              >
                {v}
              </button>
            ))}
            <button
              type="button"
              className="amKeyboard__varCancelBtn"
              onClick={() => setActiveBase(null)}
              title="ዝጋ"
            >
              ✕
            </button>
          </div>
        ) : (
          <div className="amKeyboard__headerLeft">
            <div className="amKeyboard__langTabs" role="tablist" aria-label="የቋንቋ ምርጫ">
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'fidel'}
                className={`amKeyboard__langTab ${mode === 'fidel' ? 'is-active' : ''}`}
                onClick={() => {
                  setMode('fidel')
                  setActiveBase(null)
                }}
              >
                አማ
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === 'english'}
                className={`amKeyboard__langTab ${mode === 'english' ? 'is-active' : ''}`}
                onClick={() => {
                  setMode('english')
                  setActiveBase(null)
                }}
              >
                EN
              </button>
              <button
                type="button"
                role="tab"
                aria-selected={mode === '123'}
                className={`amKeyboard__langTab ${mode === '123' ? 'is-active' : ''}`}
                onClick={() => {
                  setMode('123')
                  setActiveBase(null)
                }}
              >
                123
              </button>
            </div>
            <span className="amKeyboard__modeHint">
              {mode === 'fidel' && 'ፊደል ይጫኑ'}
              {mode === 'english' && 'English'}
              {mode === '123' && '123 / ምልክቶች'}
            </span>
          </div>
        )}

        <button
          type="button"
          className="amKeyboard__closeBtn"
          onClick={onClose}
          aria-label="ኪቦርድ ዝጋ (Close keyboard)"
          title="ኪቦርድ ዝጋ"
        >
          ✕
        </button>
      </div>

      {/* Main Keys Matrix */}
      {mode === 'fidel' && (
        <div className="amKeyboard__matrix">
          {BASE_ROWS.map((row, rowIdx) => (
            <div key={rowIdx} className="amKeyboard__row">
              {row.map((letter) => (
                <button
                  key={letter}
                  type="button"
                  className={`amKeyboard__key ${activeBase === letter ? 'is-active' : ''}`}
                  onClick={() => handleBaseClick(letter)}
                >
                  {letter}
                </button>
              ))}

              {/* Action keys integrated in the 4th row */}
              {rowIdx === 3 && (
                <>
                  <button
                    type="button"
                    className="amKeyboard__key amKeyboard__key--mode"
                    onClick={() => {
                      setMode('english')
                      setActiveBase(null)
                    }}
                    title="Switch to English"
                  >
                    EN
                  </button>

                  <button
                    type="button"
                    className="amKeyboard__key amKeyboard__key--mode"
                    onClick={() => {
                      setMode('123')
                      setActiveBase(null)
                    }}
                    title="Numbers & Punctuation"
                  >
                    123
                  </button>

                  <button
                    type="button"
                    className="amKeyboard__key amKeyboard__key--space"
                    onClick={() => {
                      onInsert(' ')
                      setActiveBase(null)
                    }}
                    aria-label="Space"
                  >
                    ክፍተት
                  </button>

                  <button
                    type="button"
                    className="amKeyboard__key amKeyboard__key--backspace"
                    onClick={() => {
                      onBackspace()
                      setActiveBase(null)
                    }}
                    aria-label="Backspace"
                    title="Backspace"
                  >
                    ⌫
                  </button>
                </>
              )}
            </div>
          ))}
        </div>
      )}

      {mode === 'english' && (
        <div className="amKeyboard__matrix amKeyboard__matrix--en">
          {/* Row 1: q w e r t y u i o p */}
          <div className="amKeyboard__row">
            {(isShift ? ENGLISH_ROWS_UPPER[0] : ENGLISH_ROWS_LOWER[0]).map((letter) => (
              <button
                key={letter}
                type="button"
                className="amKeyboard__key"
                onClick={() => handleEnglishKey(letter)}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Row 2: a s d f g h j k l */}
          <div className="amKeyboard__row">
            {(isShift ? ENGLISH_ROWS_UPPER[1] : ENGLISH_ROWS_LOWER[1]).map((letter) => (
              <button
                key={letter}
                type="button"
                className="amKeyboard__key"
                onClick={() => handleEnglishKey(letter)}
              >
                {letter}
              </button>
            ))}
          </div>

          {/* Row 3: Shift + z x c v b n m + Backspace */}
          <div className="amKeyboard__row">
            <button
              type="button"
              className={`amKeyboard__key amKeyboard__key--shift ${isShift ? 'is-active' : ''}`}
              onClick={() => setIsShift((prev) => !prev)}
              aria-label="Shift / Caps"
              title="Shift / Caps"
            >
              ⇧
            </button>

            {(isShift ? ENGLISH_ROWS_UPPER[2] : ENGLISH_ROWS_LOWER[2]).map((letter) => (
              <button
                key={letter}
                type="button"
                className="amKeyboard__key"
                onClick={() => handleEnglishKey(letter)}
              >
                {letter}
              </button>
            ))}

            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--backspace"
              onClick={() => onBackspace()}
              aria-label="Backspace"
              title="Backspace"
            >
              ⌫
            </button>
          </div>

          {/* Row 4: አማ | 123 | Space | . | , */}
          <div className="amKeyboard__row">
            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--mode"
              onClick={() => setMode('fidel')}
              title="ወደ አማርኛ ቀይር (Amharic)"
            >
              አማ
            </button>

            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--mode"
              onClick={() => setMode('123')}
              title="Numbers & Punctuation"
            >
              123
            </button>

            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--space"
              onClick={() => onInsert(' ')}
              aria-label="Space"
            >
              space
            </button>

            <button
              type="button"
              className="amKeyboard__key"
              style={{ flex: 1 }}
              onClick={() => onInsert(',')}
            >
              ,
            </button>

            <button
              type="button"
              className="amKeyboard__key"
              style={{ flex: 1 }}
              onClick={() => onInsert('.')}
            >
              .
            </button>
          </div>
        </div>
      )}

      {mode === '123' && (
        <div className="amKeyboard__matrix amKeyboard__matrix--num">
          {NUMBERS_AND_PUNCT.map((row, rowIdx) => (
            <div key={rowIdx} className="amKeyboard__row">
              {row.map((item) => (
                <button
                  key={item}
                  type="button"
                  className="amKeyboard__key"
                  onClick={() => onInsert(item)}
                >
                  {item}
                </button>
              ))}
            </div>
          ))}
          <div className="amKeyboard__row">
            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--mode"
              onClick={() => setMode('fidel')}
              title="ፊደላት"
            >
              አማ
            </button>
            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--mode"
              onClick={() => setMode('english')}
              title="English"
            >
              EN
            </button>
            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--space"
              onClick={() => onInsert(' ')}
              aria-label="Space"
            >
              ክፍተት / space
            </button>
            <button
              type="button"
              className="amKeyboard__key amKeyboard__key--backspace"
              onClick={() => onBackspace()}
              aria-label="Backspace"
              title="Backspace"
            >
              ⌫
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
