'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: 'Home',         href: '/' },
  { label: 'Destinations', href: '/destinations' },
  { label: 'Packages',     href: '/packages' },
  { label: 'About',        href: '/about' },
  { label: 'Gallery',      href: '/gallery' },
  { label: 'Contact',      href: '/contact' },
];

/* Instagram SVG */
const InstagramIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

/* Facebook SVG */
const FacebookIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none"
    stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

export default function FloatingNavbar() {
  const [open,     setOpen]     = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 1024);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => { setOpen(false); }, [pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  /* Navbar style — navy blue when scrolled so it's visible on white pages */
  const navBg = scrolled
    ? 'rgba(7, 26, 45, 0.95)'
    : 'rgba(255,255,255,0.13)';
  const navBorder = scrolled
    ? '1px solid rgba(255,255,255,0.12)'
    : '1px solid rgba(255,255,255,0.25)';
  const navBlur = scrolled ? 'blur(24px)' : 'blur(20px)';
  const navShadow = scrolled
    ? '0 8px 48px rgba(0,0,0,0.35)'
    : '0 8px 32px rgba(0,0,0,0.15)';

  return (
    <>
      <style>{`
        @keyframes fadeNavDown {
          from { opacity:0; transform:translateX(-50%) translateY(-20px); }
          to   { opacity:1; transform:translateX(-50%) translateY(0); }
        }
        @keyframes slideMobileDown {
          from { opacity:0; transform:translateX(-50%) translateY(-10px) scale(0.97); }
          to   { opacity:1; transform:translateX(-50%) scale(1); }
        }

        /* Social icon hover */
        .fnav-social {
          display: flex; align-items: center; justify-content: center;
          width: 32px; height: 32px; border-radius: 50%;
          background: rgba(255,255,255,0.1);
          border: 1px solid rgba(255,255,255,0.22);
          color: rgba(255,255,255,0.75);
          text-decoration: none;
          transition: background 0.25s, color 0.25s, transform 0.25s;
          flex-shrink: 0;
        }
        .fnav-social:hover {
          background: rgba(255,255,255,0.22);
          color: #fff;
          transform: translateY(-2px);
        }

        /* Fill-from-bottom for Plan Trip */
        .fnav-btn {
          position: relative; overflow: hidden;
          display: inline-flex; align-items: center; justify-content: center;
          background: #fff; color: #111;
          padding: 0 20px; height: 40px;
          border-radius: 999px; font-size: 0.87rem; font-weight: 600;
          text-decoration: none; white-space: nowrap;
          box-shadow: 0 2px 12px rgba(0,0,0,0.15);
          transition: color 0.32s; flex-shrink: 0;
          z-index: 0;
        }
        .fnav-btn::before {
          content: '';
          position: absolute; left:0; right:0; bottom:0; height:100%;
          background: #111;
          transform: scaleY(0); transform-origin: bottom;
          transition: transform 0.32s cubic-bezier(0.4,0,0.2,1);
          border-radius: inherit;
          z-index: -1;
        }
        .fnav-btn:hover { color: #fff !important; }
        .fnav-btn:hover::before { transform: scaleY(1); }

        /* Nav link pill hover */
        .fnav-link {
          font-size: 0.875rem; font-weight: 500;
          color: rgba(255,255,255,0.82); text-decoration: none;
          white-space: nowrap; padding: 7px 12px;
          border-radius: 999px;
          transition: color 0.2s, background 0.2s;
        }
        .fnav-link:hover {
          color: #fff;
          background: rgba(255,255,255,0.1);
        }
        .fnav-link.active {
          color: #fff;
          background: rgba(255,255,255,0.12);
          font-weight: 600;
        }
      `}</style>

      {/* ── Floating Navbar ── */}
      <nav style={{
        background:            navBg,
        backdropFilter:        navBlur,
        WebkitBackdropFilter:  navBlur,
        border:                navBorder,
        boxShadow:             navShadow,
        position:  'fixed',
        top:       '18px',
        left:      '50%',
        transform: 'translateX(-50%)',
        width:     isMobile ? 'calc(100% - 24px)' : 'calc(100% - 40px)',
        maxWidth:  '1160px',
        height:    '64px',
        borderRadius: '999px',
        zIndex: 1000,
        display:        'flex',
        alignItems:     'center',
        justifyContent: 'space-between',
        padding: isMobile ? '0 16px' : '0 20px',
        transition: 'background 0.35s ease, border 0.35s ease, backdrop-filter 0.35s ease, box-shadow 0.35s ease',
        animation: 'fadeNavDown 0.7s cubic-bezier(0.16,1,0.3,1) both',
      }}>

        {/* Logo */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', flexShrink: 0 }}>
          <div style={{
            width: '34px', height: '34px', borderRadius: '50%',
            background: 'rgba(255,255,255,0.15)', border: '1px solid rgba(255,255,255,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
          }}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76" fill="white" stroke="none" />
            </svg>
          </div>
          <span style={{ fontSize: '1.1rem', fontWeight: 700, color: '#fff', letterSpacing: '-0.015em', lineHeight: 1, whiteSpace: 'nowrap' }}>
            TravelVista
          </span>
        </Link>

        {/* Desktop Nav Links */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
            {NAV_LINKS.map(link => (
              <Link
                key={link.label}
                href={link.href}
                className={`fnav-link${pathname === link.href ? ' active' : ''}`}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}

        {/* Right section: Socials + Plan Trip */}
        {!isMobile && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', flexShrink: 0 }}>
            {/* Instagram */}
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fnav-social" aria-label="Instagram">
              <InstagramIcon />
            </a>
            {/* Facebook */}
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fnav-social" aria-label="Facebook">
              <FacebookIcon />
            </a>
            {/* Divider */}
            <div style={{ width: '1px', height: '22px', background: 'rgba(255,255,255,0.2)' }} />
            {/* Plan Trip */}
            <Link href="/contact" className="fnav-btn">
              Plan Trip
            </Link>
          </div>
        )}

        {/* Hamburger — Mobile */}
        {isMobile && (
          <button
            onClick={() => setOpen(v => !v)}
            style={{
              background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)',
              borderRadius: '50%', width: '40px', height: '40px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: '#fff', cursor: 'pointer', flexShrink: 0,
            }}
            aria-label="Toggle menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        )}
      </nav>

      {/* ── Mobile Dropdown ── */}
      {open && isMobile && (
        <div style={{
          background: 'rgba(7, 26, 45, 0.98)',
          backdropFilter: 'blur(24px)',
          WebkitBackdropFilter: 'blur(24px)',
          border: '1px solid rgba(14, 165, 233, 0.18)',
          position: 'fixed',
          top: '94px',
          left: '50%',
          width: 'calc(100% - 24px)',
          maxWidth: '440px',
          borderRadius: '20px',
          zIndex: 999,
          padding: '12px 16px 16px',
          boxShadow: '0 20px 56px rgba(0,0,0,0.4)',
          animation: 'slideMobileDown 0.35s cubic-bezier(0.16,1,0.3,1) both',
        }}>
          {NAV_LINKS.map(link => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                style={{
                  display: 'block', padding: '12px 14px',
                  fontSize: '0.95rem', fontWeight: isActive ? 600 : 500,
                  color: isActive ? '#fff' : 'rgba(255,255,255,0.78)',
                  textDecoration: 'none', borderRadius: '12px',
                  background: isActive ? 'rgba(255,255,255,0.1)' : 'transparent',
                  transition: 'background 0.15s, color 0.15s',
                }}
                onMouseEnter={e => { if (!isActive) { e.currentTarget.style.background = 'rgba(255,255,255,0.07)'; e.currentTarget.style.color = '#fff'; } }}
                onMouseLeave={e => { if (!isActive) { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.78)'; } }}
              >
                {link.label}
              </Link>
            );
          })}
          {/* Social + CTA */}
          <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="fnav-social" aria-label="Instagram">
              <InstagramIcon />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="fnav-social" aria-label="Facebook">
              <FacebookIcon />
            </a>
            <Link
              href="/contact"
              style={{
                flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center',
                background: '#fff', color: '#111',
                height: '44px', borderRadius: '999px',
                fontSize: '0.9rem', fontWeight: 700, textDecoration: 'none',
                boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
              }}
            >
              Plan Trip
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
