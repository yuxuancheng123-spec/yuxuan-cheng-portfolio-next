import type { CSSProperties } from "react";

/**
 * Letters resolve from blur to sharp, one after another. Pure CSS, so it also
 * renders on the server. Idea after React Bits' BlurText (reactbits.dev).
 */
export function BlurText({ text, step = 45, className }: { text: string; step?: number; className?: string }) {
  const chars = Array.from(text);
  const last = Math.max(chars.length - 1, 1);
  return (
    <span className={className} aria-label={text}>
      {chars.map((char, index) => (
        <span
          key={index}
          aria-hidden="true"
          className="yc-blur-char"
          style={
            {
              animationDelay: `${index * step}ms`,
              // Used by .yc-gradient-text: show this letter's slice of one shared gradient.
              backgroundSize: `${chars.length * 100}% 100%`,
              backgroundPosition: `${(index / last) * 100}% 0`,
            } as CSSProperties
          }
        >
          {char === " " ? " " : char}
        </span>
      ))}
    </span>
  );
}
