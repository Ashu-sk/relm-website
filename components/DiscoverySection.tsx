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
      className="cc-section cc-section-calm"
      aria-labelledby="discovery-heading"
    >
      <div className="cc-section-inner">
        <div className={`discovery-reveal ${revealed ? "revealed" : ""}`}>
          <p className="cc-section-eyebrow cc-section-eyebrow-center discovery-reveal-item discovery-reveal-item-1">
            <span className="cc-hero-dot" aria-hidden />
            Discovery
          </p>
          <h2
            id="discovery-heading"
            className="cc-section-h2 cc-section-h2-center discovery-reveal-item discovery-reveal-item-1"
          >
            Search people, not usernames.
          </h2>
          <p className="cc-hero-sub mx-auto max-w-lg text-center discovery-reveal-item discovery-reveal-item-2">
            Find real humans through trusted, domain-based searchable identities.
          </p>

          <div
            className="cc-discovery-search discovery-reveal-item discovery-reveal-item-3"
            aria-label="Example search results (illustration only)"
          >
            <div className="cc-discovery-search-bar">
              <span className="cc-discovery-search-icon" aria-hidden>
                ⌕
              </span>
              <span>Search Rarelm…</span>
            </div>
            <div className="cc-discovery-results">
              <div className="cc-discovery-result">
                <span className="cc-discovery-avatar cc-discovery-avatar-real" aria-hidden />
                <span className="cc-discovery-identity">
                  <span className="cc-discovery-domain">yourname.rarelm</span>
                </span>
                <span className="cc-discovery-badge">Verified</span>
              </div>
              <div className="cc-discovery-result cc-discovery-result-fake">
                <span className="cc-discovery-avatar" aria-hidden />
                <span className="cc-discovery-identity">
                  <span className="cc-discovery-handle">@xx_shadow_99</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
