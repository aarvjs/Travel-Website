'use client';

import { motion } from 'framer-motion';

export default function SectionTitle({
  eyebrow,
  title,
  highlight,
  subtitle,
  align = 'center',
  light = false,
}) {
  return (
    <div
      style={{
        textAlign: align,
        marginBottom: '56px',
        maxWidth: align === 'center' ? '640px' : '100%',
        marginLeft: align === 'center' ? 'auto' : 0,
        marginRight: align === 'center' ? 'auto' : 0,
      }}
    >
      {eyebrow && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            display: 'inline-block',
            fontSize: '0.75rem',
            fontWeight: 700,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#0EA5E9',
            marginBottom: '12px',
            padding: '4px 14px',
            background: 'rgba(14,165,233,0.1)',
            borderRadius: '50px',
            border: '1px solid rgba(14,165,233,0.2)',
          }}
        >
          {eyebrow}
        </motion.span>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
        style={{
          fontFamily: "'Playfair Display', Georgia, serif",
          fontSize: 'clamp(1.75rem, 4vw, 2.75rem)',
          fontWeight: 700,
          color: light ? '#fff' : 'var(--navy)',
          lineHeight: 1.15,
          marginBottom: subtitle ? '16px' : 0,
        }}
      >
        {title}{' '}
        {highlight && (
          <span
            style={{
              background: 'linear-gradient(135deg, #0EA5E9, #38BDF8)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            {highlight}
          </span>
        )}
      </motion.h2>

      {/* Accent line */}
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: '48px' }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        style={{
          height: '3px',
          background: 'linear-gradient(90deg, #0EA5E9, #F97316)',
          borderRadius: '2px',
          margin: align === 'center' ? '16px auto' : '16px 0',
        }}
      />

      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25 }}
          style={{
            fontSize: '1.05rem',
            color: light ? 'rgba(255,255,255,0.65)' : 'var(--text-muted)',
            lineHeight: 1.75,
            fontWeight: 400,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
