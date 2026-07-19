"use client";

import { useRef, useEffect } from "react";

/* RankingGrid — the interactive, cursor-reactive background (the old CursorGrid
   feel), rebuilt from the logo's ranking motif so it actually means something on
   an SEO site: a grid of horizontal search-result bars. Move the cursor and the
   bars around it "rank up" — growing to full width and lighting a magenta
   position-one tip. Canvas for smoothness; reduced-motion renders one static frame. */
const GREEN = [134, 171, 151]; // --pine (evergreen-night)
const MAG = [230, 46, 107]; // --amber / spark magenta #E62E6B

export default function RankingGrid({ className = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const CELL_W = 82;
    const CELL_H = 22;
    const BAR_H = 5;
    const RADIUS = 190; // cursor influence radius

    let W = 0, H = 0, cells = [], raf = 0, t = 0;
    const mouse = { x: -9999, y: -9999, tx: -9999, ty: -9999, seen: false };

    function roundRect(x, y, w, h, r) {
      if (w <= 0) return;
      r = Math.min(r, w / 2, h / 2);
      ctx.beginPath();
      if (ctx.roundRect) ctx.roundRect(x, y, w, h, r);
      else {
        ctx.moveTo(x + r, y);
        ctx.arcTo(x + w, y, x + w, y + h, r);
        ctx.arcTo(x + w, y + h, x, y + h, r);
        ctx.arcTo(x, y + h, x, y, r);
        ctx.arcTo(x, y, x + w, y, r);
        ctx.closePath();
      }
    }

    function build() {
      const rect = canvas.getBoundingClientRect();
      W = rect.width; H = rect.height;
      canvas.width = Math.round(W * dpr);
      canvas.height = Math.round(H * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const cols = Math.ceil(W / CELL_W) + 1;
      const rows = Math.ceil(H / CELL_H) + 1;
      cells = [];
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          cells.push({
            x: c * CELL_W + 12,
            y: r * CELL_H + CELL_H / 2,
            maxW: CELL_W * 0.7,
            seed: (r * 12.9 + c * 7.3) % (Math.PI * 2),
          });
        }
      }
    }

    function render() {
      ctx.clearRect(0, 0, W, H);
      mouse.x += (mouse.tx - mouse.x) * 0.14;
      mouse.y += (mouse.ty - mouse.y) * 0.14;
      for (const cell of cells) {
        let react = 0;
        if (mouse.seen) {
          const dx = cell.x + cell.maxW / 2 - mouse.x;
          const dy = cell.y - mouse.y;
          const d = Math.hypot(dx, dy);
          react = Math.max(0, 1 - d / RADIUS);
          react *= react;
        }
        const idle = reduce ? 0.28 : (0.5 + 0.5 * Math.sin(t * 0.9 + cell.seed)) * 0.16;
        const f = Math.min(1, 0.34 + idle + react * 0.62);
        const w = cell.maxW * f;
        const alpha = 0.12 + idle * 0.5 + react * 0.5;
        ctx.fillStyle = `rgba(${GREEN[0]},${GREEN[1]},${GREEN[2]},${alpha})`;
        roundRect(cell.x, cell.y - BAR_H / 2, w, BAR_H, BAR_H / 2);
        ctx.fill();
        const tip = react > 0.14 ? Math.min(1, react * 1.35) : 0;
        if (tip > 0.02) {
          const tw = Math.min(cell.maxW * 0.24, 15);
          ctx.fillStyle = `rgba(${MAG[0]},${MAG[1]},${MAG[2]},${tip * 0.95})`;
          roundRect(cell.x + w - tw, cell.y - BAR_H / 2, tw, BAR_H, BAR_H / 2);
          ctx.fill();
        }
      }
    }

    function loop() {
      t += 0.016;
      render();
      raf = requestAnimationFrame(loop);
    }

    function onMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouse.tx = e.clientX - rect.left;
      mouse.ty = e.clientY - rect.top;
      if (!mouse.seen) { mouse.x = mouse.tx; mouse.y = mouse.ty; mouse.seen = true; }
    }

    build();
    window.addEventListener("resize", build);

    if (reduce) {
      render(); // one static frame, no cursor tracking
    } else {
      window.addEventListener("mousemove", onMove, { passive: true });
      raf = requestAnimationFrame(loop);
    }

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", build);
      window.removeEventListener("mousemove", onMove);
    };
  }, []);

  return <canvas ref={ref} className={`rankgrid ${className}`.trim()} aria-hidden="true" />;
}
