'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Home, ChevronRight } from 'lucide-react';

export default function PageHero({
  title,
  subtitle,
  image,
  breadcrumb,
}) {
  return (
    <section
      style={{
        position: 'relative',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background Image */}
      <Image
        src={image}
        alt={title}
        fill
        priority
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center' }}
      />

      {/* Multi-layer overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(7,26,45,0.92) 0%, rgba(7,26,45,0.65) 50%, rgba(14,165,233,0.2) 100%)',
        }}
      />

      {/* Decorative accent */}
      <div
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '1px',
          background: 'linear-gradient(90deg, transparent, rgba(14,165,233,0.6), rgba(249,115,22,0.4), transparent)',
        }}
      />

      {/* Content */}
      <div
        className="container-px"
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          width: '100%',
        }}
      >
        {/* Breadcrumb */}
        {breadcrumb && (
          <motion.nav
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '20px',
              fontSize: '0.82rem',
              color: 'rgba(255,255,255,0.6)',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            <Link
              href="/"
              style={{
                color: 'rgba(255,255,255,0.6)',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                transition: 'color 0.2s',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.color = '#0EA5E9')}
              onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
            >
              <Home size={13} />
              Home
            </Link>
            <ChevronRight size={13} style={{ opacity: 0.4 }} />
            <span style={{ color: '#0EA5E9' }}>{breadcrumb}</span>
          </motion.nav>
        )}

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(2rem, 5vw, 3.5rem)',
            fontWeight: 700,
            color: '#fff',
            marginBottom: '16px',
            lineHeight: 1.15,
          }}
        >
          {title}
        </motion.h1>

        {/* Underline accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '60px' }}
          transition={{ duration: 0.6, delay: 0.3 }}
          style={{
            height: '3px',
            background: 'linear-gradient(90deg, #0EA5E9, #F97316)',
            borderRadius: '2px',
            margin: '0 auto 20px',
          }}
        />

        {/* Subtitle */}
        {subtitle && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            style={{
              fontSize: 'clamp(0.95rem, 2vw, 1.1rem)',
              color: 'rgba(255,255,255,0.7)',
              maxWidth: '560px',
              margin: '0 auto',
              lineHeight: 1.7,
              fontWeight: 400,
            }}
          >
            {subtitle}
          </motion.p>
        )}
      </div>

      {/* Bottom wave shape */}
      <div
        style={{
          position: 'absolute',
          bottom: -1,
          left: 0,
          right: 0,
          overflow: 'hidden',
          lineHeight: 0,
        }}
      >
        <svg
          viewBox="0 0 1440 40"
          fill="none"
          preserveAspectRatio="none"
          style={{ display: 'block', width: '100%', height: '40px' }}
        >
          <path d="M0 40 L0 20 Q360 0 720 20 Q1080 40 1440 20 L1440 40 Z" fill="#FFF7ED" />
        </svg>
      </div>
    </section>
  );
}
