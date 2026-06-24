"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP_TILT_DEG = 3;
const DESKTOP_LIFT_PX = 6;
const MOBILE_LIFT_PX = 3;
const MOBILE_TILT_DEG = 1.5;

const cards = [
  {
    heading: "AI-Verified Identities",
    line: "One human. One account. No fake presence.",
  },
  {
    heading: "Domain-Based Profiles",
    line: "Your identity lives at your own domain — not a disposable handle.",
  },
  {
    heading: "Anonymous Expression, Safely",
    line: "Speak freely. Stay anonymous. Still verified underneath.",
  },
  {
    heading: "Professionals, Not Influencers",
    line: "Advice comes from real experience — not popularity.",
  },
  {
    heading: "In-App Commerce You Can Trust",
    line: "Verified sellers. In-app payments. Native storefronts.",
  },
  {
    heading: "RARELM Encrypted Money",
    line: "Value moves only after trust is proven.",
    isRem: true,
  },
] as const;

export default function USPCardsSection() {
  const cardRefs = useRef<(HTMLElement | null)[]>([]);
  const [tilts, setTilts] = useState<Array<{ x: number; y: number }>>(
    () => cards.map(() => ({ x: 0, y: 0 }))
  );
  const [hovered, setHovered] = useState<number | null>(null);
  const [pressed, setPressed] = useState<number | null>(null);
  const reduceMotionRef = useRef(false);
  const hasHoverRef = useRef(true);
  const [allowMotion, setAllowMotion] = useState(true);
  const [hasHover, setHasHover] = useState(true);

  useEffect(() => {
    const mqMotion = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const mqHover = globalThis.matchMedia("(hover: hover)");
    reduceMotionRef.current = mqMotion.matches;
    hasHoverRef.current = mqHover.matches;
    queueMicrotask(() => {
      setAllowMotion(!mqMotion.matches);
      setHasHover(mqHover.matches);
    });
    const onMotion = () => {
      reduceMotionRef.current = mqMotion.matches;
      setAllowMotion(!mqMotion.matches);
    };
    const onHover = () => {
      hasHoverRef.current = mqHover.matches;
      setHasHover(mqHover.matches);
    };
    mqMotion.addEventListener("change", onMotion);
    mqHover.addEventListener("change", onHover);
    return () => {
      mqMotion.removeEventListener("change", onMotion);
      mqHover.removeEventListener("change", onHover);
    };
  }, []);

  const handleMove = useCallback(
    (index: number, e: React.MouseEvent<HTMLElement>) => {
      if (reduceMotionRef.current || !hasHoverRef.current) return;
      const el = cardRefs.current[index];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilts((prev) => {
        const next = [...prev];
        next[index] = {
          x: Math.max(-1, Math.min(1, y)) * DESKTOP_TILT_DEG,
          y: Math.max(-1, Math.min(1, x)) * -DESKTOP_TILT_DEG,
        };
        return next;
      });
    },
    []
  );

  const handleLeave = useCallback((index: number) => {
    setHovered(null);
    setPressed(null);
    setTilts((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  }, []);

  const handleEnter = useCallback((index: number) => {
    setHovered(index);
  }, []);

  const handleTouchStart = useCallback(
    (index: number) => {
      if (!allowMotion || hasHover) return;
      setPressed(index);
      setTilts((prev) => {
        const next = [...prev];
        next[index] = { x: MOBILE_TILT_DEG, y: 0 };
        return next;
      });
    },
    [allowMotion, hasHover]
  );

  const handleTouchEnd = useCallback((index: number) => {
    setPressed(null);
    setTilts((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  }, []);

  return (
    <section
      id="usp-cards"
      className="cc-section cc-section-calm"
      aria-labelledby="usp-cards-heading"
    >
      <div className="cc-section-inner">
        <p className="cc-section-eyebrow">
          <span className="cc-hero-dot" aria-hidden />
          What Makes Rarelm Different
        </p>
        <h2 id="usp-cards-heading" className="cc-section-h2">
          Built for trust. Designed for actual humans.
        </h2>
        <div className="cc-usp-grid" style={{ perspective: "1000px" }}>
          {cards.map((card, index) => (
            <article
              key={card.heading}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`cc-usp-card usp-card ${
                "isRem" in card && card.isRem ? "cc-usp-card-rem" : ""
              } ${hovered === index || pressed === index ? "usp-card-interacting" : ""}`}
              aria-label={card.heading}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              onMouseMove={(e) => handleMove(index, e)}
              onTouchStart={() => handleTouchStart(index)}
              onTouchEnd={() => handleTouchEnd(index)}
              onTouchCancel={() => handleTouchEnd(index)}
              style={{
                transform: (() => {
                  if (!allowMotion) return undefined;
                  const t = tilts[index];
                  const tilt = `rotateX(${t.x}deg) rotateY(${t.y}deg)`;
                  if (hasHover) {
                    const lift = hovered === index ? DESKTOP_LIFT_PX : 0;
                    return `translateY(-${lift}px) ${tilt}`;
                  }
                  const lift = pressed === index ? MOBILE_LIFT_PX : 0;
                  return `translateY(-${lift}px) ${tilt}`;
                })(),
              }}
            >
              <h3 className="cc-usp-card-heading">{card.heading}</h3>
              <p className="cc-usp-card-line">{card.line}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

