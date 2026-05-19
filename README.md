<p align="center">
  <img src="https://img.shields.io/badge/type-PWA-6366f1?style=for-the-badge&logo=pwa&logoColor=white" alt="PWA"/>
  <img src="https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-0D1B2A?style=for-the-badge&logo=html5&logoColor=white" alt="Stack"/>
  <img src="https://img.shields.io/badge/AI-Groq%20%7C%20Llama%203.3-22c55e?style=for-the-badge&logo=meta&logoColor=white" alt="AI"/>
  <img src="https://img.shields.io/badge/license-MIT-f59e0b?style=for-the-badge" alt="MIT"/>
  <img src="https://img.shields.io/badge/dependencies-zero-10b981?style=for-the-badge" alt="Zero deps"/>
  <img src="https://img.shields.io/badge/works-offline-3b82f6?style=for-the-badge&logo=wifi&logoColor=white" alt="Offline"/>
</p>

<h1 align="center">Focal</h1>
<p align="center"><strong>Speed Reading Reimagined</strong></p>

<p align="center">
  <em>Read faster. Understand deeper. Track everything.</em><br/>
  A single-file PWA speed reader built on RSVP science, psychometric diagnostics, and AI-powered learning.<br/>
  Originally designed for people with reading disabilities. Now built for everyone.
</p>

<p align="center">
  <a href="#features"><strong>Features</strong></a> ·
  <a href="#the-science"><strong>Science</strong></a> ·
  <a href="#getting-started"><strong>Get Started</strong></a> ·
  <a href="https://github.com/shadowdevnotreal/focal-reader/issues"><strong>Report Bug</strong></a>
</p>

---

## Why Focal?

Traditional reading is slow. Your eyes spend **30% of reading time just moving** between words. RSVP (Rapid Serial Visual Presentation) eliminates that entirely — words appear one at a time at a fixed point, so your brain focuses purely on comprehension.

Focal takes this decades-old research technique and wraps it in a modern, privacy-first app with AI analysis, clinical-grade reading diagnostics, and interactive testing — all in a single HTML file with zero server dependencies.

<table>
<tr>
<td align="center"><strong>🧠</strong><br/>RSVP + ORP Science</td>
<td align="center"><strong>📊</strong><br/>6 Psychometric Metrics</td>
<td align="center"><strong>🤖</strong><br/>AI Quizzes & Analysis</td>
<td align="center"><strong>🔒</strong><br/>100% Private & Offline</td>
</tr>
</table>

---

## Features

### 📑 Three-Tab Interface

| Tab | Purpose |
|-----|---------|
| **Read** | Load text, read at your speed, summarize, track daily progress |
| **Learn** | Interactive quizzes (MC, T/F, fill-in-blank), sentence diagrams, reading level analysis |
| **Stats** | Psychometric dashboard, WPM charts, session logs, library, AI insights |

### ⚡ Reading Engine

- **RSVP with ORP** — Optimal Recognition Point highlighting (Brysbaert & Nazir, 1998)
- **Intelligent pacing** — word length, punctuation, and paragraph breaks adjust timing
- **Multi-language ORP** — Latin, Cyrillic, CJK, Arabic, Devanagari
- **Speed control** — 100–1000 WPM with chunking (1–3 words)
- **Speed Ramp-Up** — optional soft start: begins 40% slower and accelerates to full WPM over the first 50 words
- **Zen mode** — press `Z` for distraction-free reading

### 🎓 Onboarding & Guided Tour

New users get a **structured onboarding experience** designed around RSVP adaptation science:

```
┌─────────────────────────────────────────────────────┐
│  Welcome to Focal                                   │
│                                                     │
│  RSVP takes about 2 weeks to feel natural —         │
│  your brain needs time to build the reflex.         │
│                                                     │
│  DAYS 1–3    DAYS 4–7    DAYS 8–14                  │
│  200 WPM     250 WPM     300+ WPM                   │
│  Build habit  Feel rhythm  Comprehension locks in   │
│                                                     │
│  Training Day 1 of 14  ▓░░░░░░░░░░░░░               │
│                                                     │
│  [Start Calibration (200 WPM)]  [Skip for now]      │
└─────────────────────────────────────────────────────┘
```

After onboarding, a **6-step spotlight tour** walks through every key feature — with a glowing highlight ring, contextual explanation, and step-dot progress indicator. Runs once and stores its state locally.

### 📖 Reading Display Mode

Adapt the RSVP word typography to match your cognitive goal — or let the app decide automatically:

| Mode | Typography | Best For |
|------|-----------|----------|
| **Default** | Monospace, neutral baseline | General reading |
| **Scan** | Light Inter, open letter-spacing | High-WPM skimming (≥350 WPM) |
| **Deep** | Bold Georgia serif | Slow deliberate comprehension (≤200 WPM) |
| **Auto ✦** | Switches automatically | Adapts in real-time as you drag the WPM slider |

