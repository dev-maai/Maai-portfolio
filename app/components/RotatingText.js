"use client";

/* RotatingText — cycles through words with a vertical slide/mask. Original build.
   The clip container keeps a single line height; reduced-motion just swaps text. */
import { useState, useEffect } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";

export default function RotatingText({ words = [], interval = 2200, className = "" }) {
  const [i, setI] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce || words.length < 2) return;
    const t = setInterval(() => setI((v) => (v + 1) % words.length), interval);
    return () => clearInterval(t);
  }, [reduce, words.length, interval]);

  return (
    <span className={`rotating-text ${className}`} aria-label={words.join(", ")}>
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={i}
          className="rt-word"
          aria-hidden="true"
          initial={reduce ? false : { y: "75%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={reduce ? { opacity: 0 } : { y: "-75%", opacity: 0 }}
          transition={{ duration: 0.42, ease: [0.22, 0.8, 0.24, 1] }}
        >
          {words[i]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
