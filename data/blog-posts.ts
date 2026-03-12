export interface BlogPost {
  title: string;
  excerpt: string;
  body?: string;
  image: string;
  date: string;
  author: string;
  category: string;
  slug: string;
}

const psychologyOfColourBody = `Colour is one of the most powerful tools in branding. Before a person reads a word, studies a logo, or understands a company's message, they respond to colour. It shapes first impressions, influences emotions, and helps people recognise and remember brands. For this reason, global brands treat colour choice as a strategic decision rather than a simple design preference.

The psychology of colour in branding refers to how different colours influence human perception and behaviour. Research in marketing and behavioural science shows that colours can trigger emotional responses and associations. These responses often happen quickly and subconsciously. A carefully chosen colour can communicate trust, energy, luxury, or reliability even before a brand explains what it offers.

Different colours tend to carry different psychological signals. Blue, for example, is widely associated with trust, stability, and professionalism. This is one reason many financial institutions and technology companies rely on blue in their branding. Red often communicates energy, urgency, and passion, which is why it is commonly used in industries that want to stimulate action or excitement. Green is frequently linked with growth, health, and sustainability, making it popular among brands in wellness, agriculture, and environmental sectors.

However, effective branding goes beyond simply choosing a colour with a positive meaning. Context matters. Culture, industry norms, and audience expectations all influence how colour is interpreted. A colour that signals prestige in one market may represent something entirely different in another. Global brands, therefore, test and evaluate colour decisions carefully to ensure that they align with the audience they intend to reach.

Consistency is another important principle. Once a brand establishes its colour identity, it should use it consistently across all touchpoints. This includes websites, packaging, advertising, and social media. Consistent colour use strengthens brand recognition and builds familiarity over time. Many of the world's most recognisable companies are instantly identified by their colour palettes even without seeing their logos.

The psychology of colour also plays a role in guiding customer behaviour. In digital environments, colours can influence where people look, what they click, and how they feel while interacting with a brand. Strategic colour use in buttons, calls to action, and product displays can improve engagement and support clearer decision-making for customers.

Ultimately, colour is not simply an aesthetic choice. It is a strategic asset that communicates meaning, builds emotional connections, and strengthens brand identity. When used thoughtfully and consistently, colour helps brands stand out in crowded markets and remain memorable in the minds of consumers.

For organisations building or refining their brand identity, understanding the psychology of colour is essential. It ensures that visual choices support the brand's values, communicate the right message, and resonate with the audience the brand seeks to serve.`;

export const blogPosts: BlogPost[] = [
  {
    title: "10 Essential Branding Tips for Startups",
    excerpt:
      "Learn the key branding strategies that can help your startup stand out in a competitive market.",
    image: "/placeholder.svg?height=300&width=500",
    date: "April 5, 2023",
    author: "Temitope Ruth Jacob",
    category: "Branding",
    slug: "branding-tips-for-startups",
    body: "Content coming soon.",
  },
  {
    title: "The Psychology of Colour in Branding",
    excerpt:
      "Discover how different colours can influence customer perception and behaviour towards your brand.",
    image: "/placeholder.svg?height=300&width=500",
    date: "March 18, 2023",
    author: "Cornelius Emmanuel",
    category: "Design",
    slug: "psychology-of-color-in-branding",
    body: psychologyOfColourBody,
  },
  {
    title: "Digital Marketing Trends to Watch in 2023",
    excerpt:
      "Stay ahead of the curve with these emerging digital marketing trends that are shaping the industry.",
    image: "/placeholder.svg?height=300&width=500",
    date: "February 22, 2023",
    author: "Rebecca Jumoke Kinrin",
    category: "Marketing",
    slug: "digital-marketing-trends",
    body: "Content coming soon.",
  },
  {
    title: "How to Create a Memorable Brand Experience",
    excerpt:
      "Explore strategies to create meaningful brand experiences that resonate with your audience.",
    image: "/placeholder.svg?height=300&width=500",
    date: "January 15, 2023",
    author: "Joseph Audu Olufu",
    category: "Branding",
    slug: "create-memorable-brand-experience",
    body: "Content coming soon.",
  },
  {
    title: "Effective Advertising Strategies for Small Businesses",
    excerpt:
      "Learn cost-effective advertising techniques that can help small businesses maximize their reach.",
    image: "/placeholder.svg?height=300&width=500",
    date: "December 10, 2022",
    author: "Stephanie Momoh",
    category: "Advertising",
    slug: "advertising-strategies-small-businesses",
    body: "Content coming soon.",
  },
  {
    title: "Case Study: Brand Transformation for Tech Company",
    excerpt:
      "See how we helped a technology company revitalize their brand and increase market share.",
    image: "/placeholder.svg?height=300&width=500",
    date: "November 5, 2022",
    author: "Temitope Ruth Jacob",
    category: "Case Studies",
    slug: "case-study-tech-company-brand-transformation",
    body: "Content coming soon.",
  },
];

export function getBlogPostBySlug(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug);
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug);
}
