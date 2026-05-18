const products = {
  hero: {
    eyebrow: "Service — Products",
    title: "Full-scale products. Custom software that runs an entire arm of the business.",
    subline:
      "Multi-feature builds with logins, data, real operational logic. Built for the team that will run it every day.",
    primaryCta: { label: "Book a discovery call", to: "#discovery" },
  },

  whatIBuild: {
    eyebrow: "01 — What I build",
    title: "Four product shapes most often.",
    intro:
      "If it's bigger than a workflow and bigger than a marketing site — it's a product.",
    items: [
      { name: "Internal operations tools", line: "The thing your team would build a spreadsheet for, then a second spreadsheet, then a third. Replaced with software made for the work." },
      { name: "Customer-facing portals", line: "Logins, dashboards, self-serve actions. So your customers stop emailing your team for things they could do themselves." },
      { name: "Marketplace-style products", line: "Two-sided platforms where supply meets demand. Listings, search, transactions, ratings — the full shape." },
      { name: "Domain-specific products", line: "Software that fits one industry's real workflows — like Revv for autoshops or Noolu for schools." },
    ],
  },

  references: {
    eyebrow: "02 — What full-scale looks like",
    title: "Two products I've shipped.",
    intro:
      "Both are built and live. They're the kind of depth I mean when I say 'full-scale.'",
    builds: [
      {
        name: "Revv",
        line: "Autoshop management system. Booking, jobs, parts, invoices — running the back office for the team.",
        href: "https://shop.revvauto.care/",
        imageLabel: "Revv preview",
      },
      {
        name: "NooluHQ",
        line: "School management system. Students, classes, finance, communication — built for staff who aren't software people.",
        href: "https://www.nooluhq.com/",
        imageLabel: "Noolu preview",
      },
    ],
  },

  process: {
    eyebrow: "03 — How it works",
    title: "Same five phases, longer build window.",
    phases: [
      { num: "01", name: "Discovery", weeks: "Weeks 1–2", line: "Audit how the work happens today. Talk to the people who will use it. Map every job-to-be-done." },
      { num: "02", name: "Design & Architecture", weeks: "Weeks 3–4", line: "System design, data model, user flows, comps. Sign-off before code." },
      { num: "03", name: "Build", weeks: "Weeks 5–14", line: "Iterative build with regular demos. You see it working, not just talked about." },
      { num: "04", name: "Launch & Training", weeks: "Weeks 15–16", line: "Migration, training, and admin transfer. Your team starts using it for real." },
      { num: "05", name: "Support", weeks: "60 days", line: "Two months of bug fixes and small tweaks. Then a retainer for ongoing changes or full handover to your in-house engineer." },
    ],
    cta: { label: "Read the full process", to: "/automation" },
  },

  faq: {
    eyebrow: "04 — Questions you're probably asking",
    items: [
      { q: "How long?", a: "Sixteen weeks is the floor for a real product. Anything shorter is either a workflow or a marketing site dressed up." },
      { q: "Who owns it after?", a: "You do. Code, accounts, infra — all in your name. I'll set up a retainer if you want me to keep building, or hand it cleanly to your team." },
      { q: "What stack?", a: "Whatever the team that has to maintain it can read. Most builds end up React + Node or Next.js + Postgres. I pick to fit you, not me." },
      { q: "What about ongoing maintenance?", a: "Three options. Monthly retainer with me, hire an in-house engineer (I'll help you interview), or a hosting-only setup if the product is stable." },
      { q: "Workflow vs product — how do I know which I need?", a: "If the work is multi-feature, has a user interface someone logs into every day, and would be embarrassing as a spreadsheet — it's a product. If it's a sequence of automatic steps with no daily UI — it's a workflow." },
    ],
  },

  cta: {
    eyebrow: "05 — Next step",
    title: "Tell me what you're trying to build.",
    intro: "Ninety-minute call. I'll tell you whether it's a product, a workflow, or neither.",
  },
};

export default products;
