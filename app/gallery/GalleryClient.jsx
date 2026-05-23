'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { Camera, MapPin, X, ZoomIn } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionTitle from '@/components/common/SectionTitle';
import BookingCTA from '@/components/home/BookingCTA';
import { galleryImages } from '@/data/gallery';

const categories = ['All', 'Asia', 'Europe'];

export default function GalleryClient() {
  const [active, setActive] = useState('All');
  const [lightbox, setLightbox] = useState(null);

  const filtered =
    active === 'All'
      ? galleryImages
      : galleryImages.filter((img) => img.category === active);

  return (
    <>
      <PageHero
        title="Travel Gallery"
        subtitle="Stunning imagery from our journeys across the world's most breathtaking destinations."
        image="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=85"
        breadcrumb="Gallery"
      />

      <section className="section-py" style={{ background: 'var(--sand)' }}>
        <div className="container-px">
          <SectionTitle
            eyebrow="Visual Journey"
            title="Moments"
            highlight="Captured"
            subtitle="Every photo tells a story. Explore destinations through our lens before you live them yourself."
          />

          {/* Filter */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '50px',
                  border: '1.5px solid',
                  borderColor: active === cat ? '#0EA5E9' : 'rgba(7,26,45,0.15)',
                  background: active === cat ? '#0EA5E9' : '#fff',
                  color: active === cat ? '#fff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                <Camera size={14} />
                {cat}
              </button>
            ))}
          </div>

          {/* Masonry Grid */}
          <div className="masonry-grid">
            <AnimatePresence>
              {filtered.map((img, i) => (
                <motion.div
                  key={img.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                  className="masonry-item"
                >
                  <div
                    style={{
                      position: 'relative',
                      borderRadius: '16px',
                      overflow: 'hidden',
                      height:
                        img.height === 'tall'
                          ? '340px'
                          : img.height === 'short'
                          ? '190px'
                          : '260px',
                      cursor: 'pointer',
                      boxShadow: '0 4px 20px rgba(7,26,45,0.1)',
                      transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    }}
                    onClick={() => setLightbox(img)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = 'scale(1.015)';
                      e.currentTarget.style.boxShadow = '0 12px 40px rgba(7,26,45,0.18)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = 'scale(1)';
                      e.currentTarget.style.boxShadow = '0 4px 20px rgba(7,26,45,0.1)';
                    }}
                  >
                    <Image
                      src={img.src}
                      alt={img.alt}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="g-img"
                    />

                    {/* Overlay */}
                    <div
                      className="g-overlay"
                      style={{
                        position: 'absolute',
                        inset: 0,
                        background:
                          'linear-gradient(to top, rgba(7,26,45,0.85) 0%, transparent 60%)',
                        opacity: 0,
                        transition: 'opacity 0.3s ease',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        padding: '16px',
                      }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
                        <div
                          style={{
                            width: '36px',
                            height: '36px',
                            borderRadius: '50%',
                            background: 'rgba(255,255,255,0.15)',
                            border: '1px solid rgba(255,255,255,0.3)',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                          }}
                        >
                          <ZoomIn size={16} color="#fff" />
                        </div>
                      </div>
                      <div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '4px' }}>
                          <Camera size={11} color="#0EA5E9" />
                          <span style={{ fontSize: '0.68rem', fontWeight: 600, color: '#0EA5E9', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                            {img.category}
                          </span>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
                          <MapPin size={12} color="#fff" />
                          <p style={{ fontSize: '0.85rem', fontWeight: 700, color: '#fff', lineHeight: 1.2 }}>
                            {img.location}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            style={{
              position: 'fixed',
              inset: 0,
              zIndex: 9000,
              background: 'rgba(0,0,0,0.92)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              padding: '24px',
            }}
          >
            <button
              onClick={() => setLightbox(null)}
              aria-label="Close lightbox"
              style={{
                position: 'absolute',
                top: '20px',
                right: '20px',
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.1)',
                border: '1px solid rgba(255,255,255,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                color: '#fff',
              }}
            >
              <X size={20} />
            </button>
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              onClick={(e) => e.stopPropagation()}
              style={{
                position: 'relative',
                maxWidth: '90vw',
                maxHeight: '85vh',
                width: '900px',
                aspectRatio: '3/2',
                borderRadius: '16px',
                overflow: 'hidden',
              }}
            >
              <Image
                src={lightbox.src}
                alt={lightbox.alt}
                fill
                sizes="90vw"
                style={{ objectFit: 'cover' }}
              />
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '20px 24px',
                  background: 'linear-gradient(to top, rgba(7,26,45,0.85) 0%, transparent 100%)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <MapPin size={14} color="#0EA5E9" />
                  <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#fff' }}>
                    {lightbox.location}
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <BookingCTA />

      <style>{`
        div:hover .g-img { transform: scale(1.05); }
        div:hover .g-overlay { opacity: 1 !important; }
      `}</style>
    </>
  );
}
