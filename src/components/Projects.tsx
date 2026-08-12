import { useState } from 'react';
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ArrowUpRight } from 'lucide-react';

// Project images (ultra-optimized modern AVIF + WebP formats)
import vertexAirseaWebp from '@/assets/vertexairsea.webp';
import vertexAirseaAvif from '@/assets/vertexairsea.avif';
import photographyPortfolioWebp from '@/assets/aesphotography.webp';
import photographyPortfolioAvif from '@/assets/aesphotography.avif';
import grnlSupplyChainWebp from '@/assets/grnlsupplychain.webp';
import grnlSupplyChainAvif from '@/assets/grnlsupplychain.avif';

interface Project {
  id: number;
  title: string;
  year: string;
  category: string;
  tech: string[];
  previewUrl: string;
  imageWebp: string;
  imageAvif: string;
  imageAlt: string;
  liveDomain: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "GRNL Supply Chain",
    year: "2025",
    category: "Logistics Platform",
    tech: ["React", "TypeScript", "Tailwind CSS", "Vercel"],
    previewUrl: "https://www.grnlsupplychain.com/",
    imageWebp: grnlSupplyChainWebp,
    imageAvif: grnlSupplyChainAvif,
    imageAlt: "GRNL Supply Chain — Global Freight Platform",
    liveDomain: "grnlsupplychain.com",
  },
  {
    id: 2,
    title: "AES Photography",
    year: "2025",
    category: "Photography Portfolio",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    previewUrl: "https://www.aesphotography.in/",
    imageWebp: photographyPortfolioWebp,
    imageAvif: photographyPortfolioAvif,
    imageAlt: "AES Photography — Editorial Portfolio",
    liveDomain: "aesphotography.in",
  },
  {
    id: 3,
    title: "Vertex Air Sea",
    year: "2025",
    category: "International Cargo",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    previewUrl: "https://www.vertexairsea.com/",
    imageWebp: vertexAirseaWebp,
    imageAvif: vertexAirseaAvif,
    imageAlt: "Vertex Air Sea Cargo — Freight Forwarding",
    liveDomain: "vertexairsea.com",
  },
];

