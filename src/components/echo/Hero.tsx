import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { profile } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

type HeroProps = {
  startAnimation: boolean;
};

const Hero = ({ startAnimation }: HeroProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const line1Ref = useRef<HTMLSpanElement>(null);
  const line2WrapRef = useRef<HTMLDivElement>(null);
  const orbRef = useRef<HTMLDivElement>(null);
  const metaRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!startAnimation || hasAnimated.current) return;
    hasAnimated.current = true;

    const tl = gsap.timeline({ delay: 0.1 });
    tl.fromTo(line1Ref.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' })
      .fromTo(line2WrapRef.current, { y: 60, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9, ease: 'power3.out' }, '-=0.7')
      .fromTo(orbRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' }, '-=0.6')
      .fromTo(metaRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
  }, [startAnimation]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        [line1Ref.current, line2WrapRef.current],
        { y: 0, opacity: 1 },
        {
          y: -60,
          opacity: 0.2,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
      gsap.fromTo(
        orbRef.current,
        { y: 0, scale: 1 },
        {
          y: -40,
          scale: 0.9,
          scrollTrigger: {
            trigger: section,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const section = sectionRef.current;
    const orb = orbRef.current;
    if (!section || !orb) return;

    const quickX = gsap.quickTo(orb, 'x', { duration: 0.6, ease: 'power3.out' });
    const quickY = gsap.quickTo(orb, 'y', { duration: 0.6, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      const rect = section.getBoundingClientRect();
      const relX = (e.clientX - rect.left) / rect.width - 0.5;
      const relY = (e.clientY - rect.top) / rect.height - 0.5;
      quickX(relX * 30);
      quickY(relY * 30);
    };

    section.addEventListener('mousemove', onMove);
    return () => section.removeEventListener('mousemove', onMove);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="home"
      data-theme="light"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-cream px-6"
    >
      <div className="relative z-20 text-center">
        <h1 className="font-display font-extrabold uppercase leading-[0.88] tracking-tight text-[15vw] sm:text-[13vw] lg:text-[11.5vw]">
          <span ref={line1Ref} className="block text-ink">
            Explore My
          </span>
          <div ref={line2WrapRef} className="relative inline-block">
            <span
              className="block bg-clip-text text-transparent"
              style={{
                backgroundImage: 'linear-gradient(180deg, #111111 0%, #111111 35%, #9a9a94 100%)',
              }}
            >
              Portfolio
            </span>
          </div>
        </h1>
      </div>

      <div className="absolute z-0 top-[74%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[58vw] max-w-[460px] max-h-[520px] pointer-events-none">
        <div ref={orbRef} className="w-full h-full animate-float">
          <img
            src="/krishan-hero.jpg"
            alt={profile.name}
            className="w-full h-full object-cover"
            style={{
              filter: 'grayscale(100%) contrast(1.15)',
              WebkitMaskImage:
                'radial-gradient(ellipse 62% 78% at 50% 36%, black 48%, transparent 92%)',
              maskImage:
                'radial-gradient(ellipse 62% 78% at 50% 36%, black 48%, transparent 92%)',
            }}
          />
        </div>
      </div>

      <div
        ref={metaRef}
        className="absolute bottom-10 left-0 right-0 px-6 md:px-12 flex items-end justify-between z-10"
      >
        <span className="label-mono text-ink/60">
          Developer Est. {profile.establishedYear}
        </span>
        <div className="text-right max-w-[220px]">
          <p className="text-xs md:text-sm text-ink/70 leading-relaxed mb-3">
            {profile.tagline}
          </p>
          <div className="flex flex-col items-end gap-1">
            {profile.heroTags.map((tag) => (
              <span key={tag} className="label-mono text-ink/50">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
