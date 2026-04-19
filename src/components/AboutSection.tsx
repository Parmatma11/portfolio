import { Code, Rocket, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      cmd: '> CLEAN_CODE',
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Rocket,
      cmd: '> INNOVATION',
      description: "Constantly exploring new technologies and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      cmd: '> COLLABORATION',
      description: "Working seamlessly with teams to deliver exceptional user experiences."
    },
    {
      icon: Zap,
      cmd: '> PERFORMANCE',
      description: "Optimizing applications for speed, accessibility, and user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden scanlines">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono font-bold text-4xl md:text-5xl tracking-wider uppercase glow-text mb-4">
            {'>'} ABOUT_ME
          </h2>
          <div className="w-32 h-[1px] bg-phosphor/50 shadow-[0_0_10px_rgba(0,255,65,0.3)]" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left Column: Profile Terminal */}
          <div className="space-y-6">
            <div className="terminal-container">
              <div className="terminal-header">
                [PROFILE.md]
              </div>
              <div className="terminal-body space-y-4">
                <p className="font-mono text-sm text-silver/80 leading-relaxed">
                  <span className="text-silver/40">// Bio</span>
                  <br />
                  With over 1 year of experience in full-stack development, I specialize in creating
                  immersive web applications that blend cutting-edge technology with exceptional user experience.
                  My passion lies in transforming complex problems into elegant, intuitive solutions.
                </p>
                <p className="font-mono text-sm text-silver/80 leading-relaxed">
                  <span className="text-silver/40">// Interests</span>
                  <br />
                  When I'm not coding, you'll find me exploring the latest in AI, contributing to open-source
                  projects, or experimenting with new frameworks. I believe in continuous learning and staying
                  ahead of the technological curve.
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="terminal-container">
                <div className="terminal-body text-center py-5">
                  <div className="font-mono font-bold text-3xl text-phosphor glow-text mb-1">7+</div>
                  <div className="font-mono text-[10px] text-silver/50 tracking-widest uppercase">PROJECTS_COMPLETED</div>
                </div>
              </div>
              <div className="terminal-container">
                <div className="terminal-body text-center py-5">
                  <div className="font-mono font-bold text-3xl text-cyan-term glow-text-cyan mb-1">1+</div>
                  <div className="font-mono text-[10px] text-silver/50 tracking-widest uppercase">YEARS_ACTIVE</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Highlight Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <div
                key={highlight.cmd}
                className="terminal-container group hover:border-phosphor/50 transition-all duration-75"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="terminal-body">
                  <div className="w-10 h-10 border border-phosphor/30 flex items-center justify-center mb-4 group-hover:border-phosphor/60 group-hover:shadow-[0_0_15px_rgba(0,255,65,0.2)] transition-all duration-75"
                    style={{ borderRadius: '2px' }}
                  >
                    <highlight.icon className="w-5 h-5 text-phosphor" />
                  </div>
                  <h4 className="font-mono font-bold text-sm mb-2 text-phosphor tracking-wider">
                    {highlight.cmd}
                  </h4>
                  <p className="font-mono text-xs text-silver/60 leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;