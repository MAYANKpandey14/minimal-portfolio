
import { siteContent } from "@/data/content";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const { ref: footerRef, isVisible: footerVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <footer 
      ref={footerRef}
      className={cn(
        "py-16 px-6 glass-panel border-t border-border/20 border-x-0 border-b-0 rounded-t-[2.5rem] rounded-b-none reveal-fade-up shadow-2xl",
        footerVisible && "visible"
      )}
      role="contentinfo"
      aria-label="Site footer"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-16">
          <div className="font-sans">
            <a 
              href="#" 
              className="text-xl font-bold font-serif tracking-tight mb-4 inline-block focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md text-foreground hover:text-primary transition-colors"
              aria-label="Return to top of page"
            >
              <span className="text-primary font-mono font-bold">&lt;</span>
              <span>mayankpandey</span>
              <span className="text-primary font-mono font-bold">/&gt;</span>
            </a>
            <p className="text-muted-foreground text-sm max-w-xs leading-relaxed">
              {siteContent.personal.tagline}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="font-sans">
            <h4 className="font-bold font-serif text-foreground text-lg mb-4">Quick Links</h4>
            <ul className="flex flex-col space-y-2">
              {siteContent.navigation.map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href} 
                    className="text-sm text-muted-foreground hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                    aria-label={link.ariaLabel}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="font-sans">
            <h4 className="font-bold font-serif text-foreground text-lg mb-4">Let's Connect</h4>
            <div className="flex space-x-3 mb-4" role="list" aria-label="Social media links">
              <a 
                href={siteContent.social.linkedin} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-card/50 border border-border/20 backdrop-blur-md text-muted-foreground hover:text-primary hover:border-primary/30 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105"
                aria-label="Visit my LinkedIn profile (opens in new window)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
              </a>
              <a 
                href={siteContent.social.github} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="p-2.5 rounded-full bg-card/50 border border-border/20 backdrop-blur-md text-muted-foreground hover:text-primary hover:border-primary/30 transition-all focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 hover:scale-105"
                aria-label="Visit my GitHub profile (opens in new window)"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
              </a>
            </div>
            <address className="text-sm text-muted-foreground not-italic">
              Email: <a 
                href={`mailto:${siteContent.personal.email}`} 
                className="hover:text-primary transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
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
