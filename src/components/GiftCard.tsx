"use client";

import { motion } from "framer-motion";
import { giftCard } from "@/data/content";

export default function GiftCard() {
  return (
    <section className="relative bg-[var(--color-warm-beige)]/30 px-6 py-20 text-center sm:py-28">
      <div className="mx-auto max-w-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7 }}
        >
          <div className="gift-wiggle mb-4 text-5xl" aria-hidden="true">
            🎁
          </div>

          <h2 className="font-heading text-2xl text-[var(--color-deep-rose)] sm:text-3xl">
            {giftCard.heading}
          </h2>

          <p className="mx-auto mt-3 max-w-md text-sm text-[var(--color-charcoal)]/80 sm:text-base">
            {giftCard.subtext}
          </p>

          {/* EDIT: set the real link in src/data/content.ts (giftCard.url) */}
          <a
            href={giftCard.url}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-rose-gold)] px-8 py-4 font-heading text-lg italic text-white shadow-lg transition-transform hover:scale-105"
          >
            {giftCard.buttonLabel} <span aria-hidden="true">🎁</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
