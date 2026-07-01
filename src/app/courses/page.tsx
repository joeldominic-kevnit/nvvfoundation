import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { Compass, Globe2, Users, Wallet, ShieldCheck, ArrowRight } from 'lucide-react';
import styles from './courses.module.css';

export const metadata = {
  title: 'Courses — National Videsh Vidya Foundation',
  description: 'Explore undergraduate (MBBS) and postgraduate (MD/MS/MDS) medical courses abroad with NVVF.',
};

export default function CoursesPage() {
  const ugDestinations = [
    {
      country: 'Georgia',
      desc: 'European standard education, credit transfer (ECTS), and world-class, globally recognized medical faculties.',
      image: 'url(/dest-georgia.png)',
      href: '/destinations/georgia',
    },
    {
      country: 'Uzbekistan',
      desc: 'Highly affordable medical education at WHO-listed state institutes with a welcoming, vibrant student community.',
      image: 'url(/dest-uzbekistan.png)',
      href: '/destinations/uzbekistan',
    },
    {
      country: 'India',
      desc: 'Explore placements in top domestic private medical colleges with comprehensive, expert counselling support.',
      image: 'url(/dest-india.png)',
      href: null,
    },
    {
      country: 'Russia',
      desc: 'Rigorous training at prestigious state universities featuring superb clinical infrastructure and affordable fees.',
      image: 'url(/dest-russia.png)',
      href: '/destinations/russia',
    },
    {
      country: 'Egypt',
      desc: 'Renowned English-taught programs providing world-class clinical exposure and highly affordable tuition fees.',
      image: 'url(/dest-egypt.png)',
      href: '/destinations/egypt',
    },
    {
      country: 'Vietnam',
      desc: 'Safe student environments with high-tech medical facilities, modern hospitals, and global exposure.',
      image: 'url(/dest-vietnam.png)',
      href: '/destinations/vietnam',
    },
    {
      country: 'Mongolia',
      desc: 'An emerging East Asian destination offering affordable, internationally recognized medical education in Ulaanbaatar.',
      image: 'url(/dest-mongolia.png)',
      href: '/destinations/mongolia',
    },
    {
      country: 'Timor Leste',
      desc: 'A unique and affordable medical education pathway at an internationally partnered institution in Southeast Asia.',
      image: 'url(/dest-timorleste.png)',
      href: '/destinations/timorleste',
    },
  ];

  return (
    <>
      <div className={styles.curtainWrap}>
        <Header />
        <main>
          {/* ──── Hero Section ──── */}
          <section className={styles.hero}>
            <div className={styles.heroBg} aria-hidden />
            <div className={`container ${styles.heroContent}`}>
              <Reveal>
                <span className={styles.eyebrow}>Medical Programs</span>
                <h1 className={styles.title}>
                  Explore Our Medical Courses <em>Abroad</em>
                </h1>
                <p className={styles.lede}>
                  At National Videsh Vidya Foundation, we guide aspiring medical professionals through the complexities of securing admissions to esteemed undergraduate and postgraduate medical programs worldwide.
                </p>
              </Reveal>
            </div>
          </section>

          {/* ──── Undergraduate Section ──── */}
          <section className={styles.ugSection} id="ug-courses">
            <div className="container">
              <Reveal>
                <div className={styles.ugHeader}>
                  <h2>Undergraduate (MBBS)</h2>
                  <p>
                    Embarking on a medical career begins with a solid foundation. We assist students in gaining admission to prestigious universities known for modern facilities and diverse cultural experiences.
                  </p>
                </div>
              </Reveal>

              <div className={styles.ugGrid}>
                {ugDestinations.map((dest, i) => {
                  const inner = (
                    <div className={`${styles.ugCard} ${dest.href ? styles.ugCardLink : ''}`}>
                      <div
                        className={styles.ugImage}
                        style={{ backgroundImage: dest.image }}
                        aria-hidden
                      />
                      <div className={styles.ugOverlay}>
                        <div className={styles.ugContent}>
                          <h3>{dest.country}</h3>
                          <p>{dest.desc}</p>
                          {dest.href && (
                            <span className={styles.ugViewBtn}>View Colleges →</span>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                  return (
                    <Reveal key={dest.country} delay={i * 100} direction="up" distance={30}>
                      {dest.href ? (
                        <Link href={dest.href} aria-label={`View colleges in ${dest.country}`}>
                          {inner}
                        </Link>
                      ) : inner}
                    </Reveal>
                  );
                })}
              </div>

              <Reveal delay={200}>
                <div className={styles.ctaWrap}>
                  <Link href="/apply" className={styles.applyBtn}>
                    Apply for UG Courses <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>

          {/* ──── Postgraduate Section ──── */}
          <section className={styles.pgSection} id="pg-courses">
            <div className="container">
              <Reveal direction="up" distance={40}>
                <div className={styles.sectionHeader}>
                  <h2>Postgraduate <em>(MD/MS/MDS)</em></h2>
                  <p>
                    Advance your medical education and specialize. Our programs in select countries are designed to enhance your clinical skills and prepare you for specialized practice.
                  </p>
                </div>
              </Reveal>

              <div className={styles.pgGrid}>
                <Reveal delay={100} direction="up" distance={30}>
                  <div className={styles.pgCard}>
                    <h3>Armenia</h3>
                    <p>
                      Offers prestigious postgraduate courses designed to provide advanced clinical training. Programs emphasize a balance of rigorous academic coursework and practical experience in modern healthcare facilities.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={200} direction="up" distance={30}>
                  <div className={styles.pgCard}>
                    <h3>Egypt</h3>
                    <p>
                      Renowned for a rich history and high standards of education. The postgraduate programs are rigorous and research-oriented, providing an excellent environment for academic growth.
                    </p>
                  </div>
                </Reveal>

                <Reveal delay={300} direction="up" distance={30}>
                  <div className={styles.pgCard}>
                    <h3>Georgia</h3>
                    <p>
                      Rapidly becoming a hub for medical education. Offers high-quality MD, MS, and MDS programs at competitive costs within a safe, supportive environment with English-taught courses.
                    </p>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={400}>
                <div className={styles.ctaWrap}>
                  <Link href="/apply" className={styles.applyBtn}>
                    Apply for PG Courses <ArrowRight size={16} />
                  </Link>
                </div>
              </Reveal>
            </div>
          </section>


          {/* ──── Why Choose Us Section ──── */}
          <section className={styles.whySection}>
            <div className="container">
              <Reveal>
                <div className={styles.whyHeader}>
                  <h2>Why Choose NVVF?</h2>
                </div>
              </Reveal>

              <div className={styles.whyGrid}>
                <Reveal delay={100} direction="up" distance={20}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}><Compass size={24} /></div>
                    <h4>Expert Guidance</h4>
                    <p>Our experienced advisors provide tailored counseling to help you choose the right university and course aligned with your goals.</p>
                  </div>
                </Reveal>

                <Reveal delay={200} direction="up" distance={20}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}><Globe2 size={24} /></div>
                    <h4>Extensive Network</h4>
                    <p>We hold partnerships with top medical universities worldwide, granting you access to a premium, curated range of options.</p>
                  </div>
                </Reveal>

                <Reveal delay={300} direction="up" distance={20}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}><Users size={24} /></div>
                    <h4>Personalized Support</h4>
                    <p>From university application to visa processing and pre-departure orientation, we provide assistance at every critical step.</p>
                  </div>
                </Reveal>

                <Reveal delay={400} direction="up" distance={20}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}><Wallet size={24} /></div>
                    <h4>Affordable Options</h4>
                    <p>We provide transparent services, helping you explore cost-effective medical education options without hidden surprises.</p>
                  </div>
                </Reveal>

                <Reveal delay={500} direction="up" distance={20}>
                  <div className={styles.whyItem}>
                    <div className={styles.whyIcon}><ShieldCheck size={24} /></div>
                    <h4>Ongoing Assistance</h4>
                    <p>Our support continues even after you reach your destination, ensuring a smooth transition into your new academic environment.</p>
                  </div>
                </Reveal>
              </div>

              <Reveal direction="up" distance={40}>
                <div className={styles.commitment}>
                  <h3>Our Commitment</h3>
                  <p>
                    We are dedicated to your success and committed to providing you with the best opportunities for a fulfilling medical career. By choosing National Videsh Vidya Foundation, you are partnering with a team that genuinely cares about your future.
                  </p>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
      <Footer curtain={true} />
    </>
  );
}
