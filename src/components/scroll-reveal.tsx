"use client";

import { useEffect } from "react";

// Content stays visible without JavaScript and for reduced-motion users.
export function ScrollReveal() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const setup = () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
      if (preference.matches || !("IntersectionObserver" in window)) return;
      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          const animation = entry.target.animate(
            [{ opacity: 0.65, transform: "translateY(10px)" }, { opacity: 1, transform: "none" }],
            { duration: 350, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
          );
          animations.add(animation);
          animation.onfinish = () => animations.delete(animation);
        });
      }, { threshold: 0.05 });
      document.querySelectorAll("main > section").forEach((section) => {
        if (section.getBoundingClientRect().top >= window.innerHeight) observer?.observe(section);
      });
    };
    setup();
    preference.addEventListener("change", setup);
    return () => {
      observer?.disconnect();
      animations.forEach((animation) => animation.cancel());
      preference.removeEventListener("change", setup);
    };
  }, []);
  return null;
}
