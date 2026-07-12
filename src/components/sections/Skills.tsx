import { component$, useContext } from "@builder.io/qwik";
import { skills } from "~/content/projects";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LocaleContext, ui, tr } from "~/content/i18n";

export const Skills = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  return (
    <section id="skills" class="border-y border-line bg-surface-2/40">
      <div class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
        <SectionHeader index="02" label={tr(ui.skills.label, l)} title={tr(ui.skills.title, l)} lede={tr(ui.skills.lede, l)} />

        <div class="grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-2 lg:grid-cols-3">
          {skills.map((group, i) => (
            <Reveal key={group.title.en} delay={(i % 3) * 60}>
              <div class="h-full bg-surface p-6 sm:p-7">
                <h3 class="mb-4 flex items-center gap-2.5 font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">
                  <span class="text-accent-ink tabular">0{i + 1}</span>
                  {tr(group.title, l)}
                </h3>
                <ul class="flex flex-wrap gap-1.5">
                  {group.items.map((item) => (
                    <li key={item} class="rounded-full border border-line bg-surface-2 px-3 py-1 text-[13px] text-ink-secondary">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
});
