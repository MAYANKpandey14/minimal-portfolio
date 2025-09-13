import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X } from 'lucide-react';
import { siteContent } from "@/data/content";
import { throttle } from "@/lib/performance";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    }, 100);

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out py-4 px-6",
        scrolled ? "backdrop-blur-lg bg-white/70 shadow-sm border-b border-border/50" : "bg-transparent"
      )}
      role="banner"
      aria-label="Site navigation"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a 
          href="#" 
          className="text-xl font-medium tracking-tight transition-opacity hover:opacity-80 font-mono focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
          aria-label="Mayank Pandey - Full Stack Developer, return to top"
        >
          <span className="sr-only">{siteContent.personal.name} - {siteContent.personal.title}</span>
          <span className="inline-block gradient-text" aria-hidden="true">&lt;{siteContent.personal.name.toLowerCase().replace(' ', '')}/&gt;</span>
        </a>

        <nav className="hidden md:flex space-x-8" role="navigation" aria-label="Main navigation">
          {siteContent.navigation.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-accent transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md px-2 py-1"
              aria-label={link.ariaLabel}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="md:hidden">
          <button
            className="text-foreground p-2 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
            aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={toggleMobileMenu}
          >
            {mobileMenuOpen ? (
              <X size={24} className="text-accent" aria-hidden="true" />
            ) : (
              <Menu size={24} className="text-accent" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu - slides in from the right */}
      <nav
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 right-0 w-64 bg-white shadow-lg border-l border-border/20 transform transition-all duration-300 ease-in-out z-50 md:hidden flex flex-col h-screen",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-accent p-2 hover:bg-accent/10 rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
            aria-label="Close navigation menu"
          >
            <X size={24} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col h-full px-6">
          <div className="flex flex-col space-y-6 py-8" role="list">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2 border-b border-border/20 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 rounded-md"
                onClick={closeMobileMenu}
                aria-label={link.ariaLabel}
                role="listitem"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pb-8">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-white shadow-md transition-colors hover:bg-accent/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              onClick={closeMobileMenu}
              aria-label="Go to contact section"
            >
              Contact Me
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;