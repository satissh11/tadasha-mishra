"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SLIDES = [
  {
    image: "/gallery/photo1.jpg",
    title: "Leadership in Strategic Policing",
    description: "Maintaining law and order through intelligence-driven strategies and institutional transparency.",
    cta: "View Service Record",
    link: "/service"
  },
  {
    image: "/gallery/photo6.jpg",
    title: "Statewide Operational Oversight",
    description: "Driving large-scale anti-crime operations and digital transformation in law enforcement.",
    cta: "Read Official Statements",
    link: "/writings"
  },
  {
    image: "/gallery/photo7.jpg",
    title: "Commitment to Public Safety",
    description: "Ensuring security and justice for the citizens of Jharkhand through dedicated service.",
    cta: "Connect With Us",
    link: "/contact"
  }
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const nextSlide = useCallback(() => {
    setCurrent((prev) => (prev + 1) % SLIDES.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrent((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [nextSlide, isPaused]);

  return (
    <section 
      className="hero-slider-container"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="hero-slide"
        >
          <Image
            src={SLIDES[current].image}
            alt={SLIDES[current].title}
            fill
            priority
            style={{ objectFit: "cover" }}
          />
          <div className="hero-slide-overlay" />
          
          <div className="hero-slide-content">
            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="hero-slide-title"
            >
              {SLIDES[current].title}
            </motion.h1>
            <motion.p 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="hero-slide-desc"
            >
              {SLIDES[current].description}
            </motion.p>
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <a href={SLIDES[current].link} className="btn-primary">
                {SLIDES[current].cta}
              </a>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Controls */}
      <button 
        className="hero-slider-arrow hero-slider-arrow-left" 
        onClick={prevSlide}
        aria-label="Previous slide"
      >
        <ChevronLeft size={24} />
      </button>
      <button 
        className="hero-slider-arrow hero-slider-arrow-right" 
        onClick={nextSlide}
        aria-label="Next slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots */}
      <div className="hero-slider-controls">
        {SLIDES.map((_, idx) => (
          <div
            key={idx}
            className={`hero-slider-dot ${idx === current ? "active" : ""}`}
            onClick={() => setCurrent(idx)}
          />
        ))}
      </div>
    </section>
  );
}
