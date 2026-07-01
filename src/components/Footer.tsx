'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, ArrowUp, Globe, Share2, Clock } from 'lucide-react';
import styles from './Footer.module.css';

interface FooterProps {
  /**
   * Enables the curtain reveal — footer becomes fixed at the viewport bottom
   * and the page content scrolls over it. Use only on pages tall enough to
   * justify the reveal (typically the home page).
   */
  curtain?: boolean;
}

const Footer = ({ curtain = false }: FooterProps) => {
  const year = new Date().getFullYear();
  const ref = useRef<HTMLElement>(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // When curtain mode is on, publish the footer's height so the curtain
  // wrapper can reserve the right amount of scroll space at every breakpoint.
  useEffect(() => {
    if (!curtain) return;
    const node = ref.current;
    if (!node) return;
    const update = () => {
      document.documentElement.style.setProperty(
        '--footer-height',
        `${node.offsetHeight}px`,
      );
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(node);
    window.addEventListener('resize', update);
    return () => {
      ro.disconnect();
      window.removeEventListener('resize', update);
      document.documentElement.style.removeProperty('--footer-height');
    };
  }, [curtain]);

  return (
    <footer ref={ref} className={`${styles.footer} ${curtain ? styles.curtain : ''}`}>
      <div className={styles.watermark} aria-hidden>NVVF</div>

      <div className={`container ${styles.container}`}>
        {/* Main grid */}
        <div className={styles.mainRow}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.brand}>
              National Videsh<br />
              <em>Vidya Foundation</em>
            </Link>
            <p className={styles.desc}>
              Admissions advisory for Indian students pursuing medicine abroad.
              Specialists in Georgia, Uzbekistan, India, Russia, Egypt, and Vietnam.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Website"><Globe size={16} /></a>
              <a href="#" aria-label="Share"><Share2 size={16} /></a>
            </div>
          </div>

          <div className={styles.linksGrid}>
            <div className={styles.col}>
              <h4 className={styles.heading}>Directory</h4>
              <ul className={styles.list}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/about">About</Link></li>
                <li><Link href="/courses">Courses</Link></li>
                <li><Link href="/blogs">Insights</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.heading}>Destinations</h4>
              <ul className={styles.list}>
                <li><Link href="/courses">Egypt</Link></li>
                <li><Link href="/courses">Georgia</Link></li>
                <li><Link href="/courses">India</Link></li>
                <li><Link href="/courses">Russia</Link></li>
                <li><Link href="/courses">Uzbekistan</Link></li>
                <li><Link href="/courses">Vietnam</Link></li>
              </ul>
            </div>

            <div className={styles.col}>
              <h4 className={styles.heading}>Reach Us</h4>
              <ul className={styles.list}>
                <li className={styles.contactItem}>
                  <MapPin size={14} strokeWidth={1.5} />
                  <span>
                    <strong className={styles.contactCity}>Bangalore</strong><br />
                    Ganesh — <a href="tel:+919844757075">+91 98447 57075</a>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <MapPin size={14} strokeWidth={1.5} />
                  <span>
                    <strong className={styles.contactCity}>Chennai</strong><br />
                    Evangeline Netto — <a href="tel:+918431250540">+91 84312 50540</a>
                  </span>
                </li>
                <li className={styles.contactItem}>
                  <Mail size={14} strokeWidth={1.5} />
                  <span>ganeshcm9@gmail.com</span>
                </li>
                <li className={styles.contactItem}>
                  <Clock size={14} strokeWidth={1.5} />
                  <span>
                    Mon – Sat &nbsp;10:00 am – 6:00 pm<br />
                    <em className={styles.holidayNote}>Closed every Tuesday</em>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom row */}
        <div className={styles.bottomRow}>
          <span className={styles.copy}>&copy; {year} NVV Foundation · Est. 2012</span>
          <button onClick={scrollToTop} className={styles.backToTop} aria-label="Back to top">
            <ArrowUp size={14} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
