import { useState, useEffect, useRef } from 'react'
import Sheet from './Sheet'
import AmharicKeyboard from './AmharicKeyboard'
import type { LanguageMode } from '../prefs'
import { answerBibleQuestion, type AssistantQueryContext } from '../bibleAssistant/synthesisEngine'
import type { ExegesisResponse } from '../bibleAssistant/types'

interface Props {
  open: boolean
  onClose: () => void
  language?: LanguageMode
  translation?: string
  onOpenPassage?: (book: number, chapter: number, verse?: number) => void
}

interface ChatItem {
  id: string
  sender: 'user' | 'assistant'
  text?: string
  response?: ExegesisResponse
  timestamp: number
}

const STORAGE_KEY = 'bible:assistant-chat-history'

const SUGGESTIONS_AM = [
  'ስለ ይቅርታ መጽሐፍ ቅዱስ ምን ያስተምራል?',
  'ሙሴ ማን ነበር? ምንስ ሠራ?',
  'ዮሐንስ 3:16ን አብራራልኝ',
  'በአዳምና በክርስቶስ መካከል ያለው ትሥሥር ምንድን ነው?',
  'እምነት በመጽሐፍ ቅዱስ መሠረት ምንድን ነው?',
  'መዝሙር 23 ምን ያስተምራል?',
]

const SUGGESTIONS_EN = [
  'What does the Bible teach about forgiveness?',
  'Who was Moses and what was his calling?',
  'Explain John 3:16 in its biblical context',
  'What is the connection between Adam and Christ?',
  'What is faith according to Hebrews 11?',
  'Explain Psalm 23',
]

