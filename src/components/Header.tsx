import { useState, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { Menu, X, Sun, Moon, ArrowRight } from 'lucide-react';
import { siteContent } from "@/data/content";
import { useTheme } from "next-themes";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

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

  const renderThemeToggle = () => {
    if (!mounted) return <div className="w-9 h-9" />;
    return (
      <button
        onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        className="p-2 rounded-full border border-border/30 hover:bg-secondary/50 transition-colors text-muted-foreground hover:text-foreground flex items-center justify-center cursor-pointer"
        aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      >
        {theme === 'dark' ? (
          <Sun size={17} className="text-amber-400" />
        ) : (
          <Moon size={17} className="text-slate-700" />
        )}
      </button>
    );
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
          aria-label="Mayank Pandey - Freelance Web Designer"
        >
          <span className="text-primary font-mono font-bold">&lt;</span>
          <span>mayankpandey</span>
          <span className="text-primary font-mono font-bold">/&gt;</span>
        </a>

        <div className="flex items-center space-x-3 sm:space-x-5">
          <nav className="hidden md:flex space-x-6 mr-1" role="navigation" aria-label="Main navigation">
            {siteContent.navigation.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={cn(
                  "text-xs font-semibold uppercase tracking-wider transition-colors py-1 relative",
                  activeSection === link.href
                    ? "text-primary font-bold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full"
                    : "text-muted-foreground hover:text-foreground"
                )}
                aria-label={link.ariaLabel}
                aria-current={activeSection === link.href ? "page" : undefined}
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            {renderThemeToggle()}
          </div>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-semibold hover:bg-primary/90 transition-all shadow-xs group"
          >
            <span>Request Quote</span>
            <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
          </a>

          <div className="md:hidden">
            <button
              className="text-foreground p-2 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md cursor-pointer"
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
      </div>

      {/* Mobile menu - slides in from the right */}
      <nav
        id="mobile-menu"
        className={cn(
          "fixed inset-y-0 right-0 w-64 bg-background/90 backdrop-blur-md shadow-2xl border-l border-border/30 transform transition-all duration-300 ease-in-out z-50 md:hidden flex flex-col h-screen",
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
        aria-label="Mobile navigation menu"
        aria-hidden={!mobileMenuOpen}
      >
        <div className="flex justify-end p-4">
          <button
            onClick={closeMobileMenu}
            className="text-accent p-2 hover:bg-accent/10 rounded-full transition-colors focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 cursor-pointer"
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
                className="text-base font-medium text-foreground hover:text-accent transition-colors py-2 border-b border-border/20 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 rounded-md"
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
              className="inline-flex w-full items-center justify-center rounded-2xl bg-accent px-4 py-2.5 text-sm font-medium text-accent-foreground shadow-md transition-colors hover:bg-accent/90 focus:outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
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
          className="fixed inset-0 bg-background/40 backdrop-blur-sm z-40 md:hidden"
          onClick={closeMobileMenu}
          aria-hidden="true"
        />
      )}
    </header>
  );
};

export default Header;