"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const TILT_DEG = 2.5;
const LIFT_PX = 4;

const cards = [
  {
    heading: "AI-Verified Identities",
    line1: "One human. One account.",
    line2: "No bots. No impersonation.",
    line3: undefined as string | undefined,
  },
  {
    heading: "Anonymous Expression with Professional Support",
    line1: "Speak freely.",
    line2: "Get real help. 24/7.",
    line3: undefined as string | undefined,
  },
  {
    heading: "AI-Verified Sellers & In-App Commerce",
    line1: "Verified sellers.",
    line2: "In-app payments.",
    line3: "Native storefronts.",
  },
  {
    heading: "Professional Support, Always Available",
    line1: "Open & anonymous modes.",
    line2: "Quick questions. Real answers.",
    line3: "24/7.",
  },
] as const;

export default function SolutionCardsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [tilts, setTilts] = useState<Array<{ x: number; y: number }>>(
    () => cards.map(() => ({ x: 0, y: 0 }))
  );
  const [hovered, setHovered] = useState<number | null>(null);
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
    (index: number, e: React.MouseEvent<HTMLDivElement>) => {
      if (reduceMotionRef.current || !hasHoverRef.current) return;
      const el = cardRefs.current[index];
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      setTilts((prev) => {
        const next = [...prev];
        next[index] = {
          x: Math.max(-1, Math.min(1, y)) * TILT_DEG,
          y: Math.max(-1, Math.min(1, x)) * -TILT_DEG,
        };
        return next;
      });
    },
    []
  );

  const handleLeave = useCallback((index: number) => {
    setHovered(null);
    setTilts((prev) => {
      const next = [...prev];
      next[index] = { x: 0, y: 0 };
      return next;
    });
  }, []);

  const handleEnter = useCallback((index: number) => {
    setHovered(index);
  }, []);

  return (
    <section
      id="solution-cards"
      className="section-block section-padding-standard"
      aria-labelledby="solution-cards-heading"
    >
      <div className="section-container">
        <p
          id="solution-cards-heading"
          className="solution-cards-label text-center text-caption uppercase tracking-wide text-(--fg-tertiary)"
        >
          Solutions
        </p>
        <div
          className="solution-cards-grid"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, index) => (
            <div
              key={card.heading}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`solution-card ${hovered === index ? "solution-card-interacting" : ""}`}
              role="article"
              aria-label={card.heading}
              onMouseEnter={() => handleEnter(index)}
              onMouseLeave={() => handleLeave(index)}
              onMouseMove={(e) => handleMove(index, e)}
              style={{
                transform: (() => {
                  if (!allowMotion || !hasHover) return undefined;
                  const t = tilts[index];
                  const tilt = `rotateX(${t.x}deg) rotateY(${t.y}deg)`;
                  const lift = hovered === index ? LIFT_PX : 0;
                  return `translateY(-${lift}px) ${tilt}`;
                })(),
              }}
            >
              <h3 className="solution-card-heading">{card.heading}</h3>
              <p className="solution-card-line">{card.line1}</p>
              <p className="solution-card-line">{card.line2}</p>
              {card.line3 != null ? (
                <p className="solution-card-line">{card.line3}</p>
              ) : null}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
