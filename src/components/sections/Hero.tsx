import { component$, useContext } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { Reveal } from "../ui/Reveal";
import { HeroCanvas } from "./HeroCanvas";
import { ArrowUpRight, ArrowDown } from "../icons/icons";
import { LocaleContext, ui, tr } from "~/content/i18n";

export const Hero = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  const h = ui.hero;

  return (
    <section id="home" class="relative flex min-h-[100dvh] items-center overflow-hidden pt-28 pb-16">
      <HeroCanvas class="pointer-events-none absolute inset-0 h-full w-full text-ink opacity-[0.5]" />
      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-bg/10 via-transparent to-bg" aria-hidden="true" />

      <div class="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-8 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:gap-12">
        <div>
          <Reveal>
            <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface/60 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-secondary backdrop-blur-md">
              <span class="relative flex size-1.5">
                <span class="absolute inline-flex size-full animate-ping rounded-full bg-accent opacity-70" />
                <span class="relative inline-flex size-1.5 rounded-full bg-accent" />
              </span>
              {tr(h.eyebrow, l)}
            </div>
          </Reveal>

          <Reveal delay={60}>
            <h1 class="font-display text-[clamp(3.25rem,9vw,7rem)] font-bold leading-[0.86] tracking-[-0.03em] text-ink">
              Daniel
              <br />
              Reinoso<span class="text-accent">.</span>
            </h1>
          </Reveal>

          <Reveal delay={110}>
            <p class="mt-6 font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
              {tr(h.line1, l)} {tr(h.line2a, l)}
              <span class="text-accent">{tr(h.line2b, l)}</span>.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <p class="mt-4 max-w-xl leading-relaxed text-ink-secondary">{tr(h.subline, l)}</p>
          </Reveal>

          <Reveal delay={220}>
            <div class="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/#projects"
                class="group flex items-center gap-2 rounded-full bg-ink py-3 pl-6 pr-2.5 text-sm font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 active:scale-[0.97]"
              >
                {tr(h.cta1, l)}
                <span class="grid size-7 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                  <ArrowUpRight size={15} />
                </span>
              </Link>
              <Link
                href="/#contact"
                class="rounded-full border border-line-strong bg-surface/40 px-6 py-3 text-sm font-medium text-ink backdrop-blur-sm transition-colors duration-300 hover:bg-surface-2"
              >
                {tr(h.cta2, l)}
              </Link>
            </div>
          </Reveal>

          <Reveal delay={300}>
            <dl class="mt-12 grid max-w-md grid-cols-3 gap-6 border-t border-line pt-6">
              {[
                { k: tr(h.statProjects, l), v: "11" },
                { k: tr(h.statResearch, l), v: tr(h.statResearchV, l) },
                { k: tr(h.statFocus, l), v: "AI × Topology" },
              ].map((s) => (
                <div key={s.k}>
                  <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{s.k}</dt>
                  <dd class="mt-1 font-display text-base font-semibold text-ink tabular sm:text-lg">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {/* Protagonist portrait */}
        <Reveal delay={140} class="order-first lg:order-none">
          <div class="relative mx-auto flex max-w-[300px] items-end justify-center lg:max-w-none">
            {/* accent glow */}
            <div
              class="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(circle at 50% 55%, var(--accent) 0%, transparent 60%)" }}
              aria-hidden="true"
            />
            <img
              src="/images/portrait.webp"
              alt="Daniel Reinoso"
              width={733}
              height={1100}
              decoding="async"
              class="relative max-h-[62vh] w-auto object-contain object-bottom [mask-image:linear-gradient(to_bottom,#000_85%,transparent)]"
            />
            {/* credibility chip */}
            <div class="absolute bottom-6 left-0 flex items-center gap-2 rounded-full border border-line bg-surface/80 px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.14em] text-ink-secondary backdrop-blur-md">
              <span class="size-1.5 rounded-full bg-accent" />
              {tr(h.featuredTag, l)}
            </div>
          </div>
        </Reveal>
      </div>

      <div class="pointer-events-none absolute inset-x-0 bottom-7 z-10 hidden justify-center sm:flex">
        <span class="flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink-muted">
          <ArrowDown size={13} />
          {tr(h.scroll, l)}
        </span>
      </div>
    </section>
  );
});
