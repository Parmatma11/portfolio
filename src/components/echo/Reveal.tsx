import { useEffect, useRef, type ReactNode } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  as?: 'div' | 'span' | 'h2' | 'h3' | 'p';
};

const Reveal = ({ children, className, delay = 0, y = 40, as = 'div' }: RevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const Tag = as as 'div';

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        { opacity: 0, y },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }, el);

    return () => ctx.revert();
  }, [delay, y]);

  return (
    <Tag ref={ref} className={className}>
      {children}
    </Tag>
  );
};

export default Reveal;
