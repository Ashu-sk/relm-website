"use client";

import { useEffect, useRef, useState } from "react";

export default function DiscoverySection() {
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
      id="discovery"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="discovery-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
        <div className={`discovery-reveal ${revealed ? "revealed" : ""}`}>
          <h2
            id="discovery-heading"
            className="discovery-reveal-item discovery-reveal-item-1 text-display font-semibold"
          >
            Search people, not usernames.
          </h2>
          <p className="discovery-reveal-item discovery-reveal-item-2 mt-6 text-body leading-relaxed text-(--fg-secondary)">
            Find real humans through trusted, Domain based searchable identities.
          </p>
          <p className="discovery-reveal-item discovery-reveal-item-3 mt-6 text-headline font-semibold text-foreground">
            Presence over profiles.
          </p>
        </div>

        <div className="discovery-visual mt-12 sm:mt-14" aria-hidden>
          <svg
            className="discovery-visual-svg"
            viewBox="0 0 280 100"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Face (circle) + search cue */}
            <circle
              className="discovery-face"
              cx="70"
              cy="50"
              r="28"
              stroke="currentColor"
              strokeWidth="1.5"
              fill="none"
            />
            <circle
              cx="88"
              cy="32"
              r="12"
              stroke="currentColor"
              strokeWidth="1"
              fill="none"
              opacity="0.6"
            />
            <line
              x1="96"
              y1="40"
              x2="102"
              y2="46"
              stroke="currentColor"
              strokeWidth="1"
              opacity="0.6"
            />
            {/* Arrow / flow */}
            <path
              className="discovery-arrow"
              d="M110 50 H165 M160 45 L165 50 L160 55"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              fill="none"
            />
            {/* Profile card (reveal) */}
            <g className="discovery-profile">
              <rect
                x="185"
                y="22"
                width="95"
                height="56"
                rx="6"
                stroke="currentColor"
                strokeWidth="1.5"
                fill="none"
              />
              <circle cx="210" cy="38" r="8" stroke="currentColor" strokeWidth="1" fill="none" opacity="0.8" />
              <line x1="225" y1="36" x2="265" y2="36" stroke="currentColor" strokeWidth="1" opacity="0.6" />
              <line x1="225" y1="44" x2="255" y2="44" stroke="currentColor" strokeWidth="1" opacity="0.4" />
            </g>
          </svg>
        </div>
      </div>
      </div>
    </section>
  );
}
