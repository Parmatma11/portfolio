import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import SwirlCanvas from './SwirlCanvas';
import { profile } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const pinRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLSpanElement>(null);
  const meRef = useRef<HTMLSpanElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const pin = pinRef.current;
    const about = aboutRef.current;
    const me = meRef.current;
    const card = cardRef.current;
    const content = contentRef.current;
    if (!pin || !about || !me || !card || !content) return;

    const ctx = gsap.context(() => {
      // Both words must travel the same absolute distance so they exit the
      // frame symmetrically — "ABOUT" is much wider than "ME", so a percentage
      // offset (relative to each word's own width) would move "ME" far less.
      const travel = pin.offsetWidth * 0.68;

      // Start: "ABOUT" / "ME" stacked as two lines, centered directly over the box.
      gsap.set(about, { xPercent: -50, yPercent: -108, x: 0 });
      gsap.set(me, { xPercent: -50, yPercent: 8, x: 0 });
      gsap.set(card, { scale: 0.32 });
      gsap.set(content, { opacity: 0 });

      gsap.timeline({
        scrollTrigger: {
          trigger: pin,
          start: 'top top',
          end: '+=140%',
          scrub: 1,
          pin: true,
        },
      })
        // Mid-scroll: the stacked words sweep apart diagonally, clear off the screen edges.
        .to(about, { x: -travel, yPercent: -50, ease: 'none', duration: 1 }, 0)
        .to(me, { x: travel, yPercent: -50, ease: 'none', duration: 1 }, 0)
        .to(card, { scale: 1, ease: 'none', duration: 1 }, 0)
        .to(content, { opacity: 1, ease: 'none', duration: 0.35 }, 0.6);
    }, pin);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" data-theme="dark" className="relative bg-night text-cream">
      <div ref={pinRef} className="relative h-screen w-full overflow-hidden flex items-center justify-center">
        <SwirlCanvas />

        <div className="absolute inset-0 pointer-events-none z-20">
          <span
            ref={aboutRef}
            className="absolute left-1/2 top-1/2 whitespace-nowrap font-display font-extrabold uppercase text-[16vw] md:text-[11vw] leading-none text-cream/90"
          >
            About
          </span>
          <span
            ref={meRef}
            className="absolute left-1/2 top-1/2 whitespace-nowrap font-display font-extrabold uppercase text-[16vw] md:text-[11vw] leading-none text-cream/90"
          >
            Me
          </span>
        </div>

        <div
          ref={cardRef}
          className="relative z-10 w-[90vw] max-w-5xl h-[70vh] rounded-lg border border-cream/15 bg-[#12151d] overflow-hidden"
          style={{ boxShadow: '0 0 90px rgba(0,0,0,0.6)' }}
        >
          {/* light beam */}
          <div
            className="absolute -top-20 right-16 w-40 h-[200%] opacity-70 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, rgba(237,235,230,0.9), rgba(237,235,230,0.15) 60%, transparent 85%)',
              transform: 'rotate(18deg)',
              filter: 'blur(12px)',
            }}
          />
          {/* falling figure */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative w-10 h-14 animate-fall-drift">
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(237,235,230,1), rgba(237,235,230,0.25) 60%, transparent 80%)',
                  filter: 'blur(1.5px)',
                  boxShadow: '0 0 40px 10px rgba(237,235,230,0.35)',
                }}
              />
            </div>
          </div>

          {/* real content panel, fades in once the card has expanded */}
          <div
            ref={contentRef}
            className="relative z-10 h-full flex flex-col justify-between p-6 md:p-10"
          >
            <div className="flex items-start justify-between gap-6">
              <h3 className="font-display font-extrabold uppercase text-xl sm:text-2xl md:text-3xl leading-tight max-w-sm">
                {profile.missionStatement}
              </h3>
              <span className="label-mono text-cream/40 whitespace-nowrap">
                Based in {profile.location}
              </span>
            </div>

            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div className="max-w-md">
                <div className="label-mono text-cream/40 mb-2">Discipline &amp; Craft</div>
                <div className="label-mono text-cream/70 mb-4">
                  {profile.disciplineTags.join(' • ')}
                </div>
                <p className="text-xs md:text-sm text-cream/60 leading-relaxed">
                  {profile.shortBio}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="pill-solid-light"
                >
                  Get In Touch
                </button>
                <button
                  onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
                  className="pill-outline-light"
                >
                  Services
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
