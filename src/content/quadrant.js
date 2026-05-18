const quadrant = {
  framing: {
    eyebrow: "Find your box",
    title: "Where are you, really?",
    intro:
      "Two questions. Honest answers. Tells you whether you're who I built this practice for — or whether you'd be better off starting somewhere else.",
  },

  axes: {
    success: {
      label: "How is the business doing financially right now?",
      scaleLow: "Struggling",
      scaleHigh: "Thriving",
    },
    sanity: {
      label: "How much of your week is firefighting?",
      scaleLow: "Calm and structured",
      scaleHigh: "Constant chaos",
    },
  },

  submitLabel: "See my box",
  retakeLabel: "Start over",

  // Box-assignment thresholds — see src/lib/assignBox.js
  boxes: {
    box1: {
      name: "Box 1 — early days",
      summary: "Low success, low sanity.",
      paragraph:
        "You're earlier than the practice I usually work with. Building the right system before there's much to systemise is putting the roof on before the walls. Start with the surfaces first — a clean site, a basic store, something that moves money in faster — and come back when there's more to automate.",
      cta: { label: "Start with a website or store", to: "/websites" },
    },
    box2: {
      name: "Box 2 — successful and overwhelmed",
      summary: "High success, low sanity.",
      paragraph:
        "This is who I built the practice for. You're profitable enough to be everywhere, and overwhelmed enough that you can feel it costing you. The fix isn't another tool. It's a system that takes the day-to-day out of your hands.",
      cta: { label: "Book a discovery call", to: "#discovery" },
    },
    box3: {
      name: "Box 3 — already there",
      summary: "High success, high sanity.",
      paragraph:
        "You're already where I'm trying to send other people. I'd love to know what you built. If you ever want to swap notes — or there's a piece you still want help on — drop me a line.",
      cta: { label: "Email me to swap notes", href: "mailto:osotaayomikun@gmail.com" },
    },
    box4: {
      name: "Box 4 — quiet and small",
      summary: "Low success, high sanity.",
      paragraph:
        "You don't seem to need what I build right now. That's a fine place to be. If you ever want to grow into a bigger problem, you know where to find me. Until then, here's something to read.",
      cta: { label: "Read the blog instead", href: "https://ayoosota.hashnode.dev/", external: true },
    },
  },
};

export default quadrant;
