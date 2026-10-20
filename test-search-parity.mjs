/** Compares the offline commentary search against the server, hit by hit. */
const realFetch = globalThis.fetch
const DATA = 'C:/Users/bsd/Desktop/surp/bible/data'

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
globalThis.fetch = async (input) => {
  const url = String(input)
  if (!url.includes('/api/')) {
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

const { readdirSync, readFileSync, statSync } = await import('node:fs')
function loadTree(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = `${dir}/${entry}`
    if (statSync(full).isDirectory()) loadTree(full, `${prefix}${entry}/`)
    else if (entry.endsWith('.json')) bundles.set(`${prefix}${entry}`, JSON.parse(readFileSync(full, 'utf8')))
  }
}
loadTree(DATA, 'data/')

const ask = (path) => globalThis.window.fetch(`http://localhost${path}`).then((r) => r.json())

for (const word of ['ፍቅር', 'አምላክ', 'ጸሎች']) {
  const q = encodeURIComponent(word)
  const offline = await ask(`/api/guide/amharic/search?q=${q}`)
  const server = await (await realFetch(`http://localhost:4001/api/guide/amharic/search?q=${q}`)).json()

  const mine = offline.results.map((r) => `${r.reference}|${r.snippet}`)
  const theirs = server.results.map((r) => `${r.reference}|${r.snippet}`)
  const identical = mine.length === theirs.length && mine.every((v, i) => v === theirs[i])

  console.log(`\n"${word}"`)
  console.log(`  visible results: offline ${mine.length}, server ${theirs.length} -> ${identical ? 'IDENTICAL' : 'DIFFER'}`)
  console.log(`  reported total:  offline ${offline.total}, server ${server.total}`)

  if (!identical) {
    for (let i = 0; i < Math.max(mine.length, theirs.length); i += 1) {
      if (mine[i] !== theirs[i]) {
        console.log(`  first difference at #${i}`)
        console.log(`    offline: ${String(mine[i]).slice(0, 90)}`)
        console.log(`    server : ${String(theirs[i]).slice(0, 90)}`)
        break
      }
    }
  }
}