## ADDED Requirements

### Requirement: `/work` index page

The `/work` page SHALL render an index of case studies as a grid or list of cards. Each card MUST show: title, industry, a one-line outcome (e.g. "Cut invoice processing time by 90%"), and a primary metric. The page MUST open with a short framing paragraph that sets expectations honestly (composite stories until real ones land).

#### Scenario: Index renders at least three case studies
- **WHEN** a visitor lands on `/work`
- **THEN** at least three case-study cards are visible
- **AND** each card shows title, industry, outcome line, and metric

### Requirement: Composite labeling

Any case study that is composite, anonymised, or sourced from a public proof point (rather than a real engagement) MUST carry a visible "Composite example" or "Public proof point" label on both the index card and the detail page. The label MUST NOT be hidden in a tooltip or footer.

#### Scenario: Composite label is visible
- **WHEN** a visitor views any composite case study
- **THEN** the "Composite example" label is rendered above or beside the case-study title without requiring interaction to reveal it

### Requirement: Optional case-study detail page

Each case-study record SHALL carry a boolean `hasDetailPage` flag. When `true`, the case study has a detail page at `/work/:slug` and the index card links to it. When `false`, the case study lives only as a card on `/work` (with its outcomes and pull quote rendered inline) and no `/work/:slug` route resolves for that slug. The seed set MUST include at least one case study with `hasDetailPage: false` to exercise the inline pattern, and at least two with `hasDetailPage: true` to exercise the route.

#### Scenario: Index-only case study has no detail page
- **WHEN** a visitor clicks a case study whose `hasDetailPage` is `false`
- **THEN** no navigation occurs (the card is not a link), and the card displays its outcomes and any pull quote inline

#### Scenario: Detail page renders the framework structure
- **WHEN** a visitor opens a case-study detail page whose `hasDetailPage` is `true`
- **THEN** the page renders sections for Problem, Solution, Outcome, and Artifacts in that order

#### Scenario: Unknown slug returns 404
- **WHEN** a visitor navigates to `/work/some-slug` where `some-slug` is not the slug of a case study with `hasDetailPage: true`
- **THEN** the 404 component renders

### Requirement: Discovery-call CTA on every case study

Each case-study detail page SHALL close with a discovery-call CTA referencing the specific problem solved (e.g. "Recognize this problem? Book a discovery call.").

#### Scenario: CTA appears at the bottom of every detail page
- **WHEN** a visitor scrolls to the end of `/work/:slug`
- **THEN** a discovery-call CTA is visible

### Requirement: Seed case studies

The change SHALL ship with at least three seed case studies derived from the framework's public proof points (behavioral health invoicing, AI scheduling at a dealership, insurance carrier portal automation) plus any composite stories Ayo writes. Each MUST be clearly labelled per the composite-labeling requirement.

#### Scenario: Three or more case studies exist at launch
- **WHEN** the rebuild is deployed
- **THEN** at least three case studies are visible on `/work` and each has a working `/work/:slug` detail page

### Requirement: Project grid removed

The previous portfolio project grid (Musica, Artsy, Paw Care, Archipark, etc.) MUST NOT appear on the rebuilt site.

#### Scenario: No legacy projects rendered
- **WHEN** a visitor walks every route of the new site
- **THEN** none of the old project covers or descriptions appear
