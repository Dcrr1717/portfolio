import { component$, useContext } from "@builder.io/qwik";
import {
  Link,
  routeLoader$,
  type DocumentHead,
  type StaticGenerateHandler,
} from "@builder.io/qwik-city";
import { projects, getProject } from "~/content/projects";
import { Motif } from "~/components/ui/Motif";
import { Reveal } from "~/components/ui/Reveal";
import { ArrowUpRight, ArrowRight, Lock } from "~/components/icons/icons";
import { LocaleContext, ui, tr, tra } from "~/content/i18n";

export const useProjectData = routeLoader$(({ params, status }) => {
  const project = getProject(params.slug);
  if (!project) {
    status(404);
    return null;
  }
  const idx = projects.findIndex((p) => p.slug === project.slug);
  const next = projects[(idx + 1) % projects.length];
  return { project, next: { slug: next.slug, title: next.title } };
});

export const onStaticGenerate: StaticGenerateHandler = () => ({
  params: projects.map((p) => ({ slug: p.slug })),
});

export default component$(() => {
  const data = useProjectData();
  const locale = useContext(LocaleContext);
  const l = locale.value;
  const d = ui.detail;

  if (!data.value) {
    return (
      <div class="mx-auto max-w-4xl px-4 pt-40 pb-24 sm:px-6">
        <h1 class="font-display text-4xl font-semibold text-ink">{tr(d.notFound, l)}</h1>
        <Link href="/#projects" class="mt-4 inline-block text-accent-ink">{tr(d.back, l)}</Link>
      </div>
    );
  }

  const { project, next } = data.value;

  return (
    <article class="pt-28">
      <div class="mx-auto max-w-4xl px-4 sm:px-6">
        <Reveal>
          <Link href="/#projects" class="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.16em] text-ink-muted transition-colors hover:text-ink">
            <ArrowRight size={14} class="rotate-180" />
            {tr(d.projects, l)}
          </Link>
        </Reveal>

        <header class="mt-8 border-b border-line pb-10">
          <Reveal>
            <div class="flex items-center gap-3">
              <span class="font-mono text-sm text-accent-ink tabular">{project.index}</span>
              <span class="h-px w-8 bg-line-strong" />
              <span class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{tr(project.category, l)}</span>
            </div>
          </Reveal>
          <Reveal delay={60}>
            <h1 class="mt-6 font-display text-4xl font-semibold leading-[1.02] tracking-tight text-ink sm:text-6xl">{tr(project.title, l)}</h1>
          </Reveal>
          <Reveal delay={120}>
            <p class="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary">{tr(project.summary, l)}</p>
          </Reveal>
          <Reveal delay={160}>
            <dl class="mt-8 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{tr(d.year, l)}</dt>
                <dd class="mt-1 text-sm text-ink">{project.year}</dd>
              </div>
              <div>
                <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{tr(d.role, l)}</dt>
                <dd class="mt-1 text-sm text-ink">{tr(project.role, l)}</dd>
              </div>
            </dl>
          </Reveal>

          {project.links && project.links.length > 0 && (
            <Reveal delay={200}>
              <div class="mt-8 flex flex-wrap gap-3">
                {project.links.map((lnk) => (
                  <a
                    key={lnk.href}
                    href={lnk.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    class="group flex items-center gap-2 rounded-full bg-ink py-2.5 pl-5 pr-2 text-sm font-medium text-bg transition-transform duration-300 active:scale-[0.97]"
                  >
                    {tr(lnk.label, l)}
                    <span class="grid size-6 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
                      <ArrowUpRight size={13} />
                    </span>
                  </a>
                ))}
              </div>
            </Reveal>
          )}
        </header>

        <Reveal delay={100}>
          <div class="my-12 grid place-items-center rounded-2xl border border-line bg-surface-2/40 py-14 text-ink">
            <Motif motif={project.motif} class="h-40 w-64 opacity-70" />
          </div>
        </Reveal>

        <div class="grid gap-12 pb-8 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{tr(d.challenge, l)}</h2>
          </Reveal>
          <Reveal delay={60}>
            <p class="text-lg leading-relaxed text-ink-secondary">{tr(project.problem, l)}</p>
          </Reveal>
        </div>

        <div class="grid gap-12 border-t border-line py-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{tr(d.built, l)}</h2>
          </Reveal>
          <Reveal delay={60}>
            <ul class="space-y-4">
              {tra(project.contributions, l).map((c) => (
                <li key={c} class="flex gap-3 text-ink-secondary">
                  <span class="mt-2.5 size-1.5 shrink-0 rounded-full bg-accent" />
                  <span class="leading-relaxed">{c}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <div class="grid gap-12 border-t border-line py-12 md:grid-cols-[1fr_1.4fr]">
          <Reveal>
            <h2 class="font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">{tr(d.tech, l)}</h2>
          </Reveal>
          <Reveal delay={60}>
            <dl class="space-y-6">
              {project.tech.map((g) => (
                <div key={g.group}>
                  <dt class="mb-2.5 text-sm font-medium text-ink">{g.group}</dt>
                  <dd class="flex flex-wrap gap-1.5">
                    {g.items.map((t) => (
                      <span key={t} class="rounded-full border border-line bg-surface-2 px-3 py-1 font-mono text-[12px] text-ink-secondary">{t}</span>
                    ))}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        {project.metrics && (
          <div class="border-t border-line py-12">
            <Reveal>
              <dl class="grid grid-cols-3 gap-6">
                {project.metrics.map((m) => (
                  <div key={m.label}>
                    <dt class="font-mono text-[11px] uppercase tracking-[0.14em] text-ink-muted">{m.label}</dt>
                    <dd class="mt-2 font-display text-2xl font-semibold text-ink tabular sm:text-3xl">{m.value}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          </div>
        )}

        {project.privacyNote && (
          <Reveal>
            <div class="mb-4 flex items-start gap-3 rounded-2xl border border-line bg-surface-2/40 p-5">
              <Lock size={16} class="mt-0.5 shrink-0 text-ink-muted" />
              <p class="text-sm leading-relaxed text-ink-secondary">{tr(project.privacyNote, l)}</p>
            </div>
          </Reveal>
        )}
      </div>

      <div class="mt-8 border-t border-line">
        <Link href={`/projects/${next.slug}/`} class="group mx-auto flex max-w-4xl items-center justify-between gap-6 px-4 py-14 sm:px-6">
          <div>
            <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-ink-muted">{tr(d.next, l)}</span>
            <p class="mt-2 font-display text-2xl font-semibold tracking-tight text-ink transition-colors group-hover:text-accent sm:text-3xl">{tr(next.title, l)}</p>
          </div>
          <span class="grid size-12 shrink-0 place-items-center rounded-full border border-line text-ink transition-[transform,background-color,border-color] duration-300 group-hover:translate-x-1 group-hover:border-ink group-hover:bg-ink group-hover:text-bg">
            <ArrowRight size={18} />
          </span>
        </Link>
      </div>
    </article>
  );
});

export const head: DocumentHead = ({ params }) => {
  const project = getProject(params.slug);
  if (!project) return { title: "Project — Daniel Reinoso" };
  return {
    title: `${project.title.en} — Daniel Reinoso`,
    meta: [
      { key: "description", name: "description", content: project.oneLiner.en },
      { key: "og:title", property: "og:title", content: project.title.en },
      { key: "og:description", property: "og:description", content: project.oneLiner.en },
      { key: "theme-color", name: "theme-color", content: "#09090b" },
    ],
  };
};
