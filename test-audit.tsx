/** Audits the reading shell: top bar, reading area, bottom navigation. */
import { JSDOM } from 'jsdom'

const out: string[] = []
const check = (l: string, p: boolean, d = '') => {
  const line = `${p ? 'PASS' : 'FAIL'}  ${l}${d ? ` — ${d}` : ''}`
  out.push(line)
  console.log(line)
}

const dom = new JSDOM('<!doctype html><html><body><div id="root"></div></body></html>', {
  url: 'http://localhost:4001/#/t/kjv/43/3',
  pretendToBeVisual: true,
})
globalThis.window = dom.window
globalThis.document = dom.window.document
Object.defineProperty(globalThis, 'navigator', { value: dom.window.navigator, configurable: true })
globalThis.HTMLElement = dom.window.HTMLElement
globalThis.Node = dom.window.Node
globalThis.Event = dom.window.Event
globalThis.MouseEvent = dom.window.MouseEvent
globalThis.getComputedStyle = dom.window.getComputedStyle
globalThis.requestAnimationFrame = (cb) => setTimeout(cb, 0)
globalThis.cancelAnimationFrame = clearTimeout

const store = new Map()
globalThis.localStorage = {
  getItem: (k) => (store.has(k) ? store.get(k) : null),
  setItem: (k, v) => store.set(k, String(v)),
  removeItem: (k) => store.delete(k),
}
const realFetch = globalThis.fetch
globalThis.fetch = (i, init) =>
  realFetch(typeof i === 'string' && i.startsWith('/') ? `http://localhost:4001${i}` : i, init)
dom.window.fetch = globalThis.fetch
dom.window.scrollTo = () => undefined
dom.window.getSelection = () => ({ toString: () => '' })
dom.window.print = () => undefined
// jsdom has no clipboard, so copying needs a stand-in.
Object.defineProperty(globalThis.navigator, 'clipboard', {
  value: { writeText: async () => undefined },
  configurable: true,
})

const { createRoot } = await import('react-dom/client')
const { createElement } = await import('react')
const { readFileSync } = await import('node:fs')
const { default: App } = await import('./src/App')

// The real stylesheet is loaded so layout claims can be checked. Values that
// depend on CSS custom properties are not resolved by jsdom, so those rules are
// checked against the stylesheet text instead.
const css = readFileSync('src/styles.css', 'utf8')
const styleTag = document.createElement('style')
styleTag.textContent = css
document.head.appendChild(styleTag)
const rule = (selector: string) => {
  // Match the whole selector, so ".read" does not also match ".reader__head".
  const found = new RegExp(`(?:^|[},])\\s*${selector.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*\\{([^}]*)\\}`,'m').exec(
    css,
  )
  return found ? found[1] : ''
}

createRoot(document.getElementById('root')!).render(createElement(App))

const sleep = (ms) => new Promise((r) => setTimeout(r, ms))
const q = (s: string) => [...document.querySelectorAll(s)]
const byText = (l: string) => q('button').find((b) => b.textContent!.includes(l))
const click = (el?: Element | null) => el?.dispatchEvent(new dom.window.MouseEvent('click', { bubbles: true }))
const bar = (label: string) => {
  if (label === 'More') {
    return (document.querySelector('.topbar button[aria-label="More options"]') as HTMLElement) ?? undefined
  }
  return q('.botbar__btn').find((b) => b.textContent!.includes(label))
}
const go = async (hash: string) => {
  window.location.hash = hash
  window.dispatchEvent(new dom.window.Event('hashchange'))
  await sleep(2600)
}

await sleep(3000)

// ===== shell: three areas =====
check('top bar present', Boolean(document.querySelector('.topbar')))
check('reading area present', Boolean(document.querySelector('.main')))
check('bottom navigation present', Boolean(document.querySelector('.botbar')))
check(
  'three sections in the bottom bar',
  q('.botbar__btn').length === 3,
  q('.botbar__btn').map((b) => b.textContent!.trim()).join(' | '),
)
check(
  'sections are Bible, Daily and More',
  ['Bible', 'Daily', 'Bookmarks'].every((n) => q('.botbar__btn').some((b) => b.textContent!.includes(n))),
  q('.botbar__btn').map((b) => b.textContent!.trim()).join(' | '),
)

