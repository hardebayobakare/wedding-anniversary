"use client";

import { motion } from "framer-motion";
import { personalMessage } from "@/data/content";

export default function PersonalMessage() {
  return (
    <section id="message" className="relative bg-[var(--color-cream)] px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-[var(--color-warm-beige)] bg-white/70 p-8 shadow-[0_10px_40px_-15px_rgba(139,75,87,0.25)] backdrop-blur-sm sm:p-12"
        >
          <p className="mb-6 text-center font-heading text-4xl text-[var(--color-rose-gold)]">&ldquo;</p>

          <h2 className="mb-8 text-center font-heading text-2xl italic text-[var(--color-deep-rose)] sm:text-3xl">
            {personalMessage.heading}
          </h2>

          <div className="space-y-5 text-base leading-relaxed text-[var(--color-charcoal)]/90 sm:text-lg">
            {/* EDIT: change the wording of your letter in src/data/content.ts */}
            {personalMessage.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <p className="mt-8 whitespace-pre-line text-right font-heading italic text-[var(--color-rose-gold)]">
            {personalMessage.signature}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
