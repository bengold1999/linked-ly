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
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Skills</span> & Technologies
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A diverse toolkit built through years of hands-on experience and continuous learning
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

        {/* Tech Art Showcase */}
        {/* <div className="mt-20 text-center slide-up">
          <h3 className="text-3xl font-bold mb-8">
            <span className="text-gradient">Tech Art</span> Specializations
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            <div className="card-elegant p-6">
              <div className="text-2xl font-bold text-primary mb-2">PCG</div>
              <div className="text-sm text-muted-foreground">Procedural Content Generation</div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-2xl font-bold text-primary mb-2">VAT</div>
              <div className="text-sm text-muted-foreground">Vertex Animation Textures</div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-2xl font-bold text-primary mb-2">Shaders</div>
              <div className="text-sm text-muted-foreground">Real-time Material Systems</div>
            </div>
            <div className="card-elegant p-6">
              <div className="text-2xl font-bold text-primary mb-2">AI Tools</div>
              <div className="text-sm text-muted-foreground">ComfyUI & Automation</div>
            </div>
          </div>
        </div> */}

        {/* Skills Summary */}
        {/* <div className="mt-16 text-center slide-up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">5+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">30+</div>
              <div className="text-muted-foreground">Technologies</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-primary">50+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
}