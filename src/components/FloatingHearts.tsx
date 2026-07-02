"use client";

import { useEffect, useState } from "react";

type FloatingHeartsProps = {
  count?: number;
  className?: string;
};

type Heart = {
  id: number;
  left: number;
  size: number;
  duration: number;
  delay: number;
  drift: number;
  opacity: number;
};

function generateHearts(count: number): Heart[] {
  return Array.from({ length: count }).map((_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 10 + Math.random() * 18,
    duration: 10 + Math.random() * 10,
    delay: Math.random() * 10,
    drift: (Math.random() - 0.5) * 120,
    opacity: 0.35 + Math.random() * 0.4,
  }));
}

/**
 * Purely CSS-driven floating hearts background effect.
 * Lightweight (no Framer Motion needed) so it can run continuously
 * behind content without a performance cost.
 *
 * The random positions are only generated after mount (in a client-only
 * effect) so the server-rendered HTML has no hearts to disagree about —
 * this avoids React hydration mismatches from Math.random().
 */
export default function FloatingHearts({ count = 14, className = "" }: FloatingHeartsProps) {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    setHearts(generateHearts(count));
  }, [count]);

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {hearts.map((h) => (
        <span
          key={h.id}
          className="floating-heart"
          style={
            {
              left: `${h.left}%`,
              width: `${h.size}px`,
              height: `${h.size}px`,
              animationDuration: `${h.duration}s`,
              animationDelay: `${h.delay}s`,
              opacity: h.opacity,
              "--drift": `${h.drift}px`,
            } as React.CSSProperties
          }
        >
          <svg viewBox="0 0 24 24" fill="var(--color-rose-gold)" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 21s-7.5-4.6-10.2-9.1C.2 9 1 5.6 4 4.2c2.2-1 4.6-.2 6 1.7 1.4-1.9 3.8-2.7 6-1.7 3 1.4 3.8 4.8 2.2 7.7C19.5 16.4 12 21 12 21z" />
          </svg>
        </span>
      ))}
    </div>
  );
}
