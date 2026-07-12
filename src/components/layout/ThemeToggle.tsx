import { component$, useContext, $ } from "@builder.io/qwik";
import { Sun, Moon } from "../icons/icons";
import { LocaleContext, ui, tr } from "~/content/i18n";

/**
 * Fully resumable theme toggle: the handler loads only on click.
 * Icon visibility is driven by the `dark` class (no flash).
 */
export const ThemeToggle = component$<{ class?: string }>(({ class: c }) => {
  const locale = useContext(LocaleContext);
  const toggle = $(() => {
    const el = document.documentElement;
    const isDark = el.classList.toggle("dark");
    try {
      localStorage.setItem("theme", isDark ? "dark" : "light");
    } catch {
      /* ignore */
    }
  });

  return (
    <button
      type="button"
      onClick$={toggle}
      aria-label={tr(ui.nav.theme, locale.value)}
      class={`grid size-9 place-items-center rounded-full border border-line text-ink-secondary transition-colors duration-300 hover:border-line-strong hover:text-ink ${c ?? ""}`}
    >
      <Sun size={17} class="hidden dark:block" />
      <Moon size={17} class="block dark:hidden" />
    </button>
  );
});
