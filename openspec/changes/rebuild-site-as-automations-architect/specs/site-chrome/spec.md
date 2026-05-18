## ADDED Requirements

### Requirement: Header navigation

The site header SHALL render a logo / wordmark linking to `/` and the following nav items in order:

1. **Automation** → `/automation`
2. **Websites** → `/websites`
3. **Products** → `/products`
4. **Work** → `/work`
5. **About** → `/about`
6. **Blog** → external link to `https://ayoosota.hashnode.dev/` (opens in a new tab)

A primary "Book a discovery call" CTA button MUST appear in the header on every page except when scrolled past the page's own discovery-call CTA. The header MUST stick to the top of the viewport on scroll.

#### Scenario: Nav items render in order
- **WHEN** a visitor loads any page
- **THEN** the header shows the six nav items in the specified order followed by the discovery-call CTA

#### Scenario: Blog opens externally
- **WHEN** a visitor clicks the Blog nav item
- **THEN** the Hashnode blog opens in a new browser tab without navigating away from the current site

#### Scenario: Active route is indicated
- **WHEN** a visitor is on `/automation`
- **THEN** the "Automation" nav item is visually marked as active

### Requirement: Mobile navigation

On viewports under 768px wide, the header SHALL collapse to a hamburger menu that opens a full-screen overlay with the same nav items and the discovery-call CTA. The overlay MUST close on item selection or on tap of an explicit close control.

#### Scenario: Mobile overlay opens and closes
- **WHEN** a visitor on a mobile-width viewport taps the hamburger
- **THEN** a full-screen nav overlay opens
- **AND** tapping any nav item closes the overlay and navigates to the selected route

### Requirement: Footer

The footer SHALL render:

- A short brand line (e.g. *"Automations Architect. Plain language. Honest work."*)
- The three service links (`/automation`, `/websites`, `/products`)
- Site links (`/work`, `/about`, `/quadrant`)
- An external link to the Hashnode blog (https://ayoosota.hashnode.dev/)
- Social links (Twitter/X, GitHub, LinkedIn, email)
- Copyright line with the current year computed dynamically

The footer MUST NOT include the previous Spotify "now playing" widget or any music-related component.

#### Scenario: Footer sections render
- **WHEN** a visitor scrolls to the footer on any page
- **THEN** the brand line, service links, site links, blog link, social icons, and dynamic copyright are visible

### Requirement: Routes

The application router SHALL register the following routes:

| Path | Component |
|---|---|
| `/` | Home |
| `/automation` | Automation service page |
| `/websites` | Websites service page |
| `/products` | Products service page |
| `/work` | Case-studies index |
| `/work/:slug` | Case-study detail |
| `/about` | About page |
| `/quadrant` | Sanity quadrant tool |

A catch-all `*` route SHALL render a simple 404 component linking back to `/`. The previous `/shopify` and `/playground` routes MUST NOT be registered.

#### Scenario: All routes resolve
- **WHEN** a visitor navigates to any path in the table above
- **THEN** the corresponding page component renders

#### Scenario: 404 for unknown paths
- **WHEN** a visitor navigates to `/anything-not-listed`
- **THEN** a 404 component renders with a link back to `/`

#### Scenario: Legacy routes are gone
- **WHEN** a visitor navigates to `/shopify`
- **THEN** the 404 component renders (the Shopify content lives on `/websites` instead)

### Requirement: Removed components and routes

The following components MUST be deleted from the source tree as part of this change: `ProjectsSection.js`, `ProjectCard.js`, `Testimonial.js`, `Companies.js`, `ScrollGallery.jsx`, `Sidenav.js`, `SpotifyLogo.js`, `SpotiifyNowPlaying.js`, `SpotifyApi.js`, `pages/Shopify.js`, `pages/Magic.js`.

#### Scenario: Dead code is not present
- **WHEN** a developer searches the `src/` tree after the change ships
- **THEN** none of the listed files exist
