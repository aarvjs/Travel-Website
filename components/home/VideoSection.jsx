'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Play, X, Volume2 } from 'lucide-react';

export default function VideoSection() {
  const [playing, setPlaying] = useState(false);

  return (
    <section
      style={{
        position: 'relative',
        height: '580px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}
    >
      {/* Background */}
      <Image
        src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=1600&q=85"
        alt="Travel cinematic background"
        fill
        sizes="100vw"
        style={{ objectFit: 'cover', objectPosition: 'center 40%' }}
      />

      {/* Overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(135deg, rgba(7,26,45,0.85) 0%, rgba(7,26,45,0.65) 100%)',
          zIndex: 2,
        }}
      />

      {/* Decorative circles */}
      {[200, 320, 440].map((size, i) => (
        <div
          key={size}
          style={{
            position: 'absolute',
            width: size,
            height: size,
            borderRadius: '50%',
            border: `1px solid rgba(255,255,255,${0.06 - i * 0.015})`,
            zIndex: 3,
            animation: `floatSlow ${6 + i * 2}s ease-in-out infinite`,
            animationDelay: `${i * 0.5}s`,
          }}
        />
      ))}

      {/* Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
          padding: '0 24px',
        }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            fontSize: '0.8rem',
            fontWeight: 700,
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: '#0EA5E9',
            marginBottom: '16px',
          }}
        >
          See The World Through Our Lens
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          style={{
            fontFamily: "'Playfair Display', Georgia, serif",
            fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
            fontWeight: 800,
            color: '#fff',
            marginBottom: '40px',
            lineHeight: 1.15,
          }}
        >
          Your Adventure
          <br />
          <span
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Starts Here
          </span>
        </motion.h2>

        {/* Play Button */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => setPlaying(true)}
          aria-label="Play travel reel"
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            background: 'rgba(255,255,255,0.12)',
            border: '2px solid rgba(255,255,255,0.4)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            margin: '0 auto',
            backdropFilter: 'blur(12px)',
            boxShadow: '0 0 0 12px rgba(255,255,255,0.05), 0 0 0 24px rgba(255,255,255,0.03)',
            transition: 'all 0.3s ease',
          }}
        >
          <Play size={28} color="#fff" fill="#fff" style={{ marginLeft: '4px' }} />
        </motion.button>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.35 }}
          style={{
            marginTop: '20px',
            fontSize: '0.85rem',
            color: 'rgba(255,255,255,0.5)',
            fontWeight: 500,
            letterSpacing: '0.03em',
          }}
        >
          Watch Our 2025 Travel Reel
        </motion.p>
      </div>

      {/* Video Modal */}
      {playing && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
          onClick={() => setPlaying(false)}
        >
          <button
            onClick={() => setPlaying(false)}
            aria-label="Close video"
            style={{
              position: 'absolute',
              top: '24px',
              right: '24px',
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
              width: '100%',
              maxWidth: '900px',
              aspectRatio: '16/9',
              borderRadius: '20px',
              overflow: 'hidden',
              background: '#000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            {/* Placeholder — replace src with actual YouTube embed or video URL */}
            <div
              style={{
                textAlign: 'center',
                padding: '48px',
              }}
            >
              <Volume2 size={48} color="rgba(255,255,255,0.3)" style={{ marginBottom: '16px' }} />
              <p style={{ color: 'rgba(255,255,255,0.5)', fontSize: '0.95rem' }}>
                Travel reel video would play here.
              </p>
              <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.82rem', marginTop: '8px' }}>
                Replace with: &lt;iframe&gt; YouTube embed or &lt;video&gt; tag
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
