
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HireMe = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="hire-me" className="section-container bg-transparent">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 transition-all duration-700 ease-out",
          headingVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        )}
      >
        <div className="flex items-center justify-center gap-4">
          <span className={cn("hidden sm:inline-block h-px bg-primary/40 transition-all duration-1000", headingVisible ? "w-10 sm:w-16" : "w-0")} />
          <h2 className="section-heading my-0 font-display text-foreground">Why Work With Me</h2>
          <span className={cn("hidden sm:inline-block h-px bg-primary/40 transition-all duration-1000", headingVisible ? "w-10 sm:w-16" : "w-0")} />
        </div>
        <p className="section-subheading font-sans mt-2">
          A predictable, stress-free partnership focused on launching your web project on time and driving measurable business results.
        </p>
      </div>
      
      <div 
        ref={contentRef}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-8 reveal-fade-up",
          contentVisible && "visible"
        )}
      >
        <div className="rounded-2xl p-7 md:p-8 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-muted-foreground">
              Value Proposition
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-3">
            The Business Advantage
          </h3>
          
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 font-sans leading-relaxed">
            Working with me means getting an experienced web designer & full-stack developer who understands both aesthetic craftsmanship and commercial conversion goals:
          </p>
          
          <ul className="space-y-3 mb-6 font-sans">
            {businessAdvantages.map((item, index) => (
              <li key={index} className="flex items-start gap-2.5">
                <span className="text-xs font-mono font-bold text-primary mt-0.5">✓</span>
                <span className="text-xs font-medium text-foreground/90">{item}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-3 font-sans pt-4 border-t border-border/20">
            <h4 className="font-bold font-display text-xs text-foreground uppercase tracking-wider">Guarantees You Get:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {guarantees.map((g, index) => (
                <div key={index} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 flex-shrink-0" />
                  <span className="text-xs font-mono text-muted-foreground">{g.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-full bg-primary px-8 text-xs font-semibold text-primary-foreground shadow-sm transition-all duration-200 hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] w-full"
            >
              Get a Project Estimate
            </a>
          </div>
        </div>
        
        <div className="rounded-2xl p-7 md:p-8 bg-card/60 backdrop-blur-md border border-border/40 hover:border-primary/40 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group cursor-default">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-mono text-muted-foreground">
              4-Step Process
            </span>
          </div>

          <h3 className="text-xl md:text-2xl font-bold font-display text-foreground group-hover:text-primary transition-colors mb-3">
            The 4-Step Growth Process
          </h3>
          
          <p className="text-muted-foreground text-xs sm:text-sm mb-6 font-sans leading-relaxed">
            From initial strategy call to final production launch, your project follows a transparent workflow:
          </p>
          
          <div className="space-y-4 font-sans">
            {freelanceProcess.map((step, index) => (
              <div key={index} className="flex items-start gap-3.5 group/step">
                <div className="rounded-md bg-secondary/60 border border-border/30 px-2 py-0.5 flex-shrink-0 mt-0.5 group-hover/step:border-primary/40 transition-colors">
                  <span className="text-xs font-mono font-bold text-primary">0{index + 1}</span>
                </div>
                <div>
                  <h5 className="font-bold text-xs font-display text-foreground">{step.title}</h5>
                  <p className="text-xs text-muted-foreground leading-relaxed mt-0.5">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-full border border-border/40 bg-card/40 px-8 text-xs font-semibold text-foreground shadow-xs transition-all duration-200 hover:bg-secondary/60 hover:border-border w-full"
            >
              Book Strategy Call
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const businessAdvantages = [
  "Custom responsive web design built to convert leads",
  "Sub-second page speeds for higher Google SEO rankings",
  "Transparent communication with direct founder access",
  "Clean React/TypeScript code built for long-term scalability",
  "Seamless integration with analytics, CRMs & email capture"
];

const guarantees = [
  { text: "100% On-Time Delivery Guarantee" },
  { text: "Sub-Second Speed Pass" },
  { text: "SSL & Security Included" },
  { text: "Free 30-Day Support" }
];

const freelanceProcess = [
  {
    title: "Strategy & Discovery",
    description: "We map your business targets, target audience, and key conversion actions."
  },
  {
    title: "UX/UI Design & Prototyping",
    description: "Bespoke wireframes and visual designs built for instant brand trust."
  },
  {
    title: "Development & SEO Build",
    description: "Engineering responsive React code with search engine optimization."
  },
  {
    title: "Launch & Growth Tuning",
    description: "Final quality testing, domain deployment, and conversion tracking setup."
  }
];

export default HireMe;
