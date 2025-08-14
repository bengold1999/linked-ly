import { Brain, Code, Coffee, Gift, Heart, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

export function About() {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const photos = [
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_37131a5a.jpg",
      alt: "Ben Goldberger - Professional portrait",
      caption: "Professional & Artistic"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_2653c402.jpg",
      alt: "Ben Goldberger - Creative expression",
      caption: "Creative & Passionate"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_4812d32b.jpg",
      alt: "Ben Goldberger - Dynamic personality",
      caption: "Energetic & Dynamic"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_e7b1684e.jpg",
      alt: "Ben Goldberger - Innovative mindset",
      caption: "Innovative & Bold"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_8a267fea.jpg",
      alt: "Ben Goldberger - Versatile creator",
      caption: "Versatile & Confident"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_4571c509.jpg",
      alt: "Ben Goldberger - Ambitious professional",
      caption: "Ambitious & Powerful"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_33267cf1.jpg",
      alt: "Ben Goldberger - Focused determination",
      caption: "Focused & Determined"
    },
    {
      src: "/src/assets/WhatsApp Image 2025-08-14 at 14.59.16_0a942aea.jpg",
      alt: "Ben Goldberger - Approachable professional",
      caption: "Approachable & Professional"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      if (!isHovered) {
        setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
      }
    }, 3000);
    return () => clearInterval(timer);
  }, [photos.length, isHovered]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev + 1) % photos.length);
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) => (prev - 1 + photos.length) % photos.length);
  };

  const highlights = [
    {
      icon: Code,
      title: "Tech + Art",
      description: "Blending engineering with visual direction for interactive media"
    },
    {
      icon: Zap,
      title: "AI-Driven Solutions",
      description: "Building intelligent pipelines and automations that accelerate creativity"
    },
    {
      icon: Heart,
      title: "Player/User Focused",
      description: "Designing tools and experiences that empower creators and users"
    },
    {
      icon: Coffee,
      title: "Entrepreneurial Vision",
      description: "Turning innovative ideas into impactful, real-world products"
    },
    {
      icon: Brain,
      title: "Continuous Learning",
      description: "Exploring AI, proceduralism, and modern web stacks"
    },
    {
      icon: Gift,
      title: "Creative Expression",
      description: "Bringing imagination to life through technology and art"
    }
  ];

  return (
    <section id="about" className="py-20 px-6 relative overflow-hidden">
      <div className="container mx-auto max-w-6xl relative z-30">
        <div className="text-center mb-16 slide-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="text-gradient">Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            I'm Ben Goldberger — a passionate developer, tech artist, and creative entrepreneur 
            who blends engineering, art, and storytelling into interactive experiences
          </p>
        </div>

        {/* Main Photo Carousel - Centered and Prominent */}
        <div className="text-center mb-16 slide-up">
          <h3 className="text-2xl md:text-3xl font-bold mb-8">
            Creative <span className="text-gradient">Expression</span>
          </h3>
          
          {/* Horizontal Tiny Photo Carousel */}
          <div className="relative max-w-6xl mx-auto overflow-visible">
            <div className="flex space-x-6 animate-scroll">
              {photos.map((photo, index) => (
                <div
                  key={index}
                  className={`flex-shrink-0 transition-all duration-500 ${
                    index === currentPhotoIndex 
                      ? 'scale-110 ring-2 ring-primary z-10' 
                      : 'scale-100 opacity-80 hover:opacity-100'
                  }`}
                  onClick={() => setCurrentPhotoIndex(index)}
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-2 border-white/30 cursor-pointer hover:scale-105 transition-transform duration-200 bg-gray-100">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  {/* Tiny Caption */}
                  <p className="text-xs text-center mt-3 text-muted-foreground max-w-24 truncate">
                    {photo.caption}
                  </p>
                </div>
              ))}
              {/* Duplicate photos for seamless loop */}
              {photos.map((photo, index) => (
                <div
                  key={`duplicate-${index}`}
                  className="flex-shrink-0 transition-all duration-500 opacity-80"
                >
                  <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden shadow-lg border-2 border-white/30 bg-gray-100">
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.currentTarget as HTMLImageElement;
                        target.style.display = 'none';
                      }}
                    />
                  </div>
                  <p className="text-xs text-center mt-3 text-muted-foreground max-w-24 truncate">
                    {photo.caption}
                  </p>
                </div>
              ))}
            </div>
            
            {/* Current Photo Caption */}
            {/* <div className="mt-8 text-center">
              <p className="text-lg font-semibold text-primary bg-white/90 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg inline-block">
                {photos[currentPhotoIndex].caption}
              </p>
            </div> */}

            {/* Navigation Dots */}
            {/* <div className="flex justify-center mt-6 space-x-2">
              {photos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentPhotoIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentPhotoIndex 
                      ? 'bg-primary scale-125 ring-2 ring-primary/30' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                  aria-label={`Go to photo ${index + 1}`}
                />
              ))}
            </div> */}
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <div className="space-y-6 slide-up">
            <p className="text-lg leading-relaxed text-muted-foreground">
              I bring both technical expertise and entrepreneurial vision, with strong creative thinking and strategic skills in AI, 
              constantly exploring new ideas and turning them into impactful products that merge technology with artistic innovation.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              My expertise covers frontend & backend development, game tech, AI-driven solutions, and technical art. 
              On the web side, I work with React, Angular, Vue, TypeScript, and Node.js to build performant, scalable products 
              that deliver exceptional user experiences.
            </p>
            
            <p className="text-lg leading-relaxed text-muted-foreground">
              In game development, I specialize in procedural tools (PCG), VAT pipelines, shaders, camera systems, and Unity & Unreal Engine workflows. 
              I also build AI-assisted pipelines using ComfyUI, N8N, custom APIs, and Python scripting, accelerating content creation and iteration for teams.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              In 3D art, I work with Blender, Substance Painter, ZBrush, and Character Creator 4, crafting procedural asset creation pipelines 
              and texture authoring workflows that scale from indie projects to enterprise production.
            </p>

            <p className="text-lg leading-relaxed text-muted-foreground">
              Beyond technical skills, I value continuous learning, player/user-focused design, and the power of merging tech + art 
              to create innovative solutions with real-world impact. Every project is an opportunity to push boundaries and deliver experiences that matter.
            </p>
          </div>

          {/* Highlights Grid */}
          <div className="grid grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div 
                key={item.title}
                className="card-elegant text-center group hover:scale-105 transition-transform duration-300"
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