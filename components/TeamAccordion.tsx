"use client";

import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent, motion, AnimatePresence } from "motion/react";
import { Globe, Plus, Minus } from "lucide-react";
import { Github, Linkedin, XLogo } from "./icons";
import { team, type Member } from "@/data/team";
import TeamPanel from "./TeamPanel";

const ACCENTS = ["#5c6444", "#0e4fe0", "#ff3b53", "#d9a441"];

function SectionEyebrow() {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-0 z-20 flex items-center px-8 py-7 lg:px-14">
      <span className="font-display text-sm font-semibold uppercase tracking-[0.25em] text-paper mix-blend-difference">
        The Team
      </span>
    </div>
  );
}

/* ── Desktop: scroll-pinned horizontal accordion ───────────────── */
function DesktopAccordion() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });
  // -1 = no panel expanded (all columns equal). Entry & exit buffers keep the
  // section symmetric: equal before scrolling and equal again after.
  const [active, setActive] = useState(-1);

  useMotionValueEvent(scrollYProgress, "change", (p) => {
    const slots = team.length + 2; // [buffer, m0, m1, … , buffer]
    const raw = Math.floor(p * slots); // 0 … slots
    const idx = raw - 1; // -1 during the first/last buffer slot
    setActive(idx >= 0 && idx < team.length ? idx : -1);
  });

  return (
    <section
      id="team"
      ref={ref}
      style={{ height: `${(team.length + 2) * 100}vh` }}
      className="relative hidden md:block"
    >
      <div className="sticky top-0 h-screen overflow-hidden">
        <SectionEyebrow />
        <div className="flex h-full w-full">
          {team.map((m, i) => (
            <TeamPanel
              key={m.name}
              member={m}
              index={i}
              isActive={i === active}
              total={team.length}
            />
          ))}
        </div>
        {/* progress dots */}
        <div className="pointer-events-none absolute bottom-7 left-1/2 z-20 flex -translate-x-1/2 gap-2">
          {team.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === active ? "w-8 bg-paper" : "w-1.5 bg-paper/40"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Mobile: tap-to-expand vertical stack ──────────────────────── */
function MobileCard({ member, index }: { member: Member; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const accent = ACCENTS[index % ACCENTS.length];
  return (
    <div
      style={{ backgroundColor: accent }}
      className="overflow-hidden border-b border-paper/10 text-paper"
    >
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={member.photo}
          alt={member.name}
          className="h-14 w-14 flex-none rounded-xl object-cover ring-1 ring-paper/30"
        />
        <span className="min-w-0 flex-1">
          <span className="font-display block truncate text-xl font-extrabold">
            {member.name}
          </span>
          <span className="block text-xs uppercase tracking-[0.15em] text-paper/70">
            {member.role}
          </span>
        </span>
        {open ? <Minus size={18} /> : <Plus size={18} />}
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="px-6 pb-7">
              <p className="text-base leading-relaxed text-paper/90">{member.bio}</p>
              {member.funFact && (
                <p className="mt-3 text-sm italic text-paper/65">✦ {member.funFact}</p>
              )}
              <div className="mt-5 inline-flex items-center gap-3 rounded-full bg-paper px-3 py-2">
                {member.links.linkedin && (
                  <a href={member.links.linkedin} aria-label="LinkedIn" className="text-ink">
                    <Linkedin size={17} />
                  </a>
                )}
                {member.links.github && (
                  <a href={member.links.github} aria-label="GitHub" className="text-ink">
                    <Github size={17} />
                  </a>
                )}
                {member.links.x && (
                  <a href={member.links.x} aria-label="X" className="text-ink">
                    <XLogo size={17} />
                  </a>
                )}
                {member.links.site && (
                  <a href={member.links.site} aria-label="Website" className="text-ink">
                    <Globe size={17} strokeWidth={1.8} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileStack() {
  return (
    <section id="team-m" className="relative md:hidden">
      <div className="flex items-center justify-between px-6 py-6">
        <span className="font-display text-sm font-semibold uppercase tracking-[0.25em]">
          The Team
        </span>
        <span className="text-xs uppercase tracking-[0.2em] text-ink-soft">Tap to open</span>
      </div>
      {team.map((m, i) => (
        <MobileCard key={m.name} member={m} index={i} />
      ))}
    </section>
  );
}

export default function TeamAccordion() {
  return (
    <>
      <DesktopAccordion />
      <MobileStack />
    </>
  );
}
