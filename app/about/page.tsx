import type { Metadata } from "next";
import AutoScrollTimeline from "../components/AutoScrollTimeline";

export const metadata: Metadata = {
  title: "Service Record Biography | Tadasha Mishra",
  description: "Official service record and structured dossier of Tadasha Mishra, IPS.",
};

const CAREER_TIMELINE = [
  { year: "2020 – Present", title: "Special Director General of Police, CID", desc: "Ranchi, Jharkhand", active: true },
  { year: "2015 – 2020",    title: "Additional Director General of Police",   desc: "Jharkhand",         active: false },
  { year: "2008 – 2015",    title: "Inspector General of Police",              desc: "Various Ranges, Jharkhand", active: false },
];

export default function AboutPage() {
  return (
    <main className="container section">

      {/* Page Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Official Dossier</p>
        <h1>Service Record Biography</h1>
      </div>

      {/* ── 1. Current Position ─────────────────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <h2 className="page-section-heading">Current Position</h2>

        <div className="reveal" style={{
          background: "var(--primary)",
          color: "var(--primary-foreground)",
          borderLeft: "5px solid var(--accent)",
          padding: "2.5rem",
          borderRadius: "8px",
          boxShadow: "var(--shadow-md)",
        }}>
          <p style={{ margin: 0, fontSize: "1.2rem", lineHeight: 1.7 }}>
            <strong>Special Director General of Police, CID</strong><br />
            <span style={{ opacity: 0.88, fontSize: "1.05rem" }}>Jharkhand Police Headquarters, Ranchi</span><br />
            <span style={{
              fontSize: "0.82rem",
              color: "rgba(255,153,51,0.9)",
              display: "block",
              marginTop: "1rem",
              textTransform: "uppercase",
              letterSpacing: "0.06em",
              lineHeight: 1.6,
            }}>
              Assuming oversight of statewide criminal investigations and strategic law enforcement directives.
            </span>
          </p>
        </div>
      </section>

      {/* ── 2. Career Timeline (Auto-Scroll) ────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
          <h2 className="page-section-heading" style={{ marginBottom: 0 }}>Career Timeline</h2>
          <span style={{ fontSize: "0.72rem", color: "var(--muted-text)", fontStyle: "italic" }}>
            Hover to pause
          </span>
        </div>
        
        {/* Now scrolling automatic vertically */}
        <AutoScrollTimeline items={CAREER_TIMELINE} ariaLabel="Career Timeline auto-scroll" />
      </section>

      {/* ── 3. Training & Education ─────────────────────────── */}
      <section style={{ marginBottom: "4.5rem" }}>
        <h2 className="page-section-heading">Training &amp; Education</h2>

        <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: "0" }}>
          {[
            { title: "Indian Police Service (IPS) Training", inst: "Sardar Vallabhbhai Patel National Police Academy" },
            { title: "Master of Arts",                       inst: "University Placeholder" },
            { title: "Advanced Strategic Management Program", inst: "National Security Curriculum" },
          ].map((item, i, arr) => (
            <li key={item.title} className="reveal" style={{
              paddingBottom: "1.25rem",
              marginBottom: i < arr.length - 1 ? "1.25rem" : 0,
              borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
            }}>
              <strong style={{ display: "block", fontSize: "1rem", color: "var(--primary)", marginBottom: "0.2rem" }}>
                {item.title}
              </strong>
              <span style={{ color: "var(--muted-text)", fontSize: "0.9rem" }}>{item.inst}</span>
            </li>
          ))}
        </ul>
      </section>

    </main>
  );
}
