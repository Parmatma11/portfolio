import Navigation from './Navigation';
import HeroSection from './HeroSection';
import AboutSection from './AboutSection';
import SkillsSection from './SkillsSection';
import ProjectsSection from './ProjectsSection';
import ContactSection from './ContactSection';

const Portfolio = () => {
  return (
    <main className="relative">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="py-8 border-t border-primary/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 Krishan Kaushik. Crafted with passion and cutting-edge technology.
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Portfolio;