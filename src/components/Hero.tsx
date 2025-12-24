
import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Code, FileJson, Database, Globe, Server, Layout, Monitor, Laptop, Figma, Github, Binary } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import { siteContent } from "@/data/content";
import LazyImage from "@/components/optimized/LazyImage";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Hero = () => {
  const [mounted, setMounted] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Tech background pattern */}
      <div className="absolute inset-0 -z-10 opacity-10" aria-hidden="true">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border border-accent/30"></div>
        <div className="absolute top-3/4 left-1/2 w-32 h-32 rounded-full border border-accent/30"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full border border-accent/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-accent/5 via-transparent to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className={cn("space-y-6", mounted && "animate-fade-up")}>
            <div className="inline-block">
              <span className="badge font-mono text-xs tracking-wider" role="status">Available for hire</span>
            </div>

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-none font-mono"
            >
              <span className="gradient-text">Full Stack</span>
              <br />
              Developer
            </h1>

            <p className="text-xl md:text-2xl font-light text-muted-foreground max-w-lg">
              {siteContent.personal.tagline}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4" role="group" aria-label="Primary actions">
              <a
                href="#projects"
                className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow-md transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="View my portfolio projects"
              >
                View Projects
              </a>
              <a
                href="#book"
                className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-white/50 backdrop-blur-sm px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10 hover:border-accent/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                aria-label="Get in touch with me"
              >
                Get in Touch
              </a>
            </div>
          </div>

          {/* Tech visualization container - all layers share this exact center */}
          <div 
            className={cn(
              "relative opacity-0 transition-opacity duration-1000 delay-300",
              mounted && "opacity-100",
              "w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] md:w-[420px] md:h-[420px] lg:w-[480px] lg:h-[480px]"
            )}
            aria-label="Technology skills visualization with profile picture"
          >
            {/* Layer 1: Blue orbit ring - absolute positioned, centered via inset-0 + flex */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div 
                className="rounded-full border border-accent/20"
                style={{
                  width: '100%',
                  height: '100%',
                }}
              />
            </div>

            {/* Layer 2: Rotating icon wrapper - same size as orbit, spins around shared center */}
            <div 
              className="absolute inset-0 animate-spin-slow"
              aria-hidden="true"
            >
              {/* Icons positioned on the circumference using polar coordinates */}
              {[
                { Icon: Code, label: "JavaScript" },
                { Icon: Figma, label: "UI/UX" },
                { Icon: Database, label: "SQL" },
                { Icon: Globe, label: "React" },
                { Icon: Server, label: "Node.js" },
                { Icon: Layout, label: "CSS" },
                { Icon: Monitor, label: "Responsive" },
                { Icon: Laptop, label: "Next.js" },
                { Icon: Github, label: "Git" },
                { Icon: FileJson, label: "JSON" },
                { Icon: Binary, label: "TypeScript" },
                { Icon: Code, label: "HTML" },
              ].map((item, index) => {
                const totalIcons = 12;
                const angle = (2 * Math.PI * index) / totalIcons - Math.PI / 2; // Start from top
                // Icons sit exactly on the orbit (50% radius from center)
                const x = 50 + 50 * Math.cos(angle);
                const y = 50 + 50 * Math.sin(angle);
                
                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="absolute flex flex-col items-center justify-center 
                      text-foreground/70 bg-background/90 shadow-sm backdrop-blur-sm rounded-full 
                      hover:scale-110 hover:text-accent transition-all border border-border/40
                      w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 lg:w-18 lg:h-18
                      animate-spin-reverse"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                    }}
                  >
                    <item.Icon size={isMobile ? 16 : 20} className="opacity-80" />
                    <span className="mt-0.5 font-mono font-medium opacity-80 text-[7px] sm:text-[8px] md:text-[9px]">
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Layer 3: Center content - blob background + profile image */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Blob gradient background */}
              <div 
                className="absolute blob-shape bg-gradient-to-br from-accent/60 to-accent/30 animate-pulse filter blur-md
                  w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]"
                style={{ animationDuration: '10s' }}
                aria-hidden="true"
              />
              
              {/* Profile image */}
              <div className="relative z-10 overflow-hidden
                w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] md:w-[150px] md:h-[150px] lg:w-[170px] lg:h-[170px]">
                <div className="blob-card w-full h-full border border-white/30 backdrop-blur-lg flex items-center justify-center overflow-hidden">
                  <LazyImage
                    src="/profile-pic.png"
                    alt={`Professional portrait of ${siteContent.personal.name}, Full Stack Developer`}
                    className="w-full h-full object-cover"
                    priority={true}
                    width={170}
                    height={170}
                    sizes="(max-width: 640px) 100px, (max-width: 768px) 120px, (max-width: 1024px) 150px, 170px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