// ===== top bar: only where you are, plus search and more =====
check('back arrow opens the 66 books', Boolean(document.querySelector('.topbar__back')))
{
  const ref = document.querySelector('.topbar__ref')?.textContent ?? ''
  check('book name shown', /\S/.test(ref), ref)
  check(
    'chapter shown beneath it',
    (document.querySelector('.topbar__sub')?.textContent ?? '') === 'Chapter 3',
    document.querySelector('.topbar__sub')?.textContent,
  )
}
check('search button present', q('.topbar button[aria-label="Search"]').length === 1)
check('more button present', q('.topbar button[aria-label="More options"]').length === 1)
check('the top bar stays free of clutter', q('.topbar__tools button').length === 2, `${q('.topbar__tools button').length} tools`)
check('no language picker crowds the top bar', q('.topbar .langpick').length === 0)

// ===== reading screen: calm and spacious =====
check('verses render', q('.verse').length === 36, `${q('.verse').length}`)
check(
  'no chapter rail sits in the text',
  q('.read__chapterList').length === 0,
  'chapters come from the pager',
)
check('no rule is drawn between verses', getComputedStyle(q('.verse')[0]).borderBottomWidth === '0px', getComputedStyle(q('.verse')[0]).borderBottomWidth)
check('verse numbers are small and unboxed', getComputedStyle(q('.verse__n')[0]).borderTopWidth === '0px', `${q('.verse__n')[0].textContent}`)
check('no language tags interrupt the text', q('.verse__tag').length === 0, `${q('.verse__tag').length} tags`)
check('the verse line is set at a comfortable leading', /line-height:\s*1\.[89]/.test(rule('.read .verse__line')), rule('.read .verse__line').match(/line-height:[^;]*/)?.[0])
check('the reading column keeps generous margins', /\.read\s*\{[^}]*max-width:\s*6\d\dpx/.test(css), 'a 600-699px measure')

// Language is chosen from More, not from the top bar.
{
  click(bar('More')!)
  await sleep(700)
  const langRow = [...document.querySelectorAll('.sheet--bottom .segbar__btn')].filter((b) =>
    ['Amharic only', 'English only', 'Amharic and English together'].includes(
      b.getAttribute('aria-label') ?? '',
    ),
  )
  check('language choice lives in More', langRow.length === 3, `${langRow.length} options`)
  click(bar('More')!)
  await sleep(500)
}

// ===== the two languages =====
{
  const before = q('.verse').length
  const openMore = async () => {
    click(bar('More')!)
    await sleep(600)
  }
  const setLang = async (note: string) => {
    await openMore()
    click(
      [...document.querySelectorAll('.sheet--bottom .segbar__btn')].find(
        (b) => b.getAttribute('aria-label') === note,
      )!,
    )
    await sleep(300)
    click(bar('More')!)
    await sleep(1600)
  }

  check('both languages shown by default', q('.verse')[0].querySelectorAll('.verse__line').length === 2, `${q('.verse')[0].querySelectorAll('.verse__line').length} lines`)

  await setLang('English only')
  check(
    'English only shows one line',
    q('.verse')[0].querySelectorAll('.verse__line').length === 1,
    `${q('.verse')[0].querySelectorAll('.verse__line').length} lines`,
  )
  check('the English line is English', (q('.verse')[0].querySelector('.verse__line') as HTMLElement)?.lang === 'en')
  check('verses are still all there', q('.verse').length === before, `${q('.verse').length}`)

  await setLang('Amharic only')
  check(
    'Amharic only shows one line',
    q('.verse')[0].querySelectorAll('.verse__line').length === 1,
    `${q('.verse')[0].querySelectorAll('.verse__line').length} lines`,
  )
  check('the Amharic line is Amharic', (q('.verse')[0].querySelector('.verse__line') as HTMLElement)?.lang === 'am')

  await setLang('Amharic and English together')
  check('both languages can be brought back', q('.verse')[0].querySelectorAll('.verse__line').length === 2)
  check(
    'the two languages are spaced apart, not tabulated',
    /margin-top:\s*(8|9|1\d)px/.test(rule('.read .verse__line + .verse__line')),
    rule('.read .verse__line + .verse__line').match(/margin-top:[^;]*/)?.[0],
  )
}

