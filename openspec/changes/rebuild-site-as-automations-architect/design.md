## Context

The current site is a Create-React-App 5 frontend developer portfolio (React 18, react-router-dom v6, styled-components, GSAP, react-icons, Formspree). It positions Ayo as a frontend developer with a project grid, testimonials, a Spotify widget, and a `/shopify` article. The Business Framework document (`src/Business Framework.md`) repositions the practice as an **Automations Architect** serving overwhelmed Box-2 business owners, sold through three peer services: AI & automated systems, websites (code + low-code + templates), and full-scale tech products. This design covers how to convert the site to match.

The decisions below were settled during the explore session preceding this proposal:

- Identity: Automations Architect, services site (not portfolio).
- Service shape: three peer services. Automation is the headline service on the homepage; websites and products have equal weight as standalone services.
- Audience: Box-2 primary, Box-1 served via lighter offerings.
- Hero line: framework tagline verbatim.
- IA: distributed routes (`/`, `/automation`, `/websites`, `/products`, `/work`, `/about`, `/quadrant`), Blog kept as external link in primary nav.
- Quadrant tool: interactive "Find Your Box" with per-box CTAs.
- Visual: light theme. **Fonts:** Libre Baskerville (headings) + Montserrat (body). **Colors:** white paper, navy `#010066` ink, yellow `#FFCC01` primary accent, pink `#FF99CB` + green `#33CD67` as supporting state colors. Drafting motif, near-zero motion.
- Voice: plain language, banned-word list enforced.
- Founder story: own page (`/about`).
- Discovery-call form: posts to Formspree, then redirects to a Cal.com booking page.
- Case studies: detail pages at `/work/:slug` are optional per case study.
- Images: placeholders everywhere; user supplies real assets.
- Reuse: Hero animation mechanic, Footer, Contact form mechanic.

## Goals / Non-Goals

**Goals**
- Make the site a faithful expression of the Business Framework — anyone who has read the framework should recognize it in the site without prompting.
- Funnel the right visitors into a discovery call (Formspree → Cal.com) and gently redirect the wrong-fit visitors instead of dropping them cold.
- Establish a visual system and copy voice that future content can extend without ad-hoc design decisions.
- Keep the rebuild within the existing stack — no new runtime frameworks, no SSR migration, no CMS.
- Land a structure that can absorb real case studies as engagements close, without further restructuring.

**Non-Goals**
- No SSR / Next.js migration. CRA stays.
- No CMS. Page copy lives as data modules under `src/content/`.
- No dark-mode variant. Light only.
- No analytics, A/B testing, blog migration, or i18n in this change.
- No real client case studies in this change — seed with composite/framework-style stories and replace as engagements deliver.
- No animation library beyond what already ships (GSAP). Motion will be near-zero by default; GSAP is retained only because the Hero mechanic uses it.

## Decisions

### D1. Routing — distributed, flat, deep pages over a single long-scroll home

**Decision.** Use `react-router-dom` with this route map:

```
  /            Home (narrative arc + embedded Quadrant)
  /automation  Service deep page
  /websites    Service deep page (Shopify content folds in)
  /products    Service deep page
  /work        Case studies index
  /work/:slug  Case study detail (only for case studies flagged hasDetailPage)
  /about       Founder's story + values
  /quadrant    Standalone Find Your Box tool
```

Primary nav also includes an external **Blog** link to Hashnode (`https://ayoosota.hashnode.dev/`).

**Why.** Three services warrant their own surfaces — search/share-ability matters. A single long-scroll homepage would either dilute the per-service depth or over-stretch. Flat routes (no nesting under `/services/...`) keep URLs short and friendly.

**Alternative considered.** Single long-scroll homepage with anchor sections. Rejected because each service needs deep pricing/FAQ/process content that doesn't compress into a section.

### D2. Service framing — three peer services, automation-led on the homepage

