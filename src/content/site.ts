/**
 * Central site configuration.
 * `nav` is config-driven so the future sales module can be switched on later
 * (set enabled: true on the /store entry) without touching the UI.
 */

export const site = {
  name: "Daniel Reinoso",
  fullName: "César Daniel Reinoso Reinoso",
  role: "Mathematician",
  tagline:
    "Mathematician who builds — AI, topology, and production-grade software.",
  // Update to the final domain before publishing (used in metadata / SEO / JSON-LD).
  url: "https://danielreinoso.dev",
  locale: "en_US",
  email: "cesardanielrrch@gmail.com",
  location: "Ecuador",
  github: "https://github.com/Dcrr1717",
} as const;

export type NavItem = {
  label: string;
  href: string;
  enabled: boolean;
  external?: boolean;
};

export const nav: NavItem[] = [
  { label: "Projects", href: "/#projects", enabled: true },
  { label: "Research", href: "/#research", enabled: true },
  { label: "About", href: "/#about", enabled: true },
  // Ready for the future sales module — switch on by setting enabled: true.
  { label: "Store", href: "/store", enabled: false },
];

export const socials = [
  { label: "GitHub", href: site.github, handle: "GitHub" },
  { label: "Email", href: `mailto:${site.email}`, handle: site.email },
] as const;
