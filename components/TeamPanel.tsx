"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { Globe } from "lucide-react";
import { Github, Linkedin, XLogo } from "./icons";
import EldaWordmark from "./EldaWordmark";
import type { Member } from "@/data/team";

const ACCENTS = ["#5c6444", "#0e4fe0", "#ff3b53", "#d9a441"];

// below this column width the collapsed name reads vertically
const HORIZONTAL_THRESHOLD = 240;

function Socials({ links }: { links: Member["links"] }) {
  const items = [
    links.linkedin && { node: <Linkedin size={17} />, href: links.linkedin, label: "LinkedIn" },
    links.github && { node: <Github size={17} />, href: links.github, label: "GitHub" },
    links.x && { node: <XLogo size={17} />, href: links.x, label: "X" },
    links.site && { node: <Globe size={17} strokeWidth={1.8} />, href: links.site, label: "Website" },
  ].filter(Boolean) as { node: React.ReactNode; href: string; label: string }[];

  return (
    <div className="flex items-center gap-3">
      {items.map(({ node, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label={label}
          className="grid h-10 w-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-ink hover:bg-ink hover:text-paper"
        >
          {node}
        </a>
      ))}
    </div>
  );
}

export default function TeamPanel({
  member,
  index,
  isActive,
  total,
}: {
  member: Member;
  index: number;
  isActive: boolean;
  total: number;
}) {
  const reduce = useReducedMotion();
  const accent = ACCENTS[index % ACCENTS.length];

  // measure the live column width so the collapsed name can flip orientation
  const ref = useRef<HTMLDivElement>(null);
  const [wide, setWide] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const ro = new ResizeObserver(([entry]) => {
      setWide(entry.contentRect.width >= HORIZONTAL_THRESHOLD);
    });
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  const spring = reduce
    ? { duration: 0 }
    : ({ type: "spring", stiffness: 130, damping: 24 } as const);

  return (
    <motion.div
      ref={ref}
      className="relative h-full min-w-0 overflow-hidden border-l border-paper/10 first:border-l-0"
      style={{ flexBasis: 0, backgroundColor: accent }}
      animate={{ flexGrow: isActive ? 7 : 1 }}
      transition={spring}
    >
      {/* PHOTO — always full-bleed in front; zooms in when expanded so it
          essentially becomes the background */}
      <motion.img
        // eslint-disable-next-line @next/next/no-img-element
        src={member.photo}
        alt={member.name}
        className="absolute inset-0 h-full w-full object-cover object-center"
        animate={{ scale: isActive ? 1.06 : 1 }}
        transition={reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 22 }}
      />

      {/* legibility scrim — darker at the bottom where text sits */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/15 to-black/5" />

      {/* you-ring */}
      {member.isYou && (
        <div className="pointer-events-none absolute inset-0 ring-2 ring-inset ring-paper/50" />
      )}

      {/* ghost index */}
      <span
        className="font-display pointer-events-none absolute -right-3 -top-8 select-none text-[18rem] font-extrabold leading-none text-ink/50"
        aria-hidden
      >
        {index + 1}
      </span>

      {/* COLLAPSED label — horizontal if the column is wide enough, else vertical */}
      <AnimatePresence>
        {!isActive && (
          <motion.div
            key="collapsed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.25 }}
            className="absolute inset-0 flex items-end p-6"
          >
            {wide ? (
              <div className="min-w-0">
                <span className="font-display block text-3xl font-extrabold leading-[0.95] tracking-tight text-paper drop-shadow-lg">
                  <span className="block">{member.firstName}</span>
                  {member.lastName && <span className="block">{member.lastName}</span>}
                </span>
                <span className="mt-1 block text-xs font-medium uppercase tracking-[0.18em] text-paper drop-shadow">
                  {member.role}
                </span>
              </div>
            ) : (
              <span className="font-display vertical-rl mx-auto whitespace-nowrap text-2xl font-bold tracking-tight text-paper drop-shadow-lg">
                {member.name}
              </span>
            )}
          </motion.div>
        )}
      </AnimatePresence>

      {/* EXPANDED content — laid over the now-background photo */}
      <AnimatePresence>
        {isActive && (
          <motion.div
            key="expanded"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: reduce ? 0 : 0.3 }}
            className="absolute inset-0 flex flex-col justify-between p-10 lg:p-14"
          >
            {/* top row: index */}
            <div className="flex items-center gap-3">
              <span className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-paper drop-shadow">
                0{index + 1} / 0{total}
              </span>
            </div>

            {/* bottom-anchored identity block */}
            <motion.div
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: reduce ? 0 : 0.08, duration: reduce ? 0 : 0.4 }}
              className="max-w-2xl"
            >
              <h3 className="font-display text-5xl font-extrabold leading-[0.92] tracking-tight text-paper drop-shadow-xl lg:text-7xl">
                <span className="block">{member.firstName}</span>
                {member.lastName && <span className="block opacity-75">{member.lastName}</span>}
              </h3>
              <p className="mt-3 text-base font-medium uppercase tracking-[0.18em] text-paper drop-shadow">
                {member.role}
              </p>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-paper drop-shadow">
                {member.bio}
              </p>
              {member.funFact && (
                <div className="mt-6 inline-flex max-w-xl items-center gap-3 rounded-2xl border border-paper/30 bg-black/35 px-5 py-3 shadow-[0_18px_50px_-12px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                  <span
                    className="font-display text-lg font-extrabold leading-none"
                    style={{ color: accent }}
                    aria-hidden
                  >
                    ✦
                  </span>
                  <span>
                    <span className="block text-[11px] font-bold uppercase tracking-[0.2em] text-paper/70">
                      Fun fact
                    </span>
                    <span className="font-display block text-lg font-bold leading-snug text-paper drop-shadow lg:text-xl">
                      {member.funFact}
                    </span>
                  </span>
                </div>
              )}

              <div className="mt-7 flex items-center gap-5">
                <div className="inline-flex items-center rounded-full bg-paper px-3 py-2">
                  <Socials links={member.links} />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
