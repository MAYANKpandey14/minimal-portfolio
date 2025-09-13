
import { siteContent } from "@/data/content";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer 
      className="py-12 px-6 bg-secondary/30"
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div>
            <a 
              href="#" 
              className="text-xl font-semibold tracking-tight mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
              aria-label="Return to top of page"
            >
              {siteContent.personal.name.toLowerCase().replace(' ', '')}
            </a>
            <p className="text-muted-foreground text-sm max-w-xs">
              {siteContent.personal.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <h4 className="font-medium mb-4">Quick Links</h4>
            <ul className="flex flex-col space-y-2">
              {siteContent.navigation.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h4 className="font-medium mb-4">Let's Connect</h4>
            <div className="flex space-x-4 mb-4" role="list" aria-label="Social media links">
              <a 
                href={siteContent.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Visit my LinkedIn profile (opens in new window)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href={siteContent.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2 rounded-full bg-background text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                aria-label="Visit my GitHub profile (opens in new window)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
            <address className="text-sm text-muted-foreground not-italic">
              Email: <a 
                href={`mailto:${siteContent.personal.email}`} 
                className="hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                aria-label={`Send email to ${siteContent.personal.email}`}
              >
                {siteContent.personal.email}
              </a>
            </address>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} {siteContent.personal.name}. All rights reserved.
          </p>
          <nav className="flex gap-6" aria-label="Legal links">
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
            >
              Privacy Policy
            </a>
            <a 
              href="#" 
              className="text-xs text-muted-foreground hover:text-foreground transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
            >
              Terms of Service
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
