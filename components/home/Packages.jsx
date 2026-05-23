'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, FreeMode } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';
import {
  Calendar, Users, Tag, ArrowRight, ChevronLeft, ChevronRight, CheckCircle, MapPin,
} from 'lucide-react';
import { packages } from '../../data/packages';

/* ── Badge colours per type ── */
const BADGE_STYLES = {
  sunset:  { bg: 'linear-gradient(135deg,#f97316,#ef4444)', color: '#fff' },
  ocean:   { bg: 'linear-gradient(135deg,#0ea5e9,#6366f1)', color: '#fff' },
  default: { bg: 'linear-gradient(135deg,#10b981,#059669)', color: '#fff' },
};

function PackageCard({ pkg }) {
  const savings = pkg.originalPrice - pkg.price;
  const badge = BADGE_STYLES[pkg.badgeColor] || BADGE_STYLES.default;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
        transition: 'transform 0.38s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.38s ease',
        cursor: 'pointer',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-10px) scale(1.015)';
        e.currentTarget.style.boxShadow = '0 28px 72px rgba(0,0,0,0.16)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 32px rgba(0,0,0,0.08)';
      }}
    >
      {/* ── Image ── */}
      <div style={{ position: 'relative', height: '240px', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, 420px"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s ease',
          }}
          className="pkg-card-img"
        />
        {/* Gradient fade at bottom */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)',
        }} />

        {/* Badge */}
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          padding: '5px 14px', borderRadius: '999px',
          background: badge.bg, color: badge.color,
          fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.06em',
          boxShadow: '0 2px 12px rgba(0,0,0,0.2)',
        }}>
          {pkg.badge}
        </div>

        {/* Savings pill */}
        {savings > 0 && (
          <div style={{
            position: 'absolute', top: '14px', right: '14px',
            display: 'flex', alignItems: 'center', gap: '4px',
            padding: '5px 12px', borderRadius: '999px',
            background: 'rgba(16,185,129,0.92)', color: '#fff',
            fontSize: '0.7rem', fontWeight: 700,
          }}>
            <Tag size={10} />
            Save ₹{savings.toLocaleString()}
          </div>
        )}

        {/* Duration at bottom of image */}
        <div style={{
          position: 'absolute', bottom: '12px', left: '14px',
          display: 'flex', alignItems: 'center', gap: '6px',
        }}>
          <Calendar size={13} color="rgba(255,255,255,0.9)" />
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>
            {pkg.days}D / {pkg.nights}N
          </span>
        </div>

        {/* Group size at bottom right */}
        <div style={{
          position: 'absolute', bottom: '12px', right: '14px',
          display: 'flex', alignItems: 'center', gap: '5px',
        }}>
          <Users size={13} color="rgba(255,255,255,0.9)" />
          <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(255,255,255,0.9)' }}>
            {pkg.groupSize}
          </span>
        </div>
      </div>

      {/* ── Content ── */}
      <div style={{ padding: '20px 22px 22px', flex: 1, display: 'flex', flexDirection: 'column' }}>

        {/* Destination tag */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '8px' }}>
          <MapPin size={13} color="#f97316" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#f97316', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
            {pkg.destination}
          </span>
        </div>

        <h3 style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: '1.18rem', fontWeight: 700,
          color: '#0f172a', lineHeight: 1.25, marginBottom: '8px',
        }}>
          {pkg.name}
        </h3>

        <p style={{
          fontSize: '0.83rem', color: '#64748b',
          lineHeight: 1.6, marginBottom: '14px',
          display: '-webkit-box', WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical', overflow: 'hidden',
        }}>
          {pkg.highlights}
        </p>

        {/* Inclusions */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '18px' }}>
          {pkg.inclusions.slice(0, 3).map(inc => (
            <span key={inc} style={{
              display: 'inline-flex', alignItems: 'center', gap: '4px',
              padding: '4px 10px', borderRadius: '999px',
              background: 'rgba(249,115,22,0.07)',
              border: '1px solid rgba(249,115,22,0.2)',
              fontSize: '0.7rem', fontWeight: 600, color: '#ea580c',
            }}>
              <CheckCircle size={10} />
              {inc}
            </span>
          ))}
          {pkg.inclusions.length > 3 && (
            <span style={{
              padding: '4px 10px', borderRadius: '999px',
              background: 'rgba(100,116,139,0.07)',
              border: '1px solid rgba(100,116,139,0.15)',
              fontSize: '0.7rem', fontWeight: 600, color: '#64748b',
            }}>
              +{pkg.inclusions.length - 3} more
            </span>
          )}
        </div>

        {/* Price + CTA */}
        <div style={{
          marginTop: 'auto',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          gap: '12px', paddingTop: '16px',
          borderTop: '1px solid rgba(0,0,0,0.06)',
        }}>
          <div>
            {pkg.originalPrice && (
              <p style={{ fontSize: '0.75rem', color: '#94a3b8', textDecoration: 'line-through', lineHeight: 1 }}>
                ₹{pkg.originalPrice.toLocaleString()}
              </p>
            )}
            <p style={{
              fontSize: '1.45rem', fontWeight: 800, color: '#0f172a', lineHeight: 1,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}>
              ₹{pkg.price.toLocaleString()}
              <span style={{ fontSize: '0.72rem', fontWeight: 500, color: '#94a3b8' }}> /person</span>
            </p>
          </div>

          <Link
            href="/packages"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '6px',
              padding: '10px 18px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #f97316, #ef4444)',
              color: '#fff', fontSize: '0.8rem', fontWeight: 700,
              textDecoration: 'none', whiteSpace: 'nowrap',
              boxShadow: '0 4px 16px rgba(249,115,22,0.35)',
              transition: 'transform 0.2s, box-shadow 0.2s',
              flexShrink: 0,
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.05)'; e.currentTarget.style.boxShadow = '0 8px 24px rgba(249,115,22,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 4px 16px rgba(249,115,22,0.35)'; }}
          >
            Book Now <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        div:hover .pkg-card-img { transform: scale(1.06); }
      `}</style>
    </div>
  );
}

export default function Packages() {
  const [swiper, setSwiper] = useState(null);

  return (
    <section style={{
      position: 'relative',
      padding: '100px 0 110px',
      overflow: 'hidden',
      /* Warm travel gradient — sunrise/golden dunes feel */
      background: 'linear-gradient(160deg, #fff7ed 0%, #fff 35%, #fef3e2 70%, #fff1e6 100%)',
    }}>

      {/* Decorative blobs */}
      <div style={{
        position: 'absolute', top: '-80px', right: '-80px',
        width: '420px', height: '420px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(251,191,36,0.12) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '-60px', left: '-60px',
        width: '360px', height: '360px', borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(249,115,22,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 28px', position: 'relative', zIndex: 1 }}>

        {/* ── Header ── */}
        <div style={{
          display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between',
          gap: '24px', marginBottom: '52px', flexWrap: 'wrap',
        }}>
          <div>
            {/* Eyebrow */}
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              marginBottom: '14px',
              padding: '6px 16px', borderRadius: '999px',
              background: 'rgba(249,115,22,0.1)',
              border: '1px solid rgba(249,115,22,0.25)',
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#f97316' }} />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#ea580c', letterSpacing: '0.12em', textTransform: 'uppercase' }}>
                Travel Packages
              </span>
            </div>
            <h2 style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: 'clamp(1.9rem, 3.5vw, 2.8rem)',
              fontWeight: 800, color: '#0f172a',
              lineHeight: 1.15, letterSpacing: '-0.02em',
              margin: 0,
            }}>
              Curated Trips for{' '}
              <span style={{
                background: 'linear-gradient(135deg, #f97316, #ef4444)',
                WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent',
              }}>
                Every Dream
              </span>
            </h2>
            <p style={{ marginTop: '12px', fontSize: '1rem', color: '#64748b', lineHeight: 1.6, maxWidth: '480px' }}>
              From luxury retreats to thrilling adventures — find the perfect package tailored for you.
            </p>
          </div>

          {/* Prev / Next Arrows */}
          <div style={{ display: 'flex', gap: '10px', flexShrink: 0 }}>
            <button
              aria-label="Previous package"
              onClick={() => swiper?.slidePrev()}
              style={{
                width: '46px', height: '46px', borderRadius: '14px',
                border: '1.5px solid rgba(249,115,22,0.25)',
                background: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#f97316', boxShadow: '0 2px 12px rgba(249,115,22,0.1)',
                transition: 'all 0.22s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg,#f97316,#ef4444)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(249,115,22,0.35)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)';
                e.currentTarget.style.color = '#f97316';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(249,115,22,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronLeft size={20} />
            </button>
            <button
              aria-label="Next package"
              onClick={() => swiper?.slideNext()}
              style={{
                width: '46px', height: '46px', borderRadius: '14px',
                border: '1.5px solid rgba(249,115,22,0.25)',
                background: '#fff', cursor: 'pointer',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                color: '#f97316', boxShadow: '0 2px 12px rgba(249,115,22,0.1)',
                transition: 'all 0.22s',
              }}
              onMouseEnter={e => {
                e.currentTarget.style.background = 'linear-gradient(135deg,#f97316,#ef4444)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(249,115,22,0.35)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.borderColor = 'rgba(249,115,22,0.25)';
                e.currentTarget.style.color = '#f97316';
                e.currentTarget.style.boxShadow = '0 2px 12px rgba(249,115,22,0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* ── Swiper ── */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay, FreeMode]}
          spaceBetween={16}
          slidesPerView={1.3}
          loop={true}
          freeMode={true}
          speed={14000}
          onSwiper={setSwiper}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          breakpoints={{
            480:  { slidesPerView: 1.6, spaceBetween: 18 },
            640:  { slidesPerView: 2,   spaceBetween: 20 },
            768:  { slidesPerView: 2.3, spaceBetween: 22 },
            1024: { slidesPerView: 3,   spaceBetween: 24 },
          }}
          style={{ paddingBottom: '56px' }}
        >
          {packages.map(pkg => (
            <SwiperSlide key={pkg.id} style={{ height: 'auto' }}>
              <PackageCard pkg={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* ── View All CTA ── */}
        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link
            href="/packages"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              padding: '14px 36px', borderRadius: '999px',
              background: 'linear-gradient(135deg, #f97316, #ef4444)',
              color: '#fff', fontSize: '0.95rem', fontWeight: 700,
              textDecoration: 'none',
              boxShadow: '0 6px 28px rgba(249,115,22,0.35)',
              transition: 'transform 0.22s, box-shadow 0.22s',
            }}
            onMouseEnter={e => { e.currentTarget.style.transform = 'scale(1.04)'; e.currentTarget.style.boxShadow = '0 10px 36px rgba(249,115,22,0.45)'; }}
            onMouseLeave={e => { e.currentTarget.style.transform = 'scale(1)'; e.currentTarget.style.boxShadow = '0 6px 28px rgba(249,115,22,0.35)'; }}
          >
            View All Packages <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Swiper overrides for smooth continuous linear sliding & pagination */}
      <style>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
        .swiper-pagination-bullet {
          background: #f97316 !important;
          opacity: 0.35;
          width: 8px !important; height: 8px !important;
        }
        .swiper-pagination-bullet-active {
          opacity: 1 !important;
          width: 24px !important;
          border-radius: 4px !important;
        }
      `}</style>
    </section>
  );
}
