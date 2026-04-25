"use client";
import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import Image from "next/image";
import { X, ArrowRight, ChevronDown } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  desc: string;
  longDesc?: string;
  image?: string;
  prompt?: string;
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
  
  const [isOverlayOpen, setIsOverlayOpen] = useState(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const SPEED = 0.6; // px per frame — horizontal

    const tick = () => {
      if (!isPausedRef.current && track && !isOverlayOpen) {
        posRef.current += SPEED;
        const half = track.scrollWidth / 2;
        if (posRef.current >= half) posRef.current = 0;
        track.style.transform = `translateX(-${posRef.current}px)`;
      }
      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [isOverlayOpen]);

  // Handle body scroll lock
  useEffect(() => {
    if (isOverlayOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOverlayOpen]);

  const pause = () => { isPausedRef.current = true; };
  const resume = () => { isPausedRef.current = false; };

  // Triple items for seamless horizontal loop
  const all = [...items, ...items, ...items];

  return (
    <>
      <div
        className="h-auto-scroll-outer"
        onMouseEnter={pause}
        onMouseLeave={resume}
        aria-label={ariaLabel}
      >
        <div ref={trackRef} className="h-auto-scroll-track">
          {all.map((item, idx) => (
            <div
              key={idx}
              className={`h-auto-scroll-item ${item.active ? "active" : ""}`}
              onClick={() => setIsOverlayOpen(true)}
            >
              <div className="h-timeline-dot" />
              <div className="h-timeline-content">
                <p className="h-timeline-year">{item.year}</p>
                <h3 className="h-timeline-title">{item.title}</h3>
                <p className="h-timeline-sub">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full-Page Sequential Scroll Overlay */}
      <AnimatePresence>
        {isOverlayOpen && (
          <motion.div 
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="full-page-overlay"
          >
            <button className="overlay-close-btn" onClick={() => setIsOverlayOpen(false)}>
              <X size={24} /> <span>Close</span>
            </button>

            <div className="overlay-scroll-container">
              {/* Introduction Section */}
              <section className="overlay-intro">
                <motion.div 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="container"
                >
                  <p className="overlay-eyebrow">Dossier Journey</p>
                  <h1 className="overlay-main-title">Professional Evolution</h1>
                  <p className="overlay-main-desc">A sequential record of leadership, strategic oversight, and institutional transformation.</p>
                  <div className="scroll-indicator">
                    <ChevronDown size={24} />
                  </div>
                </motion.div>
              </section>

              {/* Milestone Sections */}
              {items.map((item, index) => (
                <section key={index} className="overlay-milestone-section">
                  <div className="container overlay-milestone-layout">
                    <motion.div 
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                      viewport={{ amount: 0.3 }}
                      className="overlay-image-side"
                    >
                      {item.image && (
                        <div className="overlay-img-box">
                          <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                        </div>
                      )}
                    </motion.div>

                    <motion.div 
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                      viewport={{ amount: 0.3 }}
                      className="overlay-content-side"
                    >
                      <span className="milestone-year">{item.year}</span>
                      <h2 className="milestone-title">{item.title}</h2>
                      <p className="milestone-prompt">"{item.prompt || 'Official Institutional Record'}"</p>
                      <div className="milestone-description">
                        {item.longDesc || item.desc}
                      </div>
                    </motion.div>
                  </div>
                </section>
              ))}

              <footer className="overlay-footer">
                <p>&copy; {new Date().getFullYear()} Tadasha Mishra. Official Institutional Profile.</p>
                <button className="btn-secondary" onClick={() => setIsOverlayOpen(false)}>Return to Profile</button>
              </footer>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
