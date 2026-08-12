import { useEffect } from 'react';

interface SEOHeadProps {
  title?: string;
  description?: string;
  canonical?: string;
  ogImage?: string;
  structuredData?: object;
}

const SEOHead = ({ 
  title = "Mayank Pandey | Freelance Web Designer & Developer", 
  description = "Freelance Web Designer & Developer building high-converting websites and scalable React web applications engineered for speed, trust, and business revenue.",
  canonical = window.location.href,
  ogImage = "/og-image.png",
  structuredData
}: SEOHeadProps) => {

  useEffect(() => {
    // Update document title
    document.title = title;

    // Update standard meta tags
    updateMetaTag('description', description);
    
    // Update Open Graph tags
    updateMetaTag('og:title', title, 'property');
    updateMetaTag('og:description', description, 'property');
    updateMetaTag('og:url', canonical, 'property');
    const fullImageUrl = ogImage.startsWith('http') ? ogImage : `${window.location.origin}${ogImage}`;
    updateMetaTag('og:image', fullImageUrl, 'property');
    updateMetaTag('og:image:secure_url', fullImageUrl, 'property');
    updateMetaTag('og:image:type', 'image/png', 'property');
    updateMetaTag('og:image:width', '1200', 'property');
    updateMetaTag('og:image:height', '630', 'property');
    updateMetaTag('og:image:alt', title, 'property');
    updateMetaTag('og:type', 'website', 'property');
    updateMetaTag('og:site_name', 'Mayank Pandey Portfolio', 'property');
    updateMetaTag('og:locale', 'en_US', 'property');
    
    // Update Twitter Card tags
    updateMetaTag('twitter:card', 'summary_large_image');
    updateMetaTag('twitter:title', title);
    updateMetaTag('twitter:description', description);
    updateMetaTag('twitter:image', fullImageUrl);
    updateMetaTag('twitter:image:alt', title);
    
    // Update canonical link
    updateCanonicalLink(canonical);
    
    // Add structured data
    if (structuredData) {
      updateStructuredData(structuredData);
    }
  }, [title, description, canonical, ogImage, structuredData]);

  return null;
};

const updateMetaTag = (name: string, content: string, attribute: string = 'name') => {
  let element = document.querySelector(`meta[${attribute}="${name}"]`) as HTMLMetaElement;
  
  if (element) {
    element.content = content;
  } else {
    element = document.createElement('meta');
    element.setAttribute(attribute, name);
    element.content = content;
    document.head.appendChild(element);
  }
};

const updateCanonicalLink = (href: string) => {
  let link = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;
  
  if (link) {
    link.href = href;
  } else {
    link = document.createElement('link');
    link.rel = 'canonical';
    link.href = href;
    document.head.appendChild(link);
  }
};

const updateStructuredData = (data: object) => {
  let script = document.querySelector('script[type="application/ld+json"]') as HTMLScriptElement;
  
  if (script) {
    script.textContent = JSON.stringify(data);
  } else {
    script = document.createElement('script');
    script.type = 'application/ld+json';
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);
  }
};

export default SEOHead;