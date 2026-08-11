import Link from "next/link";
import ScrollProgress from "../../components/ScrollProgress";
import Nav from "../../components/Nav";
import Footer from "../../components/Footer";
import SiteEffects from "../../components/SiteEffects";
import Typewriter from "../../components/Typewriter";
import ReportForm from "../../components/ReportForm";

export const metadata = {
  title: "How B2B Leaders are Embracing Non-Traditional Media Channels | MAAI",
  description:
    "A short report on how search, AI answers, peer communities, and niche media are reshaping B2B buyer discovery — and what marketing and comms teams should do next.",
  alternates: { canonical: "/industries/report" },
};

const AUDIENCE = ["marketing leaders", "PR teams", "communications leads", "growth teams"];

const STATS = [
  {
    stat: "78%",
    copy: "of B2B marketing leaders say non-traditional media channels will play a significant role in their strategy over the next year.",
  },
  {
    stat: "87%",
    copy: "say they are confident in their team's ability to adapt to emerging non-traditional media opportunities.",
  },
  {
    stat: "~50%",
    copy: "report advanced measurement capability — influence is being created in places most reporting still cannot see.",
  },
];

const RESOURCES = [
  {
    tag: "Industry",
    title: "Supply chain & logistics",
    copy: "How freight, 3PL and logistics brands earn visibility with technical buyers.",
    href: "/industries/supply-chain",
  },
  {
    tag: "Industry",
    title: "SaaS",
    copy: "Search and AI visibility for software companies in crowded categories.",
    href: "/industries/saas",
  },
  {
    tag: "Tool",
    title: "Fit check",
    copy: "Five questions to see whether your visibility problem is one we can fix.",
    href: "/fit-check",
  },
];

export default function IndustryReportPage() {
  return (
    <>
      <ScrollProgress />
      <Nav />

      <header className="irp-hero">
        <div className="wrap irp-hero-copy reveal">
          <p className="kicker">Industry report</p>
          <p className="irp-meta">B2B media · 2026</p>
          <h1 className="irp-title">How B2B leaders are embracing non-traditional media channels</h1>
          <p className="irp-sub">The earned media playbook is being rewritten.</p>
          <p className="irp-audience">
            Built for <Typewriter words={AUDIENCE} />
          </p>
        </div>
      </header>

      <section className="irp-main">
        <div className="wrap irp-main-grid">
          <div className="reveal">
            <div className="irp-body">
              <p>
                Traditional media outlets no longer hold a monopoly on influence or attention. In an
                AI-fuelled, creator-led landscape, buyers discover suppliers through search, answer
                engines, niche publishers and peer communities long before the first sales
                conversation.
              </p>
              <p>
                For marketing and communications teams, that changes what earned media is worth and
                where it has to show up. This short report covers the shift, the numbers behind it,
                and what to change first.
              </p>

              <h2>What the data says</h2>
              <ul className="irp-stats">
                {STATS.map((item) => (
                  <li key={item.stat}>
                    <b>{item.stat}</b> {item.copy}
                  </li>
                ))}
              </ul>

              <h2>Ready to build brand awareness in this new media era?</h2>
              <p>
                Download the report for the full picture — where buyers actually start research, how
                answer engines reshape earned media value, and a simple way to measure influence
                across channels you don&apos;t own.
              </p>
            </div>
          </div>

          <div className="irp-main-form reveal">
            <ReportForm />
          </div>
        </div>
      </section>

      <section className="irp-resources">
        <div className="wrap">
          <div className="irp-resources-head reveal">
            <div>
              <p className="kicker">Keep reading</p>
              <h2>Explore more resources</h2>
            </div>
          </div>
          <div className="irp-resource-grid">
            {RESOURCES.map((item) => (
              <Link className="irp-resource reveal" href={item.href} key={item.href}>
                <div className="irp-resource-top">
                  <span className="tag">{item.tag}</span>
                  <span className="irp-resource-arrow" aria-hidden="true">→</span>
                </div>
                <div className="irp-resource-body">
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <SiteEffects />
    </>
  );
}
