"use client";

import { useEffect, useRef, useState } from "react";

export default function FounderSection() {
  const ref = useRef<HTMLDivElement>(null);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) setRevealed(true);
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="founder"
      ref={ref}
      className="cc-section cc-story"
      aria-labelledby="founder-heading"
    >
      <div className="cc-section-inner">
        <div className={`founder-reveal cc-story-column ${revealed ? "revealed" : ""}`}>
          <p className="cc-section-eyebrow founder-reveal-item founder-reveal-item-1">
            <span className="cc-hero-dot" aria-hidden />
            Our Story
          </p>
          <h2 id="founder-heading" className="cc-section-h2 founder-reveal-item founder-reveal-item-1">
            Why rarelm exists.
          </h2>
          <p className="cc-story-lead founder-reveal-item founder-reveal-item-2">
            Why Rarelm exists
          </p>

          <p className="cc-story-body founder-reveal-item founder-reveal-item-3">
            Rarelm didn&apos;t start as a startup idea.
            <br />
            It started as a realization.
          </p>

          <p className="cc-story-body founder-reveal-item founder-reveal-item-4">
            The internet gave us reach, speed, and scale —
            <br />
            but quietly took away trust, emotional safety, and authenticity.
          </p>

          <p className="cc-story-body founder-reveal-item founder-reveal-item-5">
            People became afraid to express themselves.
            <br />
            Professionals struggled to be heard above noise.
            <br />
            Real humans competed with bots, deepfakes, and fake identities.
          </p>

          <p className="cc-story-lead founder-reveal-item founder-reveal-item-6">
            Rarelm is our response to that.
          </p>

          <p className="cc-story-body founder-reveal-item founder-reveal-item-7">
            Not to build another social platform —
            <br />
            but to rebuild trust as the foundation.
          </p>
        </div>
      </div>
    </section>
  );
}
