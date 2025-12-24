import { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Code, FileJson, Database, Globe, Server, Layout, Monitor, Laptop, Figma, Github, Binary } from 'lucide-react';
import { siteContent } from "@/data/content";
import LazyImage from "@/components/optimized/LazyImage";

const Hero = () => {
  const [mounted, setMounted] = useState(false);

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

          {/* Tech visualization container - uses CSS variables for responsive sizing */}
          <div 
            className={cn(
              "relative opacity-0 transition-opacity duration-1000 delay-300 mx-auto",
              mounted && "opacity-100"
            )}
            style={{
              width: 'var(--orbit-size)',
              height: 'var(--orbit-size)',
            }}
            aria-label="Technology skills visualization with profile picture"
          >
            {/* Layer 1: Orbit ring - sized to container */}
            <div className="absolute inset-0 flex items-center justify-center" aria-hidden="true">
              <div 
                className="w-full h-full rounded-full border border-accent/20"
              />
            </div>

            {/* Layer 2: Rotating icon wrapper */}
            <div 
              className="absolute inset-0 animate-spin-slow"
              aria-hidden="true"
            >
              {[
                { Icon: Code, label: "JS" },
                { Icon: Figma, label: "UI/UX" },
                { Icon: Database, label: "SQL" },
                { Icon: Globe, label: "React" },
                { Icon: Server, label: "Node" },
                { Icon: Layout, label: "CSS" },
                { Icon: Monitor, label: "Web" },
                { Icon: Laptop, label: "Next" },
                { Icon: Github, label: "Git" },
                { Icon: FileJson, label: "API" },
                { Icon: Binary, label: "TS" },
                { Icon: Code, label: "HTML" },
              ].map((item, index) => {
                const totalIcons = 12;
                const angle = (2 * Math.PI * index) / totalIcons - Math.PI / 2;
                // Use CSS variable for orbit radius (tighter packing at 42%)
                const radiusPercent = 42;
                const x = 50 + radiusPercent * Math.cos(angle);
                const y = 50 + radiusPercent * Math.sin(angle);
                
                return (
                  <div
                    key={`${item.label}-${index}`}
                    className="orbit-icon absolute flex flex-col items-center justify-center 
                      text-foreground/70 bg-background/95 shadow-md backdrop-blur-sm rounded-full 
                      hover:scale-110 hover:text-accent transition-all border border-border/50
                      animate-spin-reverse"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: 'translate(-50%, -50%)',
                      width: 'var(--icon-size)',
                      height: 'var(--icon-size)',
                    }}
                  >
                    <item.Icon 
                      style={{ width: 'var(--icon-lucide-size)', height: 'var(--icon-lucide-size)' }} 
                      className="opacity-80" 
                    />
                    <span 
                      className="mt-0.5 font-mono font-semibold opacity-80"
                      style={{ fontSize: 'var(--icon-font-size)' }}
                    >
                      {item.label}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* Layer 3: Center blob + profile (larger, more prominent) */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              {/* Blob gradient background - slightly larger than image for glow effect */}
              <div 
                className="absolute blob-shape bg-gradient-to-br from-accent/50 to-accent/20 animate-pulse filter blur-lg"
                style={{ 
                  width: 'calc(var(--blob-size) + 20px)', 
                  height: 'calc(var(--blob-size) + 20px)',
                  animationDuration: '10s' 
                }}
                aria-hidden="true"
              />
              
              {/* Profile image - uses blob-size variable */}
              <div 
                className="relative z-10 overflow-hidden"
                style={{
                  width: 'var(--blob-size)',
                  height: 'var(--blob-size)',
                }}
              >
                <div className="blob-card w-full h-full border-2 border-white/40 backdrop-blur-lg flex items-center justify-center overflow-hidden shadow-xl">
                  <LazyImage
                    src="/profile-pic.png"
                    alt={`Professional portrait of ${siteContent.personal.name}, Full Stack Developer`}
                    className="w-full h-full object-cover"
                    priority={true}
                    width={220}
                    height={220}
                    sizes="(max-width: 640px) 130px, (max-width: 768px) 160px, (max-width: 1024px) 190px, 220px"
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