const prefetchProjectMedia = (p: Project) => {
  if (typeof window === "undefined") return;
  const link = document.createElement("link");
  link.rel = "prefetch";
  link.as = "image";
  link.href = p.imageAvif || p.imageWebp;
  document.head.appendChild(link);
};

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-container overflow-hidden"
    >
      {/* Header row */}
      <div
        className={cn(
          "flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-14 sm:mb-16 transition-all duration-700 ease-out",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        <div>
          <p className="text-xs font-mono text-primary uppercase tracking-[0.2em] mb-2">
            Client Work
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold font-display text-foreground tracking-tight">
            Featured Projects
          </h2>
        </div>
        <p className="text-sm text-muted-foreground max-w-xs leading-relaxed font-sans">
          High-performance websites built for real clients — engineered for speed, trust, and conversion.
        </p>
      </div>

      {/* Main showcase: list + image */}
      <div
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 transition-all duration-700 ease-out delay-100",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        {/* Left: Rollover list */}
        <div className="flex flex-col justify-center divide-y divide-border/30">
          {projects.map((project, i) => {
            const isActive = i === activeIndex;
            return (
              <a
                key={project.id}
                href={project.previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                onMouseEnter={() => {
                  setActiveIndex(i);
                  prefetchProjectMedia(project);
                }}
                onFocus={() => prefetchProjectMedia(project)}
                onTouchStart={() => prefetchProjectMedia(project)}
                onClick={(e) => {
                  // On mobile: first tap activates, second tap navigates
                  if (!isActive) {
                    e.preventDefault();
                    setActiveIndex(i);
                  }
                }}
                aria-label={`Open ${project.title} live website`}
                className={cn(
                  "group relative py-7 sm:py-8 flex items-center justify-between gap-4 transition-all duration-300 outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-sm cursor-pointer",
                )}
              >
                {/* Active bar */}
                <span
                  className={cn(
                    "absolute left-0 top-0 bottom-0 w-0.5 rounded-full transition-all duration-500 ease-out",
                    isActive ? "bg-primary opacity-100" : "bg-transparent opacity-0"
                  )}
                />

                <div className="pl-5 flex-1 min-w-0">
                  {/* Category + year */}
                  <div className={cn(
                    "flex items-center gap-3 mb-1.5 transition-all duration-300",
                    isActive ? "opacity-100" : "opacity-50 group-hover:opacity-70"
                  )}>
                    <span className="text-[11px] font-mono text-primary uppercase tracking-wider">
                      {project.category}
                    </span>
                    <span className="text-[11px] text-muted-foreground font-mono">
                      {project.year}
                    </span>
                  </div>

                  {/* Project title */}
                  <h3
                    className={cn(
                      "font-display font-extrabold tracking-tight text-foreground transition-all duration-300",
                      "text-2xl sm:text-3xl md:text-4xl",
                      isActive
                        ? "text-foreground"
                        : "text-foreground/40 group-hover:text-foreground/70"
                    )}
                  >
                    {project.title}
                  </h3>

                  {/* Tech tags — only show on active */}
                  <div
                    className={cn(
                      "flex flex-wrap gap-1.5 mt-3 transition-all duration-400 ease-out",
                      isActive ? "opacity-100 max-h-10" : "opacity-0 max-h-0 overflow-hidden"
                    )}
                  >
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Arrow — right side */}
                <div className={cn(
                  "shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-all duration-300",
                  isActive
                    ? "border-primary bg-primary text-primary-foreground scale-100"
                    : "border-border/30 bg-transparent text-muted-foreground scale-75 opacity-40 group-hover:scale-90 group-hover:opacity-60"
                )}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </a>
            );
          })}
        </div>

        {/* Right: Full-page screenshot frame */}
        <div className="hidden lg:block relative">
          <div className="sticky top-28">
            {/* Browser chrome */}
            <div className="rounded-t-xl border border-b-0 border-border/40 bg-secondary/80 px-4 py-2.5 flex items-center gap-2 backdrop-blur-md">
              <span className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
              <div className="ml-2 flex-1 max-w-xs px-3 py-0.5 rounded bg-background/70 border border-border/30 text-[10px] font-mono text-muted-foreground truncate">
                {projects[activeIndex].liveDomain}
              </div>
              <a
                href={projects[activeIndex].previewUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto text-[10px] font-mono text-primary hover:underline flex items-center gap-1 shrink-0"
              >
                Open <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>

            {/* Screenshot viewport */}
            <div
              className="relative border border-border/40 rounded-b-xl overflow-hidden bg-background"
              style={{ height: 'clamp(360px, 55vh, 520px)' }}
            >
              {projects.map((p, i) => (
                <div
                  key={p.id}
                  className={cn(
                    "absolute inset-0 overflow-y-auto scrollbar-none transition-opacity duration-500 ease-out",
                    i === activeIndex ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
                  )}
                >
                  <picture>
                    <source srcSet={p.imageAvif} type="image/avif" />
                    <source srcSet={p.imageWebp} type="image/webp" />
                    <img
                      src={p.imageAvif}
                      alt={p.imageAlt}
                      className="w-full h-auto block"
                      loading={i === 0 ? "eager" : "lazy"}
                      fetchPriority={i === 0 ? "high" : "low"}
                      decoding="async"
                      width={1400}
                    />
                  </picture>
                </div>
              ))}

              {/* Bottom gradient fade */}
              <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-background to-transparent pointer-events-none z-20" />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile image (below list on small screens) */}
      <div className="mt-8 lg:hidden rounded-xl border border-border/40 overflow-hidden bg-background">
        <div className="px-3 py-2 bg-secondary/80 border-b border-border/30 flex items-center gap-1.5">
          <span className="w-2 h-2 rounded-full bg-rose-400/70" />
          <span className="w-2 h-2 rounded-full bg-amber-400/70" />
          <span className="w-2 h-2 rounded-full bg-emerald-400/70" />
          <span className="ml-2 text-[10px] font-mono text-muted-foreground truncate">
            {projects[activeIndex].liveDomain}
          </span>
        </div>
        <div className="overflow-y-auto scrollbar-none" style={{ maxHeight: '360px' }}>
          <picture>
            <source srcSet={projects[activeIndex].imageAvif} type="image/avif" />
            <source srcSet={projects[activeIndex].imageWebp} type="image/webp" />
            <img
              src={projects[activeIndex].imageAvif}
              alt={projects[activeIndex].imageAlt}
              className="w-full h-auto block"
              loading="lazy"
              decoding="async"
              width={1400}
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Projects;
