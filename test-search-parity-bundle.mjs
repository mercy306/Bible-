var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// src/offline.ts
var offline_exports = {};
__export(offline_exports, {
  installOfflineApi: () => installOfflineApi
});
async function load(path) {
  let pending = cache.get(path);
  if (!pending) {
    pending = fetch(new URL(`data/${path}`, document.baseURI).href).then(async (res) => {
      if (!res.ok) throw new Error(`bundled data missing: ${path}`);
      return res.json();
    });
    cache.set(path, pending);
  }
  return pending;
}
async function bookNames() {
  const list = await index();
  const names = /* @__PURE__ */ new Map();
  for (const entry of list) {
    try {
      const m = await meta(entry.id);
      for (const b of m.books) if (!names.has(b.nr)) names.set(b.nr, b.name);
    } catch {
    }
  }
  return names;
}
async function flatOrder(m) {
  const order = [];
  for (const info of m.books) {
    const raw = await load(`${m.id}/books/${bookKey(info.nr)}.json`).catch(() => null);
    for (const c of raw?.chapters ?? []) order.push({ book: info.nr, chapter: c.c });
  }
  return order;
}
async function translations() {
  return index();
}
async function books(translation) {
  const m = await meta(translation).catch(() => null);
  if (!m) throw new HttpError(404, `Translation not downloaded: ${translation}`);
  return {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      direction: m.direction,
      credit: m.credit,
      complete: m.complete
    },
    groups: GROUPS,
    // Passed through unchanged so fields like gapChapters survive.
    books: m.books
  };
}
async function chapter(translation, bookNr, chapterNr) {
  const m = await meta(translation).catch(() => null);
  if (!m) throw new HttpError(404, "Translation not downloaded");
  const info = m.books.find((b) => b.nr === bookNr);
  if (!info) throw new HttpError(404, `No book ${bookNr} in ${translation}`);
  const raw = await load(`${translation}/books/${bookKey(bookNr)}.json`);
  const found = raw.chapters.find((c) => c.c === chapterNr);
  if (!found) throw new HttpError(404, `${info.name} has no chapter ${chapterNr}`);
  const totalChapters = raw.chapters.length;
  const order = await flatOrder(m);
  const at = order.findIndex((p) => p.book === bookNr && p.chapter === chapterNr);
  const prev = chapterNr > 1 ? { book: bookNr, chapter: chapterNr - 1 } : at > 0 ? order[at - 1] : null;
  const next = chapterNr < totalChapters ? { book: bookNr, chapter: chapterNr + 1 } : at >= 0 && at < order.length - 1 ? order[at + 1] : null;
  const englishVerses = raw.gaps?.[String(chapterNr)]?.want ?? found.v.length;
  const present = new Set(found.v.map(([v]) => v));
  const grouped = [];
  for (let v = 1; v <= englishVerses; v += 1) {
    const text = found.v.find(([n]) => n === v)?.[1];
    if (!present.has(v) || !text || text.trim() === "") grouped.push(v);
  }
  const slots = Math.max(englishVerses, found.v.length);
  return {
    translation: {
      id: m.id,
      name: m.name,
      lang: m.lang,
      language: m.language,
      credit: m.credit
    },
    book: { nr: bookNr, name: info.name, group: info.group, testament: info.testament },
    chapter: chapterNr,
    verseCount: info.verses,
    chapterCount: totalChapters,
    reference: `${info.name} ${chapterNr}`,
    englishVerses,
    slots,
    grouped,
    verses: found.v.map(([verse, text]) => ({ verse, text })),
    prev,
    next,
    gap: raw.gaps?.[String(chapterNr)] ?? null,
    blankVerses: grouped.length,
    fallback: found.fallback === true
  };
}
async function english(bookNr, chapterNr, translation) {
  const raw = await load(`${translation}/books/${bookKey(bookNr)}.json`);
  const found = raw.chapters.find((c) => c.c === chapterNr);
  if (!found) throw new HttpError(404, `No chapter ${chapterNr}`);
  return {
    book: bookNr,
    chapter: chapterNr,
    translation,
    verses: found.v.map(([verse, text]) => ({ verse, text }))
  };
}
async function search(translation, query, testament, onlyBook) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return { query, total: 0, results: [] };
  const rows = await load(`raw/search-${translation}.json`);
  const limit = 200;
  let total = 0;
  const results = [];
  for (const row of rows) {
    const [book, bookName, test, chap, verse, text] = row;
    if (testament === "OT" || testament === "NT") {
      if (test !== testament) continue;
    }
    if (onlyBook > 0 && book !== onlyBook) continue;
    const lower = text.toLowerCase();
    const position = lower.indexOf(needle);
    if (position === -1) continue;
    total += 1;
    if (results.length >= limit) continue;
    results.push({
      book,
      bookName,
      testament: test,
      chapter: chap,
      verse,
      reference: `${bookName} ${chap}:${verse}`,
      text,
      snippet: snippet(text, position, needle.length)
    });
  }
  return { query, total, results };
}
function snippet(text, position, length) {
  const start = Math.max(0, position - 45);
  const end = Math.min(text.length, position + length + 65);
  return `${start > 0 ? "\u2026" : ""}${text.slice(start, end).trim()}${end < text.length ? "\u2026" : ""}`;
}
async function guideList() {
  return { guides: await load("guide/meta.json") };
}
async function guideVerse(translation, bookNr, chapterNr, verse) {
  const key = bookKey(bookNr);
  const [names, henry, henryAm, crossrefs] = await Promise.all([
    bookNames(),
    load(`guide/henry/${key}.json`).catch(() => null),
    load(`guide/henry/${key}.am.json`).catch(() => null),
    load("guide/crossrefs.json")
  ]);
  const chapterData = henry?.[String(chapterNr)] ?? null;
  const amChapter = henryAm?.[String(chapterNr)] ?? null;
  let groupIndex = chapterData?.m?.[String(verse)];
  let nearestVerse = null;
  if (groupIndex === void 0 && chapterData?.m) {
    let best = Infinity;
    for (const k of Object.keys(chapterData.m)) {
      const candidate = Number(k);
      const distance = Math.abs(candidate - verse);
      if (distance < best) {
        best = distance;
        groupIndex = chapterData.m[k];
        nearestVerse = candidate;
      }
    }
  }
  const group = groupIndex === void 0 ? null : chapterData.g[groupIndex];
  const links = (crossrefs?.[`${bookNr}.${chapterNr}.${verse}`] ?? []).map(
    ([b, c, from, to, votes]) => ({
      book: b,
      bookName: names.get(b) ?? String(b),
      chapter: c,
      from,
      to,
      label: `${names.get(b) ?? b} ${c}:${from}${to !== from ? `-${to}` : ""}`,
      votes
    })
  );
  return {
    book: bookNr,
    chapter: chapterNr,
    verse,
    commentary: group ? {
      heading: group.h,
      covers: group.v,
      text: group.t,
      exact: nearestVerse === null,
      nearestVerse,
      amharic: (amChapter ?? [])[groupIndex] || null
    } : null,
    hasAmharicGuide: Boolean(henryAm),
    crossrefs: links
  };
}
async function amharicChapter(bookNr, chapterNr, wantGeneral) {
  const data = await amharicData();
  const key = `${bookNr}.${chapterNr}`;
  const blocks = data.chapters[key];
  const covered = Object.keys(data.chapters).length;
  if (wantGeneral) {
    return {
      title: data.title,
      available: Boolean(data.general?.length),
      general: true,
      blocks: (data.general ?? []).map((b) => ({
        first: b.first,
        last: b.last,
        pages: b.pages ?? [],
        text: b.text
      })),
      covered,
      coverage: data.coverage?.[bookNr] ?? []
    };
  }
  if (!blocks) {
    return {
      title: data.title,
      available: false,
      general: false,
      blocks: [],
      covered,
      coverage: data.coverage?.[bookNr] ?? [],
      hasGeneral: Boolean(data.general?.length)
    };
  }
  return {
    title: data.title,
    titleEn: data.titleEn,
    method: data.method,
    available: true,
    general: false,
    blocks: blocks.map((b) => ({ first: b.first, last: b.last, pages: b.pages, text: b.text })),
    covered,
    coverage: data.coverage?.[bookNr] ?? []
  };
}
async function amharicPage(page) {
  const pages = await load("guide/amharic-pages.json");
  const text = pages[String(page)];
  if (!text) throw new HttpError(404, `Page ${page} has no text`);
  return { page, text };
}
async function commentarySearch(query) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return { query, total: 0, results: [] };
  const [data, names] = await Promise.all([amharicData(), bookNames()]);
  const limit = 80;
  const results = [];
  const chapterCap = limit * 3;
  for (const [key, blocks] of Object.entries(data.chapters)) {
    const [book, chapter2] = key.split(".").map(Number);
    for (const block of blocks) {
      const lower = block.text.toLowerCase();
      let from = 0;
      for (; ; ) {
        const at = lower.indexOf(needle, from);
        if (at === -1) break;
        const start = Math.max(0, at - 70);
        results.push({
          book,
          chapter: chapter2,
          bookName: names.get(book) ?? String(book),
          reference: `${names.get(book) ?? book} ${chapter2}:${block.first}`,
          pages: block.pages ?? [],
          general: false,
          snippet: `${start > 0 ? "\u2026" : ""}${block.text.slice(start, at + needle.length + 90).trim()}\u2026`
        });
        from = at + needle.length;
        if (results.length >= chapterCap) break;
      }
      if (results.length >= chapterCap) continue;
    }
  }
  ;
  (data.general ?? []).forEach((block, i) => {
    const at = block.text.toLowerCase().indexOf(needle);
    if (at === -1) return;
    const start = Math.max(0, at - 70);
    results.push({
      book: 0,
      chapter: 0,
      bookName: data.title,
      reference: `General section ${i + 1}`,
      pages: block.pages ?? [],
      general: true,
      snippet: `${start > 0 ? "\u2026" : ""}${block.text.slice(start, at + needle.length + 90).trim()}\u2026`
    });
  });
  return { query, total: results.length, results: results.slice(0, limit) };
}
function generalPreview(block, index2) {
  const body = block.text.replace(/\s+/g, " ").trim();
  const label = `General section ${index2 + 1}`;
  return `${label} \u2014 ${body.slice(0, 160)}${body.length > 160 ? "\u2026" : ""}`;
}
async function amharicIndex() {
  const [data, names] = await Promise.all([amharicData(), bookNames()]);
  const books2 = Object.entries(data.coverage ?? {}).map(([book, chapters]) => {
    const nr = Number(book);
    return { book: nr, name: names.get(nr) ?? String(nr), chapters: [...chapters].sort((a, b) => a - b) };
  });
  books2.sort((a, b) => a.book - b.book);
  return {
    title: data.title,
    generalCount: (data.general ?? []).length,
    generalSections: (data.general ?? []).map((b, i) => ({
      label: `General section ${i + 1}`,
      pages: b.pages ?? [],
      preview: generalPreview(b, i)
    })),
    books: books2
  };
}
async function amharicCoverage() {
  const data = await amharicData();
  const chapters = {};
  for (const key of Object.keys(data.chapters)) {
    const [book, chapter2] = key.split(".").map(Number);
    if (!chapters[book]) chapters[book] = [];
    chapters[book].push(chapter2);
  }
  for (const list of Object.values(chapters)) list.sort((a, b) => a - b);
  return { chapters };
}
async function strongs(query, isWordLookup) {
  if (!query) return { query, total: 0, results: [] };
  const [entries, amEntries] = await Promise.all([
    load("guide/strongs.json"),
    load(
      "guide/strongs.am.json"
    ).catch(() => null)
  ]);
  const upper = query.toUpperCase();
  const isNumber = /^([GH])\s*-?\s*(\d{1,5})$/i.test(query);
  const wanted = query.toLowerCase().replace(/[^a-z'-]/g, "");
  const scored = [];
  for (const [number, entry] of Object.entries(entries)) {
    let score = null;
    if (isNumber) {
      if (number.toUpperCase() === `${upper[0]}${Number(upper.slice(1))}`) score = 0;
    } else if (isWordLookup) {
      const glossWords = entry.kjv.toLowerCase().split(/[^a-z'-]+/).filter(Boolean);
      const exactGloss = entry.kjv.toLowerCase().replace(/[^a-z'-]/g, "") === wanted;
      if (entry.word === query) score = 1;
      else if (entry.translit?.toLowerCase() === wanted) score = 1;
      else if (exactGloss) score = 2;
      else if (glossWords.includes(wanted)) score = 3;
      else if (entry.translit?.toLowerCase().startsWith(wanted)) score = 4;
    } else if (entry.word === query) score = 1;
    else if (entry.translit?.toLowerCase().startsWith(query.toLowerCase())) score = 2;
    else if (entry.senses.some((s) => s.toLowerCase().includes(query.toLowerCase()))) score = 3;
    if (score !== null) scored.push({ entry, number, score });
  }
  scored.sort(
    (a, b) => isWordLookup ? a.score - b.score || a.entry.kjv.split(/\s+/).length - b.entry.kjv.split(/\s+/).length || a.entry.n - b.entry.n : a.score - b.score || a.entry.n - b.entry.n
  );
  const limit = isWordLookup ? 8 : 40;
  return {
    query,
    total: scored.length,
    hasAmharic: Boolean(amEntries),
    results: scored.slice(0, limit).map(({ entry, number }) => {
      const am = amEntries?.[number];
      return am ? { ...entry, number, sensesAmharic: am.senses, kjvAmharic: am.kjv, derivationAmharic: am.derivation } : { ...entry, number };
    })
  };
}
async function handle(url) {
  const parsed = new URL(url, "http://local");
  const p = parsed.searchParams;
  const num = (name, fallback = 0) => Number(p.get(name) ?? fallback);
  const path = parsed.pathname;
  if (path === "/api/translations") return translations();
  if (path === "/api/books") return books(p.get("translation") ?? "kjv");
  if (path === "/api/chapter") return chapter(p.get("translation") ?? "kjv", num("book"), num("chapter"));
  if (path === "/api/english") return english(num("book"), num("chapter"), p.get("translation") ?? "kjv");
  if (path === "/api/search")
    return search(p.get("translation") ?? "kjv", p.get("q") ?? "", p.get("testament") ?? "", num("book"));
  if (path === "/api/guide") return guideList();
  if (path === "/api/guide/verse")
    return guideVerse(p.get("translation") ?? "kjv", num("book"), num("chapter"), num("verse"));
  if (path === "/api/guide/amharic")
    return amharicChapter(num("book"), num("chapter"), p.get("general") === "1");
  if (path === "/api/guide/amharic/page") return amharicPage(num("page"));
  if (path === "/api/guide/amharic/search") return commentarySearch(p.get("q") ?? "");
  if (path === "/api/guide/amharic/index") return amharicIndex();
  if (path === "/api/guide/amharic/coverage") return amharicCoverage();
  if (path === "/api/guide/strongs") return strongs(p.get("q") ?? "", p.get("word") === "1");
  throw new HttpError(404, `No offline handler for ${path}`);
}
function jsonResponse(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" }
  });
}
function installOfflineApi() {
  if (installed) return;
  installed = true;
  const original = window.fetch.bind(window);
  window.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (!url.includes("/api/")) return original(input, init);
    try {
      return jsonResponse(await handle(url));
    } catch (error) {
      if (error instanceof HttpError) {
        return jsonResponse({ error: error.message }, error.status);
      }
      try {
        return await original(input, init);
      } catch {
        return jsonResponse({ error: "This data is not available offline." }, 503);
      }
    }
  };
}
var GROUPS, cache, index, meta, bookKey, amharicData, HttpError, installed;
var init_offline = __esm({
  "src/offline.ts"() {
    GROUPS = [
      { id: "pentateuch", name: "The Pentateuch", from: 1, to: 5 },
      { id: "historical", name: "Historical Books", from: 6, to: 17 },
      { id: "wisdom", name: "Wisdom & Poetry", from: 18, to: 22 },
      { id: "major-prophets", name: "Major Prophets", from: 23, to: 27 },
      { id: "minor-prophets", name: "Minor Prophets", from: 28, to: 39 },
      { id: "gospels", name: "The Gospels & Acts", from: 40, to: 44 },
      { id: "epistles", name: "Epistles", from: 45, to: 65 },
      { id: "apocalypse", name: "Prophecy", from: 66, to: 66 }
    ];
    cache = /* @__PURE__ */ new Map();
    index = () => load("index.json");
    meta = (id) => load(`${id}/meta.json`);
    bookKey = (nr) => String(nr).padStart(2, "0");
    amharicData = () => load("guide/amharic.json");
    HttpError = class extends Error {
      status;
      constructor(status, message) {
        super(message);
        this.status = status;
      }
    };
    installed = false;
  }
});

// test-search-parity.mjs
var realFetch = globalThis.fetch;
var DATA = "C:/Users/bsd/Desktop/surp/bible/data";
globalThis.Response = class {
  constructor(body, init) {
    this.body = body;
    this.status = init && init.status || 200;
    this.ok = this.status >= 200 && this.status < 300;
  }
  async json() {
    return JSON.parse(this.body);
  }
};
var bundles = /* @__PURE__ */ new Map();
globalThis.fetch = async (input) => {
  const url = String(input);
  if (!url.includes("/api/")) {
    const key = url.replace(/^https?:\/\/[^/]+\//, "");
    if (bundles.has(key)) return new globalThis.Response(JSON.stringify(bundles.get(key)));
    throw new Error(`offline: ${key} is not bundled`);
  }
  return new globalThis.Response("{}", { status: 404 });
};
globalThis.document = { baseURI: "http://localhost/" };
globalThis.window = { fetch: globalThis.fetch };
var { installOfflineApi: installOfflineApi2 } = await Promise.resolve().then(() => (init_offline(), offline_exports));
installOfflineApi2();
var { readdirSync, readFileSync, statSync } = await import("node:fs");
function loadTree(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = `${dir}/${entry}`;
    if (statSync(full).isDirectory()) loadTree(full, `${prefix}${entry}/`);
    else if (entry.endsWith(".json")) bundles.set(`${prefix}${entry}`, JSON.parse(readFileSync(full, "utf8")));
  }
}
loadTree(DATA, "data/");
var ask = (path) => globalThis.window.fetch(`http://localhost${path}`).then((r) => r.json());
for (const word of ["\u134D\u1245\u122D", "\u12A0\u121D\u120B\u12AD", "\u1338\u120E\u127D"]) {
  const q = encodeURIComponent(word);
  const offline = await ask(`/api/guide/amharic/search?q=${q}`);
  const server = await (await realFetch(`http://localhost:4001/api/guide/amharic/search?q=${q}`)).json();
  const mine = offline.results.map((r) => `${r.reference}|${r.snippet}`);
  const theirs = server.results.map((r) => `${r.reference}|${r.snippet}`);
  const identical = mine.length === theirs.length && mine.every((v, i) => v === theirs[i]);
  console.log(`
"${word}"`);
  console.log(`  visible results: offline ${mine.length}, server ${theirs.length} -> ${identical ? "IDENTICAL" : "DIFFER"}`);
  console.log(`  reported total:  offline ${offline.total}, server ${server.total}`);
  if (!identical) {
    for (let i = 0; i < Math.max(mine.length, theirs.length); i += 1) {
      if (mine[i] !== theirs[i]) {
        console.log(`  first difference at #${i}`);
        console.log(`    offline: ${String(mine[i]).slice(0, 90)}`);
        console.log(`    server : ${String(theirs[i]).slice(0, 90)}`);
        break;
      }
    }
  }
}
