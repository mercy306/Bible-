import fs from 'fs'

let css = fs.readFileSync('src/styles.css', 'utf-8')

// 1. Clean .segbar & .segbar__btn
css = css.replace(
  /\.segbar\s*\{[\s\S]*?box-shadow:\s*inset\s*0\s*1px\s*2px\s*rgba\(0,\s*0,\s*0,\s*0\.05\);[\s\S]*?\}/,
  `.segbar {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel-2);
  box-shadow: none;
}`
)

css = css.replace(
  /\.segbar__btn\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.segbar__btn.is-active {
  background: var(--accent);
  color: #0b132b;
  box-shadow: none;
  border: 0;
  text-shadow: none;
}`
)

// 2. Clean .bookrow
css = css.replace(
  /\.bookrow:hover\s*\{[\s\S]*?transform:\s*translateY\(-1px\);\s*\}/,
  `.bookrow:hover {
  background: var(--panel-2);
  border-color: var(--line);
  box-shadow: none;
  transform: none;
}`
)

css = css.replace(
  /\.bookrow\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.bookrow.is-active {
  background: var(--accent);
  border-color: transparent;
  color: #0b132b;
  box-shadow: none;
  text-shadow: none;
}`
)

css = css.replace(
  /\.bookrow\.is-active \.bookrow__nr,\s*\.bookrow\.is-active \.bookrow__ch\s*\{\s*color:\s*rgba\(255,\s*255,\s*255,\s*0\.8\);\s*\}/,
  `.bookrow.is-active .bookrow__nr,
.bookrow.is-active .bookrow__ch {
  color: rgba(11, 19, 43, 0.8);
}`
)

// 3. Clean .chaptersheet__btn
css = css.replace(
  /\.chaptersheet__btn\s*\{[\s\S]*?box-shadow:\s*0\s*2px\s*6px[^;]+;[\s\S]*?transition:[^;]+;\s*\}/,
  `.chaptersheet__btn {
  padding: 11px 10px;
  border: 1px solid var(--line);
  border-radius: 10px;
  background: var(--panel-2);
  color: var(--ink);
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.18s ease;
}`
)

css = css.replace(
  /\.chaptersheet__btn:hover:not\(\.is-active\)\s*\{[\s\S]*?box-shadow:[^;]+;\s*\}/,
  `.chaptersheet__btn:hover:not(.is-active) {
  border-color: var(--line);
  background: var(--panel);
  box-shadow: none;
  transform: none;
}`
)

css = css.replace(
  /\.chaptersheet__btn\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.chaptersheet__btn.is-active {
  background: var(--accent);
  border-color: transparent;
  color: #0b132b;
  box-shadow: none;
  text-shadow: none;
}`
)

// 4. Clean .mtabs & .mtabs__btn
css = css.replace(
  /\.mtabs\s*\{[\s\S]*?box-shadow:\s*inset\s*0\s*1px\s*2px\s*rgba\(0,\s*0,\s*0,\s*0\.05\);\s*\}/,
  `.mtabs {
  margin-bottom: 16px;
  padding: 3px;
  border: 1px solid var(--line);
  border-radius: 12px;
  background: var(--panel-2);
  box-shadow: none;
}`
)

css = css.replace(
  /\.mtabs__btn\s*\{[\s\S]*?color:\s*#1E6BB8;[\s\S]*?transition:[^;]+;\s*\}/,
  `.mtabs__btn {
  padding: 9px 8px;
  border: 0;
  border-radius: 10px;
  background: transparent;
  color: var(--ink-soft);
  font-size: 13.5px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
}`
)

css = css.replace(
  /\.mtabs__btn:hover:not\(\.is-active\)\s*\{\s*background:\s*rgba\(255,\s*255,\s*255,\s*0\.6\);\s*\}/,
  `.mtabs__btn:hover:not(.is-active) {
  background: var(--panel);
  color: var(--ink);
}`
)

css = css.replace(
  /\.mtabs__btn\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.mtabs__btn.is-active {
  background: var(--accent);
  color: #0b132b;
  box-shadow: none;
  border: 0;
  text-shadow: none;
}`
)

