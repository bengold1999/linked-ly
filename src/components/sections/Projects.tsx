import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: "Procedural Asset Pipeline",
      description: "Built an AI-assisted procedural asset generation system using ComfyUI and Unreal Engine, reducing asset creation time by 70% for game development teams.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      technologies: ["Unreal Engine", "ComfyUI", "Python", "PCG", "AI Pipelines"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "Real-time Shader System",
      description: "Developed a comprehensive shader library and material system for Unity, featuring procedural generation, performance optimization, and real-time rendering capabilities.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      technologies: ["Unity", "HLSL", "Shader Graph", "Procedural Generation", "Performance"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "AI Content Automation Platform",
      description: "Created an N8N-based automation platform that integrates with ComfyUI, streamlining AI-assisted content creation workflows for creative teams.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=800&h=500&fit=crop",
      technologies: ["N8N", "ComfyUI", "API Integration", "Python", "Automation"],
      liveUrl: "#",
      githubUrl: "#",
      featured: true,
      year: "2023"
    },
    {
      title: "3D Asset Management System",
      description: "Built a web-based 3D asset management platform with procedural generation tools, texture baking workflows, and asset pipeline optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      technologies: ["React", "Node.js", "Blender API", "Substance Painter", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023"
    },
    {
      title: "VAT Animation Pipeline",
      description: "Developed a Vertex Animation Texture pipeline for Unreal Engine, enabling efficient character animation with reduced memory usage and improved performance.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=500&fit=crop",
      technologies: ["Unreal Engine", "VAT", "Animation", "Performance", "Shader Development"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2023"
    },
    {
      title: "Procedural Camera System",
      description: "Created an intelligent camera system for Unity with procedural movement, cinematic sequences, and dynamic framing for interactive experiences.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=500&fit=crop",
      technologies: ["Unity", "C#", "Camera Systems", "Procedural Generation", "Cinematics"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2022"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my work across tech art, AI automation, procedural tools, and full-stack development
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="card-elegant group"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">{project.title}</h3>
                  <div className="flex items-center gap-1 text-sm text-muted-foreground">
                    <Calendar className="h-4 w-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-4 pt-2">
                  <Button size="sm" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-semibold mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {otherProjects.map((project, index) => (
              <div 
                key={project.title}
                className="card-elegant group"
                style={{ animationDelay: `${(index + 2) * 0.2}s` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold">{project.title}</h4>
                      <div className="flex items-center gap-1 text-sm text-muted-foreground">
                        <Calendar className="h-4 w-4" />
                        <span>{project.year}</span>
                      </div>
                    </div>
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex items-center gap-2">
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </a>
                  </Button>
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
