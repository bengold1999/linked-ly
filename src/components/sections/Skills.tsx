import { Badge } from '@/components/ui/badge';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        "React", "Angular", "Vue", "JavaScript", "TypeScript", "CSS", "SCSS", "Tailwind CSS",
        "Next.js", "Performance Optimization", "Responsive Design", "Progressive Web Apps"
      ]
    },
    {
      title: "Backend Development",
      skills: [
        "Node.js", "Express", "MongoDB", "REST APIs", "Firebase", "Python", "PostgreSQL",
        "Microservices", "API Design", "Database Optimization", "Cloud Infrastructure"
      ]
    },
    {
      title: "Tech Art",
      skills: [
        "Unity", "Unreal Engine", "PCG", "VAT", "Shaders", "Procedural Tools", "Camera Systems",
        "Procedural Asset Creation", "Texture Authoring", "Animation Workflows", "VFX", "Material Systems",
        "Procedural Generation", "Performance Optimization", "Real-time Rendering"
      ]
    },
    {
      title: "3D Art",
      skills: [
        "Blender", "Substance Painter", "Marvelous Designer", "ZBrush", "Character Creator 4", "iClone 8",
        "Procedural Modeling", "Texture Baking", "Rigging", "Animation", "Asset Pipeline Development"
      ]
    },
    {
      title: "AI & Automation",
      skills: [
        "ComfyUI", "AI Pipelines", "API Integrations", "N8N Automation", "AI Agents", "Machine Learning",
        "Neural Networks", "Automated Workflows", "Content Generation", "AI-Assisted Creation"
      ]
    },
    {
      title: "Programming",
      skills: [
        "Python", "Scripting for Automation", "Tool Creation"
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 md:mb-16 slide-up">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6">
            Technical <span className="text-gradient">Skills</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
            A comprehensive toolkit spanning web development, game technology, and creative software
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div 
              key={category.title}
              className="card-elegant"
              style={{ animationDelay: `${categoryIndex * 0.2}s` }}
            >
              <h3 className="text-xl font-semibold mb-6 text-center text-gradient">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skill}
                    variant="secondary"
                    className="hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                    style={{ animationDelay: `${(categoryIndex * 0.2) + (skillIndex * 0.05)}s` }}
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mb-12 md:mb-16 slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-6 md:mb-8">
            Core <span className="text-gradient">Expertise</span>
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-12 md:mb-16">
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-primary mb-2">PCG</div>
              <p className="text-sm md:text-base text-muted-foreground">Procedural Content Generation</p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-primary mb-2">VAT</div>
              <p className="text-sm md:text-base text-muted-foreground">Vertex Animation Textures</p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-primary mb-2">Shaders</div>
              <p className="text-sm md:text-base text-muted-foreground">Custom Shader Development</p>
            </div>
            <div className="text-center">
              <div className="text-xl md:text-2xl font-bold text-primary mb-2">AI Tools</div>
              <p className="text-sm md:text-base text-muted-foreground">AI-Assisted Pipelines</p>
            </div>
          </div>
          
          <div className="grid grid-cols-3 gap-4 md:gap-8">
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">5+</div>
              <p className="text-sm md:text-base text-muted-foreground">Years Experience</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">30+</div>
              <p className="text-sm md:text-base text-muted-foreground">Projects Completed</p>
            </div>
            <div className="text-center">
              <div className="text-2xl md:text-3xl font-bold text-primary">50+</div>
              <p className="text-sm md:text-base text-muted-foreground">Technologies Mastered</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}