import type { CSSProperties } from "react";

/**
 * Letters resolve from blur to sharp, one after another. Pure CSS, so it also
 * renders on the server. Idea after React Bits' BlurText (reactbits.dev).
 */
export function BlurText({ text, step = 45, className }: { text: string; step?: number; className?: string }) {
  return (
    <span className={className} aria-label={text}>
      {Array.from(text).map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="yc-blur-char"
          style={{ animationDelay: `${index * step}ms` } as CSSProperties}
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
