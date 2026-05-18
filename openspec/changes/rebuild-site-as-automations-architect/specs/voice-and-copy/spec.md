## ADDED Requirements

### Requirement: Plain language across the site

All visible copy on the site SHALL be written in plain language — short sentences, concrete nouns, active verbs, no jargon. Copy SHOULD read aloud naturally and SHOULD NOT require a glossary to understand.

#### Scenario: Plain-language reading test
- **WHEN** any page is read aloud to a non-technical reader
- **THEN** they can summarize the page's claim in one sentence without asking for definitions

### Requirement: Banned-word list

The following words MUST NOT appear in site copy (page bodies, hero lines, form labels, button labels, headings, CTAs, footer text, FAQ answers, case-study narratives):

```
bottleneck, leverage, streamline, optimize, seamless, robust, ecosystem,
synergy, holistic, utilize, facilitate, paradigm, empower, actionable,
cutting-edge, frictionless, scalable (as adjective), revolutionary,
disrupt, unlock (as verb), supercharge
```

Component identifiers, code comments, and design-document text are exempt. The Business Framework document itself (`src/Business Framework.md`) is exempt as an internal artifact; copy adapted from it MUST be rewritten to remove banned words.

#### Scenario: Lint passes for site copy
- **WHEN** the voice lint script (`scripts/check-voice.js`) runs against `src/content/*.js`
- **THEN** no banned word is reported

### Requirement: Approved alternatives

The voice module SHALL document approved alternatives for each banned word. Examples:

| Banned | Approved |
|---|---|
| bottleneck | "the work only you can do" / "what's stuck with you" |
| leverage | "use" |
| streamline | "make simpler" / "clean up" |
| optimize | "tune" / "make better" |
| seamless | "easy" / "feels like one tool" |
| robust | "holds up" / "doesn't break" |
| utilize | "use" |
| facilitate | "help" |
| empower | "give them the tools" |
| actionable | "you can act on it" |
| frictionless | "easy" |

This list lives in `src/content/voice.js` and is consumed by the lint script.

#### Scenario: Alternatives are reachable in source
- **WHEN** a developer opens `src/content/voice.js`
- **THEN** they see both the banned list and the approved alternatives

### Requirement: Copy lives in data modules

All page copy SHALL live in `src/content/*.js` modules — one per page, plus shared modules for case studies and voice rules. Page JSX components SHALL import from these modules rather than holding copy inline.

The reason: copy can be edited without touching layout, the voice lint has a single grep target, and future Claude sessions can find the right file to edit.

#### Scenario: No inline page copy
- **WHEN** a developer inspects any page component (e.g. `pages/Home.js`)
- **THEN** the long-form copy (paragraphs, FAQ answers, case-study text) is imported from `src/content/`, not declared as JSX string literals in the component file

### Requirement: Voice and tone

The brand voice SHALL be calm, direct, and structural — the framework names it "Batman + Madara." Copy SHOULD:

- Use short sentences and small words.
- Lead with the concrete (a task, a number, a fact) before the abstract.
- Speak to the reader as one person, not "businesses" or "organisations."
- Acknowledge uncomfortable truths plainly (e.g. "If this doesn't fit, I'll tell you.").
- Avoid superlatives and adjective stacks ("world-class, cutting-edge, scalable").

#### Scenario: Tone audit on the hero
- **WHEN** the hero copy is read alongside the brand-voice description
- **THEN** the hero uses short sentences, names a concrete reader problem, and avoids superlatives
