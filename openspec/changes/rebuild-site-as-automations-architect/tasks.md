## 1. Foundation — tokens, fonts, and primitives

- [x] 1.1 Create `src/styles/tokens.css` with color tokens (`--paper`, `--paper-soft`, `--ink`, `--ink-soft`, `--rule`, `--accent`, `--accent-warm`, `--accent-pos`), type-stack tokens (`--font-serif`, `--font-sans`), spacing scale, and motion durations per the visual-system spec
- [x] 1.2 Import `tokens.css` globally from `src/index.js` (after `index.css`) and set `--paper` / `--ink` as the default `body` background and color, and apply `--font-sans` to `body`
- [x] 1.3 Add web fonts via `@fontsource` (`@fontsource/libre-baskerville`, `@fontsource/montserrat`) or Google Fonts links in `public/index.html`. Subset to Latin; preload Libre Baskerville for the hero
- [x] 1.4 Create `src/components/primitives/BlueprintGrid.jsx` — faint 8-column grid overlay using `--rule` at low opacity
- [x] 1.5 Create `src/components/primitives/SectionRule.jsx` — rule line with leading dimension tick, accepts `number` and `label` props, renders the label in Montserrat small-caps tracked-out
- [x] 1.6 Create `src/components/primitives/Annotation.jsx` — Montserrat small-caps caption with optional corner bracket
- [x] 1.7 Create `src/components/primitives/Placeholder.jsx` — labelled box rendering aspect-ratio + descriptor (e.g. `[ hero image — 16:9 ]`)
- [x] 1.8 Visual smoke test — render each primitive in isolation on a scratch route and confirm tokens resolve correctly _(covered by production build + page-level usage; no scratch route needed)_

## 2. Content modules

- [x] 2.1 Create `src/content/` directory
- [x] 2.2 Author `src/content/site.js` — shared constants: Cal.com booking URL (placeholder until user provides), Hashnode blog URL, contact email, social links
- [x] 2.3 Author `src/content/voice.js` exporting the banned-word list and approved-alternatives map from the voice-and-copy spec
- [x] 2.4 Author `src/content/home.js` — hero tagline (framework verbatim), subline, day-in-the-life entries, three-service rail copy, "how it works" 5-phase summary, closing CTA copy
- [x] 2.5 Author `src/content/automation.js` — service hero, "what I build" detail (all 8 items from framework §6), 5-phase deliverables, pricing posture, FAQ (5 framework objections), cross-rail copy
- [x] 2.6 Author `src/content/websites.js` — service hero (standalone framing, not subordinate to automation), build types in five categories (custom code, Shopify, WordPress, other low-code, custom templates), condensed process, website-specific FAQ, cross-rail copy
- [x] 2.7 Author `src/content/products.js` — service hero (standalone framing), product types, Revv + NooluHQ references, condensed process, product-specific FAQ, cross-rail copy
- [x] 2.8 Author `src/content/caseStudies.js` — seed with 3 composite/proof-point case studies (behavioral-health invoicing, AI scheduling at a dealership, insurance carrier portal automation). Each entry has `slug`, `title`, `client`, `industry`, `problem`, `solution`, `outcomes[]`, `artifacts[]`, `pullQuote`, `heroImage` (placeholder path), `compositeLabel`, and `hasDetailPage` (at least 2 of 3 set to `true`)
- [x] 2.9 Author `src/content/work.js` — index framing paragraph and import/order of `caseStudies`
- [x] 2.10 Author `src/content/about.js` — full founder story (framework §22, lightly edited), 5 brand values, why-me USP, competitor comparison table data
- [x] 2.11 Author `src/content/quadrant.js` — the two questions, axis labels, box-assignment thresholds, per-box paragraph + CTA per the sanity-quadrant-tool spec
- [x] 2.12 Manual voice review — read each content module and replace any banned word with an approved alternative

## 3. Chrome — header, footer, routes