**Auto mode** monitors your WPM slider live and switches typography the moment you cross the threshold — no manual switching needed.

### 📈 Psychometric Diagnostics

> Six clinically-grounded metrics tracked automatically — based on Hasbrouck & Tindal norms and DIBELS assessment framework.

| Metric | What It Measures | Clinical Significance |
|--------|------------------|-----------------------|
| **Consistency** | WPM coefficient of variation (CV%) | High variability flags attention/decoding issues |
| **Avg Focus** | Sustained attention span (play→pause) | Short durations may indicate attention difficulty |
| **Regressions** | Backward navigations per 1,000 words | >15/1000 flags comprehension difficulty |
| **Stamina** | WPM decline within sessions | <80% suggests reading fatigue |
| **Comprehension** | Average interactive quiz score | Direct measure of retention |
| **Effective WPM** | Speed × comprehension rate | The gold-standard composite |

### 🧪 Interactive Quizzes

AI-generated assessments with real grading and per-text score tracking:

```
┌─ Q1 — Multiple Choice ──────────────────────────┐
│ What is the primary advantage of RSVP?          │
│                                                 │
│  (A) Eliminates saccadic eye movement     ← ✅  │
│  (B) Increases font size                        │
│  (C) Adds background music                      │
│  (D) Scrolls text automatically                 │
│                                                 │
│  ✅ Correct! RSVP removes the need for eyes to  │
│  jump between fixation points.                   │
└──────────────────────────────────────────────────┘
```

- **Multiple choice** — 4 options with clickable cards
- **True/False** — binary assessment
- **Fill-in-the-blank** — free text with fuzzy matching
- Scores saved per-text and feed into Comprehension & Effective WPM

### 🔬 Reed-Kellogg Sentence Diagrammer

An interactive, rule-based **sentence diagrammer** built into the Learn tab:

- Parses any entered sentence into parts of speech using a custom two-pass POS tagger
- Renders a proper Reed-Kellogg diagram on HTML5 Canvas — subject, verb, direct object, prepositional phrases, relative clauses
- Handles compound predicates, gerund subjects, adjective chains, auxiliary verb groups
- Retina-quality output (2× canvas scaling) with text clipping for overflow prevention
- Useful for grammar instruction, ESL learning, and linguistic analysis

### 🤖 AI-Powered Analysis

> Powered by **Groq** (Llama 3.3 70B). Your API key goes directly to Groq — Focal never touches it.

| Feature | Tab | Description |
|---------|-----|-------------|
| **Summarize** | Read | Quick overview without leaving the reader |
| **Key Points** | Learn | Most important ideas extracted |
| **Quiz Me** | Learn | Interactive MC/TF/FIB quiz, auto-graded |
| **Comprehension Check** | Learn | Quick 4-question MC based on current position |
| **Explain Simply** | Learn | Complex text rewritten in plain language |
| **Reading Level** | Learn | Flesch-Kincaid grade + vocabulary analysis |
| **AI Insights** | Stats | Clinical psychometric analysis of your patterns |

### ♿ Accessibility

> Built accessibility-first for readers with dyslexia, ADHD, low vision, and visual processing disorders.

**Accessible Reading Fonts** — two clinically-designed typefaces selectable with a single click:

| Font | Design Principle | Best For |
|------|-----------------|----------|
| **OpenDyslexic** | Weighted letter bottoms prevent b/d/p/q reversal | Dyslexia |
| **Atkinson Hyperlegible** | Maximized inter-character differentiation | Low vision |

Additional accessibility features:
- **High contrast mode** + adjustable accent colors + dark/light themes
- **Full background palette** — 2D canvas picker, 24 presets, hex input, depth/warmth sliders
- **Brightness control** — dim the app independently of system brightness
- **Keyboard-only** navigation — every function has a shortcut
- **Touch** — tap, swipe left/right, swipe up/down
- **Screen readers** — `aria-live`, `aria-expanded`, `aria-label` throughout
- **`prefers-reduced-motion`** — all animations suppressed at OS level

### 💡 Contextual Tooltips

Every setting in the Settings panel has an **ⓘ info badge** with a detailed explanation on hover — covering what the setting does, the science behind it, and when to use it. No documentation required.

### 🔥 Gamification

```
🔥 3    ████████████░░░░░░░░  7 / 10 min today    42% to 5K reader
```

- **Daily streak** with fire badge
- **Reading goal** — configurable 5–60 minute daily target
- **Milestone badges** — 100 → 500 → 1K → 5K → 10K → 25K → 50K → 100K → 250K words

### ⏱️ Focus Timer

Always visible in the header. Full Pomodoro:

- Work (5–60 min) · Short break (1–15 min) · Long break (5–30 min)
- Round counter (2–8 rounds) with auto-start
- Progress ring · Size slider · Session stats tracking

### 💾 Session Persistence

Everything survives a page refresh — zero data loss:

