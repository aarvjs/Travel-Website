'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, MapPin, ArrowRight, Navigation } from 'lucide-react';

const heroSlides = [
  {
    image: 'https://images.unsplash.com/photo-1506197603052-3cc9c3a201bd?w=1600&q=90',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-over-a-grecian-coastal-town-41584-large.mp4',
    location: 'Santorini, Greece',
  },
  {
    image: 'https://images.unsplash.com/photo-1514282401047-d79a71a590e8?w=1600&q=90',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-tropical-beach-with-turquoise-water-and-palm-trees-39824-large.mp4',
    location: 'Maldives',
  },
  {
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1600&q=90',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-aerial-view-of-a-snowy-mountain-range-and-forest-41618-large.mp4',
    location: 'Swiss Alps',
  },
  {
    image: 'https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1600&q=90',
    video: 'https://assets.mixkit.co/videos/preview/mixkit-sunset-streets-of-a-historic-city-with-traffic-41595-large.mp4',
    location: 'Dubai, UAE',
  },
];

const floatingCards = [
  {
    image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=300&q=80',
    title: 'Bali, Indonesia',
    tag: 'Beach Paradise',
    style: { top: '22%', left: '3%' },
  },
  {
    image: 'https://images.unsplash.com/photo-1555993539-1732b0258235?w=300&q=80',
    title: 'Manali, India',
    tag: 'Mountain Adventure',
    style: { top: '55%', left: '2%' },
  },
  {
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=300&q=80',
    title: 'Kyoto, Japan',
    tag: 'Cultural Journey',
    style: { top: '20%', right: '3%' },
  },
  {
    image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=300&q=80',
    title: 'Paris, France',
    tag: 'City of Lights',
    style: { top: '58%', right: '2%' },
  },
];

