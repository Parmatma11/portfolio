import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const fullText = "Full Stack Developer";
  
  useEffect(() => {
    let currentIndex = 0;
    const typingInterval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setDisplayText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(typingInterval);
      }
    }, 100);

    return () => clearInterval(typingInterval);
  }, []);

  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="absolute inset-0 particles" />
      
      {/* Floating Geometric Shapes */}
      <div className="absolute top-20 left-10 w-20 h-20 border border-primary/30 rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-16 h-16 border border-secondary/30 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-12 h-12 border border-accent/30 rotate-45 animate-float" style={{ animationDelay: '4s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up">
          <div className="inline-block mb-6">
            <div className="glass px-6 py-2 rounded-full text-sm font-medium text-primary border border-primary/20">
              👋 Welcome to my digital realm
            </div>
          </div>

          <h1 className="font-orbitron font-black text-5xl md:text-7xl lg:text-8xl mb-6 leading-tight">
            <span className="block gradient-text">Krishan</span>
            <span className="block gradient-text-secondary">Kaushik</span>
          </h1>

          <div className="mb-8">
            <div className="font-orbitron text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
              {displayText}
              <span className="animate-pulse text-primary">|</span>
            </div>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Crafting immersive digital experiences with cutting-edge technology. 
              Passionate about creating the future, one line of code at a time.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground font-semibold px-8 py-4 glow-primary animate-glow-pulse"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="glass border-primary/30 text-primary hover:bg-primary/10 font-semibold px-8 py-4"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>

          <div className="flex items-center justify-center space-x-6">
            <a 
              href="https://github.com" 
              className="p-3 glass rounded-full border border-primary/20 text-primary hover:bg-primary/10 transition-all duration-300 hover:scale-110 glow-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              className="p-3 glass rounded-full border border-secondary/20 text-secondary hover:bg-secondary/10 transition-all duration-300 hover:scale-110 glow-secondary"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:alex@example.com" 
              className="p-3 glass rounded-full border border-accent/20 text-accent hover:bg-accent/10 transition-all duration-300 hover:scale-110 glow-accent"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>

        <button 
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary hover:text-secondary transition-colors duration-300 animate-bounce"
        >
          <ArrowDown className="w-6 h-6" />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;