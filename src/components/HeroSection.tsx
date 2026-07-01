import React from 'react';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import styles from './HeroSection.module.css';

const lineOne = ['Becoming', 'a', 'doctor'];
const lineTwo = ['begins', 'with', 'the'];

const marqueeItems = [
  'Georgia',
  'Uzbekistan',
  'India',
  'Russia',
  'Egypt',
  'Vietnam',
  'Georgia',
  'Uzbekistan',
  'India',
  'Russia',
  'Egypt',
  'Vietnam',
];

const HeroSection = () => {
  return (
    <section className={styles.hero} aria-label="Study medicine abroad with NVVF">
      <div className={styles.bg} aria-hidden>
        <div className={styles.bgImage} />
        <div className={styles.bgVeil} />
        <div className={styles.bgGrid} />
        <div className={styles.bgGrain} />
      </div>

      <div className={`container ${styles.container}`}>
        <div className={styles.meta}>
          <span className={styles.metaItem} style={{ animationDelay: '80ms' }}>
            <span className={styles.metaKey}>Edition</span> 2026
          </span>
          <span className={styles.metaItem} style={{ animationDelay: '180ms' }}>
            <span className={styles.metaKey}>Office</span> Bengaluru, India
          </span>
          <span className={styles.metaItem} style={{ animationDelay: '280ms' }}>
            <span className={styles.metaKey}>Practice since</span> 2012
          </span>
          <span className={`${styles.metaItem} ${styles.metaCount}`} style={{ animationDelay: '380ms' }}>
            <span className={styles.metaDot} aria-hidden />
            Applications open
          </span>
        </div>

        <p className={styles.kicker}>
          <span className={styles.kickerRule} aria-hidden />
          An admissions advisory for medicine, abroad.
        </p>

        <h1 className={styles.title}>
          <span className={styles.titleLine}>
            {lineOne.map((w, i) => (
              <span key={i} className={styles.word}>
                <span
                  className={styles.wordInner}
                  style={{ animationDelay: `${380 + i * 90}ms` }}
                >
                  {w}
                </span>
              </span>
            ))}
          </span>
          <span className={styles.titleLine}>
            {lineTwo.map((w, i) => (
              <span key={i} className={styles.word}>
                <span
                  className={styles.wordInner}
                  style={{ animationDelay: `${660 + i * 90}ms` }}
                >
                  {w}
                </span>
              </span>
            ))}
            <span className={styles.word}>
              <em
                className={`${styles.wordInner} ${styles.italic}`}
                style={{ animationDelay: '960ms' }}
              >
                right&nbsp;address.
              </em>
            </span>
          </span>
        </h1>

        <p className={styles.subtitle}>
          We place Indian students into NMC- and WHO-recognised medical
          universities &mdash; with a focused practice in{' '}
          <strong>Georgia</strong> and <strong>Uzbekistan</strong>, two
          destinations we know intimately, from Tbilisi to Tashkent.
        </p>

        <div className={styles.actions}>
          <Link href="/apply" className={`btn ${styles.cta}`}>
            <span>Apply Now</span>
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </Link>
          <Link href="/contact" className={styles.ghost}>
            Book a consultation
          </Link>
        </div>

        <dl className={styles.stats}>
          <div className={styles.stat}>
            <dt>Since</dt>
            <dd>2012</dd>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.stat}>
            <dt>Students placed</dt>
            <dd>400<span className={styles.statSuffix}>+</span></dd>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.stat}>
            <dt>Partner universities</dt>
            <dd>15<span className={styles.statSuffix}>+</span></dd>
          </div>
          <div className={styles.statDivider} aria-hidden />
          <div className={styles.stat}>
            <dt>Featured</dt>
            <dd className={styles.statFeatured}>
              <span aria-hidden>&#127468;&#127466;</span>
              <span aria-hidden>&#127482;&#127487;</span>
            </dd>
          </div>
        </dl>

        <footer className={styles.bar}>
          <span className={styles.barLabel}>Also placing students in</span>
          <div className={styles.marqueeMask} aria-hidden>
            <div className={styles.marqueeTrack}>
              <ul className={styles.marquee}>
                {marqueeItems.map((c, i) => (
                  <li key={i}>
                    <span className={styles.marqueeDot} />
                    {c}
                  </li>
                ))}
              </ul>
              <ul className={styles.marquee}>
                {marqueeItems.map((c, i) => (
                  <li key={`dup-${i}`}>
                    <span className={styles.marqueeDot} />
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </footer>
      </div>

    </section>
  );
};

export default HeroSection;
