'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {
  Calendar,
  Users,
  CheckCircle,
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Tag,
} from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { packages } from '../../data/packages';

function PackageCard({ pkg }) {
  const savings = pkg.originalPrice - pkg.price;

  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '20px',
        overflow: 'hidden',
        boxShadow: '0 4px 24px rgba(7,26,45,0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        transition: 'transform 0.4s ease, box-shadow 0.4s ease',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-8px)';
        e.currentTarget.style.boxShadow = '0 24px 64px rgba(7,26,45,0.16)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = '0 4px 24px rgba(7,26,45,0.08)';
      }}
    >
      {/* Image */}
      <div style={{ position: 'relative', height: '230px', overflow: 'hidden', flexShrink: 0 }}>
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          style={{ objectFit: 'cover', transition: 'transform 0.6s ease' }}
          className="pkg-img"
        />
        <div className="img-overlay" />

        {/* Badge */}
        <div
          style={{
            position: 'absolute',
            top: '14px',
            left: '14px',
            padding: '5px 14px',
            background:
              pkg.badgeColor === 'sunset'
                ? 'rgba(249,115,22,0.9)'
                : 'rgba(14,165,233,0.9)',
            borderRadius: '50px',
            backdropFilter: 'blur(8px)',
          }}
        >
          <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff', letterSpacing: '0.04em' }}>
            {pkg.badge}
          </span>
        </div>

        {/* Savings */}
        {savings > 0 && (
          <div
            style={{
              position: 'absolute',
              top: '14px',
              right: '14px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px',
              padding: '5px 12px',
              background: 'rgba(34,197,94,0.9)',
              borderRadius: '50px',
            }}
          >
            <Tag size={11} color="#fff" />
            <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#fff' }}>
              Save ${savings}
            </span>
          </div>
        )}

        {/* Duration overlay */}
        <div
          style={{
            position: 'absolute',
            bottom: '14px',
            left: '14px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px',
          }}
        >
          <Calendar size={13} color="#fff" />
          <span style={{ fontSize: '0.78rem', fontWeight: 600, color: '#fff' }}>
            {pkg.days} Days / {pkg.nights} Nights
          </span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: '22px', flex: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ marginBottom: '12px' }}>
          <h3
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1.2rem',
              fontWeight: 700,
              color: 'var(--navy)',
              marginBottom: '4px',
              lineHeight: 1.2,
            }}
          >
            {pkg.name}
          </h3>
          <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {pkg.destination}
          </p>
        </div>

        <p
          style={{
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
            lineHeight: 1.65,
            marginBottom: '16px',
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {pkg.highlights}
        </p>

        {/* Inclusions */}
        <div style={{ marginBottom: '20px' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '6px',
            }}
          >
            {pkg.inclusions.slice(0, 3).map((inc) => (
              <span
                key={inc}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '4px',
                  padding: '4px 10px',
                  background: 'rgba(14,165,233,0.07)',
                  border: '1px solid rgba(14,165,233,0.15)',
                  borderRadius: '50px',
                  fontSize: '0.72rem',
                  fontWeight: 600,
                  color: '#0EA5E9',
                }}
              >
                <CheckCircle size={10} />
                {inc}
              </span>
            ))}
            {pkg.inclusions.length > 3 && (
              <span
                style={{
                  padding: '4px 10px',
                  background: 'rgba(107,114,128,0.07)',
                  borderRadius: '50px',
                  fontSize: '0.72rem',
                  color: 'var(--text-muted)',
                  fontWeight: 600,
                }}
              >
                +{pkg.inclusions.length - 3} more
              </span>
            )}
          </div>
        </div>

        {/* Price + CTA */}
        <div
          style={{
            marginTop: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '12px',
            paddingTop: '16px',
            borderTop: '1px solid rgba(7,26,45,0.06)',
          }}
        >
          <div>
            {pkg.originalPrice && (
              <p
                style={{
                  fontSize: '0.78rem',
                  color: 'var(--text-muted)',
                  textDecoration: 'line-through',
                  lineHeight: 1,
                }}
              >
                ${pkg.originalPrice.toLocaleString()}
              </p>
            )}
            <p
              style={{
                fontFamily: "'Playfair Display', Georgia, serif",
                fontSize: '1.5rem',
                fontWeight: 700,
                color: 'var(--navy)',
                lineHeight: 1,
              }}
            >
              ${pkg.price.toLocaleString()}
              <span style={{ fontSize: '0.75rem', fontWeight: 500, color: 'var(--text-muted)' }}>
                {' '}/ person
              </span>
            </p>
          </div>
          <Link href="/packages" className="btn-primary" style={{ padding: '11px 20px', fontSize: '0.82rem' }}>
            View Details
            <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <style>{`
        div:hover .pkg-img { transform: scale(1.05); }
      `}</style>
    </div>
  );
}

export default function Packages() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="section-py"
      style={{
        background: 'linear-gradient(180deg, #F8FAFE 0%, var(--sand) 100%)',
      }}
    >
      <div className="container-px">
        <div
          style={{
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            gap: '24px',
            marginBottom: '48px',
            flexWrap: 'wrap',
          }}
        >
          <SectionTitle
            eyebrow="Travel Packages"
            title="Curated Trips for"
            highlight="Every Dream"
            subtitle="From luxury retreats to thrilling adventures — find the perfect package tailored for you."
            align="left"
          />

          {/* Custom Nav */}
          <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <button
              ref={prevRef}
              aria-label="Previous package"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: '1.5px solid rgba(7,26,45,0.15)',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0EA5E9';
                e.currentTarget.style.borderColor = '#0EA5E9';
                e.currentTarget.querySelector('svg').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.borderColor = 'rgba(7,26,45,0.15)';
                e.currentTarget.querySelector('svg').style.color = 'var(--navy)';
              }}
            >
              <ChevronLeft size={20} color="var(--navy)" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next package"
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '12px',
                border: '1.5px solid rgba(7,26,45,0.15)',
                background: '#fff',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = '#0EA5E9';
                e.currentTarget.style.borderColor = '#0EA5E9';
                e.currentTarget.querySelector('svg').style.color = '#fff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = '#fff';
                e.currentTarget.style.borderColor = 'rgba(7,26,45,0.15)';
                e.currentTarget.querySelector('svg').style.color = 'var(--navy)';
              }}
            >
              <ChevronRight size={20} color="var(--navy)" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={28}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1.3, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 24 },
            1024: { slidesPerView: 3, spaceBetween: 28 },
          }}
          style={{ paddingBottom: '52px' }}
        >
          {packages.map((pkg) => (
            <SwiperSlide key={pkg.id} style={{ height: 'auto' }}>
              <PackageCard pkg={pkg} />
            </SwiperSlide>
          ))}
        </Swiper>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/packages" className="btn-primary">
            <ArrowRight size={16} />
            View All Packages
          </Link>
        </div>
      </div>
    </section>
  );
}
