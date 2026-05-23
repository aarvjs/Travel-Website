'use client';

import { useState, useEffect } from 'react';

/**
 * AnimatedHeading component splits text by '\n' into lines,
 * and then each line into individual characters.
 * Each character is animated with a staggered translateX and opacity entrance.
 */
export default function AnimatedHeading({
  text = '',
  className = '',
  charDelay = 30, // 30ms delay per character
  initialDelay = 200, // 200ms initial delay before animation starts
  transitionDuration = 500, // 500ms transition duration
}) {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimate(true);
    }, initialDelay);

    return () => clearTimeout(timer);
  }, [initialDelay]);

  // Split text by \n into lines
  const lines = text.split('\n');

  // Let's render the lines and characters
  return (
    <h1 className={className} style={{ letterSpacing: '-0.04em' }}>
      {lines.map((line, lineIndex) => {
        const chars = Array.from(line);
        // Find line length to calculate correct staggered delay
        const lineLength = line.length;

        return (
          <span key={lineIndex} className="block whitespace-nowrap">
            {chars.map((char, charIndex) => {
              // Formula: (lineIndex * lineLength * charDelay) + (charIndex * charDelay)
              const delay = (lineIndex * lineLength * charDelay) + (charIndex * charDelay);
              const isSpace = char === ' ' || char === '\u00A0';

              return (
                <span
                  key={charIndex}
                  className="inline-block"
                  style={{
                    opacity: animate ? 1 : 0,
                    transform: animate ? 'translateX(0)' : 'translateX(-18px)',
                    transitionProperty: 'opacity, transform',
                    transitionDuration: `${transitionDuration}ms`,
                    transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
                    transitionDelay: `${delay}ms`,
                    willChange: 'opacity, transform',
                  }}
                >
                  {isSpace ? '\u00A0' : char}
                </span>
              );
            })}
          </span>
        );
      })}
    </h1>
  );
}
