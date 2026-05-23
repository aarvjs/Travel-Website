'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowRight, MapPin, Users, PhoneCall } from 'lucide-react';
import FadeIn from '@/components/common/FadeIn';

const STATS = [
  { value: '50+',  label: 'Destinations',   icon: MapPin    },
  { value: '10k+', label: 'Happy Travelers', icon: Users     },
  { value: '24/7', label: 'Travel Support',  icon: PhoneCall },
];

const DESTINATIONS = ['Dubai', 'Bali', 'Maldives', 'Manali'];

/* ── Inline animated heading ── */
function HeroHeading({ isMobile }) {
  const [show, setShow] = useState(false);
  const lines = ['Discover the World', 'With TravelVista'];

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 300);
    return () => clearTimeout(t);
  }, []);

  return (
    <h1 style={{
      margin: 0, padding: 0, fontWeight: 700, color: '#fff',
      lineHeight: 1.08, letterSpacing: '-0.03em',
      fontSize: isMobile ? 'clamp(2rem, 10vw, 3rem)' : 'clamp(2.8rem, 5.5vw, 4.5rem)',
    }}>
      {lines.map((line, li) => (
        <span key={li} style={{ display: 'block' }}>
          {Array.from(line).map((char, ci) => (
            <span key={ci} style={{
              display: 'inline-block',
              opacity: show ? 1 : 0,
              transform: show ? 'translateX(0)' : 'translateX(-16px)',
              transition: 'opacity 480ms ease, transform 480ms cubic-bezier(0.16,1,0.3,1)',
              transitionDelay: `${(li * line.length * 26) + (ci * 26)}ms`,
            }}>
              {char === ' ' ? '\u00A0' : char}
            </span>
          ))}
        </span>
      ))}
    </h1>
  );
}

