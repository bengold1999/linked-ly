import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const experiences = [
    {
      title: "Technical Artist",
      company: "Technical Artist",
      location: "Remote",
      duration: "Oct 2024 - Jun 2025",
      type: "Full-time",
      description: "Specialized in creating procedural tools and technical art solutions for Unreal Engine projects.",
      achievements: [
        "Developed procedural tools for asset generation and optimization",
        "Created technical art solutions for real-time rendering",
        "Optimized performance for complex 3D scenes",
        "Collaborated with artists and developers on technical workflows"
      ],
      technologies: ["Unreal Engine 5", "Blueprints", "Python", "Houdini", "3ds Max"]
    },
    {
      title: "3D Generalist",
      company: "Cinesound Europe SRL",
      location: "Romania · Remote",
      duration: "Oct 2023 - Jan 2024",
      type: "Freelance",
      description: "Part of a team that developed a teaser trailer for an upcoming film. My role involved building 3D models and rigging as needed, creating and refining animations, and developing and modifying characters, including metahumans.",
      achievements: [
        "Built 3D models and rigging for film teaser trailer",
        "Created and refined character animations",
        "Developed and modified characters including metahumans",
        "Collaborated with film production team on visual effects"
      ],
      technologies: ["Unreal Engine", "Metahumans", "3D Modeling", "Rigging", "Animation"]
    },
    {
      title: "3D Generalist",
      company: "Uniqa Entertainment",
      location: "Tel Aviv District, Israel · Remote",
      duration: "Mar 2023 - Jun 2023",
      type: "Freelance",
      description: "Worked on 3D character development and environment creation for entertainment projects.",
      achievements: [
        "Developed 3D character models and environments",
        "Created cartoon-style character designs",
        "Built game environment assets and structures",
        "Collaborated with development team on asset pipeline"
      ],
      technologies: ["Character Creator 4", "Blender", "3D Modeling", "Texturing", "Game Development"]
    },
    {
      title: "3D Generalist",
      company: "Freelance",
      location: "Remote",
      duration: "2023",
      type: "Freelance",
      description: "Provided 3D generalist services for various clients and projects.",
      achievements: [
        "Delivered 3D assets for multiple client projects",
        "Provided modeling, texturing, and animation services",
        "Maintained high quality standards across diverse projects",
        "Built strong client relationships and project management skills"
      ],
      technologies: ["3D Modeling", "Texturing", "Animation", "Project Management", "Client Communication"]
    }
  ];

  const toggleJobExpansion = (index: number) => {
    setExpandedJob(expandedJob === index ? null : index);
  };

  return (
    <section id="experience" className="py-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Building innovative solutions and growing with amazing teams
          </p>
        </div>

        {/* LinkedIn CTA */}
        <div className="card-elegant mb-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="text-muted-foreground">
              For the full, up-to-date work history, visit my LinkedIn profile.
            </div>
            <a
              href="https://www.linkedin.com/in/ben-goldberger-290b8b23a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 rounded-md bg-primary text-primary-foreground hover:opacity-90 transition-colors"
            >
              View LinkedIn Experience
            </a>
          </div>
        </div>

        <div className="space-y-6">
          {experiences.map((job, index) => (
            <div 
              key={index}
              className="card-elegant transition-all duration-300"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{job.title}</h3>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-2">
                    <span className="font-medium text-primary">{job.company}</span>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span>{job.duration}</span>
                    </div>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {job.description}
                  </p>
                </div>
                
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => toggleJobExpansion(index)}
                  className="ml-4 shrink-0"
                >
                  {expandedJob === index ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </Button>
              </div>

              {/* Expanded Content */}
              {expandedJob === index && (
                <div className="mt-6 pt-6 border-t border-border animate-[fadeIn_0.3s_ease-out]">
                  <div className="mb-6">
                    <h4 className="font-semibold mb-3">Key Achievements:</h4>
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, achievementIndex) => (
                        <li 
                          key={achievementIndex}
                          className="flex items-start gap-2 text-muted-foreground"
                        >
                          <span className="text-primary mt-1">•</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold mb-3">Technologies Used:</h4>
                    <div className="flex flex-wrap gap-2">
                      {job.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}