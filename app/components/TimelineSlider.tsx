"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useAnimationControls } from "framer-motion";

const TIMELINE_ITEMS = [
  { year: "2020 – Present", title: "Special Director General of Police, CID", loc: "Ranchi, Jharkhand", accent: true },
  { year: "2015 – 2020",    title: "Additional Director General of Police",   loc: "Jharkhand",        accent: false },
  { year: "2008 – 2015",    title: "Inspector General of Police",              loc: "Various Ranges, Jharkhand", accent: false },
  { year: "2005 – 2008",    title: "Deputy Inspector General",                 loc: "Jharkhand",        accent: false },
  { year: "1994 – 2005",    title: "Superintendent of Police",                 loc: "Multiple Districts", accent: false },
];

export default function TimelineSlider() {
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const trackRef = useRef<HTMLDivElement>(null);
  const scrollPosRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  // Duplicate items for infinite loop feel
  const allItems = [...TIMELINE_ITEMS, ...TIMELINE_ITEMS, ...TIMELINE_ITEMS];

  const animate = useCallback(() => {
    if (!trackRef.current || isDragging) return;

    const speed = isHovered ? 0.2 : 0.8; // Slow down on hover
    scrollPosRef.current += speed;

    const maxScroll = trackRef.current.scrollWidth / 3;
    if (scrollPosRef.current >= maxScroll) {
      scrollPosRef.current = 0;
    }

    trackRef.current.scrollLeft = scrollPosRef.current;
    rafRef.current = requestAnimationFrame(animate);
  }, [isDragging, isHovered]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setStartX(e.pageX - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(trackRef.current?.scrollLeft || 0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
    scrollPosRef.current = trackRef.current?.scrollLeft || 0;
    rafRef.current = requestAnimationFrame(animate);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !trackRef.current) return;
    e.preventDefault();
    const x = e.pageX - trackRef.current.offsetLeft;
    const walk = (x - startX) * 2;
    trackRef.current.scrollLeft = scrollLeft - walk;
  };

  // Touch handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    setIsDragging(true);
    setStartX(e.touches[0].pageX - (trackRef.current?.offsetLeft || 0));
    setScrollLeft(trackRef.current?.scrollLeft || 0);
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
  };

  return (
    <div 
      className="timeline-slider-outer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        handleMouseLeaveOrUp();
      }}
    >
      <div 
        ref={trackRef}
        className="timeline-slider-track marquee-container"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseLeaveOrUp}
        onMouseMove={handleMouseMove}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleMouseLeaveOrUp}
        onTouchMove={(e) => {
          if (!isDragging || !trackRef.current) return;
          const x = e.touches[0].pageX - trackRef.current.offsetLeft;
          const walk = (x - startX) * 2;
          trackRef.current.scrollLeft = scrollLeft - walk;
        }}
        style={{ overflowX: 'hidden', display: 'flex', gap: '2rem' }}
      >
        {allItems.map((item, idx) => (
          <div 
            key={idx} 
            className={`timeline-pill ${item.accent ? "timeline-pill-accent" : "timeline-pill-muted"}`}
            style={{ flexShrink: 0 }}
          >
            <span style={{ fontSize: "0.8rem", fontWeight: 700, color: item.accent ? "var(--accent)" : "var(--muted-text)", display: "block", marginBottom: "0.4rem" }}>
              {item.year}
            </span>
            <h3 style={{ fontSize: "1.05rem", margin: "0 0 0.25rem", color: "var(--primary)" }}>{item.title}</h3>
            <p style={{ margin: 0, fontSize: "0.85rem", color: "var(--muted-text)" }}>{item.loc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
