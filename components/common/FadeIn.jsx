'use client';

import { useState, useEffect } from 'react';

/**
 * FadeIn component wrapper that transitions opacity from 0 to 1
 * after a configurable delay (ms) using React state.
 */
export default function FadeIn({
  children,
  delay = 0,
  duration = 1000,
  className = '',
}) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div
      className={`transition-opacity ease-out ${className}`}
      style={{
        opacity: visible ? 1 : 0,
        transitionDuration: `${duration}ms`,
        willChange: 'opacity',
      }}
    >
      {children}
    </div>
  );
}
