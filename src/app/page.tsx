import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import DestinationCard from '@/components/DestinationCard';
import TimelineCard from '@/components/TimelineCard';
import TimelineProgress from '@/components/TimelineProgress';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import PhotoStrip from '@/components/PhotoStrip';
import {
  Handshake,
  ShieldCheck,
  Compass,
  ClipboardCheck,
  MessagesSquare,
  Stamp,
  PlaneTakeoff,
} from 'lucide-react';
import styles from './page.module.css';

type Destination = {
  country: string;
  city: string;
  flag: string;
  course: string;
  features: string[];
  imageUrl: string;
  featured?: boolean;
  href?: string;
};

export default function Home() {
  const destinations: Destination[] = [
    {
      country: 'Egypt',
      city: 'Cairo · Alexandria',
      flag: '🇪🇬',
      imageUrl: '/dest-egypt.png',
      course: 'MBBS · 5 years + 2 years internship',
      features: ['World-class clinical exposure', 'Affordable tuition fees', 'English medium instruction'],
      href: '/destinations/egypt',
    },
    {
      country: 'Georgia',
      city: 'Tbilisi · Batumi',
      flag: '\u{1F1EC}\u{1F1EA}',
      imageUrl: '/dest-georgia.png',
      course: 'MD · 6 years · English medium',
      features: [
        'European credit transfer (ECTS)',
        'NMC & WFME recognised faculties',
        'No entrance exam beyond NEET qualification',
      ],
      featured: true,
      href: '/destinations/georgia',
    },
    {
      country: 'India',
      city: 'Domestic placements',
      flag: '\u{1F1EE}\u{1F1F3}',
      imageUrl: '/dest-india.png',
      course: 'UG & PG · NMC accredited',
      features: ['NMC recognised', 'Top private colleges', 'Counselling support'],
    },
    {
      country: 'Russia',
      city: 'Multiple cities',
      flag: '\u{1F1F7}\u{1F1FA}',
      imageUrl: '/dest-russia.png',
      course: 'MBBS · 6 years · English medium',
      features: ['State universities', 'Affordable tuition', 'Strong infrastructure'],
      href: '/destinations/russia',
    },
    {
      country: 'Uzbekistan',
      city: 'Tashkent · Samarkand · Andijan',
      flag: '\u{1F1FA}\u{1F1FF}',
      imageUrl: '/dest-uzbekistan.png',
      course: 'MBBS · 5–6 years · English medium',
      features: [
        'WHO-listed state medical institutes',
        'Lowest cost of living in our roster',
        'Strong Indian student community on campus',
      ],
      featured: true,
      href: '/destinations/uzbekistan',
    },
    {
      country: 'Vietnam',
      city: 'Hanoi · Ho Chi Minh City',
      flag: '🇻🇳',
      imageUrl: '/dest-vietnam.png',
      course: 'MBBS · 6 years',
      features: ['High-tech medical facilities', 'Safe environment for students', 'Growing international community'],
      href: '/destinations/vietnam',
    },
    {
      country: 'Mongolia',
      city: 'Ulaanbaatar',
      flag: '🇲🇳',
      imageUrl: '/dest-mongolia.png',
      course: 'MBBS · 6 years · English medium',
      features: ['Affordable tuition fees', 'East Asian clinical exposure', 'Growing international community'],
      href: '/destinations/mongolia',
    },
    {
      country: 'Timor Leste',
      city: 'Dili',
      flag: '🇹🇱',
      imageUrl: '/dest-timorleste.png',
      course: 'MBBS · 5–6 years · English medium',
      features: ['Highly affordable fees', 'Unique Southeast Asian experience', 'Internationally partnered institution'],
      href: '/destinations/timorleste',
    },
  ];

  const services = [
    {
      num: '01',
      title: 'Profile evaluation',
      desc: 'We assess your NEET score, academic record and budget to map a realistic shortlist — not a brochure of every university we can sign up for.',
      Icon: ClipboardCheck,
    },
    {
      num: '02',
      title: 'Admissions counselling',
      desc: 'A senior counsellor walks you and your family through each option face to face, weighing fees, recognition, climate and FMGE outcomes.',
      Icon: MessagesSquare,
    },
    {
      num: '03',
      title: 'Documentation & visa',
      desc: 'Admission letters, apostille, embassy filings and student visas — handled by an in-house team that has done this thousands of times.',
      Icon: Stamp,
    },
    {
      num: '04',
      title: 'Travel & settling-in',
      desc: 'Airport pickup, hostel allotment, local SIM, first-week orientation. The unglamorous things that decide whether a student stays the course.',
      Icon: PlaneTakeoff,
    },
  ];

  return (
    <>
      <div className={styles.curtainWrap}>
      <Header />
      <main>
        <HeroSection />

        <section id="destinations" className={`section ${styles.destinations}`}>
          <div className="container">
            <Reveal>
              <header className="section-head">
                <span className="eyebrow">Where we place students</span>
                <h2 className="section-title">
                  Global destinations. Exceptional medical <em>opportunities.</em>
                </h2>
                <p className="section-lede">
                  We provide expert advisory for top-tier medical universities across
                  the globe—ensuring our students receive end-to-end support, from
                  initial orientation through to their final internship.
                </p>
              </header>
            </Reveal>

            <div className={styles.destGrid}>
              {destinations.map((dest, idx) => (
                <Reveal key={dest.country} delay={idx * 90} direction="up" distance={36}>
                  <DestinationCard
                    index={idx + 1}
                    country={dest.country}
                    city={dest.city}
                    flag={dest.flag}
                    course={dest.course}
                    features={dest.features}
                    featured={dest.featured}
                    imageUrl={dest.imageUrl}
                    href={dest.href}
                  />
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <PhotoStrip />

        <section id="services" className={styles.services}>
          <div className="container">
            <Reveal>
              <header className={styles.servicesHead}>
                <span className={styles.servicesEyebrow}>How we work</span>
                <h2 className={styles.servicesTitle}>
                  A small practice, <em>handled carefully.</em>
                </h2>
                <p className={styles.servicesLede}>
                  From your very first call to your first day at university — four clear steps, one dedicated team.
                </p>
              </header>
            </Reveal>

            <TimelineProgress className={styles.servicesTimeline}>
              {services.map((service, idx) => {
                const Icon = service.Icon;
                const isEven = idx % 2 === 0;
                return (
                  <TimelineCard
                    key={service.num}
                    num={service.num}
                    title={service.title}
                    desc={service.desc}
                    icon={<Icon size={32} strokeWidth={1.25} />}
                    isLast={idx === services.length - 1}
                    isEven={isEven}
                    delay={idx * 100}
                  />
                );
              })}
            </TimelineProgress>
          </div>
        </section>

        <section id="contact" className={styles.contact}>
          {/* Ambient floating orbs */}
          <div className={styles.contactBg} aria-hidden />
          <div className={styles.contactOrb1} aria-hidden />
          <div className={styles.contactOrb2} aria-hidden />

          {/* Main grid */}
          <div className={`container ${styles.contactGrid}`}>
            <Reveal direction="up" distance={32}>
              <div className={styles.contactInfo}>
                <span className={styles.contactEyebrow}>Get in Touch</span>
                <h2 className={styles.contactTitle}>
                  A short conversation is the <em>right first step.</em>
                </h2>
                <p className={styles.contactDesc}>
                  Tell us a little about your aspirations. A senior counsellor will review your profile and respond within one working day — usually the same evening.
                </p>

                {/* Response badge */}
                <div className={styles.responseBadge}>
                  <span className={styles.responseDot} />
                  <span>Avg. response time: <strong>4 hours</strong></span>
                </div>

                <div className={styles.trustMarkers}>
                  <div className={styles.marker}>
                    <div className={styles.markerIcon}>
                      <Handshake size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4>Direct Admissions</h4>
                      <p>We work directly with universities — no middle-men, no hidden costs, no sub-agents.</p>
                    </div>
                  </div>
                  <div className={styles.marker}>
                    <div className={styles.markerIcon}>
                      <ShieldCheck size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4>NMC & WHO Verified</h4>
                      <p>Every university in our roster carries full NMC and WHO recognition.</p>
                    </div>
                  </div>
                  <div className={styles.marker}>
                    <div className={styles.markerIcon}>
                      <Compass size={20} strokeWidth={1.5} />
                    </div>
                    <div>
                      <h4>End-to-End Mentorship</h4>
                      <p>From NEET counselling to FMGE prep — we stay with you through the entire 6-year journey.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal direction="up" distance={32} delay={200}>
              <div className={styles.formContainer}>
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      </div>
      <Footer curtain />
    </>
  );
}
