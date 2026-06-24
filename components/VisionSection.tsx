"use client";

import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
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
      id="vision"
      ref={ref}
      className="cc-vision"
      aria-labelledby="vision-heading"
    >
      <div className="cc-vision-glow" aria-hidden>
        <div className="cc-vision-glow-blue" />
      </div>
      <div
        className={`cc-vision-inner vision-reveal ${revealed ? "revealed" : ""}`}
      >
        <p className="cc-section-eyebrow cc-section-eyebrow-center vision-reveal-item vision-reveal-item-1">
          <span className="cc-hero-dot" aria-hidden />
          Vision
        </p>
        <h2 id="vision-heading" className="cc-vision-h2 vision-reveal-item vision-reveal-item-1">
          This isn&apos;t the final form.
        </h2>
        <p className="cc-vision-intro vision-reveal-item vision-reveal-item-2">
          Rarelm moves beyond flat feeds and endless scrolling. It evolves into
          immersive, spatial social spaces where presence matters more than posts.
        </p>

        <div className="cc-vision-rows vision-reveal-item vision-reveal-item-3">
          <div className="cc-vision-row">
            <p className="cc-vision-row-title">Human-resembled avatars.</p>
            <p className="cc-vision-row-body">
              Not characters. Not filters. Digital bodies that reflect real people.
            </p>
          </div>
          <div className="cc-vision-row">
            <p className="cc-vision-row-title">Spatial presence.</p>
            <p className="cc-vision-row-body">
              You don&apos;t scroll through conversations. You enter them. You meet.
              You explore. You share space.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
