import { component$, useContext } from "@builder.io/qwik";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LocaleContext, ui, tr, type LS } from "~/content/i18n";

const principles: { k: LS; v: LS }[] = [
  {
    k: { en: "From theorem to product", es: "Del teorema al producto", fr: "Du théorème au produit" },
    v: {
      en: "I hold software to the standard of a proof: correct, clear, and with no loose ends.",
      es: "Trato el software con la exigencia de una demostración: correcto, claro y sin cabos sueltos.",
      fr: "Je tiens le logiciel au niveau d'une démonstration : correct, clair et sans zones d'ombre.",
    },
  },
  {
    k: { en: "Reproducibility", es: "Reproducibilidad", fr: "Reproductibilité" },
    v: {
      en: "If it can't be repeated, it doesn't count. Pipelines, tests and containers by default.",
      es: "Si no se puede repetir, no cuenta. Pipelines, pruebas y contenedores por defecto.",
      fr: "Si ce n'est pas reproductible, ça ne compte pas. Pipelines, tests et conteneurs par défaut.",
    },
  },
  {
    k: { en: "Rigor and craft", es: "Rigor y oficio", fr: "Rigueur et métier" },
    v: {
      en: "Mathematics to think the problem through; engineering to build the answer.",
      es: "Matemáticas para pensar el problema; ingeniería para construir la respuesta.",
      fr: "Les mathématiques pour penser le problème ; l'ingenierie pour construire la réponse.",
    },
  },
];

export const About = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  return (
    <section id="about" class="border-t border-line bg-surface-2/40">
      <div class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
        <SectionHeader index="04" label={tr(ui.about.label, l)} title={tr(ui.about.title, l)} />

        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div class="space-y-5 text-lg leading-relaxed text-ink-secondary">
              <p>{tr(ui.about.p1, l)}</p>
              <p>{tr(ui.about.p2, l)}</p>
              <p>{tr(ui.about.p3, l)}</p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl class="divide-y divide-line rounded-2xl border border-line bg-surface">
              {principles.map((p, i) => (
                <div key={p.k.en} class="p-6">
                  <dt class="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
                    <span class="font-mono text-xs text-accent-ink tabular">0{i + 1}</span>
                    {tr(p.k, l)}
                  </dt>
                  <dd class="mt-2 text-sm leading-relaxed text-ink-secondary">{tr(p.v, l)}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
});
