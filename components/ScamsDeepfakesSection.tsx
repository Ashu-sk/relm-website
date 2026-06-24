"use client";

import { useEffect, useRef, useState } from "react";

const TRUST_STEPS = [
  { label: "Step 01", title: "Unverified noise" },
  { label: "Step 02", title: "Verified signal" },
  { label: "Step 03", title: "Value", isFinal: true },
] as const;

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
      className="cc-section cc-section-calm"
      aria-labelledby="scams-deepfakes-heading"
    >
      <div className="cc-section-inner">
        <div className={`trust-reveal ${revealed ? "revealed" : ""}`}>
          <p className="cc-section-eyebrow cc-section-eyebrow-center trust-reveal-item trust-reveal-item-1">
            <span className="cc-hero-dot" aria-hidden />
            Trust
          </p>
          <h2
            id="scams-deepfakes-heading"
            className="cc-section-h2 cc-section-h2-center trust-reveal-item trust-reveal-item-2"
          >
            Trust before transaction.
          </h2>
          <p className="cc-expression-sub trust-reveal-item trust-reveal-item-3">
            Billions lost yearly to social scams. Deepfakes blur reality. Fake
            sellers build fake trust fast.
            <br />
            <br />
            Value moves after identity is proven, not before.
          </p>

          <div
            className="cc-trust-flow trust-reveal-item trust-reveal-item-4"
            aria-label="Trust flow: noise to signal to value"
          >
            <div className="cc-trust-step">
              <span className="cc-trust-step-label">{TRUST_STEPS[0].label}</span>
              <span className="cc-trust-step-title">{TRUST_STEPS[0].title}</span>
            </div>
            <span className="cc-trust-connector" aria-hidden>
              —
            </span>
            <div className="cc-trust-step">
              <span className="cc-trust-step-label">{TRUST_STEPS[1].label}</span>
              <span className="cc-trust-step-title">{TRUST_STEPS[1].title}</span>
            </div>
            <span className="cc-trust-connector" aria-hidden>
              —
            </span>
            <div className="cc-trust-step cc-trust-step-final">
              <span className="cc-trust-step-label">{TRUST_STEPS[2].label}</span>
              <span className="cc-trust-step-title">{TRUST_STEPS[2].title}</span>
            </div>
          </div>

          <div className="cc-trust-rem trust-reveal-item trust-reveal-item-4">
            <span className="cc-trust-rem-label">Rarelm Encrypted Money</span>
            <p className="cc-trust-rem-body">
              REM — Rarelm Encrypted Money. Verified identities only.
              Domain-based profiles. Value that moves only after trust is proven.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