**Decision.** Three services with equal weight at the route level — `/automation`, `/websites`, `/products`. Each has its own hero, "what I build" list, condensed process, FAQ, cross-rail to the other two services, and a closing discovery-call CTA. The homepage gives the **automation** service top placement (it's the headline differentiator) but introduces all three on the "What I build" rail with parity in size and styling.

The cross-rail at the bottom of each service page is framed as **"Other services I offer"** — not "other ways automation shows up." Service pages stand on their own.

The `/websites` service explicitly covers:
- Custom-coded marketing sites and web apps
- Shopify storefronts
- WordPress sites
- Other low-code platforms (Webflow, Framer, etc.)
- Custom templates for any of the above

The `/products` service covers full-scale tech products with depth comparable to Revv (autoshop management) or NooluHQ (school management) — multi-feature builds with login, data, and operational logic.

**Why.** The user offers three real services and wants each to be discoverable on its own URL. Folding websites/products under automation as "forms it takes" would mislead visitors who arrived looking for a website build. The framework's headliner role for automation is preserved by giving it pole position on the home page, not by subordinating the other two.

**Alternative considered.** "One service, three forms" with websites/products framed as automation surfaces. Rejected after user feedback: these are genuinely peer services with their own ICPs (a Shopify-store client is not necessarily a Box-2 automation client).

### D3. Sanity Quadrant tool — two questions, four outcomes

**Decision.** The tool asks two questions on a single screen, each on a 1–5 scale:

1. **Success axis.** "How is the business doing financially?" (struggling ↔ thriving)
2. **Sanity axis.** "How much of your week is firefighting?" (calm ↔ overwhelmed)

A submit button places the visitor in one of four boxes. The result screen shows the box name, a short paragraph in the framework's voice, and a CTA:

| Box | Paragraph theme | CTA |
|---|---|---|
| **Box 1** — early days, low success, low sanity | "You're earlier than the systems I usually build. Start with the surfaces first." | Recommended services (Website / Shopify) |
| **Box 2** — high success, low sanity | "This is who I built the practice for." | Book a discovery call (primary) |
| **Box 3** — high success, high sanity | "You're already where I'm trying to send people. I'd love to swap notes." | Light peer CTA (email link) |
| **Box 4** — low success, high sanity | "You don't seem to need what I build right now." | Honest "not now," link to blog |

Two surfaces: an embedded block on `/` (collapsible card, opens inline) and a dedicated page at `/quadrant` (full-screen). Shared component, two layouts.

State is local (React `useState`). No persistence, no analytics, no auth.

**Why.** Two questions is the floor for a meaningful diagnosis. More questions add friction without sharpening the routing. Local state keeps the build cost low and respects privacy.

**Alternative considered.** Multi-step wizard with 6–8 questions and a "recommended service" output. Rejected as overkill for v1.

### D4. Discovery-call form — Formspree submit, then Cal.com redirect

**Decision.** Keep the existing Formspree integration in `Contact.js`. Rebuild the form fields to:

- Full name
- Email
- Business name + website
- Industry (free text)
- Team size (5–10 / 11–25 / 26–50 / other)
- Years in business
- "What's the most manual part of your week right now?" (textarea)
- "What would change if it ran without you?" (textarea, optional)

On successful Formspree submission, the form replaces itself with a short confirmation panel (one line, ~300ms) and then redirects the visitor to a Cal.com booking page. The Cal.com URL is held as a single constant in `src/content/site.js` so it's editable without touching components. If Cal.com is not configured at build time, the form falls back to a static thank-you state with a `mailto:` link.

The form replaces the current Contact section on every page. Submit posts to the existing Formspree endpoint.

**Why.** The framework's onboarding section already lists these fields. Asking them at the door does two things: filters time-wasters before the discovery call, and primes the conversation. Free text > dropdowns where dropdowns would over-constrain. Redirecting to Cal.com closes the loop in one session rather than an email round-trip.

### D5. Case studies — content shape, seed strategy, optional detail pages

**Decision.** Each case study follows the framework's Problem → Solution → Outcome table. Data shape:

```js
{
  slug: "kebab-case-id",
  title: "Short, outcome-led",
  client: "Anonymous / composite / real name",
  industry: "Agency, home services, ...",
  problem: "Plain-language description of their hell",
  solution: "What got built",
  outcomes: [
    { metric: "Hours reclaimed / week", value: "12" },
    { metric: "Leads recovered / month", value: "30+" },
  ],
  artifacts: ["Chaos map", "Workflow blueprint", "Live dashboard"],
  pullQuote: "Optional",
  heroImage: "/placeholder/case-study-X.png",
  compositeLabel: "Composite example" | "Public proof point" | null,
  hasDetailPage: true | false,
}
```

`hasDetailPage` controls whether the index card links to a `/work/:slug` detail page. When `false`, the card renders inline content (outcome, metric, pull quote) without a link. This lets short case studies live on the index without a thin detail page.

Seed `/work` with **3 composite case studies** drawn from the framework's "Real-World Proof Point" table (behavioral health invoicing, AI scheduling at a dealership, insurance portal automation). Label them clearly as illustrative ("Composite example, identifying details changed") to stay honest. At least two of the three should have `hasDetailPage: true` so the route is exercised; the third can be index-only to demonstrate the optional pattern. Replace with real engagements as they close.

**Why.** Empty case-study sections look worse than honest composite ones. The framework already gave us proof points — use them, attributed correctly. Some case studies have a strong one-line story and don't justify a full detail page; making detail pages optional keeps `/work` honest about that.

### D6. Visual system — light, brand-driven

**Decision.** Token spine in CSS custom properties (added to `src/styles/tokens.css`), built directly from the brand palette:

```
  COLOR
    --paper        #FFFFFF    page background
    --paper-soft   #FAFAFA    subtle alternate section background
    --ink          #010066    primary text, headings (brand navy)
    --ink-soft     #4A4F8C    secondary text (lightened navy, tuned for AA contrast)
    --rule         #E4E5EE    rule lines, dividers (very light navy tint)
    --accent       #FFCC01    primary accent — CTA fills, brand mark, key highlights
    --accent-warm  #FF99CB    supporting — used sparingly; Box-3 / relationship moments
    --accent-pos   #33CD67    supporting — success states, positive Box-2 highlights

  TYPE
    --font-serif   "Libre Baskerville", Georgia, serif      headings, hero, lead copy
    --font-sans    "Montserrat", system-ui, sans-serif      body, captions, UI text

  SCALE  modular, 1.25 ratio
    12 / 14 / 16 / 20 / 24 / 32 / 44 / 60 / 84

  SPACING  4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96 / 128

  MOTION   reduced by default; transitions limited to 120–200ms;
           no scroll-triggered choreography beyond Hero word cycle
```

There is no mono family in the brand palette. Drafting marks and annotations use Montserrat at small sizes (12/14px) with uppercase tracking when needed to read as "drafting" rather than body copy.

Drafting motifs are reusable primitives, not theme decoration:

- `BlueprintGrid` — faint 8-column grid overlay on hero / section breaks, drawn with `--rule`.
- `SectionRule` — rule line with a dimension tick mark (e.g., `├── 02. WHAT I BUILD ────────`).
- `Annotation` — small-caps Montserrat caption with optional corner bracket.

Webfonts: load Libre Baskerville and Montserrat via `@fontsource` packages added to dependencies, or via Google Fonts links in `public/index.html`. Both options preserve the SSR-free build.

**Why.** The brand provides the palette and the type stack — the token set wraps them so the rest of the design system stays consistent. Yellow as the *only* primary accent (with pink/green reserved for state messaging) keeps the bright palette from feeling busy; discipline comes from restraint, not from a moodier palette.

### D7. Voice and copy — banned words enforced

**Decision.** Page copy lives in `src/content/*.js` modules (one per page) — plain JS objects, not Markdown. This keeps copy editable without touching JSX and creates a single grep target for voice review.

Banned words list (rejected during code review):

```
bottleneck, leverage, streamline, optimize, seamless, robust, ecosystem,
synergy, holistic, utilize, facilitate, paradigm, empower, actionable,
cutting-edge, frictionless, scalable (as adjective), revolutionary,
disrupt, unlock (as verb), supercharge
```

Approved replacements suggested in voice spec. Enforcement is manual at first; a simple lint script in `scripts/check-voice.js` can flag occurrences on a future pass.

**Why.** Putting copy in data modules separates voice editing from layout work and lets the founder review copy without reading JSX.

### D8. Reuse and removal

**Decision.** Keep, re-skin, remove:

| Component | Action |
|---|---|
| `HeroSection.js` + `WordCycle.jsx` | Keep mechanic, swap words + visual treatment |
| `Footer.js` | Keep, update copy + links |
| `Contact.js` | Keep mechanic, reframe as discovery-call form (see D4) |
| `Header.js`, `Navbar.js` | Keep, update nav items to match new IA (incl. Blog) |
| `ProjectsSection.js`, `ProjectCard.js` | Remove |
| `Testimonial.js`, `Companies.js`, `ScrollGallery.jsx` | Remove |
| `Sidenav.js` | Remove (replaced by simpler mobile nav in Header) |
| `SpotifyLogo.js`, `SpotiifyNowPlaying.js`, `SpotifyApi.js` | Remove |
| `pages/Shopify.js`, `pages/Magic.js` | Remove (Shopify content folds into `/websites`) |
| `data.js` exports unrelated to new IA | Remove |

**Why.** The new positioning makes "now playing on Spotify" and a project grid actively confusing. Reusing the form/footer/hero saves real time; everything else costs more to repurpose than to rebuild.

### D9. Content data structure

**Decision.** `src/content/` holds one module per page plus a few shared modules:

```
src/content/
  site.js          shared constants — cal.com URL, blog URL, social links, contact email
  home.js          hero, day-in-life, what-i-build, how-it-works, faq
  automation.js    service-specific hero, what-i-build, process, faq
  websites.js      same shape — covers code, low-code (Shopify/WordPress), templates
  products.js      same shape — full-scale builds
  work.js          case studies list (imports caseStudies.js)
  caseStudies.js   the array of case-study objects (D5)
  about.js         founder story, values, why-me
  quadrant.js      questions, boxes, per-box copy + CTA
  voice.js         banned-word list + approved alternatives (used by lint script)
```

Each page component imports its content module and renders. Layouts are dumb; content modules carry the voice. `site.js` keeps URLs and integration endpoints in one place so a future Cal.com / Formspree swap is a one-file change.

**Why.** Separating copy from JSX lets the founder edit messaging without touching components. Predictable file locations also help future Claude sessions edit the right thing.

## Risks / Trade-offs

- **Risk: Composite case studies feel like a tell.** Visitors notice "illustrative example" labels and discount the proof.
  → **Mitigation.** Label them honestly but write them well. Lead with the real public proof points from the framework (dealership, behavioral health) and credit sources where possible. Replace as soon as a real engagement delivers.

- **Risk: Three peer services dilute the framework's automation pitch.** Visitors who land on `/websites` may not get the framework's full story.
  → **Mitigation.** Each service page has its own positioning that stands on its own (not propped up by automation). The home page leads with automation. The framework's voice is consistent across all three service pages, so visitors get the brand even when the surface is a website.

- **Risk: Quadrant tool feels gimmicky.** A four-box self-assessment can read as a quiz rather than a diagnostic.
  → **Mitigation.** Two questions only. Plain-language outputs. The Box-1 path doesn't pretend to be a sale — it points to lighter services. The Box-4 path explicitly says "not me."

- **Risk: Voice drift.** Banned-word enforcement is manual; over time copy drifts back to jargon.
  → **Mitigation.** Land copy in `src/content/` data modules and add `scripts/check-voice.js` (post-launch task) to lint the modules.

- **Risk: Bright palette undermines the calm/structural tone.** Yellow, pink, and green together can feel cheerful rather than measured.
  → **Mitigation.** Yellow is the only primary accent — pink and green are reserved for state colors and are used sparingly. Navy carries the visual weight (most of the page is navy on white). The drafting motif (rule lines, grid, annotations) holds the structural feel.

- **Risk: Cal.com redirect breaks if the URL is unset.** Surprise breakage in production.
  → **Mitigation.** The form falls back to a static thank-you state with a `mailto:` link when `site.js`'s `calComUrl` is empty. The fallback is the default during initial build until the user provides the URL.

- **Risk: Trade-off — flat routes over nested.** Choosing `/websites` over `/services/websites` means there's no `/services` index. Visitors who land on the wrong service page don't naturally find the others.
  → **Mitigation.** Footer carries all three service links on every page. Each service page ends with an "Other services I offer" rail linking the other two.

- **Risk: Trade-off — staying on CRA.** CRA is unmaintained. No SSR means SEO/social-share previews are weaker.
  → **Mitigation.** Accepted for v1. A future change can migrate to Next.js or Vite + a static prerender. Out of scope here.

## Migration Plan

1. **Branch.** Create `feature/automations-architect-rebuild` off `main`.
2. **Tokens first.** Land `src/styles/tokens.css` and the type stack before any page work — every page imports tokens.
3. **Content modules.** Stub `src/content/*.js` files with placeholder copy in the right shape. Lets page components be built against real data structures.
4. **Page-by-page.** Build in this order: visual primitives (`BlueprintGrid`, `SectionRule`, `Annotation`, `Placeholder`) → Header/Footer re-skin → Home → `/about` → `/automation` → `/websites` (with Shopify content folded in) → `/products` → `/quadrant` → `/work` index → `/work/:slug`.
5. **Remove dead code only after replacements are in.** Don't delete `ProjectsSection.js` until Home no longer imports it.
6. **Smoke test in the browser.** `npm start`, walk every route, confirm form submits to Formspree and (when configured) redirects to Cal.com, confirm quadrant outputs match per-box CTAs, confirm responsive at 375 / 768 / 1280.
7. **Image placeholders.** Use a single `Placeholder` component that renders a labeled box (`[ hero image — 16:9 ]`) so the founder can grep for `Placeholder` to find every spot needing real art.
8. **Rollback.** This is a CRA build deployed via Railway (per recent commits). Rollback = redeploy previous commit. No data migration.

## Open Questions

All four open questions from the explore session have been resolved during proposal review:

- **Q1.** Serif/sans choice — **resolved.** Libre Baskerville (headings) + Montserrat (body), from the brand palette.
- **Q2.** Does `/work/:slug` exist in v1 — **resolved.** Yes, but the detail page is optional per case study. A `hasDetailPage` boolean on each case-study record controls whether the card links out.
- **Q3.** Does the discovery-call form route to a calendar booking after submit — **resolved.** Yes, redirect to a Cal.com booking page configured via `src/content/site.js`.
- **Q4.** Blog — **resolved.** Keep the Hashnode external link in the primary header nav (in addition to the footer).

No outstanding blockers; ready for `/opsx:apply`.
