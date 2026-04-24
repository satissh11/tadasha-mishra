import type { Metadata } from "next";
import AutoScrollTimeline from "../components/AutoScrollTimeline";

export const metadata: Metadata = {
  title: "Service & Achievements | Tadasha Mishra",
  description: "Operational milestones, infrastructure improvements, and service recognitions.",
};

const MILESTONES = [
  {
    year: "2025",
    title: "Statewide Anti-Cyber Crime Operation",
    desc: "Coordinated multi-district enforcement resulting in the dismantling of major cyber-fraud syndicates.",
    active: true,
  },
  {
    year: "2021",
    title: "LWE Anti-Insurgency Strategic Shift",
    desc: "Implemented intelligence-driven tactical shifts leading to a significant reduction in LWE activities in critical zones.",
    active: false,
  },
  {
    year: "2023",
    title: "Police Digitization Initiative",
    desc: "Spearheaded the integration of unified crime records networks across 24 districts.",
    active: false,
  },
];

export default function ServicePage() {
  return (
    <main className="container section">

      {/* Page Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Public Record</p>
        <h1>Service &amp; Achievements</h1>
      </div>

      <div className="grid" style={{ gridTemplateColumns: "1fr", gap: "4rem" }}>

        {/* ── A. Operational Milestones (Auto-Scroll) ─────────── */}
        <section>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "1.5rem" }}>
            <h2 className="page-section-heading" style={{ marginBottom: 0 }}>Operational Milestones</h2>
            <span style={{ fontSize: "0.72rem", color: "var(--muted-text)", fontStyle: "italic" }}>
              Hover to pause
            </span>
          </div>
          <AutoScrollTimeline items={MILESTONES} ariaLabel="Operational Milestones auto-scroll" />
        </section>

        {/* ── B. Awards & Recognitions ───────────────────────── */}
        <section>
          <h2 className="page-section-heading">Awards &amp; Recognitions</h2>
          <ul style={{ listStyleType: "none", padding: 0, display: "flex", flexDirection: "column", gap: 0 }}>
            {[
              { title: "President's Police Medal for Distinguished Service", desc: "Awarded for exceptional leadership and service record." },
              { title: "Police Medal for Meritorious Service",               desc: "Recognizing exemplary execution of duties." },
            ].map((item, i, arr) => (
              <li key={item.title} className="reveal" style={{
                paddingBottom: "1.25rem",
                marginBottom: i < arr.length - 1 ? "1.25rem" : 0,
                borderBottom: i < arr.length - 1 ? "1px solid var(--border-subtle)" : "none",
              }}>
                <strong style={{ display: "block", fontSize: "1.05rem", color: "var(--primary)", marginBottom: "0.25rem" }}>
                  {item.title}
                </strong>
                <span style={{ color: "var(--muted-text)", fontSize: "0.9rem" }}>{item.desc}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>
    </main>
  );
}
