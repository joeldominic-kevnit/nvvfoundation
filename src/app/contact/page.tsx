import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactForm from '@/components/ContactForm';
import Reveal from '@/components/Reveal';
import {
  Clock,
  MapPin,
  Phone,
  Mail,
  Handshake,
  ShieldCheck,
  Compass,
  Award,
  ArrowUpRight,
} from 'lucide-react';
import styles from './contact.module.css';

export const metadata = {
  title: 'Contact — National Videsh Vidya Foundation',
  description:
    'Book a free consultation with our senior counsellors. Same-day response guaranteed.',
};

export default function ContactPage() {
  const trustItems = [
    {
      Icon: Handshake,
      title: 'No Sub-Agents',
      desc: 'We work directly with every university. Zero middlemen, zero hidden fees.',
    },
    {
      Icon: ShieldCheck,
      title: 'NMC & WHO Recognised',
      desc: 'Every institution in our roster carries full accreditation and recognition.',
    },
    {
      Icon: Compass,
      title: 'Complete Lifecycle Support',
      desc: 'From NEET counselling to FMGE prep — we stay with you through all 6 years.',
    },
    {
      Icon: Award,
      title: '14 Years of Practice',
      desc: '2,400+ students placed across 6 countries since 2012.',
    },
  ];

  const nextSteps = [
    { num: '01', title: 'Submit your details', desc: 'A senior counsellor reviews your profile.' },
    { num: '02', title: 'Discovery call', desc: 'A 30-minute call to understand your goals and budget.' },
    { num: '03', title: 'Shortlist & apply', desc: 'We map a realistic shortlist and handle the admission paperwork.' },
  ];

  return (
    <>
      <div className={styles.curtainWrap}>
        <Header />
        <main>
          {/* Hero */}
          <section className={styles.hero}>
            <div className={styles.heroBg} aria-hidden>
              <span className={styles.heroOrb1} aria-hidden />
              <span className={styles.heroOrb2} aria-hidden />
              <span className={styles.heroGrid} aria-hidden />
            </div>

            {/* Plate-style corner marks */}
            <span className={`${styles.corner} ${styles.cornerTL}`} aria-hidden>
              N&nbsp;<span>&uarr;</span>
            </span>
            <span className={`${styles.corner} ${styles.cornerTR}`} aria-hidden>
              Plate&nbsp;03 &middot; Contact
            </span>

            <div className={`container ${styles.heroContent}`}>
              <Reveal>
                <div className={styles.meta}>
                  <span className={styles.metaItem}>
                    <span className={styles.metaKey}>Channel</span> Direct
                  </span>
                  <span className={styles.metaItem}>
                    <span className={styles.metaKey}>Hours</span> Mon&ndash;Sat &middot; 9&ndash;6 IST
                  </span>
                  <span className={`${styles.metaItem} ${styles.metaLive}`}>
                    <span className={styles.metaDot} aria-hidden />
                    Counsellors available
                  </span>
                </div>

                <span className={styles.eyebrow}>Contact Us</span>
                <h1 className={styles.title}>
                  Let&rsquo;s start a <em>conversation.</em>
                </h1>
                <p className={styles.lede}>
                  Whether you&rsquo;re exploring options or ready to apply &mdash; a short
                  call with our team will give you the clarity you need before you
                  commit to anything.
                </p>
              </Reveal>

              {/* Quick info cards */}
              <Reveal delay={200}>
                <div className={styles.infoCards}>
                  <a href="mailto:support@nvvfoundation.com" className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <Mail size={22} strokeWidth={1.5} />
                    </div>
                    <div className={styles.infoBody}>
                      <h4>Email Us</h4>
                      <p>support@nvvfoundation.com</p>
                    </div>
                    <ArrowUpRight size={14} className={styles.infoArrow} />
                  </a>
                  <a
                    href="https://maps.app.goo.gl/ttZzxvPwzZqwGfvTA"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.infoCard}
                  >
                    <div className={styles.infoIcon}>
                      <MapPin size={22} strokeWidth={1.5} />
                    </div>
                    <div className={styles.infoBody}>
                      <h4>Office</h4>
                      <p>Jayanagar, Bangalore – 560069</p>
                    </div>
                    <ArrowUpRight size={14} className={styles.infoArrow} />
                  </a>
                  <a href="tel:+919844757075" className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <Phone size={22} strokeWidth={1.5} />
                    </div>
                    <div className={styles.infoBody}>
                      <h4>Call Us</h4>
                      <p>+91 9844757075</p>
                    </div>
                    <ArrowUpRight size={14} className={styles.infoArrow} />
                  </a>
                  <a href="tel:+918431250540" className={styles.infoCard}>
                    <div className={styles.infoIcon}>
                      <Phone size={22} strokeWidth={1.5} />
                    </div>
                    <div className={styles.infoBody}>
                      <h4>Call Us (Chennai)</h4>
                      <p>+91 8431250540</p>
                    </div>
                    <ArrowUpRight size={14} className={styles.infoArrow} />
                  </a>
                </div>
              </Reveal>
            </div>
          </section>

          {/* Main Section — Form + Trust */}
          <section id="contact-form" className={styles.mainSection}>
            <div className={`container ${styles.mainGrid}`}>
              {/* Left — Form */}
              <Reveal direction="up" distance={30}>
                <div className={styles.formCard}>
                  <ContactForm />
                </div>
              </Reveal>

              {/* Right — Trust info */}
              <Reveal direction="up" distance={30} delay={150}>
                <div className={styles.trustSide}>
                  <span className={styles.trustEyebrow}>
                    <span className={styles.trustEyebrowRule} aria-hidden />
                    Why us
                  </span>
                  <h2 className={styles.trustTitle}>
                    Why students <em>trust us.</em>
                  </h2>

                  <div className={styles.trustItems}>
                    {trustItems.map(({ Icon, title, desc }, idx) => (
                      <div key={title} className={styles.trustItem}>
                        <div className={styles.trustItemIcon}>
                          <Icon size={18} strokeWidth={1.5} />
                        </div>
                        <div className={styles.trustItemBody}>
                          <span className={styles.trustItemNum}>
                            No. {String(idx + 1).padStart(2, '0')}
                          </span>
                          <h4>{title}</h4>
                          <p>{desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Next steps */}
                  <div className={styles.nextSteps}>
                    <h4 className={styles.nextStepsTitle}>What happens next</h4>
                    <ol className={styles.nextStepsList}>
                      {nextSteps.map((s) => (
                        <li key={s.num} className={styles.nextStep}>
                          <span className={styles.nextStepNum}>{s.num}</span>
                          <div>
                            <strong>{s.title}</strong>
                            <span>{s.desc}</span>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>


                </div>
              </Reveal>
            </div>
          </section>

          {/* Location & Map */}
          <section className={styles.locationSection}>
            <div className={`container ${styles.locationGrid}`}>
              <Reveal direction="up" distance={30}>
                <div className={styles.locationInfo}>
                  <h2 className={styles.locationTitle}>Visit our <em>Office.</em></h2>
                  <address className={styles.addressBlock}>
                    <strong>National Videsh Vidya Foundation</strong>
                    <br />
                    1304, 1st Floor, 25th Main, 9th Block
                    <br />
                    Jayanagar, Bangalore &ndash; 560069
                    <br />
                    Karnataka, INDIA
                  </address>
                </div>
              </Reveal>
              <Reveal direction="up" distance={30} delay={150}>
                <div className={styles.mapWrapper}>
                  <iframe
                    src="https://maps.google.com/maps?q=National+Videsh+Vidya+Foundation,+Jayanagar,+Bangalore&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="450"
                    style={{ border: 0 }}
                    allowFullScreen={false}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
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
