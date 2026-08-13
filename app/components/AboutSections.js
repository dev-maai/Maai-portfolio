/* AboutSections — the team (four senior specialists) below the kinetic hero,
   then the South-Africa education giving-back band. */
import TeamRail from "./TeamRail";

const TEAM = [
  { name: "Kriti Kumari", role: "Business Owner", img: "/Team/Kriti.jpeg", p: "Digital strategist across social, SEO and storytelling. Blends creativity with analysis to help brands stand out through authentic, human-centered communication." },
  { name: "Simran Gupta", role: "SEO - Data & Marketing Analyst", img: "/Team/Simran gupta.jpeg", p: "Brings data-led SEO and marketing insight to turn performance into clear growth decisions." },
  { name: "Gauri Pandey", role: "PR & Reputation Management", img: "/Team/gauri pandey.jpg", p: "Shapes narratives and protects brand reputation with thoughtful, high-impact communication." },
  /* TODO: replace with the real fourth team member — name, role, photo in /public/Team, and bio. */
  { name: "Fourth Member", role: "Content & Outreach", img: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=440&h=440&q=75&auto=format&fit=crop&crop=faces", p: "Placeholder bio — send the name, role and photo and this card is a one-line swap." },
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
                    <a href="#" aria-label="LinkedIn"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 5a2 2 0 11-4 0 2 2 0 014 0zM3.3 8.5h3.28V21H3.3zM9.4 8.5h3.14v1.71h.05c.44-.83 1.5-1.71 3.1-1.71 3.31 0 3.92 2.18 3.92 5V21h-3.27v-4.44c0-1.06-.02-2.42-1.48-2.42s-1.7 1.15-1.7 2.34V21H9.4z" /></svg></a>
                    <a href="#" aria-label="Email"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg></a>
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
            A part of everything we earn goes to <em>educating children in South&nbsp;Africa.</em>
          </h2>
        </div>
      </section>
    </>
  );
}
