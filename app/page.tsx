import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Official Dashboard | Senior Law Enforcement Leader",
  description: "Maintaining law and order, operational oversight, and strategic policing leadership in Jharkhand.",
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="section" style={{ borderBottom: "none", paddingBottom: "2rem", paddingTop: "4rem" }}>
        <div className="container">
          <div className="hero-flex" style={{ display: "flex", flexWrap: "wrap-reverse", gap: "4rem", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ flex: "1 1 min(100%, 600px)" }}>
              <h1 style={{ fontSize: "3.5rem", letterSpacing: "-0.02em", marginBottom: "0.25rem" }}>
                Tadasha Mishra
              </h1>
              <h2 className="hero-subtitle" style={{ fontSize: "1rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--muted-text)", marginBottom: "1rem", display: "flex", alignItems: "center", gap: "0.75rem" }}>
                <span style={{ width: "32px", height: "2px", backgroundColor: "var(--accent)", display: "inline-block" }}></span>
                Special Director General of Police
              </h2>
              <p style={{ fontSize: "1.25rem", color: "var(--accent)", fontWeight: 600, marginBottom: "1.5rem" }}>
                CID, Jharkhand
              </p>
              <p style={{ fontSize: "1.125rem", lineHeight: 1.6 }}>
                Maintaining law and order, operational oversight, and strategic policing leadership in Jharkhand.
              </p>
            </div>
            
            <div className="hero-image-wrapper" style={{ position: "relative", width: "280px", height: "350px", borderRadius: "4px", overflow: "hidden", border: "1px solid var(--border-color)", boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.05)", flexShrink: 0 }}>
              <Image 
                src="/gallery/photo4.jpg" 
                alt="Tadasha Mishra" 
                fill 
                sizes="(max-width: 768px) 100vw, 280px"
                style={{ objectFit: "cover", objectPosition: "center" }} 
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Identity Stats / Metadata Cards */}
      <section className="section" style={{ paddingTop: "2rem" }}>
        <div className="container">
          <div className="grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
            <div className="card">
              <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>Years of Service</h3>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, fontFamily: "var(--font-heading)" }}>30+ Years</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>Cadre / Batch</h3>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, fontFamily: "var(--font-heading)" }}>IPS, 1994 Batch</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>Key Domain</h3>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, fontFamily: "var(--font-heading)" }}>Criminal Investigation</p>
            </div>
            <div className="card">
              <h3 style={{ fontSize: "0.875rem", textTransform: "uppercase", color: "var(--muted-text)", letterSpacing: "0.05em" }}>Current Posting</h3>
              <p style={{ fontSize: "1.5rem", fontWeight: 600, fontFamily: "var(--font-heading)" }}>Ranchi, Jharkhand</p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline Preview */}
      <section className="section" style={{ backgroundColor: "var(--muted-bg)" }}>
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem" }}>
            <h2>Service Timeline</h2>
            <Link href="/service" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--primary)", transition: "color 0.2s ease" }}>View Full Record &rarr;</Link>
          </div>
          
          <div className="marquee-container">
            <div className="marquee-content">
              {/* Original items */}
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--accent)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", display: "block", marginBottom: "0.25rem" }}>2020 &ndash; Present</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Special Director General of Police, CID</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Ranchi, Jharkhand</p>
              </div>
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--border-color)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)", display: "block", marginBottom: "0.25rem" }}>2015 &ndash; 2020</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Additional Director General of Police</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Jharkhand</p>
              </div>
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--border-color)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)", display: "block", marginBottom: "0.25rem" }}>2008 &ndash; 2015</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Inspector General of Police</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Various Ranges, Jharkhand</p>
              </div>
              
              {/* Duplicated for seamless loop */}
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--accent)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--accent)", display: "block", marginBottom: "0.25rem" }}>2020 &ndash; Present</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Special Director General of Police, CID</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Ranchi, Jharkhand</p>
              </div>
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--border-color)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)", display: "block", marginBottom: "0.25rem" }}>2015 &ndash; 2020</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Additional Director General of Police</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Jharkhand</p>
              </div>
              <div className="card" style={{ padding: "1.5rem", borderLeft: "3px solid var(--border-color)", backgroundColor: "var(--background)", borderRadius: "4px", minWidth: "300px", whiteSpace: "normal" }}>
                <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--muted-text)", display: "block", marginBottom: "0.25rem" }}>2008 &ndash; 2015</span>
                <h3 style={{ fontSize: "1.125rem", marginBottom: "0.25rem" }}>Inspector General of Police</h3>
                <p style={{ margin: 0, fontSize: "0.875rem", color: "var(--muted-text)" }}>Various Ranges, Jharkhand</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Block */}
      <section className="section" style={{ textAlign: "center", padding: "6rem 0", background: "linear-gradient(to bottom, var(--background), var(--muted-bg))" }}>
        <div className="container" style={{ maxWidth: "800px", position: "relative" }}>
          <div style={{ fontSize: "6rem", color: "var(--accent-light)", position: "absolute", top: "-2rem", left: "0", zIndex: 0, fontFamily: "var(--font-heading)", lineHeight: 1 }}>&ldquo;</div>
          <h2 style={{ fontSize: "0.875rem", textTransform: "uppercase", letterSpacing: "0.15em", color: "var(--accent)", marginBottom: "2rem", position: "relative", zIndex: 1 }}>Service Philosophy</h2>
          <blockquote className="philosophy-quote" style={{ fontSize: "2.25rem", fontFamily: "var(--font-heading)", fontStyle: "italic", lineHeight: 1.4, color: "var(--primary)", margin: 0, position: "relative", zIndex: 1 }}>
            "Effective policing is rooted in intelligence-driven strategy, institutional transparency, and an unwavering commitment to public safety."
          </blockquote>
        </div>
      </section>

      {/* Latest Writings / Communications */}
      <section className="section">
        <div className="container">
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: "2rem" }}>
            <h2>Latest Writings & Updates</h2>
            <Link href="/writings" style={{ fontSize: "0.875rem", fontWeight: 500, color: "var(--primary)" }}>View All Writings &rarr;</Link>
          </div>
          
          <div className="grid" style={{ gridTemplateColumns: "1fr" }}>
            {/* Placeholder for Sanity Data */}
            <div className="card" style={{ borderBottom: "none", padding: "2rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "var(--background)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>14 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--accent)", backgroundColor: "var(--accent-light)", padding: "0.25rem 0.75rem", borderRadius: "999px" }}>Official Statement</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Directive on Cyber Crime Pre-emption Strategies</Link>
              </h3>
            </div>
            
            <div className="card" style={{ borderBottom: "none", padding: "2rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "var(--background)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>10 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", backgroundColor: "var(--muted-bg)", padding: "0.25rem 0.75rem", borderRadius: "999px", border: "1px solid var(--border-color)" }}>Advisory</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Election Security Protocol Advisory for District Units</Link>
              </h3>
            </div>
            
            <div className="card" style={{ borderBottom: "none", padding: "2rem", marginBottom: "1rem", display: "flex", flexDirection: "column", gap: "1rem", backgroundColor: "var(--background)" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
                <span style={{ fontSize: "0.875rem", color: "var(--muted-text)" }}>02 April 2026</span>
                <span style={{ fontSize: "0.75rem", fontWeight: 600, color: "var(--primary)", backgroundColor: "var(--muted-bg)", padding: "0.25rem 0.75rem", borderRadius: "999px", border: "1px solid var(--border-color)" }}>Press Note</span>
              </div>
              <h3 style={{ fontSize: "1.25rem", margin: 0 }}>
                <Link href="#">Quarterly Review of Major Case Resolutions</Link>
              </h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
