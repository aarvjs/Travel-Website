'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, ArrowRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { destinations } from '../../data/destinations';

const featured = destinations.slice(0, 6);

const badgeColors = {
  Trending: { bg: 'rgba(249,115,22,0.12)', color: '#F97316', border: 'rgba(249,115,22,0.25)' },
  Popular: { bg: 'rgba(14,165,233,0.12)', color: '#0EA5E9', border: 'rgba(14,165,233,0.25)' },
  Luxury: { bg: 'rgba(168,85,247,0.12)', color: '#A855F7', border: 'rgba(168,85,247,0.25)' },
  Adventure: { bg: 'rgba(34,197,94,0.12)', color: '#22C55E', border: 'rgba(34,197,94,0.25)' },
  Beach: { bg: 'rgba(14,165,233,0.12)', color: '#0EA5E9', border: 'rgba(14,165,233,0.25)' },
  Premium: { bg: 'rgba(234,179,8,0.12)', color: '#EAB308', border: 'rgba(234,179,8,0.25)' },
};

const stripeGradients = {
  Trending: 'linear-gradient(90deg, #F97316, #FDBA74)',
  Popular: 'linear-gradient(90deg, #0EA5E9, #7DD3FC)',
  Luxury: 'linear-gradient(90deg, #A855F7, #F472B6)',
  Adventure: 'linear-gradient(90deg, #22C55E, #86EFAC)',
  Beach: 'linear-gradient(90deg, #0EA5E9, #38BDF8)',
  Premium: 'linear-gradient(90deg, #EAB308, #FDE047)',
};

