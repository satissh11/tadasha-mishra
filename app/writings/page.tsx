import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Archive & Updates | Tadasha Mishra",
  description: "Archive of official notes, press releases, and external media coverage.",
};

export default function ArchivePage() {
  return (
    <main className="container section">
      <h1 style={{ marginBottom: "1rem" }}>Archive & Coverage</h1>
      <p style={{ color: "var(--muted-text)", marginBottom: "3rem", maxWidth: "600px" }}>
        Official communications, press statements, advisories, and external media records.
      </p>

      <div className="grid" style={{ gridTemplateColumns: "2fr 1fr", gap: "4rem" }}>
        
        {/* Main Updates Section */}
        <div>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Official Updates
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            <article className="card" style={{ borderBottom: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>14 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", backgroundColor: "var(--accent-light)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>Official Statement</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Directive on Cyber Crime Pre-emption Strategies</Link>
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--muted-text)", margin: 0 }}>
                Implementation of new SOPs for district cyber cells.
              </p>
            </article>

            <article className="card" style={{ borderBottom: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>10 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", backgroundColor: "var(--border-color)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>Advisory</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Election Security Protocol Advisory for District Units</Link>
              </h3>
              <p style={{ fontSize: "1rem", color: "var(--muted-text)", margin: 0 }}>
                Standardized security frameworks for upcoming state assembly elections.
              </p>
            </article>
            
            <article className="card" style={{ borderBottom: "none", display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>02 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", backgroundColor: "var(--border-color)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>Press Note</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Quarterly Review of Major Case Resolutions</Link>
              </h3>
            </article>
          </div>
        </div>

        {/* Related Coverage Sidebar */}
        <div>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            External Coverage
          </h2>
          
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <article style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>The Hindu</span>
              <h3 style={{ fontSize: "1rem", marginTop: "0.25rem", marginBottom: "0.5rem" }}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>
                  Jharkhand Police launches new digitised tracking system
                </a>
              </h3>
            </article>

            <article style={{ borderBottom: "1px solid var(--border-color)", paddingBottom: "1rem" }}>
              <span style={{ fontSize: "0.75rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>PTI News</span>
              <h3 style={{ fontSize: "1rem", marginTop: "0.25rem", marginBottom: "0.5rem" }}>
                <a href="#" target="_blank" rel="noopener noreferrer" style={{ textDecoration: "underline", textDecorationThickness: "1px", textUnderlineOffset: "4px" }}>
                  CID Jharkhand dismantles inter-state cyber fraud ring
                </a>
              </h3>
            </article>
          </div>
        </div>

      </div>
    </main>
  );
}