export default function Hero() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <style>{`
        /* Right card float animation */
        @keyframes travelFloat {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        /* Fill-from-bottom button hover */
        .hero-btn { position: relative; overflow: hidden; z-index: 0; }
        .hero-btn::before {
          content: '';
          position: absolute; left:0; right:0; bottom:0; height:100%;
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          border-radius: inherit; z-index: -1;
        }
        .hero-btn:hover::before { transform: scaleY(1); }

        /* Explore Packages: white → black fill */
        .hero-btn-primary {
          background: #fff; color: #111;
          transition: color 0.32s;
        }
        .hero-btn-primary::before { background: #111; }
        .hero-btn-primary:hover { color: #fff !important; }

        /* Book Your Trip: glass → white fill */
        .hero-btn-secondary {
          color: #fff;
          transition: color 0.32s;
        }
        .hero-btn-secondary::before { background: #fff; }
        .hero-btn-secondary:hover { color: #111 !important; }
      `}</style>

      <section style={{
        position: 'relative', width: '100%', minHeight: '100svh',
        overflow: 'hidden', background: '#0a0a0a',
        fontFamily: 'Inter, sans-serif',
      }}>

        {/* ── Video Background ── */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
          <video
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260403_050628_c4e32401-fab4-4a27-b7a8-6e9291cd5959.mp4"
            autoPlay loop muted playsInline
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{
            position: 'absolute', inset: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.70) 0%, rgba(0,0,0,0.28) 55%, rgba(0,0,0,0.14) 100%)',
          }} />
        </div>

        {/* ── Hero Content ── */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, zIndex: 10,
          paddingBottom: isMobile ? '52px' : '80px',
        }}>
          <div style={{
            maxWidth: '1160px', margin: '0 auto',
            padding: isMobile ? '0 20px' : '0 64px',
          }}>
            <div style={{ maxWidth: '640px' }}>

              {/* Trust Badge */}
              <FadeIn delay={100} duration={700}>
                <div style={{
                  display: 'inline-flex', alignItems: 'center', gap: '7px',
                  padding: '5px 13px', borderRadius: '999px', marginBottom: '18px',
                  background: 'rgba(255,255,255,0.11)', border: '1px solid rgba(255,255,255,0.2)',
                }}>
                  <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#4ade80' }} />
                  <span style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(255,255,255,0.75)', textTransform: 'uppercase' }}>
                    Trusted Travel Partner
                  </span>
                </div>
              </FadeIn>

              {/* Heading */}
              <HeroHeading isMobile={isMobile} />

              {/* Subheading */}
              <FadeIn delay={900} duration={900}>
                <p style={{
                  marginTop: '16px',
                  fontSize: isMobile ? '0.9rem' : '1.02rem',
                  lineHeight: 1.68, fontWeight: 400,
                  color: 'rgba(255,255,255,0.75)',
                  maxWidth: '500px',
                }}>
                  Explore curated destinations, custom tour packages, luxury hotel stays, and unforgettable travel experiences — all in one place.
                </p>
              </FadeIn>

              {/* Buttons */}
              <FadeIn delay={1200} duration={900}>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px', marginTop: '28px' }}>

                  {/* Explore Packages */}
                  <Link
                    href="/packages"
                    className="hero-btn hero-btn-primary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      padding: '0 28px', height: '50px',
                      borderRadius: '999px', fontWeight: 600, fontSize: '0.92rem',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      boxShadow: '0 4px 20px rgba(0,0,0,0.22)',
                    }}
                  >
                    Explore Packages
                  </Link>

                  {/* Book Your Trip → /contact */}
                  <Link
                    href="/contact"
                    className="hero-btn hero-btn-secondary"
                    style={{
                      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
                      padding: '0 28px', height: '50px',
                      borderRadius: '999px', fontWeight: 600, fontSize: '0.92rem',
                      textDecoration: 'none', whiteSpace: 'nowrap',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.28)',
                      backdropFilter: 'blur(12px)',
                    }}
                  >
                    Book Your Trip
                  </Link>
                </div>
              </FadeIn>

              {/* Stats */}
              <FadeIn delay={1500} duration={900}>
                <div style={{
                  display: 'grid',
                  gridTemplateColumns: isMobile ? '1fr 1fr' : 'repeat(3, 1fr)',
                  gap: '10px', marginTop: '24px',
                }}>
                  {STATS.map(({ value, label, icon: Icon }) => (
                    <div key={label} style={{
                      display: 'flex', alignItems: 'center', gap: '12px',
                      padding: '12px 14px',
                      background: 'rgba(255,255,255,0.12)',
                      border: '1px solid rgba(255,255,255,0.2)',
                      borderRadius: '14px',
                      backdropFilter: 'blur(14px)',
                      WebkitBackdropFilter: 'blur(14px)',
                    }}>
                      <div style={{
                        width: '38px', height: '38px', minWidth: '38px',
                        borderRadius: '50%',
                        background: 'rgba(255,255,255,0.1)',
                        border: '1px solid rgba(255,255,255,0.18)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                      }}>
                        <Icon size={16} color="rgba(255,255,255,0.85)" strokeWidth={2} />
                      </div>
                      <div>
                        <div style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', lineHeight: 1.1 }}>{value}</div>
                        <div style={{ fontSize: '0.68rem', color: 'rgba(255,255,255,0.55)', marginTop: '3px', fontWeight: 400, whiteSpace: 'nowrap' }}>{label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </FadeIn>

            </div>
          </div>
        </div>

        {/* ── Right Floating Adventure Card (desktop only) ── */}
        {!isMobile && (
          <div style={{
            position: 'absolute', right: '64px', bottom: '80px',
            width: '268px', zIndex: 20,
            animation: 'travelFloat 6s ease-in-out infinite',
          }}>
            <FadeIn delay={1800} duration={1000}>
              <div style={{
                background: 'rgba(255,255,255,0.12)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.22)',
                borderRadius: '22px', padding: '20px',
                boxShadow: '0 16px 48px rgba(0,0,0,0.3)',
              }}>
                <span style={{
                  display: 'block', fontSize: '0.62rem', fontWeight: 700,
                  letterSpacing: '0.18em', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.45)', marginBottom: '12px',
                }}>
                  Next Adventure
                </span>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '16px' }}>
                  {DESTINATIONS.map(dest => (
                    <span key={dest} style={{
                      padding: '5px 13px', borderRadius: '999px',
                      fontSize: '0.78rem', fontWeight: 600, color: '#fff',
                      background: 'rgba(255,255,255,0.1)',
                      border: '1px solid rgba(255,255,255,0.2)',
                    }}>{dest}</span>
                  ))}
                </div>
                <Link
                  href="/packages"
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                    fontSize: '0.83rem', fontWeight: 600,
                    color: 'rgba(255,255,255,0.72)', textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = '#fff'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.72)'; }}
                >
                  View Offers <ArrowRight size={14} />
                </Link>
              </div>
            </FadeIn>
          </div>
        )}

      </section>
    </>
  );
}
