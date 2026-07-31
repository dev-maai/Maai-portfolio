"use client";

import { useRef, useState } from "react";

/* VideoTestimonial — a real client review recorded to camera (portrait, with
   audio). Browsers block autoplay-with-sound, so this is click-to-play: a poster
   frame + play button until the viewer starts it, after which native controls
   appear and it plays with sound. The clip is portrait 9:16 and sits, unaltered,
   on a solid evergreen frame. */
export default function VideoTestimonial({ src, poster, label = "Client review" }) {
  const ref = useRef(null);
  const [started, setStarted] = useState(false);

  const start = () => {
    const v = ref.current;
    if (!v) return;
    v.muted = false;
    v.controls = true;
    setStarted(true);
    v.play().catch(() => {});
  };

  return (
    <div className="vtesti reveal">
      <video
        ref={ref}
        className="vtesti-video"
        src={src}
        poster={poster}
        playsInline
        preload="metadata"
        onEnded={() => setStarted(false)}
      />
      {!started && (
        <button type="button" className="vtesti-play" onClick={start} aria-label="Play client review with sound">
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5v14l11-7z" /></svg>
        </button>
      )}
      {!started && <div className="vtesti-cap">{label}</div>}
    </div>
  );
}
