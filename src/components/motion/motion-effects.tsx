"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * Site-wide motion helpers, driven by data attributes so pages stay server components.
 * - [data-reveal]: fades in when it scrolls into view (after React Bits' FadeContent).
 * - [data-spotlight] and .yc-card: a soft light follows the pointer (after React Bits' SpotlightCard).
 * CSS in globals.css turns all of this off for visitors who prefer reduced motion.
 */
export function MotionEffects() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add("motion-ready");
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]:not(.is-revealed)"));
    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-revealed"));
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 },
    );
    targets.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    const onMove = (event: PointerEvent) => {
      const target = (event.target as Element | null)?.closest<HTMLElement>("[data-spotlight], .yc-card");
      if (!target) return;
      const rect = target.getBoundingClientRect();
      target.style.setProperty("--spot-x", `${event.clientX - rect.left}px`);
      target.style.setProperty("--spot-y", `${event.clientY - rect.top}px`);
    };
    document.addEventListener("pointermove", onMove, { passive: true });
    return () => document.removeEventListener("pointermove", onMove);
  }, []);

  return null;
}
