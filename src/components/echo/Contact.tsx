import { Github, Linkedin, Mail, Phone } from 'lucide-react';
import Reveal from './Reveal';
import { profile } from '@/data/portfolio';

const Contact = () => {
  return (
    <section id="contact" data-theme="dark" className="relative bg-night text-cream py-28 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        <Reveal className="label-mono text-cream/40 mb-6">Got a project in mind?</Reveal>

        <Reveal delay={0.05} as="h2">
          <h2 className="chrome-text font-display font-extrabold uppercase text-[14vw] md:text-[8vw] leading-none mb-10">
            Let&apos;s Talk
          </h2>
        </Reveal>

        <Reveal delay={0.1} className="flex flex-wrap items-center justify-center gap-3 mb-16">
          <a href={profile.github.url} target="_blank" rel="noopener noreferrer" className="pill-outline-light">
            <Github className="w-3.5 h-3.5 mr-2" /> GitHub
          </a>
          <a href={profile.linkedin.url} target="_blank" rel="noopener noreferrer" className="pill-outline-light">
            <Linkedin className="w-3.5 h-3.5 mr-2" /> LinkedIn
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="pill-outline-light">
            <Phone className="w-3.5 h-3.5 mr-2" /> Call
          </a>
          <a href={`mailto:${profile.email}`} className="pill-solid-light">
            <Mail className="w-3.5 h-3.5 mr-2" /> Contact Me
          </a>
        </Reveal>

        <Reveal delay={0.15} className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-10 border-t border-cream/10 label-mono text-cream/40">
          <span>Portfolio. All Rights Reserved.</span>
          <span>{profile.location}</span>
          <span>Design &amp; Code by {profile.name}</span>
        </Reveal>
      </div>
    </section>
  );
};

export default Contact;
