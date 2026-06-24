"use client";

import Link from "next/link";
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
      className="cc-section cc-section-calm"
      aria-labelledby="our-stand-heading"
    >
      <div className="cc-section-inner">
        <div className={`our-stand-reveal ${revealed ? "revealed" : ""}`}>
          <p className="cc-section-eyebrow our-stand-reveal-item our-stand-reveal-item-1">
            <span className="cc-hero-dot" aria-hidden />
            Our Stand
          </p>

          <div className="cc-stand-editorial">
            <div className="cc-stand-item our-stand-reveal-item our-stand-reveal-item-2">
              <h2 id="our-stand-heading" className="cc-stand-title">
                Three Profile System
              </h2>
              <p className="cc-stand-body">
                Anonymous
                <span className="cc-stand-dots" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                Friends &amp; Family
                <span className="cc-stand-dots" aria-hidden>
                  {" "}
                  ·{" "}
                </span>
                Professional
              </p>
            </div>

            <div className="cc-stand-item our-stand-reveal-item our-stand-reveal-item-3">
              <p className="cc-stand-title">Support that&apos;s real. And reachable.</p>
              <p className="cc-stand-body">
                Certified counsellors. Verified experts. Experienced advisors. Not
                algorithms pretending to care.
              </p>
              <p className="cc-stand-body">
                Quick questions. Private expression. Real conversations. Direct
                value exchange. You pay for clarity. Not noise.
              </p>
            </div>

            <div className="cc-stand-item our-stand-reveal-item our-stand-reveal-item-4">
              <p className="cc-stand-title">Social commerce, but verified.</p>
              <p className="cc-stand-body">
                Buy <span className="cc-stand-dots">·</span> Sell{" "}
                <span className="cc-stand-dots">·</span> Test{" "}
                <span className="cc-stand-dots">·</span> Launch — with real people,
                not fake stores or paid hype. Products, advice, and services from
                identities you can trust.
              </p>
            </div>

            <div className="cc-stand-item our-stand-reveal-item our-stand-reveal-item-5">
              <p className="cc-stand-moment">We don&apos;t do fake people.</p>
              <p className="cc-stand-body">
                No fake followers. No manufactured trust. No engagement farming. We
                don&apos;t boost lies with bots. No fake advertisement &amp; stores. We
                don&apos;t sell attention we didn&apos;t earn.
              </p>
            </div>

            <div className="cc-stand-item our-stand-reveal-item our-stand-reveal-item-6">
              <p className="cc-stand-title">Original content matters.</p>
              <p className="cc-stand-body">
                Real photos. Real videos. Real voices. If it&apos;s untouched, it&apos;s
                marked original. If it&apos;s verified, you know who it&apos;s from.
              </p>
              <p className="cc-stand-body">
                <Link href="/original-tag" className="cc-btn-ghost cc-stand-inline-link">
                  Learn about the Original Tag →
                </Link>
              </p>
            </div>

            <div className="cc-stand-promise our-stand-reveal-item our-stand-reveal-item-7">
              <p className="cc-stand-promise-body">
                AI-verified identities. Face authentication. One real human. One
                domain profile. If you&apos;re not real, you&apos;re not here.
              </p>
              <span className="cc-stand-promise-meta">Face → Verified → Domain Profile</span>
            </div>
          </div>

          <div className="cc-stand-closing our-stand-reveal-item our-stand-reveal-item-6">
            <p>Rarelm exists because the internet forgot what real looks like.</p>
            <p>So we built it back.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
