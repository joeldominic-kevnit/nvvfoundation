import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Reveal from '@/components/Reveal';
import Link from 'next/link';
import { ArrowRight, Clock, User } from 'lucide-react';
import styles from './blogs.module.css';

import { posts } from '@/lib/posts';

const BlogsPage = () => {
  const featuredPost = posts.find(p => p.featured);
  const regularPosts = posts.filter(p => !p.featured);

  return (
    <>
      <div className={styles.curtainWrap}>
        <Header />
        <main className={styles.main}>
          {/* Hero / Header */}
          <section className={styles.hero}>
            <div className="container">
              <Reveal>
                <header className={styles.heroHead}>
                  <span className={styles.eyebrow}>Insights & Guides</span>
                  <h1 className={styles.title}>Editorial <em>Perspective</em></h1>
                  <p className={styles.lede}>
                    Expert advice on international medical education, regulatory updates, and student success stories.
                  </p>
                </header>
              </Reveal>
            </div>
          </section>

          {/* Featured Post */}
          {featuredPost && (
            <section className={styles.featuredSection}>
              <div className="container">
                <Reveal direction="up" distance={40}>
                  <article className={styles.featuredCard}>
                    <div className={styles.featuredImage} style={{ backgroundImage: `url(${featuredPost.image})` }} />
                    <div className={styles.featuredContent}>
                      <span className={styles.postCategory}>{featuredPost.category}</span>
                      <h2 className={styles.featuredTitle}>{featuredPost.title}</h2>
                      <p className={styles.featuredExcerpt}>{featuredPost.excerpt}</p>
                      <div className={styles.postMeta}>
                        <span className={styles.metaItem}><User size={14} /> {featuredPost.author}</span>
                        <span className={styles.metaItem}><Clock size={14} /> {featuredPost.readTime}</span>
                      </div>
                      <Link href={`/blogs/${featuredPost.slug}`} className={styles.readMoreBtn}>
                        Read Article <ArrowRight size={16} />
                      </Link>
                    </div>
                  </article>
                </Reveal>
              </div>
            </section>
          )}

          {/* Blog Grid */}
          <section className={styles.gridSection}>
            <div className="container">
              <div className={styles.blogGrid}>
                {regularPosts.map((post, idx) => (
                  <Reveal key={post.id} delay={idx * 100} direction="up" distance={30}>
                    <Link href={`/blogs/${post.slug}`} className={styles.postLink}>
                      <article className={styles.postCard}>
                        <div className={styles.postImage} style={{ backgroundImage: `url(${post.image})` }} />
                        <div className={styles.postBody}>
                          <span className={styles.postCategory}>{post.category}</span>
                          <h3 className={styles.postTitle}>{post.title}</h3>
                          <p className={styles.postExcerpt}>{post.excerpt}</p>
                          <div className={styles.postFoot}>
                            <span className={styles.postDate}>{post.date}</span>
                            <ArrowRight size={16} className={styles.postArrow} />
                          </div>
                        </div>
                      </article>
                    </Link>
                  </Reveal>
                ))}
              </div>
            </div>
          </section>

          {/* Newsletter / CTA */}
          <section className={styles.newsletter}>
            <div className="container">
              <Reveal>
                <div className={styles.newsBox}>
                  <h2 className={styles.newsTitle}>Stay updated on <em>regulations.</em></h2>
                  <p className={styles.newsDesc}>Get the latest NMC guidelines and admission alerts delivered to your inbox.</p>
                  <form className={styles.newsForm}>
                    <input type="email" placeholder="Your email address" className={styles.newsInput} />
                    <button type="submit" className={styles.newsBtn}>Subscribe</button>
                  </form>
                </div>
              </Reveal>
            </div>
          </section>
        </main>
      </div>
      <Footer curtain={true} />
    </>
  );
};

export default BlogsPage;
