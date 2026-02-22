"use client";

import { useEffect, useRef, useState } from "react";

export default function EngagementSection() {
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
      id="engagement"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="engagement-heading"
    >
      <div className="section-container">
        <div className="mx-auto max-w-2xl text-center">
        <div
          className={`engagement-reveal ${revealed ? "revealed" : ""}`}
        >
          <h2
            id="engagement-heading"
            className="engagement-reveal-item engagement-reveal-item-1 text-display font-semibold"
          >
            Engagement is broken.
          </h2>
          <p className="engagement-reveal-item engagement-reveal-item-2 mt-6 text-body leading-relaxed text-(--fg-secondary)">
            Multiple fake identities farm attention.
            <br />
            Algorithms reward noise over meaning.
          </p>
          <p className="engagement-reveal-item engagement-reveal-item-3 mt-8 text-headline font-semibold text-foreground">
            Engagement can&apos;t be multiplied.
            <br />
            What rises is real interest.
          </p>
        </div>

        <div className="engagement-line-wrap mt-12 sm:mt-14" aria-hidden>
          <svg
            className="engagement-line"
            viewBox="0 0 400 60"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              className="engagement-line-path"
              d="M0 35 Q100 15 200 35 T400 35"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              className="engagement-line-path engagement-line-path-2"
              d="M0 45 T100 25 T200 45 T300 25 T400 45"
              stroke="currentColor"
              strokeWidth="1"
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity="0.5"
            />
          </svg>
        </div>
      </div>
      </div>
    </section>
  );
}
