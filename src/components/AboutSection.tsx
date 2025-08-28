import { Code, Rocket, Users, Zap } from 'lucide-react';

const AboutSection = () => {
  const highlights = [
    {
      icon: Code,
      title: "Clean Code",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: Rocket,
      title: "Innovation",
      description: "Constantly exploring new technologies and pushing the boundaries of what's possible."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Working seamlessly with teams to deliver exceptional user experiences."
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Optimizing applications for speed, accessibility, and user satisfaction."
    }
  ];

  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-10" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6 gradient-text">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <div className="glass p-8 rounded-2xl border border-primary/10">
              <h3 className="font-orbitron font-bold text-2xl md:text-3xl mb-6 gradient-text-secondary">
                Crafting Digital Excellence
              </h3>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6">
                With over 5 years of experience in full-stack development, I specialize in creating 
                immersive web applications that blend cutting-edge technology with exceptional user experience. 
                My passion lies in transforming complex problems into elegant, intuitive solutions.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                When I'm not coding, you'll find me exploring the latest in AI, contributing to open-source 
                projects, or experimenting with new frameworks. I believe in continuous learning and staying 
                ahead of the technological curve.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="glass p-6 rounded-xl border border-secondary/10 text-center">
                <div className="font-orbitron font-bold text-3xl gradient-text mb-2">50+</div>
                <div className="text-sm text-muted-foreground">Projects Completed</div>
              </div>
              <div className="glass p-6 rounded-xl border border-accent/10 text-center">
                <div className="font-orbitron font-bold text-3xl gradient-text mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <div 
                key={highlight.title} 
                className="glass p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all duration-300 hover:scale-105 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="w-12 h-12 bg-gradient-to-br from-primary to-secondary rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                  <highlight.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h4 className="font-orbitron font-bold text-lg mb-3 text-foreground">
                  {highlight.title}
                </h4>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {highlight.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;