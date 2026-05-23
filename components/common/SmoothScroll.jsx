'use client';

import { useEffect } from 'react';

export default function SmoothScroll({ children }) {
  useEffect(() => {
    // Polyfill for smooth scrolling on anchor clicks
    const handleClick = (e) => {
      const target = e.target.closest('a[href^="#"]');
      if (!target) return;
      e.preventDefault();
      const id = target.getAttribute('href').slice(1);
      const el = document.getElementById(id);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    };
    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  return children;
}
