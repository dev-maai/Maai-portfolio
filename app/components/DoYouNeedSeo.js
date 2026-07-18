/* Section 8 · Do You Need SEO For Your Business — serves the sceptical buyer who
   isn't ready to talk, and earns organic entry to the page. Phase two: slots built,
   posts are the dependency. The whitepaper is ungated (never behind a form). A card
   that concludes "possibly not" is on-brand and stays. Card titles = blog titles. */
export default function DoYouNeedSeo() {
  return (
    <section className="dyns" id="resources">
      <div className="wrap">
        <p className="eyebrow reveal">Resources</p>
        {/* Section heading addresses the reader's doubt without arguing with it. */}
        <h2 className="reveal">Do you need SEO for your business?</h2>

        {/* Optional featured whitepaper slot (ungated) — open #13 */}
        <a className="whitepaper-slot reveal" href="#">
          <span className="wp-tag">Featured · Whitepaper</span>
          <span className="pending-tag">whitepaper · open #13 · Kriti</span>
        </a>

        {/* 3–4 blog cards — posts are the dependency (open #12) */}
        <div className="blog-grid reveal">
          {Array.from({ length: 3 }).map((_, i) => (
            <a className="blog-card" href="#" key={i}>
              <span className="blog-kicker">Article</span>
              <span className="pending-tag">blog title · open #12 · Kriti</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
