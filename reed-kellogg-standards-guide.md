# Reed-Kellogg Sentence Diagramming Standards
## Complete Knowledge Base & Reference Guide
> Version 1.0 — Designed for NLP Tooling Integration

---

## Table of Contents

1. [Overview & History](#1-overview--history)
2. [Core Visual Grammar](#2-core-visual-grammar)
3. [The Baseline System](#3-the-baseline-system)
4. [Parts of Speech — Classification Rules](#4-parts-of-speech--classification-rules)
5. [Simple Sentences](#5-simple-sentences)
6. [Modifiers](#6-modifiers)
7. [Compound Structures](#7-compound-structures)
8. [Phrases](#8-phrases)
9. [Clauses](#9-clauses)
10. [Complex & Compound-Complex Sentences](#10-complex--compound-complex-sentences)
11. [Special Constructions](#11-special-constructions)
12. [Punctuation & Conjunctions](#12-punctuation--conjunctions)
13. [Common Errors & Disambiguation Rules](#13-common-errors--disambiguation-rules)
14. [POS Tagging Decision Trees](#14-pos-tagging-decision-trees)
15. [Quick Reference Card](#15-quick-reference-card)

---

## 1. Overview & History

Reed-Kellogg diagramming was developed by **Alonzo Reed** and **Brainerd Kellogg** in the 1870s, formalized in their 1877 textbook *Higher Lessons in English*. It remains the dominant structural visualization method for English grammar in American education.

The system represents sentences as a **hierarchical spatial layout** where:
- Horizontal lines carry core grammatical elements (subject, verb, object/complement)
- Diagonal and vertical lines represent relationships and dependencies
- Position encodes grammatical function, not just word order

---

## 2. Core Visual Grammar

### 2.1 Line Types and Their Meanings

```
─────────────────    Horizontal baseline: carries main clause elements
        |            Vertical full line: separates subject | verb (or verb | object)
        /            Diagonal slant line: modifier attached below the word it modifies
       ---           Short horizontal under slant: holds the modifier word
    - - - - -        Dashed horizontal line: connects subordinate clause to its antecedent
        ╱            Diagonal from baseline: indirect object, predicate complement fork
```

### 2.2 Spatial Hierarchy

```
MAIN CLAUSE always occupies the topmost baseline.
    │
    ├── Modifiers hang BELOW on slant lines
    │
    ├── Subordinate clauses occupy LOWER baselines
    │       └── connected to antecedent by dashed line
    │
    └── Compound elements fork with stepped lines connected by conjunction on dotted vertical
```

---

## 3. The Baseline System

### 3.1 Main Clause Baseline

The main baseline is a long horizontal line divided by two vertical marks:

```
subject | verb | object/complement
───────────────────────────────────
```

- **First vertical bar** (full height, crosses baseline): separates subject from verb
- **Second vertical bar** (half height, sits ON baseline, does not cross): separates verb from object or complement

```
ASCII Representation:

     man   |   runs   |   race
─────────────────────────────────────────
```

### 3.2 Linking Verb with Predicate Noun/Adjective

The predicate noun or adjective after a linking verb is separated by a **diagonal line leaning BACK toward the subject** (not a vertical bar):

```
     man   |   is   ╲   teacher
────────────────────────────────────────
```

The backward diagonal signals that the complement refers back to the subject.

### 3.3 Intransitive Verb (No Object)

```
     man   |   runs
──────────────────────────────────────
```

No second divider needed when there is no object or complement.

---

## 4. Parts of Speech — Classification Rules

### 4.1 Master POS Tag Reference

| Tag | Full Name | Definition | Examples |
|-----|-----------|------------|---------|
| NOUN | Noun | Person, place, thing, idea | man, city, freedom |
| VERB | Verb | Action, state, occurrence | runs, is, seems |
| ADJ | Adjective | Modifies a noun or pronoun | tall, red, ancient |
| ADV | Adverb | Modifies verb, adjective, or other adverb | quickly, very, mass |
| PREP | Preposition | Shows relationship between noun and another element | on, in, of, by |
| DET | Determiner | Specifies/quantifies a noun | the, a, this, his, every |
| PRON | Pronoun | Replaces a noun | he, she, it, they |
| REL.PRON | Relative Pronoun | Introduces relative clause, refers back to antecedent | who, which, that, whom |
| CONJ | Coordinating Conjunction | Joins equal grammatical elements | and, but, or, nor, & |
| SUB.CONJ | Subordinating Conjunction | Introduces subordinate clause | because, although, when, if |
| PART | Particle | Verb modifier that is not a preposition | up (in "give up") |
| INTJ | Interjection | Exclamatory word, not grammatically integrated | oh, wow, hey |
| AUX | Auxiliary Verb | Helping verb supporting main verb | is, was, have, will, can |

### 4.2 Critical Disambiguation Rules

#### NOUN vs. ADV (e.g., "mass")
- If the word directly precedes a verb and modifies HOW the action is performed → **ADV**
- If the word is the subject, object, or predicate complement → **NOUN**
- Test: Can you replace it with "quickly" or "extensively"? → ADV
- Example: "mass doxxing" — "mass" answers "how?" → **ADV**

#### DET vs. PRON (e.g., "his")
- If followed by a noun it specifies → **DET** (his space)
- If standing alone, replacing a noun → **PRON** (the space is his)

#### PREP vs. PART (e.g., "on")
- If followed by a noun phrase it governs → **PREP** (lying on everyone)
- If fused with the verb to form an idiom → **PART** (move on, give up)

#### REL.PRON vs. PRON
- If introducing a clause that modifies an antecedent noun → **REL.PRON** (who, which, that)
- If standing in place of a noun as subject or object → **PRON**

#### AUX vs. VERB
- "is/was/were/have/had/will" standing alone as main verb → **VERB**
- "is/was/were/have/had/will" + another verb form → the standalone form is **AUX**, the main form is **VERB**
- Example: "is doxxing" → "is" = AUX, "doxxing" = VERB (present participle)

---

## 5. Simple Sentences

### 5.1 Subject — Verb

```
Sentence: "Birds fly."

  Birds  |  fly
─────────────────────
```

### 5.2 Subject — Verb — Direct Object

```
Sentence: "The man reads books."

   man   |  reads  |  books
─────────────────────────────
    │
   the
```

"The" hangs on a diagonal slant beneath "man."

### 5.3 Subject — Linking Verb — Predicate Noun (PN)

```
Sentence: "He is a teacher."

   He   |  is  ╲  teacher
─────────────────────────────
                    │
                    a
```

### 5.4 Subject — Linking Verb — Predicate Adjective (PA)

```
Sentence: "She seems tired."

   She  |  seems  ╲  tired
─────────────────────────────
```

### 5.5 Subject — Verb — Indirect Object — Direct Object

The indirect object sits on a horizontal line below the verb, connected by a diagonal:

```
Sentence: "She gave him the book."

   She  |  gave  |  book
─────────────────────────────
              │       │
             him     the
             (on diagonal from verb)
```

```
ASCII Detail:

   She  |  gave   |  book
─────────────────────────────────
              \        |
              him     the
```

---

## 6. Modifiers

### 6.1 Single Adjective (modifies noun)

Adjectives hang on a **diagonal slant line beneath the noun** they modify:

```
Sentence: "The tall man runs."

    man   |  runs
──────────────────────
    │
   the
    \
   tall
```

Multiple adjectives each get their own diagonal:

```
    man   |  runs
──────────────────────
   / │
 the tall
```

### 6.2 Single Adverb (modifies verb)

Adverbs hang on a **diagonal slant line beneath the verb** they modify:

```
Sentence: "He runs quickly."

    He  |  runs
──────────────────────
           │
         quickly
```

### 6.3 Adverb Modifying Adjective or Another Adverb

The adverb hangs beneath the word it modifies, even when that word is already on a slant:

```
Sentence: "He runs very quickly."

    He  |  runs
──────────────────────
           │
         quickly
           │
          very
```

### 6.4 Pre-verb Adverb (e.g., "mass" before "doxxing")

When an adverb precedes the verb it modifies (as in "mass doxxing"), it still attaches **below and under the verb**, positionally toward the left side of the verb's line segment to reflect its pre-verb surface position:

```
  man  |  is doxxing
──────────────────────────────
           │
          mass  ← positioned left-center under "doxxing"
```

**Rule:** The slant always originates from directly beneath the modified word, regardless of the adverb's surface position in the sentence. The left-lean of the attachment reflects its pre-modifier nature.

### 6.5 Modifier Placement in Compound Predicates (Tooling-Critical)

When a compound predicate uses forked baselines, adverb modifiers must attach **only to their specific verb branch** and must **not cross into the other branch's visual space**:

- **Top-fork modifiers** (modifying the upper verb): Slant **upward** from the top fork line to avoid crossing through the fork zone into the bottom branch's area.
- **Bottom-fork modifiers** (modifying the lower verb): Slant **downward** from the bottom fork line.

```
         mass  ← ABOVE top fork, clearly under "doxxing"
           /
  ┌── is doxxing ──────────
  │···&···
  └── is lying ────────────
```

**Anti-pattern:** Never render a top-fork modifier below the fork zone — it will visually associate with the bottom branch, misleading the reader about which verb is being modified.

**Canvas headroom:** When top-fork modifiers are present, increase `baseY` to provide vertical space above the top fork for the upward slant lines and text.

---

## 7. Compound Structures

### 7.1 Compound Subject

Two subjects joined by a conjunction use a **forked baseline** with conjunction on a dotted vertical between them:

```
Sentence: "Dogs and cats run."

  Dogs  ─┐
          ├── ...and...  |  run
  cats  ─┘
```

```
ASCII Detail:

  Dogs ────────┐
    · · and · ·│──| run ────────────────
  cats ────────┘
```

The conjunction sits on a **short dotted vertical line** connecting the two subject branches.

### 7.2 Compound Predicate (Most Important for Tooling)

Two or more verbs sharing the same subject:

```
Sentence: "He runs and jumps."

              runs ──────────────
   He  |  ·····&·····
              jumps ─────────────
─────────────────────────────────────
```

**Critical Rules for Compound Predicates:**
1. The subject connects to a **vertical divider**
2. From that divider, **stepped horizontal lines** branch upward and downward for each predicate
3. The **conjunction** sits on a **short dotted vertical** connecting the two predicate lines
4. **Any shared auxiliary verb** (like "is") should appear on **BOTH branches**, not just one

#### 7.2.1 Shared Auxiliary in Compound Predicate

```
Sentence: "This man is mass doxxing & lying on everyone."

                      VERB
              ┌── is doxxing ─────────────────────────
   man  |  ···&···
              └── is lying ──────────────────────────
─────────────────────────────────────────────────────────
                      │
                     mass (under "doxxing," left-center)

              (from "lying" branch:)
                      └── on ── everyone
```

**Rule:** When one auxiliary governs two progressive verbs ("is doxxing & [is] lying"), the auxiliary must be **explicitly shown on both branches**. Omitting it from the second branch incorrectly implies the second verb is bare infinitive.

### 7.3 Compound Object

```
Sentence: "She reads books and articles."

   She  |  reads  | ─┐ books
                    ├── ···and···
                    └─ articles
```

### 7.4 Compound Sentence (Two Independent Clauses)

Two full baselines connected by a conjunction on a dotted vertical or a semicolon on a solid vertical:

```
Sentence: "He runs and she swims."

   He  |  runs
──────────────────
      ···and···  (dotted vertical connector between the two baselines)
──────────────────
  She  |  swims
```

---

## 8. Phrases

### 8.1 Prepositional Phrase

A prepositional phrase consists of a **preposition + noun phrase**. It attaches below the word it modifies.

**As adjective (modifying noun):**
```
Sentence: "The man in the room left."

    man   |  left
──────────────────────────────
    │         
   the        
    \
    in ── room
           │
          the
```

**As adverb (modifying verb):**
```
Sentence: "She ran into the store."

   She  |  ran
─────────────────────────
           │
          into ── store
                   │
                  the
```

**Visual structure of a prepositional phrase:**
```
        (word being modified)
               │
              prep
              ───── (short horizontal)
              object of prep
               │
          (any modifiers of object)
```

### 8.2 Nested Prepositional Phrases

```
Sentence: "lying on everyone who enters his space"

  lying
    │
   on ──── everyone
                │
             (relative clause connector — see §9.2)
```

### 8.3 Participial Phrase (modifies noun)

Participial phrases act as adjectives and hang below the noun they modify, with the participle on the slant:

```
Sentence: "The man running the race won."

    man   |  won
──────────────────────────
    │
   the
    \
   running ─── race
                │
               the
```

### 8.4 Gerund Phrase (acts as noun)

A gerund phrase occupies a noun slot but sits on a **pedestal** (raised line) to signal it is a verb-form:

```
Sentence: "Running daily is healthy."

      running
      ───────  |  is  ╲  healthy
        │
       daily
```

The pedestal line sits above the main baseline when the gerund is the subject.

### 8.5 Infinitive Phrase

Infinitives ("to + verb") can act as noun, adjective, or adverb:

**As noun (subject):**
```
      to run
      ──────  |  is  ╲  fun
```

**As adjective:**
```
    desire  |  grew
─────────────────────────
       │
      to ── run
      (under "desire")
```

---

## 9. Clauses

### 9.1 Independent vs. Subordinate Clause

| Clause Type | Baseline Level | Connector |
|---|---|---|
| Main / Independent | Top (primary) | None needed |
| Subordinate / Dependent | Below main | Subordinating conjunction on slant, OR dashed line for relative |

### 9.2 Relative Clause

A relative clause modifies a noun in the main clause. It sits on its **own baseline below**, connected by a **dashed line** from the relative pronoun back to the antecedent noun.

```
Sentence: "the man who runs the company"

    man
──────────────────────────────────
     │
   - - (dashed vertical)
     │
    who  |  runs  |  company
─────────────────────────────────
                       │
                      the
```

**Critical Rules:**
1. The dashed line connects from the **relative pronoun** (who/which/that) on the subordinate baseline UP to the **antecedent noun** on the main baseline
2. The relative pronoun serves as the SUBJECT of its own clause
3. "that" can be omitted (zero relative) — the dashed line still connects to the implicit position

**"Who" vs. "Whom":**
- "who" = subject of relative clause (nominative)
- "whom" = object of relative clause (accusative)
- Diagram placement reflects this function, not surface word order

### 9.3 Relative Clause on Object of Preposition

```
Sentence: "lying on everyone who enters his space"

  [main verb]
        │
       on ──── everyone
                  │
               - - - (dashed)
                  │
                 who  |  enters  |  space
               ─────────────────────────────
                                    │
                                   his
```

**Rule:** The dashed connector anchors at the antecedent ("everyone"), even when that antecedent is itself the object of a preposition.

### 9.4 Noun Clause

A noun clause occupies a noun slot. It sits on a pedestal like a gerund:

```
Sentence: "What he said surprised me."

      what  |  said
      ─────────────
          │he          ← subject of clause hangs below
    ───────────────  (pedestal)  |  surprised  |  me
```

### 9.5 Adverb Clause

An adverb clause modifies the main verb and attaches beneath it. The subordinating conjunction sits on the slant line:

```
Sentence: "She left because he arrived."

   She  |  left
────────────────────────────
           │
        because
           │
    he  |  arrived
────────────────────────────
```

---

## 10. Complex & Compound-Complex Sentences

### 10.1 Complex Sentence

One independent clause + one or more subordinate clauses:

```
Sentence: "Although it rained, the game continued."

    game  |  continued
─────────────────────────────────
      │
   although
      │
    it  |  rained
─────────────────────────────────
```

### 10.2 Compound-Complex Sentence

Two or more independent clauses + at least one subordinate clause:

```
Sentence: "He left early, and she stayed because she wanted to."

   He  |  left             she  |  stayed
────────────────    ···and···    ────────────────
                                      │
                                   because
                                      │
                                   she  |  wanted
                                  ──────────────────
                                          │
                                         to (infinitive)
```

---

## 11. Special Constructions

### 11.1 There / Expletive Construction

"There" as an expletive (not an adverb of place) sits on a horizontal below the subject, labeled as expletive:

```
Sentence: "There are three dogs."

   dogs  |  are
────────────────────────
    │         │
  three    There (expletive, below baseline on horizontal)
```

### 11.2 Passive Voice

The passive agent ("by + noun") attaches as a prepositional phrase below the verb:

```
Sentence: "The cake was eaten by him."

   cake  |  was eaten
────────────────────────────
    │           │
   the         by ── him
```

### 11.3 Appositive

An appositive renames a noun and sits in parentheses beside it on the same baseline:

```
Sentence: "My friend, the doctor, left."

   friend (doctor)  |  left
─────────────────────────────────
      │
     My
```

### 11.4 Absolute Phrase

An absolute phrase has no grammatical connector to the rest of the sentence. It floats on its own short baseline connected by a dotted line to the main clause:

```
Sentence: "The work finished, she left."

   she  |  left
────────────────────────────
- - - - (dotted) - - - - -
   work  |  finished
────────────────────────────
    │
   The
```

### 11.5 Coordinating Conjunction Joining Non-Parallel Elements

When "&" or "and" joins two different grammatical forms (rare), flag this as a structural irregularity. Ideal input sentences have parallel structure.

### 11.6 Vocative / Direct Address

A noun of direct address (vocative) floats above the main baseline on its own short line:

```
Sentence: "John, come here."

        John
     ──────── (floating, no connector)
   (you)  |  come
──────────────────────────
               │
              here
```

---

## 12. Punctuation & Conjunctions

### 12.1 Coordinating Conjunctions (FANBOYS + &)

| Word | Tag | Visual Placement |
|---|---|---|
| for | CONJ | Dotted vertical between joined elements |
| and | CONJ | Dotted vertical between joined elements |
| nor | CONJ | Dotted vertical between joined elements |
| but | CONJ | Dotted vertical between joined elements |
| or | CONJ | Dotted vertical between joined elements |
| yet | CONJ | Dotted vertical between joined elements |
| so | CONJ | Dotted vertical between joined elements |
| & | CONJ | Dotted vertical between joined elements |

**Critical:** "&" must ALWAYS be tagged CONJ, never PUNCT. It functions identically to "and."

### 12.2 Correlative Conjunctions

Both parts appear on dotted verticals framing each element:

```
both ··· and ···
either ··· or ···
neither ··· nor ···
not only ··· but also ···
```

### 12.3 Subordinating Conjunctions (Partial List)

These introduce adverb clauses and sit on the slant line connecting the subordinate baseline:

```
after, although, as, as if, because, before, even though,
if, in order that, once, since, so that, though, unless,
until, when, whenever, where, wherever, while
```

### 12.4 Punctuation in Diagrams

- **Periods, commas, exclamation marks, question marks:** Generally omitted from diagrams
- **Semicolons:** Shown as a vertical bar on the dotted line connecting two independent clauses
- **Colons:** Rarely diagrammed; treat what follows as an appositive or separate structure

---

## 13. Common Errors & Disambiguation Rules

### 13.1 Top 10 Diagramming Errors

| # | Error | Correct Rule |
|---|---|---|
| 1 | Placing auxiliary only on first compound verb branch | Auxiliary must appear on ALL branches it governs |
| 2 | Tagging pre-verb modifiers (like "mass") as NOUN | Test: does it modify the verb? → ADV |
| 3 | Tagging "&" as PUNCT | "&" is always CONJ |
| 4 | Attaching PP to wrong verb in compound predicate | Attach PP to the verb it semantically modifies |
| 5 | Relative clause connected to wrong antecedent | Dashed line goes to the NEAREST logical antecedent noun |
| 6 | Placing modifier on right end of verb line instead of under modified word | Modifier slant originates directly beneath the word it modifies |
| 7 | Treating predicate noun after linking verb as direct object (vertical bar instead of diagonal) | Use backward diagonal for predicate nominative/adjective |
| 8 | Missing "understood you" subject in imperative sentences | Diagram "(you)" as subject in parentheses |
| 9 | Losing parallel structure in compound predicates | Both branches must be grammatically equivalent forms |
| 10 | Collapsing relative clause into prepositional phrase | Relative clauses always get their own baseline with dashed connector |

### 13.2 Present Progressive Compound Predicate (Key Pattern)

**Sentence:** "He is doxxing & lying."

```
Correct analysis:
- "is" = shared auxiliary governing BOTH verbs
- "doxxing" = present participle (main verb, branch 1)
- "lying" = present participle (main verb, branch 2)
- Both branches should read: "is doxxing" / "is lying"
- NOT: "is doxxing" / "lying"
```

**Why this matters for tooling:** NLP tokenizers may assign "is" to only the first VP token span. Your tool must detect AUX + VERB[pres.part] patterns and propagate the auxiliary to all conjoined participial branches.

### 13.3 "Who" Entry Point into Relative Clause

"Who" functions as the SUBJECT of its relative clause. Do not treat it as merely a connector word — it must appear on the left side of the relative clause baseline as the subject:

```
WRONG:  ─── everyone ─── who enters his space (flat)
RIGHT:  ─── everyone
                │ (dashed)
               who | enters | space
```

### 13.4 Modifier Position Encoding

When an adverb precedes its verb (pre-verbal position), the slant line should lean left-ward beneath the verb to signal pre-verbal attachment:

```
mass [doxxing]
  ↑ pre-verbal adverb

Diagram:
  is doxxing
      /
    mass  ← left-center beneath "doxxing"
```

When an adverb follows its verb (post-verbal position), the slant leans toward the right:

```
[runs] quickly
  ↑ post-verbal adverb

Diagram:
  runs
     \
    quickly  ← right-center beneath "runs"
```

---

## 14. POS Tagging Decision Trees

### 14.1 Is this word a NOUN or ADV?

```
Does the word modify a verb, adjective, or other adverb?
        │
       YES → ADV
        │
       NO
        │
Does the word name a person, place, thing, or idea?
        │
       YES → NOUN
        │
       NO → Consider ADJ, DET, or other
```

### 14.2 Is this word a VERB (main) or AUX?

```
Is it followed by another verb form (participle, infinitive)?
        │
       YES → AUX (it's helping)
        │
       NO
        │
Is it the only verb in the clause?
        │
       YES → VERB (main)
        │
       NO → Context-dependent; check for compound predicates
```

### 14.3 Is this word a PREP or PART?

```
Is it followed by a noun phrase it governs?
        │
       YES → PREP ("on everyone")
        │
       NO
        │
Is it fused with the verb to form a phrasal verb idiom?
        │
       YES → PART ("give up," "move on")
        │
       NO → Re-examine; may be ADV
```

### 14.4 Is this "who/which/that" a REL.PRON or CONJ?

```
Does it introduce a clause that modifies a preceding noun?
        │
       YES → REL.PRON (relative clause)
        │
       NO
        │
Does it introduce a noun clause (subject/object position)?
        │
       YES → CONJ (complementizer) or REL.PRON (still, by convention)
        │
       NO → PRON (interrogative or other use)
```

---

## 15. Quick Reference Card

### 15.1 Line Symbol Glossary

| Symbol | Meaning |
|---|---|
| `───────` | Baseline (subject / verb / object line) |
| `\|` | Full vertical — separates subject from verb |
| `/` half-height | Short vertical — separates verb from object |
| `╲` backward diagonal | Predicate nominative / adjective separator |
| `\` or `/` slant | Modifier attachment line |
| `- - -` dashed | Relative clause connector to antecedent |
| `· · ·` dotted vertical | Conjunction connector between compound elements |
| `( )` parentheses | Appositive or implied/understood element |

### 15.2 Baseline Occupants by Slot

| Position | What Goes Here |
|---|---|
| Left of first vertical | Subject (noun, pronoun, gerund phrase, noun clause) |
| Between verticals | Verb (+ any auxiliaries) |
| Right of second vertical | Direct object OR predicate noun/adjective |
| Below subject | Subject modifiers (det, adj, participial phrase) |
| Below verb | Verb modifiers (adv, prepositional phrase as adv) |
| Below object | Object modifiers (adj, prepositional phrase as adj) |
| Separate lower baseline | Subordinate clause (relative, adverb, noun clause) |

### 15.3 Compound Predicate Checklist

When diagramming a compound predicate, verify:

- [ ] Subject connects to a single vertical divider
- [ ] Both verb branches fork from that divider
- [ ] Conjunction sits on dotted vertical between branches
- [ ] Shared auxiliary appears on **both** branches
- [ ] Adverb modifiers attach beneath the correct verb branch only
- [ ] Prepositional phrases attach to the semantically correct verb branch only
- [ ] Each branch has equal visual weight (parallel structure preserved)

### 15.4 Relative Clause Checklist

When diagramming a relative clause, verify:

- [ ] Relative clause has its own full baseline below main clause
- [ ] Dashed line connects REL.PRON to antecedent noun (not to clause boundary)
- [ ] REL.PRON occupies subject or object slot in its own clause
- [ ] If antecedent is object of preposition, dashed line still reaches the noun directly
- [ ] Relative clause baseline labels SUBJECT, VERB, and OBJECT/COMPLEMENT
- [ ] "that" (zero relative) is noted even if not surface-present

---

## Appendix A: Sentence Type Identifier

| Sentence Pattern | Key Signal | Diagram Structure |
|---|---|---|
| Simple | One subject, one predicate | Single baseline |
| Compound | Two independent clauses | Two baselines, dotted connector |
| Complex | One main + one subordinate | Main baseline + lower subordinate |
| Compound-Complex | Two+ main + one+ subordinate | Multiple baselines, mixed connectors |
| Imperative | No explicit subject | (you) as implied subject in parentheses |
| Exclamatory | Interjection or inverted order | Interjection floats above; restructure to normal order |
| Passive | "be" + past participle | Past participle as main verb; agent in PP below |

---

## Appendix B: Verb Form Reference

| Verb Form | Tag | Example | Auxiliary Needed |
|---|---|---|---|
| Simple present | VERB | runs | No |
| Simple past | VERB | ran | No |
| Present progressive | AUX + VERB | is running | Yes ("is") |
| Past progressive | AUX + VERB | was running | Yes ("was") |
| Present perfect | AUX + VERB | has run | Yes ("has") |
| Past perfect | AUX + VERB | had run | Yes ("had") |
| Future | AUX + VERB | will run | Yes ("will") |
| Modal | AUX + VERB | can run, might run | Yes (modal) |
| Passive (simple) | AUX + VERB | is eaten | Yes ("is/was") |
| Passive (perfect) | AUX + AUX + VERB | has been eaten | Yes (both) |

**Tooling Note:** For compound predicates involving progressive forms, always check whether the auxiliary is shared across all conjoined verbs. If so, propagate it explicitly to each branch in the diagram.

---

## Appendix C: Sample Full Diagram Walkthrough

### Sentence: "This man is mass doxxing & lying on everyone who enters his space."

**Step 1 — Tokenize and Tag:**

| Token | POS | Rationale |
|---|---|---|
| This | DET | Specifies "man" |
| man | NOUN | Subject |
| is | AUX | Auxiliary for both "doxxing" and "lying" |
| mass | ADV | Pre-verbal adverb modifying "doxxing" (answers "how?") |
| doxxing | VERB | Present participle, branch 1 of compound predicate |
| & | CONJ | Coordinates "doxxing" and "lying" |
| lying | VERB | Present participle, branch 2 of compound predicate |
| on | PREP | Introduces PP modifying "lying" specifically |
| everyone | PRON | Object of "on" |
| who | REL.PRON | Subject of relative clause modifying "everyone" |
| enters | VERB | Main verb of relative clause |
| his | DET | Specifies "space" |
| space | NOUN | Direct object of "enters" |

**Step 2 — Identify Structures:**
- Main clause: "man | is [doxxing & lying]"
- Compound predicate: "is doxxing" + "is lying" (shared aux)
- Adverb modifier: "mass" → "doxxing"
- Prepositional phrase: "on everyone" → modifies "lying"
- Relative clause: "who enters his space" → modifies "everyone"
- Determiner: "This" → "man"; "his" → "space"

**Step 3 — Final Diagram:**

```
                        VERB              VERB
               ┌───── is doxxing ─────────────────────────
  man   |    · & ·
               └───── is lying ──────────────────────────
──────────────────────────────────────────────────────────
 │                    │        │
This               mass(/)    on ──── everyone
                (under doxxing,    (from "lying")   │
                 left-center)                     - - (dashed)
                                                    │
                                                   who  |  enters  |  space
                                                  ────────────────────────────
                                                                      │
                                                                     his
```

---

*End of Reed-Kellogg Standards Guide v1.0*
*This document is designed for integration into NLP sentence diagramming tools as a rules knowledge base.*
