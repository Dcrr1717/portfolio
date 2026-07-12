import { component$ } from "@builder.io/qwik";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";

const principles = [
  {
    k: "From theorem to product",
    v: "I hold software to the standard of a proof: correct, clear, and with no loose ends.",
  },
  {
    k: "Reproducibility",
    v: "If it can't be repeated, it doesn't count. Pipelines, tests and containers by default.",
  },
  {
    k: "Rigor and craft",
    v: "Mathematics to think the problem through; engineering to build the answer.",
  },
];

export const About = component$(() => {
  return (
    <section id="about" class="border-t border-line bg-surface-2/40">
      <div class="mx-auto max-w-6xl scroll-mt-24 px-4 py-24 sm:px-6 md:py-32">
        <SectionHeader index="04" label="About" title="Mathematician, by training and by method." />

        <div class="grid gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <div class="space-y-5 text-lg leading-relaxed text-ink-secondary">
              <p>
                I'm <span class="text-ink">Daniel Reinoso</span> (I also publish as César
                Daniel Reinoso Reinoso), a mathematician. I move naturally between abstraction
                — topology, spectral methods, logic — and putting it to work in code that runs
                and ships.
              </p>
              <p>
                I've built everything from a chess web app with a real engine and in-browser 3D
                neural visualizations to peer-reviewed research fusing persistent homology with
                machine learning. The common thread is rigor: understand the problem before
                touching it, and validate before believing.
              </p>
              <p>
                I'm preparing my <span class="text-ink">doctoral application</span>, aiming to
                keep uniting mathematics, computation, and questions worth asking.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <dl class="divide-y divide-line rounded-2xl border border-line bg-surface">
              {principles.map((p, i) => (
                <div key={p.k} class="p-6">
                  <dt class="flex items-center gap-2.5 font-display text-lg font-semibold text-ink">
                    <span class="font-mono text-xs text-accent-ink tabular">0{i + 1}</span>
                    {p.k}
                  </dt>
                  <dd class="mt-2 text-sm leading-relaxed text-ink-secondary">{p.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
});
