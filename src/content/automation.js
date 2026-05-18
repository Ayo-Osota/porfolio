const automation = {
  hero: {
    eyebrow: "Service — Automation",
    title: "Workflows that run the parts of your business you wish you didn't have to.",
    subline:
      "AI-assisted systems that chase, remind, report, and route — so your team stops being the glue holding it all together.",
    primaryCta: { label: "Book a discovery call", to: "#discovery" },
  },

  whatIBuild: {
    eyebrow: "01 — What I build",
    title: "Eight things that go on most builds.",
    intro:
      "Not every project gets all eight. The audit decides which are worth building first.",
    items: [
      { name: "AI workflows", line: "Multi-step automations that read inputs, decide what to do, and act — with an AI step where judgement is needed." },
      { name: "AI chatbots", line: "Front-line responders for leads, customers, and internal questions. Trained on your docs, your tone, your rules." },
      { name: "Lead capture, routing, and follow-up", line: "Instant response when a lead comes in. Auto-sequencing. Meeting booking. No more cold leads at 10pm Friday." },
      { name: "Analytics dashboards", line: "Live numbers pulled from your real systems. Built once, updates itself. No more rebuilding reports on Monday." },
      { name: "Task & project boards", line: "When X happens, assign task to Y with a due date and a reminder. Your team stops needing to be told what's next." },
      { name: "Cost & timesheet tracking", line: "Automatic cost capture per job or service. So you know your real margins before you quote the next one." },
      { name: "Auto-reminders", line: "To staff for deadlines. To customers for appointments, invoices, renewals. No more manual chasing." },
      { name: "Predictive models", line: "Forecast revenue, churn, capacity. Decisions based on what's likely, not what feels true today." },
    ],
  },

  process: {
    eyebrow: "02 — How it works",
    title: "Five phases. Eight weeks. Then you own it.",
    phases: [
      {
        num: "01", name: "Discovery & Audit", weeks: "Week 1",
        deliverables: [
          "Kickoff call — 90 minutes, deep dive on current workflows",
          "Process inventory — every manual task, handoff, and report",
          "Tool audit — what you have, what's connected, what isn't",
          "Chaos map — visual diagram of where the work breaks",
          "Sanity Audit Report — findings, scope, and a firm price",
        ],
      },
      {
        num: "02", name: "Design & Architecture", weeks: "Week 2",
        deliverables: [
          "Workflow blueprint — every trigger, action, and condition",
          "Data mapping — where it comes from, where it goes",
          "Integration plan — which tools talk to which, how",
          "Logic rules — written, reviewed, signed off before I build",
        ],
      },
      {
        num: "03", name: "Build & Integration", weeks: "Weeks 3–6",
        deliverables: [
          "Custom workflows in Make, Zapier, n8n, or similar",
          "API connections to your CRM, email, calendar, project tools",
          "AI layer where judgement is needed (OpenAI or equivalent)",
          "Reporting dashboard — live, auto-populated",
          "Error handling and fallback logic for the edge cases",
        ],
      },
      {
        num: "04", name: "Training & Handoff", weeks: "Weeks 7–8",
        deliverables: [
          "Live walkthrough with you and the team",
          "Written user guides — simple, step-by-step",
          "Process maps showing how it runs now",
          "Admin access transfer — you own every account",
          "Handoff checklist confirming you can run it without me",
        ],
      },
      {
        num: "05", name: "Post-launch support", weeks: "30 days",
        deliverables: [
          "Bug fixes free for 30 days",
          "Small tweaks included (reminder timing, extra fields)",
          "Email and Slack support",
          "30-day health check call",
        ],
      },
    ],
  },

  pricing: {
    eyebrow: "03 — Pricing",
    title: "Pricing is based on scope, not on how much you make.",
    intro:
      "I don't charge hourly. The audit produces a firm number based on what the system actually needs to do.",
    influencers: [
      "Number of workflows",
      "Number of tool integrations",
      "AI complexity — simple prompts vs custom agents",
      "Reporting depth — basic dashboard vs multi-source analytics",
      "Team size to train",
      "Urgency — rush delivery adds 30–50%",
    ],
    notInfluencers: [
      "Your revenue",
      "Your team size",
      "Your industry",
      "How long the call was",
    ],
    costOfChaos: {
      title: "What you're already paying for chaos.",
      rows: [
        { label: "Owner spends 20 hours/week on manual tasks", value: "$50k–$150k+" },
        { label: "Lost leads (10–30% go cold)", value: "$50k–$500k+" },
        { label: "Manual reporting (5 hours/week)", value: "$10k–$50k" },
        { label: "Churn from slow response", value: "$50k–$500k+" },
        { label: "Can't scale without hiring", value: "$50k–$200k+" },
        { label: "Total annual cost of chaos", value: "$200k–$1M+", strong: true },
      ],
    },
  },

  faq: {
    eyebrow: "04 — Questions you're probably asking",
    items: [
      {
        q: "How much of MY time will this take?",
        a: "Two to three hours during the audit. One sign-off in design. A handful of clarifying answers during the build. Two to three hours for training. That's it.",
      },
      {
        q: "What about ROI?",
        a: "The audit gives you a real cost-of-chaos number. If the build can't pay for itself within a year on your numbers, I'll say so on the call.",
      },
      {
        q: "Will my team actually use it?",
        a: "I train them. I design for the way they already work. I involve them early. Nothing big changes overnight — we add pieces in order.",
      },
      {
        q: "We're too unique for a system.",
        a: "Every business says this. These are custom builds, not templates — the system fits how you work today, not how some agency thinks you should work.",
      },
      {
        q: "I tried Zapier / Make before and it broke.",
        a: "Most DIY automations break because they were built in pieces by someone who isn't an engineer. I build them as systems with error handling, logging, and tests. They don't fall over.",
      },
    ],
  },

  cta: {
    eyebrow: "05 — Next step",
    title: "Tell me what's stuck.",
    intro:
      "Ninety-minute call. I'll either sketch a fix, or refer you to someone better suited.",
  },
};

export default automation;
