"use client";

import { useEffect, useRef, useState } from "react";

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
      className="section-block section-padding-standard"
      aria-labelledby="professionals-heading"
    >
      <div className="section-container">
      <div
        className={`professionals-reveal mx-auto max-w-2xl text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="professionals-heading"
          className="professionals-reveal-item professionals-reveal-item-1 text-display font-semibold"
        >
          Real advice is hard to reach.
        </h2>
        <p className="professionals-reveal-item professionals-reveal-item-2 mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Experts are buried.
          <br />
          Help is locked behind paywalls.
          <br />
          <br />
          High demand. Limited professional support.
        </p>
        <p className="professionals-reveal-item professionals-reveal-item-3 mt-8 text-headline font-semibold text-foreground">
          Certified Counsellors.
          <br />
          Verified Experts.
          <br />
          Experience Advisors.
          <br />
          Quick Question.
          <br />
          Support in Open &amp; Anonymous modes.
        </p>
        <p className="professionals-reveal-item professionals-reveal-item-4 mt-8 text-headline font-semibold text-foreground">
          24/7 Help, without friction.
        </p>
      </div>
      </div>
    </section>
  );
}
