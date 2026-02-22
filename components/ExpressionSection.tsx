"use client";

import { useEffect, useRef, useState } from "react";

export default function ExpressionSection() {
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
      id="expression"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="expression-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
        <div className={`expression-reveal ${revealed ? "revealed" : ""}`}>
          <p className="expression-reveal-item expression-reveal-item-1 text-caption uppercase tracking-wide text-(--fg-tertiary)">
            Fear of judgement
          </p>
          <h2
            id="expression-heading"
            className="expression-reveal-item expression-reveal-item-2 mt-2 text-display font-semibold"
          >
            Expression without fear.
          </h2>
          <p className="expression-reveal-item expression-reveal-item-3 mt-6 text-body leading-relaxed text-(--fg-secondary)">
            Verified when it matters. Anonymous when it&apos;s needed.
            <br />
            Choose how you show up — without losing trust.
          </p>
          <p className="expression-reveal-item expression-reveal-item-4 mt-6 text-headline font-semibold text-foreground">
            Confession rooms.
            <br />
            Private expression.
            <br />
            Human responses — not algorithms
          </p>
        </div>

        <div className="expression-toggle-visual mt-12 sm:mt-14" aria-hidden>
          <div className="expression-toggle">
            <span className="expression-toggle-label">Verified</span>
            <div className="expression-toggle-track">
              <div className="expression-toggle-thumb" />
            </div>
            <span className="expression-toggle-label">Anonymous</span>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
