import { useState, useEffect } from 'react';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const [displayText, setDisplayText] = useState('');
  const [showCursor, setShowCursor] = useState(true);
  const [bootLines, setBootLines] = useState<string[]>([]);
  const fullText = "Full_Stack_Developer";

  const bootSequence = [
    "[SYS] Initializing kernel...",
    "[SYS] Loading modules...",
    "[OK] Network interface online",
    "[OK] Portfolio engine v2.0 loaded",
    "> SYSTEM ONLINE — OPERATOR ACTIVE",
  ];

  useEffect(() => {
    // Boot sequence animation
    bootSequence.forEach((line, index) => {
      setTimeout(() => {
        setBootLines(prev => [...prev, line]);
      }, index * 200);
    });

    // Typing animation after boot
    const startTyping = setTimeout(() => {
      let currentIndex = 0;
      const typingInterval = setInterval(() => {
        if (currentIndex <= fullText.length) {
          setDisplayText(fullText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);
      return () => clearInterval(typingInterval);
    }, bootSequence.length * 200 + 500);

    // Cursor blink
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => {
      clearTimeout(startTyping);
      clearInterval(cursorInterval);
    };
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden scanlines">
      {/* Floating geometric shapes */}
      <div className="absolute top-20 left-10 w-16 h-16 border border-phosphor/20 rotate-45 animate-float" />
      <div className="absolute top-40 right-20 w-12 h-12 border border-cyan-term/20 rotate-12 animate-float" style={{ animationDelay: '2s' }} />
      <div className="absolute bottom-40 left-20 w-8 h-8 border border-amber-term/20 rotate-45 animate-float" style={{ animationDelay: '4s' }} />
      <div className="absolute top-60 right-40 w-6 h-6 border-2 border-phosphor/15 animate-float" style={{ animationDelay: '3s' }} />

      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="animate-slide-up max-w-4xl mx-auto">

          {/* Boot Sequence Lines */}
          <div className="mb-8 text-left max-w-lg mx-auto space-y-1 min-h-[120px]">
            {bootLines.map((line, i) => (
              <div
                key={i}
                className={`font-mono text-xs animate-boot-line ${line.startsWith('[OK]') ? 'text-phosphor/70' :
                    line.startsWith('[SYS]') ? 'text-silver/40' :
                      'text-phosphor glow-text'
                  }`}
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Main Name */}
          <h1 className="font-mono font-extrabold text-6xl md:text-8xl lg:text-9xl mb-4 leading-none tracking-tight">
            <span className="block text-phosphor glow-text animate-text-glow-pulse">KRISHAN</span>
            <span className="block text-phosphor glow-text animate-text-glow-pulse" style={{ animationDelay: '0.5s' }}>KAUSHIK</span>
          </h1>

          {/* Typing Line */}
          <div className="mb-8">
            <div className="font-mono text-xl md:text-2xl lg:text-3xl font-medium text-phosphor/90 tracking-wider">
              <span className="text-cyan-term">{'> '}</span>
              {displayText}
              <span className={`text-phosphor ml-1 ${showCursor ? 'opacity-100' : 'opacity-0'}`}>▊</span>
            </div>
            <p className="font-mono text-sm md:text-base text-silver/70 max-w-xl mx-auto leading-relaxed mt-4">
              Crafting immersive digital experiences with cutting-edge technology.
              Passionate about creating the future, one line of code at a time.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <button
              className="btn-terminal btn-terminal-primary animate-glow-pulse"
              onClick={() => scrollToSection('projects')}
            >
              [ VIEW_PROJECTS ]
            </button>
            <button
              className="btn-terminal btn-terminal-secondary"
              onClick={() => scrollToSection('contact')}
            >
              [ INIT_CONTACT ]
            </button>
          </div>

          {/* Social Links as Terminal Commands */}
          <div className="space-y-2 text-left max-w-md mx-auto">
            <a
              href="https://github.com/Parmatma11/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-xs text-silver/50 hover:text-phosphor transition-colors duration-75 group"
            >
              <span className="text-cyan-term">$</span>
              <span>git remote -v</span>
              <span className="text-silver/30">→</span>
              <Github className="w-3.5 h-3.5 text-phosphor/50 group-hover:text-phosphor" />
              <span className="text-phosphor/70 group-hover:text-phosphor">github.com/Parmatma11</span>
            </a>
            <a
              href="https://www.linkedin.com/in/krishan-kaushik-8b2518232/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 font-mono text-xs text-silver/50 hover:text-phosphor transition-colors duration-75 group"
            >
              <span className="text-cyan-term">$</span>
              <span>ln -s</span>
              <span className="text-silver/30">→</span>
              <Linkedin className="w-3.5 h-3.5 text-cyan-term/50 group-hover:text-cyan-term" />
              <span className="text-cyan-term/70 group-hover:text-cyan-term">linkedin.com/in/krishan-kaushik</span>
            </a>
            <a
              href="mailto:krishankaushik1002@gmail.com"
              className="flex items-center gap-3 font-mono text-xs text-silver/50 hover:text-phosphor transition-colors duration-75 group"
            >
              <span className="text-cyan-term">$</span>
              <span>mail</span>
              <span className="text-silver/30">→</span>
              <Mail className="w-3.5 h-3.5 text-amber-term/50 group-hover:text-amber-term" />
              <span className="text-amber-term/70 group-hover:text-amber-term">krishankaushik1002@gmail.com</span>
            </a>
          </div>
        </div>

        {/* Scroll Down */}
        {/* <button
          onClick={() => scrollToSection('about')}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-phosphor/50 hover:text-phosphor transition-colors duration-150 flex flex-col items-center gap-1"
        >
          <span className="font-mono text-[10px] tracking-widest uppercase">{`> scroll_down`}</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </button> */}
      </div>
    </section>
  );
};

export default HeroSection;