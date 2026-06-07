"use client";

import { motion } from "motion/react";
import { ArrowDown } from "lucide-react";
import EldaWordmark from "./EldaWordmark";

const ease = [0.22, 1, 0.36, 1] as const;

export default function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-between overflow-hidden px-8 pb-10 pt-28 lg:px-14">
      {/* faint CJK watermark — 關愛 "loving care" */}
      <span
        aria-hidden
        className="font-cjk pointer-events-none absolute -right-6 top-1/2 -translate-y-1/2 select-none text-[34vw] font-black leading-none text-ink/[0.04] lg:text-[26vw]"
      >
        關愛
      </span>

      {/* top bar */}
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease }}
        className="flex items-center justify-between"
      >
        <EldaWordmark className="text-[100px] leading-none" />
        <span className="hidden items-center gap-2 text-sm uppercase tracking-[0.2em] text-ink-soft sm:flex">
          <span className="h-2 w-2 rounded-full bg-coral" />
          Elderly care robotics
        </span>
      </motion.div>

      {/* headline */}
      <div className="relative z-10 max-w-5xl">
        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          className="mb-6 text-base uppercase tracking-[0.22em] text-ink-soft"
        >
          Helping older people live independently
        </motion.p>

        <h1 className="font-display text-[15vw] font-extrabold leading-[0.86] tracking-[-0.03em] sm:text-[12vw] lg:text-[9.5rem]">
          {["Care that", "doesn't sleep."].map((line, i) => (
            <motion.span
              key={line}
              initial={{ opacity: 0, y: "0.5em" }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease, delay: 0.2 + i * 0.12 }}
              className="block"
            >
              {i === 1 ? (
                <span>
                  doesn&apos;t <span className="text-coral">sleep.</span>
                </span>
              ) : (
                line
              )}
            </motion.span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.6 }}
          className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft"
        >
          A missed dose, or a fall no one sees, can cost an older person their
          independence. Elda is an AI robotic arm that manages their medication,
          keeps watch over them, and calls for help the moment something goes
          wrong.
        </motion.p>
      </div>

      {/* bottom: scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease, delay: 0.8 }}
        className="relative z-10 flex items-end justify-between"
      >
        <a
          href="#team"
          className="group inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em]"
        >
          <span className="grid h-11 w-11 place-items-center rounded-full border border-ink transition-colors group-hover:bg-ink group-hover:text-paper">
            <ArrowDown size={16} className="animate-bounce" />
          </span>
          Meet the team
        </a>
        <span className="font-display hidden text-right text-sm leading-tight text-ink-soft sm:block">
          The four builders
          <br />
          behind Elda.
        </span>
      </motion.div>

      {/* hairline skyline silhouette */}
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-0 left-0 right-0 h-24 bg-[url('/hk-skyline.svg')] bg-bottom bg-repeat-x opacity-[0.45]"
      />
    </section>
  );
}
