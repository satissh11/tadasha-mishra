import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import HeroSlider from "./components/HeroSlider";
import TimelineSlider from "./components/TimelineSlider";

export const metadata: Metadata = {
  title: "Tadasha Mishra | Special DGP, CID Jharkhand — Official Profile",
  description: "Official institutional profile of Tadasha Mishra, Special Director General of Police, CID, Jharkhand.",
};

export default function Home() {
  return (
    <main>

      {/* ── Hero Slider (NEW) ────────────────────────────────── */}
      <HeroSlider />

      {/* ── Profile Introduction (NEW) ────────────────────────── */}
      <section className="profile-intro-section">
        <div className="container">
          <div className="profile-intro-layout">
            <div className="profile-intro-content">
              <p className="profile-intro-eyebrow">
                <span style={{ color: "var(--accent)", marginRight: "8px" }}>—</span> 
                IPS · 1994 BATCH · JHARKHAND CADRE
              </p>
              <h1 className="profile-intro-title">Tadasha Mishra</h1>
              <h2 className="profile-intro-subtitle1">Special Director General of Police</h2>
              <p className="profile-intro-subtitle2">DGP, Jharkhand</p>
              <p className="profile-intro-summary" style={{ marginTop: "1rem" }}>
                Maintaining law and order, operational oversight, and strategic policing leadership in Jharkhand.
              </p>
            </div>
            <div className="profile-intro-image-box">
              <Image 
                src="/gallery/photo4.jpg" 
                alt="Tadasha Mishra Official Portrait" 
                fill 
                style={{ objectFit: "cover" }}
                className="profile-img-element"
                priority
              />
              {/* Hover Information Overlay */}
              <div className="profile-img-overlay">
                <p className="profile-img-info-label">📍 Official Record</p>
                <p className="profile-img-info-title">Tadasha Mishra</p>
                <p className="profile-img-info-text">Explore detailed career milestones and strategic contributions to Jharkhand Police.</p>
              </div>
            </div>
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

      {/* ── Service Timeline (Updated Interaction) ────────────── */}
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

          <TimelineSlider />
        </div>
      </section>

      {/* ── Philosophy Quote ──────────────────────────────────── */}
      <section className="philosophy-section">
        <div className="container" style={{ maxWidth: "860px", position: "relative", zIndex: 2 }}>
          <p className="philosophy-eyebrow">Service Philosophy</p>
          <blockquote className="philosophy-quote">
            Effective policing is rooted in intelligence-driven strategy,
            institutional transparency, and an unwavering commitment to public safety.
          </blockquote>
        </div>
      </section>

      {/* ── Latest Writings & Updates (Nirmala-Style Dual Layout) ── */}
      <section className="nirmala-section">
        <div className="container">
          <div className="dual-grid">
            
            {/* Column 1: Latest Writings */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid rgba(228, 142, 92, 0.2)", paddingBottom: "0.75rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Latest Writings</h2>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--muted-text)" }}>↑</div>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--muted-text)" }}>↓</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { date: "14 April 2026", title: "Directive on Cyber Crime Pre-emption Strategies", image: "/gallery/photo2.jpg" },
                  { date: "10 April 2026", title: "Election Security Protocol Advisory for District Units", image: "/gallery/photo3.jpg" },
                  { date: "02 April 2026", title: "Quarterly Review of Major Case Resolutions", image: "/gallery/photo5.jpg" },
                ].map((item) => (
                  <Link href="/writings" key={item.title} className="horizontal-card reveal">
                    <div className="h-card-img">
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className="h-card-content">
                      <span className="h-card-date">{item.date}</span>
                      <h3 className="h-card-title">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/writings" style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>View All Writings →</Link>
            </div>

            {/* Column 2: Updates */}
            <div>
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem", borderBottom: "1px solid rgba(228, 142, 92, 0.2)", paddingBottom: "0.75rem" }}>
                <h2 style={{ margin: 0, fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Updates</h2>
                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--muted-text)" }}>↑</div>
                  <div style={{ width: "32px", height: "32px", borderRadius: "50%", border: "1px solid var(--border-color)", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: "var(--muted-text)" }}>↓</div>
                </div>
              </div>

              <div style={{ display: "flex", flexDirection: "column" }}>
                {[
                  { date: "18 April 2026", title: "Official Visit to CID Cyber Lab Facilities", image: "/gallery/photo1.jpg" },
                  { date: "12 April 2026", title: "Coordination Meeting with Central Agencies", image: "/gallery/photo4.jpg" },
                  { date: "05 April 2026", title: "Public Interaction Program on Community Policing", image: "/gallery/photo6.jpg" },
                ].map((item) => (
                  <Link href="/gallery" key={item.title} className="horizontal-card reveal">
                    <div className="h-card-img">
                      <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className="h-card-content">
                      <span className="h-card-date">{item.date}</span>
                      <h3 className="h-card-title">{item.title}</h3>
                    </div>
                  </Link>
                ))}
              </div>
              <Link href="/gallery" style={{ display: "inline-block", marginTop: "1.5rem", fontSize: "0.75rem", fontWeight: 700, color: "var(--accent-dark)", textTransform: "uppercase", letterSpacing: "0.1em" }}>View All Updates →</Link>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