function DestinationCard({ dest, index, layout = 'default', isOffset = false }) {
  const badge = badgeColors[dest.badge] || badgeColors.Popular;
  const topStripe = stripeGradients[dest.badge] || stripeGradients.Popular;

  const isLarge = layout === 'large';
  const isHorizontal = layout === 'horizontal';

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.08 }}
      className={`dest-card-tilt ${isHorizontal ? 'horizontal-card' : ''}`}
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 30px rgba(7, 26, 45, 0.04)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: isHorizontal ? 'auto' : '100%',
        ...(isOffset ? { marginTop: '24px' } : {}),
      }}
    >
      {/* Top thin aesthetic gradient stripe */}
      <div style={{ height: '4px', background: topStripe, width: '100%', shrink: 0 }} />

      {/* Image Area */}
      <div
        className={isHorizontal ? 'horizontal-card-img' : ''}
        style={{
          position: 'relative',
          height: isLarge ? '340px' : isHorizontal ? '220px' : '220px',
          overflow: 'hidden',
          width: '100%',
          flexShrink: 0,
        }}
      >
        <Image
          src={dest.image}
          alt={dest.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          style={{
            objectFit: 'cover',
            transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
          }}
          className="dest-img"
        />
        <div className="img-overlay" />

        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '4px 12px',
            background: badge.bg,
            border: `1px solid ${badge.border}`,
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 3,
          }}
        >
          <span style={{ fontSize: '0.7rem', fontWeight: 700, color: badge.color, letterSpacing: '0.04em' }}>
            {dest.badge}
          </span>
        </div>

        {/* Rating */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            right: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            padding: '4px 10px',
            background: 'rgba(7, 26, 45, 0.65)',
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
            WebkitBackdropFilter: 'blur(8px)',
            zIndex: 3,
          }}
        >
          <Star size={11} color="#F97316" fill="#F97316" />
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>{dest.rating}</span>
        </div>

        {/* Country Label */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            zIndex: 3,
          }}
        >
          <MapPin size={12} color="#fff" />
          <span style={{ fontSize: '0.75rem', fontWeight: 600, color: '#fff', letterSpacing: '0.01em' }}>
            {dest.country}
          </span>
        </div>
      </div>

      {/* Content Area */}
      <div
        className={isHorizontal ? 'horizontal-card-content' : ''}
        style={{
          padding: '22px',
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
          justifyContent: 'space-between',
        }}
      >
        <div>
          {/* Header Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '8px',
              marginBottom: '12px',
            }}
          >
            <h3
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: isLarge ? '1.45rem' : '1.18rem',
                fontWeight: 700,
                color: 'var(--navy)',
                lineHeight: 1.25,
              }}
            >
              {dest.name}
            </h3>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              <p style={{ fontSize: '0.68rem', color: 'var(--text-muted)', fontWeight: 500 }}>From</p>
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.15rem',
                  fontWeight: 700,
                  color: '#0EA5E9',
                }}
              >
                ${dest.price.toLocaleString()}
              </p>
            </div>
          </div>

          {/* Metadata Row */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              marginBottom: '14px',
            }}
          >
            <Clock size={12} color="var(--text-muted)" />
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {dest.days}
            </span>
            <span style={{ color: 'rgba(107,114,128,0.25)', margin: '0 2px' }}>•</span>
            <span style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {dest.reviews.toLocaleString()} reviews
            </span>
          </div>

          {/* Description */}
          <p
            style={{
              fontSize: '0.82rem',
              color: 'var(--text-muted)',
              lineHeight: 1.55,
              marginBottom: '20px',
              display: '-webkit-box',
              WebkitLineClamp: isLarge ? 3 : 2,
              WebkitBoxOrient: 'vertical',
              overflow: 'hidden',
            }}
          >
            {dest.description}
          </p>
        </div>

        {/* CTA Link */}
        <div>
          <Link
            href="/destinations"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontSize: '0.82rem',
              fontWeight: 600,
              color: '#0EA5E9',
              textDecoration: 'none',
              transition: 'gap 0.2s',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
            onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
          >
            Explore Destination
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (min-width: 768px) {
          .horizontal-card {
            display: flex !important;
            flex-direction: row !important;
          }
          .horizontal-card-img {
            width: 180px !important;
            height: 100% !important;
            flex-shrink: 0 !important;
          }
          .horizontal-card-content {
            flex-grow: 1 !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function Destinations() {
  return (
    <section
      id="destinations"
      className="section-py"
      style={{ background: '#FAF7F2' }} // Sleek subtle sand tone for clean cards contrast
    >
      <div className="container-px">
        <SectionTitle
          eyebrow="Top Destinations"
          title="Where Will You"
          highlight="Wander Next?"
          subtitle="Hand-picked destinations across the globe — from sun-soaked beaches to sky-scraping peaks, each crafted for an extraordinary experience."
        />

        {/* Asymmetric Asymmetric masonry grid layout */}
        <div style={{ marginBottom: '56px' }}>
          {/* Top Row Grid: Large Left + 2 stacked Right */}
          <div className="dest-top-grid">
            {featured[0] && (
              <DestinationCard dest={featured[0]} index={0} layout="large" />
            )}
            <div className="dest-right-stack">
              {featured[1] && (
                <DestinationCard dest={featured[1]} index={1} layout="horizontal" />
              )}
              {featured[2] && (
                <DestinationCard dest={featured[2]} index={2} layout="horizontal" />
              )}
            </div>
          </div>

          {/* Bottom Row Grid: 3-column with offset middle card */}
          <div className="dest-bottom-grid">
            {featured[3] && (
              <DestinationCard dest={featured[3]} index={3} />
            )}
            {featured[4] && (
              <DestinationCard dest={featured[4]} index={4} isOffset={true} />
            )}
            {featured[5] && (
              <DestinationCard dest={featured[5]} index={5} />
            )}
          </div>
        </div>

        {/* View All CTA */}
        <div style={{ textAlign: 'center' }}>
          <Link href="/destinations" className="btn-primary">
            <span>View All Destinations</span>
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .dest-bottom-grid {
            margin-top: 0 !important;
          }
        }
      `}</style>
    </section>
  );
}

