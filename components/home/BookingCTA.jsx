'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MessageCircle, ArrowRight } from 'lucide-react';

const WHATSAPP = 'https://wa.me/919999999999?text=Hello%2C%20I%27d%20like%20to%20book%20a%20trip%20with%20WanderLux%20Travels.';

export default function BookingCTA() {
  return (
    <section
      style={{
        position: 'relative',
        padding: '96px 0',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1600&q=85"
        alt="Next adventure awaits"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 60%' }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background:
            'linear-gradient(135deg, rgba(7,26,45,0.92) 0%, rgba(7,26,45,0.75) 50%, rgba(14,165,233,0.15) 100%)',
        }}
      />

      {/* Content */}
      <div
        className="container-px"
        style={{ position: 'relative', zIndex: 10, textAlign: 'center' }}
      >
        <motion.span
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#0EA5E9',
            marginBottom: '16px',
            padding: '5px 16px',
            background: 'rgba(14,165,233,0.12)',
            border: '1px solid rgba(14,165,233,0.25)',
            borderRadius: '50px',
          }}
        >
          Start Your Journey
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.75rem, 5vw, 3.75rem)',
            fontWeight: 800,
            color: '#fff',
            lineHeight: 1.1,
            marginBottom: '20px',
          }}
        >
          Ready for Your
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Next Adventure?
          </span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            color: 'rgba(255,255,255,0.7)',
            maxWidth: '540px',
            margin: '0 auto 40px',
            lineHeight: 1.75,
          }}
        >
          Share your dream destination on WhatsApp and let our travel experts craft the perfect itinerary for you.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          style={{
            display: 'flex',
            gap: '16px',
            justifyContent: 'center',
            flexWrap: 'wrap',
          }}
        >
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '16px 36px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '1rem',
              letterSpacing: '0.03em',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 8px 32px rgba(37,211,102,0.4)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = '0 16px 48px rgba(37,211,102,0.5)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.4)';
            }}
          >
            <MessageCircle size={22} fill="#fff" />
            Book on WhatsApp
          </a>

          <Link
            href="/packages"
            className="btn-secondary"
            style={{ padding: '16px 36px', fontSize: '1rem' }}
          >
            Browse Packages
            <ArrowRight size={18} />
          </Link>
        </motion.div>

        {/* Trust note */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.45 }}
          style={{
            marginTop: '32px',
            fontSize: '0.82rem',
            color: 'rgba(255,255,255,0.4)',
            fontWeight: 500,
          }}
        >
          Free consultation · No booking fees · 24/7 support
        </motion.p>
      </div>
    </section>
  );
}
