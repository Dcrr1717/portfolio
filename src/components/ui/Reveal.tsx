import { component$, Slot } from "@builder.io/qwik";

/**
 * Envoltorio de scroll-reveal. Renderiza `.reveal`; un IntersectionObserver
 * global (en el layout) añade `.is-visible`. Respeta prefers-reduced-motion vía CSS.
 */
export const Reveal = component$<{ class?: string; delay?: number }>(
  ({ class: c, delay = 0 }) => {
    return (
      <div
        class={`reveal${c ? " " + c : ""}`}
        style={{ "--reveal-delay": `${delay}ms` }}
      >
        <Slot />
      </div>
    );
  },
);
