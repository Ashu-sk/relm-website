"use client";

import { useEffect, useRef, useState } from "react";

const FAKE_NODES = [
  { cx: 72, cy: 48 },
  { cx: 108, cy: 72 },
  { cx: 144, cy: 40 },
  { cx: 180, cy: 64 },
  { cx: 216, cy: 36 },
  { cx: 252, cy: 56 },
  { cx: 288, cy: 44 },
  { cx: 90, cy: 108 },
  { cx: 126, cy: 132 },
  { cx: 162, cy: 116 },
  { cx: 198, cy: 140 },
  { cx: 234, cy: 120 },
] as const;

export default function EngagementSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      { threshold: 0.2, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="engagement"
      ref={ref}
      className="cc-section cc-section-calm"
      aria-labelledby="engagement-heading"
    >
      <div className="cc-section-inner">
        <div className={`engagement-reveal ${revealed ? "revealed" : ""}`}>
          <div className="cc-engagement-split">
            <div className="cc-engagement-copy engagement-reveal-item engagement-reveal-item-1">
              <p className="cc-section-eyebrow">
                <span className="cc-hero-dot" aria-hidden />
                Engagement
              </p>
              <h2 id="engagement-heading">Engagement is broken.</h2>
              <p className="cc-engagement-sub">
                Multiple fake identities farm attention.
                <br />
                Algorithms reward noise over meaning.
              </p>
            </div>

            <div
              className="cc-engagement-visual engagement-reveal-item engagement-reveal-item-2"
              aria-hidden
            >
              <svg
                className="cc-engagement-svg"
                viewBox="0 0 320 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="72"
                  y2="48"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="108"
                  y2="72"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="144"
                  y2="40"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="180"
                  y2="64"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="216"
                  y2="36"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="252"
                  y2="56"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="288"
                  y2="44"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="90"
                  y2="108"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="126"
                  y2="132"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="162"
                  y2="116"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="198"
                  y2="140"
                />
                <line
                  className="cc-engagement-link"
                  x1="36"
                  y1="90"
                  x2="234"
                  y2="120"
                />
                <circle className="cc-engagement-node-real" cx="36" cy="90" r="14" />
                <text className="cc-engagement-node-label" x="36" y="94" textAnchor="middle">
                  real
                </text>
                {FAKE_NODES.map((node, i) => (
                  <circle
                    key={`${node.cx}-${node.cy}-${i}`}
                    className="cc-engagement-node"
                    cx={node.cx}
                    cy={node.cy}
                    r="10"
                  />
                ))}
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
