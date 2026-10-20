/** Checks reflections, prayers and the daily prompt. */

const store = new Map()

globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
}

globalThis.window = { addEventListener: () => undefined, removeEventListener: () => undefined }

let pass = 0
let fail = 0

function check(name, condition, detail) {
  if (condition) {
    pass += 1
    console.log(`PASS  ${name}`)
  } else {
    fail += 1
    console.log(`FAIL  ${name}${detail === undefined ? '' : ` — ${detail}`}`)
  }
}

let n = 0
async function load() {
  n += 1
  return import(`./src/journal.ts?v=${n}`)
}

const ANCHOR = { translation: 'kjv', book: 43, chapter: 3, verse: 16 }
const ANCHOR2 = { translation: 'kjv', book: 23, chapter: 4, verse: 3 }

const { anchorKey, questionForDay, PRAYER_CATEGORIES } = await load()

check('an anchor has a stable key', anchorKey(ANCHOR) === 'kjv:43:3:16', anchorKey(ANCHOR))
check('different verses have different keys', anchorKey(ANCHOR) !== anchorKey(ANCHOR2))
check('prayer categories offered', PRAYER_CATEGORIES.includes('Family') && PRAYER_CATEGORIES.length >= 5, PRAYER_CATEGORIES.join(', '))

/* ---- the daily prompt ---- */
{
  check('a prompt exists for every day', typeof questionForDay(0) === 'string' && questionForDay(0).length > 10)
  check('the same day gives the same prompt', questionForDay(1234) === questionForDay(1234))
  check('a different day gives a different prompt', questionForDay(1) !== questionForDay(0), `${questionForDay(0)} / ${questionForDay(1)}`)
  const seen = new Set(Array.from({ length: 400 }, (_, i) => questionForDay(i)))
  check('the prompts rotate over a year', seen.size > 5, `${seen.size} distinct prompts in 400 days`)
}

/* ---- reflections ---- */
{
  const { saveReflection, readReflections } = await load()
  saveReflection(ANCHOR, 'What does this teach you?', 'God is generous.')
  check('a reflection is kept', String(store.get('bible:reflections')).includes('God is generous'), store.get('bible:reflections'))
  check('the question is kept with it', String(store.get('bible:reflections')).includes('What does this teach you?'))
  check('the reflection list has one entry', readReflections().length === 1, String(readReflections().length))

  saveReflection(ANCHOR, 'What does this teach you?', 'God is love, not only kind.')
  check('writing again replaces it', readReflections().length === 1, String(readReflections().length))
  check('the new words are kept', String(store.get('bible:reflections')).includes('not only kind'))

  saveReflection(ANCHOR2, 'Another', 'A second verse.')
  check('a second verse gets its own reflection', readReflections().length === 2, String(readReflections().length))

  saveReflection(ANCHOR, 'What does this teach you?', '   ')
  check('clearing the words removes it', readReflections().length === 1, String(readReflections().length))
}

/* ---- prayers ---- */
{
  const { addPrayer, setAnswered, removePrayer, readPrayers } = await load()
  check('an empty prayer is refused', addPrayer('   ', 'Family') === '', 'no id returned')

  const id = addPrayer('For my mother.', 'Family')
  check('a prayer is kept', Boolean(id) && readPrayers().length === 1, String(readPrayers().length))
  check('the category is kept', readPrayers()[0].category === 'Family', readPrayers()[0].category)
  check('a new prayer starts unanswered', readPrayers()[0].answered === false)

  setAnswered(id, true)
  check('it can be marked answered', readPrayers()[0].answered === true)
  check('the date answered is recorded', typeof readPrayers()[0].answeredAt === 'number')

  setAnswered(id, false)
  check('it can be marked unanswered again', readPrayers()[0].answered === false)

  addPrayer('For work.', 'Work')
  check('several prayers are kept', readPrayers().length === 2, String(readPrayers().length))

  removePrayer(id)
  check('a prayer can be removed', readPrayers().length === 1, String(readPrayers().length))
}

/* ---- study notes ---- */
{
  const { saveStudy, readStudies } = await load()
  check('an empty study is not stored', readStudies().length === 0)
  saveStudy({ anchor: ANCHOR, read: '', learned: '', stoodOut: '', questions: '', prayer: '' })
  check('a blank study is refused', readStudies().length === 0, String(readStudies().length))

  saveStudy({
    anchor: ANCHOR,
    read: 'John 3',
    learned: 'Nicodemus came at night.',
    stoodOut: 'God so loved.',
    questions: 'Why at night?',
    prayer: 'Give me that love.',
  })
  check('a study is kept', readStudies().length === 1, String(readStudies().length))
  check('every part is kept', ['John 3', 'Nicodemus', 'God so loved', 'at night', 'Give me'].every((p) => String(store.get('bible:studies')).includes(p)), store.get('bible:studies'))

  saveStudy({
    anchor: ANCHOR,
    read: 'John 3',
    learned: 'Nicodemus came at night.',
    stoodOut: 'God so loved everyone.',
    questions: 'Why at night?',
    prayer: 'Give me that love.',
  })
  check('saving again replaces it', readStudies().length === 1, String(readStudies().length))
}

console.log(`\n${pass}/${pass + fail} passed`)
process.exit(fail ? 1 : 0)
