"use client";

import { useEffect } from "react";

/* Every behaviour from the original single-file site, ported as one mounted
   effect. The markup React renders is identical to the source's, so these
   drivers query it exactly as they did before.

   Kept as DOM drivers rather than React state on purpose: they are
   scroll/rAF loops that write transforms every frame. Routing that through
   re-renders would be slower and would change how the page feels. The page
   is static, so nothing re-renders out from under them.

   Everything is registered with matching teardown, so React 18 StrictMode's
   double-mount in dev doesn't stack duplicate listeners or timers. */
export default function SiteEffects() {
  useEffect(() => {
    const cleanups = [];
    const on = (target, ev, fn, opts) => {
      target.addEventListener(ev, fn, opts);
      cleanups.push(() => target.removeEventListener(ev, fn, opts));
    };
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const finePointer = matchMedia("(hover:hover) and (pointer:fine)").matches;

    /* ---------------------------------------------------------
       THEME — toggle (persisted). Initial value is set before
       paint by the inline script in app/layout.js.
       --------------------------------------------------------- */
    {
      const root = document.documentElement;
      const KEY = "maai-theme";
      on(document, "click", (e) => {
        if (!e.target.closest(".theme-toggle")) return;
        const next = root.getAttribute("data-theme") === "light" ? "dark" : "light";
        root.setAttribute("data-theme", next);
        try { localStorage.setItem(KEY, next); } catch {}
      });
    }

    /* ---------------------------------------------------------
       FIT-CHECK FORM — front-end only; POST `data` to your endpoint.
       --------------------------------------------------------- */
    {
      const fitForm = document.getElementById("fitForm");
      const fitDone = document.getElementById("fitDone");
      if (fitForm && fitDone) {
        on(fitForm, "submit", (e) => {
          e.preventDefault();
          const fields = [...fitForm.querySelectorAll("select,input")];
          let ok = true;
          fields.forEach((f) => {
            const bad = !f.value || (f.type === "email" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(f.value));
            f.style.borderColor = bad ? "var(--amber)" : "";
            if (bad) ok = false;
          });
          if (!ok) return;
          const data = Object.fromEntries(new FormData(fitForm).entries());
          console.log("fit-check lead:", data); // ← POST this to your endpoint
          fitForm.hidden = true;
          fitDone.hidden = false;
          fitDone.scrollIntoView({ behavior: "smooth", block: "center" });
        });
      }
    }

    /* --------------------------------------------------------- MOBILE MENU */
    {
      const nav = document.querySelector(".nav");
      const burger = document.querySelector(".nav-burger");
      if (nav && burger) {
        const setOpen = (o) => {
          nav.classList.toggle("open", o);
          burger.setAttribute("aria-expanded", o ? "true" : "false");
        };
        on(burger, "click", () => setOpen(!nav.classList.contains("open")));
        nav.querySelectorAll(".nav-links a").forEach((a) => on(a, "click", () => setOpen(false)));
      }
    }

    /* ---------------------------------------------------------
       HERO — typing + platform morph (the signature element)
       --------------------------------------------------------- */
    {
      const queries = [
        { text: "best crm for enterprise sales teams", platform: 0 },
        { text: "which crm do fortune 500 teams actually use?", platform: 1 },
        { text: "compare enterprise crm platforms 2026", platform: 2 },
        { text: "top rated crm — sources & citations", platform: 3 },
      ];
      const typedEl = document.getElementById("typed");
      const chips = document.querySelectorAll(".chip");
      if (typedEl) {
        let qi = 0;
        let timer = null;
        let stopped = false;
        cleanups.push(() => { stopped = true; clearInterval(timer); });

        const setChip = (i) => chips.forEach((c, idx) => c.classList.toggle("active", idx === i));
        const typeQuery = (q, done) => {
          let i = 0;
          typedEl.textContent = "";
          timer = setInterval(() => {
            typedEl.textContent = q.slice(0, ++i);
            if (i >= q.length) { clearInterval(timer); timer = setTimeout(done, 1700); }
          }, 42);
        };
        const eraseQuery = (done) => {
          timer = setInterval(() => {
            typedEl.textContent = typedEl.textContent.slice(0, -1);
            if (!typedEl.textContent.length) { clearInterval(timer); done(); }
          }, 16);
        };
        const cycle = () => {
          if (stopped) return;
          const q = queries[qi % queries.length];
          setChip(q.platform);
          typeQuery(q.text, () => eraseQuery(() => { qi++; cycle(); }));
        };
        if (reduce) { typedEl.textContent = queries[0].text; setChip(0); }
        else cycle();
      }
    }

    /* --------------------------------------------------------- SCROLL REVEALS */
    {
      const io = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
        });
      }, { threshold: 0.15 });
      document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
      cleanups.push(() => io.disconnect());
    }

    /* --------------------------------------------------------- COUNTERS */
    {
      const counterIO = new IntersectionObserver((entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target;
          const target = +el.dataset.count;
          const dur = 1400;
          const start = performance.now();
          const tick = (now) => {
            const p = Math.min((now - start) / dur, 1);
            el.textContent = Math.round(target * (1 - Math.pow(1 - p, 3)));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          counterIO.unobserve(el);
        });
      }, { threshold: 0.6 });
      document.querySelectorAll("[data-count]").forEach((el) => counterIO.observe(el));
      cleanups.push(() => counterIO.disconnect());
    }

    /* ---------------------------------------------------------
       SELECTED WORK — horizontal gallery on vertical scroll
       --------------------------------------------------------- */
    {
      const gallery = document.querySelector(".work-scroll");
      if (gallery && innerWidth > 820 && !reduce) {
        const track = gallery.querySelector(".work-track");
        const bar = gallery.querySelector(".work-progress");
        const panels = gallery.querySelectorAll(".work-panel").length;
        let top = 0, total = 1, ticking = false;
        const measure = () => {
          const r = gallery.getBoundingClientRect();
          top = r.top + scrollY;
          total = Math.max(1, gallery.offsetHeight - innerHeight);
        };
        const render = () => {
          ticking = false;
          const p = Math.min(Math.max((scrollY - top) / total, 0), 1);
          track.style.transform = `translate3d(${-p * (panels - 1) * 100}vw,0,0)`;
          bar.style.transform = `scaleX(${p})`;
          bar.style.opacity = p > 0 && p < 1 ? 1 : 0;
        };
        const tick = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };
        measure(); render();
        on(window, "scroll", tick, { passive: true });
        on(window, "resize", () => { measure(); tick(); });
      }
    }

    /* ---------------------------------------------------------
       HERO-CINE — scroll-driven cinematic banner. Pins a dark stage,
       streams scenes through it, then resolves into the real hero.
       --------------------------------------------------------- */
    {
      const sec = document.querySelector(".hero-cine");
      if (sec) {
        const resolve = sec.querySelector(".hc-resolve");
        const staticMode = reduce || innerWidth <= 820;
        if (staticMode) {
          if (resolve) {
            resolve.style.opacity = 1;
            resolve.style.transform = "none";
            resolve.classList.add("on");
          }
        } else {
          const scenes = [...sec.querySelectorAll(".hc-scene")];
          const ghost = sec.querySelector(".hc-ghost");
          const cue = sec.querySelector(".hc-cue");
          const bar = sec.querySelector(".hc-progress i");
          const N = scenes.length || 1;
          const SCENE_END = 0.82; // scenes occupy 0..0.82, resolve 0.82..1
          const centers = scenes.map((_, i) => (N > 1 ? i / (N - 1) : 0) * SCENE_END);
          const half = (N > 1 ? SCENE_END / (N - 1) : SCENE_END) * 0.8;
          const clamp = (v, a, b) => Math.min(Math.max(v, a), b);

          let top = 0, total = 1, ticking = false;
          const measure = () => {
            const r = sec.getBoundingClientRect();
            top = r.top + scrollY;
            total = Math.max(1, sec.offsetHeight - innerHeight);
          };
          const render = () => {
            ticking = false;
            const p = clamp((scrollY - top) / total, 0, 1);
            const rp = clamp((p - SCENE_END) / (1 - SCENE_END), 0, 1);
            const scenesMul = 1 - rp;
            scenes.forEach((s, i) => {
              const dir = p - centers[i];
              const o = clamp(1 - Math.abs(dir) / half, 0, 1) * scenesMul;
              s.style.opacity = o.toFixed(3);
              s.style.transform = `translate3d(0,${(dir * -70).toFixed(1)}px,0) scale(${(0.9 + o * 0.1).toFixed(3)})`;
            });
            if (resolve) {
              resolve.style.opacity = rp.toFixed(3);
              resolve.style.transform = `translate3d(0,${((1 - rp) * 28).toFixed(1)}px,0)`;
              resolve.classList.toggle("on", rp > 0.5);
            }
            if (ghost) ghost.style.opacity = (clamp(1 - rp * 1.5, 0, 1) * 0.9).toFixed(3);
            if (cue) cue.style.opacity = clamp(1 - p * 7, 0, 1).toFixed(3);
            if (bar) bar.style.transform = `scaleX(${p.toFixed(3)})`;
          };
          const tick = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };
          measure(); render();
          on(window, "scroll", tick, { passive: true });
          on(window, "resize", () => { measure(); tick(); });
        }
      }
    }

    /* --------------------------------------------------------- FAQ ACCORDION */
    document.querySelectorAll(".q button").forEach((btn) => {
      on(btn, "click", () => {
        const q = btn.parentElement;
        const a = q.querySelector(".a");
        const open = q.classList.contains("open");
        document.querySelectorAll(".q.open").forEach((o) => {
          o.classList.remove("open");
          o.querySelector(".a").style.maxHeight = null;
        });
        if (!open) { q.classList.add("open"); a.style.maxHeight = a.scrollHeight + "px"; }
      });
    });

    /* ---------------------------------------------------------
       TESTIMONIAL SLIDER — auto-advance, drag/swipe, dots, arrows
       --------------------------------------------------------- */
    document.querySelectorAll("[data-slider]").forEach((root) => {
      const track = root.querySelector(".slider-track");
      const slides = [...root.querySelectorAll(".slide")];
      const dotsWrap = root.querySelector(".dots");
      const viewport = root.querySelector(".slider-viewport");
      const n = slides.length;
      if (n < 2) return;

      let idx = 0, timer = null;

      dotsWrap.innerHTML = ""; // effect may re-run in dev; don't stack dots
      const dots = slides.map((_, i) => {
        const b = document.createElement("button");
        b.type = "button";
        b.setAttribute("aria-label", `Go to slide ${i + 1}`);
        b.addEventListener("click", () => { go(i); restart(); });
        dotsWrap.appendChild(b);
        return b;
      });
      function go(i) {
        idx = (i + n) % n;
        track.style.transform = `translateX(${-idx * 100}%)`;
        dots.forEach((d, di) => d.classList.toggle("on", di === idx));
      }
      const next = () => go(idx + 1);
      const prev = () => go(idx - 1);
      const nextBtn = root.querySelector("[data-next]");
      const prevBtn = root.querySelector("[data-prev]");
      if (nextBtn) on(nextBtn, "click", () => { next(); restart(); });
      if (prevBtn) on(prevBtn, "click", () => { prev(); restart(); });

      function start() { if (!reduce && !timer) timer = setInterval(next, 5500); }
      function stop() { if (timer) { clearInterval(timer); timer = null; } }
      function restart() { stop(); start(); }
      on(root, "mouseenter", stop);
      on(root, "mouseleave", start);
      cleanups.push(stop);

      /* drag / swipe */
      let down = false, startX = 0, dx = 0, w = 0;
      viewport.querySelectorAll("img").forEach((im) => im.setAttribute("draggable", "false"));
      on(viewport, "pointerdown", (e) => {
        down = true; startX = e.clientX; dx = 0; w = viewport.clientWidth || 1;
        root.classList.add("dragging"); stop();
        try { viewport.setPointerCapture(e.pointerId); } catch {}
      });
      on(viewport, "pointermove", (e) => {
        if (!down) return;
        dx = e.clientX - startX;
        track.style.transform = `translateX(${-idx * 100 + (dx / w) * 100}%)`;
      });
      const release = () => {
        if (!down) return;
        down = false;
        root.classList.remove("dragging");
        if (Math.abs(dx) > w * 0.18) { dx < 0 ? next() : prev(); } else { go(idx); }
        start();
      };
      on(viewport, "pointerup", release);
      on(viewport, "pointercancel", release);

      go(0); start();
    });

    /* ---------------------------------------------------------
       FLUIDITY LAYER — inertia scroll, parallax, magnetic buttons.
       Degrades gracefully if the CDN is unreachable.
       --------------------------------------------------------- */
    let cancelled = false;
    cleanups.push(() => { cancelled = true; });

    (async () => {
      if (reduce) return; // honour reduced-motion

      let lenis = null;
      try {
        const Lenis = (await import(/* webpackIgnore: true */ "https://cdn.jsdelivr.net/npm/lenis@1.1.13/+esm")).default;
        if (cancelled) return;
        lenis = new Lenis({
          lerp: 0.075,
          smoothWheel: true,
          wheelMultiplier: 0.9,
          touchMultiplier: 1.6,
          syncTouch: false,
        });
        let rafId;
        const raf = (t) => { lenis.raf(t); rafId = requestAnimationFrame(raf); };
        rafId = requestAnimationFrame(raf);
        cleanups.push(() => { cancelAnimationFrame(rafId); lenis.destroy(); });

        document.querySelectorAll('a[href^="#"], a[href^="/#"]').forEach((a) => {
          on(a, "click", (ev) => {
            let id = a.getAttribute("href");
            /* cross-page anchors (/#section): smooth-scroll only when already on
               home; otherwise let the browser navigate to the home page. */
            if (id.startsWith("/#")) {
              if (location.pathname !== "/") return;
              id = id.slice(1);
            }
            if (id.startsWith("#") && id.length > 1) {
              const target = document.querySelector(id);
              if (target) { ev.preventDefault(); lenis.scrollTo(target, { offset: -72, duration: 1.1 }); }
            }
          });
        });
      } catch {
        /* native scroll fallback */
      }
      if (cancelled) return;

      /* parallax depth + scroll-progress bar. Never read layout in the
         scroll event: cache offsets, write transforms in one rAF tick. */
      const parallax = [...document.querySelectorAll("[data-speed]")].map((el) => ({
        el, speed: parseFloat(el.dataset.speed) || 0, mid: 0,
      }));
      const bar = document.querySelector(".scroll-progress");
      let maxScroll = 1, ticking = false;

      const measure = () => {
        maxScroll = Math.max(1, document.documentElement.scrollHeight - innerHeight);
        const y = scrollY;
        for (const p of parallax) {
          const prev = p.el.style.transform;
          p.el.style.transform = "none";
          const r = p.el.getBoundingClientRect();
          p.mid = r.top + y + r.height / 2;
          p.el.style.transform = prev;
        }
      };
      const render = () => {
        ticking = false;
        const y = scrollY, vh = innerHeight;
        for (const p of parallax) {
          const offset = (p.mid - y - vh / 2) * p.speed;
          p.el.style.transform = `translate3d(0,${offset.toFixed(1)}px,0)`;
        }
        if (bar) bar.style.transform = `scaleX(${Math.min(y / maxScroll, 1)})`;
      };
      const requestTick = () => { if (!ticking) { ticking = true; requestAnimationFrame(render); } };

      measure(); render();
      if (lenis) lenis.on("scroll", requestTick);
      else on(window, "scroll", requestTick, { passive: true });
      on(window, "resize", () => { measure(); requestTick(); });
      on(window, "load", () => { measure(); requestTick(); });

      /* cursor spotlight on cards */
      if (finePointer) {
        document.querySelectorAll(".card, .member").forEach((el) => {
          on(el, "pointermove", (e) => {
            const r = el.getBoundingClientRect();
            el.style.setProperty("--mx", `${(((e.clientX - r.left) / r.width) * 100).toFixed(1)}%`);
            el.style.setProperty("--my", `${(((e.clientY - r.top) / r.height) * 100).toFixed(1)}%`);
          });
        });
      }

      /* interactive mouse-tilt */
      if (finePointer) {
        document.querySelectorAll("[data-tilt]").forEach((el) => {
          const S = 7;
          on(el, "pointerenter", () => { el.style.transition = ""; });
          on(el, "pointermove", (e) => {
            const r = el.getBoundingClientRect();
            const px = (e.clientX - r.left) / r.width - 0.5;
            const py = (e.clientY - r.top) / r.height - 0.5;
            el.style.transform = `perspective(1000px) rotateY(${(px * S).toFixed(2)}deg) rotateX(${(-py * S).toFixed(2)}deg)`;
          });
          on(el, "pointerleave", () => {
            el.style.transition = "transform .5s var(--ease)";
            el.style.transform = "";
            setTimeout(() => { el.style.transition = ""; }, 520);
          });
        });
      }

      /* looping "answer-engine" score widget (counts up, bar syncs) */
      const loopEl = document.querySelector("[data-loop]");
      if (loopEl) {
        const sfBar = document.querySelector(".hero-visual .sf-bar i");
        const from = 32;
        const to = parseInt(loopEl.dataset.loop, 10) || 47;
        const period = 4200;
        let rafId;
        const tick = (now) => {
          const t = (now % period) / period;
          let v;
          if (t < 0.32) v = from + (to - from) * (t / 0.32);
          else if (t < 0.6) v = to;
          else if (t < 0.78) v = to - (to - from) * ((t - 0.6) / 0.18);
          else v = from;
          loopEl.textContent = Math.round(v);
          if (sfBar) sfBar.style.width = v.toFixed(1) + "%";
          rafId = requestAnimationFrame(tick);
        };
        rafId = requestAnimationFrame(tick);
        cleanups.push(() => cancelAnimationFrame(rafId));
      }

      /* magnetic buttons — reserved for the primary (magenta) CTAs; other button
         variants get their own CSS hover effects (shine / fill / lift). */
      if (finePointer) {
        document.querySelectorAll(".btn.amber").forEach((btn) => {
          const strength = 0.28;
          on(btn, "mousemove", (e) => {
            const r = btn.getBoundingClientRect();
            const mx = e.clientX - (r.left + r.width / 2);
            const my = e.clientY - (r.top + r.height / 2);
            btn.style.transform = `translate(${(mx * strength).toFixed(1)}px, ${(my * strength).toFixed(1)}px)`;
          });
          on(btn, "mouseleave", () => { btn.style.transform = ""; });
        });
      }
    })();

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return null;
}
