'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Shield, Award, Headphones, Map, Check } from 'lucide-react';
import SectionTitle from '../common/SectionTitle';

const features = [
  {
    icon: Shield,
    title: 'Luxury Stays',
    description:
      'Hand-selected 4 and 5-star hotels, private villas, and boutique resorts in the most stunning locations worldwide.',
    color: '#0EA5E9',
    bg: 'rgba(14,165,233,0.08)',
  },
  {
    icon: Map,
    title: 'Guided Tours',
    description:
      'Expert local guides who bring destinations to life with insider knowledge, hidden gems, and authentic cultural connections.',
    color: '#F97316',
    bg: 'rgba(249,115,22,0.08)',
  },
  {
    icon: Award,
    title: 'Adventure Activities',
    description:
      'From Himalayan treks to Maldivian dives — we curate adrenaline experiences that create stories worth telling.',
    color: '#A855F7',
    bg: 'rgba(168,85,247,0.08)',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Your dedicated travel concierge is reachable round-the-clock, ensuring a seamless journey from departure to return.',
    color: '#22C55E',
    bg: 'rgba(34,197,94,0.08)',
  },
];

const imageStack = [
  'https://images.unsplash.com/photo-1540202404-a2f29016b523?w=600&q=85',
  'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=85',
  'https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=600&q=85',
];

const trustBadges = ['ISO Certified', 'IATA Member', 'Award Winning', 'Est. 2010'];

export default function Experience() {
  return (
    <section
      className="section-py"
      style={{ background: 'var(--navy)', position: 'relative', overflow: 'hidden' }}
    >
      {/* BG accent */}
      <div
        style={{
          position: 'absolute',
          top: '-200px',
          right: '-200px',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(14,165,233,0.08) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div className="container-px">
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))',
            gap: '72px',
            alignItems: 'center',
          }}
        >
          {/* Left: Image Stack */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ position: 'relative' }}
          >
            <div style={{ position: 'relative', height: '480px' }}>
              {/* Main image */}
              <div
                style={{
                  position: 'absolute',
                  top: '0',
                  left: '0',
                  width: '75%',
                  height: '340px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                }}
              >
                <Image
                  src={imageStack[0]}
                  alt="Maldives luxury stay"
                  fill
                  sizes="400px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Second image */}
              <div
                style={{
                  position: 'absolute',
                  bottom: '0',
                  right: '0',
                  width: '60%',
                  height: '260px',
                  borderRadius: '20px',
                  overflow: 'hidden',
                  boxShadow: '0 24px 64px rgba(0,0,0,0.4)',
                  border: '4px solid var(--navy)',
                }}
                className="float-anim"
              >
                <Image
                  src={imageStack[1]}
                  alt="Swiss Alps"
                  fill
                  sizes="320px"
                  style={{ objectFit: 'cover' }}
                />
              </div>

              {/* Third image — small accent */}
              <div
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '58%',
                  transform: 'translateY(-50%)',
                  width: '100px',
                  height: '100px',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  border: '4px solid var(--navy)',
                  boxShadow: '0 8px 32px rgba(0,0,0,0.35)',
                }}
                style2="float-slow"
              >
                <Image
                  src={imageStack[2]}
                  alt="Bali"
                  fill
                  sizes="100px"
                  style={{ objectFit: 'cover' }}
                />
              </div>
            </div>

            {/* Trust badges */}
            <div
              style={{
                display: 'flex',
                gap: '8px',
                flexWrap: 'wrap',
                marginTop: '24px',
              }}
            >
              {trustBadges.map((badge) => (
                <div
                  key={badge}
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '6px 14px',
                    background: 'rgba(14,165,233,0.1)',
                    border: '1px solid rgba(14,165,233,0.2)',
                    borderRadius: '50px',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: 'rgba(255,255,255,0.7)',
                    letterSpacing: '0.03em',
                  }}
                >
                  <Check size={11} color="#0EA5E9" />
                  {badge}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            <SectionTitle
              eyebrow="Why WanderLux"
              title="The Experience"
              highlight="You Deserve"
              subtitle="We go beyond booking flights and hotels. Every WanderLux journey is a masterclass in luxury, authenticity, and care."
              align="left"
              light
            />

            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '20px',
              }}
            >
              {features.map((feature, i) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 * i }}
                    style={{
                      padding: '20px',
                      background: 'rgba(255,255,255,0.04)',
                      border: '1px solid rgba(255,255,255,0.08)',
                      borderRadius: '16px',
                      transition: 'all 0.3s ease',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.07)';
                      e.currentTarget.style.borderColor = 'rgba(14,165,233,0.25)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.04)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)';
                    }}
                  >
                    <div
                      style={{
                        width: '40px',
                        height: '40px',
                        borderRadius: '10px',
                        background: feature.bg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        marginBottom: '12px',
                      }}
                    >
                      <Icon size={18} color={feature.color} />
                    </div>
                    <h4
                      style={{
                        fontFamily: "'Playfair Display', Georgia, serif",
                        fontSize: '1rem',
                        fontWeight: 700,
                        color: '#fff',
                        marginBottom: '8px',
                        lineHeight: 1.2,
                      }}
                    >
                      {feature.title}
                    </h4>
                    <p
                      style={{
                        fontSize: '0.82rem',
                        color: 'rgba(255,255,255,0.5)',
                        lineHeight: 1.65,
                      }}
                    >
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
