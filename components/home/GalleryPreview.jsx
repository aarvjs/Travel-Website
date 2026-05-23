'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Camera } from 'lucide-react';
import { galleryImages } from '../../data/gallery';
import SectionTitle from '../common/SectionTitle';

const preview = galleryImages.slice(0, 8);

export default function GalleryPreview() {
  return (
    <section className="section-py" style={{ background: 'var(--sand)' }}>
      <div className="container-px">
        <SectionTitle
          eyebrow="Our Gallery"
          title="Moments That"
          highlight="Last Forever"
          subtitle="A glimpse into the extraordinary — captured across our most beloved destinations around the world."
        />

        {/* Masonry Grid */}
        <div className="masonry-grid" style={{ marginBottom: '48px' }}>
          {preview.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.07 }}
              className="masonry-item"
            >
              <div
                style={{
                  position: 'relative',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  height:
                    img.height === 'tall'
                      ? '320px'
                      : img.height === 'short'
                      ? '180px'
                      : '240px',
                  cursor: 'pointer',
                  boxShadow: '0 4px 20px rgba(7,26,45,0.1)',
                }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  style={{
                    objectFit: 'cover',
                    transition: 'transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  }}
                  className="gallery-img"
                />

                {/* Hover overlay */}
                <div
                  className="gallery-overlay"
                  style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(7,26,45,0.85) 0%, rgba(7,26,45,0.1) 60%, transparent 100%)',
                    opacity: 0,
                    transition: 'opacity 0.4s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    padding: '16px',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      marginBottom: '4px',
                    }}
                  >
                    <Camera size={12} color="#0EA5E9" />
                    <span
                      style={{
                        fontSize: '0.68rem',
                        fontWeight: 600,
                        color: '#0EA5E9',
                        letterSpacing: '0.05em',
                        textTransform: 'uppercase',
                      }}
                    >
                      {img.category}
                    </span>
                  </div>
                  <p
                    style={{
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#fff',
                      lineHeight: 1.2,
                    }}
                  >
                    {img.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div style={{ textAlign: 'center' }}>
          <Link href="/gallery" className="btn-primary">
            <Camera size={16} />
            Explore Full Gallery
          </Link>
        </div>
      </div>

      <style>{`
        .masonry-item:hover .gallery-img { transform: scale(1.06); }
        .masonry-item:hover .gallery-overlay { opacity: 1; }
      `}</style>
    </section>
  );
}
