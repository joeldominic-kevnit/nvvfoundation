'use client';

import { useEffect, useRef, type ReactNode } from 'react';

interface Props {
  children: ReactNode;
  className?: string;
}

export default function TimelineProgress({ children, className }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      el.style.setProperty('--timeline-progress', '1');
      return;
    }

    let raf = 0;
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;

      // The trace starts filling when the top of the timeline reaches ~70%
      // down the viewport, and is complete when the bottom of the timeline
      // passes ~30% down the viewport.
      const start = vh * 0.7;       // top distance at which progress = 0
      const end = vh * 0.3 - rect.height; // top distance at which progress = 1
      const span = start - end;
      const t = span === 0 ? 1 : (start - rect.top) / span;
      const clamped = Math.max(0, Math.min(1, t));
      el.style.setProperty('--timeline-progress', clamped.toFixed(3));
    };

    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
