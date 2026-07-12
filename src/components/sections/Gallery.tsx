import { component$, useContext } from "@builder.io/qwik";
import { SectionHeader } from "../ui/SectionHeader";
import { Reveal } from "../ui/Reveal";
import { LocaleContext, ui, tr, type LS } from "~/content/i18n";

type Shot = { src: string; caption: LS; wide?: boolean };
const shots: Shot[] = [
  { src: "/images/chess.webp", caption: ui.gallery.cChess, wide: true },
  { src: "/images/gnn.webp", caption: ui.gallery.cGnn },
  { src: "/images/lorenz.webp", caption: ui.gallery.cLorenz },
  { src: "/images/montecarlo.webp", caption: ui.gallery.cMonte },
  { src: "/images/bz.webp", caption: ui.gallery.cBz },
];

export const Gallery = component$(() => {
  const locale = useContext(LocaleContext);
  const l = locale.value;
  return (
    <section class="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
      <SectionHeader index="—" label={tr(ui.gallery.label, l)} title={tr(ui.gallery.title, l)} lede={tr(ui.gallery.lede, l)} />

      <div class="grid grid-cols-2 gap-3 md:grid-cols-3">
        {shots.map((s, i) => (
          <Reveal key={s.src} delay={(i % 3) * 70} class={s.wide ? "col-span-2" : ""}>
            <figure
              class={`group relative overflow-hidden rounded-2xl border border-line bg-surface-2 ${
                s.wide ? "aspect-[2/1]" : "aspect-square"
              }`}
            >
              <img
                src={s.src}
                alt={tr(s.caption, l)}
                width={1024}
                height={s.wide ? 512 : 1024}
                loading="lazy"
                decoding="async"
                class="h-full w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-[1.04]"
              />
              <figcaption class="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                <span class="font-mono text-[11px] uppercase tracking-[0.14em] text-white/90">{tr(s.caption, l)}</span>
              </figcaption>
            </figure>
          </Reveal>
        ))}
      </div>
    </section>
  );
});
