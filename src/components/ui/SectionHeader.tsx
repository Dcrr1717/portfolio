import { component$ } from "@builder.io/qwik";
import { Reveal } from "./Reveal";

export const SectionHeader = component$<{
  index: string;
  label: string;
  title: string;
  lede?: string;
}>(({ index, label, title, lede }) => {
  return (
    <div class="mb-12 md:mb-16">
      <Reveal>
        <div class="mb-5 flex items-center gap-3">
          <span class="font-mono text-xs text-accent-ink tabular">{index}</span>
          <span class="h-px w-8 bg-line-strong" />
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">
            {label}
          </span>
        </div>
      </Reveal>
      <Reveal delay={60}>
        <h2 class="max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-5xl">
          {title}
        </h2>
      </Reveal>
      {lede && (
        <Reveal delay={120}>
          <p class="mt-5 max-w-2xl text-lg leading-relaxed text-ink-secondary">{lede}</p>
        </Reveal>
      )}
    </div>
  );
});
