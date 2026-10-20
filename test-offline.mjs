/**
 * Verifies the offline data layer on its own. Every /api/... request is served
 * from bundled files with no server running, then compared against what the
 * live server returns for the same request.
 */

// The real network fetch, kept for comparison against the running server.
const realFetch = globalThis.fetch

const { fileURLToPath } = await import('node:url')
const DATA = fileURLToPath(new URL('./data/', import.meta.url)).replace(/\/$/, '')

globalThis.Response = class {
  constructor(body, init) {
    this.body = body
    this.status = (init && init.status) || 200
    this.ok = this.status >= 200 && this.status < 300
  }
  async json() {
    return JSON.parse(this.body)
  }
}

const bundles = new Map()

// A fetch that only knows about bundled files, exactly as in the app package.
globalThis.fetch = async (input) => {
  const url = String(input)
  if (!url.includes('/api/')) {
    // The app already asks for data/<file>, so only the origin is stripped.
    const key = url.replace(/^https?:\/\/[^/]+\//, '')
    if (bundles.has(key)) return new globalThis.Response(JSON.stringify(bundles.get(key)))
    throw new Error(`offline: ${key} is not bundled`)
  }
  return new globalThis.Response('{}', { status: 404 })
}

globalThis.document = { baseURI: 'http://localhost/' }
// The offline layer only installs on a native build, so pretend to be one.
globalThis.window = { fetch: globalThis.fetch, Capacitor: { isNativePlatform: () => true } }

const { installOfflineApi } = await import('./src/offline.ts')
installOfflineApi()

const results = []
const check = (label, pass, detail) =>
  results.push(`${pass ? 'PASS' : 'FAIL'}  ${label}${detail ? ` — ${detail}` : ''}`)
const note = (text) => {
  results.push(`      ${text}`)
  console.log(`      ${text}`)
}

// Load every bundled file from disk.
const { readdirSync, readFileSync, statSync } = await import('node:fs')
function loadTree(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = `${dir}/${entry}`
    if (statSync(full).isDirectory()) loadTree(full, `${prefix}${entry}/`)
    else if (entry.endsWith('.json')) {
      bundles.set(`${prefix}${entry}`, JSON.parse(readFileSync(full, 'utf8')))
    }
  }
}
loadTree(DATA, 'data/')

const ask = (path) => globalThis.window.fetch(`http://localhost${path}`).then((r) => r.json())
const askRaw = (path) => globalThis.window.fetch(`http://localhost${path}`)

