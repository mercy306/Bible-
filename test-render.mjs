// Renders the CURRENT source against the real API and checks what appears.
//
// This replaces test-audit.mjs, which is a frozen esbuild snapshot of an older
// build: its app code no longer matches src, so its failures say nothing about
// today's app. It reads src/styles.css live, which made it look current.
import { build } from 'esbuild'
import { readFileSync } from 'node:fs'
import { mkdtempSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { JSDOM } from 'jsdom'

let pass = 0
let fail = 0

function check(name, ok, detail = '') {
  if (ok) {
    pass++
    console.log(`PASS  ${name}`)
  } else {
    fail++
    console.log(`FAIL  ${name}${detail ? ` — ${detail}` : ''}`)
  }
}

const dir = mkdtempSync(join(tmpdir(), 'render-'))
const out = join(dir, 'app.mjs')

await build({
  entryPoints: ['src/main.tsx'],
  bundle: true,
  format: 'esm',
  platform: 'browser',
  jsx: 'automatic',
  outfile: out,
})

await import('./server/index.mjs')
await new Promise((r) => setTimeout(r, 600))

const ORIGIN = process.env.API_ORIGIN ?? 'http://127.0.0.1:4001'
const realFetch = globalThis.fetch
globalThis.fetch = (u, opts) => realFetch(new URL(String(u), ORIGIN), opts)

const dom = new JSDOM('<!doctype html><html><head></head><body><div id="root"></div></body></html>', {
  pretendToBeVisual: true,
  url: 'http://localhost/',
})

globalThis.window = dom.window
globalThis.document = dom.window.document
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true, writable: true })
globalThis.HTMLElement = dom.window.HTMLElement
globalThis.localStorage = dom.window.localStorage
globalThis.sessionStorage = dom.window.sessionStorage
globalThis.Element = dom.window.Element
globalThis.Node = dom.window.Node
globalThis.getComputedStyle = dom.window.getComputedStyle
globalThis.requestAnimationFrame = dom.window.requestAnimationFrame
globalThis.cancelAnimationFrame = dom.window.cancelAnimationFrame

const style = dom.window.document.createElement('style')
style.textContent = readFileSync('src/styles.css', 'utf8')
dom.window.document.head.appendChild(style)

const fatal = []
dom.window.scrollTo = () => {}
dom.window.HTMLElement.prototype.scrollTo = () => {}

const prevError = console.error
console.error = (...a) => {
  const m = String(a[0] ?? '')
  if (/Not implemented/.test(m)) return
  fatal.push(m)
}

await import('file:///' + out.replace(/\\/g, '/'))

const wait = (ms) => new Promise((r) => setTimeout(r, ms))
const $ = (sel) => dom.window.document.querySelector(sel)
const $$ = (sel, scope) => [...(scope ?? dom.window.document).querySelectorAll(sel)]
const click = async (sel) => {
  const el = $(sel)
  if (!el) return false
  el.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }))
  await wait(450)
  return true
}

await wait(1500)

// ---- the reader ----
check('top bar renders', $$('.topbar').length === 1)
check('reading area renders', $$('.main').length === 1)
check('reader article renders', $$('.read').length === 1)
check('no React error was thrown', fatal.length === 0, fatal[0] ?? '')

const verseCount = $$('.verse').length
check('verses render', verseCount === 31, `${verseCount}`)
check('verse numbers show', $$('.verse__n').length === 31, `${$$('.verse__n').length}`)

// The number must ride inside the verse text, not sit in a box beside it.
const inlineNumbers = $$('.verse__n').filter(
  (n) => n.closest('.verse__line') || n.closest('.verse__reveal'),
)
check('every number sits inside its text line', inlineNumbers.length === $$('.verse__n').length, `${inlineNumbers.length}/${$$('.verse__n').length}`)
const nStyle = getComputedStyle($$('.verse__n')[0])
check('the number is inline, not a box', nStyle.display === 'inline', nStyle.display)
check('the number is raised like a printed Bible', nStyle.verticalAlign === 'super', nStyle.verticalAlign)
check('the number has no fixed height', nStyle.height === 'auto' || nStyle.height === '0px', nStyle.height)

// ---- bottom navigation ----
const labels = $$('.botbar__btn').map((b) => b.textContent.trim().replace(/\s+/g, ' '))
check(
  'four sections in the bottom bar',
  $$('.botbar__btn').length === 4,
  labels.join(' | '),
)
check(
  'sections are Bible, Daily, Bookmarks, Prayers',
  /Bible/.test(labels[0] ?? '') && /Daily/.test(labels[1] ?? '') &&
    /Bookmark/i.test(labels[2] ?? '') && /Prayer/i.test(labels[3] ?? ''),
  labels.join(' | '),
)

// ---- chapter paging ----
check('pager renders', $$('.pager').length === 1)
check('chapter button opens the picker', $$('.pager__mid').length === 1)
await click('.pager__mid')
check('chapter sheet lists the chapters', $$('.chaptersheet__btn').length === 50, `${$$('.chaptersheet__btn').length}`)

await click('.chaptersheet__btn:nth-child(2)')
await wait(900)
const pagerMid = $('.pager__mid')?.textContent ?? ''
check('choosing a chapter moves there', /2/.test(pagerMid), pagerMid)

await click('.pager__side--next')
await wait(900)
check('Next moves forward a chapter', /3/.test($('.pager__mid')?.textContent ?? ''), $('.pager__mid')?.textContent ?? '')

await click('.pager__side')
await wait(900)
check('Previous moves back', /2/.test($('.pager__mid')?.textContent ?? ''), $('.pager__mid')?.textContent ?? '')

