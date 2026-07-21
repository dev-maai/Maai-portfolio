"use client";

import { useRef, useEffect } from "react";

/* SignalFlow — the logo's "line and the dot" + "search authority, drawn in a
   single stroke." Flowing evergreen signal lines drift across the background; a
   glowing magenta dot (the Bindu / position-one mark) rides the lead line and
   eases toward the cursor along its lit trail, while the lines bend toward the
   pointer and a soft magenta glow follows it. Tunable per placement via props.
   Canvas; reduced-motion renders one static frame. Purely decorative. */
const GREEN = [134, 171, 151]; // --pine
const GREEN2 = [167, 198, 180]; // --pine-deep (lead line)
const MAG = [230, 46, 107]; // #E62E6B

export default function SignalFlow({
  className = "",
  lines = 6, // how many flowing lines
  speed = 1, // drift speed multiplier
  reactivity = 1, // how strongly lines + dot respond to the cursor
  glow = 1, // dot + cursor glow multiplier
  alpha = 1, // overall opacity (dial down on busy sections)
  onLight = false, // deep-green lines for light backgrounds (default is light lines for dark)
}) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    // on a light ground the pale lines disappear — use the deep evergreens instead
    const G = onLight ? [38, 89, 67] : GREEN;
    const G2 = onLight ? [28, 74, 54] : GREEN2;

    let W = 0, H = 0, raf = 0, t = 0, dotX = 0, rows = [];
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, seen: false };
    const A = (a) => a * alpha;

    function build() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      rows = [];
      for (let i = 0; i < lines; i++) {
        const f = lines === 1 ? 0.5 : i / (lines - 1);
        rows.push({
          base: H * (0.16 + 0.68 * f),
          amp: 14 + i * 3.5,
          f1: 0.0055 + 0.0015 * i, s1: (0.15 + 0.05 * i) * speed, p1: i * 1.7,
          f2: 0.012 + 0.001 * i, s2: (0.1 + 0.03 * i) * speed, p2: i * 0.9,
          hero: i === 1 % lines,
          alpha: 0.09 + 0.035 * (i % 2),
        });
      }
      if (dotX === 0) dotX = W * 0.3;
    }

    function warp(x, y) {
      if (!mouse.seen) return y;
      const dx = x - mouse.x, dy = y - mouse.y;
      const sigma = 160;
      const infl = Math.exp(-(dx * dx + dy * dy) / (2 * sigma * sigma));
      return y + (mouse.y - y) * infl * 0.46 * reactivity;
    }

    function lineY(L, x) {
      const y = L.base
        + L.amp * Math.sin(x * L.f1 + t * L.s1 + L.p1)
        + L.amp * 0.5 * Math.sin(x * L.f2 - t * L.s2 + L.p2);
      return warp(x, y);
    }

    function render() {
      ctx.clearRect(0, 0, W, H);

      // soft magenta glow trailing the cursor
      if (mouse.seen) {
        const g = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, 220);
        g.addColorStop(0, `rgba(${MAG[0]},${MAG[1]},${MAG[2]},${A(0.05 * glow)})`);
        g.addColorStop(1, `rgba(${MAG[0]},${MAG[1]},${MAG[2]},0)`);
        ctx.fillStyle = g;
        ctx.fillRect(0, 0, W, H);
      }

      const step = 7;
      for (const L of rows) {
        let boost = 0;
        if (mouse.seen) {
          const dd = mouse.y - L.base;
          boost = Math.exp(-(dd * dd) / (2 * 135 * 135)) * 0.22 * reactivity;
        }
        ctx.beginPath();
        for (let x = -step; x <= W + step; x += step) {
          const y = lineY(L, x);
          if (x <= -step) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        const col = L.hero ? G2 : G;
        ctx.lineWidth = L.hero ? 1.7 : 1.1;
        ctx.strokeStyle = `rgba(${col[0]},${col[1]},${col[2]},${A(L.alpha + boost)})`;
        ctx.stroke();
      }

      // magenta position-one dot rides the lead line, easing toward the cursor
      const hero = rows.find((l) => l.hero) || rows[0];
      if (mouse.seen) dotX += (mouse.x - dotX) * 0.07;
      else { dotX += 0.9 * speed; if (dotX > W + 40) dotX = -40; }
      const dy = lineY(hero, dotX);

      // lit trail behind the dot — the "single stroke"
      ctx.beginPath();
      for (let k = 0; k < 32; k++) {
        const x = dotX - k * 6;
        const y = lineY(hero, x);
        if (k === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
      }
      ctx.lineWidth = 2;
      ctx.strokeStyle = `rgba(${MAG[0]},${MAG[1]},${MAG[2]},${A(0.5)})`;
      ctx.stroke();

      // the dot (glowing, gently pulsing)
      const pulse = reduce ? 0 : Math.sin(t * 2.4) * 0.6;
      ctx.save();
      ctx.shadowColor = `rgba(${MAG[0]},${MAG[1]},${MAG[2]},${A(0.9)})`;
      ctx.shadowBlur = 16 * glow;
      ctx.fillStyle = `rgba(${MAG[0]},${MAG[1]},${MAG[2]},${A(1)})`;
      ctx.beginPath();
      ctx.arc(dotX, dy, 4.4 + pulse, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();
    }

    function loop() {
      t += 0.016 * speed;
      mouse.x += (mouse.tx - mouse.x) * 0.12;
      mouse.y += (mouse.ty - mouse.y) * 0.12;
      render();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const r = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - r.left;
      mouse.ty = e.clientY - r.top;
      if (!mouse.seen) { mouse.x = mouse.tx; mouse.y = mouse.ty; mouse.seen = true; }
    }

    build();
    window.addEventListener("resize", build);
    if (reduce) render();
    else {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
    };
  }, [lines, speed, reactivity, glow, alpha, onLight]);

  return <canvas ref={ref} className={`signalflow ${className}`.trim()} aria-hidden="true" />;
}
