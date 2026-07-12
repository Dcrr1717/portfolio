import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

/**
 * Interactive living network — a proximity graph of drifting nodes that reacts to
 * the cursor (nearby nodes reach toward you, edges glow in the accent color).
 * Theme-aware, GPU-light (canvas 2D), and reduced-motion safe (renders one static frame).
 */
export const HeroCanvas = component$<{ class?: string }>(({ class: c }) => {
  const ref = useSignal<HTMLCanvasElement>();

  // eslint-disable-next-line qwik/no-use-visible-task
  useVisibleTask$(({ cleanup }) => {
    const canvas = ref.value;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const rootStyle = () => getComputedStyle(document.documentElement);
    let ink = rootStyle().getPropertyValue("--ink").trim() || "#fafafa";
    let accent = rootStyle().getPropertyValue("--accent").trim() || "#ff5a3c";

    // Re-read colors when the theme class changes
    const themeObs = new MutationObserver(() => {
      const s = rootStyle();
      ink = s.getPropertyValue("--ink").trim() || ink;
      accent = s.getPropertyValue("--accent").trim() || accent;
    });
    themeObs.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    let w = 0, h = 0, dpr = Math.min(window.devicePixelRatio || 1, 2);
    type N = { x: number; y: number; vx: number; vy: number; r: number; a: boolean };
    let nodes: N[] = [];
    const mouse = { x: -9999, y: -9999, on: false };

    const seed = () => {
      const count = Math.max(22, Math.min(46, Math.round((w * h) / 16000)));
      nodes = Array.from({ length: count }, (_, i) => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.22,
        vy: (Math.random() - 0.5) * 0.22,
        r: Math.random() < 0.18 ? 3.2 : 1.6,
        a: i % 7 === 0,
      }));
    };

    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      w = rect.width; h = rect.height;
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = Math.max(1, Math.floor(w * dpr));
      canvas.height = Math.max(1, Math.floor(h * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const hexA = (hex: string, a: number) => {
      const m = hex.replace("#", "");
      const v = m.length === 3 ? m.split("").map((x) => x + x).join("") : m;
      const n = parseInt(v || "888888", 16);
      return `rgba(${(n >> 16) & 255}, ${(n >> 8) & 255}, ${n & 255}, ${a})`;
    };

    const LINK = 132;
    const draw = () => {
      ctx.clearRect(0, 0, w, h);
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i];
        if (!reduce) {
          // drift + gentle pull toward cursor
          if (mouse.on) {
            const dx = mouse.x - n.x, dy = mouse.y - n.y;
            const d2 = dx * dx + dy * dy;
            if (d2 < 26000) { n.vx += dx * 0.00006; n.vy += dy * 0.00006; }
          }
          n.x += n.vx; n.y += n.vy;
          n.vx *= 0.99; n.vy *= 0.99;
          if (n.x < 0 || n.x > w) n.vx *= -1;
          if (n.y < 0 || n.y > h) n.vy *= -1;
          n.x = Math.max(0, Math.min(w, n.x));
          n.y = Math.max(0, Math.min(h, n.y));
        }
        // proximity edges
        for (let j = i + 1; j < nodes.length; j++) {
          const m = nodes[j];
          const dx = n.x - m.x, dy = n.y - m.y;
          const dist = Math.hypot(dx, dy);
          if (dist < LINK) {
            ctx.strokeStyle = hexA(ink, 0.14 * (1 - dist / LINK));
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(n.x, n.y); ctx.lineTo(m.x, m.y); ctx.stroke();
          }
        }
        // cursor links
        if (mouse.on) {
          const dx = mouse.x - n.x, dy = mouse.y - n.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 170) {
            ctx.strokeStyle = hexA(accent, 0.5 * (1 - dist / 170));
            ctx.lineWidth = 1;
            ctx.beginPath(); ctx.moveTo(mouse.x, mouse.y); ctx.lineTo(n.x, n.y); ctx.stroke();
          }
        }
      }
      // nodes
      for (const n of nodes) {
        ctx.fillStyle = n.a ? accent : hexA(ink, 0.75);
        ctx.beginPath(); ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2); ctx.fill();
      }
    };

    let raf = 0;
    const loop = () => { draw(); raf = requestAnimationFrame(loop); };
    const start = () => { if (!raf && !reduce) raf = requestAnimationFrame(loop); };
    const stop = () => { if (raf) { cancelAnimationFrame(raf); raf = 0; } };

    const onMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left; mouse.y = e.clientY - rect.top; mouse.on = true;
    };
    const onLeave = () => { mouse.on = false; mouse.x = -9999; mouse.y = -9999; };
    const onHidden = () => (document.hidden ? stop() : start());

    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    // Pause the loop when the hero scrolls out of view (perf + battery)
    const vis = new IntersectionObserver(([e]) => (e.isIntersecting ? start() : stop()));
    vis.observe(canvas);
    document.addEventListener("visibilitychange", onHidden);
    window.addEventListener("pointermove", onMove, { passive: true });
    window.addEventListener("pointerleave", onLeave);

    if (reduce) draw();

    cleanup(() => {
      stop();
      ro.disconnect();
      vis.disconnect();
      themeObs.disconnect();
      document.removeEventListener("visibilitychange", onHidden);
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerleave", onLeave);
    });
  });

  return <canvas ref={ref} class={c} aria-hidden="true" />;
});
