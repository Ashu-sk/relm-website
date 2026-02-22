"use client";

import { useEffect, useRef, useState } from "react";

export default function ScamsDeepfakesSection() {
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
      id="scams-deepfakes"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="scams-deepfakes-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
        <div className={`trust-reveal ${revealed ? "revealed" : ""}`}>
          <p className="trust-reveal-item trust-reveal-item-1 text-caption uppercase tracking-wide text-(--fg-tertiary)">
            Trust first
          </p>
          <h2
            id="scams-deepfakes-heading"
            className="trust-reveal-item trust-reveal-item-2 mt-2 text-display font-semibold"
          >
            Trust before transaction.
          </h2>
          <p className="trust-reveal-item trust-reveal-item-3 mt-6 text-body leading-relaxed text-(--fg-secondary)">
            Billions lost yearly to social scams. Deepfakes blur reality. Fake sellers build fake trust fast.
            <br />
            <br />
            Value moves after identity is proven, not before.
          </p>
          <p className="trust-reveal-item trust-reveal-item-4 mt-6 text-headline font-semibold text-foreground">
            Unverified Noise → Verified Signal → Value Flow
            <br />
            <br />
            Verified identities only.
            <br />
            Domain-based profiles.
            <br />
            REM — Relm Encrypted Money
          </p>
        </div>

        <div className="trust-flow-visual mt-12 sm:mt-14" aria-hidden>
          <span className="trust-flow-node">Noise</span>
          <span className="trust-flow-arrow" aria-hidden>→</span>
          <span className="trust-flow-node">Signal</span>
          <span className="trust-flow-arrow" aria-hidden>→</span>
          <span className="trust-flow-node">Value</span>
        </div>
      </div>
      </div>
    </section>
  );
}
