
import { useState, useRef, useEffect } from 'react';
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Skills = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: servicesRef, isVisible: servicesVisible } = useScrollReveal({ threshold: 0.2 });

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const serviceSlides = [
    [servicesList[0], servicesList[1]],
    [servicesList[2], servicesList[3]],
    [servicesList[4], servicesList[5]]
  ];

  const scrollToSlide = (index: number) => {
    if (scrollContainerRef.current) {
      const containerWidth = scrollContainerRef.current.clientWidth;
      scrollContainerRef.current.scrollTo({ left: index * containerWidth, behavior: 'smooth' });
      setActiveIndex(index);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    const nextIndex = direction === 'left' 
      ? (activeIndex === 0 ? serviceSlides.length - 1 : activeIndex - 1)
      : (activeIndex + 1) % serviceSlides.length;
    scrollToSlide(nextIndex);
  };

  // Auto-play sliding loop across the 3 slides (4s interval)
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % serviceSlides.length;
        if (scrollContainerRef.current) {
          const containerWidth = scrollContainerRef.current.clientWidth;
          scrollContainerRef.current.scrollTo({
            left: nextIndex * containerWidth,
            behavior: 'smooth',
          });
        }
        return nextIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, [isPaused, serviceSlides.length]);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current) {
        const { scrollLeft, clientWidth } = scrollContainerRef.current;
        if (clientWidth > 0) {
          const currentIndex = Math.round(scrollLeft / clientWidth);
          setActiveIndex(Math.min(Math.max(currentIndex, 0), serviceSlides.length - 1));
        }
      }
    };

    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll, { passive: true });
    }
    return () => {
      if (container) {
        container.removeEventListener('scroll', handleScroll);
      }
    };
  }, [serviceSlides.length]);

  return (
    <section id="services" className="section-container bg-transparent relative overflow-hidden">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-12 transition-all duration-700 ease-out",
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="section-heading relative inline-block">
          <span className="font-display text-foreground">Services & Technical Expertise</span>
          <span className={cn("block h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-3 transition-all duration-1000 ease-out", headingVisible ? "w-full" : "w-0")} />
        </h2>
        <p className="section-subheading font-sans mt-2">
          End-to-end web design and development engineered to give your business a competitive digital edge.
        </p>
      </div>

      {/* 3-Slide Interactive Carousel with Both Sides Shown */}
      <div 
        ref={servicesRef}
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
        className={cn(
          "max-w-5xl mx-auto reveal-fade-up relative",
          servicesVisible && "visible"
        )}
      >
        {/* Carousel Track: 3 Slides */}
        <div 
          ref={scrollContainerRef}
          className="flex overflow-x-auto snap-x snap-mandatory scrollbar-none py-2 scroll-smooth"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {serviceSlides.map((pair, slideIdx) => (
            <div 
              key={slideIdx} 
              className="w-full min-w-full shrink-0 snap-start px-2 sm:px-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pair.map((service, cardIdx) => {
                  const itemIndex = slideIdx * 2 + cardIdx + 1;
                  return (
                    <div 
                      key={service.title} 
                      className="rounded-2xl p-7 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between cursor-default relative overflow-hidden"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-5">
                          <span className="text-xs font-mono font-bold text-primary px-2.5 py-0.5 rounded bg-primary/10 border border-primary/20">
                            0{itemIndex}
                          </span>
                          <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                            {service.tag}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 font-display text-foreground group-hover:text-primary transition-colors duration-200">
                          {service.title}
                        </h3>
                        <p className="text-muted-foreground text-xs sm:text-sm font-sans leading-relaxed mb-6">
                          {service.description}
                        </p>
                      </div>

                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-border/20">
                        {service.highlights.map((h) => (
                          <span 
                            key={h} 
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-full bg-secondary/40 border border-border/30 text-muted-foreground group-hover:text-foreground group-hover:border-primary/30 transition-all"
                          >
                            {h}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Centered Controls: Prev Button, 3 Slide Progress Dots, Next Button */}
        <div className="flex justify-center items-center gap-4 mt-8">
          <button
            onClick={() => scroll('left')}
            className="p-2 rounded-full bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground hover:text-primary cursor-pointer shadow-xs active:scale-95"
            aria-label="Previous service slide"
          >
            <ChevronLeft size={18} />
          </button>

          <div className="flex items-center gap-2">
            {serviceSlides.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToSlide(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 cursor-pointer",
                  activeIndex === index 
                    ? "w-8 bg-primary" 
                    : "w-2 bg-border/60 hover:bg-muted-foreground"
                )}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          <button
            onClick={() => scroll('right')}
            className="p-2 rounded-full bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/50 hover:bg-primary/10 transition-all text-foreground hover:text-primary cursor-pointer shadow-xs active:scale-95"
            aria-label="Next service slide"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>

    </section>
  );
};

const servicesList = [
  {
    tag: "Design UI",
    title: "Custom Web Design",
    description: "Bespoke visual layouts designed to capture your brand personality, establish trust, and turn visitors into clients.",
    highlights: ["UI/UX Prototyping", "Design Systems", "Brand Identity"]
  },
  {
    tag: "Full-Stack",
    title: "Full-Stack Development",
    description: "Clean, scalable web apps built with React, Next.js, TypeScript, and Node for ultra-fast performance.",
    highlights: ["React 19 & Next.js", "TypeScript", "Node & APIs"]
  },
  {
    tag: "SEO Growth",
    title: "SEO & Traffic Growth",
    description: "Structured technical markup, metadata, and fast site speed designed to rank higher on search engines.",
    highlights: ["Technical SEO", "Schema Markup", "Core Web Vitals"]
  },
  {
    tag: "CRO Funnel",
    title: "Conversion Optimization",
    description: "Engineered call-to-action paths, frictionless form flows, and mobile-friendly UX that drive revenue.",
    highlights: ["Lead Magnets", "Booking Integrations", "Sales Funnels"]
  },
  {
    tag: "Security",
    title: "Maintenance & Security",
    description: "Ongoing updates, SSL security, database management, and cloud deployment on Vercel or AWS.",
    highlights: ["Vercel Hosting", "SSL & Domain Setup", "24/7 Monitoring"]
  },
  {
    tag: "E-Commerce",
    title: "E-Commerce & Portfolios",
    description: "Showcase client work or sell products online with secure payment gateways and instant load speeds.",
    highlights: ["Stripe Integration", "Portfolio Showcases", "Responsive Media"]
  }
];


export default Skills;
