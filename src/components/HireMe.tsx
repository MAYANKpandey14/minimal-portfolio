
import { Briefcase, Clock, FileCode, Rocket } from "lucide-react";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const HireMe = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: contentRef, isVisible: contentVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section id="hire-me" className="section-container bg-secondary/30">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 reveal-fade-up",
          headingVisible && "visible"
        )}
      >
        <h2 className="section-heading">Work With Me</h2>
        <p className="section-subheading">
          I'm available for full-time positions and freelance projects.
        </p>
      </div>
      
      <div 
        ref={contentRef}
        className={cn(
          "grid grid-cols-1 lg:grid-cols-2 gap-12 reveal-fade-up",
          contentVisible && "visible"
        )}
      >
        <div className="glass-panel rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-accent/10">
              <Briefcase className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-medium">Full-time Position</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            I'm open to full-time opportunities with forward-thinking companies that value:
          </p>
          
          <ul className="space-y-3 mb-6">
            {fullTimeValues.map((value, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-accent/10 p-1 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>{value}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-4">
            <h4 className="font-medium">What I Bring:</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {fullTimeBenefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-2">
                  <benefit.icon className="h-5 w-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-sm">{benefit.text}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-md bg-accent px-8 text-sm font-medium text-white shadow transition-colors hover:bg-accent/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full"
            >
              Let's Talk
            </a>
          </div>
        </div>
        
        <div className="glass-panel rounded-xl p-8 shadow-lg">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 rounded-full bg-accent/10">
              <FileCode className="h-5 w-5 text-accent" />
            </div>
            <h3 className="text-xl font-medium">Freelance Projects</h3>
          </div>
          
          <p className="text-muted-foreground mb-6">
            I take on select freelance projects in these areas:
          </p>
          
          <ul className="space-y-3 mb-6">
            {freelanceServices.map((service, index) => (
              <li key={index} className="flex items-start gap-3">
                <div className="rounded-full bg-accent/10 p-1 mt-0.5">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-accent"><polyline points="20 6 9 17 4 12"></polyline></svg>
                </div>
                <span>{service}</span>
              </li>
            ))}
          </ul>
          
          <div className="space-y-4">
            <h4 className="font-medium">My Process:</h4>
            <div className="space-y-4">
              {freelanceProcess.map((step, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="rounded-full bg-accent/10 h-6 w-6 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-xs font-medium text-accent">{index + 1}</span>
                  </div>
                  <div>
                    <h5 className="font-medium text-sm">{step.title}</h5>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="mt-8">
            <a 
              href="#contact" 
              className="inline-flex h-11 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent/10 hover:text-accent hover:border-accent/30 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring w-full"
            >
              Start a Project
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

const fullTimeValues = [
  "Remote-friendly work environment",
  "Focus on quality code and best practices",
  "Collaborative team culture",
  "Continuous learning and growth opportunities",
  "Challenging problems that make an impact"
];

const fullTimeBenefits = [
  { icon: Rocket, text: "End-to-end full stack development expertise" },
  { icon: Clock, text: "Consistent on-time delivery track record" },
  { icon: FileCode, text: "Clean, maintainable, and well-tested code" },
  { icon: Briefcase, text: "Experience across diverse industries" }
];

const freelanceServices = [
  "Web Application Development",
  "Website Redesign & Optimization",
  "API Development & Integration",
  "E-commerce Solutions",
  "Technical Consultation & Code Review",
  "Performance Optimization"
];

const freelanceProcess = [
  {
    title: "Consultation",
    description: "We discuss your project requirements, timeline, and budget to ensure alignment."
  },
  {
    title: "Proposal",
    description: "I provide a detailed proposal with scope, timeline, and clear deliverables."
  },
  {
    title: "Development",
    description: "Iterative development with regular updates and milestone reviews."
  },
  {
    title: "Delivery & Support",
    description: "Project handover with documentation and optional ongoing support."
  }
];

export default HireMe;
