import { component$, useSignal, useOnWindow, $ } from "@builder.io/qwik";
import { Link } from "@builder.io/qwik-city";
import { nav } from "~/content/site";
import { ThemeToggle } from "./ThemeToggle";
import { ArrowUpRight } from "../icons/icons";

const items = nav.filter((n) => n.enabled);

export const Nav = component$(() => {
  const open = useSignal(false);
  const scrolled = useSignal(false);

  useOnWindow(
    "scroll",
    $(() => {
      scrolled.value = window.scrollY > 24;
    }),
  );

  const close = $(() => {
    open.value = false;
    document.body.style.overflow = "";
  });

  return (
    <header class="pointer-events-none fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-[env(safe-area-inset-top,0px)]">
      <nav
        class={`pointer-events-auto mt-4 flex w-full max-w-3xl items-center justify-between gap-3 rounded-full border border-line/80 px-3 py-2 pl-5 backdrop-blur-xl transition-[background-color,box-shadow,border-color] duration-500 ${
          scrolled.value ? "bg-surface/70 shadow-[var(--shadow-ambient)]" : "bg-surface/30"
        }`}
        aria-label="Principal"
      >
        <Link
          href="/#home"
          onClick$={close}
          class="font-display text-[15px] font-semibold tracking-tight text-ink"
        >
          Daniel Reinoso<span class="text-accent">.</span>
        </Link>

        <div class="hidden items-center gap-1 md:flex">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              class="rounded-full px-3.5 py-1.5 text-[13px] text-ink-secondary transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
        </div>

        <div class="flex items-center gap-2">
          <ThemeToggle class="hidden sm:grid" />
          <Link
            href="/#contact"
            class="group hidden items-center gap-2 rounded-full bg-ink py-2 pl-4 pr-2 text-[13px] font-medium text-bg transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] md:flex"
          >
            Contact
            <span class="grid size-6 place-items-center rounded-full bg-bg/15 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5">
              <ArrowUpRight size={13} />
            </span>
          </Link>

          <button
            type="button"
            onClick$={() => {
              const v = !open.value;
              open.value = v;
              document.body.style.overflow = v ? "hidden" : "";
            }}
            aria-label={open.value ? "Close menu" : "Open menu"}
            aria-expanded={open.value}
            class="relative grid size-9 place-items-center rounded-full border border-line md:hidden"
          >
            <span
              class={`absolute h-px w-4 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open.value ? "rotate-45" : "-translate-y-1"
              }`}
            />
            <span
              class={`absolute h-px w-4 bg-ink transition-transform duration-300 ease-[cubic-bezier(0.32,0.72,0,1)] ${
                open.value ? "-rotate-45" : "translate-y-1"
              }`}
            />
          </button>
        </div>
      </nav>

      <div
        class={`menu-overlay fixed inset-0 z-40 flex flex-col justify-center overscroll-contain bg-bg/90 px-8 backdrop-blur-2xl md:hidden ${
          open.value ? "is-open" : ""
        }`}
      >
        <ul class="flex flex-col gap-2">
          {items.map((item, i) => (
            <li
              key={item.href}
              class="menu-link"
              style={{ transitionDelay: `${80 + i * 60}ms` }}
            >
              <Link
                href={item.href}
                onClick$={close}
                class="font-display text-4xl font-semibold tracking-tight text-ink"
              >
                <span class="mr-3 font-mono text-sm text-accent tabular">0{i + 1}</span>
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
        <div class="mt-12 flex items-center gap-4">
          <Link
            href="/#contact"
            onClick$={close}
            class="rounded-full bg-ink px-5 py-3 text-sm font-medium text-bg"
          >
            Contact
          </Link>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
});
