/* AboutSections — the team (four senior specialists) below the kinetic hero,
   then the South-Africa education giving-back band. */
import TeamRail from "./TeamRail";

const TEAM = [
  { name: "Kriti Kumari", role: "Business Owner", img: "/Team/Kriti.jpeg", li: "https://www.linkedin.com/in/kritikumarii/", p: "Digital strategist across social, SEO and storytelling. Blends creativity with analysis to help brands stand out through authentic, human-centered communication." },
  { name: "Simran Gupta", role: "SEO - Data & Marketing Analyst", img: "/Team/Simran gupta.jpeg", li: "https://www.linkedin.com/in/simran-gupta16/", p: "Brings data-led SEO and marketing insight to turn performance into clear growth decisions." },
  { name: "Gauri Pandey", role: "PR & Reputation Management", img: "/Team/gauri pandey.jpg", li: "https://www.linkedin.com/in/gauri-pandey-digital-strategist/", p: "Shapes narratives and protects brand reputation with thoughtful, high-impact communication." },
  { name: "Sana Fathima", role: "Developer", img: "/Team/Sana.jpeg", li: "https://www.linkedin.com/in/sana-fathima-060396342/", p: "Builds and maintains the sites behind the strategy. Turns design and content decisions into fast, accessible pages that hold up in search." },
];

export default function AboutSections() {
  return (
    <>
      {/* ── team ── */}
      <section className="ab-team">
        <div className="wrap">
          <h2 className="reveal">Team</h2>
          <TeamRail count={TEAM.length}>
            {TEAM.map((m) => (
              <div className="member reveal" key={m.name}>
                <div className="member-photo"><img src={m.img} alt={m.name} loading="lazy" width="440" height="440" /></div>
                <div className="member-body">
                  <span className="role">{m.role}</span>
                  <h3>{m.name}</h3>
                  <p>{m.p}</p>
                  <div className="socials">
                    <a href={m.li} target="_blank" rel="noopener noreferrer" aria-label={`${m.name} on LinkedIn`}><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 11-4 0 2 2 0 014 0zM3.3 8.5h3.28V21H3.3zM9.4 8.5h3.14v1.71h.05c.44-.83 1.5-1.71 3.1-1.71 3.31 0 3.92 2.18 3.92 5V21h-3.27v-4.44c0-1.06-.02-2.42-1.48-2.42s-1.7 1.15-1.7 2.34V21H9.4z" /></svg></a>
                  </div>
                </div>
              </div>
            ))}
          </TeamRail>
        </div>
      </section>

      {/* ── giving back — simple image-backed statement ── */}
      <section className="kg" id="giving">
        <div className="kg-bg" aria-hidden="true"></div>
        <div className="wrap kg-inner">
          <span></span>
          <h2 className="reveal">
            A part of everything we earn goes to <em>educating children in &nbsp;Tanzania.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
