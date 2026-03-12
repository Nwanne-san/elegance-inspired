export interface MilestoneSection {
  year: string;
  items: string[];
}

export interface EventItem {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  location: string;
  image: string;
  /** Multiple images for the detail page carousel (swipe/gallery) */
  images: string[];
  paragraphs: { type: "h3" | "p"; text: string }[];
  closing?: string;
  /** Only for the Milestone Reflection event */
  milestoneTitle?: string;
  milestoneSubtitle?: string;
  milestoneSections: MilestoneSection[];
}

const milestoneSections: MilestoneSection[] = [
  {
    year: "Year 1: The Foundation (2021)",
    items: [
      "The Vision: Elegance Inspired Limited is officially incorporated.",
      "The First Impression: We launched our own brand identity—setting the standard for what \"Sophisticated Corporate Branding\" truly means.",
      "Milestone: Secured our first foundational client, proving that the market was ready for a more refined approach to business aesthetics.",
    ],
  },
  {
    year: "Year 2: The Momentum (2022)",
    items: [
      "Portfolio Growth: Expanded our reach into three new industries—Automobile, Real Estate and Tech.",
      "Creative Expansion: Moved beyond logos to offer full-scale brand strategy and corporate storytelling.",
      "Milestone: 100% client retention rate, signaling that our \"Elegance\" was delivering real-world results.",
    ],
  },
  {
    year: "Year 3: The Refinement (2023)",
    items: [
      "Deepening Expertise: Integrated high-level brand psychology into our design process.",
      "Team Growth: Brought on specialized strategists to ensure every visual we create is backed by market data.",
      "Milestone: Recognized as a rising leader in the corporate branding space, attracting larger-scale national projects.",
    ],
  },
  {
    year: "Year 4: The Impact (2024)",
    items: [
      "Digital Transformation: Launched a \"Digital First\" branding suite to help legacy corporations transition into the modern age.",
      "Strategic Partnerships: Collaborated with key industry players to offer 360-degree brand management.",
      "Milestone: Successfully rebranded a major corporate entity, resulting in a significant increase in their market perception.",
    ],
  },
  {
    year: "Year 5: The Legacy (2025 – 2026)",
    items: [
      "Five Years of Excellence: Celebrating half a decade of transforming the corporate landscape.",
      "The Future Vision: Launching our Premium Consulting Package.",
      "Milestone: Celebrating 5 years of making the corporate world more elegant and inspired.",
    ],
  },
];

export const eventsData: EventItem[] = [
  {
    id: "five-years-anniversary",
    slug: "celebrating-five-years-elevating-brands-inspiring-growth",
    title: "Celebrating Five Years of Elevating Brands & Inspiring Growth",
    excerpt:
      "Five years ago, Elegance Inspired Limited was founded on a simple yet profound conviction: that a corporate identity should be more than just a visual marker—it should be a testament to a company's values.",
    date: "February 7, 2026",
    location: "Abuja, Nigeria",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    paragraphs: [
      {
        type: "p",
        text: "Five years ago, Elegance Inspired Limited was founded on a simple yet profound conviction: that a corporate identity should be more than just a visual marker—it should be a testament to a company's values, a beacon of its professionalism, and a reflection of its highest aspirations.",
      },
      {
        type: "p",
        text: "Today, as we celebrate our fifth anniversary, we look back on a journey defined by creative courage and strategic precision. What began as a boutique vision has matured into a trusted partner for leaders who refuse to settle for the mundane. Over the past 1,825 days, we have navigated a shifting global landscape, proving time and again that true elegance is timeless and that thoughtful design is a powerful driver of business value.",
      },
      { type: "h3", text: "Reflecting on the Journey" },
      {
        type: "p",
        text: "In our first five years, we have had the honor of working across diverse sectors—transforming emerging startups into household names and refreshing established corporations to meet the demands of a new era. We have survived market shifts and embraced technological leaps, all while maintaining the \"Elegance\" that is our namesake. Our work has never been about following trends; it has been about setting standards.",
      },
      { type: "h3", text: "Our Deepest Gratitude" },
      {
        type: "p",
        text: "This milestone does not belong to us alone. It belongs to our clients—the visionaries who trusted us with their most valuable asset: their reputation. It belongs to our dedicated team of strategists and designers, whose pursuit of perfection is visible in every line, color, and concept we produce. Your belief in the \"Elegance Inspired\" philosophy has been the fuel for our growth.",
      },
      { type: "h3", text: "Looking Toward the Next Half-Decade" },
      {
        type: "p",
        text: "While five years marks a significant chapter, it is only the beginning of the Elegance Inspired Limited story. As we move forward, we are expanding our capabilities to include deeper digital integration and sustainable branding strategies. Our mission for the next five years is clear: to continue bridging the gap between high-level strategy and high-end aesthetics.",
      },
      {
        type: "p",
        text: "We invite you to celebrate this milestone with us. Not just as a look back at what we have achieved, but as a commitment to the excellence we will continue to deliver—exceptional results.",
      },
    ],
    closing:
      "With gratitude and vision,\nThe Leadership Team\nElegance Inspired Limited",
    milestoneSections: [],
  },
  {
    id: "milestone-reflection",
    slug: "milestone-reflection-five-years-elevating-brands-inspiring-growth",
    title: "A Milestone Reflection from Elegance Inspired Limited",
    excerpt:
      "5 Years of Elevating Brands & Inspiring Growth. Year-by-year highlights from our foundation in 2021 through to our legacy in 2025–2026.",
    date: "2026",
    location: "Abuja, Nigeria",
    image: "/placeholder.svg?height=400&width=600",
    images: [
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
      "/placeholder.svg?height=600&width=800",
    ],
    paragraphs: [],
    milestoneTitle: "A Milestone Reflection from Elegance Inspired Limited",
    milestoneSubtitle: "5 Years of Elevating Brands & Inspiring Growth",
    milestoneSections,
  },
];

export function getEventBySlug(slug: string): EventItem | undefined {
  return eventsData.find((e) => e.slug === slug);
}

export function getAllEventSlugs(): string[] {
  return eventsData.map((e) => e.slug);
}
