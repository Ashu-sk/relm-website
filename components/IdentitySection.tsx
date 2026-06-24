"use client";

import { useEffect, useRef, useState } from "react";

export default function IdentitySection() {
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
      id="identity"
      ref={ref}
      className="cc-section cc-section-calm"
      aria-labelledby="identity-heading"
    >
      <div
        className={`cc-section-inner identity-reveal ${revealed ? "revealed" : ""}`}
      >
        <p className="cc-section-eyebrow identity-reveal-item identity-reveal-item-1">
          <span className="cc-hero-dot" aria-hidden />
          Identity
        </p>
        <div className="cc-identity-layout identity-reveal-item identity-reveal-item-2">
          <p className="cc-identity-stat" aria-hidden>
            50%+
          </p>
          <div className="cc-identity-copy">
            <h2 id="identity-heading">
              Fake identities broke the internet.
            </h2>
            <p className="cc-identity-sub">
              Over 50% of internet traffic is non-human.
              <br />
              Bots. Fake IDs. Impersonation.
            </p>
          </div>
        </div>
        <div className="cc-identity-callout identity-reveal-item identity-reveal-item-3">
          <p className="cc-identity-callout-title">One Human. One Account.</p>
          <p className="cc-identity-callout-body">
            AI-verified using facial authentication.
            <br />
            If you&apos;re not real, you&apos;re not here.
          </p>
        </div>
      </div>
    </section>
  );
}
