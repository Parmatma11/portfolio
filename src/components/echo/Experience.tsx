import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { experienceStages } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const Experience = () => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return;

    const ctx = gsap.context(() => {
      const getScrollAmount = () => track.scrollWidth - window.innerWidth;

      gsap.to(track, {
        x: () => -getScrollAmount(),
        ease: 'none',
        scrollTrigger: {
          trigger: wrapper,
          start: 'top top',
          end: () => `+=${getScrollAmount()}`,
          scrub: 1,
          pin: true,
          invalidateOnRefresh: true,
          onUpdate: (self) => setProgress(self.progress),
        },
      });
    }, wrapper);

    return () => ctx.revert();
  }, []);

  const activeIndex = progress < 0.5 ? 0 : 1;

  return (
    <section id="experience" data-theme="dark" className="relative bg-night-2 text-cream">
      <div ref={wrapperRef} className="relative h-screen w-full overflow-hidden">
        <div className="absolute top-8 left-6 md:left-12 z-20 label-mono text-cream/40">
          Foundation &amp; Journey
        </div>

        <div ref={trackRef} className="flex h-full w-max will-change-transform">
          {experienceStages.map((stage) => (
            <div
              key={stage.tab}
              className="relative h-full w-screen shrink-0 flex items-center px-6 md:px-20 overflow-hidden"
            >
              <span className="absolute inset-0 flex items-center justify-center text-center ghost-text text-cream text-[20vw] leading-none px-4">
                {stage.tab}
              </span>

              <div className="relative z-10 max-w-xl">
                <div className="label-mono text-cream/40 mb-4">
                  {stage.period} — {stage.eyebrow}
                </div>
                <h3 className="font-display font-extrabold uppercase text-4xl md:text-6xl leading-[0.95] mb-6">
                  {stage.title}
                </h3>
                <p className="text-sm md:text-base text-cream/60 leading-relaxed mb-10 max-w-md">
                  {stage.description}
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  {stage.milestones.map((m) => (
                    <div key={m.label}>
                      <div className="label-mono text-cream/40 mb-2">{m.label}</div>
                      <p className="text-xs text-cream/70 leading-relaxed">{m.text}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 left-6 right-6 md:left-12 md:right-12 z-20 flex items-center gap-6">
          {experienceStages.map((stage, i) => (
            <span
              key={stage.tab}
              className={`label-mono transition-colors duration-300 ${
                activeIndex === i ? 'text-cream' : 'text-cream/30'
              }`}
            >
              {stage.tab}
            </span>
          ))}
          <div className="flex-1 h-px bg-cream/15 relative overflow-hidden">
            <div
              className="absolute inset-y-0 left-0 bg-cream"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
