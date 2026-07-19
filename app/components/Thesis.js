import Timeline3D from "./Timeline3D";

/* Why organic — the era shift shown through the 3D interactive timeline
   (adapted React-Bits component, themed to MAAI). "Today" is the accent event. */
const ERAS = [
  {
    id: "yesterday",
    date: "Yesterday",
    category: "Google era",
    title: "Ten blue links",
    description:
      "Rankings, backlinks, technical SEO. We mastered the playbook — and learned it was never the point.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=900&q=70&auto=format&fit=crop",
  },
  {
    id: "today",
    date: "Today",
    category: "The LLM era",
    title: "Answer engines decide",
    accent: true,
    description:
      "ChatGPT, Perplexity and AI Overviews now sit between your customer and your site. We make sure your brand is the one they cite.",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=900&q=70&auto=format&fit=crop",
    link: { url: "#contact", text: "See how we do it" },
  },
  {
    id: "tomorrow",
    date: "Tomorrow",
    category: "Whatever comes next",
    title: "We're already building for it",
    description:
      "The platform will change again. Our core value won't: organic growth, wherever attention lives.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=900&q=70&auto=format&fit=crop",
  },
];

export default function Thesis() {
  return (
    <section className="thesis-tl" id="thesis" aria-label="Why organic">
      <div className="wrap thesis-tl-head">
        <p className="kicker reveal">Why organic</p>
        <h2 className="reveal">Don&apos;t buy leads. <span className="mark">Be the answer.</span></h2>
        <p className="lede reveal">
          You shouldn&apos;t have to rent your customers from an ad auction. Be present at
          every stage of their journey — helping, answering, earning trust that compounds.
          That was true in the Google era. It&apos;s truer in the LLM era.
        </p>
        <div className="cta-row reveal">
          <a className="cta-link" href="#contact">Own your organic channel <span aria-hidden="true">→</span></a>
        </div>
      </div>

      <Timeline3D events={ERAS} />
    </section>
  );
}
