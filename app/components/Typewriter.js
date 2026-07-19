"use client";

/* Typewriter — types a rotating list of words with a blinking caret. Original
   build of the effect (no external source). Reduced-motion shows the first word
   statically. Screen readers get the full list via a visually-hidden fallback. */
import { useState, useEffect, useRef } from "react";

export default function Typewriter({
  words = [],
  typeSpeed = 68,
  deleteSpeed = 36,
  hold = 1500,
  className = "",
}) {
  const [text, setText] = useState("");
  const [wi, setWi] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const reduceRef = useRef(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    reduceRef.current = matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduceRef.current && words.length) setText(words[0]);
    setReady(true);
  }, [words]);

  useEffect(() => {
    if (!ready || reduceRef.current || !words.length) return;
    const full = words[wi % words.length];
    let t;
    if (!deleting && text === full) {
      t = setTimeout(() => setDeleting(true), hold);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWi((w) => (w + 1) % words.length);
    } else {
      t = setTimeout(
        () => setText(deleting ? full.slice(0, text.length - 1) : full.slice(0, text.length + 1)),
        deleting ? deleteSpeed : typeSpeed
      );
    }
    return () => clearTimeout(t);
  }, [ready, text, deleting, wi, words, typeSpeed, deleteSpeed, hold]);

  return (
    <span className={`typewriter ${className}`}>
      <span className="tw-text" aria-hidden="true">{text || words[0]}</span>
      <span className="tw-caret" aria-hidden="true" />
      <span className="sr-only">{words.join(", ")}</span>
    </span>
  );
}
