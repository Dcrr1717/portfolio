import { component$ } from "@builder.io/qwik";
import type { Project } from "~/content/projects";

/** Motivos de línea que referencian el trabajo real de cada proyecto. Decorativos. */

const S = {
  fill: "none",
  stroke: "currentColor",
  "stroke-width": 1,
  "vector-effect": "non-scaling-stroke" as const,
};

function Chess() {
  const cells = [];
  for (let r = 0; r < 4; r++) {
    for (let c = 0; c < 6; c++) {
      if ((r + c) % 2 === 0)
        cells.push(
          <rect key={`${r}-${c}`} x={c * 30} y={r * 30} width="30" height="30" fill="currentColor" opacity="0.06" />,
        );
    }
  }
  return (
    <>
      {cells}
      <g {...S} opacity="0.5">
        {[0, 30, 60, 90, 120].map((y) => (
          <line key={`h${y}`} x1="0" y1={y} x2="180" y2={y} />
        ))}
        {[0, 30, 60, 90, 120, 150, 180].map((x) => (
          <line key={`v${x}`} x1={x} y1="0" x2={x} y2="120" />
        ))}
      </g>
      <path d="M45 105 45 45 105 45" {...S} class="text-accent" stroke-width="1.5" stroke-dasharray="2 4" />
      <circle cx="45" cy="105" r="4" fill="currentColor" />
      <circle cx="105" cy="45" r="4" class="fill-accent" />
    </>
  );
}

function Cosmos() {
  return (
    <>
      {[18, 34, 50].map((r, i) => (
        <ellipse key={r} cx="100" cy="60" rx={r * 1.6} ry={r} {...S} opacity={0.4 - i * 0.08} />
      ))}
      <path d="M100 60 m-80 0 a80 40 0 1 0 160 0" {...S} class="text-accent" opacity="0.6" />
      <circle cx="100" cy="60" r="3" fill="currentColor" />
      <circle cx="180" cy="60" r="4" class="fill-accent" />
      <circle cx="30" cy="70" r="2.5" fill="currentColor" />
      <circle cx="150" cy="30" r="2" fill="currentColor" />
    </>
  );
}

function Network() {
  const nodes = [
    [30, 40], [70, 90], [110, 30], [150, 80], [180, 45], [90, 60],
  ];
  const edges = [[0, 5], [1, 5], [2, 5], [3, 5], [2, 4], [3, 4], [0, 1]];
  return (
    <>
      <g {...S} opacity="0.55">
        {edges.map(([a, b], i) => (
          <line key={i} x1={nodes[a][0]} y1={nodes[a][1]} x2={nodes[b][0]} y2={nodes[b][1]} />
        ))}
      </g>
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 5 ? 5 : 3} class={i === 5 ? "fill-accent" : "fill-current"} />
      ))}
    </>
  );
}

function Molecule() {
  const hex = "100,25 135,45 135,85 100,105 65,85 65,45";
  const atoms = [[100, 25], [135, 45], [135, 85], [100, 105], [65, 85], [65, 45]];
  return (
    <>
      <polygon points={hex} {...S} opacity="0.6" />
      <line x1="135" y1="45" x2="170" y2="25" {...S} />
      <line x1="65" y1="85" x2="30" y2="105" {...S} />
      <line x1="100" y1="25" x2="100" y2="5" {...S} />
      {atoms.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="3.5" class={i === 0 ? "fill-accent" : "fill-current"} />
      ))}
      <circle cx="170" cy="25" r="2.5" fill="currentColor" />
      <circle cx="30" cy="105" r="2.5" fill="currentColor" />
    </>
  );
}

function Brain() {
  return (
    <>
      <path d="M40 80 Q40 30 90 35 Q120 20 150 45 Q175 55 160 85 Q150 105 110 95 Q70 105 40 80 Z" {...S} opacity="0.5" />
      <g {...S} opacity="0.5">
        <path d="M70 55 100 60 130 50" />
        <path d="M75 80 100 60 120 82" />
      </g>
      <circle cx="100" cy="60" r="4" class="fill-accent" />
      {[[70, 55], [130, 50], [75, 80], [120, 82]].map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r="2.5" fill="currentColor" />
      ))}
    </>
  );
}

