import { component$, $ } from "@builder.io/qwik";
import { Sun, Moon } from "../icons/icons";

/**
 * Toggle de tema 100% resumible: el handler se carga solo al hacer clic.
 * La visibilidad de los iconos la maneja la clase `dark` (sin flash).
 */
export const ThemeToggle = component$<{ class?: string }>(({ class: c }) => {
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
      aria-label="Cambiar entre modo claro y oscuro"
      class={`grid size-9 place-items-center rounded-full border border-line text-ink-secondary transition-colors duration-300 hover:border-line-strong hover:text-ink ${c ?? ""}`}
    >
      <Sun size={17} class="hidden dark:block" />
      <Moon size={17} class="block dark:hidden" />
    </button>
  );
});
