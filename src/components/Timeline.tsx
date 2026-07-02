"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { timelineEvents } from "@/data/content";

export default function Timeline() {
  return (
    <section className="relative bg-[var(--color-blush)]/40 px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading eyebrow="Our Story" title="A Timeline of Us" />

        <div className="relative mt-16">
          {/* Center line (desktop) / left line (mobile) */}
          <div className="absolute left-4 top-0 h-full w-px bg-[var(--color-rose-gold)]/30 sm:left-1/2 sm:-translate-x-1/2" />

          <div className="space-y-12">
            {timelineEvents.map((event, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: isLeft ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.6 }}
                  className={`relative flex flex-col pl-12 sm:pl-0 ${
                    isLeft ? "sm:flex-row" : "sm:flex-row-reverse"
                  } sm:items-center`}
                >
                  {/* Dot */}
                  <span className="absolute left-2.5 top-1.5 h-3 w-3 rounded-full border-2 border-[var(--color-rose-gold)] bg-white sm:left-1/2 sm:-translate-x-1/2" />

                  <div className="sm:w-1/2" />

                  <div
                    className={`sm:w-1/2 ${isLeft ? "sm:pl-10 sm:text-left" : "sm:pr-10 sm:text-right"}`}
                  >
                    <div className="overflow-hidden rounded-2xl bg-white/80 shadow-sm">
                      {event.image && (
                        <div className="relative aspect-[16/11] w-full overflow-hidden">
                          <Image
                            src={event.image}
                            alt={event.title}
                            fill
                            sizes="(max-width: 640px) 100vw, 50vw"
                            className="object-cover shadow-[0_8px_24px_-10px_rgba(139,75,87,0.35)]"
                            style={{ objectPosition: event.imagePosition ?? "center" }}
                          />
                        </div>
                      )}
                      <div className="p-5">
                        <p className="text-xs uppercase tracking-widest text-[var(--color-rose-gold)]">
                          {event.year} · {event.date}
                        </p>
                        <h3 className="mt-1 font-heading text-xl text-[var(--color-deep-rose)]">
                          {event.title}
                        </h3>
                        <p className="mt-2 text-sm leading-relaxed text-[var(--color-charcoal)]/80">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

// Small shared heading used across sections
export function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.7 }}
      className="text-center"
    >
      <p className="mb-3 text-xs uppercase tracking-[0.35em] text-[var(--color-rose-gold)]">{eyebrow}</p>
      <h2 className="font-heading text-3xl text-[var(--color-deep-rose)] sm:text-4xl">{title}</h2>
      <div className="divider-heart mx-auto mt-5 flex w-40 items-center gap-3 text-[var(--color-rose-gold)]">
        <span className="text-xs">♡</span>
      </div>
    </motion.div>
  );
}
