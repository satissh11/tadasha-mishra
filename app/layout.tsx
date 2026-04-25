import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import NavbarScroll from "./components/NavbarScroll";
import ScrollReveal from "./components/ScrollReveal";
import ScrollProgress from "./components/ScrollProgress";
import { Send, Globe, Camera, Briefcase, Play } from "lucide-react";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter", display: "swap" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair", display: "swap" });

export const metadata: Metadata = {
  title: "Tadasha Mishra | Special DGP, CID Jharkhand",
  description: "Official institutional profile of Tadasha Mishra, Special Director General of Police, CID, Jharkhand — law enforcement leadership and public safety.",
  openGraph: {
    title: "Tadasha Mishra | Special DGP, CID Jharkhand",
    description: "Maintaining law and order, operational oversight, and strategic policing leadership in Jharkhand.",
    type: "profile",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'GovernmentOfficial',
    name: 'Tadasha Mishra',
    jobTitle: 'Special Director General of Police, CID',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Ranchi',
      addressRegion: 'Jharkhand',
      addressCountry: 'IN',
    },
    url: 'https://official-record.in',
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable}`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />

        {/* Scroll progress bar — fixed at very top */}
        <ScrollProgress />

        {/* ── Navbar: centered links only, no brand text ── */}
        <header className="navbar" id="site-navbar">
          {/* Saffron + navy gradient top accent bar */}
          <div style={{ height: "3px", background: "linear-gradient(90deg, var(--primary) 0%, var(--accent) 100%)" }} />
          <nav className="container nav-container" aria-label="Main Navigation">
            <div className="nav-links" role="menubar">
              <Link href="/"        role="menuitem">Home</Link>
              <Link href="/about"   role="menuitem">About</Link>
              <Link href="/service" role="menuitem">Service</Link>
              <Link href="/writings" role="menuitem">Writings</Link>
              <Link href="/gallery" role="menuitem">Gallery</Link>
              <Link href="/contact" role="menuitem">Contact</Link>
            </div>
          </nav>
        </header>

        <NavbarScroll />

        {/* Page content */}
        {children}

        {/* ── Footer: no nav links ── */}
        <footer className="site-footer" role="contentinfo">
          <div className="container">
            <div className="footer-top">
              <div>
                <div className="footer-brand-name">Tadasha Mishra</div>
                <div className="footer-brand-title">Special Director General of Police, DGP · Jharkhand</div>
                <div style={{ marginTop: "1.25rem" }}>
                  <div className="footer-contact-line">Police Headquarters, Dhurwa, Ranchi, Jharkhand 834004</div>
                  <div className="footer-contact-line">office@tadashamishra.in</div>
                </div>
              </div>

              {/* Connect With Us Section */}
              <div className="footer-connect">
                <div className="footer-brand-title" style={{ color: '#fff', fontSize: '0.75rem' }}>Connect With Us</div>
                <div className="social-links">
                  <Link href="#" className="social-icon" aria-label="Twitter X"><Send size={18} /></Link>
                  <Link href="#" className="social-icon" aria-label="Facebook"><Globe size={18} /></Link>
                  <Link href="#" className="social-icon" aria-label="Instagram"><Camera size={18} /></Link>
                  <Link href="#" className="social-icon" aria-label="LinkedIn"><Briefcase size={18} /></Link>
                  <Link href="#" className="social-icon" aria-label="YouTube"><Play size={18} /></Link>
                </div>
              </div>

              <div style={{ fontSize: "0.8rem", color: "rgba(255,255,255,0.45)", textAlign: "right", alignSelf: "flex-end" }}>
                <p style={{ margin: 0 }}>Official Institutional Profile</p>
                <p style={{ margin: 0 }}>Jharkhand Police</p>
              </div>
            </div>
            <div className="footer-bottom">
              <span>&copy; {new Date().getFullYear()} Tadasha Mishra. All rights reserved.</span>
              <span>For emergencies dial 112</span>
            </div>
          </div>
        </footer>

        <ScrollReveal />
      </body>
    </html>
  );
}
