import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Official Dashboard | Senior Law Enforcement Leader",
  description: "Maintaining law and order, operational oversight, and strategic policing leadership in Jharkhand.",
  openGraph: {
    title: "Official Dashboard | Senior Law Enforcement Leader",
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
    url: 'https://official-record.in', // Placeholder URL
  };

  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} fade-in`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <header className="navbar">
          <nav className="container nav-container" aria-label="Main Navigation">
            <div style={{ fontWeight: 600, letterSpacing: "0.05em" }}>
              <Link href="/" aria-label="Official Record Home">Tadasha Mishra</Link>
            </div>
            <div className="nav-links" role="menubar">
              <Link href="/" role="menuitem">Home</Link>
              <Link href="/about" role="menuitem">About</Link>
              <Link href="/service" role="menuitem">Service</Link>
              <Link href="/writings" role="menuitem">Writings</Link>
              <Link href="/gallery" role="menuitem">Gallery</Link>
              <Link href="/contact" role="menuitem">Contact</Link>
            </div>
          </nav>
        </header>
        {children}
        <footer role="contentinfo" style={{ backgroundColor: "lightgray", color: "#111111", padding: "2rem 0", marginTop: "6rem", fontSize: "0.875rem" }}>
          <div className="container" style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "2rem", alignItems: "center" }}>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <div style={{ fontSize: "0.75rem", letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 600, color: "#555" }}>
                Tadasha Mishra
              </div>
              <div style={{ fontFamily: "var(--font-playfair)", fontSize: "1.5rem", fontWeight: 600 }}>
                Director General of Police, Jharkhand
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem", color: "#333", fontSize: "0.875rem" }}>
              <div>Police Headquarters, Ranchi, Jharkhand</div>
              <div>office@tadashamishra.in</div>
              <div>&copy; {new Date().getFullYear()} Tadasha Mishra</div>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
