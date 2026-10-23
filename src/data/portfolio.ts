export const profile = {
  name: 'Krishan Kaushik',
  initials: 'KK',
  role: 'Full-Stack Developer',
  tagline: "I'm passionate about building web apps that stand out from the crowd.",
  establishedYear: 2024,
  email: 'krishankaushik1002@gmail.com',
  phone: '+91 9350160150',
  location: 'New Delhi, India',
  github: { url: 'https://github.com/Parmatma11/', label: 'github.com/Parmatma11' },
  linkedin: { url: 'https://www.linkedin.com/in/krishan-kaushik-8b2518232/', label: 'linkedin.com/in/krishan-kaushik' },
  bio: [
    "With over 1 year of experience in full-stack development, I specialize in creating immersive web applications that blend cutting-edge technology with exceptional user experience. My passion lies in transforming complex problems into elegant, intuitive solutions.",
    "When I'm not coding, you'll find me exploring the latest in AI, contributing to open-source projects, or experimenting with new frameworks. I believe in continuous learning and staying ahead of the technological curve.",
  ],
  stats: [
    { value: '7+', label: 'Projects Completed' },
    { value: '1+', label: 'Years Active' },
  ],
  heroTags: ['FULL-STACK', 'REACT / NEXT.JS', 'AI APPS'],
  missionStatement: 'Turning complex problems into elegant, intuitive solutions.',
  shortBio: 'I specialize in building full-stack web apps where clean engineering meets thoughtful UX — creating products with real, measurable impact.',
  disciplineTags: ['Full-Stack', 'React / Next.js', 'Node.js', 'AI Apps'],
};

export const technologies = [
  'ReactJS', 'React Native', 'Next.js', 'TypeScript', 'Java', 'OOPS',
  'Node.js', 'JavaScript', 'MySQL', 'MongoDB', 'SQL', 'REST APIs',
  'Tailwind CSS', 'Git', 'GitHub', 'Postman', 'HTML/CSS',
];

export type Project = {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export const projects: Project[] = [
  {
    id: 1,
    title: 'Notiva Docs',
    category: 'Smart Notes & Document Platform',
    description: 'Upload handwritten notes, organize by subjects, and access them anywhere. Automatically convert images to PDFs with smart processing.',
    image: '/notiva1.jpg',
    tech: ['React', 'TypeScript', 'Next.js', 'Supabase'],
    demoUrl: 'https://notiva-docs.vercel.app/',
    githubUrl: 'https://github.com/Parmatma11/NotivaDocs',
  },
  {
    id: 2,
    title: 'PG Duniya',
    category: 'Student Housing Marketplace',
    description: 'A comprehensive platform for students to find and book PG accommodations with verified listings.',
    image: '/pg.jpg',
    tech: ['Next.js', 'Node.js', 'React', 'MongoDB', 'TypeScript'],
    demoUrl: 'https://pg-duniya.vercel.app/',
    githubUrl: 'https://github.com/Parmatma11/PG-Duniya',
  },
  {
    id: 3,
    title: 'CodeSage',
    category: 'AI Code Analysis Tool',
    description: 'AI-powered code analyzer that provides suggestions for improvement using Gemini Pro.',
    image: '/codesage.png',
    tech: ['Next.js', 'React', 'Supabase', 'Gemini Pro', 'PostgreSQL'],
    demoUrl: 'https://codesage-chi.vercel.app/',
    githubUrl: 'https://github.com/Parmatma11/AI-Analyzer',
  },
  {
    id: 4,
    title: 'LingoVita',
    category: 'Language Learning Platform',
    description: 'Web application that helps users learn foreign languages with interactive lessons.',
    image: '/lingovita.png',
    tech: ['Next.js', 'React', 'Supabase', 'PostgreSQL'],
    demoUrl: 'https://lingovanta.vercel.app/',
    githubUrl: 'https://github.com/Parmatma11/french-institute',
  },
  {
    id: 5,
    title: 'AsyncStandup AI',
    category: 'AI Standup Assistant',
    description: 'AI-powered standup assistant that helps teams stay organized and productive.',
    image: '/asyncstandup.png',
    tech: ['Next.js', 'React', 'Open AI', 'Supabase', 'PostgreSQL'],
    demoUrl: 'https://asyncstandup-chi.vercel.app/',
    githubUrl: 'https://github.com/Parmatma11',
  },
];

export const experienceStages = [
  {
    period: '2023 — 2024',
    eyebrow: 'Self-Directed Learning',
    title: 'Full-Stack Foundations',
    description: 'Intensive self-education period exploring web technologies, creative coding, and modern development practices.',
    tab: 'LEARNING',
    milestones: [
      {
        label: 'Milestone 01',
        text: 'Built strong fundamentals in Java, OOPS, and data structures & algorithms.',
      },
      {
        label: 'Milestone 02',
        text: 'Mastered React, Next.js, and the modern TypeScript ecosystem.',
      },
      {
        label: 'Milestone 03',
        text: 'Learned SQL, MongoDB, and REST API design end-to-end.',
      },
    ],
  },
  {
    period: '2024 — Present',
    eyebrow: 'Freelance & Building',
    title: 'Full-Stack Developer',
    description: 'Shipping interactive frontends, scalable backends, and AI-powered applications for real users.',
    tab: 'BUILDING',
    milestones: [
      {
        label: 'Milestone 01',
        text: 'Delivered 7+ projects across diverse domains, from EdTech to real estate.',
      },
      {
        label: 'Milestone 02',
        text: 'Integrated AI features using Gemini Pro and OpenAI into production apps.',
      },
      {
        label: 'Milestone 03',
        text: 'Deployed with Supabase, PostgreSQL, and Vercel for reliable, scalable infra.',
      },
    ],
  },
];

export const services = [
  {
    number: '01',
    title: 'Full-Stack Web Apps',
    description: 'End-to-end web applications built with React, Next.js, and Node.js — from database design to polished UI.',
    deliverables: 'React/Next.js frontend, Node.js backend, database schema, deployment',
  },
  {
    number: '02',
    title: 'React / Next.js Frontends',
    description: 'Fast, responsive, and accessible interfaces using React, TypeScript, and Tailwind CSS.',
    deliverables: 'Component library, responsive layouts, TypeScript, Tailwind CSS',
  },
  {
    number: '03',
    title: 'REST API & Database Design',
    description: 'Well-structured REST APIs backed by MongoDB, MySQL, or PostgreSQL with clean data modeling.',
    deliverables: 'REST API, database schema, auth, Postman collection',
  },
  {
    number: '04',
    title: 'AI-Powered Features',
    description: 'Integrating AI capabilities like smart analysis, chat, and automation using Gemini Pro and OpenAI.',
    deliverables: 'AI integration, prompt design, API wiring, testing',
  },
];
