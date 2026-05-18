## ADDED Requirements

### Requirement: Form fields

The discovery-call form SHALL collect the following fields in this order:

1. **Full name** (text, required)
2. **Email** (email, required)
3. **Business name** (text, required)
4. **Business website** (url, optional)
5. **Industry** (text, required, free-form)
6. **Team size** (radio: 5–10, 11–25, 26–50, Other, required)
7. **Years in business** (radio: under 3, 3–5, 6–10, 11+, required)
8. **What's the most manual part of your week right now?** (textarea, required, 500-char soft limit)
9. **What would change if it ran without you?** (textarea, optional, 500-char soft limit)

Field labels MUST be in plain language and MUST NOT use banned words from the voice spec.

#### Scenario: All required fields are validated
- **WHEN** a visitor submits the form with any required field empty
- **THEN** validation errors appear inline next to the empty fields and the form is not submitted

### Requirement: Formspree submission

The form SHALL post to the existing Formspree endpoint already configured in `src/components/Contact.js`. No new third-party service is introduced in this change.

#### Scenario: Successful submission
- **WHEN** a visitor submits a fully valid form
- **THEN** the form posts to Formspree
- **AND** on a 200 response the form swaps to the thank-you state

### Requirement: Cal.com redirect on success

On successful Formspree submission the form SHALL render a brief confirmation flash (one line, ≤500ms) and then redirect the visitor to the Cal.com booking URL held in `src/content/site.js` as `calComUrl`. The redirect MUST use a top-level navigation (`window.location.assign`) so the visitor lands on Cal.com directly rather than in an iframe.

#### Scenario: Successful submit redirects to Cal.com
- **WHEN** the form submits successfully and `calComUrl` is configured
- **THEN** a confirmation flash renders for under 500ms
- **AND** the visitor is then redirected to the configured Cal.com booking page

### Requirement: Static fallback when Cal.com is unconfigured

If `calComUrl` in `src/content/site.js` is empty, undefined, or a placeholder, the form SHALL fall back to a static thank-you panel containing: a confirmation line ("Got it. I read every one of these."), an expected response time ("Reply within 48 hours, often sooner."), and a `mailto:` fallback link. No redirect SHALL occur in this case.

#### Scenario: No Cal.com URL configured
- **WHEN** the form submits successfully and `calComUrl` is empty
- **THEN** the static thank-you panel renders in place of the form
- **AND** no navigation away from the current page occurs

### Requirement: Error state

If the submission fails (non-200 response, network error, Formspree downtime), the form SHALL show an inline error banner with the visitor's typed values preserved and a fallback contact link (`mailto:osotaayomikun@gmail.com`).

#### Scenario: Submission failure preserves input
- **WHEN** a submission fails
- **THEN** the form fields retain the visitor's input
- **AND** an error banner with a mailto fallback is visible

### Requirement: Form placement

The discovery-call form SHALL be present (embedded or one-click reachable) on every page of the site: `/`, `/automation`, `/websites`, `/products`, `/work`, `/work/:slug`, `/about`, `/quadrant`.

#### Scenario: Form is reachable from every route
- **WHEN** a visitor walks any route on the site
- **THEN** the discovery-call form or a CTA linking to it is visible without leaving the page

### Requirement: No banned-word labels

The form MUST NOT use the banned words listed in the voice spec in any field label, helper text, validation message, or submit button.

#### Scenario: Voice lint passes on form copy
- **WHEN** the voice lint script runs against the form copy
- **THEN** no banned words are flagged
