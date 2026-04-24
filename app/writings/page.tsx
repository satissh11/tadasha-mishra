import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive & Updates | Tadasha Mishra",
  description: "Archive of official notes, press releases, and external media coverage.",
};

export default function ArchivePage() {
  return (
    <main className="container section">

      {/* Page Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Publications</p>
        <h1>Archive &amp; Coverage</h1>
        <p style={{ color: "var(--muted-text)", marginTop: "0.5rem", maxWidth: "600px" }}>
          Official communications, press statements, advisories, and external media records.
        </p>
      </div>

      <div className="writings-layout" style={{ display: "grid", gridTemplateColumns: "2fr 1fr", gap: "4rem" }}>

        {/* Main: Official Updates */}
        <div>
          <h2 className="page-section-heading">Official Updates</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            {[
              { date: "14 April 2026", badge: "Official Statement", badgeClass: "badge-accent", href: "#", title: "Directive on Cyber Crime Pre-emption Strategies",         desc: "Implementation of new SOPs for district cyber cells." },
              { date: "10 April 2026", badge: "Advisory",           badgeClass: "badge-muted",  href: "#", title: "Election Security Protocol Advisory for District Units",    desc: "Standardized security frameworks for upcoming state assembly elections." },
              { date: "02 April 2026", badge: "Press Note",         badgeClass: "badge-muted",  href: "#", title: "Quarterly Review of Major Case Resolutions",               desc: "" },
            ].map((item) => (
              <article key={item.title} className="article-card reveal">
                <div style={{ display: "flex", alignItems: "center", gap: "0.75rem" }}>
                  <span style={{ fontSize: "0.82rem", color: "var(--muted-text)" }}>{item.date}</span>
                  <span className={`badge ${item.badgeClass}`}>{item.badge}</span>
                </div>
                <h3 style={{ fontSize: "1.15rem", margin: 0 }}>
                  <Link href={item.href}>{item.title}</Link>
                </h3>
                {item.desc && (
                  <p style={{ fontSize: "0.9rem", color: "var(--muted-text)", margin: 0 }}>{item.desc}</p>
                )}
              </article>
            ))}
          </div>
        </div>

        {/* Sidebar: External Coverage */}
        <div>
          <h2 className="page-section-heading">External Coverage</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {[
              { source: "The Hindu", href: "#", title: "Jharkhand Police launches new digitised tracking system" },
              { source: "PTI News",  href: "#", title: "CID Jharkhand dismantles inter-state cyber fraud ring" },
            ].map((item) => (
              <article key={item.title} className="reveal" style={{ borderBottom: "1px solid var(--border-subtle)", paddingBottom: "1.25rem" }}>
                <span style={{ fontSize: "0.7rem", textTransform: "uppercase", color: "var(--accent)", letterSpacing: "0.08em", fontWeight: 700 }}>
                  {item.source}
                </span>
                <h3 style={{ fontSize: "0.95rem", marginTop: "0.35rem", marginBottom: 0, lineHeight: 1.5 }}>
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "4px", color: "var(--primary)" }}
                  >
                    {item.title}
                  </a>
                </h3>
              </article>
            ))}
          </div>
        </div>

      </div>
    </main>
  );
}
