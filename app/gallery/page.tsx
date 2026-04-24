import type { Metadata } from "next";
import GalleryCard from "../components/GalleryCard";

export const metadata: Metadata = {
  title: "Documentary Gallery | Tadasha Mishra",
  description: "Official events, field visits, and public engagements.",
};

const GALLERY_ITEMS = [
  { src: "/gallery/photo1.jpg", title: "Official Handover & Welcome" },
  { src: "/gallery/photo2.jpg", title: "Balancing Tough Policing With Compassionate Leadership" },
  { src: "/gallery/photo3.jpg", title: "Statement on Jharkhand Crime Control" },
  { src: "/gallery/photo4.jpg", title: "Administrative Duties & Official Signings" },
  { src: "/gallery/photo5.jpg", title: "Public Engagements and Community Outreach" },
  { src: "/gallery/photo6.jpg", title: "Strategic Briefings and Press Conferences" },
  { src: "/gallery/photo7.jpg", title: "Field Inspections and Operational Oversight" },
  { src: "/gallery/photo8.jpg", title: "Ceremonial Events and Honors" },
];

export default function GalleryPage() {
  return (
    <main className="container section">

      {/* Page Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Visual Record</p>
        <h1>Documentary Gallery</h1>
        <p style={{ color: "var(--muted-text)", marginTop: "0.5rem", maxWidth: "600px" }}>
          Official events, field visits, public engagements, and conferences.
        </p>
      </div>

      <section style={{ marginBottom: "4rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2rem" }}>
          {GALLERY_ITEMS.map((item, idx) => (
            <div key={idx} className="reveal">
              <GalleryCard src={item.src} title={item.title} index={idx} />
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
