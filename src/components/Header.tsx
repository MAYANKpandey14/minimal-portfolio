import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, ArrowRight } from 'lucide-react';
import { siteContent } from "@/data/content";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Direct state evaluation guarantees reset when scrolling back up to top
      setScrolled(window.scrollY > 20);

      // Scroll-spy section observer
      const scrollPosition = window.scrollY + 120;
      const navItems = siteContent.navigation;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const section = document.querySelector(navItems[i].href);
        if (section && (section as HTMLElement).offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].href);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check initial scroll position

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-in-out pointer-events-none px-3 sm:px-6"
      role="banner"
      aria-label="Site navigation"
    >
      <div 
        className={cn(
          "pointer-events-auto transition-all duration-500 ease-out flex items-center justify-between overflow-hidden",
          scrolled 
            ? "w-[92%] max-w-5xl mx-auto mt-3 sm:mt-4 px-4 sm:px-6 py-2 sm:py-2.5 rounded-full backdrop-blur-xl bg-background/90 border border-border/40 shadow-2xl" 
            : "w-full max-w-7xl mx-auto px-2 sm:px-6 py-5 bg-transparent border-b border-transparent"
        )}
      >
        <a 
          href="#" 
          className="text-lg sm:text-xl font-bold tracking-tight font-display text-foreground hover:opacity-80 transition-opacity"
          aria-label="mayankpandey - Freelance Web Designer"
        >
          <span className="text-primary font-mono font-bold">&lt;</span>
          <span>mayankpandey</span>
          <span className="text-primary font-mono font-bold">/&gt;</span>
        </a>

        <div className="flex items-center gap-3 sm:gap-4 lg:gap-5">
          <nav 
            className="hidden md:flex items-center gap-1.5 lg:gap-2 p-1 rounded-full bg-secondary/30 border border-border/20 backdrop-blur-xs" 
            role="navigation" 
            aria-label="Main navigation"
          >
            {siteContent.navigation.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-medium uppercase tracking-wider transition-all duration-200 px-3.5 py-1.5 rounded-full flex items-center justify-center text-center",
                    isActive
                      ? "text-primary font-bold bg-primary/10 shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                  aria-current={isActive ? "page" : undefined}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs group"
          >
            <span>Request Quote</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="md:hidden">
            <button
              className="text-foreground hover:text-primary p-2 hover:bg-secondary/60 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-full cursor-pointer"
              aria-label={mobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              onClick={toggleMobileMenu}
            >
              {mobileMenuOpen ? (
                <X size={22} className="text-foreground" aria-hidden="true" />
              ) : (
                <Menu size={22} className="text-foreground" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu - slides in from the right */}
      {/* ponytail: streamlined theme-aligned drawer reusing core tokens */}
      <nav
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 right-0 w-72 bg-background/95 backdrop-blur-xl shadow-2xl border-l border-border/40 transform transition-all duration-300 ease-in-out z-50 md:hidden flex flex-col h-screen",
          mobileMenuOpen
            ? "translate-x-0 opacity-100 pointer-events-auto visible"
            : "translate-x-full opacity-0 pointer-events-none invisible"
        )}
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex items-center justify-between p-5 border-b border-border/20">
          <span className="text-base font-bold font-display text-foreground">
            <span className="text-primary font-mono font-bold">&lt;</span>
            <span>mayankpandey</span>
            <span className="text-primary font-mono font-bold">/&gt;</span>
          </span>
          <button
            onClick={closeMobileMenu}
            className="text-muted-foreground hover:text-foreground p-2 hover:bg-secondary/60 rounded-full transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary cursor-pointer"
            aria-label="Close navigation menu"
          >
            <X size={20} aria-hidden="true" />
          </button>
        </div>

        <div className="flex flex-col h-full px-5 py-6 justify-between">
          <div className="flex flex-col space-y-1.5" role="list">
            {siteContent.navigation.map((link) => {
              const isActive = activeSection === link.href;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "text-xs font-semibold uppercase tracking-wider transition-all duration-200 px-4 py-3 rounded-full flex items-center justify-between focus:outline-none focus-visible:ring-2 focus-visible:ring-primary",
                    isActive
                      ? "text-primary font-bold bg-primary/10 shadow-xs"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary/60"
                  )}
                  onClick={closeMobileMenu}
                  role="listitem"
                  aria-current={isActive ? "page" : undefined}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-1.5 h-1.5 rounded-full bg-primary" />}
                </a>
              );
            })}
          </div>

          <div className="pb-6">
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-4 py-3 text-xs font-semibold text-primary-foreground shadow-md transition-all hover:bg-primary/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary group"
              onClick={closeMobileMenu}
            >
              <span>Request Quote</span>
              <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </nav>

      {/* Overlay when mobile menu is open */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-background/60 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;