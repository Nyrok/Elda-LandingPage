"use client";

import { motion } from "motion/react";

const stats = [
  { n: "0", l: "missed or double doses" },
  { n: "Seconds", l: "from a fall to help on the way" },
  { n: "24/7", l: "eyes on, so no one is left alone" },
];

const facts = [
  { k: "Medication", v: "Right pill, right time. Every time." },
  { k: "Monitoring", v: "Catches a fall the moment it happens" },
  { k: "Emergency", v: "Alerts family and the nearest hospital in seconds" },
  { k: "Interaction", v: "Just talk to it. Voice or text." },
  { k: "The robot", v: "Runs on the low-cost, open SO-101 arm" },
  { k: "Why now", v: "Cheap open robotics meets foundation AI" },
];

export default function About() {
  return (
    <section id="about" className="relative px-8 py-28 lg:px-14 lg:py-40">
      {/* impact band */}
      <div className="mb-20 grid grid-cols-1 gap-8 border-y border-hairline py-10 sm:grid-cols-3">
        {stats.map((s, i) => (
          <motion.div
            key={s.l}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
          >
            <div className="font-display text-5xl font-extrabold tracking-tight lg:text-6xl">
              {s.n}
            </div>
            <div className="mt-2 max-w-[16rem] text-sm uppercase tracking-[0.16em] text-ink-soft">
              {s.l}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        {/* narrative */}
        <div>
          <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-ink-soft">
            Why Elda
          </span>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="font-display mt-5 max-w-2xl text-4xl font-extrabold leading-[1.02] tracking-tight lg:text-6xl"
          >
            Aging shouldn&apos;t cost you your
            <span className="text-harbour"> independence.</span>
          </motion.h2>
          <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">
            Every year, medication mistakes and unwitnessed falls put millions of
            older adults in the hospital, for reasons that were preventable. Family
            can&apos;t watch over them around the clock, and full-time care is
            expensive and out of reach.
          </p>
          <p className="mt-4 max-w-xl text-lg leading-relaxed text-ink-soft">
            Elda is one affordable robotic arm that handles the parts that matter
            most: it gets the right pill to them at the right time, keeps watch for
            trouble, and calls for help the instant something goes wrong.
            Independence for them. Peace of mind for the people who love them.
          </p>
          <p className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-harbour">
            Already real: live SO-101 control, on-device perception, and a voice
            assistant, running today.
          </p>
        </div>

        {/* capability sheet */}
        <div className="lg:pt-16">
          <div className="rule mb-2" />
          {facts.map((f, i) => (
            <motion.div
              key={f.k}
              initial={{ opacity: 0, x: 14 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-baseline justify-between gap-6 border-b border-hairline py-4"
            >
              <span className="text-sm uppercase tracking-[0.18em] text-ink-soft">
                {f.k}
              </span>
              <span className="font-display text-right text-base font-semibold sm:text-lg">
                {f.v}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
