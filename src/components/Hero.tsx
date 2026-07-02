"use client";

import { motion } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import FloatingPhotos from "./FloatingPhotos";
import { heroContent } from "@/data/content";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-linear-to-b from-blush via-cream to-cream px-6 text-center">
      {/* Soft glow orbs */}
      <div className="glow-orb absolute -top-24 -left-24 h-72 w-72 rounded-full bg-soft-pink blur-3xl" />
      <div
        className="glow-orb absolute -bottom-24 -right-24 h-80 w-80 rounded-full bg-rose-gold/40 blur-3xl"
        style={{ animationDelay: "2s" }}
      />

      <FloatingPhotos />

      {/* Soft fade so the floating photos never fight with the text for attention */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, var(--color-cream) 0%, rgba(253,248,243,0.85) 35%, rgba(253,248,243,0.35) 60%, rgba(253,248,243,0) 78%)",
        }}
      />

      <FloatingHearts count={16} />

      <div className="relative z-10 mx-auto max-w-3xl">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-4 text-sm uppercase tracking-[0.35em] text-rose-gold"
        >
          5th Anniversary
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
          className="whitespace-pre-line font-heading text-4xl font-semibold leading-tight text-deep-rose sm:text-5xl md:text-6xl"
        >
          {heroContent.headline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35 }}
          className="mx-auto mt-6 max-w-xl text-base text-charcoal/80 sm:text-lg"
        >
          {heroContent.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-14 flex justify-center"
        >
          <a
            href="#message"
            className="group flex flex-col items-center gap-2 text-rose-gold transition-opacity hover:opacity-70"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <span className="pulse-heart text-xl">♡</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