// ---- tapping a verse opens its actions ----
await click('.verse:nth-child(2)')
check('verse actions open', $$('.vmenu__row').length > 0, `${$$('.vmenu__row').length} rows`)
check('collections offered on a verse', $$('.vmenu__row').some((r) => /Collections|Filed/.test(r.textContent)))
check('listen offered on a verse', $$('.speak').length > 0, `${$$('.speak').length}`)

const collRow = $$('.vmenu__row').find((r) => /Collections|Filed/.test(r.textContent))
if (collRow) {
  collRow.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }))
  await wait(450)
}
check('collections sheet lists the defaults', $$('.mrow--tap').length >= 4, `${$$('.mrow--tap').length}`)

// ---- reading settings must stay reachable ----
await click('.iconbtn--text')
await wait(500)
check('settings sheet opens', $$('.mrow').length > 0, `${$$('.mrow').length} rows`)
check('text size control available', $$('.slider').length > 0, `${$$('.slider').length}`)
check('language control available', $$('.segbar__btn').length > 0, `${$$('.segbar__btn').length}`)

// The sheet is split into three short lists, so the palette is one tap away.
check('the sheet is split into three lists', $$('.mtabs__btn').length === 3, `${$$('.mtabs__btn').length}`)
const lookTab = $$('.mtabs__btn').find((b) => /Look/i.test(b.textContent))
if (lookTab) {
  lookTab.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }))
  await wait(400)
}
check('theme swatches available', $$('.swatches').length > 0, `${$$('.swatches').length}`)

// ---- the older Amharic edition must be reachable ----
const readingTab = $$('.mtabs__btn').find((b) => /Reading/i.test(b.textContent))
if (readingTab) {
  readingTab.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true, cancelable: true }))
  await wait(400)
}
const versionRow = $$('.mrow').find((r) => /Version/.test(r.textContent))
const versionButtons = versionRow ? $$('.segbar__btn', versionRow) : []
const versionLabels = versionButtons.map((b) => b.getAttribute('title') ?? b.textContent.trim())
check('three versions offered', versionButtons.length === 3, versionLabels.join(' | '))
check(
  'the older edition is one of them',
  versionButtons.some((b) => (b.getAttribute('title') ?? '').includes('ብሉይ')),
  versionLabels.join(' | '),
)
const olderToggle = $$('.mrow').find((r) => /Older edition/.test(r.textContent))
check('older-edition comparison available', Boolean(olderToggle))

// ---- English numbers the 2009 text carries inside one verse ----
// Galatians 1 drops its opening superscript, so Amharic verse 1 is blank and
// verse 2 holds English verse 1. The chapter must read "1–2" rather than
// showing English 1, a note, then the same Amharic again under number 2.
dom.window.location.hash = '#/t/am/48/1'
dom.window.dispatchEvent(new dom.window.HashChangeEvent('hashchange'))
await wait(2500)

check(
  'a dropped opening verse folds into the next one',
  $$('.verse__n').some((n) => n.textContent === '1–2'),
  $$('.verse__n').slice(0, 4).map((n) => n.textContent).join(', '),
)
check(
  'the false "not in the text" note is gone',
  $$('.verse__runNote').length === 0,
  `${$$('.verse__runNote').length}`,
)
const galRow = $$('.verse').find((li) => li.querySelector('.verse__n')?.textContent === '1–2')
const galAm = galRow?.querySelector('[lang="am"]')?.textContent ?? ''
const galEn = galRow?.querySelector('[lang="en"]')?.textContent ?? ''
check('the folded row shows the Amharic that holds it', galAm.length > 10, galAm.slice(0, 40))
check('the folded row shows the English for the range', galEn.length > 10, galEn.slice(0, 40))
const galAmLines = $$('.verses [lang="am"]').filter((p) => p.textContent?.includes(galAm.slice(0, 20)))
check('the Amharic is not shown twice in the chapter', galAmLines.length === 1, `${galAmLines.length}`)

// Genesis 26 absorbs English 34 and 35 into its verse 33.
dom.window.location.hash = '#/t/am/1/26'
dom.window.dispatchEvent(new dom.window.HashChangeEvent('hashchange'))
await wait(2500)

const runRows = $$('.verse--run')
check('run rows are shown', runRows.length > 0, `${runRows.length} runs`)
check(
  'a range is labelled with both numbers',
  $$('.verse__n').some((n) => /^\d+–\d+$/.test(n.textContent ?? '')),
  $$('.verse__n--run').map((n) => n.textContent).join(', '),
)
check(
  'no bare dash row is left behind',
  $$('.verse__line--missing').length === 0,
  `${$$('.verse__line--missing').length}`,
)

// The folded ranges already say which numbers they cover, so the old chapter
// note about unnumbered verses is only noise.
const chapterText = $('.read')?.textContent ?? ''
check(
  'no chapter note about unnumbered verses',
  !/not numbered separately|runs them into the surrounding|This verse is not in the 2009/i.test(
    chapterText,
  ),
  chapterText.match(/not numbered separately[^.]*\./i)?.[0] ?? '',
)
check('no run note is rendered', $$('.verse__runNote').length === 0, `${$$('.verse__runNote').length}`)

// ---- the removed feature must stay gone ----
const rootText = dom.window.document.getElementById('root').textContent
check('no study journal remains', !/study journal/i.test(rootText))

console.error = prevError
console.log(`\n${pass}/${pass + fail} passed`)
process.exit(fail > 0 ? 1 : 0)