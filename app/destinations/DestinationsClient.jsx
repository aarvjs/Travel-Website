'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { MapPin, Star, Clock, ArrowRight, Filter } from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionTitle from '@/components/common/SectionTitle';
import BookingCTA from '@/components/home/BookingCTA';
import { destinations } from '@/data/destinations';

const continents = ['All', 'Asia', 'Europe'];

const badgeColors = {
  Trending: { bg: 'rgba(249,115,22,0.12)', color: '#F97316', border: 'rgba(249,115,22,0.25)' },
  Popular: { bg: 'rgba(14,165,233,0.12)', color: '#0EA5E9', border: 'rgba(14,165,233,0.25)' },
  Luxury: { bg: 'rgba(168,85,247,0.12)', color: '#A855F7', border: 'rgba(168,85,247,0.25)' },
  Adventure: { bg: 'rgba(34,197,94,0.12)', color: '#22C55E', border: 'rgba(34,197,94,0.25)' },
  Beach: { bg: 'rgba(14,165,233,0.12)', color: '#0EA5E9', border: 'rgba(14,165,233,0.25)' },
  Premium: { bg: 'rgba(234,179,8,0.12)', color: '#EAB308', border: 'rgba(234,179,8,0.25)' },
  Romantic: { bg: 'rgba(236,72,153,0.12)', color: '#EC4899', border: 'rgba(236,72,153,0.25)' },
  Cultural: { bg: 'rgba(239,68,68,0.12)', color: '#EF4444', border: 'rgba(239,68,68,0.25)' },
  Classic: { bg: 'rgba(14,165,233,0.12)', color: '#0EA5E9', border: 'rgba(14,165,233,0.25)' },
};

export default function DestinationsClient() {
  const [active, setActive] = useState('All');

  const filtered =
    active === 'All'
      ? destinations
      : destinations.filter((d) => d.continent === active);

  return (
    <>
      <PageHero
        title="Explore Our Destinations"
        subtitle="From sun-drenched beaches to snow-capped mountains — discover extraordinary places across the globe."
        image="https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1600&q=85"
        breadcrumb="Destinations"
      />

      <section className="section-py" style={{ background: '#fff' }}>
        <div className="container-px">
          <SectionTitle
            eyebrow="Browse by Region"
            title="All"
            highlight="Destinations"
            subtitle="Filter by continent to find the perfect destination for your next journey."
          />

          {/* Filter Tabs */}
          <div
            style={{
              display: 'flex',
              gap: '10px',
              justifyContent: 'center',
              flexWrap: 'wrap',
              marginBottom: '48px',
            }}
          >
            {continents.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                style={{
                  padding: '10px 24px',
                  borderRadius: '50px',
                  border: '1.5px solid',
                  borderColor: active === c ? '#0EA5E9' : 'rgba(7,26,45,0.15)',
                  background: active === c ? '#0EA5E9' : '#fff',
                  color: active === c ? '#fff' : 'var(--text-muted)',
                  fontWeight: 600,
                  fontSize: '0.88rem',
                  cursor: 'pointer',
                  transition: 'all 0.25s ease',
                  letterSpacing: '0.02em',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
              >
                {c === 'All' && <Filter size={14} />}
                {c}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
              gap: '28px',
            }}
          >
            {filtered.map((dest, i) => {
              const badge = badgeColors[dest.badge] || badgeColors.Popular;
              return (
                <motion.div
                  key={dest.id}
                  layout
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  style={{
                    background: '#fff',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(7,26,45,0.08)',
                    border: '1px solid rgba(7,26,45,0.05)',
                    transition: 'transform 0.4s ease, box-shadow 0.4s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-6px)';
                    e.currentTarget.style.boxShadow = '0 20px 56px rgba(7,26,45,0.14)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 24px rgba(7,26,45,0.08)';
                  }}
                >
                  <div style={{ position: 'relative', height: '220px', overflow: 'hidden' }}>
                    <Image
                      src={dest.image}
                      alt={dest.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 33vw"
                      style={{ objectFit: 'cover', transition: 'transform 0.5s ease' }}
                      className="dest-img"
                    />
                    <div className="img-overlay" />
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
                      }}
                    >
                      <span style={{ fontSize: '0.72rem', fontWeight: 700, color: badge.color }}>
                        {dest.badge}
                      </span>
                    </div>
                    <div
                      style={{
                        position: 'absolute',
                        top: '14px',
                        right: '14px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '4px',
                        padding: '4px 10px',
                        background: 'rgba(7,26,45,0.65)',
                        borderRadius: '50px',
                        backdropFilter: 'blur(8px)',
                      }}
                    >
                      <Star size={11} color="#F97316" fill="#F97316" />
                      <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff' }}>{dest.rating}</span>
                    </div>
                    <div style={{ position: 'absolute', bottom: '14px', left: '14px', display: 'flex', alignItems: 'center', gap: '5px' }}>
                      <MapPin size={13} color="#fff" />
                      <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>{dest.country}</span>
                    </div>
                  </div>

                  <div style={{ padding: '20px 22px 22px' }}>
                    <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: '8px', marginBottom: '8px' }}>
                      <h3 style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.2rem', fontWeight: 700, color: 'var(--navy)', lineHeight: 1.2 }}>
                        {dest.name}
                      </h3>
                      <div style={{ textAlign: 'right', flexShrink: 0 }}>
                        <p style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>From</p>
                        <p style={{ fontFamily: "'Playfair Display', Georgia, serif", fontSize: '1.1rem', fontWeight: 700, color: '#0EA5E9' }}>
                          ${dest.price.toLocaleString()}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px' }}>
                      <Clock size={13} color="var(--text-muted)" />
                      <span style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>{dest.days}</span>
                    </div>
                    <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.65, marginBottom: '16px', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                      {dest.description}
                    </p>
                    {/* Highlights */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
                      {dest.highlights.slice(0, 3).map((h) => (
                        <span
                          key={h}
                          style={{
                            padding: '3px 10px',
                            background: 'rgba(7,26,45,0.04)',
                            border: '1px solid rgba(7,26,45,0.08)',
                            borderRadius: '50px',
                            fontSize: '0.72rem',
                            fontWeight: 600,
                            color: 'var(--navy)',
                          }}
                        >
                          {h}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="/contact"
                      style={{
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '6px',
                        fontSize: '0.85rem',
                        fontWeight: 600,
                        color: '#0EA5E9',
                        textDecoration: 'none',
                        transition: 'gap 0.2s',
                      }}
                      onMouseEnter={(e) => (e.currentTarget.style.gap = '10px')}
                      onMouseLeave={(e) => (e.currentTarget.style.gap = '6px')}
                    >
                      Enquire Now <ArrowRight size={15} />
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <BookingCTA />

      <style>{`
        .dest-img { transition: transform 0.5s ease; }
        div:hover .dest-img { transform: scale(1.06); }
      `}</style>
    </>
  );
}
