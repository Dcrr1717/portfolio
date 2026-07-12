import { component$ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { site, socials } from "~/content/site";
import { ArrowUpRight } from "../icons/icons";

export const Footer = component$(() => {
  return (
    <footer class="border-t border-line">
      <div class="mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 md:grid-cols-[1.5fr_1fr_1fr] md:py-20">
        <div>
          <p class="font-display text-2xl font-semibold tracking-tight text-ink">
            Daniel Reinoso<span class="text-accent">.</span>
          </p>
          <p class="mt-3 max-w-xs text-sm text-ink-secondary">
            Mathematician. I build AI, topology, and production-grade software — with rigor.
          </p>
        </div>

        <nav aria-label="Sections" class="flex flex-col gap-2 text-sm">
          <span class="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Sections
          </span>
          <Link href="/#projects" class="w-fit text-ink-secondary transition-colors hover:text-ink">Projects</Link>
          <Link href="/#research" class="w-fit text-ink-secondary transition-colors hover:text-ink">Research</Link>
          <Link href="/#about" class="w-fit text-ink-secondary transition-colors hover:text-ink">About</Link>
          <Link href="/#contact" class="w-fit text-ink-secondary transition-colors hover:text-ink">Contact</Link>
        </nav>

        <nav aria-label="Links" class="flex flex-col gap-2 text-sm">
          <span class="mb-1 font-mono text-[11px] uppercase tracking-[0.18em] text-ink-muted">
            Links
          </span>
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              class="group flex w-fit items-center gap-1 text-ink-secondary transition-colors hover:text-ink"
            >
              {s.label}
              <ArrowUpRight size={13} class="opacity-0 transition-opacity group-hover:opacity-100" />
            </a>
          ))}
        </nav>
      </div>

      <div class="mx-auto flex max-w-6xl flex-col gap-2 border-t border-line px-4 py-6 text-xs text-ink-muted sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <p class="tabular">© 2026 {site.fullName} — {site.location}</p>
        <p class="font-mono">Built with Qwik · Swiss Modernism design</p>
      </div>
    </footer>
  );
});
