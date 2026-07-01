import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, ExternalLink, MapPin } from 'lucide-react';
import destinations from '@/lib/destinations';
import styles from './destination.module.css';

export function generateStaticParams() {
  return Object.keys(destinations).map(country => ({ country }));
}

export async function generateMetadata({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = destinations[country];
  if (!data) return {};
  return {
    title: `${data.country} — Medical Colleges | NVVF`,
    description: data.tagline,
  };
}

export default async function DestinationPage({ params }: { params: Promise<{ country: string }> }) {
  const { country } = await params;
  const data = destinations[country];

  if (!data) notFound();

  return (
    <>
      <div className={styles.wrap}>
        <Header />
        <main>

          {/* ── Hero ── */}
          <section className={styles.hero}>
            <div
              className={styles.heroBg}
              style={{ backgroundImage: `url(${data.heroImage})` }}
              aria-hidden
            />
            <div className={styles.heroOverlay} aria-hidden />
            <div className={`container ${styles.heroContent}`}>
              <Link href="/courses" className={styles.backLink}>
                <ArrowLeft size={15} strokeWidth={1.5} />
                <span>All Destinations</span>
              </Link>
              <div className={styles.heroFlag} aria-hidden>{data.flag}</div>
              <h1 className={styles.heroTitle}>{data.country}</h1>
              <p className={styles.heroTagline}>{data.tagline}</p>
              <div className={styles.heroBadge}>
                <MapPin size={13} strokeWidth={1.5} />
                <span>{data.colleges.length} Partner Universities</span>
              </div>
            </div>
          </section>

          {/* ── Colleges grid ── */}
          <section className={styles.collegesSection}>
            <div className="container">
              <div className={styles.sectionHead}>
                <span className={styles.eyebrow}>Our Tie-ups</span>
                <h2 className={styles.sectionTitle}>
                  Partner Colleges in <em>{data.country}</em>
                </h2>
                <p className={styles.sectionDesc}>
                  NVVF holds direct admission partnerships with the following universities.
                  Click a college name to visit its official website.
                </p>
              </div>

              <div className={styles.grid}>
                {data.colleges.map((college, idx) => (
                  <article key={college.name} className={styles.card}>
                    {/* College image */}
                    <div className={styles.cardImageWrap}>
                      <Image
                        src={college.image}
                        alt={college.name}
                        fill
                        className={styles.cardImage}
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                      <div className={styles.cardImageOverlay} aria-hidden />
                      <span className={styles.cardNum}>
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>

                    {/* College content */}
                    <div className={styles.cardBody}>
                      <h3 className={styles.cardTitle}>{college.name}</h3>
                      <p className={styles.cardBrief}>{college.brief}</p>
                      <a
                        href={college.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.cardWebsite}
                      >
                        <span>Visit Official Website</span>
                        <ExternalLink size={13} strokeWidth={1.5} />
                      </a>
                    </div>
                  </article>
                ))}
              </div>

              {/* CTA */}
              <div className={styles.cta}>
                <p className={styles.ctaText}>
                  Ready to apply to a university in {data.country}?
                </p>
                <Link href="/apply" className={styles.ctaBtn}>
                  Start Your Application
                </Link>
              </div>
            </div>
          </section>

        </main>
      </div>
      <Footer curtain />
    </>
  );
}
