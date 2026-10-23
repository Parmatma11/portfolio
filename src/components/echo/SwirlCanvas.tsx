import { useEffect, useRef } from 'react';

/** Procedural swirl + twinkling-star field, evoking Starry Night without reproducing it. */
const SwirlCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    let raf = 0;
    let t = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const hash = (i: number) => {
      const x = Math.sin(i * 12.9898) * 43758.5453;
      return x - Math.floor(x);
    };

    const draw = () => {
      const w = canvas.clientWidth;
      const h = canvas.clientHeight;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = '#0B0D12';
      ctx.fillRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const swirlCount = 5;
      for (let s = 0; s < swirlCount; s++) {
        const baseAngle = t * 0.00025 + (s * Math.PI * 2) / swirlCount;
        const turns = 2.4;
        const pointsN = 120;
        ctx.beginPath();
        for (let i = 0; i <= pointsN; i++) {
          const p = i / pointsN;
          const angle = baseAngle + p * turns * Math.PI * 2;
          const radius = 20 + p * (Math.min(w, h) * 0.46);
          const wobble = Math.sin(p * 9 + t * 0.0008 + s) * 8;
          const x = cx + Math.cos(angle) * radius + wobble;
          const y = cy + Math.sin(angle) * radius * 0.82 + wobble;
          if (i === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = `rgba(237,235,230,${0.05 + s * 0.012})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      for (let i = 0; i < 60; i++) {
        const x = hash(i) * w;
        const y = hash(i + 100) * h;
        const twinkle = 0.3 + 0.3 * Math.sin(t * 0.002 + i);
        const r = 0.6 + hash(i + 200) * 1.2;
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(237,235,230,${Math.max(0, twinkle)})`;
        ctx.fill();
      }

      t += 16;
      if (!prefersReducedMotion) {
        raf = requestAnimationFrame(draw);
      }
    };

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" />;
};

export default SwirlCanvas;
