import { ArrowDown, Github, Linkedin, Mail, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ThreeBackground } from '@/components/effects/ThreeBackground';
import { TypewriterText } from '@/components/effects/TypewriterText';
import { motion } from 'framer-motion';
import { use3DTilt } from '@/hooks/use3DTilt';
import heroBg from '@/assets/hero-bg.jpg';
import webVideo from '@/assets/Video/Web.mp4';

export function Hero() {

  const typewriterTexts = [
    "Tech Artist", 
    "AI Developer",
    "Entrepreneur",
    "Animator",
    "Procedural Tool Creator",
    "3D Asset Developer",
    "Environment Artist",
    "Unreal Engine Specialist",
    "Full-Stack Developer",
    "User-Focused Design",
    "Continuous Learning",
    "Tech + Art",
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background */}
      <ThreeBackground />
      
      {/* Matrix Rain Effect */}
      <div className="absolute inset-0 matrix-bg z-5" />
      
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-100"
      >
        <source src={webVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      
      {/* Cyberpunk Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-background/70 via-background/70 to-background/90 z-10" />
      
      {/* Scanning Lines */}
      <div className="absolute inset-0 z-15 scan-line opacity-10" />
      
      {/* Content */}
      <div className="relative z-20 text-center max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="tilt-3d"
        >
                     <motion.h1 
             className="text-5xl md:text-8xl font-bold mb-6 tracking-tight"
             initial={{ scale: 0.8 }}
             animate={{ scale: 1 }}
             transition={{ duration: 1.2, ease: "easeOut" }}
           >
             <span className="text-gradient md:glitch" data-text="Ben Goldberger">
               Ben Goldberger
             </span>
           </motion.h1>
          
          <motion.div 
            className="text-xl md:text-3xl text-neon mb-6 font-medium min-h-[2em]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            <TypewriterText 
              texts={typewriterTexts}
              speed={80}
              deleteSpeed={40}
              pauseTime={2000}
              glitch={true}
              className="font-tech"
            />
          </motion.div>
          
          <motion.p 
            className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            Blending tech, art, and product vision to create experiences that inspire
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3, duration: 0.8 }}
          >
            {/* <Button size="lg" className="power-up neon-glow group">
              <Mail className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              Initialize Contact
            </Button> */}
            {/* <Button variant="outline" size="lg" className="power-up holographic border-primary/30">
              Access Portfolio
            </Button> */}
          </motion.div>
          
          {/* Social Links */}
          <motion.div 
            className="flex items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.6, duration: 0.8 }}
          >
            {[ 
              { href: "https://github.com/bengold1999", icon: Github, label: "GitHub Profile" },
              { href: "https://cara.app/bengold1999", icon: Palette , label: "Artstation Profile" },
              { href: "https://www.linkedin.com/in/ben-goldberger-290b8b23a/", icon: Linkedin, label: "LinkedIn Profile" },
              { href: "mailto:bengold1999@gmail.com", icon: Mail, label: "Email Contact" }
            ].map(({ href, icon: Icon, label }, index) => (
              <motion.a
                key={label}
                href={href}
                className="text-muted-foreground hover:text-primary transition-all duration-300 power-up"
                aria-label={label}
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.8 + index * 0.1 }}
              >
                <Icon className="h-12 w-12" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="h-6 w-6 text-primary neon-glow" />
      </motion.div>
    </section>
  );
}