import { Code, Palette, Zap, Cpu } from 'lucide-react';

export function TechArt() {
  const specializations = [
    {
      icon: Code,
      title: "Procedural Generation",
      description: "Building PCG systems for terrain, assets, and content that scale from indie to AAA production",
      examples: ["Unreal Engine PCG", "Unity Procedural Tools", "Custom Generation Algorithms"]
    },
    {
      icon: Palette,
      title: "Shader Development",
      description: "Creating real-time material systems, effects, and visual pipelines for interactive experiences",
      examples: ["HLSL/GLSL", "Shader Graph", "Material Systems", "VFX Shaders"]
    },
    {
      icon: Zap,
      title: "Performance Optimization",
      description: "Optimizing real-time rendering, asset pipelines, and tool performance for production workflows",
      examples: ["LOD Systems", "Culling", "Memory Management", "GPU Optimization"]
    },
    {
      icon: Cpu,
      title: "AI Integration",
      description: "Building AI-assisted content creation pipelines and automation tools for creative teams",
      examples: ["ComfyUI Integration", "N8N Automation", "Custom AI APIs", "Workflow Optimization"]
    }
  ];

  const tools = [
    "Unreal Engine 5", "Unity", "Blender", "Substance Painter", "ZBrush", "ComfyUI", "N8N"
  ];

  return (
    <section id="tech-art" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Tech Art</span> Expertise
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Specialized in procedural tools, real-time rendering, and AI-assisted content creation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Main Content */}
          <div className="space-y-6 slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I specialize in building the tools and systems that power modern content creation. 
              From procedural generation pipelines to real-time shader systems, I create solutions 
              that bridge the gap between engineering and artistic vision.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My work spans Unity and Unreal Engine, where I develop PCG systems, VAT pipelines, 
              camera systems, and material workflows that enable teams to create more content, faster.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I also build AI-assisted automation tools using ComfyUI, N8N, and custom APIs, 
              helping creative teams accelerate their workflows and focus on what matters most.
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-2 gap-4">
            {tools.map((tool, index) => (
              <div 
                key={tool}
                className="card-elegant text-center p-4"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="font-medium text-primary">{tool}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Specializations Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {specializations.map((spec, index) => (
            <div 
              key={spec.title}
              className="card-elegant p-6"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 rounded-xl bg-primary/10">
                  <spec.icon className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{spec.title}</h3>
                  <p className="text-muted-foreground mb-4">{spec.description}</p>
                  <div className="space-y-1">
                    {spec.examples.map((example, exampleIndex) => (
                      <div key={exampleIndex} className="text-sm text-primary/80">
                        • {example}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

