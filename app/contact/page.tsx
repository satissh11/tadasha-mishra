import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Tadasha Mishra",
  description: "Official office contact and public correspondence.",
};

export default function ContactPage() {
  return (
    <main className="container section">
      <h1 style={{ marginBottom: "3rem" }}>Contact Information</h1>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "4rem" }}>
        
        {/* Official Details & Directory */}
        <section>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Directory
          </h2>
          
          <div className="card" style={{ background: "var(--primary)", color: "var(--primary-foreground)", border: "none", borderLeft: "4px solid var(--accent)", padding: "2.5rem", borderRadius: "4px", marginBottom: "2rem" }}>
            <h3 style={{ fontSize: "1.125rem", marginBottom: "1rem", color: "var(--accent-light)" }}>Office of the Special DGP, CID</h3>
            <address style={{ fontStyle: "normal", margin: 0, lineHeight: 1.6, opacity: 0.9 }}>
              CID Headquarters<br />
              Jharkhand Police<br />
              Dhurwa, Ranchi<br />
              Jharkhand 834004
            </address>
          </div>

          <div style={{ marginTop: "3rem", padding: "1.5rem", backgroundColor: "var(--muted-bg)", border: "1px solid var(--border-color)", borderRadius: "4px" }}>
            <h3 style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: "0.5rem" }}>Response Disclaimer</h3>
            <p style={{ fontSize: "0.875rem", color: "var(--muted-text)", margin: 0, lineHeight: 1.6 }}>
              This portal is maintained for public information and institutional transparency. Direct responses to correspondence via this platform are not guaranteed. For emergencies, please dial 112 or contact your local police station immediately.
            </p>
          </div>
        </section>

        {/* Contact Form */}
        <section>
          <h2 style={{ fontSize: "1.25rem", textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--primary)", borderBottom: "2px solid var(--border-color)", paddingBottom: "0.5rem", marginBottom: "2rem", display: "flex", gap: "0.75rem", alignItems: "center" }}>
            <span style={{ width: "24px", height: "2px", backgroundColor: "var(--accent)" }}></span>
            Public Correspondence
          </h2>
          
          <form style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {/* Anti-spam hidden field */}
            <input type="text" name="_honey" style={{ display: "none" }} tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Full Name</label>
              <input type="text" id="name" required style={{ width: "100%", padding: "0.75rem", border: "1px solid var(--border-color)", borderRadius: "2px", background: "var(--background)", color: "var(--foreground)", fontFamily: "inherit" }} />
            </div>

            <div>
              <label htmlFor="email" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Email Address</label>
              <input type="email" id="email" required style={{ width: "100%", padding: "0.75rem", border: "1px solid var(--border-color)", borderRadius: "2px", background: "var(--background)", color: "var(--foreground)", fontFamily: "inherit" }} />
            </div>

            <div>
              <label htmlFor="subject" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Subject</label>
              <input type="text" id="subject" required style={{ width: "100%", padding: "0.75rem", border: "1px solid var(--border-color)", borderRadius: "2px", background: "var(--background)", color: "var(--foreground)", fontFamily: "inherit" }} />
            </div>

            <div>
              <label htmlFor="message" style={{ display: "block", fontSize: "0.875rem", fontWeight: 600, marginBottom: "0.5rem" }}>Message</label>
              <textarea id="message" required rows={5} style={{ width: "100%", padding: "0.75rem", border: "1px solid var(--border-color)", borderRadius: "2px", background: "var(--background)", color: "var(--foreground)", fontFamily: "inherit", resize: "vertical" }}></textarea>
            </div>

            <button type="submit" className="submit-button" style={{ padding: "0.75rem 1.5rem", backgroundColor: "var(--primary)", color: "var(--primary-foreground)", border: "none", borderRadius: "2px", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", cursor: "pointer", alignSelf: "flex-start" }}>
              Submit Correspondence
            </button>
          </form>
        </section>

      </div>
    </main>
  );
}