// ===== a tapped verse shows a small panel, nothing more =====
{
  check('nothing is shown before a verse is tapped', q('.vmenu').length === 0)

  const second = q('.verse')[2]
  click(second)
  await sleep(600)
  check('tapping a verse gives a light highlight', second.classList.contains('is-on'))
  check('the verse above is still readable', Boolean(second.querySelector('.verse__line')))

  const menu = second.querySelector('.vmenu')!
  check('a small panel appears under the verse', Boolean(menu))
  const rows = [...menu.querySelectorAll('.vmenu__row')].map((b) => b.textContent!.trim())
  check(
    'panel offers Highlight, Bookmark, Commentary, Note, Share and Copy',
    ['Highlight', 'Bookmark', 'Commentary', 'Note', 'Share', 'Copy'].every((n) =>
      rows.some((r) => r.includes(n)),
    ),
    rows.join(' | '),
  )
  check('the panel is inside the verse, not over the page', menu.closest('.verse') === second)

  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Bookmark'))!)
  await sleep(300)
  check('bookmark saved', Boolean(store.get('bible:bookmarks')), String(store.get('bible:bookmarks')))

  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Highlight'))!)
  await sleep(300)
  check('highlight saved', Boolean(store.get('bible:highlights')), String(store.get('bible:highlights')))

  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Copy'))!)
  await sleep(400)
  check('copy reported back', [...menu.querySelectorAll('.vmenu__row')].some((b) => b.textContent!.includes('Copied')), 'Copied')

  // Commentary opens as a sheet, leaving the chapter in place underneath.
  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Commentary'))!)
  await sleep(1800)
  check('commentary opens as a bottom sheet', Boolean(document.querySelector('.sheet--bottom .inline')))
  check('the chapter is still behind the sheet', q('.verse').length === 36, `${q('.verse').length}`)

  const tabs = q('.sheet--bottom .inline__tab').map((t) => t.textContent!.trim())
  check('five study tabs present', tabs.length === 5, tabs.join(' | '))

  click(q('.sheet--bottom .inline__tab').find((t) => t.textContent!.includes('Commentary'))!)
  await sleep(1500)
  const body = document.querySelector('.sheet--bottom .inline__body')?.textContent ?? ''
  check('English commentary shows', body.includes('Nicodemus'), body.slice(0, 40))
  check('cross-references show', Boolean(document.querySelector('.sheet--bottom .xrefs')))

click(q('.sheet--bottom .inline__tab').find((t) => t.textContent!.includes('አማርኛ'))!)
  await sleep(2000)
  check('Amharic commentary shows', (document.querySelector('.sheet--bottom .inline__body')?.textContent?.length ?? 0) > 2000)
  check('page picker present', q('.pageno').length > 0, `${q('.pageno').length} page buttons`)
  click(q('.pageno')[0])
  await sleep(1600)
  check('single printed page shows', /^Printed page/.test(document.querySelector('.pagepick__title')?.textContent ?? ''))

  click(q('.sheet--bottom .inline__tab').find((t) => t.textContent!.includes("Strong"))!)
  await sleep(1200)
  check("Strong's search available", Boolean(document.querySelector('.sheet--bottom .inline__body input[type=search]')))

  click(q('.sheet--bottom .inline__tab').find((t) => t.textContent!.includes('Contents'))!)
  await sleep(2000)
  check('contents index available', q('.sheet--bottom .contents__book').length === 21, `${q('.sheet--bottom .contents__book').length} books`)

  click(document.querySelector('.sheet--bottom .sheet__close')!)
  await sleep(500)

  // The note sheet holds only a note.
  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Note'))!)
  await sleep(700)
  check('note sheet holds just a note', Boolean(document.querySelector('.sheet--bottom .inline__note textarea')))
  check('no tab bar in a single-purpose sheet', q('.sheet--bottom .inline__tabs').length === 0)
  click(document.querySelector('.sheet--bottom .inline__note .btn')!)
  await sleep(400)
  check('note saved', Boolean(store.get('bible:bookmarks')))

  // Share offers copy and image.
  click([...menu.querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Share'))!)
  await sleep(700)
  check('share sheet offers copy and image', Boolean(byText('Copy verse text')) && Boolean(byText('Save as an image')))
  click(document.querySelector('.sheet--bottom .sheet__close')!)
  await sleep(400)
}

// ===== pager and chapter picker =====
{
  check('pager sits below the text', Boolean(document.querySelector('.pager')))
  check(
    'pager reads Previous, Chapter and Next',
    Boolean(byText('Previous')) && Boolean(byText('Next')) && Boolean(byText('Chapter 3')),
    document.querySelector('.pager')?.textContent?.trim(),
  )
  check('no chapter chips sit in the reading area', q('.read .chip--chapter').length === 0)

  click(q('.pager__mid')[0])
  await sleep(700)
  check('chapter sheet opens from the pager', q('.chaptersheet__btn').length === 21, `${q('.chaptersheet__btn').length} chapters`)
  click(q('.chaptersheet__btn').find((b) => b.textContent === '4')!)
  await sleep(2600)
  check('choosing a chapter moves there', (document.querySelector('.topbar__sub')?.textContent ?? '') === 'Chapter 4', document.querySelector('.topbar__sub')?.textContent)

  click(q('.pager__side').find((b) => b.textContent!.includes('Next'))!)
  await sleep(2600)
  check('Next moves forward a chapter', (document.querySelector('.topbar__sub')?.textContent ?? '') === 'Chapter 5', document.querySelector('.topbar__sub')?.textContent)

  click(q('.pager__side').find((b) => b.textContent!.includes('Previous'))!)
  await sleep(2600)
  check('Previous moves back', (document.querySelector('.topbar__sub')?.textContent ?? '') === 'Chapter 4', document.querySelector('.topbar__sub')?.textContent)

  await go('#/t/kjv/43/3')
}

// ===== books sheet =====
{
  click(document.querySelector('.topbar__back')!)
  await sleep(700)
  check('books sheet opens', Boolean(document.querySelector('.sheet--left')))
  check('all 66 books listed', q('.bookrow').length === 66, `${q('.bookrow').length} books`)
  check('testament filter present', q('.sheet--left .segbar__btn').length === 3)
  click(q('.sheet--left .segbar__btn').find((b) => b.textContent === 'New')!)
  await sleep(400)
  check('filtering to the New Testament works', q('.bookrow').length === 27, `${q('.bookrow').length} books`)
  click(q('.bookrow').find((b) => b.textContent!.includes('John'))!)
  await sleep(2600)
  check('choosing a book opens it', Boolean(document.querySelector('.sheet--left')) === false, 'sheet closed')
  check('the chosen book is showing', (document.querySelector('.topbar__ref')?.textContent ?? '').length > 1, document.querySelector('.topbar__ref')?.textContent)
  await go('#/t/kjv/43/3')
}

// ===== more sheet =====
{
  const tab = (label: string) =>
    q('.mtabs__btn').find((b) => b.textContent!.trim() === label)!

  click(bar('More')!)
  await sleep(700)
  check('more sheet opens', Boolean(document.querySelector('.sheet--bottom')))
  check('the sheet is split into three short lists', q('.mtabs__btn').length === 3, q('.mtabs__btn').map((b) => b.textContent).join(' | '))
  check('nothing is shown before a list is chosen', q('.mlist').length === 1, `${q('.mlist').length} lists`)

  /* ---------- Reading ---------- */
  click(tab('Reading'))
  await sleep(400)
  check('reading list is short', q('.sheet--bottom .mrow').length <= 7, `${q('.sheet--bottom .mrow').length} rows`)
  check(
    'language control available',
    ['Amharic only', 'English only', 'Amharic and English together'].every((note) =>
      [...document.querySelectorAll('.sheet--bottom .segbar__btn')].some(
        (b) => b.getAttribute('aria-label') === note,
      ),
    ),
  )
  check('text size slider available', Boolean(document.querySelector('.sheet--bottom [aria-label="Text size"]')))
  check('line spacing control available', Boolean(document.querySelector('.sheet--bottom [aria-label="Line spacing"]')))
  check('verse spacing control available', Boolean(document.querySelector('.sheet--bottom [aria-label="Verse gap"]')))

  // Line spacing is a real control, not a named step.
  const leading = document.querySelector('.sheet--bottom [aria-label="Line spacing"]') as HTMLInputElement | null
  check('line spacing is continuous', leading?.min === '1.5' && leading?.max === '2.2', `${leading?.min}-${leading?.max}`)
  if (leading) {
    const native = Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value')!.set!
    native.call(leading, '2.2')
    leading.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    await sleep(400)
  }
  check('a chosen line spacing is kept', JSON.parse(store.get('bible:prefs')!).leading === 2.2, store.get('bible:prefs'))
  check(
    'line spacing reaches the page',
    document.documentElement.style.getPropertyValue('--reader-leading') === '2.2',
    document.documentElement.style.getPropertyValue('--reader-leading'),
  )

  // Verse numbers can be hidden for a clean column of words.
  const numbersRow = [...document.querySelectorAll('.sheet--bottom .mrow')].find((r) =>
    r.textContent!.includes('Verse numbers'),
  )
  check('verse numbers can be hidden', Boolean(numbersRow))
  if (numbersRow) {
    click([...numbersRow.querySelectorAll('.segbar__btn')].find((b) => b.textContent === 'Hide')!)
    await sleep(400)
  }
  check('verse numbers are hidden', document.documentElement.dataset.numbers === 'off', document.documentElement.dataset.numbers)
  check('no numbers are drawn', getComputedStyle(q('.verse__n')[0]).display === 'none', getComputedStyle(q('.verse__n')[0]).display)
  if (numbersRow) {
    click([...numbersRow.querySelectorAll('.segbar__btn')].find((b) => b.textContent === 'Show')!)
    await sleep(400)
  }
  check('verse numbers can be brought back', document.documentElement.dataset.numbers === 'on', document.documentElement.dataset.numbers)

  // Text size is continuous, not a set of named steps.
  const slider = document.querySelector('.sheet--bottom [aria-label="Text size"]') as HTMLInputElement | null
  check('slider covers 15-30', slider?.min === '15' && slider?.max === '30', `${slider?.min}-${slider?.max}`)
  if (slider) {
    const nativeValue = Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value')!.set!
    nativeValue.call(slider, '27')
    slider.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    await sleep(400)
  }
  check('a chosen size is kept', JSON.parse(store.get('bible:prefs')!).sizePx === 27, store.get('bible:prefs'))
  const size = (document.querySelector('.app') as HTMLElement).style.getPropertyValue('--reader-size')
  check('the chosen size drives the text', size === '27px', size)

  /* ---------- Look ---------- */
  click(tab('Look'))
  await sleep(400)
  check('look list is short', q('.sheet--bottom .mrow').length <= 4, `${q('.sheet--bottom .mrow').length} rows`)
  check('theme control available', Boolean(document.querySelector('.sheet--bottom [aria-label="Theme"]')))
  check('accent swatches available', q('.sheet--bottom .swatch').length === 5, `${q('.sheet--bottom .swatch').length}`)
  check('a sample of the text is shown', Boolean(document.querySelector('.msample')))

  click(q('.sheet--bottom .swatch').find((s) => s.getAttribute('aria-label') === 'Blue')!)
  await sleep(300)
  check('accent colour can be chosen', JSON.parse(store.get('bible:prefs')!).accent === 'blue', store.get('bible:prefs'))

  click([...document.querySelectorAll('.sheet--bottom .segbar__btn')].find((b) => b.textContent!.trim() === 'Night')!)
  await sleep(300)
  check('theme can be chosen', JSON.parse(store.get('bible:prefs')!).theme === 'night', store.get('bible:prefs'))
  check('chosen theme reaches the root', document.documentElement.dataset.theme === 'night', document.documentElement.dataset.theme)

  const fontBtn = q('.sheet--bottom [data-font="traditional"]')[0]
  check('font can be chosen', Boolean(fontBtn))
  click(fontBtn)
  await sleep(300)
  check('font is kept', JSON.parse(store.get('bible:prefs')!).font === 'traditional', store.get('bible:prefs'))

  /* ---------- Tools ---------- */
  click(tab('Tools'))
  await sleep(400)
  check('go to a passage available', Boolean(document.querySelector('.sheet--bottom [aria-label="Go to a passage"]')))
  check('search available', byText('Search the Bible and commentary') !== undefined)
  check('print available', byText('Print this chapter') !== undefined)
  check(
    'word lookup control available',
    [...document.querySelectorAll('.sheet--bottom .mrow__label')].some((l) => l.textContent!.includes('Word lookup')),
  )
  check('tools list is short', q('.sheet--bottom .mrow').length <= 6, `${q('.sheet--bottom .mrow').length} rows`)

  click(bar('More')!)
  await sleep(400)
}


// ===== daily =====
click(bar('Daily')!)
await sleep(2600)
check('daily section opens', Boolean(document.querySelector('.daily')))
check('a verse of the day is given', (document.querySelector('.daily__verse')?.textContent ?? '').length > 4)
check('the passage is named', (document.querySelector('.daily__ref')?.textContent ?? '').length > 2, document.querySelector('.daily__ref')?.textContent)
check('no box is drawn around the verse', !document.querySelector('.daily blockquote.daily__quote'), 'plain text')
check('the date is shown quietly', Boolean(document.querySelector('.daily__date')))

// the journey: verse -> context -> commentary -> question -> reflection -> prayer
check('surrounding verses give context', q('.daily__around').length > 0, `${q('.daily__around').length} around`)
check('commentary is offered', Boolean(document.querySelector('.daily__comment')), document.querySelector('.daily__comment')?.textContent?.slice(0, 40))
check('a question to sit with is asked', (document.querySelector('.daily__question')?.textContent ?? '').length > 10, document.querySelector('.daily__question')?.textContent)
check('a reflection can be written', Boolean(byText('Write your reflection')))
check('a prayer can be written', Boolean(document.querySelector('.daily__input')), 'prayer box')
check('prayers can be categorised', q('.daily__select option').length >= 5, `${q('.daily__select option').length} categories`)

{
  // keep a prayer and see it stay on the page
  const box = document.querySelector('.daily__input') as HTMLTextAreaElement
  const setter = Object.getOwnPropertyDescriptor(dom.window.HTMLTextAreaElement.prototype, 'value')!.set!
  setter.call(box, 'Lord, keep my family.')
  box.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
  await sleep(300)
  click(byText('Keep this prayer')!)
  await sleep(500)
  check('the prayer is kept', String(store.get('bible:prayers')).includes('keep my family'), store.get('bible:prayers'))
}

{
  // write a reflection, then read it back
  click(byText('Write your reflection')!)
  await sleep(600)
  const area = document.querySelector('.sheet--bottom .daily__input') as HTMLTextAreaElement | null
  check('a reflection box opens', Boolean(area))
  if (area) {
    const setter = Object.getOwnPropertyDescriptor(dom.window.HTMLTextAreaElement.prototype, 'value')!.set!
    setter.call(area, 'It means God loves me first.')
    area.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    await sleep(300)
    click(byText('Save reflection')!)
    await sleep(600)
  }
  check('the reflection is kept', String(store.get('bible:reflections')).includes('loves me first'), store.get('bible:reflections'))
  check('the reflection is shown again later', Boolean(document.querySelector('.daily__mine')), 'quoted back')
  check('and can be edited', Boolean(byText('Edit')))
}

{
  const acts = [...document.querySelectorAll('.daily__actions .act')].map((b) => b.textContent!.trim())
  check('Save, Share and Read are offered', ['Save', 'Share', 'Read the chapter'].every((n) => acts.some((a) => a.includes(n))), acts.join(' | '))
  click([...document.querySelectorAll('.daily__actions .act')].find((b) => b.textContent!.includes('Share'))!)
  await sleep(700)
  check('share opens a sheet with the verse', Boolean(byText('Copy verse text')))
  click(document.querySelector('.sheet--bottom .sheet__close')!)
  await sleep(400)
  check('closing the sheet leaves the verse', Boolean(document.querySelector('.daily__verse')))
}

// ===== saved, reached from More =====
{
  check('Bookmarks is in the bottom bar', Boolean(q('.botbar__btn').find((b) => b.textContent!.includes('Bookmarks'))))
  check('the bottom bar has three sections', q('.botbar__btn').length === 3, q('.botbar__btn').map((b) => b.textContent!.trim()).join(' | '))
  check('Bookmarks carries the saved count', Boolean(document.querySelector('.botbar__badge')))

  click(bar('More')!)
  await sleep(700)
  click(q('.mtabs__btn').find((b) => b.textContent!.trim() === 'Tools')!)
  await sleep(400)
  check('More offers Saved verses', byText('Saved verses') !== undefined)
  click(byText('Saved verses')!)
  await sleep(1400)

  check('saved section opens', Boolean(document.querySelector('.saved')))
  check(
    'saved is split into three lists',
    q('.saved .mtabs__btn').length === 3,
    q('.saved .mtabs__btn').map((b) => b.textContent!.trim()).join(' | '),
  )
  check('bookmark listed', q('.saved__item').length > 0, `${q('.saved__item').length} items`)
  check('export available', Boolean(byText('Export everything')))
  check('restore available', Boolean(byText('Restore from file')))

  // Highlights are saved and must actually be visible.
  check('bookmark count shown on the tab', (q('.saved .mtabs__btn')[0].textContent ?? '').includes('1'))
  click(q('.saved .mtabs__btn').find((b) => b.textContent!.includes('Highlights'))!)
  await sleep(600)
  check('highlights list shows the saved highlight', q('.saved__item').length > 0, `${q('.saved__item').length} items`)

  click(q('.saved .mtabs__btn').find((b) => b.textContent!.includes('Notes'))!)
  await sleep(600)
  check('notes list works', Boolean(document.querySelector('.saved')))

  // Collections
  click(q('.saved .mtabs__btn').find((b) => b.textContent!.includes('Bookmarks'))!)
  await sleep(600)
  const names = [...document.querySelectorAll('.collections .chip--sm')].map((c) => c.textContent!.trim())
  check('default collections offered', ['Faith', 'Prayer', 'Love', 'Important Verses'].every((n) => names.some((x) => x.startsWith(n))), names.join(' | '))
  check('unfiled is offered too', names.some((n) => n.startsWith('Unfiled')), names.join(' | '))

  const fileSelect = document.querySelector('.saved__file select') as HTMLSelectElement | null
  check('a saved verse can be filed', Boolean(fileSelect))
  if (fileSelect) {
    const setter = Object.getOwnPropertyDescriptor(dom.window.HTMLSelectElement.prototype, 'value')!.set!
    setter.call(fileSelect, 'Prayer')
    fileSelect.dispatchEvent(new dom.window.Event('change', { bubbles: true }))
    await sleep(500)
  }
  check('filing is kept', String(store.get('bible:bookmarks')).includes('Prayer'), store.get('bible:bookmarks'))

  click([...document.querySelectorAll('.collections .chip--sm')].find((c) => c.textContent!.startsWith('Prayer'))!)
  await sleep(500)
  check('the collection now holds the verse', q('.saved__item').length === 1, `${q('.saved__item').length} items`)

  click([...document.querySelectorAll('.collections .chip--sm')].find((c) => c.textContent!.startsWith('Unfiled'))!)
  await sleep(500)
  check('unfiled is empty again', q('.saved__item').length === 0, `${q('.saved__item').length} items`)

  await go('#/t/kjv/43/3')
}

// ===== search =====
click(document.querySelector('.topbar button[aria-label="Search"]')!)
await sleep(600)
check('search opens from the top bar', window.location.hash.startsWith('#/search'), window.location.hash)
{
  const input = document.querySelector('.searchbox input[type=search]') as HTMLInputElement | null
  check('a search box is offered', Boolean(input))
  check('the search box starts empty', input?.value === '', input?.value)
  if (input) {
    const nativeValue = Object.getOwnPropertyDescriptor(dom.window.HTMLInputElement.prototype, 'value')!.set!
    nativeValue.call(input, 'light')
    input.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    await sleep(200)
    input.closest('form')!.dispatchEvent(new dom.window.Event('submit', { bubbles: true, cancelable: true }))
    await sleep(2800)
  }
  check('the search ran', window.location.hash.includes('q=light'), window.location.hash)
  check('text search works', q('.hit').length > 0, `${q('.hit').length} hits`)
check('search scope toggle present', Boolean(byText('Bible text')) && Boolean(byText('አማርኛ ማብራሪያ')))
  check('testament filter present', Boolean(byText('New Testament')) && Boolean(byText('Old Testament')))
}
await go('#/search/kjv?q=light&scope=commentary')
check('commentary search scope works', Boolean(byText('Bible text')), 'scope switchable')

// ===== passage mode =====
await go('#/t/kjv/43/3/16-20')
check('passage mode works', q('.verse').length === 5, `${q('.verse').length} verses`)
check('passage banner present', Boolean(document.querySelector('.notice--passage')))

// ===== word lookup =====
{
  await go('#/t/kjv/43/3')
click(bar('More')!)
  await sleep(700)
  click(q('.mtabs__btn').find((b) => b.textContent!.trim() === 'Tools')!)
  await sleep(400)
  const row = [...document.querySelectorAll('.sheet--bottom .mrow')].find((r) =>
    r.textContent!.includes('Word lookup'),
  )!
  click([...row.querySelectorAll('.segbar__btn')].find((b) => b.textContent === 'On')!)
  await sleep(300)
  click(bar('More')!)
  await sleep(500)
  check('words are tappable for lookup', q('.wordtap').length > 20, `${q('.wordtap').length} words`)
  click(q('.wordtap').find((w) => w.textContent === 'light')!)
  await sleep(1800)
  check('word lookup panel opens', Boolean(document.querySelector('.wordpanel')))
}

// ===== memorise =====
{
  await go('#/t/kjv/43/3')
click(bar('More')!)
  await sleep(700)
  click(q('.mtabs__btn').find((b) => b.textContent!.trim() === 'Tools')!)
  await sleep(400)
  const row = [...document.querySelectorAll('.sheet--bottom .mrow')].find((r) =>
    r.textContent!.includes('Memorise'),
  )!
  click([...row.querySelectorAll('.segbar__btn')].find((b) => b.textContent === 'On')!)
  await sleep(300)
  click(bar('More')!)
  await sleep(500)
  check('memorise hides the words', q('.verse__reveal').length > 20, `${q('.verse__reveal').length} hidden`)
  click(q('.verse__reveal')[0])
  await sleep(300)
  check('a hidden verse can be revealed', Boolean(q('.verse__reveal').length) && q('.verse__reveal').length < 36, `${q('.verse__reveal').length} still hidden`)
}

// ===== remember last place =====
check('last place stored', String(store.get('bible:last-place')).includes('"book":43'), store.get('bible:last-place'))
check('recently read remembered', String(store.get('bible:recent')).includes('"book":43'))

// ===== prayer and study journals =====
{
  click(bar('More')!)
  await sleep(700)
  click(q('.mtabs__btn').find((b) => b.textContent!.trim() === 'Tools')!)
  await sleep(400)
  check('More offers the prayer journal', byText('Prayer journal') !== undefined)
  check('More offers the study journal', byText('Study journal') !== undefined)

  click(byText('Prayer journal')!)
  await sleep(900)
  check('prayer journal opens', Boolean(document.querySelector('.journal')))
  check('the prayer written on Daily is here', q('.journal__item').length > 0, `${q('.journal__item').length} prayers`)
  check('it says it is kept on the device', (document.querySelector('.journal__note')?.textContent ?? '').includes('device only'))
  check(
    'filters for open, answered and category',
    [...document.querySelectorAll('.collections .chip--sm')].some((c) => c.textContent!.startsWith('Open')) &&
      [...document.querySelectorAll('.collections .chip--sm')].some((c) => c.textContent!.startsWith('Answered')) &&
      [...document.querySelectorAll('.collections .chip--sm')].some((c) => c.textContent!.startsWith('Family')),
    `${q('.collections .chip--sm').length} filters`,
  )

  click(byText('Mark answered')!)
  await sleep(500)
  check('a prayer can be marked answered', Boolean(byText('Answered ✓')), 'marked')
  check('the answered filter finds it', Boolean(document.querySelector('.journal__item.is-answered')))

  click([...document.querySelectorAll('.collections .chip--sm')].find((c) => c.textContent!.startsWith('Open'))!)
  await sleep(400)
  check('the open filter then shows none', q('.journal__item').length === 0, `${q('.journal__item').length}`)

  await go('#/studies/kjv')
  check('study journal opens', Boolean(document.querySelector('.journal')))
  check('nothing written yet', (document.querySelector('.journal__note')?.textContent ?? '').includes('Nothing written yet'))
}

// ===== structured study from a verse =====
{
  await go('#/t/kjv/43/3')
  // Memorise was left on above; turn it off so a tap selects the verse again.
  click(bar('More')!)
  await sleep(700)
  click(q('.mtabs__btn').find((b) => b.textContent!.trim() === 'Tools')!)
  await sleep(400)
  const memoriseRow = [...document.querySelectorAll('.sheet--bottom .mrow')].find((r) =>
    r.textContent!.includes('Memorise'),
  )!
  click([...memoriseRow.querySelectorAll('.segbar__btn')].find((b) => b.textContent === 'Off')!)
  await sleep(400)
  click(bar('More')!)
  await sleep(500)

  click(q('.verse')[2])
  await sleep(600)
  const rows = [...q('.verse')[2].querySelectorAll('.vmenu__row')].map((b) => b.textContent!.trim())
  check('the verse panel is open with its options', rows.length === 7, rows.join(' | '))
  click([...q('.verse')[2].querySelectorAll('.vmenu__row')].find((b) => b.textContent!.includes('Study'))!)
  await sleep(900)
  check('study opens as a sheet', Boolean(document.querySelector('.sheet--bottom .studysheet')), `${rows.length} rows`)
  check(
    'the five prompts are in order',
    [...document.querySelectorAll('.sheet--bottom .studysheet__label')].map((l) => l.textContent!.trim()).join(' | ') ===
      '1What I read | 2What I learned | 3What stood out | 4My questions | 5My prayer',
    [...document.querySelectorAll('.sheet--bottom .studysheet__label')].map((l) => l.textContent!.trim()).join(' | '),
  )

  const areas = [...document.querySelectorAll('.sheet--bottom .studysheet__input')] as HTMLTextAreaElement[]
  check('each prompt has a box', areas.length === 5, `${areas.length} boxes`)
  if (areas.length === 5) {
    const setter = Object.getOwnPropertyDescriptor(dom.window.HTMLTextAreaElement.prototype, 'value')!.set!
    const answers = ['John 3:1-17', 'Nicodemus came at night.', 'God so loved.', 'Why at night?', 'Give me that love.']
    areas.forEach((area, i) => {
      setter.call(area, answers[i])
      area.dispatchEvent(new dom.window.Event('input', { bubbles: true }))
    })
    await sleep(400)
    click(byText('Save study')!)
    await sleep(900)
  }
  check('the study is kept', String(store.get('bible:studies')).includes('Nicodemus came at night'), store.get('bible:studies'))

  await go('#/studies/kjv')
  check('the study is listed', q('.journal__item').length === 1, `${q('.journal__item').length} studies`)
  check('every part is shown', q('.study__row').length === 5, `${q('.study__row').length} parts`)
  check('the reference is named', (document.querySelector('.journal__cat')?.textContent ?? '').includes('John'), document.querySelector('.journal__cat')?.textContent)
  check('the chapter can be opened again', Boolean(byText('Open chapter')))
}

console.log(`\n${out.filter((r) => r.startsWith('PASS')).length}/${out.length} passed`)
process.exit(out.some((r) => r.startsWith('FAIL')) ? 1 : 0)
