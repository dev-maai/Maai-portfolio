"use client";

/* CardSwap — a stacked deck of cards that auto-shuffles: the front card slides
   out and cycles to the back while the rest step forward. Original build.
   Pause on hover; reduced-motion holds the front card. */
import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";

export default function CardSwap({ cards = [], interval = 3400, className = "" }) {
  const [order, setOrder] = useState(() => cards.map((_, i) => i));
  const [paused, setPaused] = useState(false);
  const reduce = useReducedMotion();
  const N = cards.length;

  useEffect(() => {
    if (reduce || paused || N < 2) return;
    const t = setInterval(() => setOrder((o) => [...o.slice(1), o[0]]), interval);
    return () => clearInterval(t);
  }, [reduce, paused, N, interval]);

  return (
    <div
      className={`card-swap ${className}`}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      {order.map((ci, pos) => (
        <motion.div
          key={ci}
          className="cs-card"
          initial={false}
          animate={{
            y: Math.min(pos, 3) * 16,
            x: Math.min(pos, 3) * 10,
            scale: 1 - Math.min(pos, 3) * 0.05,
            rotate: pos === 0 ? 0 : (ci % 2 ? 2.4 : -2.4),
            opacity: pos > 3 ? 0 : 1,
            zIndex: N - pos,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 26 }}
          style={{ zIndex: N - pos, pointerEvents: pos === 0 ? "auto" : "none" }}
        >
          {cards[ci]}
        </motion.div>
      ))}
    </div>
  );
}
