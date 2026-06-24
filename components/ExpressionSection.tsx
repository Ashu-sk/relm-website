"use client";

import Link from "next/link";
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
      className="cc-section cc-section-calm cc-expression-soft"
      aria-labelledby="expression-heading"
    >
      <div className="cc-section-inner">
        <div className={`expression-reveal ${revealed ? "revealed" : ""}`}>
          <p className="cc-section-eyebrow cc-section-eyebrow-center expression-reveal-item expression-reveal-item-1">
            <span className="cc-hero-dot" aria-hidden />
            QAC
          </p>
          <h2
            id="expression-heading"
            className="cc-section-h2 cc-section-h2-center expression-reveal-item expression-reveal-item-2"
          >
            Say it. For real — or anonymously.
          </h2>
          <p className="cc-expression-sub expression-reveal-item expression-reveal-item-3">
            Verified when it matters. Anonymous when it&apos;s needed.
            <br />
            Choose how you show up — without losing trust.
          </p>

          <div className="cc-expression-panels expression-reveal-item expression-reveal-item-4">
            <div className="cc-expression-panel cc-expression-panel-verified">
              <span className="cc-expression-panel-label">Verified</span>
              <div className="cc-expression-avatar" aria-hidden />
              <p className="cc-expression-panel-copy">
                Speak openly. Your identity is proven.
              </p>
            </div>
            <div className="cc-expression-panel cc-expression-panel-anon">
              <span className="cc-expression-panel-label">Anonymous</span>
              <div className="cc-expression-avatar cc-expression-avatar-blur" aria-hidden />
              <p className="cc-expression-panel-copy">
                Say what you need to. Still backed by verification underneath.
              </p>
            </div>
          </div>

          <div className="cc-expression-link-wrap expression-reveal-item expression-reveal-item-4">
            <Link href="/qac" className="cc-btn-ghost">
              Learn about QAC →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