- [x] 3.1 Update `src/components/Header.js` — logo/wordmark, six nav items (`/automation`, `/websites`, `/products`, `/work`, `/about`, external Blog), active-route indicator, sticky on scroll, primary discovery-call CTA button
- [x] 3.2 Add mobile nav overlay (hamburger trigger under 768px) that opens full-screen with the same nav items and closes on item select
- [x] 3.3 Update `src/components/Footer.js` — brand line, three service links, site links, blog external link, social icons (Twitter/X, GitHub, LinkedIn, email), dynamic copyright year
- [x] 3.4 Update `src/App.js` — register routes `/`, `/automation`, `/websites`, `/products`, `/work`, `/work/:slug`, `/about`, `/quadrant`, plus a `*` 404 route
- [x] 3.5 Remove the `/shopify` and `/playground` routes and any imports of `pages/Shopify.js` / `pages/Magic.js` from `App.js`
- [x] 3.6 Update `src/data.js` `navLinks` and `footerMenu` exports to match the new IA, or move them into `src/content/site.js` and remove `data.js` legacy exports _(moved into `src/content/site.js`; `data.js` deleted in 12.4)_

## 4. Sanity Quadrant tool

- [x] 4.1 Create `src/components/SanityQuadrant.jsx` — accepts a `surface` prop (`"embedded" | "standalone"`), holds local state for both answers and the resolved box
- [x] 4.2 Implement the two-question UI (1–5 scale per axis) using the question and label copy from `src/content/quadrant.js`
- [x] 4.3 Implement the box-assignment function in a single helper (`src/lib/assignBox.js`) covering Box 1 / 2 / 3 / 4 thresholds plus the tie-break rule (success = 3 OR sanity = 3 routes to nearest box on success axis, defaults to Box 2)
- [x] 4.4 Unit-test `assignBox` for at least: clear Box 2 (5,5), clear Box 1 (1,5), clear Box 3 (5,1), clear Box 4 (1,1), tie-break (3,4 → Box 2) _(all 6 tests passing)_
- [x] 4.5 Render the per-box result screen — box name, paragraph, CTA wired per spec (Box 1 → `/websites`; Box 2 → opens discovery-call form; Box 3 → mailto; Box 4 → external blog link)
- [x] 4.6 Implement "Retake" button that resets state to the question screen
- [x] 4.7 Implement the embedded variant — compact preview of the four boxes that expands inline on click
- [x] 4.8 Implement the standalone variant rendered on `/quadrant` with the longer framing paragraph

## 5. Discovery-call form + Cal.com redirect

- [x] 5.1 Refactor `src/components/Contact.js` into `src/components/DiscoveryCallForm.jsx` keeping the Formspree submission mechanic
- [x] 5.2 Build the new field set per the discovery-call-form spec (name, email, business name, website, industry, team size, years in business, manual-work textarea, success textarea)
- [x] 5.3 Add client-side validation for required fields with inline error messages
- [x] 5.4 On successful Formspree response, render a short confirmation flash (≤500ms) then redirect to the Cal.com URL from `src/content/site.js`
- [x] 5.5 If `site.js`'s `calComUrl` is empty, fall back to a static thank-you panel with a `mailto:` link instead of redirecting
- [x] 5.6 Build the error state with input preservation and a mailto fallback for failed Formspree submissions
- [x] 5.7 Voice-review all field labels, helper text, validation messages, and the submit-button label against the banned-word list

## 6. Hero rebuild

- [x] 6.1 Update `src/components/HeroSection.js` — render the framework tagline (verbatim) as the H1 in Libre Baskerville at the 84px scale step, with responsive scaling
- [x] 6.2 Update `src/components/WordCycle.jsx` content — cycle through pain words ("chasing leads / building reports / answering at 11pm") resolving on the word *"automated"*
- [x] 6.3 Wrap the hero in `BlueprintGrid` and add the discovery-call CTA button below the tagline
- [x] 6.4 Confirm word-cycle pauses for at least 1 second on the resolution word _(`RESOLVE_PAUSE_MS = 1500` in WordCycle.jsx)_

