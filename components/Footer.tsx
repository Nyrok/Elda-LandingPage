export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-ink px-8 pb-10 pt-24 text-paper lg:px-14">
      <span
        aria-hidden
        className="font-cjk pointer-events-none absolute -bottom-10 right-0 select-none text-[22vw] font-black leading-none text-paper/[0.05]"
      >
        關愛
      </span>

      <div className="relative z-10">
        <p className="font-display max-w-3xl text-4xl font-extrabold leading-[1.02] tracking-tight lg:text-6xl">
          Let&apos;s bring Elda
          <span className="text-coral"> home.</span>
        </p>

        <div className="mt-20 flex flex-col gap-2 border-t border-paper/15 pt-6 text-sm text-paper/55 sm:flex-row sm:items-center sm:justify-between">
          <span>Elda</span>
          <span className="font-display uppercase tracking-[0.2em]">
            Elderly care robotics
          </span>
        </div>
      </div>
    </footer>
  );
}
