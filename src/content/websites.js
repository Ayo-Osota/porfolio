const websites = {
  hero: {
    eyebrow: "Service — Websites",
    title: "Websites and stores. Built to do real work.",
    subline:
      "Custom-coded sites, Shopify storefronts, WordPress, and other low-code platforms. Plus custom templates for any of them.",
    primaryCta: { label: "Book a discovery call", to: "#discovery" },
  },

  whatIBuild: {
    eyebrow: "01 — What I build",
    title: "Five shapes a site can take.",
    intro:
      "Most projects pick one. Some mix two — for example, a marketing site in code that pushes orders into a Shopify back end.",
    items: [
      {
        name: "Custom-coded marketing sites & web apps",
        line: "React, plain HTML/CSS/JS, or a stack that fits the team you'll hand it to. For when you need every pixel and every interaction your own way.",
      },
      {
        name: "Shopify storefronts",
        line: "Custom themes and store setup. Built so orders, fulfilment, and inventory move on their own. Apps connected. Reports running themselves.",
      },
      {
        name: "WordPress sites",
        line: "Custom themes or theme customisation. Plain editing for your team. Plugins audited so nothing breaks on the next update.",
      },
      {
        name: "Other low-code platforms",
        line: "Webflow, Framer, Squarespace — whatever lets you keep editing it after I leave. I pick the platform that fits the team, not the trend.",
      },
      {
        name: "Custom templates",
        line: "Reusable templates for Shopify, WordPress, and the platforms above — for when you want a starting point you can grow from.",
      },
    ],
  },

  process: {
    eyebrow: "02 — How it works",
    title: "Same five phases, adapted to a site build.",
    phases: [
      { num: "01", name: "Discovery", weeks: "Week 1", line: "Audit what you have. Map content, audiences, and where the site will connect to other systems." },
      { num: "02", name: "Design", weeks: "Week 2", line: "Wireframes, then comps. Approved before build starts." },
      { num: "03", name: "Build", weeks: "Weeks 3–5", line: "Develop, integrate, and test. Forms wired to your CRM. Analytics in." },
      { num: "04", name: "Launch & Handoff", weeks: "Week 6", line: "Launch checklist, DNS, training. You own every account before I leave." },
      { num: "05", name: "Support", weeks: "30 days", line: "Bug fixes and small tweaks free for 30 days. Then either I'm gone or we agree a retainer." },
    ],
    cta: { label: "Read the full process", to: "/automation" },
  },

  faq: {
    eyebrow: "03 — Questions you're probably asking",
    items: [
      { q: "How long does a site take?", a: "Six weeks for most. Complex e-commerce or multi-template builds run eight to ten." },
      { q: "Who writes the content?", a: "You do. I'll give you a brief and review what you send. If you want copy written too, I'll refer you to a writer I trust." },
      { q: "Where does it host?", a: "Wherever you want. I'll recommend per platform — Vercel or Netlify for code, Shopify-managed for Shopify, a managed WP host for WordPress." },
      { q: "Shopify or custom?", a: "Shopify if you sell products and want managed hosting, apps, and payments out of the box. Custom if your selling logic is unusual or you want a non-commerce front end with a commerce back end." },
      { q: "Will it connect to my other systems?", a: "Yes — forms to your CRM, store to your accounting, analytics to your dashboards. That's where the automation work and the website work overlap." },
    ],
  },

  cta: {
    eyebrow: "04 — Next step",
    title: "Tell me what site you need.",
    intro: "Ninety-minute call. I'll tell you what's realistic at what budget.",
  },
};

export default websites;
