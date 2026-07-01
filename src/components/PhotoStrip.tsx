'use client';

import Image from 'next/image';
import styles from './PhotoStrip.module.css';

const images = [
  { src: '/NVVF1.jpeg', alt: 'NVVF Gallery 1' },
  { src: '/NVVF2.jpeg', alt: 'NVVF Gallery 2' },
  { src: '/NVVF3.jpeg', alt: 'NVVF Gallery 3' },
  { src: '/NVVF4.jpeg', alt: 'NVVF Gallery 4' },
  { src: '/NVVF5.jpeg', alt: 'NVVF Gallery 5' },
  { src: '/NVVF6.jpeg', alt: 'NVVF Gallery 6' },
];

export default function PhotoStrip() {
  return (
    <div className={styles.strip} aria-label="Photo gallery">
      <div className={styles.track}>
        {[...images, ...images].map((img, i) => (
          <div key={i} className={styles.slide}>
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="420px"
              className={styles.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
