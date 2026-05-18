// Seed case studies. Composite or public-proof entries are labelled honestly.
// Replace with real engagements as they close.

const caseStudies = [
  {
    slug: "behavioral-health-invoicing",
    title: "90% less time on invoices, 235% ROI.",
    client: "Behavioral health provider",
    industry: "Healthcare",
    primaryMetric: { value: "90%", label: "Less time on invoicing" },
    secondaryMetric: { value: "235%", label: "ROI in year one" },
    problem:
      "Staff spent hours every week stitching together insurance claims and patient invoices by hand. Errors cost the practice real money and pulled clinicians away from clinical work.",
    solution:
      "Automated invoicing workflow that pulls visit data, generates invoices, routes them through approval, and posts them to the patient billing system. Built-in checks catch the kinds of errors that used to slip through.",
    outcomes: [
      { metric: "Invoice processing time", value: "−90%" },
      { metric: "First-year ROI", value: "235%" },
      { metric: "Clinician hours reclaimed / week", value: "12+" },
    ],
    artifacts: ["Workflow blueprint", "Live billing dashboard", "Process maps"],
    pullQuote:
      "We stopped staying late just to send invoices. The system pays for itself in the time it gives back.",
    pullQuoteAttribution: "— Operations lead, behavioral health practice",
    heroImageLabel: "case study hero",
    compositeLabel: "Public proof point",
    hasDetailPage: true,
  },

  {
    slug: "mercedes-ai-scheduling",
    title: "Show rates 55% → 92% in three weeks.",
    client: "Mercedes-Benz dealership",
    industry: "Auto retail",
    primaryMetric: { value: "92%", label: "Show rate (up from 55%)" },
    secondaryMetric: { value: "390", label: "Appointments booked in 3 weeks" },
    problem:
      "Service appointments were being missed at high rates. Leads coming in after hours sat unread until the next morning, by which point the buyer had already booked with someone else.",
    solution:
      "AI-driven scheduling assistant that responds within minutes, books service slots against live calendar capacity, and sends reminder sequences before each appointment.",
    outcomes: [
      { metric: "Show rate", value: "55% → 92%" },
      { metric: "Appointments booked", value: "390 in 3 weeks" },
      { metric: "Bookings outside business hours", value: "5% of total" },
    ],
    artifacts: ["AI assistant build", "Reminder sequences", "Booking dashboard"],
    pullQuote:
      "The bookings that used to disappear at 9pm Friday are now on the calendar by 9:05.",
    pullQuoteAttribution: "— Service manager, dealership",
    heroImageLabel: "case study hero",
    compositeLabel: "Public proof point",
    hasDetailPage: true,
  },

  {
    slug: "insurance-portal-automation",
    title: "95% less manual portal work.",
    client: "Insurance agency",
    industry: "Insurance",
    primaryMetric: { value: "−95%", label: "Manual portal submissions" },
    problem:
      "Account managers spent hours per day on insurance carrier portals, retyping the same data into different forms. Burnout was real and turnover was high.",
    solution:
      "An AI agent that handles carrier portal submissions end-to-end — reads incoming requests, fills the right forms, and flags only the cases that need human eyes.",
    outcomes: [
      { metric: "Manual portal work", value: "−95%" },
      { metric: "Account manager capacity", value: "+2 books each" },
    ],
    artifacts: ["AI agent build", "Exception queue", "Audit log"],
    pullQuote:
      "We got our sanity back. The team is doing the work they were actually hired for.",
    pullQuoteAttribution: "— Agency principal",
    heroImageLabel: null,
    compositeLabel: "Public proof point",
    hasDetailPage: false,
  },
];

export default caseStudies;
