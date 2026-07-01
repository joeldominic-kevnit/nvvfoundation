'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import {
  ArrowUpRight,
  GraduationCap,
  Globe2,
  Users,
  FileCheck,
  Wallet,
  Plane,
  Compass,
  HeartHandshake,
  Trophy,
  Sparkles,
  Quote,
} from 'lucide-react';
import styles from './about.module.css';

const milestones = [
  { year: '2012', label: 'Founded in Bengaluru' },
  { year: '2015', label: 'Expanded to Philippines & Ukraine' },
  { year: '2018', label: 'Georgia & Uzbekistan partnerships' },
  { year: '2021', label: 'Crossed 1,500 student placements' },
  { year: '2024', label: '40+ partner universities worldwide' },
  { year: '2026', label: '2,400+ students placed & growing' },
];

const reasons = [
  {
    icon: <GraduationCap size={26} />,
    title: 'Specialised Medical Expertise',
    desc: 'We work exclusively with medical admissions — MBBS, BDS, MD, MS, and MDS — so every recommendation is grounded in deep, programme-specific knowledge.',
  },
  {
    icon: <Globe2 size={26} />,
    title: 'Prestigious University Network',
    desc: 'Our partnerships span top-tier medical institutions across multiple countries, each selected for academic rigour and strong NMC/WHO recognition.',
  },
  {
    icon: <Users size={26} />,
    title: 'Personalised Counselling',
    desc: 'Our advisors map your academic profile, budget, and career ambitions to the programme and destination that fits you best.',
  },
  {
    icon: <FileCheck size={26} />,
    title: 'Seamless Application Process',
    desc: 'From document preparation to recommendation letters and interview coaching, we handle the paperwork so you can focus on preparation.',
  },
  {
    icon: <Wallet size={26} />,
    title: 'Financial & Scholarship Guidance',
    desc: 'We break down tuition, living costs, and available scholarships country by country — helping you plan a financially sound path.',
  },
  {
    icon: <Plane size={26} />,
    title: 'Visa & Travel Assistance',
    desc: 'Our team walks you through every step — application forms, document checklists, travel bookings, and pre-departure formalities.',
  },
  {
    icon: <Compass size={26} />,
    title: 'Pre-Departure Orientation',
    desc: 'We prepare you for the cultural, academic, and day-to-day realities of your new city — from managing finances to staying healthy.',
  },
  {
    icon: <HeartHandshake size={26} />,
    title: 'Post-Arrival Support',
    desc: 'We help with accommodation, local registration, and connecting you with a community of fellow Indian medical students.',
  },
  {
    icon: <Trophy size={26} />,
    title: 'Proven Track Record',
    desc: 'With 2,400+ successful placements since 2012, our alumni are practising doctors across the globe.',
  },
  {
    icon: <Sparkles size={26} />,
    title: 'Long-Term Career Commitment',
    desc: 'Beyond admissions, we offer career counselling and FMGE preparation support to help you transition into medical practice.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className={styles.main}>
        {/* ──── Hero ──── */}
        <section className={styles.hero}>
          <div className={styles.heroBg} aria-hidden>
            <div className={styles.heroBgImage} />
            <div className={styles.heroBgVeil} />
          </div>
          <div className={`container ${styles.heroContent}`}>
            <span className={styles.heroEyebrow}>About the Foundation</span>
            <h1 className={styles.heroTitle}>
              Guiding futures in medicine,{' '}
              <em>since&nbsp;2012.</em>
            </h1>
            <p className={styles.heroSub}>
              From a single office in Bengaluru to partnerships across 10+
              countries — we&rsquo;ve helped 2,400+ Indian students step into the
              world&rsquo;s best medical universities.
            </p>

            <div className={styles.heroStats}>
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>14</span>
                <span className={styles.heroStatLabel}>Years of practice</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>2,400<em>+</em></span>
                <span className={styles.heroStatLabel}>Students placed</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>40<em>+</em></span>
                <span className={styles.heroStatLabel}>Partner universities</span>
              </div>
              <div className={styles.heroStatDivider} />
              <div className={styles.heroStat}>
                <span className={styles.heroStatNum}>10<em>+</em></span>
                <span className={styles.heroStatLabel}>Countries</span>
              </div>
            </div>
          </div>
        </section>

        {/* ──── Origin Story ──── */}
        <section className={`section ${styles.story}`}>
          <div className={`container ${styles.storyGrid}`}>
            <div className={styles.storyLeft}>
              <span className="eyebrow">Our Story</span>
              <h2 className={styles.storyTitle}>
                Born from a simple belief: every aspiring doctor deserves <em>the right guidance.</em>
              </h2>
            </div>
            <div className={styles.storyRight}>
              <p className={styles.lead}>
                National Videsh Vidya Foundation began in <strong>2012</strong> in
                Bengaluru, Karnataka, with a clear purpose: to give Indian students a
                reliable, end-to-end pathway into medical education abroad.
              </p>
              <p>
                Over the years we have helped students secure admissions across the
                Philippines, Georgia, Uzbekistan, Russia, Bangladesh, and beyond —
                always into universities recognised by the <strong>National Medical
                Commission (NMC)</strong> and listed with the <strong>World Health
                Organization (WHO)</strong>.
              </p>
              <p>
                Our services extend well past the acceptance letter. From visa
                processing and travel arrangements to accommodation, meals, and
                on-going academic mentorship, we stay with every student through
                graduation and into their career.
              </p>
            </div>
          </div>
        </section>

        {/* ──── Timeline ──── */}
        <section className={styles.timeline}>
          <div className="container">
            <div className={styles.timelineTrack}>
              {milestones.map((m, i) => (
                <div key={i} className={styles.timelineItem}>
                  <div className={styles.timelineDot} />
                  <span className={styles.timelineYear}>{m.year}</span>
                  <span className={styles.timelineLabel}>{m.label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── Leadership ──── */}
        <section className={`section ${styles.leadership}`}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Leadership</span>
              <h2 className="section-title">The people behind <em>your journey.</em></h2>
            </div>

            <div className={styles.leaderGrid}>
              {/* C. M. Ganesh — with photo */}
              <div className={styles.leaderCard}>
                <div className={styles.leaderPhotoWrap}>
                  <Image
                    src="/ganesh-nvvf.webp"
                    alt="C. M. Ganesh"
                    fill
                    sizes="220px"
                    className={styles.leaderPhoto}
                  />
                </div>
                <div className={styles.leaderInfo}>
                  <span className={styles.leaderRole}>Proprietor &amp; Chief Counsellor</span>
                  <h3>C. M. Ganesh</h3>
                  <p>
                    Ganesh personally oversees every admission, providing complimentary
                    counselling to students and families. His hands-on involvement ensures
                    no detail is overlooked — from university selection to final enrollment.
                  </p>
                </div>
              </div>

              {/* Swapna Ganesh — monogram */}
              <div className={styles.leaderCard}>
                <div className={styles.leaderAvatar}>
                  <span>SG</span>
                </div>
                <div className={styles.leaderInfo}>
                  <span className={styles.leaderRole}>Head of Administration &amp; Documentation</span>
                  <h3>Swapna Ganesh</h3>
                  <p>
                    Swapna manages the entire documentation lifecycle — application forms,
                    university correspondence, visa paperwork, and regulatory compliance —
                    keeping the process seamless for every student.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ──── Mission & Vision ──── */}
        <section className={styles.mvSection}>
          <div className={`container ${styles.mvGrid}`}>
            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>
                <div className={styles.mvIcon}>M</div>
              </div>
              <h2>Mission</h2>
              <p>
                To empower students by providing unparalleled access to international
                medical education. Through comprehensive counselling, cultural exchange
                support, and career guidance, we bridge the gap between aspiration
                and achievement — enabling individuals to contribute meaningfully to
                healthcare across the world.
              </p>
            </div>
            <div className={styles.mvCard}>
              <div className={styles.mvIconWrap}>
                <div className={styles.mvIcon}>V</div>
              </div>
              <h2>Vision</h2>
              <p>
                To be recognised as a leading global facilitator of medical education
                abroad — championing excellence, inclusivity, and innovation. We
                envision a network of globally-minded medical professionals equipped
                with the knowledge, empathy, and skill to drive positive change in
                healthcare, wherever they practise.
              </p>
            </div>
          </div>
        </section>

        {/* ──── Quote ──── */}
        <section className={styles.quoteSection}>
          <div className="container">
            <div className={styles.quoteCard}>
              <Quote size={40} className={styles.quoteIcon} />
              <blockquote className={styles.quoteText}>
                Choosing National Videsh Vidya Foundation means partnering with a dedicated
                team of professionals who are committed to making your dream of studying
                medicine abroad a reality. Trust us to provide the expertise, support, and
                resources you need to embark on a successful medical career.
              </blockquote>
              <cite className={styles.quoteCite}>— C. M. Ganesh, Founder</cite>
            </div>
          </div>
        </section>

        {/* ──── Why Choose NVVF ──── */}
        <section className={`section ${styles.reasons}`}>
          <div className="container">
            <div className="section-head">
              <span className="eyebrow">Why NVVF</span>
              <h2 className="section-title">
                Ten reasons students <em>trust&nbsp;us.</em>
              </h2>
            </div>

            <div className={styles.reasonsGrid}>
              {reasons.map((r, i) => (
                <div key={i} className={styles.reasonCard}>
                  <div className={styles.reasonHeader}>
                    <span className={styles.reasonNum}>
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <div className={styles.reasonIcon}>{r.icon}</div>
                  </div>
                  <h3 className={styles.reasonTitle}>{r.title}</h3>
                  <p>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ──── CTA Strip ──── */}
        <section className={styles.cta}>
          <div className={styles.ctaGlow} aria-hidden />
          <div className={`container ${styles.ctaInner}`}>
            <h2 className={styles.ctaTitle}>
              Ready to begin your medical journey?
            </h2>
            <Link href="/contact" className={`btn ${styles.ctaBtn}`}>
              <span>Book a free consultation</span>
              <ArrowUpRight size={16} strokeWidth={1.75} />
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
