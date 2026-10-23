import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { profile } from '@/data/portfolio';

type PreloaderProps = {
  onComplete: () => void;
};

/** Catmull-Rom spline through points, converted to a closed cubic-bezier SVG path. */
const closedSplinePath = (points: [number, number][]) => {
  const p = points;
  const n = p.length;
  const get = (i: number) => p[(i + n) % n];
  let d = `M ${p[0][0]},${p[0][1]} `;
  for (let i = 0; i < n; i++) {
    const p0 = get(i - 1);
    const p1 = get(i);
    const p2 = get(i + 1);
    const p3 = get(i + 2);
    const c1x = p1[0] + (p2[0] - p0[0]) / 6;
    const c1y = p1[1] + (p2[1] - p0[1]) / 6;
    const c2x = p2[0] - (p3[0] - p1[0]) / 6;
    const c2y = p2[1] - (p3[1] - p1[1]) / 6;
    d += `C ${c1x},${c1y} ${c2x},${c2y} ${p2[0]},${p2[1]} `;
  }
  return d + 'Z';
};

const wobblyCirclePath = () => {
  const steps = 16;
  const cx = 120;
  const cy = 120;
  const baseR = 92;
  const points: [number, number][] = [];
  for (let i = 0; i < steps; i++) {
    const theta = (i / steps) * Math.PI * 2;
    const r = baseR + Math.sin(theta * 5) * 7 + Math.sin(theta * 2.3) * 4;
    points.push([cx + Math.cos(theta) * r, cy + Math.sin(theta) * r]);
  }
  return closedSplinePath(points);
};

const Preloader = ({ onComplete }: PreloaderProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const [pathD] = useState(wobblyCirclePath);
  const [skip] = useState(
    () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );

  useEffect(() => {
    if (skip) {
      onComplete();
      return;
    }

    document.body.style.overflow = 'hidden';

    const path = pathRef.current;
    const text = textRef.current;
    const container = containerRef.current;
    if (!path || !text || !container) return;

    const length = path.getTotalLength();
    gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });
    gsap.set(text, { opacity: 0, scale: 0.85 });

    const tl = gsap.timeline({
      onComplete: () => {
        document.body.style.overflow = '';
        onComplete();
      },
    });

    tl.to(path, { strokeDashoffset: 0, duration: 1.3, ease: 'power2.inOut' })
      .to(text, { opacity: 1, scale: 1, duration: 0.6, ease: 'power3.out' }, '-=0.5')
      .to({}, { duration: 0.5 })
      .to(container, { yPercent: -100, duration: 0.9, ease: 'power3.inOut' });

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (skip) return null;

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-night flex items-center justify-center"
    >
      <div className="relative w-56 h-56 md:w-72 md:h-72">
        <svg viewBox="0 0 240 240" className="absolute inset-0 w-full h-full">
          <path
            ref={pathRef}
            d={pathD}
            fill="none"
            stroke="#EDEBE6"
            strokeWidth={1.5}
            style={{ filter: 'drop-shadow(0 0 6px rgba(237,235,230,0.4))' }}
          />
        </svg>
        <div
          ref={textRef}
          className="absolute inset-0 flex items-center justify-center"
        >
          <span
            className="font-display font-extrabold text-3xl md:text-4xl tracking-[0.35em] text-cream pl-[0.35em]"
            style={{ textShadow: '0 0 20px rgba(237,235,230,0.5)' }}
          >
            {profile.initials}
          </span>
        </div>
      </div>
    </div>
  );
};

export default Preloader;
