export type BlogBlock =
  | { type: "p"; text: string }
  | { type: "h3"; text: string }
  | { type: "quote"; text: string; caption?: string }
  | { type: "list"; items: string[] }

export interface BlogPost {
  slug: string
  category: string
  title: string
  excerpt: string
  date: string
  readTime: string
  imageAlt: string
  body: BlogBlock[]
}

export const categories = [
  "All",
  "Buyer's Guide",
  "Pricing",
  "Modernization",
  "Maintenance",
  "Planning",
  "Service",
  "Partnership",
  "Technology",
]

export const blogPosts: BlogPost[] = [
  {
    slug: "cheapest-elevator-costs-most",
    category: "Buyer's Guide",
    title: "The Cheapest Elevator Will Cost You the Most. Here's Why.",
    excerpt:
      "Three proposals, nearly identical on paper. Here's what the price tag never tells you.",
    date: "Jun 2026",
    readTime: "4 min read",
    imageAlt: "elevator cabin interior · brushed steel + glass",
    body: [
      {
        type: "p",
        text: "You've spent months on the plans. You've negotiated every line item. And now you're staring at three elevator proposals, wondering: are they really that different?",
      },
      {
        type: "p",
        text: "On paper, they look almost identical. Same capacity. Similar speed. Comparable specs. So you do what any rational person would do — you go with the lowest price.",
      },
      {
        type: "p",
        text: "It feels like a smart decision. Until the elevator breaks down at 11 PM on a Friday night.",
      },
      {
        type: "p",
        text: "That's the moment when you discover what you actually bought. Not a passenger elevator or a commercial elevator — you bought a relationship. And some relationships don't show up when you need them most.",
      },
      { type: "h3", text: "An elevator isn't furniture" },
      {
        type: "p",
        text: "A sofa sits in a corner. An elevator moves hundreds of people, every single day, for the next 20 to 30 years. It is one of the most used mechanical systems in any building — and one of the most overlooked at the purchasing stage.",
      },
      {
        type: "p",
        text: "The real cost of an elevator is never just the purchase price:",
      },
      {
        type: "list",
        items: [
          "The installation",
          "The ongoing elevator maintenance",
          "The emergency elevator repair call at midnight",
          "The spare parts that either arrive in 24 hours — or in six weeks",
        ],
      },
      {
        type: "p",
        text: "The price tag tells you almost nothing about any of that.",
      },
      { type: "h3", text: "What a real elevator partner looks like" },
      {
        type: "p",
        text: "At ZENA Elevators, we don't believe our job ends when the elevator is installed. Honestly, that's when it begins.",
      },
      {
        type: "p",
        text: "Before we recommend a single model, we study your building. We look at the shaft, the drawings, the expected passenger traffic. We ask questions that might seem excessive — until you realize they're the reason your elevator runs perfectly on year 15, not just year one.",
      },
      {
        type: "p",
        text: "We also give our clients access to something most local suppliers can't offer: world-class technology from SJEC, one of the world's leading elevator manufacturers, with installations in over 100 countries and projects ranging from Olympic venues to World Expo sites. European-certified quality, backed by a local team that actually picks up the phone.",
      },
      {
        type: "quote",
        text: "Are you buying a product — or are you choosing a partner?",
        caption: "The question worth asking before you sign anything",
      },
      {
        type: "p",
        text: "Because in 10 years, nobody will remember the price difference. But they'll remember every time the elevator worked. And every time it didn't.",
      },
      {
        type: "p",
        text: "At ZENA, we're in this for the long run. Just like your building.",
      },
    ],
  },
  {
    slug: "seven-mistakes-georgian-developers",
    category: "Buyer's Guide",
    title: "7 Elevator Mistakes That Cost Georgian Developers Thousands",
    excerpt:
      "After 15+ years installing across Georgia, we've watched the same seven mistakes repeat.",
    date: "Jun 2026",
    readTime: "5 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "After 15+ years installing and servicing elevators across Georgia, we keep seeing the same seven mistakes — made by experienced developers, not first-timers. Most of them are decided in a single meeting, long before the shaft is even poured.",
      },
      {
        type: "p",
        text: "This article walks through what they are, why they're so easy to make, and how a scope conversation early in planning avoids most of them entirely.",
      },
    ],
  },
  {
    slug: "elevator-installation-cost-georgia",
    category: "Pricing",
    title:
      "How Much Does Elevator Installation Cost in Georgia? The Honest Answer.",
    excerpt:
      "Anyone who quotes a price before seeing your building is guessing. Here's what actually drives cost.",
    date: "May 2026",
    readTime: "4 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "Anyone who quotes a firm price before seeing your building, drawings and traffic profile is guessing. Cost is driven by rise, capacity, finish level, shaft condition and lead time — not a single headline number.",
      },
      {
        type: "p",
        text: "This piece breaks down each of those cost drivers so you can read a proposal properly and compare quotes on the same basis.",
      },
    ],
  },
  {
    slug: "new-elevator-or-modernization",
    category: "Modernization",
    title:
      "New Elevator or Modernization? The Question That Could Save You Tens of Thousands.",
    excerpt:
      "The ride is rougher, the bills are climbing. Replace or modernize — the answer is rarely obvious.",
    date: "May 2026",
    readTime: "3 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "The ride is rougher, the energy bills are climbing, and parts are getting harder to find. Replace the whole unit, or modernize the drive and controller? The right call depends on the shaft, the code requirements and how many years of service you still need from the building.",
      },
      {
        type: "p",
        text: "We walk through the decision framework we use with owners before recommending either path.",
      },
    ],
  },
  {
    slug: "five-signs-elevator-wrong",
    category: "Maintenance",
    title: "5 Signs Your Elevator Is Telling You Something's Wrong",
    excerpt:
      "Elevators rarely fail without warning. Here are five signals worth an immediate inspection.",
    date: "Apr 2026",
    readTime: "3 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "Elevators rarely fail without warning — they tend to signal a problem long before they stop moving. Unusual noise, levelling drift, longer door-close times, brake chatter and unexplained callbacks are the five signs worth an immediate inspection.",
      },
      {
        type: "p",
        text: "Catching these early is almost always cheaper than an emergency callout, and far cheaper than a full replacement.",
      },
    ],
  },
  {
    slug: "plan-elevator-before-walls-go-up",
    category: "Planning",
    title:
      "By the Time the Walls Go Up, It's Already Too Late to Plan Your Elevator Properly",
    excerpt:
      "The buildings with the best outcomes all share one thing: they brought us in before the walls went up.",
    date: "Apr 2026",
    readTime: "4 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "The buildings with the best outcomes all share one thing in common: the elevator contractor was brought in before the shaft dimensions were finalized, not after.",
      },
      {
        type: "p",
        text: "Pit depth, headroom, shaft tolerance and machine room access are all far cheaper to get right on paper than to correct once concrete is poured.",
      },
    ],
  },
  {
    slug: "elevator-stopped-who-do-you-call",
    category: "Service",
    title: "It's 11 PM. Your Elevator Just Stopped. Who Are You Going to Call?",
    excerpt:
      "Two elevators can look identical on spec. The difference shows up the night one of them breaks down.",
    date: "Mar 2026",
    readTime: "3 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "Two elevators can look identical on spec sheets. The difference only shows up the night one of them breaks down — whether the technician who answers actually knows the installation, and whether the part they need is on the van or six weeks out.",
      },
      {
        type: "p",
        text: "That's what a guaranteed local emergency response is actually protecting: not the machine, but the building's uptime.",
      },
    ],
  },
  {
    slug: "world-class-technology-local-team",
    category: "Partnership",
    title: "World-Class Elevator Technology. A Team That Knows Georgia.",
    excerpt:
      "Georgian developers have quietly accepted a trade-off for years — international quality or local response. Not anymore.",
    date: "Mar 2026",
    readTime: "3 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "For years, Georgian developers quietly accepted a trade-off: international engineering quality, or a local team that actually answers the phone — rarely both.",
      },
      {
        type: "p",
        text: "As SJEC's authorized partner in Georgia, ZENA was built specifically to close that gap — certified global technology, delivered and serviced entirely by a local team.",
      },
    ],
  },
  {
    slug: "z-care-predictive-intelligence",
    category: "Technology",
    title: "Z-Care: Predictive Intelligence, Proactive Care",
    excerpt:
      "Our AI-powered remote monitoring platform predicts elevator issues before they become breakdowns.",
    date: "Feb 2026",
    readTime: "5 min read",
    imageAlt: "editorial photo",
    body: [
      {
        type: "p",
        text: "Z-Care is our remote monitoring platform: sensors on the equipment feed usage and performance data back to our engineers around the clock, flagging drift in ride quality or component wear before it becomes a breakdown.",
      },
      {
        type: "p",
        text: "The result is fewer surprise callouts, more predictable maintenance budgets, and a fleet that tells you what it needs before it stops working.",
      },
    ],
  },
]