const stats = [
  { value: '500+', label: 'Destinations' },
  { value: '15K+', label: 'Happy Travelers' },
  { value: '12+', label: 'Years Experience' },
  { value: '4.9', label: 'Average Rating' },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroSlides.length);
    }, 8000); // 8 seconds per slide to enjoy videos
    return () => clearInterval(interval);
  }, []);

  // Reset video states on slide transition
  useEffect(() => {
    setVideoLoaded(false);
    setVideoError(false);
  }, [current]);

  return (
    <section
      style={{
        position: 'relative',
        height: '100svh',
        minHeight: '650px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        background: '#071A2D',
      }}
    >
      {/* Background Visual Layer */}
      <div style={{ position: 'absolute', inset: 0, overflow: 'hidden' }}>
        <AnimatePresence initial={false} mode="crossfade">
          <motion.div
            key={current}
            initial={{ opacity: 0, scale: 1.06 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.2, ease: [0.4, 0, 0.2, 1] }}
            style={{ position: 'absolute', inset: 0 }}
          >
            {/* Fallback Image (always loads first / behind video) */}
            <Image
              src={heroSlides[current].image}
              alt={heroSlides[current].location}
              fill
              priority
              sizes="100vw"
              style={{ objectFit: 'cover', objectPosition: 'center', filter: 'brightness(0.95)' }}
            />

            {/* Video Background Layer */}
            {!videoError && heroSlides[current].video && (
              <video
                src={heroSlides[current].video}
                autoPlay
                loop
                muted
                playsInline
                onPlay={() => setVideoLoaded(true)}
                onError={() => setVideoError(true)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  opacity: videoLoaded ? 1 : 0,
                  transition: 'opacity 0.8s ease-in-out',
                  zIndex: 1,
                  pointerEvents: 'none',
                }}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Cinematic Dark Gradient Overlays */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to top, rgba(7, 26, 45, 0.98) 0%, rgba(7, 26, 45, 0.6) 50%, rgba(7, 26, 45, 0.5) 100%)',
          zIndex: 2,
        }}
      />
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'radial-gradient(ellipse at 30% 50%, rgba(14, 165, 233, 0.12) 0%, transparent 65%)',
          zIndex: 2,
        }}
      />

      {/* Floating Destination Cards - Desktop Only */}
      {floatingCards.map((card, i) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 + i * 0.15, duration: 0.8, ease: 'easeOut' }}
          className="float-anim"
          style={{
            position: 'absolute',
            zIndex: 10,
            animationDelay: `${i * 1.5}s`,
            ...card.style,
          }}
        >
          <div
            className="glass-card"
            style={{
              width: '150px',
              overflow: 'hidden',
              display: 'none',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 12px 32px rgba(0, 0, 0, 0.25)',
              transform: 'scale(0.95)',
            }}
          >
            <div style={{ position: 'relative', height: '80px' }}>
              <Image
                src={card.image}
                alt={card.title}
                fill
                sizes="150px"
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div style={{ padding: '8px 12px' }}>
              <p
                style={{
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: '#fff',
                  marginBottom: '2px',
                  lineHeight: 1.2,
                }}
              >
                {card.title}
              </p>
              <p
                style={{
                  fontSize: '0.62rem',
                  color: '#0EA5E9',
                  fontWeight: 600,
                  letterSpacing: '0.03em',
                }}
              >
                {card.tag}
              </p>
            </div>
          </div>
        </motion.div>
      ))}

      {/* Main Content Area */}
      <div
        className="container-px"
        style={{
          position: 'relative',
          zIndex: 10,
          width: '100%',
          paddingTop: '64px',
        }}
      >
        <div style={{ maxWidth: '780px' }}>
          {/* Eyebrow Location / Premium Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '6px 14px',
              background: 'rgba(14, 165, 233, 0.12)',
              border: '1px solid rgba(14, 165, 233, 0.25)',
              borderRadius: '50px',
              marginBottom: '20px',
            }}
          >
            <Navigation size={12} color="#0EA5E9" style={{ animation: 'planeFly 4s ease-in-out infinite' }} />
            <span
              style={{
                fontSize: '0.72rem',
                fontWeight: 600,
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: '#38BDF8',
              }}
            >
              Exclusive Travel Club
            </span>
          </motion.div>

          {/* Large Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(2.4rem, 6.5vw, 5rem)',
              fontWeight: 800,
              color: '#fff',
              lineHeight: 1.12,
              marginBottom: '20px',
              letterSpacing: '-0.02em',
            }}
          >
            Explore The World
            <br />
            <span
              style={{
                background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              With WanderLux
            </span>
          </motion.h1>

          {/* Description Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
            style={{
              fontSize: 'clamp(0.95rem, 1.8vw, 1.15rem)',
              color: 'rgba(255, 255, 255, 0.65)',
              lineHeight: 1.65,
              marginBottom: '36px',
              maxWidth: '560px',
              fontWeight: 400,
            }}
          >
            Discover luxury trips, hidden destinations, and unforgettable travel
            experiences crafted by experts who live and breathe travel.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            <Link href="/packages" className="btn-primary hero-btn">
              <span>Explore Packages</span>
              <ArrowRight size={15} className="btn-arrow" style={{ transition: 'transform 0.3s ease' }} />
            </Link>
            <Link href="/contact" className="btn-secondary hero-btn">
              <span>Plan Trip</span>
            </Link>
          </motion.div>

          {/* Key Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.75 }}
            style={{
              display: 'flex',
              gap: '36px',
              flexWrap: 'wrap',
            }}
          >
            {stats.map((stat, i) => (
              <div key={stat.label} style={{ minWidth: '100px' }}>
                <p
                  style={{
                    fontFamily: "'Playfair Display', Georgia, serif",
                    fontSize: '1.9rem',
                    fontWeight: 700,
                    color: '#fff',
                    lineHeight: 1,
                    marginBottom: '4px',
                  }}
                >
                  {stat.value}
                </p>
                <p
                  style={{
                    fontSize: '0.72rem',
                    color: 'rgba(255, 255, 255, 0.45)',
                    fontWeight: 600,
                    letterSpacing: '0.05em',
                    textTransform: 'uppercase',
                  }}
                >
                  {stat.label}
                </p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Thin line slide indicators on right edge */}
      <div
        style={{
          position: 'absolute',
          bottom: '50%',
          transform: 'translateY(50%)',
          right: '32px',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          gap: '10px',
          alignItems: 'center',
        }}
        className="slide-indicators"
      >
        {heroSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            style={{
              width: '2px',
              height: i === current ? '32px' : '12px',
              borderRadius: '2px',
              background: i === current ? '#0EA5E9' : 'rgba(255, 255, 255, 0.25)',
              border: 'none',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              padding: 0,
            }}
          />
        ))}
      </div>

      {/* Floating Current Location Pill */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -15 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'absolute',
            bottom: '36px',
            left: '50%',
            transform: 'translateX(-50%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
            padding: '6px 14px',
            background: 'rgba(7, 26, 45, 0.65)',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '50px',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
          }}
        >
          <MapPin size={12} color="#0EA5E9" />
          <span
            style={{
              fontSize: '0.78rem',
              color: 'rgba(255, 255, 255, 0.8)',
              fontWeight: 500,
              letterSpacing: '0.02em',
            }}
          >
            {heroSlides[current].location}
          </span>
        </motion.div>
      </AnimatePresence>

      {/* Animated Scroll Down Arrow */}
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'absolute',
          bottom: '32px',
          right: '50%',
          transform: 'translateX(50%)',
          zIndex: 10,
          opacity: 0.5,
          cursor: 'pointer',
        }}
        className="scroll-indicator"
      >
        <a href="#destinations" aria-label="Scroll down">
          <ChevronDown size={22} color="#fff" />
        </a>
      </motion.div>

      {/* Styled overrides & Responsive logic */}
      <style>{`
        @media (min-width: 1200px) {
          .glass-card { display: block !important; }
        }
        @media (max-width: 768px) {
          .slide-indicators { display: none !important; }
          .scroll-indicator { display: none !important; }
        }
        .hero-btn:hover .btn-arrow {
          transform: translateX(4px);
        }
      `}</style>
    </section>
  );
}

