## ADDED Requirements

### Requirement: Color tokens

The site SHALL define and use the following color tokens as CSS custom properties (declared in `src/styles/tokens.css` and imported globally). All values come from the brand palette.

| Token | Hex | Use |
|---|---|---|
| `--paper` | `#FFFFFF` | Primary page background |
| `--paper-soft` | `#FAFAFA` | Subtle alternate section background |
| `--ink` | `#010066` | Primary text and headings (brand navy) |
| `--ink-soft` | `#4A4F8C` | Secondary text, captions (lightened navy, tuned for AA contrast) |
| `--rule` | `#E4E5EE` | Rule lines, dividers, borders (very light navy tint) |
| `--accent` | `#FFCC01` | Primary accent — CTA fills, brand mark, key highlights |
| `--accent-warm` | `#FF99CB` | Supporting — sparing use, Box-3 / relationship moments |
| `--accent-pos` | `#33CD67` | Supporting — success states, positive highlights |

No other colors SHALL appear in component styles. Hard-coded hex values outside `tokens.css` MUST be flagged in review.

#### Scenario: Tokens are the only color source
- **WHEN** any component renders
- **THEN** every color value resolves through one of the tokens above

#### Scenario: Yellow is reserved for primary accents
- **WHEN** the site renders
- **THEN** `--accent` (#FFCC01) is used only for CTA fills, the brand mark, and small key highlights — never as a section background or body text color

### Requirement: Typography stack

The site SHALL use two font families, both from the brand palette:

- **Headings, hero, lead copy** — `"Libre Baskerville", Georgia, serif`. Token: `--font-serif`.
- **Body, captions, UI text, drafting annotations** — `"Montserrat", system-ui, sans-serif`. Token: `--font-sans`.

There is no separate monospace family in the brand palette. Where a "drafting" feel is needed (small-caps section labels, dimension marks, annotations), Montserrat at 12–14px with uppercase tracking SHALL be used instead of a mono face.

Type sizes MUST follow a modular scale at ratio 1.25: 12 / 14 / 16 / 20 / 24 / 32 / 44 / 60 / 84 (in px). The Hero tagline MUST use the largest step (84px desktop, scaled responsively).

#### Scenario: Hero uses the largest serif step
- **WHEN** the Hero tagline renders at desktop width (≥1024px)
- **THEN** it uses `--font-serif` (Libre Baskerville) at 84px (or the responsive equivalent)

#### Scenario: Body uses Montserrat
- **WHEN** any paragraph-length body copy renders
- **THEN** it uses `--font-sans` (Montserrat)

### Requirement: Spacing scale

The site SHALL use the following spacing scale (in px): 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128. Component margins and paddings MUST resolve to scale values; arbitrary values are flagged in review.

#### Scenario: Spacing uses scale values
- **WHEN** a component declares a margin or padding
- **THEN** the value is one of the scale steps or a multiple of the smallest step

### Requirement: Motion rules

The site SHALL have near-zero motion by default. Allowed motion:

- Hover state transitions on links/buttons: 120–200ms, opacity / color only.
- The Hero word-cycle animation (existing mechanic, retained).
- Sanity Quadrant compact-to-expanded transition: 200ms ease.
- Discovery-call form: brief confirmation flash before Cal.com redirect.

Scroll-triggered choreography, parallax, decorative GSAP timelines, and full-page enter/exit animations are NOT permitted in this change.

#### Scenario: No scroll-triggered animations
- **WHEN** a visitor scrolls any page
- **THEN** no element animates in or out based on scroll position (other than the Hero mechanic on first load)

### Requirement: Drafting primitives

The site SHALL implement the following reusable visual primitives:

- **`BlueprintGrid`** — a faint 8-column grid overlay used in hero sections and major section breaks. Rendered with `--rule` at low opacity.
- **`SectionRule`** — a rule line with a leading dimension tick, used as a section separator (e.g. `├── 02. WHAT I BUILD ───────`). Numbering and label are props, rendered in Montserrat small-caps tracked-out.
- **`Annotation`** — a Montserrat small-caps caption with optional corner bracket, used for image captions, data labels, and "drafting marks" on long-form pages.

#### Scenario: Primitives are reused
- **WHEN** the home page renders
- **THEN** at least one instance of each drafting primitive is visible

### Requirement: Placeholder image component

The site SHALL include a `Placeholder` component used wherever a real image is expected but not yet supplied. The component MUST render a labelled box with the expected aspect ratio and a short descriptor (e.g. `[ hero image — 16:9 ]`, `[ portrait — 4:5 ]`). The label MUST be greppable in source.

#### Scenario: Placeholders are visible and labelled
- **WHEN** a page renders without real photography
- **THEN** every image slot shows a labelled `Placeholder` with its expected aspect ratio

### Requirement: Light theme only

The site MUST ship as a light theme only. No dark-mode variant, no theme switcher, no `prefers-color-scheme` media query for color changes.

#### Scenario: No dark mode
- **WHEN** a visitor with `prefers-color-scheme: dark` loads the site
- **THEN** the site renders in the same light palette defined by the tokens above
