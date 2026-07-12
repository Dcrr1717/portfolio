import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import type { Project } from "~/content/projects";
import { Motif } from "./Motif";
import { ArrowUpRight, Lock } from "../icons/icons";

export const ProjectCard = component$<{ project: Project; wide?: boolean }>(
  ({ project, wide = false }) => {
    const chips = project.tech.flatMap((g) => g.items).slice(0, wide ? 6 : 4);

    return (
      <Link
        href={`/projects/${project.slug}/`}
        class="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-line bg-surface p-6 shadow-[var(--shadow-ambient)] transition-[transform,box-shadow,border-color] duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-line-strong hover:shadow-[var(--shadow-lift)] sm:p-7"
      >
        <div
          class={`pointer-events-none absolute right-0 top-0 text-ink transition-[opacity,transform] duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105 ${
            wide ? "w-1/2 opacity-[0.13]" : "w-2/5 opacity-[0.1] group-hover:opacity-[0.16]"
          }`}
        >
          <Motif motif={project.motif} class="h-full w-full" />
        </div>

        <div class="relative">
          <div class="flex items-center gap-3">
            <span class="font-mono text-xs text-accent-ink tabular">{project.index}</span>
            <span class="h-px w-6 bg-line-strong" />
            <span class="font-mono text-[10px] uppercase tracking-[0.16em] text-ink-muted">
              {project.category}
            </span>
          </div>
          <h3
            class={`mt-5 font-display font-semibold leading-tight tracking-tight text-ink ${
              wide ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p class={`mt-3 max-w-md text-ink-secondary ${wide ? "text-base" : "text-sm"}`}>
            {project.oneLiner}
          </p>
        </div>

        <div class="relative mt-8">
          <div class="mb-5 flex flex-wrap gap-1.5">
            {chips.map((t) => (
              <span
                key={t}
                class="rounded-full border border-line bg-surface-2 px-2.5 py-1 font-mono text-[11px] text-ink-secondary"
              >
                {t}
              </span>
            ))}
          </div>
          <div class="flex items-center justify-between border-t border-line pt-4">
            <span class="flex items-center gap-2 text-sm font-medium text-ink">
              {project.sensitive && <Lock size={13} class="text-ink-muted" />}
              View project
            </span>
            <span class="grid size-8 place-items-center rounded-full border border-line text-ink transition-[transform,background-color,border-color] duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
              <ArrowUpRight size={15} />
            </span>
          </div>
        </div>
      </Link>
    );
  },
);
