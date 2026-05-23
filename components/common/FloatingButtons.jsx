'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Phone, MessageCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [tooltip, setTooltip] = useState(null);

  useEffect(() => {
    const handleScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const WHATSAPP = 'https://wa.me/919999999999?text=Hello%2C%20I%20am%20interested%20in%20booking%20a%20trip%20with%20WanderLux%20Travels.';
  const PHONE = 'tel:+919999999999';

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 40 }}
          transition={{ duration: 0.4 }}
          style={{
            position: 'fixed',
            right: '24px',
            bottom: '32px',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            gap: '12px',
          }}
        >
          {/* WhatsApp */}
          <div style={{ position: 'relative' }}>
            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setTooltip('whatsapp')}
              onMouseLeave={() => setTooltip(null)}
              aria-label="Chat on WhatsApp"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                background: 'linear-gradient(135deg, #25D366, #128C7E)',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(37, 211, 102, 0.45)',
                textDecoration: 'none',
                animation: 'pulse-ring 2s infinite',
              }}
            >
              <MessageCircle size={22} color="#fff" fill="#fff" />
            </motion.a>
            {tooltip === 'whatsapp' && (
              <div
                style={{
                  position: 'absolute',
                  right: '60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'var(--navy)',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                  letterSpacing: '0.03em',
                }}
              >
                Chat on WhatsApp
              </div>
            )}
          </div>

          {/* Call */}
          <div style={{ position: 'relative' }}>
            <motion.a
              href={PHONE}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onMouseEnter={() => setTooltip('call')}
              onMouseLeave={() => setTooltip(null)}
              aria-label="Call Us"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                width: '52px',
                height: '52px',
                background: 'linear-gradient(135deg, #0EA5E9, #0284C7)',
                borderRadius: '50%',
                boxShadow: '0 4px 20px rgba(14, 165, 233, 0.45)',
                textDecoration: 'none',
              }}
            >
              <Phone size={20} color="#fff" />
            </motion.a>
            {tooltip === 'call' && (
              <div
                style={{
                  position: 'absolute',
                  right: '60px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'var(--navy)',
                  color: '#fff',
                  padding: '6px 14px',
                  borderRadius: '8px',
                  fontSize: '0.78rem',
                  fontWeight: 600,
                  whiteSpace: 'nowrap',
                  boxShadow: '0 4px 16px rgba(0,0,0,0.25)',
                  letterSpacing: '0.03em',
                }}
              >
                Call Us Now
              </div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
