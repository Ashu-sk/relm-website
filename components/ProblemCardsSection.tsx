"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const DESKTOP_TILT_DEG = 3;
const DESKTOP_LIFT_PX = 6;
const MOBILE_LIFT_PX = 3;
const MOBILE_TILT_DEG = 1.5;

const cards = [
  {
    title: "Identity",
    heading: "Fake identities",
    line: "Bots. Impersonation. Fake presence at scale.",
  },
  {
    title: "Emotional Safety",
    heading: "Emotional damage",
    line: "Fear of expression. Abuse amplified by anonymity.",
  },
  {
    title: "Trust & Reality",
    heading: "Scams & deepfakes",
    line: "Reality blurred. Trust exploited before verification.",
  },
  {
    title: "Access",
    heading: "Professionals inaccessible",
    line: "Real experts buried under noise and platforms.",
  },
] as const;

export default function ProblemCardsSection() {
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);
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
        next[index] = { x: MOBILE_TILT_DEG * 0.5, y: 0 };
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
      id="problem-cards"
      className="section-block section-padding-standard"
      aria-labelledby="problem-cards-heading"
    >
      <div className="section-container">
        <p
          id="problem-cards-heading"
          className="problem-cards-label text-center text-caption uppercase tracking-wide text-(--fg-tertiary)"
        >
          What&apos;s Broken
        </p>
        <div
          className="problem-cards-grid"
          style={{ perspective: "1000px" }}
        >
          {cards.map((card, index) => (
            <div
              key={card.title}
              ref={(el) => {
                cardRefs.current[index] = el;
              }}
              className={`problem-card ${hovered === index || pressed === index ? "is-interacting" : ""}`}
              role="article"
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
              <span className="problem-card-badge" aria-hidden>
                {card.title}
              </span>
              <h3 className="problem-card-heading">{card.heading}</h3>
              <p className="problem-card-line">{card.line}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
