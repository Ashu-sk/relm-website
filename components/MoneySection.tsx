"use client";

import { useEffect, useRef, useState } from "react";

const BACKED_CHIPS = [
  { name: "maya.k" },
  { name: "devon.r" },
  { name: "voice.lab" },
] as const;

export default function MoneySection() {
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
      id="money"
      ref={ref}
      className="cc-section cc-backing"
      aria-labelledby="money-heading"
    >
      <div className="cc-backing-atmosphere" aria-hidden>
        <div className="cc-backing-glow-orange" />
        <div className="cc-backing-glow-blue" />
      </div>
      <div
        className={`cc-backing-inner money-reveal ${revealed ? "revealed" : ""}`}
      >
        <p className="cc-section-eyebrow cc-section-eyebrow-center money-reveal-item money-reveal-item-1">
          <span className="cc-hero-dot" aria-hidden />
          Backing
        </p>
        <h2 id="money-heading" className="cc-section-h2 cc-backing-h2 money-reveal-item money-reveal-item-1">
          Being Early Should Count
        </h2>
        <p className="cc-backing-line money-reveal-item money-reveal-item-2">
          You back the real ones early — and when they{" "}
          <span className="cc-backing-rise">rise</span>, you{" "}
          <span className="cc-backing-rise">rise</span> with them.
        </p>

        <div className="cc-backing-spark-wrap money-reveal-item money-reveal-item-3" aria-hidden>
          <div className="cc-backing-spark" />
        </div>

        <div className="cc-backing-chips money-reveal-item money-reveal-item-3">
          {BACKED_CHIPS.map((chip) => (
            <span key={chip.name} className="cc-backing-chip">
              <span>{chip.name} backed</span>
              <span className="cc-backing-chip-arrow" aria-hidden>
                →
              </span>
              <span className="cc-backing-chip-end">rose</span>
            </span>
          ))}
        </div>

        <div className="cc-backing-rem money-reveal-item money-reveal-item-4">
          <span className="cc-backing-rem-label">Rarelm Encrypted Money</span>
          <p className="cc-backing-rem-title">REM — Rarelm Encrypted Money.</p>
          <p className="cc-backing-rem-body">
            Micro-payments. Professional support. PageStock. Fair
            value exchange. Simple. Secure. Native.
          </p>
        </div>
      </div>
    </section>
  );
}
