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
      if (!res.ok) throw new Error(`bundled data missing: ${path} (${res.status})`);
      if (typeof res.text !== "function") return res.json();
      const body = await res.text();
      try {
        return JSON.parse(body);
      } catch {
        throw new Error(`bundled data unreadable: ${path} (${body.slice(0, 40)})`);
      }
    });
    pending.catch(() => cache.delete(path));
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
function isPlaceholder(text) {
  return typeof text !== "string" || text.trim() === "" || PLACEHOLDER.test(text);
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
    if (!present.has(v) || isPlaceholder(text)) grouped.push(v);
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
    verses: found.v.map(([verse2, text]) => ({ verse: verse2, text: isPlaceholder(text) ? "" : text })),
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
    verses: found.v.map(([verse2, text]) => ({ verse: verse2, text }))
  };
}
async function search(translation, query, testament, onlyBook) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return { query, total: 0, results: [] };
  const rows = await load(`raw/search-${translation}.json`);
  const limit = 200;
  let total = 0;
  const results2 = [];
  for (const row of rows) {
    const [book, bookName, test, chap, verse2, text] = row;
    if (testament === "OT" || testament === "NT") {
      if (test !== testament) continue;
    }
    if (onlyBook > 0 && book !== onlyBook) continue;
    const lower = text.toLowerCase();
    const position = lower.indexOf(needle);
    if (position === -1) continue;
    total += 1;
    if (results2.length >= limit) continue;
    results2.push({
      book,
      bookName,
      testament: test,
      chapter: chap,
      verse: verse2,
      reference: `${bookName} ${chap}:${verse2}`,
      text,
      snippet: snippet(text, position, needle.length)
    });
  }
  return { query, total, results: results2 };
}
function snippet(text, position, length) {
  const start = Math.max(0, position - 45);
  const end = Math.min(text.length, position + length + 65);
  return `${start > 0 ? "\u2026" : ""}${text.slice(start, end).trim()}${end < text.length ? "\u2026" : ""}`;
}
async function guideList() {
  return { guides: await load("guide/meta.json") };
}
async function guideVerse(translation, bookNr, chapterNr, verse2) {
  const key = bookKey(bookNr);
  const [names, henry, henryAm, crossrefs] = await Promise.all([
    bookNames(),
    load(`guide/henry/${key}.json`).catch(() => null),
    load(`guide/henry/${key}.am.json`).catch(() => null),
    load("guide/crossrefs.json")
  ]);
  const chapterData = henry?.[String(chapterNr)] ?? null;
  const amChapter = henryAm?.[String(chapterNr)] ?? null;
  let groupIndex = chapterData?.m?.[String(verse2)];
  let nearestVerse = null;
  if (groupIndex === void 0 && chapterData?.m) {
    let best = Infinity;
    for (const k of Object.keys(chapterData.m)) {
      const candidate = Number(k);
      const distance = Math.abs(candidate - verse2);
      if (distance < best) {
        best = distance;
        groupIndex = chapterData.m[k];
        nearestVerse = candidate;
      }
    }
  }
  const group = groupIndex === void 0 ? null : chapterData.g[groupIndex];
  const links = (crossrefs?.[`${bookNr}.${chapterNr}.${verse2}`] ?? []).map(
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
    verse: verse2,
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
async function amharicPage(page2) {
  const pages = await load("guide/amharic-pages.json");
  const text = pages[String(page2)];
  if (!text) throw new HttpError(404, `Page ${page2} has no text`);
  return { page: page2, text };
}
async function commentarySearch(query) {
  const needle = query.trim().toLowerCase();
  if (needle.length < 2) return { query, total: 0, results: [] };
  const [data, names] = await Promise.all([amharicData(), bookNames()]);
  const limit = 80;
  const results2 = [];
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
        results2.push({
          book,
          chapter: chapter2,
          bookName: names.get(book) ?? String(book),
          reference: `${names.get(book) ?? book} ${chapter2}:${block.first}`,
          pages: block.pages ?? [],
          general: false,
          snippet: `${start > 0 ? "\u2026" : ""}${block.text.slice(start, at + needle.length + 90).trim()}\u2026`
        });
        from = at + needle.length;
        if (results2.length >= chapterCap) break;
      }
      if (results2.length >= chapterCap) continue;
    }
  }
  ;
  (data.general ?? []).forEach((block, i) => {
    const at = block.text.toLowerCase().indexOf(needle);
    if (at === -1) return;
    const start = Math.max(0, at - 70);
    results2.push({
      book: 0,
      chapter: 0,
      bookName: data.title,
      reference: `General section ${i + 1}`,
      pages: block.pages ?? [],
      general: true,
      snippet: `${start > 0 ? "\u2026" : ""}${block.text.slice(start, at + needle.length + 90).trim()}\u2026`
    });
  });
  return { query, total: results2.length, results: results2.slice(0, limit) };
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
  const scope = typeof window !== "undefined" && typeof window.fetch === "function" ? window : globalThis;
  if (typeof scope.fetch !== "function") return;
  installed = true;
  const native = Boolean(scope.Capacitor?.isNativePlatform?.());
  const original = scope.fetch.bind(scope);
  async function fromBundled(url) {
    try {
      return jsonResponse(await handle(url));
    } catch (error) {
      if (error instanceof HttpError) return jsonResponse({ error: error.message }, error.status);
      throw error;
    }
  }
  async function fromNetwork(input, init) {
    return original(input, init);
  }
  scope.fetch = async (input, init) => {
    const url = typeof input === "string" ? input : input instanceof URL ? input.href : input.url;
    if (!url.includes("/api/")) return original(input, init);
    const first = native ? fromBundled(url) : fromNetwork(input, init);
    try {
      return await first;
    } catch {
      try {
        return native ? await fromNetwork(input, init) : await fromBundled(url);
      } catch {
        return jsonResponse({ error: "This data is not available offline." }, 503);
      }
    }
  };
}
var GROUPS, cache, index, meta, bookKey, PLACEHOLDER, amharicData, HttpError, installed;
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
    PLACEHOLDER = /^[\s‐-―−\-–—.…⋯·*_]+$/;
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