function Bot() {
  return (
    <>
      <rect x="55" y="35" width="90" height="60" rx="10" {...S} opacity="0.6" />
      <line x1="100" y1="20" x2="100" y2="35" {...S} />
      <circle cx="100" cy="16" r="4" class="fill-accent" />
      <circle cx="80" cy="60" r="6" {...S} />
      <circle cx="120" cy="60" r="6" {...S} />
      <path d="M78 80 h44" {...S} />
      <path d="M40 55 h15 M145 55 h15" {...S} opacity="0.5" />
    </>
  );
}

function Topology() {
  return (
    <>
      <ellipse cx="82" cy="60" rx="34" ry="23" {...S} opacity="0.6" />
      <ellipse cx="120" cy="60" rx="34" ry="23" {...S} class="text-accent" opacity="0.7" />
      <circle cx="82" cy="60" r="5" {...S} />
      <circle cx="120" cy="60" r="5" {...S} />
      <circle cx="101" cy="37" r="3" class="fill-accent" />
      <circle cx="101" cy="83" r="2.5" fill="currentColor" />
    </>
  );
}

function Logic() {
  const nodes = [[100, 20], [60, 55], [140, 55], [40, 95], [82, 95], [118, 95], [160, 95]];
  return (
    <>
      <g {...S} opacity="0.55">
        <line x1="100" y1="20" x2="60" y2="55" />
        <line x1="100" y1="20" x2="140" y2="55" />
        <line x1="60" y1="55" x2="40" y2="95" />
        <line x1="60" y1="55" x2="82" y2="95" />
        <line x1="140" y1="55" x2="118" y2="95" />
        <line x1="140" y1="55" x2="160" y2="95" />
      </g>
      <path d="M100 20 q64 6 60 42" {...S} class="text-accent" stroke-dasharray="2 4" />
      {nodes.map(([x, y], i) => (
        <circle key={i} cx={x} cy={y} r={i === 0 ? 4 : 3} class={i === 0 ? "fill-accent" : "fill-current"} />
      ))}
    </>
  );
}

function Spectral() {
  const bars = [30, 55, 40, 74, 50, 86, 44, 62, 34];
  return (
    <>
      <line x1="18" y1="102" x2="188" y2="102" {...S} opacity="0.5" />
      {bars.map((h, i) => (
        <line key={i} x1={30 + i * 18} y1="102" x2={30 + i * 18} y2={102 - h}
          {...S} class={i === 3 ? "text-accent" : ""} stroke-width={i === 3 ? "1.5" : "1"} />
      ))}
      {bars.map((h, i) => (
        <circle key={"c" + i} cx={30 + i * 18} cy={102 - h} r={i === 3 ? 4 : 2.5}
          class={i === 3 ? "fill-accent" : "fill-current"} />
      ))}
    </>
  );
}

function Wave() {
  return (
    <>
      <path d="M10 60 Q40 22 70 60 T130 60 T190 60" {...S} opacity="0.6" />
      <path d="M10 60 Q40 98 70 60 T130 60 T190 60" {...S} class="text-accent" opacity="0.7" />
      <circle cx="70" cy="60" r="3.5" class="fill-accent" />
      <circle cx="130" cy="60" r="3" fill="currentColor" />
    </>
  );
}

export const Motif = component$<{ motif: Project["motif"]; class?: string }>(
  ({ motif, class: c }) => {
    return (
      <svg viewBox="0 0 200 120" class={c} aria-hidden="true" preserveAspectRatio="xMidYMid meet">
        {motif === "chess" && <Chess />}
        {motif === "cosmos" && <Cosmos />}
        {motif === "network" && <Network />}
        {motif === "molecule" && <Molecule />}
        {motif === "brain" && <Brain />}
        {motif === "bot" && <Bot />}
        {motif === "topology" && <Topology />}
        {motif === "logic" && <Logic />}
        {motif === "spectral" && <Spectral />}
        {motif === "wave" && <Wave />}
      </svg>
    );
  },
);
