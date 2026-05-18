// Site-wide constants. Update these without touching components.

export const siteName = "Ayo Osota";
export const tagline =
  "I build intelligent systems that stop business owners from losing time, money, and growth to manual work.";

// Cal.com booking page — set this to your real Cal.com URL.
// When empty, the discovery-call form falls back to a static thank-you panel.
export const calComUrl = "https://cal.com/ayo-osota";

// External links
export const blogUrl = "https://ayoosota.hashnode.dev/";
export const contactEmail = "osotaayomikun@gmail.com";

// Formspree form endpoint (kept from the existing project setup)
export const formspreeId = "xjvdojvv";

// Social links — order is preserved in header/footer
export const socials = [
  { id: "twitter", label: "Twitter / X", href: "https://x.com/messages/compose?recipient_id=843231377264926720" },
  { id: "github", label: "GitHub", href: "https://github.com/Ayo-Osota" },
  { id: "linkedin", label: "LinkedIn", href: "https://www.linkedin.com/in/ayo-osota/" },
  { id: "email", label: "Email", href: `mailto:${"osotaayomikun@gmail.com"}` },
];

// Primary nav — used by Header and mobile overlay
export const navItems = [
  { id: "automation", label: "Automation", to: "/automation" },
  { id: "websites", label: "Websites", to: "/websites" },
  { id: "products", label: "Products", to: "/products" },
  { id: "work", label: "Work", to: "/work" },
  { id: "about", label: "About", to: "/about" },
  { id: "blog", label: "Blog", href: blogUrl, external: true },
];

// Footer nav — keeps the same shape but with extra entries
export const footerLinks = {
  services: [
    { label: "Automation", to: "/automation" },
    { label: "Websites", to: "/websites" },
    { label: "Products", to: "/products" },
  ],
  site: [
    { label: "Work", to: "/work" },
    { label: "About", to: "/about" },
    { label: "Find your box", to: "/quadrant" },
  ],
  external: [
    { label: "Blog", href: blogUrl },
  ],
};