export default function BibleAssistantSheet({
  open,
  onClose,
  language = 'am',
  translation = 'am',
  onOpenPassage,
}: Props) {
  const isEn = language === 'en'
  const [messages, setMessages] = useState<ChatItem[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      if (saved) return JSON.parse(saved)
    } catch {}
    return []
  })
  const [input, setInput] = useState('')
  const [loading, setLoading] = useState(false)
  const [showKeyboard, setShowKeyboard] = useState(false)
  const [context, setContext] = useState<AssistantQueryContext>({})
  const scrollRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  // Save history
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)))
    } catch {}
  }, [messages])

  // Scroll to bottom on new message
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight
    }
  }, [messages, loading])

  const handleSend = async (textToSend?: string) => {
    const q = (textToSend || input).trim()
    if (!q || loading) return

    setInput('')
    setShowKeyboard(false)

    const userMsg: ChatItem = {
      id: `u-${Date.now()}`,
      sender: 'user',
      text: q,
      timestamp: Date.now(),
    }
    setMessages((prev) => [...prev, userMsg])
    setLoading(true)

    try {
      const resp = await answerBibleQuestion(q, language, translation, context)
      const assistantMsg: ChatItem = {
        id: `a-${Date.now()}`,
        sender: 'assistant',
        response: resp,
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, assistantMsg])

      // Update contextual memory
      if (resp.primaryPassages.length > 0) {
        const first = resp.primaryPassages[0]
        setContext({
          lastReference: `${first.bookName} ${first.chapter}`,
        })
      }
    } catch (err) {
      console.error('Failed to answer bible question:', err)
      const errorMsg: ChatItem = {
        id: `e-${Date.now()}`,
        sender: 'assistant',
        text: isEn
          ? 'An error occurred while retrieving Scripture. Please try asking again.'
          : 'ቅዱሳት መጻሕፍትን በማውጣት ሂደት ላይ ችግር ተፈጥሯል። እባክዎ እንደገና ይጠይቁ።',
        timestamp: Date.now(),
      }
      setMessages((prev) => [...prev, errorMsg])
    } finally {
      setLoading(false)
    }
  }

  const handleClearHistory = () => {
    setMessages([])
    setContext({})
    try {
      localStorage.removeItem(STORAGE_KEY)
    } catch {}
  }

  const suggestions = isEn ? SUGGESTIONS_EN : SUGGESTIONS_AM

  return (
    <Sheet
      open={open}
      onClose={onClose}
      title={isEn ? 'Bible Study Assistant' : 'የመጽሐፍ ቅዱስ ጥናት ረዳት'}
      language={language}
    >
      <div style={{ display: 'flex', flexDirection: 'column', height: '100%', minHeight: '500px', maxHeight: '82vh' }}>
        {/* Header Toolbar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 12px', borderBottom: '1px solid var(--line)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <span style={{ fontSize: '1.2rem' }}>📖</span>
            <span style={{ fontSize: '0.84rem', fontWeight: 700, color: 'var(--accent)' }}>
              {isEn ? 'Scripture Alone' : 'መጽሐፍ ቅዱስ ብቻ'}
            </span>
          </div>
          {messages.length > 0 && (
            <button
              type="button"
              className="tribeJumpBtn"
              onClick={handleClearHistory}
              title={isEn ? 'Clear Conversation History' : 'የውይይት ታሪክን አጽዳ'}
              style={{ fontSize: '11px', padding: '3px 8px' }}
            >
              🗑️ {isEn ? 'Clear' : 'አጽዳ'}
            </button>
          )}
        </div>

        {/* Chat Scroll Area */}
        <div
          ref={scrollRef}
          style={{
            flex: 1,
            overflowY: 'auto',
            padding: '12px 14px',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {messages.length === 0 ? (
            <div style={{ textAlign: 'center', padding: '24px 12px', color: 'var(--ink)' }}>
              <div style={{ fontSize: '2.5rem', marginBottom: '8px' }}>✝️</div>
              <h3 style={{ margin: '0 0 6px 0', fontSize: '1.1rem' }}>
                {isEn ? 'Bible Study Assistant' : 'የመጽሐፍ ቅዱስ ጥናት ረዳት'}
              </h3>
              <p style={{ margin: '0 0 16px 0', fontSize: '0.86rem', color: 'var(--text-muted)', lineHeight: 1.5, maxWidth: '420px', marginLeft: 'auto', marginRight: 'auto' }}>
                {isEn
                  ? 'Ask any question about the Holy Bible from Genesis to Revelation. All answers are grounded strictly in Scripture with no outside doctrines.'
                  : 'ከኦሪት ዘፍጥረት እስከ ዮሐንስ ራእይ ድረስ ስለ ቅዱሳት መጻሕፍት ማንኛውንም ጥያቄ ይጠይቁ። ሁሉም ምላሾች ከመጽሐፍ ቅዱስ ብቻ የተወሰዱ ናቸው።'}
              </p>

              <div style={{ textAlign: 'left', maxWidth: '440px', margin: '0 auto' }}>
                <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--text-muted)', display: 'block', marginBottom: '8px' }}>
                  💡 {isEn ? 'Suggested Questions:' : 'የተጠቆሙ ጥያቄዎች፦'}
                </span>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                  {suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => handleSend(s)}
                      style={{
                        textAlign: 'left',
                        padding: '8px 12px',
                        borderRadius: '8px',
                        background: 'var(--panel-2, rgba(128,128,128,0.1))',
                        border: '1px solid var(--line, rgba(0,0,0,0.1))',
                        color: 'var(--ink)',
                        fontSize: '0.84rem',
                        cursor: 'pointer',
                      }}
                    >
                      💬 {s}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                style={{
                  alignSelf: m.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: '92%',
                }}
              >
                {m.sender === 'user' ? (
                  <div
                    style={{
                      background: 'var(--accent, #6366f1)',
                      color: 'var(--accent-ink, #ffffff)',
                      padding: '9px 14px',
                      borderRadius: '16px 16px 4px 16px',
                      fontSize: '0.92rem',
                      lineHeight: 1.45,
                    }}
                  >
                    {m.text}
                  </div>
                ) : (
                  <div
                    style={{
                      background: 'var(--panel-2, rgba(128,128,128,0.1))',
                      color: 'var(--ink)',
                      border: '1px solid var(--line, rgba(0,0,0,0.12))',
                      padding: '12px 14px',
                      borderRadius: '16px 16px 16px 4px',
                      fontSize: '0.88rem',
                      lineHeight: 1.5,
                      boxShadow: '0 2px 6px rgba(0,0,0,0.05)',
                    }}
                  >
                    {m.text && <p style={{ margin: 0 }}>{m.text}</p>}

                    {m.response && (
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        {/* Direct Answer */}
                        <div style={{ fontWeight: 600, fontSize: '0.9rem', color: 'var(--ink)' }}>
                          {m.response.directAnswer}
                        </div>

                        {/* Primary Passages */}
                        {m.response.primaryPassages.length > 0 && (
                          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginTop: 4 }}>
                            {m.response.primaryPassages.map((v) => (
                              <div
                                key={`${v.bookNr}-${v.chapter}-${v.verse}`}
                                style={{
                                  background: 'var(--panel, #ffffff)',
                                  borderLeft: '3px solid var(--accent)',
                                  padding: '8px 10px',
                                  borderRadius: '6px',
                                }}
                              >
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                                  <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)' }}>
                                    📖 {v.bookName} {v.chapter}:{v.verse}
                                  </span>
                                  {onOpenPassage && (
                                    <button
                                      type="button"
                                      className="tribeJumpBtn"
                                      style={{ fontSize: '10px', padding: '2px 6px' }}
                                      onClick={() => {
                                        onOpenPassage(v.bookNr, v.chapter, v.verse)
                                        onClose()
                                      }}
                                    >
                                      {isEn ? 'Read' : 'አንብብ'} ›
                                    </button>
                                  )}
                                </div>
                                <p style={{ margin: 0, fontSize: '0.84rem', fontStyle: 'italic', color: 'var(--ink)' }}>
                                  "{v.text}"
                                </p>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Biblical Context Explanation */}
                        {m.response.contextExplanation && (
                          <div style={{ fontSize: '0.84rem', color: 'var(--text-muted, var(--ink))', background: 'rgba(0,0,0,0.03)', padding: '8px 10px', borderRadius: '6px' }}>
                            {m.response.contextExplanation}
                          </div>
                        )}

                        {/* OT/NT Connections */}
                        {m.response.otNtConnections && m.response.otNtConnections.length > 0 && (
                          <div style={{ border: '1px solid var(--accent)', background: 'rgba(212, 175, 55, 0.08)', padding: '8px 10px', borderRadius: '6px' }}>
                            <span style={{ fontSize: '0.78rem', fontWeight: 800, color: 'var(--accent)' }}>
                              🔗 {isEn ? 'Old & New Testament Connection:' : 'የብሉይና አዲስ ኪዳን ትሥሥር፦'}
                            </span>
                            {m.response.otNtConnections.map((otnt, idx) => (
                              <p key={idx} style={{ margin: '4px 0 0 0', fontSize: '0.83rem', lineHeight: 1.45 }}>
                                {otnt.explanation}
                              </p>
                            ))}
                          </div>
                        )}

                        {/* Cross References */}
                        {m.response.relatedVerses && m.response.relatedVerses.length > 0 && (
                          <div>
                            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--text-muted)' }}>
                              📚 {isEn ? 'Related Scriptures:' : 'ተዛማጅ ጥቅሶች፦'}
                            </span>
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginTop: 4 }}>
                              {m.response.relatedVerses.map((rv) => (
                                <button
                                  key={`${rv.bookNr}-${rv.chapter}-${rv.verse}`}
                                  type="button"
                                  className="tribeJumpBtn"
                                  style={{ fontSize: '11px', padding: '3px 7px' }}
                                  onClick={() => {
                                    if (onOpenPassage) {
                                      onOpenPassage(rv.bookNr, rv.chapter, rv.verse)
                                      onClose()
                                    }
                                  }}
                                  title={rv.text}
                                >
                                  📖 {rv.bookName} {rv.chapter}:{rv.verse}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Biblical Reflection Questions */}
                        {m.response.reflectionQuestions && m.response.reflectionQuestions.length > 0 && (
                          <div style={{ borderTop: '1px dashed var(--line)', paddingTop: 6, marginTop: 4 }}>
                            <span style={{ fontSize: '0.76rem', fontWeight: 800, color: 'var(--accent)' }}>
                              💭 {isEn ? 'Questions for Reflection:' : 'የማሰላሰያ ጥያቄዎች፦'}
                            </span>
                            <ul style={{ margin: '4px 0 0 16px', padding: 0, fontSize: '0.82rem', color: 'var(--ink)' }}>
                              {m.response.reflectionQuestions.map((q, idx) => (
                                <li key={idx} style={{ marginBottom: 3 }}>
                                  {q}
                                </li>
                              ))}
                            </ul>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}
              </div>
            ))
          )}

          {loading && (
            <div style={{ alignSelf: 'flex-start', padding: '8px 14px', background: 'var(--panel-2)', borderRadius: '14px', fontSize: '0.84rem' }}>
              ⏳ {isEn ? 'Searching Scripture...' : 'ቅዱሳት መጻሕፍትን በማገላበጥ ላይ...'}
            </div>
          )}
        </div>

        {/* Input Bar */}
        <div style={{ padding: '8px 12px', borderTop: '1px solid var(--line)', background: 'var(--panel)' }}>
          <form
            onSubmit={(e) => {
              e.preventDefault()
              handleSend()
            }}
            style={{ display: 'flex', gap: '8px', alignItems: 'center' }}
          >
            <button
              type="button"
              className="tribeJumpBtn"
              onClick={() => setShowKeyboard((prev) => !prev)}
              title={isEn ? 'Toggle Amharic Keyboard' : 'የአማርኛ ፊደል ኪቦርድ'}
              style={{ fontSize: '14px', padding: '6px 9px', borderRadius: '8px' }}
            >
              ሀ
            </button>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={isEn ? 'Ask a Bible question (e.g. John 3:16, Moses, Forgiveness)...' : 'ጥያቄዎን ይጠይቁ (ለምሳሌ፦ ዮሐንስ 3:16፣ ሙሴ፣ ይቅርታ)...'}
              style={{
                flex: 1,
                padding: '9px 12px',
                borderRadius: '10px',
                border: '1px solid var(--line)',
                background: 'var(--panel-2)',
                color: 'var(--ink)',
                fontSize: '0.9rem',
              }}
            />
            <button
              type="submit"
              disabled={!input.trim() || loading}
              style={{
                background: input.trim() && !loading ? 'var(--accent, #6366f1)' : 'var(--panel-2)',
                color: input.trim() && !loading ? 'var(--accent-ink, #ffffff)' : 'var(--text-muted)',
                border: 'none',
                borderRadius: '10px',
                padding: '9px 16px',
                fontWeight: 700,
                fontSize: '0.9rem',
                cursor: input.trim() && !loading ? 'pointer' : 'default',
              }}
            >
              {isEn ? 'Ask' : 'ጠይቅ'}
            </button>
          </form>

          {/* On-screen Amharic Keyboard */}
          {showKeyboard && (
            <div style={{ marginTop: 8 }}>
              <AmharicKeyboard
                onInsert={(char) => setInput((prev) => prev + char)}
                onBackspace={() => setInput((prev) => prev.slice(0, -1))}
                onClear={() => setInput('')}
                onClose={() => setShowKeyboard(false)}
              />
            </div>
          )}
        </div>
      </div>
    </Sheet>
  )
}
