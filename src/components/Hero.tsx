import { ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section
      className="min-h-[calc(100vh-80px)] flex items-center justify-center relative overflow-hidden px-6 pt-20 sm:pt-24 md:pt-28 lg:pt-32 pb-12"
      aria-labelledby="hero-heading"
      role="banner"
    >
      {/* Grid Backdrop */}
      <div className="absolute inset-0 bg-grid-pattern z-0 pointer-events-none opacity-90" />

      <div className="max-w-4xl mx-auto w-full text-center relative z-10 my-auto">
        {/* Choreographed entrance — each child has its own delay class */}

        {/* Layer 1: headline (fastest, most important) */}
        <h1
          id="hero-heading"
          className="hero-display font-extrabold font-display text-foreground max-w-4xl mx-auto mt-2 sm:mt-4 md:mt-6 hero-headline-shadow hero-enter-1 tracking-tight"
        >
          <span className="block sm:whitespace-nowrap">
            High-Converting <span className="italic font-normal text-primary hero-accent-glow">Websites</span>
          </span>
          <span className="block mt-1 sm:mt-2 sm:whitespace-nowrap">
            <span className="italic font-normal text-primary hero-accent-glow">Built to Grow</span> Your Business.
          </span>
        </h1>

        {/* Layer 2: subtitle */}
        <p className="mt-5 text-sm sm:text-base font-normal text-muted-foreground max-w-xl mx-auto leading-relaxed font-sans hero-enter-2">
          I build custom, high-speed websites for <strong className="font-bold text-foreground">growing businesses</strong> and <strong className="font-bold text-foreground">founders</strong> that rank on <strong className="font-bold text-foreground">Google</strong>, capture market attention, and turn visitors into <strong className="font-bold text-foreground">revenue</strong>.
        </p>

        {/* Layer 3: social proof */}
        <div className="mt-5 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-3.5 hero-enter-3">
          {/* 5 Overlapping Avatars */}
          <div className="flex items-center -space-x-2.5 overflow-hidden p-0.5">
            {[
              "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=120&q=80",
              "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=120&q=80",
            ].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Client portrait ${i + 1}`}
                className="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover shadow-xs"
                width={32}
                height={32}
                loading="lazy"
                decoding="async"
              />
            ))}
          </div>
          <div className="flex flex-col items-center sm:items-start">
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <Star key={i} size={14} className="fill-amber-400 text-amber-400" />
              ))}
            </div>
            <p className="text-[11px] font-sans text-muted-foreground mt-0.5">
              <strong className="font-bold text-foreground text-xs">20+</strong> businesses &amp; founders scaled online
            </p>
          </div>
        </div>

        {/* Layer 4: capability pills */}
        <div className="mt-4 flex flex-wrap justify-center items-center gap-2.5 sm:gap-3 hero-enter-4">
          {['Custom Web Design', 'Sub-Second Speed', 'Google SEO Ranking', 'Conversion Optimization'].map((label) => (
            <span
              key={label}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 hover:bg-secondary/60 text-xs font-sans font-semibold text-foreground/90 transition-all duration-200 cursor-default group shadow-xs"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-primary group-hover:scale-125 transition-transform" />
              <span className="group-hover:text-primary transition-colors">{label}</span>
            </span>
          ))}
        </div>

        {/* Layer 5: CTAs */}
        <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-3.5 hero-enter-5" role="group" aria-label="Primary actions">
          <a
            href="#contact"
            className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-semibold text-xs shadow-md hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all group cursor-pointer"
          >
            <span>Request Web Quote</span>
            <span className="w-5 h-5 rounded-full bg-primary-foreground text-primary flex items-center justify-center group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
              <ArrowRight size={12} />
            </span>
          </a>
          <a
            href="#projects"
            className="text-[11px] font-semibold text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            View Recent Projects
          </a>
        </div>

        {/* Trust caption */}
        <p className="mt-5 text-[11px] text-muted-foreground/70 font-mono border-t border-border/20 max-w-sm mx-auto pt-4 hero-enter-5">
          Freelance Web Designer &amp; Developer building high-converting digital storefronts.
        </p>
      </div>
    </section>
  );
};

export default Hero;
