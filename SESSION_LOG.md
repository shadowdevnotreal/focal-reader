# Focal — Session Log
**Last updated:** 2026-03-17

---

## Project Overview
**Focal** — Single-file PWA speed reader (`index.html`, ~5396 lines)
- RSVP reader with WPM control, pomodoro, library
- Reed-Kellogg sentence diagrammer (canvas-based, rule-driven POS tagger)
- Service worker + manifest for offline/installable PWA

Root: `/mnt/d/_00/spritz/`

Key files:
- `index.html` — entire app (HTML + CSS + JS)
- `sw.js` — service worker (cache-first for all assets except Groq API; version focal-v3)
- `manifest.json` — PWA manifest
- `reed-kellogg-standards-guide.md` — R-K spec (also embedded in index.html as `<script type="text/plain" id="rk-guide-src">`)
- `SESSION_LOG.md` — this file

---

## Completed Work (chronological)

### Reed-Kellogg Diagrammer — Core Build
- Rule-based POS tagger (`tagPOS`) with two-pass context disambiguation
- `analyzeSentence()` — finds subject, verbs, aux, direct object, prep phrases, relative clauses, conjunctions, adverb modifiers, object modifiers
- `drawReedKellogg()` — canvas 2D renderer (2× retina scaling)
- §6.4 adverb placement (pre-verbal left-lean, post-verbal right-lean)
- §6.5 compound predicate fork layout
- §7.2.1 shared auxiliary on both compound branches
- §5.2 / §15.2 det/adj modifiers as diagonals below subject and DO
- §9.2 / §14.4 relative clause subordinate baseline with dashed connector
- §13.2 compound predicate via fork lines

### Adverb "mass" placement saga (~10 iterations)
- "mass" in "is mass doxxing" must appear BELOW the top fork line on a diagonal
- Fix: `forkSpread = hasTopMods ? 30 : 18`, `tipY = forkTopY + 22`

### AUX tagger fix
- "is mass doxxing" — "is" was tagged VERB not AUX because look-ahead didn't skip intervening adverbs
- Fix: loop in second-pass look-ahead that skips `adv`/`noun` tokens up to 5 positions

### Relative clause — REL.PRON-as-subject fix
- Sentences like "on everyone who enters his space" — "who" was incorrectly picked as subject
- Post-processing in `analyzeSentence()`:
  1. If `result.subj` is a REL.PRON token → scan back to find real noun (e.g. "everyone")
  2. Remove relative-clause verbs from `result.verbs` (they belong to the subordinate line, not main predicate)

### UI Features Added
- **Brightness slider** — `filter: brightness()` on `document.documentElement`, min=50 max=100
- **Three reset buttons**: diagram card "Clear", Load Text "Clear Reader", Settings "Factory Reset"
- **Load R-K Guide button** — guide embedded as `<script type="text/plain" id="rk-guide-src">`, loads with markdown stripped (headings, bold, bullets, tables, code removed) for clean RSVP reading
- **WPM preset buttons** — chips: 150 / 200 / 250 / 300 / 400 / 500 below the WPM slider; active one highlights in accent color, stays in sync with slider
- **Exit Fullscreen button** (`#btn-exit-fs`) — fixed position top-right, visible only in fullscreen mode; fades in/out

### Fullscreen mode fixes
- Hides: `#input-section`, `#stats-card`, `#ai-card`, `#app-header`, `#infobar`, `#diagram-card`, `#lib-card`, `#pomo-card`, `.card-group-label`
- `overflow: hidden` on `#app`

### Diagram Interactivity (canvas hover + click-to-seek)
- `diagramHitMap[]` — array of hit entries built during each draw
- `lastDiagramState` — stores `{tagged, analysis, sentStart}` for redraw on hover
- `activeHitWi` — currently hovered word index
- **Hover**: `mousemove` checks `diagramHitMap`, redraws with `highlightWi` param
- **Click**: `click` calls `seekToWord(h.wi)` — jumps RSVP reader to that word
- **POS tag chips**: each chip is also clickable → `seekToWord(sentStart + i)`
- **Hit zones**: column-width-based `rx` / `ry` (not fixed small radius) for generous hit areas
- **Visual highlight**: indigo fill (opacity 0.22) drawn BEFORE text + bright `#818cf8` ring drawn AFTER all text (always on top)
- **Relative clause elements** now in hit map: REL.PRON, VERB (rel.), OBJ (rel.)
- **Compound verb forks** both in hit map: VERB (top), VERB (bottom)
- `canvas.style.width = w + 'px'` — pins CSS display width to prevent 2× scaling mismatch

