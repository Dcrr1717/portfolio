import { component$ } from "@builder.io/qwik";

/** Iconos hairline (stroke 1.5), estilo Swiss. */
type IconProps = { size?: number; class?: string };

const common = {
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 1.5,
  "stroke-linecap": "round" as const,
  "stroke-linejoin": "round" as const,
  "aria-hidden": true,
};

export const ArrowUpRight = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <path d="M7 17 17 7" />
    <path d="M8 7h9v9" />
  </svg>
));

export const ArrowRight = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <path d="M5 12h14" />
    <path d="m13 6 6 6-6 6" />
  </svg>
));

export const ArrowDown = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <path d="M12 5v14" />
    <path d="m6 13 6 6 6-6" />
  </svg>
));

export const GitHub = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <path d="M9 19c-4.3 1.4-4.3-2.5-6-3m12 5v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12 12 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V21" />
  </svg>
));

export const Mail = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 6 9-6" />
  </svg>
));

export const Sun = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <circle cx="12" cy="12" r="4" />
    <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
  </svg>
));

export const Moon = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8Z" />
  </svg>
));

export const Lock = component$<IconProps>(({ size = 20, class: c }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" class={c} {...common}>
    <rect x="4.5" y="10.5" width="15" height="10" rx="2" />
    <path d="M8 10.5V7a4 4 0 0 1 8 0v3.5" />
  </svg>
));
