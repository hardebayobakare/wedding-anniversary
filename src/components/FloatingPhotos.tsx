"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { heroPhotos } from "@/data/content";

// Fixed (non-random) layout so the server-rendered HTML always matches
// the client on first paint — only the values below control where each
// photo sits and how far/fast it drifts. Feel free to tweak them.
type Layout = {
  top?: string;
  left?: string;
  right?: string;
  bottom?: string;
  size: number;
  rotate: number;
  duration: number;
};

const layouts: Layout[] = [
  { top: "8%", left: "6%", size: 96, rotate: -8, duration: 7 },
  { top: "12%", right: "7%", size: 84, rotate: 7, duration: 8.5 },
  { bottom: "18%", left: "9%", size: 90, rotate: 6, duration: 9 },
  { bottom: "10%", right: "9%", size: 104, rotate: -6, duration: 7.5 },
  { top: "46%", left: "2%", size: 76, rotate: 10, duration: 10 },
  { top: "50%", right: "3%", size: 88, rotate: -10, duration: 8 },
];

/**
 * Soft, dreamy photos that drift and sway behind the hero text.
 * Positions and timings are hard-coded (not randomized), but the whole
 * group only renders after the component has mounted on the client.
 * That keeps the server-rendered HTML completely empty here, so there
 * is nothing for React to compare against and no hydration mismatch —
 * the photos simply fade in a beat after the page loads.
 */
export default function FloatingPhotos() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true" />;
  }

  const photos = heroPhotos.slice(0, layouts.length);

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      {photos.map((photo, i) => {
        const layout = layouts[i];
        return (
          <motion.div
            key={photo.src + i}
            className="absolute aspect-4/5 overflow-hidden rounded-2xl border-4 border-white/80 shadow-xl"
            style={{
              top: layout.top,
              left: layout.left,
              right: layout.right,
              bottom: layout.bottom,
              // Stays exactly layout.size on small screens (mobile),
              // then scales up smoothly on larger screens, capping at
              // 2x the base size so it never gets too big.
              width: `clamp(${layout.size}px, ${(layout.size * 0.125).toFixed(2)}vw, ${layout.size * 2}px)`,
            }}
            initial={{ opacity: 0, rotate: layout.rotate, y: 0 }}
            animate={{
              opacity: 0.85,
              rotate: [layout.rotate, layout.rotate + 5, layout.rotate - 3, layout.rotate],
              y: [0, -18, 4, 0],
            }}
            transition={{
              opacity: { duration: 1.2, delay: 0.3 + i * 0.15 },
              default: {
                duration: layout.duration,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.4,
              },
            }}
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 220px, 120px"
              className="object-cover blur-[0.5px]"
            />
          </motion.div>
        );
      })}
    </div>
  );
}
