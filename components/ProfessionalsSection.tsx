"use client";

import { useEffect, useRef, useState } from "react";

const BURIED_EXPERTS = [
  { role: "Self-proclaimed guru", title: "10x your life in 30 days" },
  { role: "Unverified coach", title: "Manifest your way out" },
  { role: "Random influencer", title: "Trust me, I went viral" },
] as const;

export default function ProfessionalsSection() {
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
      id="professionals"
      ref={ref}
      className="cc-section cc-section-calm"
      aria-labelledby="professionals-heading"
    >
      <div className="cc-section-inner">
        <div className={`professionals-reveal ${revealed ? "revealed" : ""}`}>
          <div className="cc-advice-layout">
            <div className="cc-advice-copy professionals-reveal-item professionals-reveal-item-1">
              <p className="cc-section-eyebrow">
                <span className="cc-hero-dot" aria-hidden />
                Professionals
              </p>
              <h2 id="professionals-heading">
                Good advice is buried under bad advice.
              </h2>
              <p className="cc-advice-sub">
                Experts are buried. Help is locked behind paywalls. High demand.
                Limited professional support.
              </p>
              <p className="cc-advice-sub">
                Certified counsellors. Verified experts. Experience advisors.
                Quick questions — in open and anonymous modes. 24/7 help, without
                friction.
              </p>
            </div>

            <div className="cc-advice-stack professionals-reveal-item professionals-reveal-item-2" aria-hidden>
              <div className="cc-advice-stack-deck">
                {BURIED_EXPERTS.map((card) => (
                  <div key={card.title} className="cc-advice-card cc-advice-card-buried">
                    <span className="cc-advice-card-role">{card.role}</span>
                    <span className="cc-advice-card-title">{card.title}</span>
                  </div>
                ))}
              </div>
              <div className="cc-advice-card cc-advice-card-verified">
                <span className="cc-advice-card-role">Verified expert</span>
                <span className="cc-advice-card-title">Real advice. Reachable.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