// 5. Clean app frame shadow
css = css.replace(
  /box-shadow:\s*0\s*0\s*60px\s*rgba\(0,\s*0,\s*0,\s*0\.7\),\s*0\s*0\s*25px\s*rgba\(56,\s*189,\s*248,\s*0\.08\);/,
  `border: 1px solid var(--line);
  box-shadow: none;`
)

// 6. Clean MountainHero & TopBar
css = css.replace(
  /\/\* Mountain Hero Component \*\/[\s\S]*?\.mountainHero__content\s*\{[\s\S]*?width:\s*100%;\s*\}/,
  `/* Mountain Hero Component */
.mountainHero {
  position: relative;
  background: var(--panel);
  color: var(--ink);
  padding: 16px 20px;
  border-bottom: 1px solid var(--line);
  width: 100%;
  box-sizing: border-box;
}

.mountainHero__content {
  position: relative;
  max-width: 860px;
  margin: 0 auto;
  width: 100%;
}`
)

css = css.replace(
  /\.topbar\s*\{[\s\S]*?z-index:\s*60;\s*\}/,
  `.topbar {
  background: var(--panel);
  color: var(--ink);
  padding: 12px 16px;
  border-bottom: 1px solid var(--line);
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: sticky;
  top: 0;
  z-index: 60;
  box-shadow: none;
}`
)

css = css.replace(
  /\.topbar__backBtn\s*\{[\s\S]*?\.topbar__backBtn:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1px\s*rgba\(255,\s*255,\s*255,\s*0\.6\);\s*\}/,
  `.topbar__backBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: transparent;
  box-shadow: none;
  color: var(--ink);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease;
}

.topbar__backBtn svg {
  width: 22px;
  height: 22px;
}

.topbar__backBtn:hover {
  background: var(--panel-2);
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.topbar__actionBtn\s*\{[\s\S]*?\.topbar__actionBtn:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1px\s*rgba\(255,\s*255,\s*255,\s*0\.6\);\s*\}/,
  `.topbar__actionBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  border: 1px solid var(--line);
  background: transparent;
  box-shadow: none;
  color: var(--ink);
  cursor: pointer;
  padding: 0;
  transition: background 0.15s ease;
}

.topbar__actionBtn svg {
  width: 20px;
  height: 20px;
}

.topbar__actionBtn:hover {
  background: var(--panel-2);
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.topbar__chapterTitle\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.topbar__chapterTitle {
  font-size: 18px;
  font-weight: 700;
  color: var(--ink);
  margin: 0;
  letter-spacing: -0.01em;
  text-shadow: none;
}`
)

css = css.replace(
  /\.topbar__langPill\s*\{[\s\S]*?box-shadow:[^;]+;[\s\S]*?gap:\s*3px;\s*\}/,
  `.topbar__langPill {
  display: inline-flex;
  align-items: center;
  background: var(--panel-2);
  border: 1px solid var(--line);
  box-shadow: none;
  border-radius: 999px;
  padding: 3px;
  gap: 3px;
}`
)

css = css.replace(
  /\.topbar__langItem\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.topbar__langItem.is-active {
  background: var(--accent);
  color: #0b132b;
  font-weight: 700;
  box-shadow: none;
  border: 0;
  text-shadow: none;
}`
)

css = css.replace(
  /\.topbar__searchForm\s*\{[\s\S]*?box-shadow:\s*inset\s*0\s*1px\s*2px\s*rgba\(0,\s*0,\s*0,\s*0\.2\),\s*0\s*2px\s*8px\s*rgba\(0,\s*0,\s*0,\s*0\.15\);[\s\S]*?border-color\s*0\.15s\s*ease;\s*\}/,
  `.topbar__searchForm {
  flex: 1;
  display: flex;
  align-items: center;
  background: var(--panel-2);
  border-radius: 10px;
  padding: 6px 12px;
  gap: 8px;
  border: 1px solid var(--line);
  box-shadow: none;
  transition: border-color 0.15s ease;
}`
)

