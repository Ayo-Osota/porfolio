## ADDED Requirements

### Requirement: Service hero for automation

The `/automation` page SHALL open with a service-specific hero that names the surface ("Workflows that run the parts of your business you wish you didn't have to") and a single primary CTA ("Book a discovery call"). The framework tagline MAY appear as a smaller eyebrow above the hero headline to tie back to the home page.

#### Scenario: Hero renders before any other content
- **WHEN** a visitor loads `/automation`
- **THEN** the service hero is the first content rendered, followed by sections in the order defined in subsequent requirements

### Requirement: "What I build" detail

The page SHALL list the concrete things automation produces, drawn from Section 6 of the Business Framework: AI workflows, AI chatbots, lead capture / routing / follow-up sequences, analytics dashboards, task and project boards, cost and timesheet tracking, automated reminders to staff and customers, predictive models. Each item MUST have a 1–2 sentence plain-language description.

#### Scenario: Every framework item appears
- **WHEN** a visitor reads the "What I build" section
- **THEN** all eight items from Section 6 of the Business Framework are listed with descriptions

### Requirement: 5-phase delivery process

The page SHALL render the full 5-phase process (Discovery & Audit, Design & Architecture, Build & Integration, Training & Handoff, Post-launch Support) with the deliverables listed under each phase in the Business Framework. Each phase MUST show the week range (Week 1, Week 2, Weeks 3–6, Weeks 7–8, 30 days post-launch).

#### Scenario: Process is navigable
- **WHEN** a visitor expands or scrolls through the phases
- **THEN** each phase shows its deliverables and what the client provides versus what gets delivered

### Requirement: Pricing posture

The page SHALL include a pricing posture section (not a price list) that explains the factors influencing price (number of workflows, integrations, AI complexity, reporting depth, team size, urgency) and the factors that explicitly do not (client revenue, team headcount, industry, hours). The "Cost of Chaos" table from the framework MAY appear here.

#### Scenario: No fixed prices shown
- **WHEN** a visitor reads the pricing section
- **THEN** they see scope factors and an honest framing but no fixed dollar amounts

### Requirement: FAQ section

The page SHALL include a FAQ section addressing at minimum the five objections in Section 16 of the Business Framework: cost / ROI, "how much of MY time will this take", team adoption, "we're too unique for a system", DIY (Zapier/Make) comparison.

#### Scenario: FAQ answers the named objections
- **WHEN** a visitor reads the FAQ
- **THEN** each of the five named objections has a clear, plain-language answer

### Requirement: Cross-rail to sibling services

The page SHALL end with a rail titled "Other services I offer" linking to `/websites` and `/products`. The rail MUST treat the three services as peers — no language implying websites or products are subordinate to automation. The rail MUST NOT compete with the discovery-call CTA — it sits below it.

#### Scenario: Cross-links exist
- **WHEN** a visitor reaches the end of `/automation`
- **THEN** they can navigate to both `/websites` and `/products` in one click each

### Requirement: Discovery-call CTA at end

The page SHALL embed the discovery-call form or a button linking to it before the cross-rail.

#### Scenario: CTA precedes cross-rail
- **WHEN** a visitor scrolls to the bottom
- **THEN** the discovery-call CTA appears before the sibling-services rail
