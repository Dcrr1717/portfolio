import { component$, useContext } from "@builder.io/qwik";
import { Reveal } from "../ui/Reveal";
import { site } from "~/content/site";
import { ArrowUpRight, Mail, GitHub } from "../icons/icons";
import { LocaleContext, ui, tr } from "~/content/i18n";

export const Contact = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  return (
    <section id="contact" class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-40">
      <Reveal>
        <div class="mb-5 flex items-center gap-3">
          <span class="font-mono text-xs text-accent-ink tabular">05</span>
          <span class="h-px w-8 bg-line-strong" />
          <span class="font-mono text-[11px] uppercase tracking-[0.22em] text-ink-muted">{tr(ui.contact.label, l)}</span>
        </div>
      </Reveal>

      <Reveal delay={60}>
        <h2 class="max-w-4xl font-display text-[clamp(2.5rem,6vw,4.5rem)] font-semibold leading-[0.98] tracking-tight text-ink">
          {tr(ui.contact.titleA, l)}
          <span class="text-accent">{tr(ui.contact.titleB, l)}</span>
          {tr(ui.contact.titleC, l)}
        </h2>
      </Reveal>

      <Reveal delay={120}>
        <p class="mt-6 max-w-xl text-lg leading-relaxed text-ink-secondary">{tr(ui.contact.lede, l)}</p>
      </Reveal>

      <Reveal delay={200}>
        <div class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <a
            href={`mailto:${site.email}`}
            class="group flex items-center justify-between gap-4 rounded-full bg-ink py-3 pl-6 pr-2.5 text-sm font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.98]"
          >
            <span class="flex min-w-0 items-center gap-2">
              <Mail size={16} />
              <span class="truncate">{site.email}</span>
            </span>
            <span class="grid size-7 shrink-0 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={15} />
            </span>
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            class="group flex items-center gap-2 rounded-full border border-line-strong px-6 py-3 text-sm font-medium text-ink transition-colors duration-300 hover:bg-surface-2"
          >
            <GitHub size={16} />
            GitHub
          </a>
        </div>
      </Reveal>
    </section>
  );
});
