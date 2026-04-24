import type { Metadata } from "next";
import Link from "next/link";
import HeroImage from "./components/HeroImage";

export const metadata: Metadata = {
  title: "Tadasha Mishra | Special DGP, CID Jharkhand — Official Profile",
  description: "Official institutional profile of Tadasha Mishra, Special Director General of Police, CID, Jharkhand.",
};

export default function Home() {
  return (
    <main>

      {/* ── Hero ──────────────────────────────────────────────── */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-flex">

            {/* Left: Text */}
            <div className="hero-text">
              <p className="hero-eyebrow">IPS · 1994 Batch · Jharkhand Cadre</p>
              <h1 className="hero-name">Tadasha Mishra</h1>
              <p className="hero-role">Special Director General of Police</p>
              <p className="hero-dept">CID, Jharkhand</p>
              <p className="hero-desc">
                Maintaining law and order, operational oversight, and strategic
                policing leadership in Jharkhand.
              </p>
            </div>

            {/* Right: Premium interactive portrait */}
            <HeroImage />

          </div>
        </div>
      </section>

      {/* ── Identity Stats ────────────────────────────────────── */}
      <section className="stats-section">
        <div className="container">
          <div className="grid stagger" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
            {[
              { label: "Years of Service", value: "30+ Years" },
              { label: "Cadre / Batch",    value: "IPS, 1994 Batch" },
              { label: "Key Domain",       value: "Criminal Investigation" },
              { label: "Current Posting",  value: "Ranchi, Jharkhand" },
            ].map(({ label, value }) => (
              <div key={label} className="stat-card reveal">
                <p className="stat-label">{label}</p>
                <p className="stat-value">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Service Timeline (marquee) ────────────────────────── */}
      <section className="section" style={{ backgroundColor: "var(--muted-bg)", paddingTop: "4rem", paddingBottom: "4rem" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
            <div>
              <p className="section-label">Career</p>
              <h2 style={{ margin: 0 }}>Service Timeline</h2>
            </div>
            <Link
              href="/service"
              style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase", transition: "color 0.3s ease" }}
            >
              Full Record →
            </Link>
          </div>

          <div className="marquee-container">
            <div className="marquee-content">
              {/* Original + duplicate for seamless loop */}
              {[...Array(2)].flatMap((_, pass) =>
                [
                  { year: "2020 – Present", title: "Special Director General of Police, CID", loc: "Ranchi, Jharkhand", accent: true },
                  { year: "2015 – 2020",    title: "Additional Director General of Police",   loc: "Jharkhand",        accent: false },
                  { year: "2008 – 2015",    title: "Inspector General of Police",              loc: "Various Ranges, Jharkhand", accent: false },
                ].map((item, i) => (
                  <div key={`${pass}-${i}`} className={`timeline-pill ${item.accent ? "timeline-pill-accent" : "timeline-pill-muted"}`}>
                    <span style={{ fontSize: "0.8rem", fontWeight: 700, color: item.accent ? "var(--accent)" : "var(--muted-text)", display: "block", marginBottom: "0.4rem" }}>
                      {item.year}
                    </span>
                    <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.25rem", color: "var(--primary)" }}>{item.title}</h3>
                    <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted-text)" }}>{item.loc}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── Philosophy Quote ──────────────────────────────────── */}
      <section className="philosophy-section">
        <div className="container" style={{ maxWidth: "860px" }}>
          <p className="philosophy-eyebrow">Service Philosophy</p>
          <blockquote className="philosophy-quote">
            Effective policing is rooted in intelligence-driven strategy,
            institutional transparency, and an unwavering commitment to public safety.
          </blockquote>
        </div>
      </section>

      {/* ── Latest Writings ───────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2.5rem" }}>
            <div>
              <p className="section-label">Communications</p>
              <h2 style={{ margin: 0 }}>Latest Writings &amp; Updates</h2>
            </div>
            <Link
              href="/writings"
              style={{ fontSize: "0.8rem", fontWeight: 700, color: "var(--primary)", letterSpacing: "0.05em", textTransform: "uppercase" }}
            >
              View All →
            </Link>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {[
              { date: "14 April 2026", badge: "Official Statement", badgeClass: "badge-accent", href: "#", title: "Directive on Cyber Crime Pre-emption Strategies" },
              { date: "10 April 2026", badge: "Advisory",           badgeClass: "badge-muted",  href: "#", title: "Election Security Protocol Advisory for District Units" },
              { date: "02 April 2026", badge: "Press Note",         badgeClass: "badge-muted",  href: "#", title: "Quarterly Review of Major Case Resolutions" },
            ].map((item) => (
              <div key={item.title} className="article-card reveal">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted-text)" }}>{item.date}</span>
                  <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", margin: 0 }}>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
