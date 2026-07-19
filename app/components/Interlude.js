import CurvedLoop from "./CurvedLoop";

/* Breather between 01 and 02 — the statement now rides a curved, looping path. */
export default function Interlude() {
  return (
    <section className="interlude-curve" aria-label="The work is doing the work">
      <CurvedLoop text="The work is doing the work" repeat={6} dur={24} />
    </section>
  );
}
