import { Code, Coffee, Heart, Zap } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable solutions"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing for speed and efficiency"
    },
    {
      icon: Heart,
      title: "User-Centric",
      description: "Designing with empathy and purpose"
    },
    {
      icon: Coffee,
      title: "Continuous Learning",
      description: "Always exploring new technologies"
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm a passionate full-stack developer with a love for creating digital experiences 
            that combine beautiful design with robust functionality.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              With over 5 years of experience in web development, I specialize in building 
              modern applications using React, Node.js, and cloud technologies. My journey 
              began with a fascination for how code can solve real-world problems.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              I believe in the power of collaboration and user-centered design. Whether I'm 
              working with a team or flying solo, my goal is always to deliver solutions 
              that not only meet technical requirements but also provide exceptional user experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              When I'm not coding, you'll find me exploring new technologies, contributing to 
              open-source projects, or sharing knowledge with the developer community.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-elegant text-center group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="mb-4 flex justify-center">
                  <div className="p-3 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}