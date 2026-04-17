import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service Record Biography | Tadasha Mishra",
  description: "Official service record and structured dossier.",
};

export default function AboutPage() {
  return (
    <main className="container section">
      <h1 style={{ marginBottom: "3rem" }}>Service Record Biography</h1>

      {/* 1. Current Position */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
          Current Position
        </h2>
        <div className="card" style={{ background: "var(--primary)", color: "var(--primary-foreground)", border: "none", borderLeft: "4px solid var(--accent)", padding: "2.5rem", borderRadius: "4px" }}>
          <p style={{ margin: 0, fontSize: "1.25rem" }}>
            <strong>Special Director General of Police, CID</strong><br />
            <span style={{ opacity: 0.9, fontSize: "1.125rem" }}>Jharkhand Police Headquarters, Ranchi</span><br />
            <span style={{ fontSize: "0.875rem", color: "var(--accent-light)", display: "block", marginTop: "1rem", textTransform: "uppercase", letterSpacing: "0.05em" }}>Assuming oversight of statewide criminal investigations and strategic law enforcement directives.</span>
          </p>
        </div>
      </section>

      {/* 2. Career Timeline */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
          Career Timeline
        </h2>
        <div className="grid" style={{ gap: "1rem" }}>
          {/* Timeline entries */}
          <div className="card timeline-card" style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "2rem", alignItems: "center", borderLeft: "3px solid var(--accent)" }}>
            <div style={{ fontWeight: 600, color: "var(--accent)", fontSize: "1.125rem" }}>2020 &ndash; Present</div>
            <div>
              <strong style={{ display: "block", fontSize: "1.25rem", color: "var(--primary)" }}>Special Director General of Police, CID</strong>
              <span style={{ color: "var(--muted-text)" }}>Ranchi, Jharkhand</span>
            </div>
          </div>
          
          <div className="card timeline-card" style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "2rem", alignItems: "center", borderLeft: "3px solid var(--border-color)" }}>
            <div style={{ fontWeight: 600, color: "var(--muted-text)" }}>2015 &ndash; 2020</div>
            <div>
              <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Additional Director General of Police</strong>
              <span style={{ color: "var(--muted-text)" }}>Jharkhand</span>
            </div>
          </div>
          
          <div className="card timeline-card" style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: "2rem", alignItems: "center", borderLeft: "3px solid var(--border-color)" }}>
            <div style={{ fontWeight: 600, color: "var(--muted-text)" }}>2008 &ndash; 2015</div>
            <div>
              <strong style={{ display: "block", fontSize: "1.125rem", color: "var(--foreground)" }}>Inspector General of Police</strong>
              <span style={{ color: "var(--muted-text)" }}>Various Ranges, Jharkhand</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Training & Education */}
      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "1.5rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
          Training & Education
        </h2>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          <li style={{ paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
            <strong>Indian Police Service (IPS) Training</strong> &mdash; Sardar Vallabhbhai Patel National Police Academy
          </li>
          <li style={{ paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
            <strong>Master of Arts</strong> &mdash; University Placeholder
          </li>
          <li>
            <strong>Advanced Strategic Management Program</strong> &mdash; National Security Curriculum
          </li>
        </ul>
      </section>
    </main>
  );
}
