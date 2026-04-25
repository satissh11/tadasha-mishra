import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tadasha Mishra",
  description: "Official office contact and public correspondence.",
};

export default function ContactPage() {
  return (
    <main className="container section">

      {/* Page Header */}
      <div style={{ marginBottom: "3.5rem" }}>
        <p className="section-label">Get in Touch</p>
        <h1>Contact Information</h1>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>

        {/* ── Directory ──────────────────────────────────────── */}
        <section>
          <h2 className="page-section-heading">Directory</h2>

          {/* Office card */}
          <div className="reveal directory-card">
            <h3 style={{ fontSize: "1.1rem", marginBottom: "1rem", color: "var(--accent)" }}>
              Office of the Special DGP, jharkhand
            </h3>
            <address style={{ fontStyle: "normal", lineHeight: 1.8, color: "#ffffff", fontWeight: 500 }}>
              DGP Headquarters<br />
              Jharkhand Police<br />
              Dhurwa, Ranchi<br />
              Jharkhand 834004
            </address>
          </div>

          {/* Disclaimer */}
          <div className="reveal" style={{
            padding: "1.5rem",
            backgroundColor: "var(--muted-bg)",
            border: "1px solid var(--border-subtle)",
            borderRadius: "8px",
          }}>
            <h3 style={{ fontSize: "0.85rem", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: "0.5rem", color: "var(--primary)" }}>
              Response Disclaimer
            </h3>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-text)", margin: 0, lineHeight: 1.7 }}>
              This portal is maintained for public information and institutional transparency.
              Direct responses to correspondence via this platform are not guaranteed. For
              emergencies, please dial 112 or contact your local police station immediately.
            </p>
          </div>
        </section>

        {/* ── Public Correspondence Form ────────────────────── */}
        <section>
          <h2 className="page-section-heading">Public Correspondence</h2>

          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Anti-spam */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div className="form-group reveal">
              <label htmlFor="name" className="form-label">Full Name</label>
              <input type="text" id="name" className="form-input" required placeholder="Your full name" />
            </div>

            <div className="form-group reveal">
              <label htmlFor="email" className="form-label">Email Address</label>
              <input type="email" id="email" className="form-input" required placeholder="you@example.com" />
            </div>

            <div className="form-group reveal">
              <label htmlFor="subject" className="form-label">Subject</label>
              <input type="text" id="subject" className="form-input" required placeholder="Brief subject line" />
            </div>

            <div className="form-group reveal">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea id="message" className="form-input form-textarea" required rows={5} placeholder="Your message..." />
            </div>

            <div className="reveal">
              <button type="submit" className="btn-primary">
                Submit Correspondence
              </button>
            </div>
          </form>
        </section>

      </div>
    </main>
  );
}
