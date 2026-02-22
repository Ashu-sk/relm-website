"use client";

import { useEffect, useRef, useState } from "react";

export default function MoneySection() {
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
      id="money"
      ref={ref}
      className="section-block section-padding-standard"
      aria-labelledby="money-heading"
    >
      <div className="section-container">
      <div
        className={`money-reveal mx-auto max-w-2xl text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="money-heading"
          className="money-reveal-item money-reveal-item-1 text-display font-semibold"
        >
          Value should compound, not disappear.
        </h2>
        <p className="money-reveal-item money-reveal-item-2 mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Pages build signal.
          <br />
          Signal builds value.
        </p>
        <div className="money-reveal-item money-reveal-item-3 mt-8 text-headline font-semibold text-foreground">
          <p>Pages and Contents Stocks like System.</p>
          <p className="mt-5">Free storefronts by default.</p>
          <p className="mt-5">Professionals 24/7.</p>
          <p className="mt-6 money-action-line">
            Buy
            {" "}
            <span className="money-dot-sep" aria-hidden>·</span>
            {" "}
            Sell
            {" "}
            <span className="money-dot-sep" aria-hidden>·</span>
            {" "}
            Test
            {" "}
            <span className="money-dot-sep" aria-hidden>·</span>
            {" "}
            Launch
          </p>
        </div>
        <div className="money-reveal-item money-reveal-item-4 mt-10 border-t border-(--fg-tertiary)/20 pt-8 text-left sm:text-center">
          <p className="text-title font-medium text-foreground">
            REM : Relm Encrypted Money.
          </p>
          <p className="mt-2 text-caption text-(--fg-secondary)">
            Built for:
          </p>
          <p className="mt-1 text-body leading-relaxed text-(--fg-secondary)">
            Micro-payments. Professional support. Page &amp; Content stock. Fair value exchange.
            <br />
            Simple. Secure. Native.
          </p>
        </div>
      </div>
      </div>
    </section>
  );
}
