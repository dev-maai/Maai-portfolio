export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="wrap">
          <div className="footer-grid">
            <div>
              <div className="logo">MA<span style={{ color: "var(--amber)" }}>A</span>I</div>
              <p style={{ maxWidth: "34ch" }}>Organic growth, wherever attention lives. Accountable to your business, not just your rankings.</p>
            </div>
            <div>
              <h4>Company</h4>
              <ul><li><a href="#thesis">Why organic</a></li><li><a href="#services">Services</a></li><li><a href="#values">Values</a></li></ul>
            </div>
            <div>
              <h4>Work</h4>
              <ul><li><a href="#work">Clients</a></li><li><a href="#accountability">Our reports</a></li><li><a href="#faq">FAQ</a></li></ul>
            </div>
            <div>
              <h4>Contact</h4>
              <ul><li><a href="mailto:hello@maai.agency">hello@maai.agency</a></li><li><a href="#">LinkedIn</a></li></ul>
            </div>
          </div>
          <div className="footer-bottom">
            <span>© 2026 MAAI. All rights reserved.</span>
            <span>Hyperfixated on organic growth.</span>
          </div>
        </div>
      </footer>
    </>
  );
}
