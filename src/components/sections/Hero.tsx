import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Reveal } from "../ui/Reveal";
import { HeroCanvas } from "./HeroCanvas";
import { ArrowUpRight, ArrowDown } from "../icons/icons";

export const Hero = component$(() => {
  return (
    <section id="home" class="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16">
      {/* Living, cursor-reactive network — echoes the neural-topology research */}
      <HeroCanvas class="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.55]" />
      <div
        class="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg"
        aria-hidden="true"
      />

      <div class="relative z-10 mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <div>
          <Reveal>
            <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary backdrop-blur-md">
              <span class="relative flex size-1.5">
                <span class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span class="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              Peer-reviewed researcher · AI × Topology
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 class="font-display text-[clamp(3rem,8vw,6rem)] font-bold leading-[0.92] tracking-[-0.02em] text-ink">
              Mathematician
              <br />
              who <span class="text-accent">builds</span>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p class="mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              I turn deep mathematics — topology, spectral methods, statistics — into
              <span class="text-ink"> AI research</span> and
              <span class="text-ink"> software that ships</span>. From a peer-reviewed paper
              to a 3D neural lab in your browser.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div class="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                class="group flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2.5 text-sm font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.97]"
              >
                Explore the work
                <span class="grid size-7 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
              <Link
                href="/#contact"
                class="rounded-full border border-line-strong bg-surface/40 px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:bg-surface-2"
              >
                Let's talk
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl class="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
              {[
                { k: "Projects", v: "11" },
                { k: "Research", v: "Peer-reviewed" },
                { k: "Focus", v: "AI × Topology" },
              ].map((s) => (
                <div key={s.k}>
                  <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {s.k}
                  </dt>
                  <dd class="mt-1 font-display text-base font-semibold text-ink tabular sm:text-lg">
                    {s.v}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Featured result — instant credibility */}
        <Reveal delay={180} class="hidden lg:block">
          <Link
            href="/projects/neural-architecture-persistent-homology/"
            class="group block rounded-[1.5rem] border border-line bg-surface/70 p-7 shadow-[var(--shadow-lift)] backdrop-blur-md transition-[transform,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-line-strong"
          >
            <div class="flex items-center justify-between">
              <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-accent-ink">
                Featured · peer-reviewed
              </span>
              <span class="grid size-8 place-items-center rounded-full border border-line text-ink transition-[transform,background-color,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
                <ArrowUpRight size={15} />
              </span>
            </div>
            <h2 class="mt-5 font-display text-2xl font-semibold leading-tight tracking-tight text-ink">
              Persistent homology tells neural architectures apart.
            </h2>
            <p class="mt-2 text-sm text-ink-secondary">
              Revista Bases de la Ciencia · 2026
            </p>
            <dl class="mt-6 grid grid-cols-3 gap-4 border-t border-line pt-5">
              {[
                { k: "Family AUC", v: "0.97" },
                { k: "Networks", v: "40" },
                { k: "Datasets", v: "3" },
              ].map((s) => (
                <div key={s.k}>
                  <dt class="font-mono text-[10px] uppercase tracking-[0.12em] text-ink-muted">
                    {s.k}
                  </dt>
                  <dd class="mt-1 font-display text-xl font-semibold text-ink tabular">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Link>
        </Reveal>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex justify-center">
        <span class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <ArrowDown size={13} />
          Scroll
        </span>
      </div>
    </section>
  );
});
