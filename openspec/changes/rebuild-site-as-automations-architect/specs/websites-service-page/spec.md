## ADDED Requirements

### Requirement: Service hero for websites

The `/websites` page SHALL open with a hero that introduces the service in its own right — e.g. *"Websites and stores. Built to do real work."* — followed by a one-sentence subline naming the platforms covered (code, Shopify, WordPress, other low-code platforms, custom templates). A single primary CTA ("Book a discovery call") MUST appear in the hero. The hero MUST NOT subordinate websites to the automation service; the page stands on its own.

#### Scenario: Hero positions websites as a standalone service
- **WHEN** a visitor lands on `/websites`
- **THEN** the hero copy presents websites as its own service, not as a form automation takes

### Requirement: "What I build" — websites, stores, and templates

The page SHALL list the concrete build types as separate cards or sections:

1. **Custom-coded marketing sites and web apps** (React, plain HTML/CSS/JS, or similar)
2. **Shopify storefronts** (custom themes and store setup)
3. **WordPress sites** (theme customisation or custom themes)
4. **Other low-code builds** (Webflow, Framer, etc.) — grouped where appropriate
5. **Custom templates** for any of the above platforms

Each item MUST be described in plain language with an outcome focus ("a Shopify store that captures orders, books fulfilment, and updates inventory without manual entry").

#### Scenario: All five build types are listed
- **WHEN** a visitor reads the "What I build" section
- **THEN** custom-code, Shopify, WordPress, other low-code, and custom-templates each appear as a distinct entry

#### Scenario: Shopify content is folded in
- **WHEN** a visitor reads the page
- **THEN** the Shopify content that previously lived at `/shopify` appears here as one of the build types, with no separate `/shopify` route remaining in the site nav

### Requirement: Process summary

The page SHALL show a condensed version of the 5-phase delivery process adapted for website builds (Discovery → Design → Build → Launch & Handoff → Support), with a link to the full process on `/automation` (where the canonical 5-phase description lives).

#### Scenario: Process matches sibling structure
- **WHEN** a visitor compares `/websites` and `/automation`
- **THEN** the same five phases appear, adapted to website-build deliverables, with a cross-link

### Requirement: FAQ section

The page SHALL include a FAQ specific to website projects (timeline, content responsibility, hosting, platform selection, custom-template vs theme, how the site connects to other systems).

#### Scenario: FAQ exists with website-specific questions
- **WHEN** a visitor reads the FAQ
- **THEN** at least five website-specific questions are answered in plain language

### Requirement: Cross-rail to sibling services

The page SHALL end with a rail titled "Other services I offer" linking to `/automation` and `/products`. The rail MUST treat the three services as peers — no language implying websites is subordinate to automation.

#### Scenario: Cross-links exist with peer framing
- **WHEN** a visitor reaches the end of `/websites`
- **THEN** they see "Other services I offer" with links to both `/automation` and `/products` and can navigate to each in one click

### Requirement: Discovery-call CTA at end

The page SHALL embed the discovery-call form or a button linking to it before the cross-rail.

#### Scenario: CTA precedes cross-rail
- **WHEN** a visitor scrolls to the bottom
- **THEN** the discovery-call CTA appears before the sibling-services rail
