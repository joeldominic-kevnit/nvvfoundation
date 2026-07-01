'use client';

import React, { useEffect, useRef, useState } from 'react';
import styles from './TimelineCard.module.css';

interface TimelineCardProps {
  num: string;
  title: string;
  desc: string;
  icon: React.ReactNode;
  isLast: boolean;
  isEven: boolean;
  delay?: number;
}

export default function TimelineCard({
  num,
  title,
  desc,
  icon,
  isLast,
  isEven,
  delay = 0,
}: TimelineCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (
      typeof window === 'undefined' ||
      window.matchMedia('(prefers-reduced-motion: reduce)').matches
    ) {
      setRevealed(true);
      node.style.setProperty('--card-glow', '1');
      return;
    }

    // One-time entrance reveal
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setRevealed(true);
          obs.unobserve(entry.target);
        }
      },
      { threshold: 0.2, rootMargin: '0px 0px -5% 0px' },
    );
    obs.observe(node);

    // Continuous scroll-driven glow — peaks when the card center sits at the
    // viewport's centre, fades to 0 when it's near the viewport edges.
    let raf = 0;
    const update = () => {
      const rect = node.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      const vh = window.innerHeight;
      const viewportCenter = vh / 2;
      const dist = Math.abs(cardCenter - viewportCenter);
      // Falloff: full glow at center, zero at 55% of viewport from center.
      const linear = Math.max(0, 1 - dist / (vh * 0.55));
      // Smoothstep for a more pronounced peak.
      const eased = linear * linear * (3 - 2 * linear);
      node.style.setProperty('--card-glow', eased.toFixed(3));
    };
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      obs.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`${styles.step} ${isEven ? styles.stepLeft : styles.stepRight} ${revealed ? styles.revealed : ''}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Connector */}
      <div className={styles.connector}>
        <div className={styles.dot}>
          <span className={styles.dotPulse} aria-hidden />
          <span className={styles.dotNum}>{num}</span>
        </div>
        {!isLast && <div className={styles.line} />}
      </div>

      {/* Card */}
      <div className={styles.card}>
        <span className={styles.cardGrid} aria-hidden />
        <span className={styles.cardOrb} aria-hidden />
        <span className={styles.cardSweep} aria-hidden />
        <span className={styles.cardCorner} aria-hidden />

        <div className={styles.iconWrap}>
          <span className={styles.iconRing1} aria-hidden />
          <span className={styles.iconRing2} aria-hidden />
          <span className={styles.iconGlow} aria-hidden />
          <span className={styles.iconInner}>{icon}</span>
        </div>

        <div className={styles.content}>
          <span className={styles.stepLabel}>
            <span className={styles.stepLabelDot} aria-hidden />
            Step {num}
          </span>
          <h3 className={styles.title}>{title}</h3>
          <p className={styles.desc}>{desc}</p>
          <span className={styles.progressTrack} aria-hidden>
            <span className={styles.progressFill} aria-hidden />
          </span>
        </div>
      </div>
    </div>
  );
}
