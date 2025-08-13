import { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Experience() {
  const [expandedJob, setExpandedJob] = useState<number | null>(0);

  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      type: "Full-time",
      description: "Lead developer for enterprise web applications serving 100K+ users. Architected scalable microservices and implemented modern frontend solutions.",
      achievements: [
        "Reduced application load time by 40% through performance optimization",
        "Led a team of 4 developers in migrating legacy systems to React",
        "Implemented CI/CD pipelines reducing deployment time by 60%",
        "Mentored junior developers and conducted code reviews"
      ],
      technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"]
    },
    {
      title: "Frontend Developer",
      company: "Digital Innovations Inc.",
      location: "New York, NY",
      duration: "2020 - 2022",
      type: "Full-time",
      description: "Developed responsive web applications and collaborated with design teams to create exceptional user experiences.",
      achievements: [
        "Built 15+ responsive web applications from concept to deployment",
        "Improved code quality by implementing automated testing suites",
        "Collaborated with UX/UI designers to implement pixel-perfect designs",
        "Optimized SEO resulting in 50% increase in organic traffic"
      ],
      technologies: ["Vue.js", "JavaScript", "SCSS", "Figma", "Jest"]
    },
    {
      title: "Junior Web Developer",
      company: "StartupXYZ",
      location: "Austin, TX",
      duration: "2019 - 2020",
      type: "Full-time",
      description: "Contributed to the development of the company's main product, gaining experience in full-stack development and agile methodologies.",
      achievements: [
        "Developed key features for the main product using React and Express",
        "Participated in daily standups and sprint planning",
        "Fixed 100+ bugs and implemented user-requested features",
        "Learned modern development practices and version control"
      ],
      technologies: ["React", "Express", "MongoDB", "Git", "Agile"]
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