"use client";

import { useEffect, useRef } from "react";

/** Reading progress bar plus scroll-spy for the side contents list on note pages. */
export function NoteReading({ ids }: { ids: string[] }) {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      barRef.current?.style.setProperty("--progress", String(progress));

      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.3) current = id;
      }
      document.querySelectorAll<HTMLAnchorElement>(".yc-side-toc a").forEach((link) => {
        link.classList.toggle("is-active", link.getAttribute("href") === `#${current}`);
      });
    };
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ids]);

  return <div ref={barRef} className="yc-progress" aria-hidden="true" />;
}
