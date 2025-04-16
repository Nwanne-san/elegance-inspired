export interface PortfolioItem {
    id: string
    title: string
    client?: string
    industry?: string
    category?: string
    challenge?: string
    solution?: string
    outcome?: string
    image?: string
    images?: string[]
    tags?: string[]
    description?: string
    location?: string
    date?: string
  }
  
  export const portfolioData: PortfolioItem[] = [
    {
      id: "necci-pr-roundtable",
      title: "NECCI PR ROUNDTABLE 24th Edition",
      description:
        "Complete event branding package for NECCI PR ROUNDTABLE 24th Edition, including banners, shirts, badges, and promotional materials.",
      category: "event-branding",
      client: "NECCI CONSULTANTS",
      industry: "PR CONSULTING",
      location: "Eko Hotel Lagos, Nigeria",
      date: "2023",
      challenge:
        'Necci Consultants Limited needed an event branding to effectively represent the 24th edition themed "Women in Technology"',
      solution:
        "Elegance Inspired Limited created an appealing event design. Our contributions included visual representation of the event materials such as ; Flyers, Entrance designs, stage design, t-shirt, writing materials, and social media engagement for the event.",
      outcome: "Positive feedback on the seamless project execution.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Event Branding", "Banners", "Promotional Materials"],
    },
    {
      id: "alphabets-brand-identity",
      title: "Alphabets Brand Identity",
      description:
        "Comprehensive brand identity design for Alphabets, including logo, color palette, typography, and brand guidelines.",
      category: "brand-identity",
      client: "Alphabets",
      industry: "EDUCATION",
      date: "2022",
      challenge:
        "Alphabets needed a comprehensive brand identity that would appeal to both parents and children while conveying educational values.",
      solution:
        "We developed a complete brand identity system including a playful yet professional logo, a vibrant color palette, custom typography, and comprehensive brand guidelines for consistent application.",
      outcome:
        "The new brand identity has been successfully implemented across all touchpoints, resulting in increased brand recognition and positive feedback from stakeholders.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Brand Identity", "Logo Design", "Brand Guidelines"],
    },
    {
      id: "ayency-foods-packaging",
      title: "Ayency Foods Packaging Design",
      description:
        "Product packaging design for Ayency Foods & Beverages, creating an appealing and functional packaging solution.",
      category: "product-branding",
      client: "AYENCY FOODS & BEVERAGES",
      industry: "FOODS & BEVERAGES",
      date: "2023",
      challenge:
        "AYENCY FOODS & BEVERAGES needed a rebranding designs for their products to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited created a rebrand design for all products. Our contributions included visual representation of the brand's logo, colors & branding collaterals.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Product Branding", "Packaging Design"],
    },
    {
      id: "enived-air-social-media",
      title: "Enived Air Social Media Campaign",
      description:
        "Social media design and management for Enived Air Logistics, increasing brand awareness and engagement.",
      category: "social-media-designs",
      client: "ENIVED AIR & LOGISTICS LTD",
      industry: "AIR & LOGISTICS",
      date: "2023",
      challenge:
        "ENIVED AIR & LOGISTICS LTD. needed graphics designs for social media to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced highly engaging graphics designs that effectively represents their brand on social media. Our contributions included visual representation of the brand's logo and colors.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Social Media Design", "Digital Marketing"],
    },
    {
      id: "tech-company-office-signage",
      title: "Tech Company Office Signage",
      description: "Custom office signage design and installation for a leading tech company headquarters.",
      category: "office-signage",
      client: "Tech Innovations Inc.",
      industry: "TECHNOLOGY",
      date: "2022",
      challenge:
        "Tech Innovations Inc. needed cohesive office signage that reflected their innovative brand while providing clear navigation throughout their new headquarters.",
      solution:
        "We designed and implemented a comprehensive signage system using modern materials and digital elements that aligned with their brand identity while enhancing the office experience.",
      outcome:
        "The signage system has improved wayfinding efficiency by 40% and received praise from employees and visitors for its aesthetic appeal and functionality.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Office Signage", "Corporate Branding"],
    },
    {
      id: "holiday-corporate-gifts",
      title: "Holiday Corporate Gift Package",
      description: "Custom designed corporate gift packages for client appreciation during the holiday season.",
      category: "corporate-gifts",
      client: "Multiple Clients",
      industry: "VARIOUS",
      date: "2022",
      challenge:
        "Our clients needed memorable and branded holiday gift packages that would stand out from typical corporate gifts while maintaining their brand identity.",
      solution:
        "We designed custom gift boxes with premium items tailored to each client's brand and target audience, incorporating subtle branding elements that felt luxurious rather than promotional.",
      outcome:
        "The gift packages generated significant positive feedback, with several recipients sharing photos on social media and reaching out to express their appreciation.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Corporate Gifts", "Custom Design"],
    },
    {
      id: "retail-brand-billboard",
      title: "Retail Brand Billboard Campaign",
      description: "Strategic billboard placement and design for a retail brand's seasonal campaign.",
      category: "billboard-placement",
      client: "Fashion Retailer",
      industry: "RETAIL",
      date: "2023",
      challenge:
        "A leading fashion retailer needed to drive foot traffic to their stores during a major seasonal sale with high-impact outdoor advertising.",
      solution:
        "We developed eye-catching billboard designs and identified strategic high-traffic locations to maximize visibility among the target demographic, implementing a phased rollout to build anticipation.",
      outcome:
        "The campaign resulted in a 35% increase in store visits compared to the previous season's sale, with 28% of new customers citing the billboards as how they learned about the promotion.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Billboard", "Outdoor Advertising"],
    },
    {
      id: "restaurant-menu-printing",
      title: "Premium Restaurant Menu Printing",
      description: "High-quality menu design and printing for an upscale restaurant chain.",
      category: "printing",
      client: "Gourmet Dining Group",
      industry: "HOSPITALITY",
      date: "2023",
      challenge:
        "Gourmet Dining Group needed menus that reflected their upscale dining experience while being durable enough for daily use across multiple locations.",
      solution:
        "We designed elegant menus using premium materials with special finishes, incorporating the restaurant's visual identity while highlighting their signature dishes with custom photography.",
      outcome:
        "The new menus have enhanced the dining experience, with customer surveys showing a 22% increase in positive comments about the overall restaurant ambiance.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Printing", "Menu Design"],
    },
    {
      id: "ecommerce-website-development",
      title: "E-commerce Website Development",
      description: "Custom e-commerce website design and development with integrated payment solutions.",
      category: "web-app-development",
      client: "Online Retailer",
      industry: "E-COMMERCE",
      date: "2022",
      challenge:
        "An established brick-and-mortar retailer needed to expand their business online with a user-friendly e-commerce platform that reflected their in-store experience.",
      solution:
        "We developed a custom e-commerce website with intuitive navigation, seamless checkout process, and integrated inventory management, ensuring the digital experience matched their brand standards.",
      outcome:
        "The website launched successfully with a 98% completion rate for transactions and generated 45% more online revenue than projected in the first quarter.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Web Development", "E-commerce"],
    },
    {
      id: "social-media-ad-campaign",
      title: "Targeted Social Media Ad Campaign",
      description:
        "Strategic social media advertising campaign with targeted audience segmentation and performance tracking.",
      category: "social-media-ad",
      client: "Service Provider",
      industry: "PROFESSIONAL SERVICES",
      date: "2023",
      challenge:
        "A professional service provider needed to reach specific business decision-makers with a limited advertising budget.",
      solution:
        "We developed a highly targeted social media campaign using detailed audience segmentation, A/B testing of ad creative, and continuous optimization based on performance metrics.",
      outcome:
        "The campaign achieved a 320% return on ad spend, generating 47 qualified leads that converted to 12 new clients within the first two months.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Social Media Ads", "Digital Marketing"],
    },
    {
      id: "social-media-management-retail",
      title: "Retail Brand Social Media Management",
      description: "Ongoing social media management including content creation, scheduling, and community engagement.",
      category: "social-media-management",
      client: "Retail Brand",
      industry: "RETAIL",
      date: "2023",
      challenge:
        "A retail brand with multiple product lines needed consistent social media presence across platforms to increase engagement and drive online sales.",
      solution:
        "We implemented a comprehensive social media strategy with platform-specific content calendars, engaging visuals, and community management protocols to build relationships with followers.",
      outcome:
        "Over six months, the brand saw a 78% increase in engagement, 45% growth in followers, and a 32% increase in website traffic from social media channels.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Social Media Management", "Content Creation"],
    },
    {
      id: "mobile-app-development",
      title: "Customer Loyalty Mobile App",
      description: "Custom mobile application development for a customer loyalty program with rewards tracking.",
      category: "web-app-development",
      client: "Retail Chain",
      industry: "RETAIL",
      date: "2022",
      challenge:
        "A retail chain wanted to modernize their paper-based loyalty program with a mobile app that would increase customer retention and provide valuable data.",
      solution:
        "We developed a user-friendly mobile app with point tracking, personalized rewards, and exclusive offers, integrating it with their existing POS system for seamless operation.",
      outcome:
        "Within three months of launch, the app achieved a 65% adoption rate among existing customers and increased repeat purchase frequency by 28%.",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["App Development", "Customer Loyalty"],
    },
  ]
  
  export const portfolioItems: PortfolioItem[] = [
    {
      id: "enived-air-logistics",
      title: "Social Media Graphics",
      client: "ENIVED AIR & LOGISTICS LTD",
      industry: "AIR & LOGISTICS",
      category: "branding",
      challenge:
        "ENIVED AIR & LOGISTICS LTD. needed graphics designs for social media to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced highly engaging graphics designs that effectively represents their brand on social media. Our contributions included visual representation of the brand's logo and colors.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Social Media", "Graphic Design", "Branding"],
    },
    {
      id: "ayency-foods-beverages",
      title: "Product Rebranding",
      client: "AYENCY FOODS & BEVERAGES",
      industry: "FOODS & BEVERAGES",
      category: "branding",
      challenge:
        "AYENCY FOODS & BEVERAGES needed a rebranding designs for their products to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited created a rebrand design for all products. Our contributions included visual representation of the brand's logo, colors & branding collaterals.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Product Branding", "Packaging Design", "Rebranding"],
    },
    {
      id: "bolt-fleet",
      title: "Brand Collaterals",
      client: "BOLT FLEET",
      industry: "LOGISTICS",
      category: "branding",
      challenge: "Bolt Fleet needed some brand collaterials to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced high quality T-shirts and Umbrellas to effectively represent their brand. Our contributions included visual representation of the brand's logo, branding collaterals.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Brand Collaterals", "Merchandise", "Corporate Branding"],
    },
    {
      id: "necci-consultants",
      title: "Event Branding",
      client: "NECCI CONSULTANTS LIMITED",
      industry: "PR CONSULTING",
      category: "events",
      challenge:
        'Necci Consultants Limited needed an event branding to effectively represent the 24th edition themed "Women in Technology"',
      solution:
        "Elegance Inspired Limited created an appealing event design. Our contributions included visual representation of the event materials such as ; Flyers, Entrance designs, stage design, t-shirt, writing materials, and social media engagement for the event.",
      outcome: "Positive feedback on the seamless project execution.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Event Branding", "PR", "Women in Tech"],
    },
    {
      id: "nnpc",
      title: "Corporate Gifts",
      client: "NNPC",
      industry: "OIL & GAS",
      category: "corporate-gifts",
      challenge:
        "CSS DIVISION OF NNPC needed some corporate branded gifts collaterals for a retreat to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced high quality Gift boxes that effectively represented their brand. Our contributions included visual representation of the brand's logo and colors.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Corporate Gifts", "Oil & Gas", "Retreat"],
    },
    {
      id: "access-bank",
      title: "Corporate Gifts",
      client: "ACCESS BANK",
      industry: "BANKING & FINANCE",
      category: "corporate-gifts",
      challenge:
        "ACCESS BANK needed some corporate branded gifts collaterials to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced high quality Gift boxes to effectively represent their brand. Our contributions included visual representation of the brand's logo and colors.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Corporate Gifts", "Banking", "Brand Representation"],
    },
    {
      id: "pumpkin-properties",
      title: "Corporate Gifts",
      client: "PUMPKIN PROPERTIES",
      industry: "REAL ESTATE",
      category: "corporate-gifts",
      challenge:
        "PUMPKIN PROPERTIES needed some corporate branded gifts collateralsA to effectively represent their brand's objectives.",
      solution:
        "Elegance Inspired Limited produced high quality Gift boxes to effectively represent their brand. Our contributions included visual representation of the brand's logo and colors.",
      outcome: "Positive feedback on the seamless integration and interest generated.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Corporate Gifts", "Real Estate", "Brand Representation"],
    },
    {
      id: "shoprite",
      title: "Store Promotion",
      client: "SHOPRITE",
      industry: "RETAIL",
      category: "advertising",
      challenge: "SHOPRITE needed to increase foot traffic and customer engagement during their anniversary sale.",
      solution:
        "Elegance Inspired Limited designed and executed a comprehensive in-store and digital promotional campaign highlighting exclusive offers and limited-time deals.",
      outcome: "30% increase in store traffic during the promotion period and significant boost in sales conversion.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Retail", "Promotion", "In-store Marketing"],
    },
    {
      id: "first-bank",
      title: "Digital Campaign",
      client: "FIRST BANK",
      industry: "BANKING & FINANCE",
      category: "digital",
      challenge: "FIRST BANK wanted to promote their new mobile banking features to younger customers.",
      solution:
        "Elegance Inspired Limited created an engaging digital campaign across social media platforms with interactive content demonstrating the ease and benefits of the new features.",
      outcome: "45% increase in app downloads among the target demographic and positive user engagement metrics.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Digital Campaign", "Banking", "Mobile App"],
    },
    {
      id: "dangote-group",
      title: "Annual Report",
      client: "DANGOTE GROUP",
      industry: "MANUFACTURING",
      category: "print",
      challenge:
        "DANGOTE GROUP required a visually compelling annual report that effectively communicated their achievements and vision.",
      solution:
        "Elegance Inspired Limited designed and printed a premium annual report with infographics, custom photography, and elegant layouts that aligned with their corporate identity.",
      outcome:
        "The report received acclaim from stakeholders and effectively communicated the company's financial performance and strategic initiatives.",
      image: "/placeholder.svg?height=600&width=800",
      images: [
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
        "/placeholder.svg?height=600&width=800",
      ],
      tags: ["Annual Report", "Print Design", "Corporate Communication"],
    },
  ]
  
  // Combine both arrays to have all portfolio items in one place
  const allPortfolioItems = [...portfolioData, ...portfolioItems]
  
  export function getPortfolioItem(id: string): PortfolioItem | undefined {
    return allPortfolioItems.find((item) => item.id === id)
  }
  
  export function getPortfolioItemsByCategory(category: string): PortfolioItem[] {
    return allPortfolioItems.filter((item) => item.category === category)
  }
  
  export function getAllPortfolioCategories(): string[] {
    const categories = new Set(allPortfolioItems.map((item) => item.category).filter(Boolean) as string[])
    return Array.from(categories)
  }
  
  export function getRelatedPortfolioItems(id: string, limit = 3): PortfolioItem[] {
    const currentItem = getPortfolioItem(id)
    if (!currentItem || !currentItem.category) return []
  
    return allPortfolioItems.filter((item) => item.id !== id && item.category === currentItem.category).slice(0, limit)
  }
  