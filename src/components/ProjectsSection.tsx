import { ExternalLink, Github } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'NOTIVA_DOCS',
      status: 'DEPLOYED',
      description: 'Upload handwritten notes, organize by subjects, and access them anywhere. Automatically convert images to PDFs with smart processing.',
      image: '/notiva1.jpg',
      tech: ['React', 'TypeScript', 'Next.js', 'Supabase'],
      demoUrl: 'https://notiva-docs.vercel.app/',
      githubUrl: 'https://github.com/Parmatma11/NotivaDocs',
      featured: true
    },
    {
      id: 2,
      title: 'PG_DUNIYA',
      status: 'DEPLOYED',
      description: 'A comprehensive platform for students to find and book PG accommodations with verified listings.',
      image: '/pg.jpg',
      tech: ['Next.js', 'Node.js', 'React', 'MongoDB', 'TypeScript'],
      demoUrl: 'https://pg-duniya.vercel.app/',
      githubUrl: 'https://github.com/Parmatma11/PG-Duniya',
      featured: true
    },
    {
      id: 3,
      title: 'CODESAGE',
      status: 'DEPLOYED',
      description: 'AI-powered code analyzer that provides suggestions for improvement using Gemini Pro.',
      image: '/codesage.png',
      tech: ['Next.js', 'React', 'Supabase', 'Gemini Pro', 'PostgreSQL'],
      demoUrl: 'https://codesage-chi.vercel.app/',
      githubUrl: 'https://github.com/Parmatma11/AI-Analyzer',
      featured: true
    },
    {
      id: 4,
      title: 'LINGOVITA',
      status: 'DEPLOYED',
      description: 'Web application that helps users learn foreign languages with interactive lessons.',
      image: '/lingovita.png',
      tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
      demoUrl: 'https://lingovanta.vercel.app/',
      githubUrl: 'https://github.com/Parmatma11/french-institute',
      featured: true
    },
    {
      id: 5,
      title: 'AsyncStandup AI',
      status: 'DEPLOYED',
      description: 'AI-powered standup assistant that helps teams stay organized and productive.',
      image: '/asyncstandup.png',
      tech: ['Next.js', 'React', 'Open AI', 'Supabase', 'PostgreSQL'],
      demoUrl: 'https://asyncstandup-chi.vercel.app/',
      githubUrl: 'https://github.com/Parmatma11',
      featured: true
    },
  ];

  return (
    <section id="projects" className="py-24 relative overflow-hidden scanlines">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="font-mono font-bold text-4xl md:text-5xl tracking-wider uppercase glow-text mb-4">
            {'>'} // DEPLOYED_MISSIONS
          </h2>
          <div className="w-32 h-[1px] bg-phosphor/50 shadow-[0_0_10px_rgba(0,255,65,0.3)]" />
          <p className="font-mono text-sm text-silver/60 mt-4 max-w-lg">
            Showcasing innovative solutions that push the boundaries of technology
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.id}
              className="terminal-container group hover:border-phosphor/50 transition-all duration-75"
            >
              {/* Terminal Header */}
              <div className="terminal-header flex items-center justify-between">
                <span>[{project.title}] — STATUS: {project.status}</span>
                {project.featured && (
                  <span className="bg-amber-term text-black px-2 py-0.5 text-[10px] font-bold tracking-wider"
                    style={{ borderRadius: '1px' }}
                  >
                    FEATURED
                  </span>
                )}
              </div>

              {/* Project Image */}
              <div className="relative h-44 bg-surface-2 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-150"
                  style={{ filter: 'hue-rotate(90deg) saturate(0.3) brightness(0.7)' }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                {/* Green scanline overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-phosphor/5 to-surface-2/80" />
                <div className="absolute inset-0" style={{
                  background: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,255,65,0.03) 2px, rgba(0,255,65,0.03) 4px)'
                }} />
              </div>

              {/* Project Content */}
              <div className="terminal-body">
                <p className="font-mono text-xs text-silver/70 mb-4 leading-relaxed">
                  <span className="text-silver/30">// </span>{project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-1 text-phosphor/70 border border-phosphor/20 bg-surface-0 tracking-wider"
                      style={{ borderRadius: '1px' }}
                    >
                      [{tech}]
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    className="flex-1 btn-terminal btn-terminal-primary text-[10px] py-2 flex items-center justify-center gap-2"
                    onClick={() => window.open(project.demoUrl, '_blank')}
                  >
                    <ExternalLink className="w-3 h-3" />
                    LIVE_DEMO →
                  </button>
                  <button
                    className="btn-terminal btn-terminal-secondary text-[10px] py-2 px-4 flex items-center justify-center"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Projects */}
        <div className="text-center mt-12">
          <button
            className="btn-terminal btn-terminal-secondary text-xs"
            onClick={() => window.open('https://github.com/Parmatma11/', '_blank')}
          >
            [ VIEW_ALL_PROJECTS → github.com/Parmatma11 ]
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;