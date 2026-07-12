import { component$ } from "@builder.io/qwik";

/** Grafo del hero (GNN / rnn-cosmos / sistemas dinámicos). Entrada animada con CSS. */
const NODES: { x: number; y: number; r: number; accent?: boolean }[] = [
  { x: 120, y: 90, r: 4 },
  { x: 210, y: 60, r: 3 },
  { x: 300, y: 120, r: 5, accent: true },
  { x: 180, y: 190, r: 3 },
  { x: 90, y: 230, r: 4 },
  { x: 260, y: 250, r: 3 },
  { x: 360, y: 210, r: 4 },
  { x: 330, y: 320, r: 3 },
  { x: 170, y: 320, r: 4, accent: true },
  { x: 60, y: 140, r: 2.5 },
];
const EDGES: [number, number][] = [
  [0, 1], [1, 2], [0, 3], [2, 3], [3, 4], [3, 5], [2, 6], [5, 6],
  [6, 7], [5, 8], [4, 8], [0, 9], [9, 4], [2, 5], [7, 8],
];

export const HeroMotif = component$<{ class?: string }>(({ class: c }) => {
  return (
    <svg viewBox="0 0 420 400" class={c} aria-hidden="true" fill="none" preserveAspectRatio="xMidYMid meet">
      <g stroke="currentColor" stroke-width="1" class="text-ink-muted">
        {EDGES.map(([a, b], i) => (
          <line
            key={i}
            x1={NODES[a].x}
            y1={NODES[a].y}
            x2={NODES[b].x}
            y2={NODES[b].y}
            class="gedge"
            style={{ animationDelay: `${200 + i * 50}ms` }}
          />
        ))}
      </g>
      {NODES.map((n, i) => (
        <circle
          key={i}
          cx={n.x}
          cy={n.y}
          r={n.r}
          class={`gnode ${n.accent ? "fill-accent" : "fill-ink"}`}
          style={{ animationDelay: `${400 + i * 70}ms` }}
        />
      ))}
    </svg>
  );
});
