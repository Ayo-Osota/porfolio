## ADDED Requirements

### Requirement: Two-question interface

The Sanity Quadrant tool SHALL ask exactly two questions, each on a 1–5 scale:

1. **Success axis.** "How is the business doing financially right now?" (1 = struggling, 5 = thriving)
2. **Sanity axis.** "How much of your week is firefighting?" (1 = calm and structured, 5 = constant chaos)

The tool MUST NOT ask any additional questions in v1. Question copy MUST be in plain language and MUST NOT use banned words from the voice spec.

#### Scenario: Only two questions appear
- **WHEN** a visitor opens the tool (embedded or standalone)
- **THEN** exactly two questions are visible and answerable
- **AND** a submit / "see my box" button is present

### Requirement: Box assignment

On submit, the tool SHALL map the two answers to one of four boxes:

- **Box 1** (low success, low sanity): success ≤ 2 AND sanity ≥ 4
- **Box 2** (high success, low sanity): success ≥ 4 AND sanity ≥ 4
- **Box 3** (high success, high sanity): success ≥ 4 AND sanity ≤ 2
- **Box 4** (low success, high sanity): success ≤ 2 AND sanity ≤ 2

Mid-range answers (success = 3 OR sanity = 3) MUST be routed to the nearest box on the success axis, defaulting to Box 2 on a tie. The mapping logic MUST live in a single function so the thresholds can be tuned in one place.

#### Scenario: Clear Box-2 answer
- **WHEN** a visitor answers success = 5 and sanity = 5
- **THEN** the result shows Box 2 ("This is who I built the practice for")

#### Scenario: Mid-range answer resolves predictably
- **WHEN** a visitor answers success = 3 and sanity = 4
- **THEN** the result resolves to Box 2 (nearest box on the success axis, tie defaults toward Box 2)

### Requirement: Per-box output

Each box SHALL render a result screen containing: the box name, a short paragraph in the brand voice, and a CTA. The CTA per box:

| Box | CTA |
|---|---|
| Box 1 | "Start with a website or Shopify build" — links to `/websites` |
| Box 2 | "Book a discovery call" — opens the discovery-call form |
| Box 3 | "Email me to swap notes" — mailto link to `osotaayomikun@gmail.com` |
| Box 4 | "Read the blog instead" — external link to the Hashnode blog |

Each result MUST also show a small "Retake" button that resets the tool to the question screen.

#### Scenario: Box 2 result routes to the form
- **WHEN** a Box-2 visitor clicks the result CTA
- **THEN** the discovery-call form opens (modal, drawer, or navigation to the embedded form on the current page)

#### Scenario: Retake resets state
- **WHEN** a visitor clicks "Retake"
- **THEN** the tool returns to the question screen with both answers cleared

### Requirement: Two surfaces

The tool SHALL be implemented as one React component (`SanityQuadrant`) consumed by two surfaces:

- **Embedded** — on the homepage, starts in a compact preview state showing the four boxes, expands inline on click into the question interface.
- **Standalone** — at `/quadrant`, opens directly to the question interface, takes more vertical space, includes a longer framing paragraph above the questions.

The component MUST accept a `surface` prop (`"embedded" | "standalone"`) that controls layout but not logic.

#### Scenario: Same logic, two layouts
- **WHEN** a visitor completes the tool on `/` and on `/quadrant`
- **THEN** the same answers produce the same box result on both surfaces

### Requirement: No persistence

The tool MUST NOT persist answers (no localStorage, no cookies, no analytics events) in v1. State lives in React `useState` only.

#### Scenario: No data leaves the page
- **WHEN** a visitor completes the tool
- **THEN** no network request is made beyond static asset / page navigation, and refreshing the page resets the tool to its initial state
