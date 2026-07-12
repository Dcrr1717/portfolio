import { component$ } from "@builder.io/qwik";
import { projects, secondaryProjects } from "~/content/projects";
import { ProjectCard } from "../ui/ProjectCard";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const WIDE = [0, 5, 10];

export const Projects = component$(() => {
  return (
    <section id="projects" class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        index="01"
        label="Projects"
        title="Eleven projects, one thread: rigor, applied."
        lede="From pure mathematics and topological data analysis to AI research, statistics in R and shipped web apps — each project solves a real problem with the right tool."
      />

      <div class="grid grid-cols-1 gap-4 md:grid-cols-2">
        {projects.map((p, i) => (
          <Reveal key={p.slug} delay={(i % 2) * 80} class={WIDE.includes(i) ? "md:col-span-2" : ""}>
            <ProjectCard project={p} wide={WIDE.includes(i)} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={100}>
        <div class="mt-12 border-t border-line pt-8">
          <h3 class="mb-5 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            More work
          </h3>
          <ul class="grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {secondaryProjects.map((s) => (
              <li
                key={s.title}
                class="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 border-b border-line/70 pb-3"
              >
                <span class="text-sm text-ink">{s.title}</span>
                <span class="font-mono text-[11px] text-ink-muted">{s.category}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </section>
  );
});
