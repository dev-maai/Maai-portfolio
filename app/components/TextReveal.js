"use client";

import { Fragment } from "react";
import { motion, useReducedMotion } from "framer-motion";

/* TextReveal — reveals text word-by-word on scroll into view: each word rises
   from +12px while its blur sharpens 8px → 0 and it fades in. Staggered.
   Respects reduced-motion (renders plain text). */
const EASE = [0.21, 0.47, 0.32, 0.98];

export default function TextReveal({
  text,
  as = "span",
  className = "",
  delay = 0,
  stagger = 0.045,
  once = true,
}) {
  const reduce = useReducedMotion();
  const Tag = motion[as] || motion.span;

  if (reduce) {
    const Plain = as;
    return <Plain className={className}>{text}</Plain>;
  }

  const words = text.split(" ");
  const container = {
    hidden: {},
    show: { transition: { staggerChildren: stagger, delayChildren: delay } },
  };
  const word = {
    hidden: { opacity: 0, y: 12, filter: "blur(8px)" },
    show: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.45, ease: EASE },
    },
  };

  return (
    <Tag
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once, margin: "-10% 0px" }}
      aria-label={text}
    >
      {words.map((w, i) => (
        <Fragment key={i}>
          <motion.span className="tr-w" variants={word} aria-hidden="true">
            {w}
          </motion.span>
          {i < words.length - 1 ? " " : ""}
        </Fragment>
      ))}
    </Tag>
  );
}
