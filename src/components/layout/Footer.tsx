import { Github, Linkedin, Mail } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 border-t border-border py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="text-center md:text-left">
            <div className="text-xl font-bold text-gradient mb-2">
              Ben Goldberger
            </div>
            <p className="text-muted-foreground text-sm">
              © {currentYear} Ben Goldberger. Built with React & Tailwind CSS.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label="GitHub Profile"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="mailto:ben@example.com"
              className="p-2 rounded-lg text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors duration-200"
              aria-label="Email Contact"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* Quick Navigation */}
        <div className="mt-8 pt-8 border-t border-border">
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              About
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Skills
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Projects
            </a>
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors duration-200">
              Contact
            </a>
          </nav>
        </div>
      </div>
    </footer>
  );
}