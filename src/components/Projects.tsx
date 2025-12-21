
import { useState } from 'react';
import { cn } from "@/lib/utils";
import LazyImage from '@/components/optimized/LazyImage';
import { useScrollReveal } from "@/hooks/use-scroll-reveal";
import { ExternalLink } from 'lucide-react';

// Import project images
import spendwiseImg from '@/assets/spendwise-dashboard.png';
import methodosImg from '@/assets/methodos-dashboard.png';
import taskApiImg from '@/assets/task-api.png';
import vertexAirseaImg from '@/assets/vertex-airsea.jpg';
import messagingMicroserviceImg from '@/assets/messaging-microservice.png';
import photographyPortfolioImg from '@/assets/photographyPortfolioImg.png';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const { ref: headingRef, isVisible: headingVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: filtersRef, isVisible: filtersVisible } = useScrollReveal({ threshold: 0.3 });
  const { ref: projectsRef, isVisible: projectsVisible } = useScrollReveal({ threshold: 0.2 });

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const getCategoryLabel = (category: string) => {
    switch(category) {
      case 'frontend': return 'Frontend';
      case 'fullstack': return 'Full Stack';
      case 'backend': return 'Backend';
      case 'freelance': return 'Freelance';
      default: return category;
    }
  };

  return (
    <section id="projects" className="section-container">
      <div 
        ref={headingRef}
        className={cn(
          "max-w-3xl mx-auto text-center mb-16 reveal-fade-up",
          headingVisible && "visible"
        )}
      >
        <h2 className="section-heading">Featured Projects</h2>
        <p className="section-subheading">
          A selection of my recent work delivering efficient, minimalist solutions.
        </p>
      </div>
      
      <div 
        ref={filtersRef}
        className={cn(
          "flex justify-center mb-8 reveal-scale-up",
          filtersVisible && "visible"
        )}
      >
        <div className="flex flex-wrap gap-2 p-1 bg-secondary/50 rounded-full">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all",
                activeFilter === category.id 
                  ? "bg-accent shadow-sm text-white" 
                  : "text-muted-foreground hover:text-foreground"
              )}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
      
      <div 
        ref={projectsRef}
        className={cn(
          "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 reveal-fade-up",
          projectsVisible && "visible"
        )}
      >
        {filteredProjects.map((project, index) => (
          <div 
            key={project.id} 
            className="group rounded-xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300 bg-card"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="relative overflow-hidden h-48">
              <LazyImage 
                src={project.image} 
                alt={`${project.title} - ${project.description}`}
                className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                width={400}
                height={192}
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div 
                className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-6"
              >
                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r from-accent to-primary text-white shadow-md">
                    {getCategoryLabel(project.category)}
                  </span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-medium">{project.title}</h3>
                {project.previewUrl && (
                  <a 
                    href={project.previewUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80 transition-colors"
                    aria-label={`Preview ${project.title}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                )}
              </div>
              <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span key={tech} className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'frontend', name: 'Frontend' },
  { id: 'fullstack', name: 'Full Stack' },
  { id: 'backend', name: 'Backend' }
];

const projects = [
  {
    id: 1,
    title: "SpendWise - Expense Tracker",
    description: "Personal finance management app with spending analytics, budgets, and real-time expense tracking.",
    category: "fullstack",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: spendwiseImg,
    previewUrl: "https://smartpocket.vercel.app/login"
  },
  {
    id: 2,
    title: "MethodOS - Productivity Suite",
    description: "Task management and productivity platform with pomodoro timer, notes, and analytics dashboard.",
    category: "fullstack",
    technologies: ["React", "TypeScript", "Supabase", "Tailwind CSS"],
    image: methodosImg,
    previewUrl: "https://methodos.lovable.app/login"
  },
  {
    id: 3,
    title: "Photography Portfolio",
    description: "A modern, responsive portfolio website to showcase professional photography work with galleries and clean UI.",
    category: "freelance",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: photographyPortfolioImg,
    previewUrl: "https://www.aesphotography.in/"
  },
  {
    id: 4,
    title: "Vertex Air Sea Cargo Solutions",
    description: "Freight forwarding website with comprehensive air, ocean, and road transportation services.",
    category: "freelance",
    technologies: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: vertexAirseaImg,
    previewUrl: "https://www.vertexairsea.com/"
  },
  {
    id: 5,
    title: "Task Management API",
    description: "RESTful API for task management with authentication and permission controls.",
    category: "backend",
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    image: taskApiImg,
    previewUrl: null
  },
  {
    id: 6,
    title: "Messaging Microservice",
    description: "Scalable microservice for real-time messaging in distributed applications.",
    category: "backend",
    technologies: ["Node.js", "Redis", "WebSockets", "Docker"],
    image: messagingMicroserviceImg,
    previewUrl: null
  }
];

export default Projects;
