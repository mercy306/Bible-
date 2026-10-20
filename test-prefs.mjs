/** Checks the reading preferences: defaults, validation and persistence. */

const store = new Map()

globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
  clear: () => store.clear(),
}

const attributes = {}
const variables = {}
const style = {
  setProperty(key, value) {
    variables[key] = value
  },
}
globalThis.document = {
  documentElement: {
    dataset: new Proxy(
      {},
      {
        set(_t, key, value) {
          attributes[key] = value
          return true
        },
      },
    ),
    style,
  },
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

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

// A fresh copy of the module reads localStorage again.
let n = 0
async function load() {
  n += 1
  return import(`./src/prefs.ts?v=${n}`)
}

const { SIZE_RANGE, LEADING_RANGE, PARAGRAPH_RANGE } = await import('./src/prefs.ts')

check('size range is 15-30', SIZE_RANGE.min === 15 && SIZE_RANGE.max === 30, `${SIZE_RANGE.min}-${SIZE_RANGE.max}`)
check(
  'line spacing range is open',
  LEADING_RANGE.min === 1.5 && LEADING_RANGE.max === 2.2,
  `${LEADING_RANGE.min}-${LEADING_RANGE.max}`,
)
check(
  'verse spacing range is open',
  PARAGRAPH_RANGE.min === 4 && PARAGRAPH_RANGE.max === 20,
  `${PARAGRAPH_RANGE.min}-${PARAGRAPH_RANGE.max}`,
)

/* ---- defaults ---- */
{
  const { setPref, applyPrefs } = await load()
  setPref('font', 'serif')
  const saved = JSON.parse(store.get('bible:prefs'))
  check(
    'fresh install uses serif/20/light/brown',
    saved.font === 'serif' && saved.sizePx === 20 && saved.theme === 'light' && saved.accent === 'brown',
    JSON.stringify(saved),
  )
  check(
    'reading comfort starts comfortable',
    saved.leading === 1.9 && saved.paragraphGap === 7 && saved.verseNumbers === true,
    JSON.stringify(saved),
  )
  applyPrefs(saved)
  check('prefs land on the root element', attributes.font === 'serif' && attributes.size === '20' && attributes.theme === 'light' && attributes.accent === 'brown', JSON.stringify(attributes))
  check('verse numbers are on by default', attributes.numbers === 'on', attributes.numbers)
}

/* ---- comfort reaches the stylesheet ---- */
{
  const { setPref } = await load()
  setPref('leading', 2.2)
  setPref('paragraphGap', 16)
  setPref('verseNumbers', false)
  await sleep(0)
  check('line spacing reaches the page', variables['--reader-leading'] === '2.2', variables['--reader-leading'])
  check('verse spacing reaches the page', variables['--reader-gap'] === '16px', variables['--reader-gap'])
  check('verse numbers can be hidden', attributes.numbers === 'off', attributes.numbers)

  setPref('verseNumbers', true)
  check('verse numbers can be brought back', attributes.numbers === 'on', attributes.numbers)
  setPref('leading', 1.5)
  setPref('paragraphGap', 4)
  check('comfort settings are kept', JSON.parse(store.get('bible:prefs')).leading === 1.5, store.get('bible:prefs'))
}

{
  store.set('bible:prefs', JSON.stringify({ leading: 9, paragraphGap: -3, verseNumbers: 'yes' }))
  const { setPref } = await load()
  setPref('theme', 'light')
  const saved = JSON.parse(store.get('bible:prefs'))
  check(
    'out-of-range comfort values fall back',
    saved.leading === 1.9 && saved.paragraphGap === 7 && saved.verseNumbers === true,
    JSON.stringify(saved),
  )
}

/* ---- user picks a size ---- */
{
  const { setPref } = await load()
  setPref('sizePx', 26)
  const saved = JSON.parse(store.get('bible:prefs'))
  check('a chosen size is kept', saved.sizePx === 26, String(saved.sizePx))
  check('size reaches the stylesheet', attributes.size === '26', attributes.size)
}

check('size survives a reload', JSON.parse(store.get('bible:prefs')).sizePx === 26)

/* ---- every size in range is allowed ---- */
{
  const { setPref } = await load()
  let allKept = true
  for (let size = SIZE_RANGE.min; size <= SIZE_RANGE.max; size += 1) {
    setPref('sizePx', size)
    if (JSON.parse(store.get('bible:prefs')).sizePx !== size) allKept = false
  }
  check('any whole pixel from 15 to 30 is accepted', allKept)
}

/* ---- bad stored values fall back ---- */
{
  store.set('bible:prefs', JSON.stringify({ font: 'comic', sizePx: 99, theme: 'neon', accent: 'pink' }))
  const { setPref } = await load()
  setPref('theme', 'light')
  const saved = JSON.parse(store.get('bible:prefs'))
  check(
    'unreadable values fall back to the defaults',
    saved.font === 'serif' && saved.sizePx === 20 && saved.accent === 'brown',
    JSON.stringify(saved),
  )
}

{
  store.set('bible:prefs', JSON.stringify({ sizePx: 4 }))
  const { setPref } = await load()
  setPref('font', 'sans')
  check('a size below the range falls back', JSON.parse(store.get('bible:prefs')).sizePx === 20, String(JSON.parse(store.get('bible:prefs')).sizePx))
}

{
  store.set('bible:prefs', 'not json at all')
  const { setPref } = await load()
  setPref('accent', 'blue')
  check('corrupt storage does not break reading', JSON.parse(store.get('bible:prefs')).sizePx === 20)
}

console.log(`\n${pass}/${pass + fail} passed`)
process.exit(fail ? 1 : 0)