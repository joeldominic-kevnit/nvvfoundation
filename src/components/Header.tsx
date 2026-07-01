'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/courses', label: 'Courses' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <>
      <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
        <div className={`container ${styles.container}`}>
          {/* Logo */}
          <Link href="/" className={styles.logoContainer}>
            <Image
              src="/logo.png"
              alt="NVVF"
              width={56}
              height={56}
              className={styles.logo}
            />
            <span className={styles.brand}>
              National Videsh<br />Vidya Foundation
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className={styles.nav}>
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href} className={styles.navLink}>
                <span className={styles.navText}>{link.label}</span>
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile toggle */}
          <div className={styles.actions}>
            <Link href="/apply" className={styles.applyBtn}>
              <span>Apply Now</span>
              <ArrowUpRight size={14} strokeWidth={2} />
            </Link>

            <button
              className={`${styles.burger} ${mobileOpen ? styles.burgerOpen : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
              <span className={styles.burgerLine} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile overlay */}
      <div className={`${styles.mobileOverlay} ${mobileOpen ? styles.mobileOpen : ''}`}>
        <nav className={styles.mobileNav}>
          {navLinks.map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              className={styles.mobileLink}
              style={{ animationDelay: `${100 + i * 60}ms` }}
              onClick={() => setMobileOpen(false)}
            >
              <span className={styles.mobileLinkNum}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {link.label}
            </Link>
          ))}
            <Link href="/apply" className={styles.mobileCta}
            style={{ animationDelay: '400ms' }}
            onClick={() => setMobileOpen(false)}
          >
            <span>Apply Now</span>
            <ArrowUpRight size={18} />
          </Link>
        </nav>
      </div>
    </>
  );
};

export default Header;