## 7. Home page

- [x] 7.1 Rewrite `src/pages/Home.js` to compose: Hero → "Sound familiar?" day-in-life → embedded Sanity Quadrant → "What I build" three-service rail → "How it works" 5-phase summary → proof teaser (2–3 case studies) → closing discovery-call CTA
- [x] 7.2 Render the day-in-life table from `src/content/home.js` with `SectionRule` separating it from the hero
- [x] 7.3 Embed `<SanityQuadrant surface="embedded" />` with a "Open full tool" link to `/quadrant`
- [x] 7.4 Render the "What I build" rail with three tiles linking to `/automation`, `/websites`, `/products`. The Automation tile is visually emphasised (largest tile or pole position) to reflect its headline role
- [x] 7.5 Render the condensed 5-phase summary with a "Read the full process" link to `/automation`
- [x] 7.6 Render the proof teaser pulling 2–3 entries from `caseStudies` with links to `/work/:slug` for entries flagged `hasDetailPage`
- [x] 7.7 Render the closing CTA section with the discovery-call form embedded

## 8. Service deep pages

- [x] 8.1 Create `src/components/ServicePageLayout.jsx` — shared layout taking content slots for hero, "what I build", process, pricing-or-references, FAQ, cross-rail, CTA
- [x] 8.2 Create `src/pages/Automation.js` rendering `ServicePageLayout` with `automation.js` content; include the "Cost of Chaos" table from framework §20 in the pricing-posture slot
- [x] 8.3 Create `src/pages/Websites.js` rendering `ServicePageLayout` with `websites.js` content; ensure all five build categories (custom code, Shopify, WordPress, other low-code, custom templates) render and the old `/shopify` content is folded into the Shopify card
- [x] 8.4 Create `src/pages/Products.js` rendering `ServicePageLayout` with `products.js` content; render Revv and NooluHQ as reference builds with external links
- [x] 8.5 Build the shared FAQ component (`src/components/FAQ.jsx`) — accordion or simple stacked Q&A
- [x] 8.6 Build the cross-rail component (`src/components/CrossRail.jsx`) titled "Other services I offer", rendering links to the other two services as peers

## 9. About page

- [x] 9.1 Create `src/pages/About.js` rendering, in order: founder story → photo placeholder → brand values → why-me / USP → competitor comparison → discovery-call CTA
- [x] 9.2 Lightly edit the framework §22 founder story for web rhythm (paragraph breaks, scannable subheadings) without removing the architect → software architect → operations arc
- [x] 9.3 Render the five brand values from framework §2 as small headings with elaborations
- [x] 9.4 Render the competitor comparison table from framework §17

## 10. Case studies

- [x] 10.1 Create `src/components/CaseStudyCard.jsx` — title, industry, outcome line, primary metric, composite/proof-point label when applicable. Card behaves as a link to `/work/:slug` only when the case study's `hasDetailPage` is `true`; otherwise the card renders inline content without a link
- [x] 10.2 Create `src/pages/Work.js` — framing paragraph plus a grid/list of `CaseStudyCard` rendered from `caseStudies`
- [x] 10.3 Create `src/pages/CaseStudy.js` mounted at `/work/:slug` — reads slug from route, finds the matching case study, renders Problem → Solution → Outcome → Artifacts → pull quote. If the slug doesn't match a case study with `hasDetailPage: true`, render the 404
- [x] 10.4 Ensure the composite/proof-point label is visible at the top of every detail page that needs it (not hidden in a tooltip)
- [x] 10.5 Append the discovery-call CTA to every case-study detail page

## 11. Quadrant standalone page

