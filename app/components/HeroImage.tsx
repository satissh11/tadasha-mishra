"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

export default function HeroImage() {
  const [hovered, setHovered] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={wrapperRef}
      className={`hero-image-wrapper hero-img-interactive${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Portrait */}
      <Image
        src="/gallery/photo4.jpg"
        alt="Tadasha Mishra — Special Director General of Police, CID Jharkhand"
        fill
        sizes="(max-width: 768px) 100vw, 300px"
        style={{ objectFit: "cover", objectPosition: "center top" }}
        priority
        className="hero-portrait-img"
      />

      {/* Dark blur overlay */}
      <div className="hero-img-overlay" />

      {/* "Who is She" label */}
      <div className="hero-img-label" aria-hidden="true">
        <span className="hero-img-label-text">Who is She?</span>
      </div>

      {/* Glassmorphism info card */}
      <div className="hero-img-glass-card" role="complementary" aria-label="Profile summary">
        <p className="hero-img-glass-intro">
          IPS officer of the 1994 batch, Jharkhand cadre. Currently serving as
          Special DGP, CID — driving strategic law enforcement across the state.
        </p>
        <Link href="/about" className="hero-img-glass-btn">
          Read More
        </Link>
      </div>
    </div>
  );
}
