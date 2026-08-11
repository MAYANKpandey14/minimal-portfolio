// Centralized content management
export const siteContent = {
  personal: {
    name: "Mayank Pandey",
    title: "Full Stack Developer",
    tagline: "Building elegant digital solutions with a focus on efficiency and on-time delivery.",
    email: "mayankpandeyofficial404@gmail.com",
    phone: "+91 7505728099",
    location: "India",
    availability: "August 2024"
  },
  
  navigation: [
    { href: "#about", label: "About", ariaLabel: "Learn more about me" },
    { href: "#skills", label: "Skills", ariaLabel: "View my technical skills" },
    { href: "#projects", label: "Projects", ariaLabel: "Browse my portfolio projects" },
    { href: "#hire-me", label: "Hire Me", ariaLabel: "Information about hiring me" },
    { href: "#contact", label: "Contact", ariaLabel: "Get in touch with me" }
  ],

  social: {
    linkedin: "https://www.linkedin.com/in/mayankpandey-21a5bb195/",
    github: "https://github.com/MAYANKpandey14",
    email: "mayankpandeyofficial404@gmail.com"
  },

  seo: {
    title: "Mayank Pandey | Full Stack Developer",
    description: "Full Stack Developer building fast, scalable React, TypeScript & Node.js apps with clean code and user-focused design.",
    keywords: ["Full Stack Developer", "React Developer", "Node.js", "TypeScript", "Web Development", "JavaScript", "Frontend", "Backend"],
    author: "Mayank Pandey",
    siteUrl: "https://mayankpandey-portfolio.lovable.app"
  },

  proposalSeo: {
    title: "Shopify Store Development Proposal | Mayank Pandey",
    description: "Detailed Shopify store development proposal: scope, timeline, deliverables, and pricing for a conversion-focused e-commerce build.",
    canonical: "https://mayankpandey-portfolio.lovable.app/proposal"
  },

  structuredData: {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://mayankpandey-portfolio.lovable.app/#person",
        "name": "Mayank Pandey",
        "jobTitle": "Full Stack Developer",
        "description": "Experienced Full Stack Developer specializing in React, Node.js, and modern web technologies.",
        "email": "mayankpandeyofficial404@gmail.com",
        "telephone": "+91-7505728099",
        "url": "https://mayankpandey-portfolio.lovable.app",
        "sameAs": [
          "https://www.linkedin.com/in/mayankpandey-21a5bb195/",
          "https://github.com/MAYANKpandey14"
        ],
        "knowsAbout": [
          "JavaScript",
          "TypeScript",
          "React",
          "Node.js",
          "Full Stack Development",
          "Web Development",
          "Frontend Development",
          "Backend Development"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://mayankpandey-portfolio.lovable.app/#website",
        "url": "https://mayankpandey-portfolio.lovable.app",
        "name": "Mayank Pandey | Full Stack Developer",
        "publisher": { "@id": "https://mayankpandey-portfolio.lovable.app/#person" }
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
      "url": "https://mayankpandey-portfolio.lovable.app"
    },
    "areaServed": "Worldwide",
    "offers": {
      "@type": "Offer",
      "price": "40000",
      "priceCurrency": "INR",
      "url": "https://mayankpandey-portfolio.lovable.app/proposal"
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