'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Preloader() {
  const [visible, setVisible] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setFadeOut(true);
      setTimeout(() => setVisible(false), 700);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  if (!visible) return null;

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        background: 'var(--navy)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '32px',
        opacity: fadeOut ? 0 : 1,
        visibility: fadeOut ? 'hidden' : 'visible',
        transition: 'opacity 0.7s ease, visibility 0.7s ease',
      }}
    >
      {/* Logo */}
      <div style={{ textAlign: 'center' }}>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginBottom: '8px',
          }}
        >
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
            <circle cx="18" cy="18" r="18" fill="rgba(14,165,233,0.15)" />
            <path
              d="M6 18 C6 10 10 6 18 6 C26 6 30 10 30 18"
              stroke="#0EA5E9"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
            />
            <circle cx="18" cy="18" r="4" fill="#0EA5E9" />
            <line x1="18" y1="6" x2="18" y2="2" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="30" y1="18" x2="34" y2="18" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
            <line x1="6" y1="18" x2="2" y2="18" stroke="#F97316" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <span
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.75rem',
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '-0.01em',
            }}
          >
            WanderLux
          </span>
        </div>
        <p
          style={{
            color: 'rgba(255,255,255,0.45)',
            fontSize: '0.8rem',
            letterSpacing: '0.25em',
            textTransform: 'uppercase',
            fontWeight: 500,
          }}
        >
          Luxury Travel Experiences
        </p>
      </div>

      {/* Animated plane on a path */}
      <div
        style={{
          position: 'relative',
          width: '240px',
          height: '4px',
        }}
      >
        {/* Track line */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, rgba(14,165,233,0.4), rgba(249,115,22,0.4), transparent)',
            transform: 'translateY(-50%)',
          }}
        />
        {/* Progress bar */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            height: '2px',
            background: 'linear-gradient(90deg, #0EA5E9, #F97316)',
            transform: 'translateY(-50%)',
            borderRadius: '2px',
            animation: 'preloaderProgress 2s ease-out forwards',
          }}
        />
        {/* Plane icon */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translate(-50%, -50%)',
            animation: 'preloaderPlane 2s ease-out forwards',
          }}
        >
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="#F97316"
            style={{ filter: 'drop-shadow(0 0 6px rgba(249,115,22,0.6))' }}
          >
            <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
          </svg>
        </div>
      </div>

      {/* Loading dots */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
        {[0, 1, 2].map((i) => (
          <div
            key={i}
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: i === 0 ? '#0EA5E9' : 'rgba(255,255,255,0.2)',
              animation: `preloaderDot 1.2s ease-in-out ${i * 0.2}s infinite`,
            }}
          />
        ))}
      </div>

      <style>{`
        @keyframes preloaderProgress {
          0% { width: 0; }
          100% { width: 100%; }
        }
        @keyframes preloaderPlane {
          0% { left: 0%; }
          100% { left: 100%; }
        }
        @keyframes preloaderDot {
          0%, 100% { opacity: 0.3; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.2); background: #0EA5E9; }
        }
      `}</style>
    </div>
  );
}
