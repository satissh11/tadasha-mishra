import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Service & Achievements | Tadasha Mishra",
  description: "Operational milestones, infrastructure improvements, and service recognitions.",
};

export default function ServicePage() {
  return (
    <main className="container section">
      <h1 style={{ marginBottom: "3rem" }}>Service & Achievements</h1>

      <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "4rem" }}>
        
        {/* A. Operational Milestones */}
        <section>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Operational Milestones
          </h2>
          <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card" style={{ position: "relative", borderLeft: "4px solid var(--accent)" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)" }}>2025</span>
              <h3 style={{ fontSize: "1.125rem", marginTop: "0.25rem", marginBottom: "0.5rem", color: "var(--primary)" }}>Statewide Anti-Cyber Crime Operation</h3>
              <p style={{ margin: 0, color: "var(--foreground)" }}>Coordinated multi-district enforcement resulting in the dismantling of major cyber-fraud syndicates.</p>
            </div>
            
            <div className="card" style={{ position: "relative", borderLeft: "4px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)" }}>2021</span>
              <h3 style={{ fontSize: "1.125rem", marginTop: "0.25rem", marginBottom: "0.5rem", color: "var(--primary)" }}>LWE Anti-Insurgency Strategic Shift</h3>
              <p style={{ margin: 0, color: "var(--foreground)" }}>Implemented intelligence-driven tactical shifts leading to a significant reduction in LWE activities in critical zones.</p>
            </div>
          </div>
        </section>

        {/* B. Infrastructure & System Improvements */}
        <section>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Infrastructure & System Improvements
          </h2>
          <div style={{ paddingLeft: "0.5rem", display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div className="card" style={{ position: "relative", borderLeft: "4px solid var(--border-color)" }}>
              <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)" }}>2023</span>
              <h3 style={{ fontSize: "1.125rem", marginTop: "0.25rem", marginBottom: "0.5rem", color: "var(--primary)" }}>Police Digitization Initiative</h3>
              <p style={{ margin: 0, color: "var(--foreground)" }}>Spearheaded the integration of unified crime records networks across 24 districts.</p>
            </div>
          </div>
        </section>

        {/* C. Awards / Recognitions */}
        <section>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Awards & Recognitions
          </h2>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li style={{ paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
              <strong style={{ display: "block", fontSize: "1.125rem" }}>President's Police Medal for Distinguished Service</strong>
              <span style={{ color: "var(--muted-text)" }}>Awarded for exceptional leadership and service record.</span>
            </li>
            <li style={{ paddingBottom: "1rem", marginBottom: "1rem", borderBottom: "1px solid var(--border-color)" }}>
              <strong style={{ display: "block", fontSize: "1.125rem" }}>Police Medal for Meritorious Service</strong>
              <span style={{ color: "var(--muted-text)" }}>Recognizing exemplary execution of duties.</span>
            </li>
          </ul>
        </section>

      </div>
    </main>
  );
}
