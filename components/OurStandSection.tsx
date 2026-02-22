"use client";

import { useEffect, useRef, useState } from "react";

export default function OurStandSection() {
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
      id="our-stand"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="our-stand-heading"
    >
      <div className="section-container">
      <div
        className={`our-stand-reveal mx-auto max-w-2xl text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="our-stand-heading"
          className="our-stand-reveal-item our-stand-reveal-item-1 text-display font-semibold"
        >
          Our Stand
        </h2>
        <p className="our-stand-reveal-item our-stand-reveal-item-2 mt-4 text-headline font-semibold text-foreground">
          Three Profile System.
        </p>
        <p className="our-stand-reveal-item our-stand-reveal-item-2 our-stand-dots mt-2 text-body text-(--fg-secondary)">
          Anonymous
          {" "}
          <span className="our-stand-dot" aria-hidden>·</span>
          {" "}
          Friends &amp; Family
          {" "}
          <span className="our-stand-dot" aria-hidden>·</span>
          {" "}
          Professional
        </p>

        <div className="our-stand-reveal-item our-stand-reveal-item-3 our-stand-block mt-10">
          <p className="text-headline font-semibold text-foreground">
            Support that&apos;s real. And reachable.
          </p>
          <p className="mt-3 text-body leading-relaxed text-(--fg-secondary)">
            Certified Counsellors. Verified Experts. Experienced Advisors.
            <br />
            Not algorithms pretending to care.
          </p>
          <p className="mt-5 text-body leading-relaxed text-(--fg-secondary)">
            Quick questions. Private expression. Real conversations. Direct value exchange.
            <br />
            You pay for clarity. Not noise.
          </p>
          <p className="mt-6 text-headline font-semibold text-foreground">
            Social commerce, but verified.
          </p>
          <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
            <span className="our-stand-dots inline-block">
              Buy
              {" "}
              <span className="our-stand-dot" aria-hidden>·</span>
              {" "}
              Sell
              {" "}
              <span className="our-stand-dot" aria-hidden>·</span>
              {" "}
              Test
              {" "}
              <span className="our-stand-dot" aria-hidden>·</span>
              {" "}
              Launch
            </span>
            <br />
            With real people — not fake stores or paid hype. Products, advice, and services from identities you can trust.
          </p>
        </div>

        <div className="our-stand-reveal-item our-stand-reveal-item-4 our-stand-block mt-10">
          <p className="text-headline font-semibold text-foreground">
            We don&apos;t do fake people.
          </p>
          <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
            No fake followers. No manufactured trust.
            <br />
            No engagement farming.
            <br />
            We don&apos;t boost lies with bots.
            <br />
            No fake advertisement &amp; Stores.
            <br />
            We don&apos;t sell attention we didn&apos;t earn.
          </p>
        </div>

        <div className="our-stand-reveal-item our-stand-reveal-item-5 our-stand-block mt-10">
          <p className="text-headline font-semibold text-foreground">
            Original content matters.
          </p>
          <p className="mt-4 text-body leading-relaxed text-(--fg-secondary)">
            Real photos. Real videos. Real voices.
            <br />
            If it&apos;s untouched, it&apos;s marked original. If it&apos;s verified, you know who it&apos;s from.
          </p>
        </div>

        <div className="our-stand-reveal-item our-stand-reveal-item-6 our-stand-block mt-10">
          <p className="text-headline font-semibold text-foreground">
            Relm exists because the internet forgot what real looks like.
          </p>
          <p className="mt-3 text-headline font-semibold text-foreground">
            So we built it back.
          </p>
        </div>

        <div className="our-stand-reveal-item our-stand-reveal-item-7 our-stand-block mt-10">
          <p className="text-body leading-relaxed text-(--fg-secondary)">
            AI-verified identities. Face authentication. One real human. One domain profile.
            <br />
            If you&apos;re not real, you&apos;re not here.
          </p>
          <p className="mt-4 text-caption text-(--fg-tertiary)" aria-hidden>
            Face → Verified → Domain Profile
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
