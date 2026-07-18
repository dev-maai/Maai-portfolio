import Pending from "./Pending";

/* Section 9 · Final block — restate the primary ask, and route the visitor MAAI
   isn't the right fit for. Two asks for two people: the audit (for the buyer who
   wants a partner) and the product (for the visitor who wants to run it themselves,
   framed as an honest alternative, not a downgrade). Primary restated in fresh
   words, not repeating Section 6. Product name/URL OPEN #14. */
export default function FinalBlock() {
  return (
    <section className="final-block" id="contact">
      <div className="wrap">
        <div className="fb-primary reveal">
          {/* OPEN #8: primary audit ask, in fresh words (Kriti) */}
          <Pending block item={8} label="Primary ask (restated) pending" lines={2} />
          <a className="btn amber fb-btn" href="#audit">Get your SEO audit</a>
        </div>
        <div className="fb-secondary reveal">
          {/* Secondary: the product — end-to-end tool (find pages from Search Console,
              produce content, publish to WordPress). For the self-serve visitor.
              Product name + page URL OPEN #14. */}
          <span className="fb-sec-label">Prefer to run it yourself?</span>
          <span className="pending-tag">product name + URL · open #14 · Kriti</span>
        </div>
      </div>
    </section>
  );
}
