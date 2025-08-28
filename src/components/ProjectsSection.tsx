import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github, Play } from 'lucide-react';

const ProjectsSection = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Analytics Dashboard',
      description: 'A comprehensive dashboard that uses machine learning to provide real-time business insights with predictive analytics.',
      image: '/placeholder-project-1.jpg',
      tech: ['React', 'TypeScript', 'Python', 'TensorFlow', 'AWS'],
      category: 'fullstack',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/project',
      featured: true
    },
    {
      id: 2,
      title: 'Blockchain Trading Platform',
      description: 'Secure cryptocurrency trading platform with real-time market data, advanced charting, and portfolio management.',
      image: '/placeholder-project-2.jpg',
      tech: ['Next.js', 'Node.js', 'Solidity', 'Web3', 'PostgreSQL'],
      category: 'blockchain',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/project',
      featured: true
    },
    {
      id: 3,
      title: 'AR Shopping Experience',
      description: 'Augmented reality mobile app that allows users to visualize furniture and decor in their own space before purchasing.',
      image: '/placeholder-project-3.jpg',
      tech: ['React Native', 'ARKit', 'Three.js', 'Firebase', 'Stripe'],
      category: 'mobile',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/project',
      featured: false
    },
    {
      id: 4,
      title: 'Social Media Analytics Tool',
      description: 'Comprehensive social media management platform with AI-driven content recommendations and performance analytics.',
      image: '/placeholder-project-4.jpg',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
      category: 'frontend',
      demoUrl: 'https://demo.example.com',
      githubUrl: 'https://github.com/example/project',
      featured: false
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full Stack' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'mobile', label: 'Mobile' },
    { id: 'blockchain', label: 'Blockchain' }
  ];

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-5" />
      
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-orbitron font-bold text-4xl md:text-5xl lg:text-6xl mb-6 gradient-text">
            Featured Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
          <p className="text-lg text-muted-foreground mt-6 max-w-2xl mx-auto">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <Button
              key={category.id}
              variant={selectedCategory === category.id ? "default" : "outline"}
              onClick={() => setSelectedCategory(category.id)}
              className={`glass transition-all duration-300 ${
                selectedCategory === category.id
                  ? 'bg-gradient-to-r from-primary to-secondary text-primary-foreground glow-primary'
                  : 'border-primary/20 text-primary hover:bg-primary/10'
              }`}
            >
              {category.label}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`glass rounded-2xl border border-primary/10 overflow-hidden hover:border-primary/30 transition-all duration-500 hover:scale-105 group ${
                project.featured ? 'md:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-primary/20 to-secondary/20 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-secondary/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <Play className="w-16 h-16 text-primary/50 group-hover:text-primary transition-colors duration-300" />
                </div>
                {project.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-accent to-secondary px-3 py-1 rounded-full text-xs font-semibold text-primary-foreground">
                    Featured
                  </div>
                )}
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="font-orbitron font-bold text-xl mb-3 text-foreground group-hover:gradient-text transition-all duration-300">
                  {project.title}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-muted/20 rounded-full text-xs font-medium text-foreground border border-primary/10"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <Button
                    size="sm"
                    className="flex-1 bg-gradient-to-r from-primary to-secondary hover:from-primary/80 hover:to-secondary/80 text-primary-foreground"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="glass border-secondary/20 text-secondary hover:bg-secondary/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Projects */}
        <div className="text-center mt-12">
          <Button
            size="lg"
            variant="outline"
            className="glass border-primary/30 text-primary hover:bg-primary/10 px-8 py-4"
            onClick={() => window.open('https://github.com', '_blank')}
          >
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;