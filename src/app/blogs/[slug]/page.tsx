import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import { posts } from '@/lib/posts';
import { notFound } from 'next/navigation';
import { ArrowLeft, Clock, User, Calendar } from 'lucide-react';
import Link from 'next/link';
import styles from './post.module.css';

export async function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPost({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  return (
    <>
      <div className={styles.curtainWrap}>
        <Header />
        <main className={styles.main}>
          <article className={styles.post}>
            {/* Header / Hero */}
            <header className={styles.header}>
              <div className="container">
                <Reveal>
                  <Link href="/blogs" className={styles.backLink}>
                    <ArrowLeft size={16} /> Back to Insights
                  </Link>
                  <span className={styles.category}>{post.category}</span>
                  <h1 className={styles.title}>{post.title}</h1>
                  <div className={styles.meta}>
                    <div className={styles.metaItem}>
                      <User size={16} strokeWidth={1.5} />
                      <span>{post.author}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Calendar size={16} strokeWidth={1.5} />
                      <span>{post.date}</span>
                    </div>
                    <div className={styles.metaItem}>
                      <Clock size={16} strokeWidth={1.5} />
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Reveal>
              </div>
            </header>

            {/* Featured Image */}
            <div className="container">
              <Reveal delay={200} direction="up" distance={30}>
                <div 
                  className={styles.featuredImage} 
                  style={{ backgroundImage: `url(${post.image})` }} 
                  aria-hidden 
                />
              </Reveal>
            </div>

            {/* Content */}
            <div className={`container ${styles.contentWrap}`}>
              <Reveal delay={300}>
                <div 
                  className={styles.content}
                  dangerouslySetInnerHTML={{ __html: post.content }}
                />
              </Reveal>

              {/* Author Bio (Optional/Simple) */}
              <footer className={styles.postFooter}>
                <Reveal delay={400}>
                  <div className={styles.shareBox}>
                    <h4>Share this perspective</h4>
                    <div className={styles.shareBtns}>
                      {/* Placeholder share icons */}
                      <button className={styles.shareBtn}>Twitter</button>
                      <button className={styles.shareBtn}>LinkedIn</button>
                      <button className={styles.shareBtn}>Copy Link</button>
                    </div>
                  </div>
                </Reveal>
              </footer>
            </div>
          </article>

          {/* Related / More Section */}
          <section className={styles.moreSection}>
            <div className="container">
              <Reveal>
                <h2 className={styles.moreTitle}>Continue reading</h2>
                <div className={styles.moreGrid}>
                  {posts.filter(p => p.id !== post.id).slice(0, 2).map(p => (
                    <Link key={p.id} href={`/blogs/${p.slug}`} className={styles.moreCard}>
                      <span className={styles.moreCat}>{p.category}</span>
                      <h3>{p.title}</h3>
                      <span className={styles.moreLink}>Read more <ArrowLeft size={14} style={{ transform: 'rotate(180deg)' }} /></span>
                    </Link>
                  ))}
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
