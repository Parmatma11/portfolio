import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github } from 'lucide-react';
import { projects } from '@/data/portfolio';

gsap.registerPlugin(ScrollTrigger);

const N = projects.length;
const clamp = (v: number, min: number, max: number) => Math.min(max, Math.max(min, v));

const Works = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [cardSize, setCardSize] = useState({ w: 320, h: 200 });
  const [activeIndex, setActiveIndex] = useState(0);

  const scrollFloat = useRef(0);
  const dragOffset = useRef(0);
  const dragging = useRef(false);
  const dragStartX = useRef(0);
  const dragStartOffset = useRef(0);

  const applyLayout = () => {
    const raw = scrollFloat.current + dragOffset.current;
    const activeFloat = clamp(raw, 0, N - 1);
    const spacing = cardSize.w * 0.62;
    const waveAmplitude = cardSize.h * 0.4;

    projects.forEach((_, i) => {
      const offset = i - activeFloat;
      const absOffset = Math.min(Math.abs(offset), 2.5);

      // Cards travel along a winding S-shaped path, like film through rollers:
      // horizontal position + a vertical sine bob + a gentle in-plane lean that follows the curve.
      const x = offset * spacing;
      const y = Math.sin(offset * (Math.PI / 2)) * waveAmplitude;
      const rotateZ = clamp(-offset * 7, -18, 18);
      const rotateY = clamp(-offset * 32, -64, 64);
      const translateZ = -absOffset * 140;
      const scale = 1 - absOffset * 0.16;
      const opacity = 1 - absOffset * 0.14;
      const zIndex = Math.round(100 - absOffset * 10);

      const el = cardRefs.current[i];
      if (el) {
        el.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${translateZ}px) rotateY(${rotateY}deg) rotateZ(${rotateZ}deg) scale(${Math.max(0.5, scale)})`;
        el.style.opacity = `${Math.max(0.4, opacity)}`;
        el.style.zIndex = `${zIndex}`;
      }
    });

    const nearest = Math.round(activeFloat);
    setActiveIndex((prev) => (prev === nearest ? prev : nearest));
  };

  useEffect(() => {
    const measure = () => {
      const el = cardRefs.current[0];
      if (el) setCardSize({ w: el.offsetWidth, h: el.offsetHeight });
    };
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, []);

  useEffect(() => {
    applyLayout();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSize]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: '+=130%',
        scrub: 1,
        pin: true,
        onUpdate: (self) => {
          scrollFloat.current = self.progress * (N - 1);
          applyLayout();
        },
      });
    }, section);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cardSize]);

  const onPointerDown = (e: React.PointerEvent) => {
    dragging.current = true;
    dragStartX.current = e.clientX;
    dragStartOffset.current = dragOffset.current;
    (e.target as Element).setPointerCapture(e.pointerId);
  };

  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging.current) return;
    const spacing = cardSize.w * 0.62;
    const delta = (e.clientX - dragStartX.current) / spacing;
    dragOffset.current = clamp(dragStartOffset.current - delta, -(N - 1), N - 1);
    applyLayout();
  };

  const onPointerUp = () => {
    dragging.current = false;
    applyLayout();
  };

  const focusCard = (i: number) => {
    if (i === activeIndex) {
      window.open(projects[i].demoUrl, '_blank');
      return;
    }
    const targetDrag = clamp(i - scrollFloat.current, -(N - 1), N - 1);
    const obj = { v: dragOffset.current };
    gsap.to(obj, {
      v: targetDrag,
      duration: 0.7,
      ease: 'power3.out',
      onUpdate: () => {
        dragOffset.current = obj.v;
        applyLayout();
      },
    });
  };

  const active = projects[activeIndex];

  return (
    <section
      id="works"
      data-theme="light"
      ref={sectionRef}
      className="relative bg-cream text-ink min-h-screen flex flex-col items-center justify-center overflow-hidden py-24"
    >
      <div className="absolute bottom-10 left-6 md:left-12 z-20">
        <span className="font-display font-extrabold uppercase text-sm tracking-wide">Selected Work</span>
      </div>

      <div
        ref={trackRef}
        className="relative w-full h-[360px] sm:h-[480px] md:h-[600px] lg:h-[660px] flex items-center justify-center select-none touch-none cursor-grab active:cursor-grabbing"
        style={{ perspective: '1400px' }}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {projects.map((project, i) => (
          <div
            key={project.id}
            ref={(el) => (cardRefs.current[i] = el)}
            onClick={() => focusCard(i)}
            className="absolute top-1/2 left-1/2 w-[260px] h-[164px] sm:w-[420px] sm:h-[264px] md:w-[520px] md:h-[326px] lg:w-[580px] lg:h-[364px] rounded-lg overflow-hidden border border-ink/10 bg-ink/5 cursor-pointer group"
            style={{ filter: 'drop-shadow(0 20px 36px rgba(0,0,0,0.22))' }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-opacity"
              draggable={false}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4 flex items-end justify-between">
              <span className="label-mono text-cream text-xs sm:text-sm">{project.title}</span>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                className="text-cream/80 hover:text-cream"
              >
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 flex flex-col items-center gap-1 text-center z-20">
        <span className="font-display font-bold text-lg">{active.title}</span>
        <span className="text-xs text-ink/50">{active.category}</span>
        <span className="label-mono text-ink/40 mt-2">
          {String(activeIndex + 1).padStart(2, '0')} / {String(N).padStart(2, '0')}
        </span>
      </div>

      <div className="absolute bottom-10 right-6 md:right-12 z-20">
        <span className="label-mono text-ink/40">Scroll or drag to cycle</span>
      </div>
    </section>
  );
};

export default Works;
