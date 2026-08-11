
import { Briefcase, Clock, Rocket, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const About = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: cardsRef, isVisible: cardsVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: approachRef, isVisible: approachVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="about" className="section-container">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out",
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <h2 className="section-heading">
          <span className="relative inline-block px-2">
            <span className={cn("absolute inset-0 bg-primary/10 rounded-lg -z-10 transition-all duration-1000 ease-out", headingVisible ? "w-full" : "w-0")} />
            <span className="font-display text-foreground">Engineered For Digital Growth</span>
          </span>
        </h2>
        <p className="section-subheading mt-2">
          I partner with businesses and founders to design and build digital storefronts that stand out, capture market share, and convert visitors into loyal customers.
        </p>
      </div>
      
      {/* Senior UI/UX Bento Grid Layout */}
      <div 
        ref={cardsRef}
        className={cn(
          "grid grid-cols-1 md:grid-cols-3 gap-6 reveal-scale-up",
          cardsVisible && "visible"
        )}
      >
        {/* Card 01: Digital Brand Authority (Spans 2 columns on md+) */}
        <div className="md:col-span-2 rounded-2xl p-7 md:p-8 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />
          
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                Brand Identity & UX
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-3">
              Digital Brand Authority
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl font-sans">
              Crafting bespoke digital storefronts that instantly convey market dominance, institutional trust, and high-end brand prestige to high-value clients.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/20 flex flex-wrap items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/60 text-xs font-medium text-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Executive Standard
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary/60 text-xs font-medium text-muted-foreground">
              Custom Identity UI
            </span>
          </div>
        </div>

        {/* Card 02: Sub-Second Speed (1 column) */}
        <div className="rounded-2xl p-7 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-muted-foreground">
                Vitals
              </span>
            </div>

            <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2">
              Sub-Second Speed
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-sans">
              Engineering lightning-fast web experiences that retain visitors and boost search engine indexing.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/20">
            <div className="flex items-center justify-between text-xs font-mono mb-1.5">
              <span className="text-muted-foreground">Lighthouse</span>
              <span className="text-emerald-500 font-bold">99/100</span>
            </div>
            <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
              <div className="h-full bg-emerald-500 w-[99%] rounded-full group-hover:bg-primary transition-colors" />
            </div>
          </div>
        </div>

        {/* Card 03: Conversion First (1 column) */}
        <div className="rounded-2xl p-7 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-muted-foreground">
                CRO
              </span>
            </div>

            <h3 className="text-lg font-bold font-display text-foreground group-hover:text-primary transition-colors mb-2">
              Conversion First
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed font-sans">
              Designing strategic user flows that turn website traffic into qualified lead submissions and booked sales calls.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/20 flex items-center justify-between">
            <span className="text-xs font-sans text-muted-foreground">Lead Conversion</span>
            <span className="text-xs font-mono font-bold text-primary px-2.5 py-1 rounded bg-primary/10 border border-primary/20">
              +3.4x Velocity
            </span>
          </div>
        </div>

        {/* Card 04: Reliable Launch (Spans 2 columns on md+) */}
        <div className="md:col-span-2 rounded-2xl p-7 md:p-8 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group relative overflow-hidden flex flex-col justify-between">
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

          <div>
            <div className="flex items-center justify-between mb-5">
              <span className="text-xs font-mono text-muted-foreground group-hover:text-foreground transition-colors">
                Guaranteed Delivery
              </span>
            </div>

            <h3 className="text-xl md:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-3">
              Guaranteed Milestones
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-xl font-sans">
              Predictable, battle-tested development sprints delivering fully-tested, production-ready websites strictly on schedule.
            </p>
          </div>

          <div className="mt-6 pt-4 border-t border-border/20 flex flex-wrap items-center gap-2 text-xs font-mono text-muted-foreground">
            <span className="px-2.5 py-1 rounded bg-secondary/50">01 Scope</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-secondary/50">02 Design</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-secondary/50">03 Build</span>
            <span>→</span>
            <span className="px-2.5 py-1 rounded bg-primary text-primary-foreground font-bold">04 Deploy</span>
          </div>
        </div>
      </div>
      
      {/* Growth-Driven Strategy Showcase (Impeccable Senior UI/UX Redesign) */}
      <div 
        ref={approachRef}
        className={cn(
          "mt-16 lg:mt-20 rounded-3xl p-8 md:p-12 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/30 shadow-xl transition-all duration-300 relative overflow-hidden reveal-fade-up group",
          approachVisible && "visible"
        )}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors pointer-events-none" />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">
          <div className="lg:col-span-7">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4 tracking-tight font-display text-foreground">
              My Growth-Driven Strategy
            </h3>
            <p className="text-muted-foreground mb-8 font-sans text-sm sm:text-base leading-relaxed max-w-xl">
              A great website is not just a digital business card—it is your 24/7 sales engine. Every line of code and visual pixel is crafted to establish instant authority, streamline customer trust, and maximize conversions.
            </p>

            {/* 2x2 Feature Matrix Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {approaches.map((approach, index) => (
                <div 
                  key={index} 
                  className="px-4 py-3 rounded-xl bg-secondary/40 border border-border/30 hover:border-primary/40 hover:bg-secondary/70 transition-all duration-200 flex items-center gap-3 group/pill"
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0 group-hover/pill:scale-125 transition-transform" />
                  <span className="font-sans text-xs font-semibold text-foreground/90 leading-tight">
                    {approach}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="space-y-4">
              <div className="p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-primary/40 transition-all duration-300 flex items-center gap-4 group/kpi">
                <div className="px-3.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono font-bold text-base flex-shrink-0 group-hover/kpi:scale-105 transition-transform">
                  100%
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display text-foreground group-hover/kpi:text-primary transition-colors">
                    Client Satisfaction
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    On-time delivery & transparent milestone updates
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-primary/40 transition-all duration-300 flex items-center gap-4 group/kpi">
                <div className="px-3.5 py-2 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 font-mono font-bold text-base flex-shrink-0 group-hover/kpi:scale-105 transition-transform">
                  &lt;100ms
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display text-foreground group-hover/kpi:text-primary transition-colors">
                    Sub-Second Load Time
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    Optimized for 99+ Google Core Web Vitals
                  </p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-secondary/30 border border-border/40 hover:border-primary/40 transition-all duration-300 flex items-center gap-4 group/kpi">
                <div className="px-3.5 py-2 rounded-xl bg-primary/10 border border-primary/20 text-primary font-mono font-bold text-base flex-shrink-0 group-hover/kpi:scale-105 transition-transform">
                  24/7
                </div>
                <div>
                  <h4 className="font-bold text-sm font-display text-foreground group-hover/kpi:text-primary transition-colors">
                    Automated Lead Capture
                  </h4>
                  <p className="text-xs text-muted-foreground font-sans mt-0.5">
                    Seamless booking & instant contact lead flows
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const valueProps = [
  {
    icon: Briefcase,
    title: "Digital Authority",
    description: "Crafting bespoke designs that convey trust, credibility, and brand prestige."
  },
  {
    icon: Zap,
    title: "High Performance",
    description: "Engineering sub-second web experiences that keep visitors engaged and reduce bounce rates."
  },
  {
    icon: Rocket,
    title: "Conversion First",
    description: "Designing strategic user flows that turn website traffic into qualified leads and sales."
  },
  {
    icon: Clock,
    title: "Reliable Launch",
    description: "Delivering fully-tested, battle-ready websites strictly on schedule."
  }
];

const approaches = [
  "Conversion-centered UX & visual hierarchy",
  "Search Engine Optimization (SEO) for organic reach",
  "Mobile-first fluid responsiveness across all screens",
  "Frictionless booking & contact lead flows",
  "Clean, maintainable React & Tailwind code"
];

export default About;
