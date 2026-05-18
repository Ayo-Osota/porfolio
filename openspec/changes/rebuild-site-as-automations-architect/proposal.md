## Why

The current site presents Ayo as a frontend developer with a project grid (Musica, Artsy, Paw Care, etc.) — but the business has repositioned to an Automations Architect serving overwhelmed business owners ("Box 2" in the Sanity Quadrant). The Business Framework document is now the source of truth for who the audience is, what is being sold, and how the brand should feel. The site must match it, or every other channel (LinkedIn, outreach, referrals) drives traffic to a page that contradicts the pitch.

## What Changes

- **New positioning across the site.** Identity changes from "frontend developer / portfolio" to "Automations Architect / services site." Audience is Box-2 business owners (5–50 employees, 5–15 years in business) as the primary, with Box-1 owners served via lighter offerings.
- **Three peer services.** The practice sells three services: (1) AI & automated systems, (2) websites built with code or low-code tools (Shopify, WordPress, etc.) plus custom templates for those platforms, and (3) full-scale tech products. Automation is the headline service on the homepage; each gets its own deep page.
- **New hero line.** Use the Business Framework tagline verbatim: *"I build intelligent systems that stop business owners from losing time, money, and growth to manual work."*
- **New information architecture.** Distributed routes replace the current single-home + /shopify structure: `/`, `/automation`, `/websites`, `/products`, `/work`, `/about`, `/quadrant`, plus an external blog link kept in primary nav.
- **New diagnostic tool.** A "Find Your Box" Sanity Quadrant tool (embedded on home + standalone at `/quadrant`) routes visitors to the right CTA: Box 2 → discovery call; Box 1 → recommended lighter services; Box 3 → light peer CTA; Box 4 → honest "not now."
- **New work section.** **BREAKING:** the project grid is dropped. Replaced by case studies on `/work` written in the framework's Problem → Solution → Outcome shape. Hypothetical / composite case studies seed the section until real engagements close. Detail pages at `/work/:slug` are optional per case study — not every card needs a deep page.
- **New about page.** The founder's story (architect → software architect → architect of operations) lives at `/about`, not the home page.
- **New discovery-call funnel.** The Contact form mechanic is reused but reframed as a Discovery Call request with light pre-qualifying fields (industry, team size, what's manual today). On successful submission, the visitor is routed to a Cal.com booking page so they can pick a time without another email round.
- **New visual system.** Light theme, brand-driven. **Fonts:** Libre Baskerville for headings, Montserrat for body. **Colors:** white background, deep navy (#010066) ink, yellow (#FFCC01) as primary accent, pink (#FF99CB) and green (#33CD67) as sparing supporting colors. Tone is "Batman + Madara" — calm, direct, structural — held through layout discipline, type weight, copy voice, and restrained use of the bright accent.
- **New voice rules.** Plain language across the site. Banned words include *bottleneck, leverage, streamline, optimize, seamless, robust, ecosystem, synergy, holistic, utilize, facilitate, paradigm, empower, actionable, cutting-edge*.
- **Reused components.** The Hero animation mechanic (WordCycle), Footer, and Contact form mechanic are kept and re-skinned/re-copied. Most other components (ProjectsSection, ProjectCard, Testimonial, Companies, ScrollGallery, Sidenav, Spotify widgets) are removed.
- **Images.** Placeholders used throughout the rebuild; user supplies real images post-build.

## Capabilities

### New Capabilities

- `homepage`: The `/` page — automation-led narrative arc (hero → "sound familiar?" → embedded quadrant → three services rail → how it works → proof teaser → discovery-call CTA).
- `automation-service-page`: The `/automation` deep page — what gets built (workflows, AI, dashboards, lead automation, reminders, cost tracking), how it's delivered (5-phase process), pricing posture, FAQ.
- `websites-service-page`: The `/websites` deep page — websites built with code or low-code platforms (Shopify, WordPress, and similar), plus custom templates for those platforms. Folds in the content currently at `/shopify`.
- `products-service-page`: The `/products` deep page — full-scale tech products (Revv-style, Noolu-style) with deeper feature scope than a marketing site or a single workflow.
- `case-studies`: The `/work` page and optional case-study detail format — Problem → Solution → Outcome stories. Seeded with framework-style composite case studies; ready to absorb real engagements.
- `about-page`: The `/about` page — founder's story (architect → software architect → architect of operations), brand values, why-me.
- `sanity-quadrant-tool`: The "Find Your Box" interactive — 2-axis input, places the visitor in one of four boxes, returns a tailored message + CTA per box. Embedded on `/` and standalone at `/quadrant`.
- `discovery-call-form`: The discovery-call request form — name, email, business name, industry, team size, years in business, what is manual today, what success looks like. Posts via the existing Formspree integration, then redirects the visitor to a Cal.com booking page.
- `site-chrome`: Header, footer, navigation, routing. Header nav reflects the new IA and includes an external Blog link to Hashnode; footer keeps shape with new copy; routes registered in `App.js`.
- `visual-system`: Design tokens — brand colors (white paper, navy ink, yellow primary accent, pink and green as supports), type stack (Libre Baskerville for headings, Montserrat for body), spacing scale, drafting/blueprint motifs (faint grid, rule lines, dimension marks), motion rules (near-zero, no decorative animation).
- `voice-and-copy`: Site-wide copy rules — plain language, the banned-word list, sentence rhythm, and how the brand voice (calm, direct, structural) is applied across pages.

### Modified Capabilities

None. `openspec/specs/` is currently empty; every capability above is introduced fresh.

## Impact

**Code removed or replaced**
- `src/pages/Home.js` — rewritten end-to-end.
- `src/pages/Shopify.js` — content folds into `/websites`; route retired.
- `src/components/ProjectsSection.js`, `ProjectCard.js`, `Testimonial.js`, `Companies.js`, `ScrollGallery.jsx`, `Sidenav.js`, `SpotifyLogo.js`, `SpotiifyNowPlaying.js`, `SpotifyApi.js` — removed (out of scope for the new positioning).
- `src/data.js` — the `projectsActive`, `projects`, `testimonials`, `shopifyArticleContent`, `codePenData` exports are removed or replaced with `caseStudies`, `services`, `quadrantBoxes`, etc.

**Code kept and re-skinned**
- `src/components/HeroSection.js` — animation mechanic retained, content + visual treatment swapped.
- `src/components/WordCycle.jsx` — kept, new word lists.
- `src/components/Footer.js` — kept, copy and links updated.
- `src/components/Contact.js` — kept as form mechanic, reframed as Discovery Call request with new fields and a Cal.com post-submit redirect.
- `src/components/Header.js`, `Navbar.js` — kept, nav items updated to match new IA (Blog included).

**Code added**
- New pages: `src/pages/Automation.js`, `src/pages/Websites.js`, `src/pages/Products.js`, `src/pages/Work.js`, `src/pages/About.js`, `src/pages/Quadrant.js`, `src/pages/CaseStudy.js` (detail).
- New components: `SanityQuadrant.jsx`, `CaseStudyCard.jsx`, `ServicePageLayout.jsx`, `DayInLife.jsx` (the "their hell" table), `PhaseList.jsx` (5-phase process), `FAQ.jsx`, `SectionRule.jsx` (drafting rule lines), `BlueprintGrid.jsx`, `Placeholder.jsx`.
- New design-token source: `src/styles/tokens.css` — colors, typography, spacing, motion.
- New copy module: `src/content/` — page copy held as data so it can be edited without touching JSX. Also holds the site-wide Cal.com URL constant.

**Routes**
- Add: `/automation`, `/websites`, `/products`, `/work`, `/work/:slug`, `/about`, `/quadrant`.
- Retire: `/shopify` (content moves into `/websites`).
- Keep: `/` (rewritten). External Hashnode blog link kept in primary nav.

**Dependencies**
- No new runtime dependencies are required for the proposal scope. The existing stack (React 18, react-router-dom, styled-components, GSAP, react-icons, Formspree) covers the build. `fusioncharts` and `react-fusioncharts` are unused by the new scope — flagged for removal during apply.

**Assets**
- All images are placeholders during build. User supplies real photography/case-study screens before launch.

**Out of scope (explicitly)**
- Analytics, A/B testing, CMS integration, blog migration, internationalization, dark-mode variant, real client case studies (deferred until engagements close).