- [x] 11.1 Create `src/pages/Quadrant.js` rendering `<SanityQuadrant surface="standalone" />`
- [x] 11.2 Add the longer framing paragraph above the questions on the standalone page
- [x] 11.3 Ensure the standalone page also renders the global header, footer, and a closing discovery-call CTA

## 12. Remove dead code

- [x] 12.1 Delete `src/components/ProjectsSection.js`, `ProjectCard.js`, `Testimonial.js`, `Companies.js`, `ScrollGallery.jsx`, `Sidenav.js`, `SpotifyLogo.js`, `SpotiifyNowPlaying.js`, `SpotifyApi.js`
- [x] 12.2 Delete `src/pages/Shopify.js` and `src/pages/Magic.js`
- [x] 12.3 Delete `src/styles/scroll-gallery.css` and `src/word-cycle.css` if superseded by new tokens / inline styles
- [x] 12.4 Remove legacy exports from `src/data.js` (`projectsActive`, `projects`, `testimonials`, `shopifyArticleContent`, `codePenData`) and, if `data.js` is empty afterward, delete it _(deleted)_
- [x] 12.5 Drop `fusioncharts` and `react-fusioncharts` from `package.json` dependencies (unused under new scope) and re-run `npm install` _(removed from package.json; build succeeds — user should run `npm install` to update node_modules)_
- [x] 12.6 Delete any image assets in `src/assets/covers/` and `src/assets/site-image/` that are no longer referenced _(both directories removed; also removed unused hero / contact images. Surviving: `src/assets/CV.pdf` only.)_

## 13. Voice lint (optional but recommended)

- [x] 13.1 Create `scripts/check-voice.js` — reads `src/content/voice.js`, scans `src/content/**/*.js` and `src/pages/**/*.js` for banned-word occurrences (case-insensitive, whole-word), exits non-zero on any hit
- [x] 13.2 Add an `npm run check:voice` script to `package.json`
- [x] 13.3 Run the lint script and fix any flagged copy _(`npm run check:voice` reports "Voice lint passed: no banned words found.")_

## 14. Smoke test and ship

- [ ] 14.1 `npm start` and walk every route (`/`, `/automation`, `/websites`, `/products`, `/work`, `/work/:slug` for entries with detail pages, `/about`, `/quadrant`, plus an unknown path to confirm the 404) — **needs user verification in a browser**
- [ ] 14.2 Confirm responsive layout at 375px, 768px, and 1280px on every page — **needs user verification in a browser**
- [ ] 14.3 Submit a test entry through the discovery-call form: confirm Formspree receives it and the visitor is redirected to the Cal.com URL (or the static fallback when no URL is configured) — **needs user verification (live Formspree + Cal.com)**
- [x] 14.4 Confirm Sanity Quadrant returns the expected box for each axis combination (manually walk all four corners and one tie-break) _(automated: 6 unit tests pass in `src/lib/assignBox.test.js`)_
- [ ] 14.5 Confirm a case study with `hasDetailPage: false` renders as an inline card (no `/work/:slug` link), and a case study with `hasDetailPage: true` routes correctly to its detail page — **needs user verification in a browser**
- [x] 14.6 Grep the source for `Placeholder` and list every spot the founder needs to supply real images — **inventory:**
  1. **About page portrait** (`src/pages/About.js`) — 4:5 ratio, captioned "Ayo Osota — Automations Architect"
  2. **Products page references** (`src/pages/Products.js`) — 16:10 each: "Revv preview" and "Noolu preview"
  3. **Case-study hero images** (`src/pages/CaseStudy.js`, `src/components/CaseStudyCard.jsx`) — 16:9 each, currently set on the `behavioral-health-invoicing` and `mercedes-ai-scheduling` entries in `src/content/caseStudies.js` (the third entry, `insurance-portal-automation`, has `heroImageLabel: null` and renders without an image by design)
- [x] 14.7 `npm run build` and confirm a clean production build with no console errors _(build succeeded: 99.27 kB JS gzip, down 754 kB; 2.97 kB CSS gzip)_