// test-offline.mjs
var realFetch = globalThis.fetch;
var { fileURLToPath } = await import("node:url");
var DATA = fileURLToPath(new URL("./data/", import.meta.url)).replace(/\/$/, "");
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
globalThis.window = { fetch: globalThis.fetch, Capacitor: { isNativePlatform: () => true } };
var { installOfflineApi: installOfflineApi2 } = await Promise.resolve().then(() => (init_offline(), offline_exports));
installOfflineApi2();
var results = [];
var check = (label, pass, detail) => results.push(`${pass ? "PASS" : "FAIL"}  ${label}${detail ? ` \u2014 ${detail}` : ""}`);
var note = (text) => {
  results.push(`      ${text}`);
  console.log(`      ${text}`);
};
var { readdirSync, readFileSync, statSync } = await import("node:fs");
function loadTree(dir, prefix) {
  for (const entry of readdirSync(dir)) {
    const full = `${dir}/${entry}`;
    if (statSync(full).isDirectory()) loadTree(full, `${prefix}${entry}/`);
    else if (entry.endsWith(".json")) {
      bundles.set(`${prefix}${entry}`, JSON.parse(readFileSync(full, "utf8")));
    }
  }
}
loadTree(DATA, "data/");
var ask = (path) => globalThis.window.fetch(`http://localhost${path}`).then((r) => r.json());
var askRaw = (path) => globalThis.window.fetch(`http://localhost${path}`);
var { spawn } = await import("node:child_process");
var api = spawn(process.execPath, [new URL("./server/index.mjs", import.meta.url).pathname.replace(/^\//, "")], {
  stdio: "ignore"
});
api.unref?.();
async function waitForApi() {
  for (let i = 0; i < 60; i += 1) {
    try {
      await realFetch("http://127.0.0.1:4001/api/translations");
      return true;
    } catch {
      await new Promise((r) => setTimeout(r, 250));
    }
  }
  return false;
}
await waitForApi();
var live = async (path) => {
  try {
    const res = await realFetch(`http://127.0.0.1:4001${path}`);
    return res.ok ? await res.json() : null;
  } catch {
    return null;
  }
};
console.log(`bundled files: ${bundles.size}`);
try {
  const probe = new URL("data/index.json", globalThis.document.baseURI).href;
  const key = probe.replace(/^https?:\/\/[^/]+\//, "");
  note(`probe url=${probe} key=${key} bundled=${bundles.has(key)}`);
} catch (error) {
  note(`probe failed: ${error.message}`);
}
var offlineT = await ask("/api/translations");
var liveT = await live("/api/translations");
check(
  "translations match the server",
  JSON.stringify(offlineT) === JSON.stringify(liveT),
  `${offlineT.length} translations`
);
for (const t of ["am", "am54", "kjv"]) {
  const offline = await ask(`/api/books?translation=${t}`);
  const server = await live(`/api/books?translation=${t}`);
  if (JSON.stringify(offline) !== JSON.stringify(server) && offline.books && server) {
    note(
      `${t} translation block offline=${JSON.stringify(offline.translation)} server=${JSON.stringify(server.translation)}`
    );
    const a = JSON.stringify(offline.books);
    const b = JSON.stringify(server.books);
    for (let i = 0; i < offline.books.length; i += 1) {
      if (JSON.stringify(offline.books[i]) !== JSON.stringify(server.books[i])) {
        note(`  first differing book #${i}: offline=${a.slice(0, 0)}${JSON.stringify(offline.books[i])} server=${JSON.stringify(server.books[i])}`);
        break;
      }
    }
    note(`  groups offline=${JSON.stringify(offline.groups).slice(0, 80)} server=${JSON.stringify(server.groups).slice(0, 80)}`);
  }
  check(
    `${t}: books match the server`,
    JSON.stringify(offline) === JSON.stringify(server),
    `${offline.books ? offline.books.length : "none"} books`
  );
}
var spots = [
  ["am", 43, 3],
  ["am", 40, 1],
  ["am", 1, 1],
  ["am", 19, 119],
  ["kjv", 43, 3],
  ["am54", 40, 4]
];
var chapterMismatch = 0;
for (const [t, b, c] of spots) {
  const path = `/api/chapter?translation=${t}&book=${b}&chapter=${c}`;
  const offline = await ask(path);
  const server = await live(path);
  if (JSON.stringify(offline) === JSON.stringify(server)) continue;
  chapterMismatch += 1;
  const brief = (x) => x && x.error ? `ERROR ${x.error}` : `slots=${x.slots} grouped=${x.grouped && x.grouped.length} verses=${x.verses && x.verses.length} fallback=${x.fallback}`;
  note(`${t} ${b}:${c} offline(${brief(offline)}) server(${brief(server)})`);
}
check("sampled chapters match the server byte for byte", chapterMismatch === 0, `${spots.length} chapters`);
var offlineSearch = await ask("/api/search?translation=kjv&q=light&limit=200");
var liveSearch = await live("/api/search?translation=kjv&q=light&limit=200");
if (!liveSearch || !liveSearch.results) note(`live search returned ${JSON.stringify(liveSearch).slice(0, 160)}`);
if (!offlineSearch.results) note(`offline search returned ${JSON.stringify(offlineSearch).slice(0, 160)}`);
check(
  "text search finds the same total as the server",
  offlineSearch.total === liveSearch.total,
  `offline ${offlineSearch.total}, server ${liveSearch.total}`
);
check(
  "first search result matches the server",
  JSON.stringify(offlineSearch.results[0]) === JSON.stringify(liveSearch.results && liveSearch.results[0]),
  offlineSearch.results[0] && offlineSearch.results[0].reference
);
var filtered = await ask("/api/search?translation=kjv&q=light&book=43&limit=200");
check(
  "book filter narrows the search",
  filtered.total > 0 && filtered.total < offlineSearch.total,
  `${offlineSearch.total} -> ${filtered.total}`
);
var ntOnly = await ask("/api/search?translation=kjv&q=light&testament=NT&limit=200");
check(
  "testament filter works",
  ntOnly.total > 0 && ntOnly.total < offlineSearch.total,
  `${offlineSearch.total} -> ${ntOnly.total}`
);
var verse = await ask("/api/guide/verse?translation=am&book=43&chapter=3&verse=16");
var liveVerse = await live("/api/guide/verse?translation=am&book=43&chapter=3&verse=16");
check(
  "verse commentary matches the server",
  JSON.stringify(verse) === JSON.stringify(liveVerse),
  verse.commentary ? verse.commentary.heading : "none"
);
var nearest = await ask("/api/guide/verse?translation=am&book=31&chapter=1&verse=24");
var liveNearest = await live("/api/guide/verse?translation=am&book=31&chapter=1&verse=24");
check(
  "nearest-note fallback matches the server",
  JSON.stringify(nearest.commentary) === JSON.stringify(liveNearest && liveNearest.commentary)
);
var am43 = await ask("/api/guide/amharic?book=43&chapter=3");
check(
  "Amharic commentary for John 3",
  am43.available === true && am43.blocks && am43.blocks.length === 3,
  `${am43.blocks ? am43.blocks.length : "none"} blocks`
);
var am40 = await ask("/api/guide/amharic?book=40&chapter=1");
check(
  "uncovered chapter reports itself honestly",
  am40.available === false && am40.hasGeneral === true
);
var general = await ask("/api/guide/amharic?book=40&chapter=1&general=1");
check(
  "front-matter notes load",
  general.general === true && general.blocks && general.blocks.length === 81,
  `${general.blocks ? general.blocks.length : "none"} blocks`
);
var page = await ask("/api/guide/amharic/page?page=101");
if (!page.text) note(`page=101 returned ${JSON.stringify(page).slice(0, 160)}`);
check(
  "single printed page loads",
  typeof page.text === "string" && page.text.length > 3e3 && /[\u1200-\u137F]/.test(page.text),
  `${page.text ? page.text.length : "none"} chars`
);
var missing = await askRaw("/api/guide/amharic/page?page=9999");
check("a page with no text still returns 404", missing.status === 404, `HTTP ${missing.status}`);
var contents = await ask("/api/guide/amharic/index");
check(
  "contents index loads",
  contents.books && contents.books.length === 21 && contents.generalCount === 81,
  `${contents.books ? contents.books.length : "none"} books, ${contents.generalCount} sections`
);
var coverage = await ask("/api/guide/amharic/coverage");
check(
  "coverage loads",
  coverage.chapters && Object.keys(coverage.chapters).length === 21,
  `${coverage.chapters ? Object.keys(coverage.chapters).length : "none"} books`
);
var cSearch = await ask(`/api/guide/amharic/search?q=${encodeURIComponent("\u134D\u1245\u122D")}`);
var liveC = await live(`/api/guide/amharic/search?q=${encodeURIComponent("\u134D\u1245\u122D")}`);
check(
  "commentary search returns the same results as the server",
  JSON.stringify(cSearch.results) === JSON.stringify(liveC.results),
  `${cSearch.results.length} shown`
);
if (cSearch.total !== liveC.total) {
  note(`reported total differs: offline ${cSearch.total}, server ${liveC.total} (results identical)`);
}
check(
  "first commentary hit matches the server",
  JSON.stringify(cSearch.results[0]) === JSON.stringify(liveC.results[0]),
  cSearch.results[0] && cSearch.results[0].reference
);
var strongs2 = await ask("/api/guide/strongs?q=G26");
var liveS = await live("/api/guide/strongs?q=G26");
check(
  "Strong's search matches the server",
  strongs2.total === liveS.total && strongs2.results.length > 0,
  `${strongs2.total} entries`
);
var word = await ask("/api/guide/strongs?q=light&word=1");
check("word lookup works offline", word.total > 0 && word.results.length > 0, `${word.total} candidates`);
var guideList2 = await ask("/api/guide");
if (!guideList2.guides) note(`/api/guide returned ${JSON.stringify(guideList2).slice(0, 160)}`);
check(
  "guide list loads",
  Array.isArray(guideList2.guides),
  `${guideList2.guides ? guideList2.guides.length : "none"} guides`
);
var english2 = await ask("/api/english?book=43&chapter=3");
check("English side-by-side column loads", english2.verses && english2.verses.length === 36, `${english2.verses.length} verses`);
console.log(results.join("\n"));
var real = results.filter((r) => !r.startsWith("      "));
var passed = real.filter((r) => r.startsWith("PASS")).length;
console.log(`
${passed}/${real.length} passed`);
api.kill();
process.exit(real.some((r) => r.startsWith("FAIL")) ? 1 : 0);
