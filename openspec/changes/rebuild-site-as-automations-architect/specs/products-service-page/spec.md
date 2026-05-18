## ADDED Requirements

### Requirement: Service hero for products

The `/products` page SHALL open with a hero that introduces full-scale tech products as a service in their own right — for example, *"Full-scale products. Custom software that runs an entire arm of the business."* A single primary CTA ("Book a discovery call") MUST appear in the hero. The hero MUST NOT subordinate products to the automation service; the page stands on its own.

#### Scenario: Hero positions products as a standalone service
- **WHEN** a visitor lands on `/products`
- **THEN** the hero copy presents full-scale products as their own service, not as a form automation takes

### Requirement: "What I build" — products

The page SHALL describe the kinds of full builds offered: internal operations tools, customer-facing portals, marketplace-style products, dashboards with login, multi-tenant tools. Each MUST have a plain-language description with an outcome focus.

#### Scenario: Product types are listed with outcomes
- **WHEN** a visitor reads the section
- **THEN** at least four product types are listed, each described in terms of the business outcome (not the tech stack)

### Requirement: Reference builds

The page SHALL reference Revv (autoshop management) and NooluHQ (school management) as examples of the depth of product the practice has delivered. Each reference MUST link out to the live site and MAY include a screenshot placeholder.

#### Scenario: References are linked
- **WHEN** a visitor clicks a reference build
- **THEN** they are taken to the live external site in a new tab

### Requirement: Process summary

The page SHALL show a condensed 5-phase process adapted for product builds, with a link to the full process on `/automation`.

#### Scenario: Process structure matches sibling pages
- **WHEN** a visitor compares the three service pages
- **THEN** the five-phase structure is consistent across all of them

### Requirement: FAQ section

The page SHALL include a FAQ specific to product engagements (timeline, ownership, ongoing maintenance, stack choices, how the product fits into existing tools, when to choose a product over a workflow).

#### Scenario: FAQ exists with product-specific questions
- **WHEN** a visitor reads the FAQ
- **THEN** at least five product-specific questions are answered

### Requirement: Cross-rail to sibling services

The page SHALL end with a rail titled "Other services I offer" linking to `/automation` and `/websites`. The rail MUST treat the three services as peers — no language implying products are subordinate to automation.

#### Scenario: Cross-links exist with peer framing
- **WHEN** a visitor reaches the end of `/products`
- **THEN** they see "Other services I offer" with links to both `/automation` and `/websites` and can navigate to each in one click

### Requirement: Discovery-call CTA at end

The page SHALL embed the discovery-call form or a button linking to it before the cross-rail.

#### Scenario: CTA precedes cross-rail
- **WHEN** a visitor scrolls to the bottom
- **THEN** the discovery-call CTA appears before the sibling-services rail
