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
      className="rl-sec"
      aria-labelledby="identity-heading"
    >
      <div
        className={`section-container identity-reveal max-w-2xl mx-auto text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="identity-heading"
          className="identity-reveal-item identity-reveal-item-1 rl-sh"
        >
          Fake identities broke the internet.
        </h2>
        <p className="identity-reveal-item identity-reveal-item-2 mt-6 rl-ss">
          Over 50% of internet traffic is non-human.
          <br />
          Bots. Fake IDs. Impersonation.
        </p>
        <p className="identity-reveal-item identity-reveal-item-3 mt-8 text-headline font-medium text-foreground">
          One Human. One Account.
        </p>
        <p className="identity-reveal-item identity-reveal-item-4 mt-5 rl-ss">
          AI-verified using facial authentication.
          <br />
          If you&apos;re not real, you&apos;re not here.
        </p>
      </div>
    </section>
  );
}
