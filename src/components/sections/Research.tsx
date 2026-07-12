import { component$ } from "@builder.io/qwik";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const lines = [
  {
    field: "AI × Topology",
    title: "Neural architecture discrimination via persistent homology",
    detail:
      "A peer-reviewed descriptor that fingerprints trained networks with graph theory and persistent homology (Family AUC 0.95–0.97 across CIFAR & SVHN).",
    methods: ["Persistent homology", "PyTorch", "leak-free CV"],
  },
  {
    field: "Pure mathematics",
    title: "A Hodge-theoretic multiscale descriptor",
    detail:
      "Algebraic topology meets the mathematics of data — a manuscript prepared in SIAM SIMODS format. Also: research in mathematical logic and incompleteness.",
    methods: ["Hodge theory", "Algebraic topology", "LaTeX"],
  },
  {
    field: "Topological data analysis",
    title: "Spectral distances between complex networks",
    detail:
      "Comparing networks through the spectra of their structure, applied to real citation networks and synthetic benchmarks.",
    methods: ["Spectral graph theory", "GUDHI", "networkx"],
  },
];

export const Research = component$(() => {
  return (
    <section id="research" class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader
        index="03"
        label="Research"
        title="A single thread: topological & spectral descriptors."
        lede="My research characterizes data and neural networks through topology, spectra and Hodge theory — bridging pure mathematics and applied AI."
      />

      <ol class="border-t border-line">
        {lines.map((r, i) => (
          <Reveal key={r.title} delay={(i % 3) * 50}>
            <li class="grid gap-4 border-b border-line py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-8">
              <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink md:w-48">
                {r.field}
              </span>
              <div>
                <h3 class="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">
                  {r.title}
                </h3>
                <p class="mt-2 max-w-2xl text-ink-secondary">{r.detail}</p>
              </div>
              <ul class="flex flex-wrap gap-1.5 md:justify-end">
                {r.methods.map((m) => (
                  <li
                    key={m}
                    class="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={100}>
        <p class="mt-8 max-w-2xl text-sm text-ink-muted">
          Privacy note: clinical projects are described only by their methods and medical
          field. No patient data, collaborators, or sensitive material are included.
        </p>
      </Reveal>
    </section>
  );
});
