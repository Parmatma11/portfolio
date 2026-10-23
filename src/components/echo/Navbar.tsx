import { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react';
import { profile } from '@/data/portfolio';

type NavTheme = 'light' | 'dark';

const navItems: { id: string; label: string; theme: NavTheme }[] = [
  { id: 'home', label: 'Home', theme: 'light' },
  { id: 'about', label: 'About', theme: 'dark' },
  { id: 'experience', label: 'Experience', theme: 'dark' },
  { id: 'works', label: 'Works', theme: 'light' },
  { id: 'services', label: 'Services', theme: 'light' },
  { id: 'contact', label: 'Contact', theme: 'dark' },
];

const scrollToSection = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [theme, setTheme] = useState<NavTheme>('light');
  const [hidden, setHidden] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            const item = navItems.find((n) => n.id === id);
            if (item) {
              setActiveSection(id);
              setTheme(item.theme);
            }
          }
        });
      },
      { threshold: 0.5 }
    );

    navItems.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    let lastY = window.scrollY;
    let ticking = false;

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const y = window.scrollY;
        if (y > 120 && y > lastY) {
          setHidden(true);
        } else {
          setHidden(false);
        }
        lastY = y;
        ticking = false;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const isDark = theme === 'dark';

  return (
    <nav
      className={`fixed top-0 w-full z-40 transition-all duration-500 ${
        hidden ? '-translate-y-full' : 'translate-y-0'
      } ${isDark ? 'text-cream' : 'text-ink'}`}
    >
      <div className="container mx-auto px-6 md:px-10 py-5 flex items-center justify-between">
        <button
          onClick={() => scrollToSection('home')}
          className="font-display font-extrabold text-sm tracking-wide"
        >
          {profile.name.split(' ')[0]}
          <span className={isDark ? 'text-cream/50' : 'text-ink/40'}>•</span>
        </button>

        <div className="hidden md:flex items-center gap-7 absolute left-1/2 -translate-x-1/2">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`label-mono relative py-1 transition-opacity duration-300 ${
                activeSection === item.id ? 'opacity-100' : 'opacity-50 hover:opacity-80'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span
                  className={`absolute -bottom-0.5 left-0 right-0 h-px ${
                    isDark ? 'bg-cream' : 'bg-ink'
                  }`}
                />
              )}
            </button>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <a href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <Github className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
          <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <Linkedin className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
          <a href={`mailto:${profile.email}`} aria-label="Email">
            <Mail className="w-4 h-4 opacity-60 hover:opacity-100 transition-opacity" />
          </a>
        </div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-night text-cream px-6 py-8 flex flex-col gap-5">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => {
                scrollToSection(item.id);
                setMobileOpen(false);
              }}
              className="label-mono text-left"
            >
              {item.label}
            </button>
          ))}
          <div className="flex items-center gap-5 pt-2">
            <a href={profile.github.url} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <Github className="w-4 h-4" />
            </a>
            <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <Linkedin className="w-4 h-4" />
            </a>
            <a href={`mailto:${profile.email}`} aria-label="Email">
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
