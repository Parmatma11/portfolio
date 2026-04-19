import { useState, useEffect } from 'react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }

      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT' },
    { id: 'skills', label: 'SKILLS' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'contact', label: 'CONTACT' },
  ];

  return (
    <nav className={`fixed top-0 w-full z-40 transition-all duration-150 border-b border-phosphor/15 ${
      scrolled ? 'bg-surface-1/95 backdrop-blur-sm' : 'bg-surface-1/80'
    }`}>
      <div className="container mx-auto px-6 py-3">
        <div className="flex items-center justify-between">
          {/* Terminal Prompt Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-mono font-bold text-sm tracking-wider"
          >
            <span className="text-phosphor glow-text">krishan</span>
            <span className="text-silver">@</span>
            <span className="text-cyan-term">dev</span>
            <span className="text-silver">:~$ </span>
            <span className="text-phosphor animate-cursor-blink">▊</span>
          </button>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`relative px-3 py-1.5 font-mono text-xs font-medium tracking-widest transition-all duration-75 ${
                  activeSection === item.id
                    ? 'bg-phosphor text-black'
                    : 'text-silver/70 hover:text-phosphor hover:bg-phosphor/5'
                }`}
                style={{ borderRadius: '2px' }}
              >
                [{item.label}]
                {activeSection === item.id && (
                  <div className="absolute -bottom-1 left-0 w-full h-[1px] bg-phosphor shadow-[0_0_10px_rgba(0,255,65,0.5)]" />
                )}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <button
            className="btn-terminal btn-terminal-secondary text-xs py-2 px-4"
            onClick={() => scrollToSection('contact')}
          >
            [ LET'S_TALK ]
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;