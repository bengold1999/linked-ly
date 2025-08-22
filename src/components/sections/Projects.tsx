import { ExternalLink, Github, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export function Projects() {
  const projects = [
    {
      title: "HunterCore – AI-Powered Personal Development Platform",
      description: "I initiated, managed, developed, and designed HunterCore – an AI-powered gamification platform for personal growth. In this project, I acted as the product manager, lead developer, and visionary, working closely with my partner to shape the concept. The platform enables users to track goals, habits, and tasks while enjoying an interactive, personalized experience.",
      image: null,
      technologies: ["AI", "Gamification", "Product Management", "Full-Stack Development", "Personal Development"],
      liveUrl: "https://drive.google.com/file/d/1aLbXYOjnE0z9_PftvTvx-jql9aPMkph3/view?usp=sharing",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "Rot & Roll – Game Demo",
      description: "I was fully responsible for the complete game design of Rot & Roll, a creative and action-packed demo. My focus was on building the player experience, creating unique gameplay mechanics, and ensuring engaging level design.",
      image: null,
      technologies: ["Game Design", "Gameplay Mechanics", "Level Design", "Player Experience", "Game Development"],
      liveUrl: "https://www.youtube.com/watch?v=1W5n2fLBKvI",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "Camera Shake Pack – Unreal Engine Tool for Game & Film Creators",
      description: "I created a smart Python-based tool that generates a complete Camera Shake Pack for Unreal Engine. This pack is ranked among the top free products on the Epic Games FAB store, offering developers and filmmakers an efficient way to integrate dynamic camera shakes into their projects.",
      image: null,
      technologies: ["Unreal Engine", "Python", "Camera Systems", "FAB Store", "Game Tools"],
      liveUrl: "https://www.fab.com/listings/2a7ed076-9afa-4633-8dcf-b3e45f0b9772",
      githubUrl: "#",
      featured: true,
      year: "2024"
    },
    {
      title: "Procedural Asset Generation Pipeline",
      description: "Developed a comprehensive procedural generation system for Unreal Engine 5, enabling teams to create scalable content from indie to AAA production. The pipeline includes terrain generation, asset optimization, and automated LOD systems.",
      image: null,
      technologies: ["Unreal Engine 5", "PCG", "Procedural Generation", "Python", "Performance Optimization"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2024"
    },
    
  
    {
      title: "Twitch Streamer Email Automation Tool",
      description: "I developed a custom automation script that collects emails of Twitch streamers playing specific games of your choice. This tool helps game marketers and developers reach relevant influencers more efficiently.",
      image: null,
      technologies: ["Python", "Automation", "Twitch API", "Data Collection", "Marketing Tools"],
      liveUrl: "#",
      githubUrl: "https://github.com/bengold1999/streams_Of_Twitch_Mails",
      featured: false,
      year: "2024"
    },
    {
      title: "Arcade Simulator – Unity Game Project (In Progress)",
      description: "Currently in development, Arcade Simulator is a Unity-based game project designed to recreate the nostalgic experience of classic arcade environments. My role involves both technical and creative contributions, including interactive UI and physics systems.",
      image: null,
      technologies: ["Unity", "Game Development", "Interactive UI", "Physics Systems", "Arcade Games"],
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
      year: "2024"
    },
    {
      title: "Epic Games Animation Bootcamp 2023 – Selected Project",
      description: "I participated in the 2023 Epic Games Animation Bootcamp, where my animation project was selected among the top 50 submissions in the program. The project demonstrates my skills in Unreal Engine animation and cinematic storytelling.",
      image: null,
      technologies: ["Unreal Engine", "Animation", "Cinematic Storytelling", "Epic Games", "Bootcamp"],
      liveUrl: "https://www.youtube.com/watch?v=Zjp4YSgLtTY",
      githubUrl: "#",
      featured: false,
      year: "2023"
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
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button size="sm" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Live Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" disabled>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-4 w-4" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button variant="outline" size="sm" disabled>
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Button>
                  )}
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
                  {project.liveUrl && project.liveUrl !== "#" ? (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="mr-1 h-3 w-3" />
                        Demo
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <ExternalLink className="mr-1 h-3 w-3" />
                      Demo
                    </Button>
                  )}
                  {project.githubUrl && project.githubUrl !== "#" ? (
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="mr-1 h-3 w-3" />
                        Code
                      </a>
                    </Button>
                  ) : (
                    <Button size="sm" variant="outline" disabled>
                      <Github className="mr-1 h-3 w-3" />
                      Code
                    </Button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