### Theme-aware colors
- `--pos-adv-canvas: #e879f9` (dark) / `#9333ea` (light) — canvas adverb line color
- `--pos-adv: #e879f9` (dark) / `#9333ea` (light) — POS chip tag color
- ADV legend dot dynamically reads `--pos-adv` via `getComputedStyle`

### Slider track visibility fix
- Track was `var(--bg-raised)` = white in light mode (invisible)
- Changed to `var(--border)` = `#d8d8e4` light / dark purple dark — visible in both themes

### Tooltip
- `#diagram-tooltip` uses `position: fixed` with `e.clientX/Y` (was broken with `position: absolute`)

---

## Completed Work — 2026-03-17 Session

### Hit Map — Full Coverage
All diagram elements now in `diagramHitMap` (hover tooltip + click-to-seek):
- **Subject modifiers** (det/adj diagonals below subject) — `tagged[mi].label + ' (subj. mod.)'`
- **Object modifiers** (det/adj diagonals below direct object) — `tagged[mi].label + ' (obj. mod.)'`
- **Verb adverb modifiers** — single verb case (`ADV (verb mod.)`) and both forks in compound case
- **Prep phrase prep word** — `PREP` label, cx = attachX + 18
- **Prep phrase object noun** — `PP OBJ (label)`, cx = attachX + 65
- **Prep phrase det/adj modifiers** (ppMods) — `tagged[mi].label + ' (pp mod.)'`
- **Relative clause object modifiers** (relMods) — `tagged[mi].label + ' (rel. mod.)'`

### Sentence-Initial Prep Phrase Fix
`analyzeSentence()`: PP search now starts from index 0 (was `subj + 1`).
- Added `subjGuard` set — prevents subject/subjMods from being consumed as PP object words.
- Detects sentences like "In the morning, she runs" correctly.

### WPM Preset Sync Refactor
- `syncWpmPresets()` promoted to IIFE scope; `adjWPM()` (arrow key WPM) now also syncs chips.
- Called during init so saved WPM correctly highlights matching chip on page load.

### Service Worker — Full Offline Coverage (focal-v3)
Unified cache-first for everything except Groq API (always network). CDN libs, fonts, PDF.js, JSZip, OpenDyslexic all cached on first use → fully offline after first visit.

### Guide Reference Panel
New 📖 side drawer (left-slide, z-200) with `markdownToHtml()` renderer (headings, bold, italic, code, links, lists, blockquotes, tables). Lazy-rendered. "Load in Reader" button loads stripped text into RSVP. Escape closes. CSS: `.guide-content` styles.

---

## Known State / Pending

### Diagram Analyzer Limitations
- Sentence fragments / no main verb — diagram shows whatever structure is found, with note
- Sentence-initial preps now detected; very complex nested structures may still have edge cases

### Potential Next Work
- Consider a "sentence structure confidence" indicator
- Guide panel: section-jump nav (anchor links to R-K standard sections)
- Service worker: `stale-while-revalidate` for CDN libs to get updates without blocking

---

## Architecture Notes

### POS Tagger (`tagPOS`)
Two-pass: first pass morphological (suffixes, word lists), second pass context disambiguation.
Key second-pass rules:
- AUX: verb in AUX_WORDS followed (within 5 tokens, skipping adv/noun) by verb/gerund → AUX
- REL.PRON: who/whom/that/which after noun/pron → REL.PRON
- DET vs PRON: his/her/its followed by noun → DET, standalone → PRON
- PREP vs PART: prep not followed by noun phrase → adverb particle

### Canvas Coordinate System
- `w = canvas.offsetWidth` (CSS pixels, measured before draw)
- `canvas.style.width = w + 'px'` (pinned to prevent scaling)
- `canvas.width = w * 2` (2× retina buffer)
- `ctx.scale(2, 2)` → all drawing in logical CSS pixels (0..w, 0..h)
- Hit map stores logical CSS coordinates → matches `getBoundingClientRect()` mouse coords

### diagramHitMap entry shape
```js
{
  wi: Number,       // global word index (sentStart + local index)
  word: String,     // display word
  label: String,    // grammatical label for tooltip
  cx: Number,       // center x (logical px)
  cy: Number,       // center y (logical px)
  rx: Number,       // hit half-width
  ry: Number        // hit half-height
}
```
Hit test: `Math.abs(mx - h.cx) < (h.rx||h.r) && Math.abs(my - h.cy) < (h.ry||h.r)`
