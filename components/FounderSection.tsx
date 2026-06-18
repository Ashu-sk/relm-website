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
      className="rl-sec"
      aria-labelledby="founder-heading"
    >
      <div className="section-container">
      <div
        className={`founder-reveal mx-auto max-w-2xl text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="founder-heading"
          className="founder-reveal-item founder-reveal-item-1 text-display font-semibold"
        >
          Our Story
        </h2>
        <p className="founder-reveal-item founder-reveal-item-2 mt-6 rl-sh">
          Why Rarelm exists
        </p>

        <p className="founder-reveal-item founder-reveal-item-3 mt-8 rl-ss">
          Rarelm didn&apos;t start as a startup idea.
          <br />
          It started as a realization.
        </p>

        <p className="founder-reveal-item founder-reveal-item-4 mt-6 rl-ss">
          The internet gave us reach, speed, and scale —
          <br />
          but quietly took away trust, emotional safety, and authenticity.
        </p>

        <p className="founder-reveal-item founder-reveal-item-5 mt-6 rl-ss">
          People became afraid to express themselves.
          <br />
          Professionals struggled to be heard above noise.
          <br />
          Real humans competed with bots, deepfakes, and fake identities.
        </p>

        <p className="founder-reveal-item founder-reveal-item-6 mt-8 rl-sh">
          Rarelm is our response to that.
        </p>

        <p className="founder-reveal-item founder-reveal-item-7 mt-6 rl-ss">
          Not to build another social platform —
          <br />
          but to rebuild trust as the foundation.
        </p>
      </div>
      </div>
    </section>
  );
}
