"use client";

import Pending from "./Pending";

/* Section 1 · Hero — full-bleed decorative video with the live-text H1 over it.
   The H1 is the page's single most important indexable element: real HTML text,
   never baked into the video, never an image. Video is muted/looping/lazy with a
   poster so it never blocks first paint, and it is hidden under reduced-motion
   (CSS) leaving the poster. Hero resolves into the Tagline with no hard break. */
export default function Hero() {
  return (
    <section className="home-hero stage-dark" id="top" aria-label="Intro">
      <div className="hh-stage" aria-hidden="true">
        {/* OPEN #15: final hero video asset (Kriti). Placeholder source + poster below. */}
        <video
          className="hh-video"
          autoPlay
          muted
          loop
          playsInline
          preload="none"
          poster="https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?w=1600&q=70&auto=format&fit=crop"
          onCanPlay={(e) => e.currentTarget.classList.add("ready")}
        >
          <source src="https://videos.pexels.com/video-files/3129671/3129671-hd_1920_1080_30fps.mp4" type="video/mp4" />
          <source src="https://videos.pexels.com/video-files/3129671/3129671-sd_960_540_30fps.mp4" type="video/mp4" />
        </video>
        <div className="hh-scrim"></div>
      </div>

      <div className="wrap hh-inner">
        {/* OPEN #1: H1 wording (Kriti). Category in the buyer's search language +
            the accountability promise. Sora display, declarative, no question form.
            This slot stays a real <h1> so the heading hierarchy holds. */}
        <h1 className="hh-h1 is-pending">H1 pending · open&nbsp;#1 · Kriti</h1>
        {/* OPEN #2: whether a supporting line / button sits in the hero (Kriti). */}
      </div>
    </section>
  );
}