| What's Saved | Where |
|---|---|
| Loaded text + reading position | `localStorage` (auto-saved continuously) |
| All preferences + card states + active tab | `localStorage` |
| Stats, psychometrics, quiz scores | `localStorage` |
| Library texts | `IndexedDB` |
| Timer state (remaining, round, break) | `localStorage` |

### 📂 Input Sources

```
TXT · PDF · EPUB · DOCX · Markdown · RTF · HTML · CSV · TSV · URL
```

Drag-and-drop supported. PDF.js, JSZip, and Mammoth.js lazy-loaded from CDN on first use.

---

## Getting Started

```bash
# That's it. Just open it.
open index.html
```

1. **Add text** — paste, upload, drag-drop, or fetch from URL
2. **Press Space** to start reading
3. **Follow the onboarding** — start at 200 WPM and follow the 14-day ramp
4. **Take the feature tour** — a guided spotlight walkthrough runs on first launch
5. **Switch to Learn** to quiz yourself
6. **Check Stats** for your psychometric profile

### ⌨️ Keyboard Shortcuts

> Press `?` anytime for the full overlay.

| Key | Action | Key | Action |
|-----|--------|-----|--------|
| `Space` | Play / Pause | `Z` | Zen mode |
| `← →` | ±1 word | `F` | Fullscreen |
| `Shift+← →` | ±5 words | `T` | Toggle theme |
| `↑ ↓` | ±25 WPM | `S` | Settings |
| `1` `2` `3` | Chunk size | `?` | Shortcut overlay |

---

## The Science

Focal is built on peer-reviewed reading research:

> **RSVP**: Forster (1970), Potter (1984) — serial presentation allows processing rates up to **700+ WPM**
>
> **ORP**: Brysbaert & Nazir (1998) — fixating slightly left of center yields **fastest word recognition**
>
> **Psychometrics**: Hasbrouck & Tindal fluency norms, DIBELS assessment framework
>
> **Pacing**: Word length, punctuation, and paragraph structure **modulate display timing** automatically
>
> **Accessibility**: OpenDyslexic (Antinis, 2011) — weighted letterforms reduce reversal errors. Atkinson Hyperlegible (Braille Institute, 2019) — maximized inter-character differentiation for low vision.

---

## Technical Details

| | |
|---|---|
| **Architecture** | Single-file PWA — all HTML + CSS + JS in one IIFE |
| **Size** | ~550KB (~9,000 lines) |
| **Framework** | None. Zero dependencies. Pure vanilla. |
| **Offline** | Service worker with cache-first strategy |
| **Storage** | `localStorage` + `IndexedDB` — nothing leaves your device |
| **AI** | Optional Groq API — client-to-Groq direct, bypasses SW |
| **Parsing** | PDF.js · JSZip · Mammoth.js — CDN, lazy-loaded |
| **PWA** | Installable with manifest + icons |

### 🔒 Privacy

All text is processed locally. Nothing is sent to any server unless you explicitly use AI features (which communicate directly with Groq's API). Your library, stats, preferences, and reading history exist only on your device and never leave it.

---

## Who This Is For

| | |
|---|---|
| 🎓 **Students** | Read faster, retain more, test comprehension |
| 🔬 **Researchers** | Process large volumes of text efficiently |
| 🧠 **People with dyslexia/ADHD** | RSVP eliminates saccadic eye movement entirely |
| 🌍 **Language learners** | Practice reading speed in a second language |
| 📚 **Anyone who reads** | Understand your reading patterns with real data |

---

## Contributing

Contributions, bug reports, and feature requests are welcome.

**High-impact areas:**
- Additional language support and RTL text handling
- Clinical research partnerships for SLD efficacy studies
- Mobile gesture refinements
- EPUB format improvements
- Screen reader testing

---

## Research References

```
Forster, K.I. (1970). Visual perception of rapidly presented word sequences
  of varying complexity. Perception & Psychophysics, 8(4), 215–221.

Potter, M.C. (1984). Rapid serial visual presentation (RSVP): A method for
  studying language processing. In Kieras & Just (Eds.), New methods in
  reading comprehension research. Erlbaum.

Brysbaert, M. & Nazir, T. (1998). Visual constraints in written word
  recognition: Evidence from the optimal viewing-position effect.
  Journal of Research in Reading, 21(3), 216–230.

Hasbrouck, J. & Tindal, G.A. (2006). Oral reading fluency norms: A valuable
  assessment tool for reading teachers. The Reading Teacher, 59(7), 636–644.
```

---

<p align="center">
  <strong>Focal</strong> — Reading Without Barriers<br/>
  <em>Built for the few. Used by everyone.</em>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/made%20with-science-6366f1?style=flat-square" alt="Science"/>
  <img src="https://img.shields.io/badge/powered%20by-RSVP-22c55e?style=flat-square" alt="RSVP"/>
  <img src="https://img.shields.io/badge/accessibility-first-f59e0b?style=flat-square" alt="A11y"/>
</p>

---

## License

MIT — free for personal and commercial use.
