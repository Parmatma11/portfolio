import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skills = [
    { name: 'React/Next.js', level: 95, color: 'from-primary to-neon-cyan' },
    { name: 'TypeScript', level: 90, color: 'from-secondary to-neon-purple' },
    { name: 'Node.js', level: 88, color: 'from-accent to-neon-pink' },
    { name: 'Python', level: 85, color: 'from-neon-green to-primary' },
    { name: 'AWS/Cloud', level: 82, color: 'from-neon-orange to-secondary' },
    { name: 'UI/UX Design', level: 80, color: 'from-neon-purple to-accent' },
  ];

  const technologies = [
    'ReactJS', 'React Native', 'Next.js', 'TypeScript', 'Java', 'OOPS', 
    'Node.js', 'JavaScript', 'MySql', 'MongoDB', 'SQL', 'REST APIs',
    'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'HTML/CSS', 'Collection',
    
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden" ref={sectionRef}>
      <div className="absolute inset-0 particles opacity-30" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6 gradient-text">
            Skills & Expertise
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Constantly evolving my toolkit to stay at the forefront of technology
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Technology Stack */}
          <div className="space-y-8">
            <h3 className="font-orbitron font-bold text-2xl mb-8 gradient-text-secondary">
              Technology Stack
            </h3>
            <div className="glass p-8 rounded-2xl border border-primary/10">
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="glass p-3 rounded-lg border border-secondary/10 text-center text-sm font-medium text-foreground hover:border-primary/30 hover:scale-105 transition-all duration-300 cursor-pointer group"
                    style={{
                      animationDelay: `${index * 0.05}s`
                    }}
                  >
                    <span className="group-hover:gradient-text transition-all duration-300">
                      {tech}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="space-y-8">
            <h3 className="font-orbitron font-bold text-2xl mb-8 gradient-text-secondary">
              Certifications & Achievements
            </h3>
            <div className="space-y-4">
              {[
                'AWS Certified Solutions Architect',
                'Google Cloud Professional Developer',
                'Meta Frontend Developer Certificate'
              ].map((cert, index) => (
                <div 
                  key={cert}
                  className="flex items-center space-x-3 glass p-4 rounded-lg border border-accent/10 hover:border-accent/30 transition-all duration-300"
                >
                  <div className="w-2 h-2 bg-gradient-to-r from-accent to-secondary rounded-full" />
                  <span className="text-foreground font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;