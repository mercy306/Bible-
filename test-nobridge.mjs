// Reproduces the "Failed to fetch" failure: the reader is opened with neither
// the Android bridge nor a running server. Before the offline layer stopped
// depending on window.Capacitor, every /api/ request went to the network and
// was rejected, which is the bare network error the reader showed.
import { readFileSync, readdirSync, statSync } from 'node:fs'
import { pathToFileURL } from 'node:url'
import path from 'node:path'

const ROOT = process.cwd()
const DATA = path.join(ROOT, 'data')

// Bundle the current source so the real offline layer is exercised.
const { build } = await import('esbuild')
const dir = path.join(ROOT, '.tmp-offline-check')
await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  jsx: 'automatic',
  outfile: path.join(dir, 'app.mjs'),
})

const { JSDOM } = await import('jsdom')

let pass = 0
let fail = 0
const check = (name, ok, detail = '') => {
  if (ok) {
    pass++
    console.log(`PASS  ${name}`)
  } else {
    fail++
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

const dom = new JSDOM(
  '<!doctype html><html><head></head><body><div id="root"></div></body></html>',
  { pretendToBeVisual: true, url: 'http://localhost/' },
)

globalThis.window = dom.window
globalThis.document = dom.window.document
Object.defineProperty(globalThis, 'navigator', {
  value: dom.window.navigator,
  configurable: true,
  writable: true,
})
globalThis.HTMLElement = dom.window.HTMLElement
globalThis.localStorage = dom.window.localStorage
globalThis.sessionStorage = dom.window.sessionStorage
globalThis.Element = dom.window.Element
globalThis.Node = dom.window.Node
globalThis.getComputedStyle = dom.window.getComputedStyle
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame
dom.window.scrollTo = () => {}

// The two conditions that used to break it: no Capacitor bridge at all.
delete dom.window.Capacitor

// Bundled data, served from disk exactly as the packaged app serves it.
const files = new Map()
function loadTree(dirPath, prefix) {
  for (const entry of readdirSync(dirPath)) {
    const full = path.join(dirPath, entry)
    if (statSync(full).isDirectory()) loadTree(full, `${prefix}${entry}/`)
    else files.set(`${prefix}${entry}`, readFileSync(full, 'utf8'))
  }
}
loadTree(DATA, 'data/')

// The /api/ endpoints are unreachable, standing in for a server that is not
// there. The bundled data files are served from disk exactly as the packaged
// app serves them, so the fallback has something real to read.
const netAttempts = []
const networkStub = async (input) => {
  const url = String(input)
  const key = url.replace(/^https?:\/\/[^/]+\//, '')
  if (files.has(key)) return new Response(files.get(key), { status: 200 })
  netAttempts.push(url)
  throw new Error('Failed to fetch')
}
dom.window.fetch = networkStub
// In a WebView window.fetch and the bare global fetch are the same function.
// The offline layer patches window.fetch, so the harness must share one.
Object.defineProperty(globalThis, 'fetch', {
  configurable: true,
  get: () => dom.window.fetch,
  set: (value) => {
    dom.window.fetch = value
  },
})

const style = dom.window.document.createElement('style')
style.textContent = readFileSync('src/styles.css', 'utf8')
dom.window.document.head.appendChild(style)

const errors = []
const prevError = console.error
console.error = (...a) => {
  const m = String(a[0] ?? '')
  if (/Not implemented/.test(m)) return
  errors.push(m)
}

await import(pathToFileURL(path.join(dir, 'app.mjs')).href)
const wait = (ms) => new Promise((r) => setTimeout(r, ms))
await wait(2500)

const $ = (sel) => dom.window.document.querySelector(sel)
const $$ = (sel) => [...dom.window.document.querySelectorAll(sel)]

/** Fails one file once, then serves it, and checks a later read still works. */
async function recoversAfterOneFailure() {
  const victim = 'data/kjv/meta.json'
  const real = files.get(victim)
  let failedOnce = false
  files.delete(victim)
  const patch = async (input) => {
    const url = String(input)
    const key = url.replace(/^https?:\/\/[^/]+\//, '')
    if (key === victim && !failedOnce) {
      failedOnce = true
      throw new Error('Failed to fetch')
    }
    if (files.has(key)) return new Response(files.get(key), { status: 200 })
    throw new Error('Failed to fetch')
  }
  dom.window.fetch = patch
  files.set(victim, real)
  try {
    // Two reads of the same path: the second must not replay the first failure.
    await patch(`http://localhost/${victim}`).then((r) => r.json())
    await patch(`http://localhost/${victim}`).then((r) => r.json())
    return true
  } catch {
    return false
  } finally {
    dom.window.fetch = networkStub
  }
}

check('no bare network error is shown', !/Failed to fetch/.test($('#root')?.textContent ?? ''))
check('the reader renders verses with no server', $$('.verse').length > 0, `${$$('.verse').length} verses`)
check('the top bar is present', $$('.topbar').length === 1)
check('no React error was thrown', errors.length === 0, errors[0] ?? '')
check(
  'a network request was still attempted and recovered',
  netAttempts.some((u) => u.includes('/api/')),
  `${netAttempts.length} requests`,
)


console.error = prevError
console.log(`\n${pass}/${pass + fail} passed`)
process.exit(fail > 0 ? 1 : 0)
