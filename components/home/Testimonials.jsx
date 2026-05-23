'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';
import { testimonials } from '../../data/testimonials';

function StarRating({ rating }) {
  return (
    <div style={{ display: 'flex', gap: '3px' }}>
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={14} color="#F97316" fill="#F97316" />
      ))}
    </div>
  );
}

function TestimonialCard({ review }) {
  return (
    <div
      style={{
        background: '#fff',
        borderRadius: '20px',
        padding: '32px 28px',
        boxShadow: '0 4px 24px rgba(7,26,45,0.08)',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        border: '1px solid rgba(7,26,45,0.06)',
      }}
    >
      {/* Quote icon */}
      <div
        style={{
          position: 'absolute',
          top: '20px',
          right: '24px',
          width: '40px',
          height: '40px',
          borderRadius: '10px',
          background: 'rgba(14,165,233,0.08)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Quote size={18} color="#0EA5E9" />
      </div>

      {/* Stars */}
      <div style={{ marginBottom: '16px' }}>
        <StarRating rating={review.rating} />
      </div>

      {/* Review text */}
      <p
        style={{
          fontSize: '0.92rem',
          color: 'var(--text-muted)',
          lineHeight: 1.75,
          flex: 1,
          marginBottom: '24px',
          fontStyle: 'italic',
        }}
      >
        "{review.review}"
      </p>

      {/* Trip tag */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          padding: '4px 12px',
          background: 'rgba(14,165,233,0.07)',
          border: '1px solid rgba(14,165,233,0.15)',
          borderRadius: '50px',
          marginBottom: '20px',
          alignSelf: 'flex-start',
        }}
      >
        <span style={{ fontSize: '0.72rem', fontWeight: 600, color: '#0EA5E9', letterSpacing: '0.03em' }}>
          {review.destination}
        </span>
      </div>

      {/* Author */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '14px',
          paddingTop: '20px',
          borderTop: '1px solid rgba(7,26,45,0.06)',
        }}
      >
        <div
          style={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            overflow: 'hidden',
            flexShrink: 0,
            border: '2px solid rgba(14,165,233,0.2)',
          }}
        >
          <Image
            src={review.avatar}
            alt={review.name}
            width={48}
            height={48}
            style={{ objectFit: 'cover', width: '100%', height: '100%' }}
          />
        </div>
        <div>
          <p
            style={{
              fontFamily: "'Playfair Display', Georgia, serif",
              fontSize: '1rem',
              fontWeight: 700,
              color: 'var(--navy)',
              lineHeight: 1.2,
              marginBottom: '2px',
            }}
          >
            {review.name}
          </p>
          <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', fontWeight: 500 }}>
            {review.designation} · {review.location}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <section
      className="section-py"
      style={{
        background: 'linear-gradient(180deg, #fff 0%, #F0F7FF 100%)',
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
            eyebrow="Client Stories"
            title="Words From Our"
            highlight="Happy Travelers"
            subtitle="Real experiences from real adventurers who trusted WanderLux with their most precious journeys."
            align="left"
          />

          {/* Custom nav */}
          <div style={{ display: 'flex', gap: '12px', flexShrink: 0 }}>
            <button
              ref={prevRef}
              aria-label="Previous review"
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
            >
              <ChevronLeft size={20} color="var(--navy)" />
            </button>
            <button
              ref={nextRef}
              aria-label="Next review"
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
            >
              <ChevronRight size={20} color="var(--navy)" />
            </button>
          </div>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={24}
          slidesPerView={1}
          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          pagination={{ clickable: true, dynamicBullets: true }}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          onBeforeInit={(swiper) => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          style={{ paddingBottom: '52px' }}
        >
          {testimonials.map((review) => (
            <SwiperSlide key={review.id} style={{ height: 'auto' }}>
              <TestimonialCard review={review} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
