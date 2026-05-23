'use client';

import Link from 'next/link';
import Image from 'next/image';
import {
  Compass,
  MapPin,
  Phone,
  Mail,
  MessageCircle,
  Globe,
  Share2,
  Send,
  Play,
  ArrowRight,
} from 'lucide-react';

const footerLinks = {
  company: [
    { href: '/about', label: 'About Us' },
    { href: '/destinations', label: 'Destinations' },
    { href: '/packages', label: 'Travel Packages' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/contact', label: 'Contact' },
  ],
  destinations: [
    { href: '/destinations', label: 'Dubai, UAE' },
    { href: '/destinations', label: 'Bali, Indonesia' },
    { href: '/destinations', label: 'Maldives' },
    { href: '/destinations', label: 'Switzerland' },
    { href: '/destinations', label: 'Santorini, Greece' },
  ],
  support: [
    { href: '/contact', label: 'Plan Your Trip' },
    { href: '/packages', label: 'Group Bookings' },
    { href: '/contact', label: 'Visa Assistance' },
    { href: '/contact', label: 'Travel Insurance' },
    { href: '/contact', label: 'FAQs' },
  ],
};

const socials = [
  { icon: Share2, href: '#', label: 'Instagram' },
  { icon: Globe, href: '#', label: 'Facebook' },
  { icon: Send, href: '#', label: 'Twitter' },
  { icon: Play, href: '#', label: 'YouTube' },
];

export default function Footer() {
  return (
    <footer style={{ position: 'relative', overflow: 'hidden' }}>
      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
        <Image
          src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1600&q=80"
          alt="Travel background"
          fill
          sizes="100vw"
          style={{ objectFit: 'cover', objectPosition: 'center' }}
        />
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(7, 26, 45, 0.94)',
          }}
        />
      </div>

      {/* Main Footer Content */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          borderTop: '1px solid rgba(14,165,233,0.15)',
        }}
      >
        <div
          className="container-px"
          style={{
            paddingTop: '72px',
            paddingBottom: '48px',
          }}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '48px',
              marginBottom: '56px',
            }}
          >
            {/* Brand Column */}
            <div style={{ gridColumn: 'span 1' }}>
              <Link
                href="/"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  textDecoration: 'none',
                  marginBottom: '20px',
                }}
              >
                <div
                  style={{
                    width: '38px',
                    height: '38px',
                    background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Compass size={18} color="#fff" />
                </div>
                <div>
                  <span
                    style={{
                      fontFamily: "'Playfair Display', Georgia, serif",
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#fff',
                      display: 'block',
                      lineHeight: 1,
                    }}
                  >
                    WanderLux
                  </span>
                  <span
                    style={{
                      fontSize: '0.6rem',
                      letterSpacing: '0.15em',
                      textTransform: 'uppercase',
                      color: 'rgba(255,255,255,0.4)',
                      display: 'block',
                      marginTop: '2px',
                    }}
                  >
                    Travels
                  </span>
                </div>
              </Link>

              <p
                style={{
                  fontSize: '0.9rem',
                  color: 'rgba(255,255,255,0.55)',
                  lineHeight: 1.75,
                  marginBottom: '24px',
                  maxWidth: '280px',
                }}
              >
                Crafting bespoke luxury travel experiences across the world's most magnificent destinations since 2010.
              </p>

              {/* Contact Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '28px' }}>
                {[
                  { icon: Phone, text: '+91 99999 99999' },
                  { icon: Mail, text: 'hello@wanderlux.travel' },
                  { icon: MapPin, text: 'Mumbai, Maharashtra, India' },
                ].map(({ icon: Icon, text }) => (
                  <div
                    key={text}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.6)',
                    }}
                  >
                    <Icon size={14} color="#0EA5E9" />
                    {text}
                  </div>
                ))}
              </div>

              {/* Socials */}
              <div style={{ display: 'flex', gap: '10px' }}>
                {socials.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '10px',
                      background: 'rgba(255,255,255,0.06)',
                      border: '1px solid rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.2s',
                      textDecoration: 'none',
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = 'rgba(14,165,233,0.2)';
                      e.currentTarget.style.borderColor = 'rgba(14,165,233,0.4)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'rgba(255,255,255,0.06)';
                      e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                    }}
                  >
                    <Icon size={16} color="rgba(255,255,255,0.7)" />
                  </a>
                ))}
              </div>
            </div>

            {/* Links Columns */}
            {[
              { title: 'Company', links: footerLinks.company },
              { title: 'Destinations', links: footerLinks.destinations },
              { title: 'Support', links: footerLinks.support },
            ].map(({ title, links }) => (
              <div key={title}>
                <h4
                  style={{
                    fontSize: '0.8rem',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    color: '#0EA5E9',
                    marginBottom: '20px',
                  }}
                >
                  {title}
                </h4>
                <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {links.map(({ href, label }) => (
                    <li key={label}>
                      <Link
                        href={href}
                        style={{
                          fontSize: '0.88rem',
                          color: 'rgba(255,255,255,0.55)',
                          textDecoration: 'none',
                          transition: 'color 0.2s',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                        onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                      >
                        <ArrowRight size={12} style={{ opacity: 0.4 }} />
                        {label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Bottom Bar */}
          <div
            style={{
              borderTop: '1px solid rgba(255,255,255,0.08)',
              paddingTop: '28px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '16px',
            }}
          >
            <p
              style={{
                fontSize: '0.82rem',
                color: 'rgba(255,255,255,0.35)',
              }}
            >
              © {new Date().getFullYear()} WanderLux Travels. All rights reserved.
            </p>
            <div style={{ display: 'flex', gap: '24px' }}>
              {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item) => (
                <a
                  key={item}
                  href="#"
                  style={{
                    fontSize: '0.82rem',
                    color: 'rgba(255,255,255,0.35)',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.7)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