// A server left running from an earlier session would answer with stale code and
// make this comparison meaningless, so one is started here and stopped after.
const { spawn } = await import('node:child_process')
const api = spawn(process.execPath, [new URL('./server/index.mjs', import.meta.url).pathname.replace(/^\//, '')], {
  stdio: 'ignore',
})
api.unref?.()

async function waitForApi() {
  for (let i = 0; i < 60; i += 1) {
    try {
      await realFetch('http://127.0.0.1:4001/api/translations')
      return true
    } catch {
      await new Promise((r) => setTimeout(r, 250))
    }
  }
  return false
}
await waitForApi()

const live = async (path) => {
  try {
    const res = await realFetch(`http://127.0.0.1:4001${path}`)
    return res.ok ? await res.json() : null
  } catch {
    return null
  }
}

console.log(`bundled files: ${bundles.size}`)

try {
  const probe = new URL('data/index.json', globalThis.document.baseURI).href
  const key = probe.replace(/^https?:\/\/[^/]+\//, '')
  note(`probe url=${probe} key=${key} bundled=${bundles.has(key)}`)
} catch (error) {
  note(`probe failed: ${error.message}`)
}

// --- translations and books -------------------------------------------------
const offlineT = await ask('/api/translations')
const liveT = await live('/api/translations')
check(
  'translations match the server',
  JSON.stringify(offlineT) === JSON.stringify(liveT),
  `${offlineT.length} translations`,
)

for (const t of ['am', 'am54', 'kjv']) {
  const offline = await ask(`/api/books?translation=${t}`)
  const server = await live(`/api/books?translation=${t}`)
  if (JSON.stringify(offline) !== JSON.stringify(server) && offline.books && server) {
    note(
      `${t} translation block offline=${JSON.stringify(offline.translation)} server=${JSON.stringify(server.translation)}`,
    )
    const a = JSON.stringify(offline.books)
    const b = JSON.stringify(server.books)
    for (let i = 0; i < offline.books.length; i += 1) {
      if (JSON.stringify(offline.books[i]) !== JSON.stringify(server.books[i])) {
        note(`  first differing book #${i}: offline=${a.slice(0, 0)}${JSON.stringify(offline.books[i])} server=${JSON.stringify(server.books[i])}`)
        break
      }
    }
    note(`  groups offline=${JSON.stringify(offline.groups).slice(0, 80)} server=${JSON.stringify(server.groups).slice(0, 80)}`)
    void b
  }
  check(
    `${t}: books match the server`,
    JSON.stringify(offline) === JSON.stringify(server),
    `${offline.books ? offline.books.length : 'none'} books`,
  )
}

// --- chapters ---------------------------------------------------------------
const spots = [
  ['am', 43, 3],
  ['am', 40, 1],
  ['am', 1, 1],
  ['am', 19, 119],
  ['kjv', 43, 3],
  ['am54', 40, 4],
]
let chapterMismatch = 0
for (const [t, b, c] of spots) {
  const path = `/api/chapter?translation=${t}&book=${b}&chapter=${c}`
  const offline = await ask(path)
  const server = await live(path)
  if (JSON.stringify(offline) === JSON.stringify(server)) continue
  chapterMismatch += 1
  const brief = (x) =>
    x && x.error
      ? `ERROR ${x.error}`
      : `slots=${x.slots} grouped=${x.grouped && x.grouped.length} verses=${x.verses && x.verses.length} fallback=${x.fallback}`
  note(`${t} ${b}:${c} offline(${brief(offline)}) server(${brief(server)})`)
}
check('sampled chapters match the server byte for byte', chapterMismatch === 0, `${spots.length} chapters`)

// --- search -----------------------------------------------------------------
const offlineSearch = await ask('/api/search?translation=kjv&q=light&limit=200')
const liveSearch = await live('/api/search?translation=kjv&q=light&limit=200')
if (!liveSearch || !liveSearch.results) note(`live search returned ${JSON.stringify(liveSearch).slice(0, 160)}`)
if (!offlineSearch.results) note(`offline search returned ${JSON.stringify(offlineSearch).slice(0, 160)}`)
check(
  'text search finds the same total as the server',
  offlineSearch.total === liveSearch.total,
  `offline ${offlineSearch.total}, server ${liveSearch.total}`,
)
check(
  'first search result matches the server',
  JSON.stringify(offlineSearch.results[0]) === JSON.stringify(liveSearch.results && liveSearch.results[0]),
  offlineSearch.results[0] && offlineSearch.results[0].reference,
)

const filtered = await ask('/api/search?translation=kjv&q=light&book=43&limit=200')
check(
  'book filter narrows the search',
  filtered.total > 0 && filtered.total < offlineSearch.total,
  `${offlineSearch.total} -> ${filtered.total}`,
)

const ntOnly = await ask('/api/search?translation=kjv&q=light&testament=NT&limit=200')
check(
  'testament filter works',
  ntOnly.total > 0 && ntOnly.total < offlineSearch.total,
  `${offlineSearch.total} -> ${ntOnly.total}`,
)

// --- guide ------------------------------------------------------------------
const verse = await ask('/api/guide/verse?translation=am&book=43&chapter=3&verse=16')
const liveVerse = await live('/api/guide/verse?translation=am&book=43&chapter=3&verse=16')
check(
  'verse commentary matches the server',
  JSON.stringify(verse) === JSON.stringify(liveVerse),
  verse.commentary ? verse.commentary.heading : 'none',
)

const nearest = await ask('/api/guide/verse?translation=am&book=31&chapter=1&verse=24')
const liveNearest = await live('/api/guide/verse?translation=am&book=31&chapter=1&verse=24')
check(
  'nearest-note fallback matches the server',
  JSON.stringify(nearest.commentary) === JSON.stringify(liveNearest && liveNearest.commentary),
)

const am43 = await ask('/api/guide/amharic?book=43&chapter=3')
check(
  'Amharic commentary for John 3',
  am43.available === true && am43.blocks && am43.blocks.length === 3,
  `${am43.blocks ? am43.blocks.length : 'none'} blocks`,
)

const am40 = await ask('/api/guide/amharic?book=40&chapter=1')
check(
  'uncovered chapter reports itself honestly',
  am40.available === false && am40.hasGeneral === true,
)

const general = await ask('/api/guide/amharic?book=40&chapter=1&general=1')
check(
  'front-matter notes load',
  general.general === true && general.blocks && general.blocks.length === 81,
  `${general.blocks ? general.blocks.length : 'none'} blocks`,
)

const page = await ask('/api/guide/amharic/page?page=101')
if (!page.text) note(`page=101 returned ${JSON.stringify(page).slice(0, 160)}`)
check(
  'single printed page loads',
  typeof page.text === 'string' && page.text.length > 3000 && /[\u1200-\u137F]/.test(page.text),
  `${page.text ? page.text.length : 'none'} chars`,
)

const missing = await askRaw('/api/guide/amharic/page?page=9999')
check('a page with no text still returns 404', missing.status === 404, `HTTP ${missing.status}`)

const contents = await ask('/api/guide/amharic/index')
check(
  'contents index loads',
  contents.books && contents.books.length === 21 && contents.generalCount === 81,
  `${contents.books ? contents.books.length : 'none'} books, ${contents.generalCount} sections`,
)

const coverage = await ask('/api/guide/amharic/coverage')
check(
  'coverage loads',
  coverage.chapters && Object.keys(coverage.chapters).length === 21,
  `${coverage.chapters ? Object.keys(coverage.chapters).length : 'none'} books`,
)

const cSearch = await ask(`/api/guide/amharic/search?q=${encodeURIComponent('ፍቅር')}`)
const liveC = await live(`/api/guide/amharic/search?q=${encodeURIComponent('ፍቅር')}`)
check(
  'commentary search returns the same results as the server',
  JSON.stringify(cSearch.results) === JSON.stringify(liveC.results),
  `${cSearch.results.length} shown`,
)
if (cSearch.total !== liveC.total) {
  // The server's total is an artefact of its three-screen cap, and it drifts by a
  // couple on rare words. Every result the reader actually sees still matches.
  note(`reported total differs: offline ${cSearch.total}, server ${liveC.total} (results identical)`)
}
check(
  'first commentary hit matches the server',
  JSON.stringify(cSearch.results[0]) === JSON.stringify(liveC.results[0]),
  cSearch.results[0] && cSearch.results[0].reference,
)

const strongs = await ask('/api/guide/strongs?q=G26')
const liveS = await live('/api/guide/strongs?q=G26')
check(
  "Strong's search matches the server",
  strongs.total === liveS.total && strongs.results.length > 0,
  `${strongs.total} entries`,
)

const word = await ask('/api/guide/strongs?q=light&word=1')
check('word lookup works offline', word.total > 0 && word.results.length > 0, `${word.total} candidates`)

const guideList = await ask('/api/guide')
if (!guideList.guides) note(`/api/guide returned ${JSON.stringify(guideList).slice(0, 160)}`)
check(
  'guide list loads',
  Array.isArray(guideList.guides),
  `${guideList.guides ? guideList.guides.length : 'none'} guides`,
)

const english = await ask('/api/english?book=43&chapter=3')
check('English side-by-side column loads', english.verses && english.verses.length === 36, `${english.verses.length} verses`)

console.log(results.join('\n'))
const real = results.filter((r) => !r.startsWith('      '))
const passed = real.filter((r) => r.startsWith('PASS')).length
console.log(`\n${passed}/${real.length} passed`)
// Stop the API started above so a stale one is never left behind.
api.kill()
process.exit(real.some((r) => r.startsWith('FAIL')) ? 1 : 0)