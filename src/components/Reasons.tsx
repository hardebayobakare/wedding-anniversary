"use client";

import { motion } from "framer-motion";
import { reasons } from "@/data/content";
import { SectionHeading } from "./Timeline";

export default function Reasons() {
  return (
    <section className="relative bg-[var(--color-warm-beige)]/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading eyebrow="Reasons" title="Reasons I Love You" />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((reason, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.1 }}
              whileHover={{ y: -6 }}
              className="rounded-2xl bg-white/80 p-7 text-center shadow-sm transition-shadow hover:shadow-lg"
            >
              <div className="mb-3 text-3xl">{reason.icon}</div>
              <h3 className="font-heading text-lg text-[var(--color-deep-rose)]">{reason.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/80">{reason.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
