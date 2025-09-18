
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

const Skills = () => {
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: skillsRef, isVisible: skillsVisible } = useScrollReveal({ threshold: 0.2 });
  const { ref: otherRef, isVisible: otherVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section id="skills" className="section-container bg-gradient-to-b from-white/0 to-white/50">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 reveal-fade-up",
          headingVisible && "visible"
        )}
      >
        <h2 className="section-heading">
          <span className="gradient-text">Skills & Expertise</span>
        </h2>
        <p className="section-subheading">
          Technical proficiency combined with a keen eye for detail.
        </p>
      </div>
      
      <div 
        ref={skillsRef}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 gap-12 reveal-fade-up",
          skillsVisible && "visible"
        )}
      >
        <div className="tech-card p-6 rounded-xl">
          <h3 className="text-xl font-medium mb-6 font-mono">Frontend Development</h3>
          <div className="space-y-6">
            {frontendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium font-mono text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground bg-primary/5 px-2 py-0.5 rounded">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        <div className="tech-card p-6 rounded-xl">
          <h3 className="text-xl font-medium mb-6 font-mono">Backend Development</h3>
          <div className="space-y-6">
            {backendSkills.map((skill) => (
              <div key={skill.name}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium font-mono text-sm">{skill.name}</span>
                  <span className="text-xs text-muted-foreground bg-primary/5 px-2 py-0.5 rounded">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-primary to-accent rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div 
        ref={otherRef}
        className={cn(
          "mt-16 reveal-scale-up",
          otherVisible && "visible"
        )}
      >
        <h3 className="text-xl font-medium mb-6 text-center font-mono">Other Technologies</h3>
        <div className="flex flex-wrap gap-3 justify-center">
          {otherSkills.map((skill, index) => (
            <span 
              key={skill} 
              className="px-4 py-2 rounded-full bg-white shadow-sm border border-border/50 text-sm font-mono hover:border-primary/30 hover:bg-primary/5 transition-all"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

const frontendSkills = [
  { name: "React / Next.js", level: "Expert", percentage: 95 },
  { name: "TypeScript", level: "Advanced", percentage: 90 },
  { name: "CSS / Tailwind", level: "Expert", percentage: 95 },
  { name: "UI/UX Design", level: "Advanced", percentage: 85 }
];

const backendSkills = [
  { name: "Node.js", level: "Expert", percentage: 90 },
  { name: "PostgreSQL / MongoDB", level: "Advanced", percentage: 85 }
];

const otherSkills = [ 
  "Firebase", "Redux", "Git", "Microservices",
  "Performance Optimization", "SEO", "Accessibility"
];

export default Skills;
