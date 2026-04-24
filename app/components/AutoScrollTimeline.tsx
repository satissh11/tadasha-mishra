"use client";
import { useEffect, useRef } from "react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  active?: boolean;
}

interface Props {
  items: TimelineItem[];
  ariaLabel?: string;
}

export default function AutoScrollTimeline({ items, ariaLabel = "Timeline auto-scroll" }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const isPausedRef = useRef(false);
  const posRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.45; // px per frame — slow & readable

    const tick = () => {
      if (!isPausedRef.current && track) {
        posRef.current += SPEED;
        const half = track.scrollHeight / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateY(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  // Duplicate items for seamless vertical loop
  const all = [...items, ...items];

  return (
    <div
      className="auto-scroll-outer"
      onMouseEnter={pause}
      onMouseLeave={resume}
      aria-label={ariaLabel}
    >
      <div ref={trackRef} className="auto-scroll-track">
        {all.map((item, idx) => (
          <div
            key={idx}
            className={`auto-scroll-item v-timeline-item${item.active ? " active" : ""}`}
          >
            <div className="v-timeline-dot" />
            <p className="v-timeline-year">{item.year}</p>
            <p className="v-timeline-title">{item.title}</p>
            <p className="v-timeline-sub">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
