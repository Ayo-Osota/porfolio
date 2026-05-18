## ADDED Requirements

### Requirement: Founder's story

The `/about` page SHALL render the full founder's story from Section 22 of the Business Framework — the arc from architecture, through the early-career struggle with underpowered hardware, into software engineering, and ending with the realisation that startups and businesses both need "structure, automation, and habits that scale." The story MUST be lightly edited for the web (paragraph breaks, scannable rhythm) but MUST NOT remove the architecture-to-software-architecture-to-operations-architecture arc.

#### Scenario: Full story is present
- **WHEN** a visitor reads `/about`
- **THEN** the page contains the architect → software architect → architect of operations narrative

#### Scenario: Story precedes everything else on the page
- **WHEN** the page renders
- **THEN** the founder's story appears before the values list and before the why-me / CTA sections

### Requirement: Brand values

The page SHALL list the five brand values from Section 2 of the Business Framework: Radical Honesty, Ownership Transfer, "the goal is peace of mind, not more automation", selective partnership ("I only work with people I can help; everyone else gets a referral"), Implementation Over Advice. Each value MUST be a short heading with a 1–2 sentence elaboration in the brand voice.

#### Scenario: All five values render
- **WHEN** a visitor reaches the values section on `/about`
- **THEN** all five values from Section 2 of the framework are visible

### Requirement: Why-me / USP

The page SHALL include a "why work with me" section grounded in Section 17 of the Business Framework (working *with* the client, full ownership transfer, radical honesty, the competitor comparison table). The competitor comparison MAY be rendered as a small table.

#### Scenario: USP section names the differentiator
- **WHEN** a visitor reads the why-me section
- **THEN** the "I work *with* them, not *for* them" idea and the referral-out posture are explicitly stated

### Requirement: Photo placeholder

The page SHALL reserve a place for a portrait of Ayo using the standard `Placeholder` component. The placeholder MUST be labelled (e.g. "[ portrait — 4:5 ]") so the founder can grep for placeholders and replace them later.

#### Scenario: Placeholder is present and labelled
- **WHEN** the page renders without real photography
- **THEN** a labelled placeholder occupies the portrait slot

### Requirement: Discovery-call CTA at end

The page SHALL close with a discovery-call CTA that ties back to the brand values (e.g. "If radical honesty and ownership transfer sound like what you want, book a call.").

#### Scenario: CTA appears at the bottom of /about
- **WHEN** a visitor scrolls to the end of `/about`
- **THEN** a discovery-call CTA is visible
