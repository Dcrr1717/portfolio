import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Reveal } from "../ui/Reveal";
import { HeroMotif } from "./HeroMotif";
import { ArrowUpRight, ArrowDown } from "../icons/icons";

export const Hero = component$(() => {
  return (
    <section id="home" class="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16">
      <div class="grid-lines pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <div class="mx-auto grid w-full max-w-6xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
        <div>
          <Reveal>
            <div class="mb-7 inline-flex items-center gap-2 rounded-full border border-line bg-surface/50 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary backdrop-blur-sm">
              <span class="size-1.5 rounded-full bg-accent" />
              Mathematician · Developer · Researcher
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 class="font-display text-[clamp(2.75rem,7vw,5.25rem)] font-semibold leading-[0.95] tracking-tight text-ink">
              Mathematician
              <br />
              who <span class="text-accent">builds</span>.
            </h1>
          </Reveal>

          <Reveal delay={120}>
            <p class="mt-7 max-w-xl text-lg leading-relaxed text-ink-secondary sm:text-xl">
              I'm <span class="text-ink">Daniel Reinoso</span>. I use mathematics to
              think through the problem and engineering to solve it — AI, topological
              data analysis, and software that ships.
            </p>
          </Reveal>

          <Reveal delay={200}>
            <div class="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                class="group flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2.5 text-sm font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              >
                View projects
                <span class="grid size-7 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
              <Link
                href="/#contact"
                class="rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-surface-2"
              >
                Contact
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl class="mt-14 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-7">
              {[
                { k: "Projects", v: "9" },
                { k: "Focus", v: "AI · Topology" },
                { k: "Approach", v: "Rigor" },
              ].map((s) => (
                <div key={s.k}>
                  <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">
                    {s.k}
                  </dt>
                  <dd class="mt-1 font-display text-xl font-semibold text-ink tabular">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={150} class="hidden lg:block">
          <div class="relative aspect-square">
            <HeroMotif class="h-full w-full text-ink" />
          </div>
        </Reveal>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-7 flex justify-center">
        <span class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <ArrowDown size={13} />
          Scroll
        </span>
      </div>
    </section>
  );
});
