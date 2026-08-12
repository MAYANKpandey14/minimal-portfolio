// Centralized content management
export const siteContent = {
  personal: {
    name: "Mayank Pandey",
    title: "Freelance Web Designer & Developer",
    tagline: "I build high-converting websites and web apps that help businesses establish their digital presence and scale online revenue.",
    email: "mayankpandeyofficial404@gmail.com",
    phone: "+91 7505728099",
    location: "India",
    availability: "Available for Projects"
  },
  
  navigation: [
    { href: "#about", label: "About", ariaLabel: "Learn about my approach" },
    { href: "#services", label: "Services", ariaLabel: "View web design and development services" },
    { href: "#projects", label: "Projects", ariaLabel: "Browse client websites & case studies" },
    { href: "#hire-me", label: "Why Me", ariaLabel: "Why hire me for your website" },
    { href: "#contact", label: "Contact", ariaLabel: "Get a custom project estimate" }
  ],

  services: [
    {
      title: "Custom Web Design & Branding",
      description: "Bespoke visual design that captures your brand's identity, engages visitors, and establishes digital authority.",
      icon: "Figma"
    },
    {
      title: "Full-Stack Web Development",
      description: "Lightning-fast, scalable React & Node web applications engineered for sub-second load times and seamless UX.",
      icon: "Code"
    },
    {
      title: "SEO & Search Visibility",
      description: "Optimized technical structure and search engine strategy to drive organic traffic and qualified customer leads.",
      icon: "Globe"
    },
    {
      title: "Conversion Rate Optimization",
      description: "Frictionless user flows, clear CTAs, and engineered layouts designed to maximize leads, calls, and sales.",
      icon: "Layout"
    }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/mayankpandey-21a5bb195/",
    github: "https://github.com/MAYANKpandey14",
    email: "mayankpandeyofficial404@gmail.com"
  },

  seo: {
    title: "Mayank Pandey | Freelance Web Designer & Developer",
    description: "Freelance Web Designer & Developer building high-converting websites and scalable React web applications engineered for speed, trust, and business revenue.",
    keywords: ["Freelance Web Designer", "Web Developer", "High-Converting Websites", "React Developer", "UI/UX Design", "Custom Web Development", "Web Design India", "TypeScript Developer", "Next.js Developer"],
    author: "Mayank Pandey",
    siteUrl: "https://mayankpandey.dev",
    ogImage: "/og-image.png"
  },

  proposalSeo: {
    title: "Shopify Store Development Proposal | Mayank Pandey",
    description: "Detailed Shopify store development proposal: scope, timeline, deliverables, and pricing for a conversion-focused e-commerce build.",
    canonical: "https://mayankpandey.dev/proposal",
    ogImage: "/og-image.png"
  },

  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mayankpandey.dev/#person",
        "name": "Mayank Pandey",
        "jobTitle": "Freelance Web Designer & Developer",
        "description": "Freelance web designer & developer helping businesses establish digitally and scale online revenue.",
        "email": "mayankpandeyofficial404@gmail.com",
        "telephone": "+91-7505728099",
        "url": "https://mayankpandey.dev",
        "image": "https://mayankpandey.dev/og-image.png",
        "sameAs": [
          "https://www.linkedin.com/in/mayankpandey-21a5bb195/",
          "https://github.com/MAYANKpandey14"
        ],
        "knowsAbout": [
          "Web Design",
          "UI/UX Design",
          "Conversion Optimization",
          "React",
          "TypeScript",
          "Node.js",
          "Full Stack Development",
          "Search Engine Optimization"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mayankpandey.dev/#website",
        "url": "https://mayankpandey.dev",
        "name": "Mayank Pandey | Freelance Web Designer & Developer",
        "publisher": { "@id": "https://mayankpandey.dev/#person" }
      }
    ]
  },

  proposalStructuredData: {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Shopify Store Development",
    "serviceType": "E-commerce Website Development",
    "description": "End-to-end Shopify store development including setup, design, product catalog, WhatsApp integration, SEO, and launch.",
    "provider": {
      "@type": "Person",
      "name": "Mayank Pandey",
      "url": "https://mayankpandey.dev"
    },
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "price": "40000",
      "priceCurrency": "INR",
      "url": "https://mayankpandey.dev/proposal"
    }
  }
};

export const technologies = [
  { name: "JavaScript", Icon: "Code", category: "Frontend" },
  { name: "UI/UX", Icon: "Figma", category: "Design" },
  { name: "SQL", Icon: "Database", category: "Backend" },
  { name: "React", Icon: "Globe", category: "Frontend" },
  { name: "Node.js", Icon: "Server", category: "Backend" },
  { name: "CSS", Icon: "Layout", category: "Frontend" },
  { name: "Responsive", Icon: "Monitor", category: "Frontend" },
  { name: "Next.js", Icon: "Laptop", category: "Frontend" },
  { name: "Git", Icon: "Github", category: "Tools" },
  { name: "JSON", Icon: "FileJson", category: "Data" },
  { name: "TypeScript", Icon: "Binary", category: "Frontend" },
  { name: "HTML", Icon: "Code", category: "Frontend" }
];