"use client";
import { useEffect } from "react";

export default function ScrollReveal() {
  useEffect(() => {
    // ── 1. Scroll-reveal for .reveal / .reveal-left ──────────────
    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            revealObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: "0px 0px -40px 0px" }
    );

    // ── 2. Timeline line fill animation ──────────────────────────
    const lineObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("line-visible");
            lineObserver.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    const init = () => {
      document.querySelectorAll<HTMLElement>(".reveal, .reveal-left").forEach((el) => {
        // Add hidden state via JS only (SSR always renders content visible)
        el.classList.add("reveal-ready");
        revealObserver.observe(el);
      });

      document.querySelectorAll<HTMLElement>(".v-timeline").forEach((el) => {
        lineObserver.observe(el);
      });
    };

    const timer = setTimeout(init, 60);

    return () => {
      clearTimeout(timer);
      revealObserver.disconnect();
      lineObserver.disconnect();
    };
  }, []);

  return null;
}
