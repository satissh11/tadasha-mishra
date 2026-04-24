"use client";
import { useState } from "react";

interface GalleryCardProps {
  src: string;
  title: string;
  index: number;
}

export default function GalleryCard({ src, title, index }: GalleryCardProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`gallery-card-premium${hovered ? " hovered" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Image */}
      <img
        src={src}
        alt={title}
        className="gallery-card-img"
        loading={index < 4 ? "eager" : "lazy"}
      />

      {/* Dark overlay */}
      <div className="gallery-card-overlay" aria-hidden="true" />

      {/* Title badge at bottom — always faintly visible, sharpens on hover */}
      <div className="gallery-card-title-bar">
        <p className="gallery-card-title">{title}</p>
      </div>

      {/* Popup info on hover — slides from centre */}
      <div className="gallery-card-popup" aria-hidden={!hovered}>
        <p className="gallery-card-popup-label">📍 Official Record</p>
        <p className="gallery-card-popup-text">{title}</p>
      </div>
    </div>
  );
}
