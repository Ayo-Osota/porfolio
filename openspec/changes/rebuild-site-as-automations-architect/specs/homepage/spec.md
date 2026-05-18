## ADDED Requirements

### Requirement: Hero with framework tagline

The homepage SHALL open with a hero section that displays the Business Framework tagline verbatim — *"I build intelligent systems that stop business owners from losing time, money, and growth to manual work."* — set in the primary editorial serif at the largest type-scale step. A short subline (one sentence) and a single primary CTA ("Book a discovery call") MUST appear below the tagline. The Hero animation mechanic (WordCycle) MAY be reused to cycle through pain words ("chasing leads / building reports / answering at 11pm") that resolve into the word *"automated."*

#### Scenario: First paint shows the tagline
- **WHEN** a visitor lands on `/`
- **THEN** the rendered page above the fold displays the framework tagline as the first visible text and a "Book a discovery call" button

#### Scenario: Word cycle resolves
- **WHEN** the Hero word cycle completes its loop
- **THEN** it ends on the word *"automated"* (or equivalent resolution word) and pauses for at least 1 second before continuing

### Requirement: "Sound familiar?" section

The homepage SHALL include a section titled in the framework's voice (e.g. *"Sound familiar?"* or *"A week in your life right now"*) that renders the framework's day-in-the-life table (6:30am wake-up through 11:30pm collapse). Each row MUST be plain language. The section MUST NOT use the banned words listed in the voice spec.

#### Scenario: Section is recognizable to a framework reader
- **WHEN** a visitor who has read the Business Framework views the section
- **THEN** they recognize at least three of the day-in-life entries (e.g. "Quick standup that runs an hour", "Build a report manually at lunch", "Chase team member for an update")

### Requirement: Embedded Sanity Quadrant

The homepage SHALL embed the Sanity Quadrant tool as an interactive block. The block MUST start in a compact preview state (the four boxes shown, no questions visible) and expand inline on click into the two-question interface defined in the sanity-quadrant-tool spec. A "Open full tool" link MUST route to `/quadrant`.

#### Scenario: Compact-to-expanded
- **WHEN** a visitor clicks the embedded quadrant card
- **THEN** the two questions become visible inline without a page navigation
- **AND** completing them shows the per-box result inline

### Requirement: "What I build" services rail

The homepage SHALL render a "What I build" rail listing the three services as peers (AI & automated systems, websites including code + low-code + templates, full-scale tech products) with one-sentence descriptions and a link to each deep service page. The Automation tile MUST be visually emphasised (pole position and/or larger size) to reflect its headline role, but the three are framed as services — not as "ways automation shows up."

#### Scenario: All three services link out
- **WHEN** a visitor clicks any of the three service tiles
- **THEN** they are routed to `/automation`, `/websites`, or `/products` respectively

### Requirement: "How it works" summary

The homepage SHALL include a condensed view of the 5-phase delivery process (Discovery & Audit → Design → Build → Train & Handoff → Post-launch support) with one line per phase and a link to read more on `/automation`.

#### Scenario: Phases render in order
- **WHEN** a visitor views the section
- **THEN** the five phases appear in the order defined in the Business Framework, each with a 1–2 sentence description

### Requirement: Proof teaser

The homepage SHALL show two or three case-study teasers pulled from the `/work` content, each linking to its detail page. A "See all case studies" link MUST route to `/work`.

#### Scenario: Teasers are clickable
- **WHEN** a visitor clicks a case-study teaser
- **THEN** they are routed to `/work/:slug`

### Requirement: Closing discovery-call CTA

The homepage SHALL close with a discovery-call CTA section that embeds (or links to) the discovery-call form defined in the discovery-call-form spec. The section MUST be visually distinct (full-bleed band, contrasting background) and use plain-language copy ("Tell me what's stuck. I'll tell you honestly if I can help.").

#### Scenario: Form is reachable from the bottom of the page
- **WHEN** a visitor scrolls to the end of `/`
- **THEN** the discovery-call CTA is visible and the form fields are reachable in one click
