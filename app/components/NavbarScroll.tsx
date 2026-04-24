"use client";
import { useEffect } from "react";

export default function NavbarScroll() {
  useEffect(() => {
    const navbar = document.getElementById("site-navbar");
    if (!navbar) return;

    const onScroll = () => {
      if (window.scrollY > 40) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run once on mount
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return null;
}
