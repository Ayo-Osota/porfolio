import { tagline } from "./site";

const home = {
  hero: {
    tagline,
    subline:
      "I diagnose what's manual, design a system, build it, and hand it over. You stop running the day-to-day and start running the business.",
    primaryCta: { label: "Book a discovery call", to: "#discovery" },
    wordCycle: {
      prefix: "Stop",
      words: [
        "chasing leads",
        "building reports by hand",
        "answering at 11pm",
        "training the same hire twice",
        "writing the same email",
      ],
      resolution: "automated",
    },
  },

  dayInLife: {
    eyebrow: "01 — Sound familiar?",
    title: "A week in your life right now.",
    intro:
      "If two or more of these feel familiar, you're the reason I built this practice.",
    entries: [
      { time: "6:30am", line: "Wake up, check phone. Forty-five unread emails before your feet touch the floor." },
      { time: "7:30am", line: "Get the kids ready while answering Slack on a toothbrush." },
      { time: "9:00am", line: "A quick standup that runs an hour because nothing is clear." },
      { time: "10:30am", line: "Start real work, then get pulled into three fires." },
      { time: "12:00pm", line: "Lunch at the desk while you rebuild the same report you built last Monday." },
      { time: "2:00pm", line: "Sales call with a lead that came in yesterday — already cold." },
      { time: "3:30pm", line: "Chase a team member for an update they should have sent two days ago." },
      { time: "5:00pm", line: "Supposed to stop. Twenty more emails. Ten more Slack messages." },
      { time: "7:00pm", line: "Dinner with the family. Phone on the table." },
      { time: "9:00pm", line: "Back online for the work no one else can do." },
      { time: "11:30pm", line: "Collapse. Tomorrow looks the same." },
    ],
  },

  servicesRail: {
    eyebrow: "03 — What I build",
    title: "Three services. One discipline.",
    intro:
      "Whatever the work needs to be, I build it so you stop being in the middle of it.",
    items: [
      {
        id: "automation",
        title: "AI & automated systems",
        line: "Workflows, AI helpers, dashboards, and reminders that do the chasing for you.",
        to: "/automation",
        emphasis: true,
      },
      {
        id: "websites",
        title: "Websites & low-code builds",
        line: "Sites and stores in code, Shopify, WordPress, and more — plus custom templates.",
        to: "/websites",
      },
      {
        id: "products",
        title: "Full-scale tech products",
        line: "Multi-feature builds for entire arms of the business. Custom software, owned by you.",
        to: "/products",
      },
    ],
  },

  process: {
    eyebrow: "04 — How it works",
    title: "Five phases. Eight weeks. Then it's yours.",
    intro:
      "Same shape every time. The shape of the work changes by service; the discipline doesn't.",
    phases: [
      { num: "01", name: "Discovery & Audit", weeks: "Week 1", line: "I map every manual task, every chase, every report you build by hand. You get a Sanity Audit Report with a firm quote." },
      { num: "02", name: "Design & Architecture", weeks: "Week 2", line: "We design the system on paper before a line of code or a single Make scenario is built." },
      { num: "03", name: "Build & Integration", weeks: "Weeks 3–6", line: "I build the workflows, connect the tools, add the AI layer, and test the edge cases." },
      { num: "04", name: "Training & Handoff", weeks: "Weeks 7–8", line: "Your team learns the system. You own every account. You can run it without me." },
      { num: "05", name: "Post-launch support", weeks: "30 days", line: "Anything breaks in the first 30 days, I fix it. Small tweaks included." },
    ],
    cta: { label: "Read the full process", to: "/automation" },
  },

  proofTeaser: {
    eyebrow: "05 — Proof",
    title: "What this looks like when it lands.",
    intro: "A few stories. Some composite, some public — labelled so you know which is which.",
    cta: { label: "See all case studies", to: "/work" },
  },

  closing: {
    eyebrow: "06 — Talk to me",
    title: "Tell me what's stuck. I'll tell you honestly if I can help.",
    intro:
      "Ninety-minute call. No deck. I'll either sketch what a fix looks like, or tell you I'm not the right person.",
  },
};

export default home;
