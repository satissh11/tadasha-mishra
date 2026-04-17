import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentary Gallery | Tadasha Mishra",
  description: "Official events, field visits, and public engagements.",
};

export default function GalleryPage() {
  return (
    <main className="container section">
      <h1 style={{ marginBottom: "1rem" }}>Documentary Gallery</h1>
      <p style={{ color: "var(--muted-text)", marginBottom: "3rem", maxWidth: "600px" }}>
        Official events, field visits, public engagements, and conferences.
      </p>

      <section style={{ marginBottom: "4rem" }}>
        <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
          <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
          Documentary Record
        </h2>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2rem" }}>
          
          {/* Image Cards */}
          {[
            { src: "/gallery/photo1.jpg", title: "Official Handover & Welcome" },
            { src: "/gallery/photo2.jpg", title: "Balancing Tough Policing With Compassionate Leadership" },
            { src: "/gallery/photo3.jpg", title: "Statement on Jharkhand Crime Control" },
            { src: "/gallery/photo4.jpg", title: "Administrative Duties & Official Signings" },
            { src: "/gallery/photo5.jpg", title: "Public Engagements and Community Outreach" },
            { src: "/gallery/photo6.jpg", title: "Strategic Briefings and Press Conferences" },
            { src: "/gallery/photo7.jpg", title: "Field Inspections and Operational Oversight" },
            { src: "/gallery/photo8.jpg", title: "Ceremonial Events and Honors" }
          ].map((item, idx) => (
            <div key={idx} className="card gallery-card" style={{ padding: 0, border: "none", backgroundColor: "var(--muted-bg)" }}>
              <div className="gallery-image-wrapper" style={{ width: "100%", height: "250px", position: "relative", backgroundColor: "var(--border-color)", borderBottom: "3px solid var(--accent)", overflow: "hidden" }}>
                <img src={item.src} alt={item.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }} />
              </div>
              <div style={{ padding: "1.5rem" }}>
                <p style={{ margin: 0, fontSize: "0.875rem", fontWeight: 500, color: "var(--primary)", lineHeight: 1.4 }}>{item.title}</p>
              </div>
            </div>
          ))}

        </div>
      </section>
    </main>
  );
}
