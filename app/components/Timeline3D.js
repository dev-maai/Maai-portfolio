"use client";

/* 3D interactive timeline (adapted from the supplied React-Bits component).
   Ported from TSX/Tailwind to this project's stack: plain JS + custom CSS mapped to
   the MAAI theme tokens (evergreen surfaces, magenta/pine accents, Sora/Inter/mono).
   The original called useInView/useAnimation inside .map() — a Rules-of-Hooks
   violation — so each event is now its own component that owns those hooks. */
import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Timeline3D.css";

function TimelineEventCard({ event, index, mouseX, mouseY, activeEvent, setActiveEvent, reduce }) {
  const [ref, inView] = useInView({ threshold: 0.3, triggerOnce: false });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start("visible");
  }, [controls, inView]);

  const isEven = index % 2 === 0;
  const isActive = activeEvent === event.id;
  const tilt = reduce
    ? undefined
    : `perspective(1000px) rotateY(${mouseX * (isEven ? -3 : 3)}deg) rotateX(${mouseY * -3}deg)`;

  return (
    <motion.div
      ref={ref}
      className={`tl3-event ${isEven ? "is-left" : "is-right"}`}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, x: reduce ? 0 : isEven ? 50 : -50, y: reduce ? 0 : 20 },
        visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
      }}
    >
      {/* node on the central rail */}
      <div className="tl3-node-wrap">
        <motion.button
          type="button"
          className={`tl3-node${event.accent ? " accent" : ""}`}
          whileHover={{ scale: 1.15 }}
          onClick={() => setActiveEvent(isActive ? null : event.id)}
          aria-label={event.title}
          animate={{
            boxShadow:
              isActive && !reduce
                ? [
                    "0 0 0 rgba(230,46,107,.4)",
                    "0 0 22px rgba(230,46,107,.85)",
                    "0 0 0 rgba(230,46,107,.4)",
                  ]
                : "0 0 0 rgba(230,46,107,0)",
          }}
          transition={{ repeat: isActive && !reduce ? Infinity : 0, duration: 1.5 }}
        >
          {event.icon || <span>{index + 1}</span>}
        </motion.button>
      </div>

      {/* content card */}
      <motion.article
        className="tl3-card"
        whileHover={reduce ? undefined : { boxShadow: "0 44px 90px -34px rgba(0,0,0,.72)", transition: { duration: 0.3 } }}
        style={{ transform: tilt }}
        onMouseEnter={() => setActiveEvent(event.id)}
        onMouseLeave={() => setActiveEvent(null)}
      >
        {event.image && (
          <div className="tl3-media">
            <motion.img
              src={event.image}
              alt=""
              loading="lazy"
              initial={{ scale: 1.15 }}
              animate={{ scale: isActive ? 1.05 : 1, y: isActive ? -10 : 0 }}
              transition={{ duration: 0.8 }}
            />
            <div className="tl3-media-veil" />
            {event.category && <span className="tl3-cat">{event.category}</span>}
          </div>
        )}

        <div className="tl3-body">
          <div className="tl3-meta">
            <span className="tl3-date">{event.date}</span>
            <motion.span
              className={`tl3-pip${event.accent ? " accent" : ""}`}
              animate={reduce ? undefined : { scale: [1, 1.5, 1], opacity: [0.7, 1, 0.7] }}
              transition={{ repeat: Infinity, duration: 2, repeatType: "reverse" }}
            />
          </div>

          <h3>{event.title}</h3>

          <motion.div
            className="tl3-desc"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: isActive ? "auto" : 0, opacity: isActive ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <p>{event.description}</p>
            {event.link && (
              <a className="cta-link tl3-link" href={event.link.url}>
                {event.link.text} <span aria-hidden="true">→</span>
              </a>
            )}
          </motion.div>
        </div>

        <motion.div
          className={`tl3-underline${event.accent ? " accent" : ""}`}
          initial={{ width: "0%" }}
          animate={{ width: isActive ? "100%" : "0%" }}
          transition={{ duration: 0.5 }}
        />
      </motion.article>
    </motion.div>
  );
}

export default function Timeline3D({ events }) {
  const [activeEvent, setActiveEvent] = useState(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const reduce = useReducedMotion();

  useEffect(() => {
    const el = containerRef.current;
    if (!el || reduce) return;
    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      setMouse({ x: ((e.clientX - r.left) / r.width) * 2 - 1, y: ((e.clientY - r.top) / r.height) * 2 - 1 });
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, [reduce]);

  return (
    <div className="tl3" ref={containerRef}>
      {!reduce && (
        <div className="tl3-spheres" aria-hidden="true">
          {Array.from({ length: 8 }).map((_, i) => (
            <motion.span
              key={i}
              className={`tl3-sphere ${i % 2 ? "b" : "a"}`}
              animate={{
                x: [`${20 + i * 10}%`, `${30 + i * 8}%`, `${15 + i * 12}%`, `${20 + i * 10}%`],
                y: [`${10 + i * 12}%`, `${20 + i * 10}%`, `${30 + i * 8}%`, `${10 + i * 12}%`],
                scale: [1, 1.2, 1.1, 1],
              }}
              transition={{ duration: 20 + i * 2, ease: "easeInOut", repeat: Infinity }}
              style={{ width: `${50 + i * 20}px`, height: `${50 + i * 20}px` }}
            />
          ))}
        </div>
      )}

      <div className="tl3-inner">
        <div className="tl3-line" aria-hidden="true" />
        {events.map((event, i) => (
          <TimelineEventCard
            key={event.id}
            event={event}
            index={i}
            mouseX={mouse.x}
            mouseY={mouse.y}
            activeEvent={activeEvent}
            setActiveEvent={setActiveEvent}
            reduce={reduce}
          />
        ))}
      </div>
    </div>
  );
}
