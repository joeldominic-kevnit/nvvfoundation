'use client';

import { useEffect, useRef, useState, type CSSProperties, type ReactNode } from 'react';

type Direction = 'up' | 'down' | 'left' | 'right' | 'none';

interface RevealProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  direction?: Direction;
  distance?: number;
  threshold?: number;
  once?: boolean;
  as?: keyof React.JSX.IntrinsicElements;
  className?: string;
  style?: CSSProperties;
}

const offsetFor = (direction: Direction, distance: number) => {
  switch (direction) {
    case 'up': return `translate3d(0, ${distance}px, 0)`;
    case 'down': return `translate3d(0, -${distance}px, 0)`;
    case 'left': return `translate3d(${distance}px, 0, 0)`;
    case 'right': return `translate3d(-${distance}px, 0, 0)`;
    default: return 'none';
  }
};

export default function Reveal({
  children,
  delay = 0,
  duration = 900,
  direction = 'up',
  distance = 28,
  threshold = 0.15,
  once = true,
  as = 'div',
  className,
  style,
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const node = ref.current;
    if (!node) return;

    if (
      typeof IntersectionObserver === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setVisible(true);
      return;
    }

    // If the element is already in view at mount, show immediately.
    const rect = node.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setVisible(true);
      if (once) return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            setVisible(true);
            if (once) obs.unobserve(e.target);
          } else if (!once) {
            setVisible(false);
          }
        }
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    obs.observe(node);

    // Safety: if anything blocks the observer (extensions, errors),
    // reveal the content after a generous timeout so it can't be permanently hidden.
    const failsafe = window.setTimeout(() => setVisible(true), 2500);

    return () => {
      obs.disconnect();
      window.clearTimeout(failsafe);
    };
  }, [threshold, once]);

  const Tag = as as any;
  const computed: CSSProperties = {
    opacity: visible ? 1 : 0,
    transform: visible ? 'none' : offsetFor(direction, distance),
    filter: visible ? 'blur(0)' : 'blur(6px)',
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1) ${delay}ms, filter ${duration}ms ease ${delay}ms`,
    willChange: 'opacity, transform, filter',
    ...style,
  };

  return (
    <Tag ref={ref} className={className} style={computed}>
      {children}
    </Tag>
  );
}