css = css.replace(
  /\.topbar__searchForm:focus-within\s*\{[\s\S]*?border-color:[^;]+;\s*\}/,
  `.topbar__searchForm:focus-within {
  background: var(--panel-2);
  border-color: var(--accent);
}`
)

css = css.replace(
  /\.topbar__searchDropdown\s*\{[\s\S]*?box-shadow:\s*0\s*16px\s*40px\s*rgba\(0,\s*0,\s*0,\s*0\.7\);[\s\S]*?border-top:\s*0;\s*\}/,
  `.topbar__searchDropdown {
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background: #111D38;
  color: #F1F5F9;
  box-shadow: none;
  border-radius: 0 0 16px 16px;
  max-height: min(65vh, 520px);
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;
  z-index: 70;
  border: 1px solid var(--line);
  border-top: 0;
}`
)

// 7. Clean .homeScreen
css = css.replace(
  /text-shadow:\s*0\s*2px\s*10px\s*rgba\(10,\s*35,\s*75,\s*0\.5\),\s*0\s*0\s*16px\s*rgba\(255,\s*255,\s*255,\s*0\.4\);/,
  `text-shadow: none;`
)

css = css.replace(
  /\.homeScreen__quote\s*\{[\s\S]*?\.homeScreen__quoteRef\s*\{[\s\S]*?opacity:\s*0\.95;\s*\}/,
  `.homeScreen__quote {
  margin: 0 auto;
  max-width: 380px;
  padding: 14px 18px;
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 12px;
  font-family: inherit;
  font-style: normal;
  font-size: 14px;
  line-height: 1.5;
  color: var(--ink);
  box-shadow: none;
  text-shadow: none;
}

.homeScreen__quoteRef {
  display: block;
  font-size: 11px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--accent);
  text-shadow: none;
  margin-top: 6px;
}`
)

css = css.replace(
  /\.homeScreen__keepCard\s*\{[\s\S]*?\.homeScreen__keepCard:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*#ffffff;\s*\}/,
  `.homeScreen__keepCard {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px 16px;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.15s ease;
  width: 100%;
  text-align: left;
}

.homeScreen__keepCard:hover {
  background: var(--panel-2);
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.homeScreen__keepIcon\s*\{[\s\S]*?border:\s*1px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.45\);[\s\S]*?z-index:\s*1;\s*\}/,
  `.homeScreen__keepIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 8px;
  background: var(--panel-2);
  color: var(--accent);
  flex-shrink: 0;
  box-shadow: none;
  border: 1px solid var(--line);
}`
)

css = css.replace(
  /\.homeScreen__recentItem\s*\{[\s\S]*?\.homeScreen__recentItem:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*#ffffff;\s*\}/,
  `.homeScreen__recentItem {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 12px 14px;
  box-shadow: none;
  cursor: pointer;
  transition: background 0.15s ease;
  width: 100%;
  text-align: left;
}

.homeScreen__recentItem:hover {
  background: var(--panel-2);
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.homeScreen__recentIcon\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*rgba\(255,\s*255,\s*255,\s*0\.45\);[\s\S]*?z-index:\s*1;\s*\}/,
  `.homeScreen__recentIcon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: var(--panel-2);
  color: var(--accent);
  font-size: 16px;
  font-weight: 600;
  flex-shrink: 0;
  box-shadow: none;
  border: 1px solid var(--line);
}`
)

// 8. Clean .botbar
css = css.replace(
  /\.botbar\s*\{[\s\S]*?background:\s*rgba\(11,\s*19,\s*43,\s*0\.94\);[\s\S]*?box-shadow:\s*0\s*-8px\s*30px\s*rgba\(0,\s*0,\s*0,\s*0\.5\);[\s\S]*?box-sizing:\s*border-box;\s*\}/,
  `.botbar {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: var(--panel);
  border-top: 1px solid var(--line);
  box-shadow: none;
  padding: 8px 16px calc(8px + env(safe-area-inset-bottom, 0px));
  z-index: 50;
  box-sizing: border-box;
}`
)

css = css.replace(
  /\.botbar__btn:hover\s*\{\s*color:\s*#94a3b8;\s*transform:\s*translateY\(-1px\);\s*\}/,
  `.botbar__btn:hover {
  color: #94a3b8;
  transform: none;
}`
)

css = css.replace(
  /\.botbar__btn\.is-active \.botbar__icon\s*\{\s*filter:\s*drop-shadow\(0\s*2px\s*8px\s*rgba\(56,\s*189,\s*248,\s*0\.5\)\);\s*\}/,
  `.botbar__btn.is-active .botbar__icon {
  filter: none;
}`
)

css = css.replace(
  /\.botbar__badge\s*\{[\s\S]*?border:\s*0\.5px\s*solid\s*rgba\(255,\s*255,\s*255,\s*0\.4\);\s*\}/,
  `.botbar__badge {
  position: absolute;
  top: 4px;
  right: 14px;
  background: var(--accent);
  color: #0b132b;
  font-size: 10px;
  font-weight: 800;
  border-radius: 10px;
  padding: 1px 6px;
  box-shadow: none;
  border: 0;
}`
)

// 9. Clean .readerBar
css = css.replace(
  /\.readerBar\s*\{[\s\S]*?box-shadow:\s*0\s*10px\s*30px\s*rgba\(0,\s*0,\s*0,\s*0\.5\),\s*0\s*0\s*20px\s*rgba\(56,\s*189,\s*248,\s*0\.12\);[\s\S]*?transition:[^;]+;\s*\}/,
  `.readerBar {
  position: fixed;
  bottom: calc(72px + env(safe-area-inset-bottom, 0px));
  left: 50%;
  transform: translateX(-50%);
  display: inline-flex;
  align-items: center;
  gap: 6px;
  background: var(--panel);
  border-radius: 999px;
  padding: 5px 8px;
  box-shadow: none;
  z-index: 40;
  border: 1px solid var(--line);
  transition: all 0.25s ease;
}`
)

css = css.replace(
  /\.readerBar__listenBtn\s*\{[\s\S]*?\.readerBar__listenBtn:hover\s*\{[\s\S]*?\.readerBar__listenBtn\.is-playing\s*\{[\s\S]*?@keyframes pulseListen\s*\{[\s\S]*?\}\s*\}/,
  `.readerBar__listenBtn {
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 0;
  background: var(--accent);
  color: #0b132b;
  cursor: pointer;
  box-shadow: none;
  transition: transform 0.15s ease;
  padding: 0;
}

.readerBar__listenBtn:hover {
  transform: none;
  box-shadow: none;
}

.readerBar__listenBtn:active {
  transform: scale(0.96);
}

.readerBar__listenBtn.is-playing {
  background: #EF4444;
  color: #ffffff;
  box-shadow: none;
  animation: none;
}`
)

css = css.replace(
  /\.readerBar__chapterBtn\s*\{[\s\S]*?background:\s*rgba\(255,\s*255,\s*255,\s*0\.08\);[\s\S]*?color:\s*#F8FAFC;[\s\S]*?transition:\s*all\s*0\.18s\s*ease;\s*\}/,
  `.readerBar__chapterBtn {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  padding: 7px 14px;
  border-radius: 999px;
  border: 1px solid var(--line);
  background: var(--panel-2);
  color: var(--ink);
  font-size: 13px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.15s ease;
}`
)

// 10. Clean .dailyScreen
css = css.replace(
  /\.dailyScreen__card\s*\{[\s\S]*?box-shadow:\s*0\s*14px\s*40px[^;]+;[\s\S]*?border:\s*1px\s*solid\s*rgba\(30,\s*107,\s*184,\s*0\.18\);[\s\S]*?position:\s*relative;[\s\S]*?overflow:\s*hidden;\s*\}/,
  `.dailyScreen__card {
  background: var(--panel);
  border-radius: 16px;
  padding: 24px 20px;
  box-shadow: none;
  border: 1px solid var(--line);
  text-align: center;
  position: relative;
}`
)

css = css.replace(
  /\.dailyScreen__amharicBanner\s*\{[\s\S]*?box-shadow:[^;]+;[\s\S]*?margin-bottom:\s*20px;\s*\}/,
  `.dailyScreen__amharicBanner {
  display: inline-block;
  background: var(--panel-2);
  color: var(--accent);
  font-size: 14px;
  font-weight: 600;
  padding: 6px 18px;
  border-radius: 12px;
  border: 1px solid var(--line);
  box-shadow: none;
  margin-bottom: 20px;
}`
)

css = css.replace(
  /\.dailyScreen__saveBtn\s*\{[\s\S]*?\.dailyScreen__readBtn:hover\s*\{[\s\S]*?inset\s*0\s*1\.5px\s*2px\s*rgba\(255,\s*255,\s*255,\s*0\.7\);\s*\}/,
  `.dailyScreen__saveBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: var(--panel-2);
  color: var(--ink);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 13px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.15s ease;
  font-family: inherit;
}

.dailyScreen__saveBtn:hover {
  background: var(--panel);
  transform: none;
  box-shadow: none;
}

.dailyScreen__saveBtn.is-saved {
  background: var(--accent);
  border-color: transparent;
  color: #0b132b;
  box-shadow: none;
}

.dailyScreen__readBtn {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  width: 100%;
  background: var(--accent);
  color: #0b132b;
  border: 0;
  border-radius: 12px;
  padding: 14px;
  font-size: 15px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
  transition: opacity 0.15s ease;
  font-family: inherit;
}

.dailyScreen__readBtn:hover {
  opacity: 0.9;
  transform: none;
  box-shadow: none;
}`
)

// 11. Clean .savedScreen
css = css.replace(
  /\.savedScreen__header\s*\{[\s\S]*?box-shadow:\s*0\s*4px\s*20px\s*rgba\(21,\s*85,\s*150,\s*0\.25\);\s*\}/,
  `.savedScreen__header {
  background: var(--panel);
  padding: 16px 20px;
  color: var(--ink);
  display: flex;
  align-items: center;
  gap: 16px;
  border-bottom: 1px solid var(--line);
  box-shadow: none;
}`
)

css = css.replace(
  /\.savedScreen__tab\s*\{[\s\S]*?\.savedScreen__tab\.is-active\s*\{[\s\S]*?text-shadow:[^;]+;\s*\}/,
  `.savedScreen__tab {
  border: 1px solid var(--line);
  background: var(--panel-2);
  color: var(--ink-soft);
  font-size: 13px;
  font-weight: 600;
  padding: 8px 18px;
  border-radius: 12px;
  cursor: pointer;
  white-space: nowrap;
  box-shadow: none;
  transition: all 0.15s ease;
  font-family: inherit;
}

.savedScreen__tab:hover {
  color: var(--ink);
  transform: none;
}

.savedScreen__tab.is-active {
  background: var(--accent);
  border-color: transparent;
  color: #0b132b;
  box-shadow: none;
  text-shadow: none;
}`
)

css = css.replace(
  /\.savedScreen__card\s*\{[\s\S]*?\.savedScreen__card:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*#ffffff;\s*\}/,
  `.savedScreen__card {
  display: flex;
  align-items: center;
  gap: 14px;
  background: var(--panel);
  border-radius: 12px;
  padding: 14px 16px;
  border: 1px solid var(--line);
  cursor: pointer;
  box-shadow: none;
  transition: background 0.15s ease;
  width: 100%;
  text-align: left;
}

.savedScreen__card:hover {
  background: var(--panel-2);
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.savedScreen__icon\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*rgba\(255,\s*255,\s*255,\s*0\.45\);\s*\}/,
  `.savedScreen__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 38px;
  height: 38px;
  border-radius: 8px;
  background: var(--panel-2);
  color: var(--accent);
  flex-shrink: 0;
  box-shadow: none;
  border: 1px solid var(--line);
}`
)

// 12. Clean .actionSheet
css = css.replace(
  /\.actionSheet__panel\s*\{[\s\S]*?box-shadow:\s*0\s*-10px\s*40px\s*rgba\(21,\s*85,\s*150,\s*0\.2\);[\s\S]*?display:\s*flex;[\s\S]*?flex-direction:\s*column;\s*\}/,
  `.actionSheet__panel {
  position: relative;
  z-index: 2;
  background: var(--panel);
  border-radius: 20px 20px 0 0;
  border-top: 1px solid var(--line);
  padding: 14px 20px calc(24px + env(safe-area-inset-bottom, 0px));
  box-shadow: none;
  max-width: 480px;
  max-height: min(85vh, 680px);
  width: 100%;
  margin: 0 auto;
  animation: slideUp 0.22s cubic-bezier(0.16, 1, 0.3, 1);
  display: flex;
  flex-direction: column;
}`
)

css = css.replace(
  /\.actionSheet__collectionItem\s*\{[\s\S]*?\.actionSheet__collectionItem\.is-active::before\s*\{[\s\S]*?\}\s*\}/,
  `.actionSheet__collectionItem {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 18px;
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 12px;
  cursor: pointer;
  transition: background 0.15s ease;
  width: 100%;
  text-align: left;
  box-shadow: none;
}

.actionSheet__collectionItem:hover {
  background: var(--panel);
  transform: none;
  box-shadow: none;
}

.actionSheet__collectionItem.is-active {
  background: var(--accent);
  border-color: transparent;
  box-shadow: none;
}`
)

css = css.replace(
  /\.actionSheet__collectionItem\.is-active \.actionSheet__collectionName\s*\{\s*color:\s*#ffffff;\s*text-shadow:[^;]+;\s*\}/,
  `.actionSheet__collectionItem.is-active .actionSheet__collectionName {
  color: #0b132b;
  text-shadow: none;
}`
)

css = css.replace(
  /\.actionSheet__collectionItem\.is-active \.actionSheet__collectionCheck\s*\{\s*color:\s*#ffffff;\s*text-shadow:[^;]+;\s*\}/,
  `.actionSheet__collectionItem.is-active .actionSheet__collectionCheck {
  color: #0b132b;
  text-shadow: none;
}`
)

css = css.replace(
  /\.actionSheet__saveNoteBtn\s*\{[\s\S]*?\.actionSheet__saveNoteBtn:hover\s*\{[\s\S]*?inset\s*0\s*1px\s*1\.5px\s*rgba\(255,\s*255,\s*255,\s*0\.6\);\s*\}/,
  `.actionSheet__saveNoteBtn {
  background: var(--accent);
  color: #0b132b;
  border: 0;
  border-radius: 10px;
  padding: 10px 22px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  box-shadow: none;
  transition: opacity 0.15s ease;
}

.actionSheet__saveNoteBtn:hover {
  opacity: 0.9;
  transform: none;
  box-shadow: none;
}`
)

css = css.replace(
  /\.actionSheet__btn\s*\{[\s\S]*?\.actionSheet__btn\.is-active::before\s*\{[\s\S]*?\}\s*\}/,
  `.actionSheet__btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: var(--panel-2);
  border: 1px solid var(--line);
  border-radius: 12px;
  padding: 14px 8px;
  cursor: pointer;
  box-shadow: none;
  transition: background 0.15s ease;
}

.actionSheet__btn:hover {
  background: var(--panel);
  transform: none;
  box-shadow: none;
}

.actionSheet__btn.is-active {
  background: var(--accent);
  border-color: transparent;
  color: #0b132b;
  box-shadow: none;
}`
)

css = css.replace(
  /\.actionSheet__btn\.is-active \.actionSheet__btnIcon\s*\{\s*color:\s*#ffffff;\s*filter:\s*drop-shadow\(0\s*1px\s*2px\s*rgba\(0,\s*0,\s*0,\s*0\.3\)\);\s*\}/,
  `.actionSheet__btn.is-active .actionSheet__btnIcon {
  color: #0b132b;
  filter: none;
}`
)

css = css.replace(
  /\.actionSheet__btn\.is-active \.actionSheet__btnLabel\s*\{\s*color:\s*#ffffff;\s*text-shadow:\s*0\s*1px\s*2px\s*rgba\(0,\s*0,\s*0,\s*0\.3\);\s*\}/,
  `.actionSheet__btn.is-active .actionSheet__btnLabel {
  color: #0b132b;
  text-shadow: none;
}`
)

// 13. Clean .reader__heading
css = css.replace(
  /\.reader__heading\s*\{[\s\S]*?\.reader__heading::before\s*\{[\s\S]*?\}\s*\}/,
  `.reader__heading {
  padding: 18px 22px;
  background: var(--panel);
  border: 1px solid var(--line);
  border-radius: 14px;
  margin-bottom: 22px;
  box-shadow: none;
  position: relative;
}`
)

// 14. Clean .verse.is-on
css = css.replace(
  /\.verse\.is-on\s*\{\s*box-shadow:\s*0\s*4px\s*20px\s*rgba\(56,\s*189,\s*248,\s*0\.15\);\s*\}/,
  `.verse.is-on {
  box-shadow: none;
}`
)

// 15. Clean .topbar__kbToggleBtn & .amKeyboard
css = css.replace(
  /\.topbar__kbToggleBtn\.is-active\s*\{[\s\S]*?box-shadow:\s*0\s*0\s*10px\s*rgba\(56,\s*189,\s*248,\s*0\.5\);\s*\}/,
  `.topbar__kbToggleBtn.is-active {
  background: var(--accent);
  color: #0b132b;
  border-color: var(--accent);
  box-shadow: none;
}`
)

css = css.replace(
  /\.amKeyboard\s*\{[\s\S]*?box-shadow:\s*0\s*-12px\s*36px\s*rgba\(0,\s*0,\s*0,\s*0\.7\);[\s\S]*?animation:\s*slideUpKeyboard\s*0\.2s\s*cubic-bezier\(0\.16,\s*1,\s*0\.3,\s*1\)\s*both;\s*\}/,
  `.amKeyboard {
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 480px;
  background: var(--panel);
  border-top: 1px solid var(--line);
  box-shadow: none;
  padding: 8px 6px calc(10px + env(safe-area-inset-bottom, 0px));
  z-index: 80;
  display: flex;
  flex-direction: column;
  gap: 6px;
  user-select: none;
  box-sizing: border-box;
  animation: slideUpKeyboard 0.2s cubic-bezier(0.16, 1, 0.3, 1) both;
}`
)

css = css.replace(
  /\.amKeyboard__key\s*\{[\s\S]*?box-shadow:\s*0\s*1px\s*3px\s*rgba\(0,\s*0,\s*0,\s*0\.3\);[\s\S]*?touch-action:\s*manipulation;\s*\}/,
  `.amKeyboard__key {
  flex: 1;
  min-width: 0;
  height: 38px;
  background: var(--panel-2);
  border: 1px solid var(--line);
  color: var(--ink);
  border-radius: 8px;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: none;
  transition: all 0.12s ease;
  padding: 0;
  touch-action: manipulation;
}`
)

css = css.replace(
  /\.amKeyboard__key\.is-active\s*\{[\s\S]*?box-shadow:\s*0\s*0\s*12px\s*rgba\(56,\s*189,\s*248,\s*0\.5\);\s*\}/,
  `.amKeyboard__key.is-active {
  background: var(--accent);
  color: #0b132b;
  border-color: var(--accent);
  font-weight: 800;
  box-shadow: none;
}`
)

fs.writeFileSync('src/styles.css', css, 'utf-8')
console.log('Cleaned styles.css successfully!')
