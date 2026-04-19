import { useState, useEffect, useRef } from 'react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const technologies = [
    'ReactJS', 'React Native', 'Next.js', 'TypeScript', 'Java', 'OOPS',
    'Node.js', 'JavaScript', 'MySQL', 'MongoDB', 'SQL', 'REST APIs',
    'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'HTML/CSS',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" className="py-24 relative overflow-hidden scanlines" ref={sectionRef}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono font-bold text-4xl md:text-5xl tracking-wider uppercase glow-text mb-4">
            // SKILLS_AND_EXPERTISE
          </h2>
          <div className="w-32 h-[1px] bg-phosphor/50 shadow-[0_0_10px_rgba(0,255,65,0.3)]" />
          <p className="font-mono text-sm text-silver/60 mt-4 max-w-lg">
            Constantly evolving my toolkit to stay at the forefront of technology
          </p>
        </div>

        {/* Full-width Technology Stack */}
        <div className="max-w-3xl">
          <div className="terminal-container">
            <div className="terminal-header">
              [TECH_STACK.json]
            </div>
            <div className="terminal-body">
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {technologies.map((tech, index) => (
                  <div
                    key={tech}
                    className="tech-tag text-center"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transition: `opacity 0.3s ease ${index * 0.05}s`
                    }}
                  >
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;