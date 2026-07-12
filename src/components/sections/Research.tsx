import { component$, useContext } from "@builder.io/qwik";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LocaleContext, ui, tr, type LS } from "~/content/i18n";

const lines: { field: LS; title: LS; detail: LS; methods: string[] }[] = [
  {
    field: { en: "AI × Topology", es: "IA × Topología", fr: "IA × Topologie" },
    title: {
      en: "Neural architecture discrimination via persistent homology",
      es: "Discriminación de arquitecturas neuronales con homología persistente",
      fr: "Discrimination d'architectures neuronales par homologie persistante",
    },
    detail: {
      en: "A peer-reviewed descriptor that fingerprints trained networks with graph theory and persistent homology (Family AUC 0.95–0.97 across CIFAR & SVHN).",
      es: "Un descriptor peer-reviewed que identifica redes entrenadas con teoría de grafos y homología persistente (Family AUC 0.95–0.97 en CIFAR y SVHN).",
      fr: "Un descripteur publié qui identifie des réseaux entraînés via la théorie des graphes et l'homologie persistante (Family AUC 0,95–0,97 sur CIFAR et SVHN).",
    },
    methods: ["Persistent homology", "PyTorch", "leak-free CV"],
  },
  {
    field: { en: "Pure mathematics", es: "Matemática pura", fr: "Mathématiques pures" },
    title: {
      en: "A Hodge-theoretic multiscale descriptor",
      es: "Un descriptor multiescala Hodge-teórico",
      fr: "Un descripteur multi-échelle fondé sur Hodge",
    },
    detail: {
      en: "Algebraic topology meets the mathematics of data — a manuscript prepared in SIAM SIMODS format. Also: research in mathematical logic and incompleteness.",
      es: "La topología algebraica se encuentra con la matemática de los datos — un manuscrito en formato SIAM SIMODS. También: investigación en lógica matemática e incompletitud.",
      fr: "La topologie algébrique rencontre les mathématiques des données — un manuscrit au format SIAM SIMODS. Aussi : recherche en logique mathématique et incomplétude.",
    },
    methods: ["Hodge theory", "Algebraic topology", "LaTeX"],
  },
  {
    field: { en: "Topological data analysis", es: "Análisis topológico de datos", fr: "Analyse topologique de données" },
    title: {
      en: "Spectral distances between complex networks",
      es: "Distancias espectrales entre redes complejas",
      fr: "Distances spectrales entre réseaux complexes",
    },
    detail: {
      en: "Comparing networks through the spectra of their structure, applied to real citation networks and synthetic benchmarks.",
      es: "Comparar redes a través del espectro de su estructura, aplicado a redes de citación reales y benchmarks sintéticos.",
      fr: "Comparer des réseaux à travers le spectre de leur structure, appliqué à des réseaux de citations réels et à des benchmarks synthétiques.",
    },
    methods: ["Spectral graph theory", "GUDHI", "networkx"],
  },
];

export const Research = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  return (
    <section id="research" class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
      <SectionHeader index="03" label={tr(ui.research.label, l)} title={tr(ui.research.title, l)} lede={tr(ui.research.lede, l)} />

      <ol class="border-t border-line">
        {lines.map((r, i) => (
          <Reveal key={r.title.en} delay={(i % 3) * 50}>
            <li class="grid gap-4 border-b border-line py-8 md:grid-cols-[auto_1fr_auto] md:items-baseline md:gap-8">
              <span class="font-mono text-[11px] uppercase tracking-[0.16em] text-accent-ink md:w-48">{tr(r.field, l)}</span>
              <div>
                <h3 class="font-display text-xl font-semibold tracking-tight text-ink sm:text-2xl">{tr(r.title, l)}</h3>
                <p class="mt-2 max-w-2xl text-ink-secondary">{tr(r.detail, l)}</p>
              </div>
              <ul class="flex flex-wrap gap-1.5 md:justify-end">
                {r.methods.map((m) => (
                  <li key={m} class="rounded-full border border-line px-2.5 py-1 font-mono text-[11px] text-ink-muted">{m}</li>
                ))}
              </ul>
            </li>
          </Reveal>
        ))}
      </ol>

      <Reveal delay={100}>
        <p class="mt-8 max-w-2xl text-sm text-ink-muted">{tr(ui.research.privacy, l)}</p>
      </Reveal>
    </section>
  );
});
