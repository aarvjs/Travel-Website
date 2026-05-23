'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
  Calendar,
  Users,
  CheckCircle,
  Tag,
  MessageCircle,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import PageHero from '@/components/common/PageHero';
import SectionTitle from '@/components/common/SectionTitle';
import BookingCTA from '@/components/home/BookingCTA';
import { packages } from '@/data/packages';

const WHATSAPP_BASE = 'https://wa.me/919999999999?text=I%20am%20interested%20in%20the%20';

function PackageDetail({ pkg }) {
  const [expanded, setExpanded] = useState(false);
  const savings = pkg.originalPrice - pkg.price;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{
        background: '#fff',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 4px 32px rgba(7,26,45,0.08)',
        border: '1px solid rgba(7,26,45,0.05)',
        marginBottom: '32px',
      }}
    >
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 380px) 1fr',
          gap: 0,
        }}
        className="pkg-detail-grid"
      >
        {/* Left: Image */}
        <div style={{ position: 'relative', minHeight: '320px', overflow: 'hidden' }}>
          <Image
            src={pkg.image}
            alt={pkg.name}
            fill
            sizes="380px"
            style={{ objectFit: 'cover' }}
          />
          <div className="img-overlay" />

          {/* Badge */}
          <div
            style={{
              position: 'absolute',
              top: '16px',
              left: '16px',
              padding: '6px 16px',
              background:
                pkg.badgeColor === 'sunset'
                  ? 'rgba(249,115,22,0.9)'
                  : 'rgba(14,165,233,0.9)',
              borderRadius: '50px',
            }}
          >
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>{pkg.badge}</span>
          </div>

          {savings > 0 && (
            <div
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                display: 'flex',
                alignItems: 'center',
                gap: '4px',
                padding: '6px 12px',
                background: 'rgba(34,197,94,0.9)',
                borderRadius: '50px',
              }}
            >
              <Tag size={12} color="#fff" />
              <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>Save ${savings}</span>
            </div>
          )}

          {/* Duration */}
          <div
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '16px',
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              padding: '6px 14px',
              background: 'rgba(7,26,45,0.75)',
              borderRadius: '50px',
              backdropFilter: 'blur(8px)',
            }}
          >
            <Calendar size={13} color="#0EA5E9" />
            <span style={{ fontSize: '0.8rem', fontWeight: 600, color: '#fff' }}>
              {pkg.days} Days / {pkg.nights} Nights
            </span>
          </div>
        </div>

        {/* Right: Content */}
        <div style={{ padding: '32px 36px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'flex-start',
              justifyContent: 'space-between',
              gap: '16px',
              marginBottom: '12px',
            }}
          >
            <div>
              <h3
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '1.5rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1.2,
                  marginBottom: '6px',
                }}
              >
                {pkg.name}
              </h3>
              <p style={{ fontSize: '0.88rem', color: 'var(--text-muted)', fontWeight: 500 }}>
                {pkg.destination}
              </p>
            </div>
            <div style={{ textAlign: 'right', flexShrink: 0 }}>
              {pkg.originalPrice && (
                <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', textDecoration: 'line-through' }}>
                  ${pkg.originalPrice.toLocaleString()}
                </p>
              )}
              <p
                style={{
                  fontFamily: "'Playfair Display', Georgia, serif",
                  fontSize: '2rem',
                  fontWeight: 700,
                  color: 'var(--navy)',
                  lineHeight: 1,
                }}
              >
                ${pkg.price.toLocaleString()}
              </p>
              <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', fontWeight: 500 }}>per person</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '16px' }}>
            <Users size={14} color="var(--text-muted)" />
            <span style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontWeight: 500 }}>
              {pkg.groupSize}
            </span>
          </div>

          <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.7, marginBottom: '20px' }}>
            {pkg.highlights}
          </p>

          {/* Inclusions */}
          <div style={{ marginBottom: '20px' }}>
            <p style={{ fontSize: '0.78rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--navy)', marginBottom: '10px' }}>
              What's Included
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
              {pkg.inclusions.map((inc) => (
                <span
                  key={inc}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '5px',
                    padding: '5px 12px',
                    background: 'rgba(14,165,233,0.06)',
                    border: '1px solid rgba(14,165,233,0.15)',
                    borderRadius: '50px',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    color: '#0EA5E9',
                  }}
                >
                  <CheckCircle size={11} />
                  {inc}
                </span>
              ))}
            </div>
          </div>

          {/* Itinerary toggle */}
          <button
            onClick={() => setExpanded(!expanded)}
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '6px',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              fontSize: '0.85rem',
              fontWeight: 600,
              color: '#0EA5E9',
              padding: 0,
              marginBottom: expanded ? '16px' : '20px',
            }}
          >
            {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
            {expanded ? 'Hide' : 'View'} Day-by-Day Itinerary
          </button>

          {expanded && (
            <div style={{ marginBottom: '20px' }}>
              {pkg.itinerary.map((day, idx) => (
                <div
                  key={idx}
                  style={{
                    display: 'flex',
                    gap: '12px',
                    marginBottom: '8px',
                  }}
                >
                  <div
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      background: 'rgba(14,165,233,0.1)',
                      border: '1px solid rgba(14,165,233,0.25)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      fontSize: '0.65rem',
                      fontWeight: 700,
                      color: '#0EA5E9',
                      flexShrink: 0,
                    }}
                  >
                    {idx + 1}
                  </div>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.5, paddingTop: '3px' }}>
                    {day}
                  </p>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <a
            href={`${WHATSAPP_BASE}${encodeURIComponent(pkg.name)}%20package.`}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '13px 28px',
              background: 'linear-gradient(135deg, #25D366, #128C7E)',
              color: '#fff',
              fontWeight: 700,
              fontSize: '0.9rem',
              borderRadius: '50px',
              textDecoration: 'none',
              boxShadow: '0 4px 20px rgba(37,211,102,0.35)',
              transition: 'all 0.3s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 32px rgba(37,211,102,0.45)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 20px rgba(37,211,102,0.35)';
            }}
          >
            <MessageCircle size={18} fill="#fff" />
            Book This Package
          </a>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .pkg-detail-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </motion.div>
  );
}

export default function PackagesClient() {
  return (
    <>
      <PageHero
        title="Travel Packages"
        subtitle="Luxury journeys crafted with precision — from desert safaris to alpine adventures."
        image="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=85"
        breadcrumb="Packages"
      />

      <section className="section-py" style={{ background: 'var(--sand)' }}>
        <div className="container-px">
          <SectionTitle
            eyebrow="Our Best Packages"
            title="Find Your Perfect"
            highlight="Journey"
            subtitle="Each package is designed with care — luxury stays, authentic experiences, and seamless planning."
          />

          <div>
            {packages.map((pkg) => (
              <PackageDetail key={pkg.id} pkg={pkg} />
            ))}
          </div>
        </div>
      </section>

      <BookingCTA />
    </>
  );
}
