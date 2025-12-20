
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
          "max-w-3xl mx-auto text-center mb-16 reveal-fade-up",
          headingVisible && "visible"
        )}
      >
        <h2 className="section-heading">
          <span className="gradient-text">About Me</span>
        </h2>
        <p className="section-subheading">
          I build fast, efficient, and beautiful web applications with a focus on user experience and business objectives.
        </p>
      </div>
      
      <div 
        ref={cardsRef}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal-scale-up",
          cardsVisible && "visible"
        )}
      >
        {valueProps.map((prop, index) => (
          <div 
            key={prop.title} 
            className="group tech-card p-6 rounded-xl glow-effect"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="mb-4 text-primary">
              <prop.icon size={28} className="group-hover:scale-110 transition-transform duration-300" />
            </div>
            <h3 className="text-lg font-medium mb-2 font-mono">{prop.title}</h3>
            <p className="text-muted-foreground text-sm">{prop.description}</p>
          </div>
        ))}
      </div>
      
      <div 
        ref={approachRef}
        className={cn(
          "mt-16 lg:mt-24 bg-white/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border/50 shadow-sm reveal-fade-up",
          approachVisible && "visible"
        )}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-light mb-4 tracking-tight font-mono">My Approach</h3>
            <p className="text-muted-foreground mb-6">
              I believe in creating clean, maintainable code that solves real business problems. My minimalist approach eliminates unnecessary complexity, resulting in faster, more reliable applications.
            </p>
            <ul className="space-y-3">
              {approaches.map((approach, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-primary/10 p-1 mt-0.5">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary"><polyline points="20 6 9 17 4 12"></polyline></svg>
                  </div>
                  <span>{approach}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="glass-panel rounded-xl p-6 md:p-8 animate-glow">
              <div className="space-y-4">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono">1+</div>
                  <div>
                    <h4 className="font-medium font-mono">Years of Experience</h4>
                    <p className="text-sm text-muted-foreground">Building web applications</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono">5+</div>
                  <div>
                    <h4 className="font-medium font-mono">Projects Delivered</h4>
                    <p className="text-sm text-muted-foreground">On time and on budget</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-mono">3+</div>
                  <div>
                    <h4 className="font-medium font-mono">Happy Clients</h4>
                    <p className="text-sm text-muted-foreground">Across various industries</p>
                  </div>
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
    title: "Professional",
    description: "Delivering high-quality work that meets industry standards and exceeds client expectations."
  },
  {
    icon: Zap,
    title: "Minimalist",
    description: "Creating clean, simple solutions that eliminate unnecessary complexity."
  },
  {
    icon: Rocket,
    title: "Efficient",
    description: "Building optimized applications that maximize performance and minimize resource usage."
  },
  {
    icon: Clock,
    title: "On-time",
    description: "Respecting deadlines and delivering projects according to agreed timelines."
  }
];

const approaches = [
  "User-centered design thinking",
  "Test-driven development",
  "Continuous integration and deployment",
  "Performance optimization",
  "Responsive design for all devices"
];

export default About;
