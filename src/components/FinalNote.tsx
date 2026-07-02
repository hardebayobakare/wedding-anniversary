"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import FloatingHearts from "./FloatingHearts";
import { finalNote } from "@/data/content";

export default function FinalNote() {
  const [burst, setBurst] = useState(false);

  return (
    <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-linear-to-b from-cream via-blush to-soft-pink/60 px-6 py-24 text-center">
      <FloatingHearts count={10} />

      <div className="relative z-10 mx-auto max-w-2xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-3xl italic text-deep-rose sm:text-4xl md:text-5xl"
        >
          {finalNote.heading}
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-lg text-base text-charcoal/80 sm:text-lg"
        >
          {finalNote.subtext}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-10"
        >
          <button
            onClick={() => {
              setBurst(true);
              setTimeout(() => setBurst(false), 1400);
            }}
            className="pulse-heart inline-flex items-center gap-2 rounded-full bg-rose-gold px-8 py-4 font-heading text-lg italic text-white shadow-lg transition-transform hover:scale-105"
          >
            {finalNote.buttonLabel} <span aria-hidden="true">♡</span>
          </button>
        </motion.div>
      </div>

      {/* Little heart burst when the button is clicked */}
      <AnimatePresence>
        {burst && (
          <div className="pointer-events-none absolute inset-0 z-20 flex items-center justify-center">
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i / 10) * Math.PI * 2;
              return (
                <motion.span
                  key={i}
                  initial={{ opacity: 1, x: 0, y: 0, scale: 0.6 }}
                  animate={{
                    opacity: 0,
                    x: Math.cos(angle) * 140,
                    y: Math.sin(angle) * 140,
                    scale: 1.1,
                  }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                  className="absolute text-2xl text-rose-gold"
                >
                  ♡
                </motion.span>
              );
            })}
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
