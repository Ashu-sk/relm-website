"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const SCROLL_PARALLAX_FACTOR = 0.018;
const SMOOTHING = 0.06;

export default function GlobalAtmosphere() {
  const scrollYRef = useRef(0);
  const currentRef = useRef(0);
  const rafRef = useRef<number | undefined>(undefined);
  const [parallaxY, setParallaxY] = useState(0);
  const reduceMotionRef = useRef(false);

  const onScroll = useCallback(() => {
    const w = globalThis.window;
    if (w === undefined || reduceMotionRef.current) return;
    scrollYRef.current = w.scrollY;
    rafRef.current ??= requestAnimationFrame(() => {
      rafRef.current = undefined;
      const target = scrollYRef.current * SCROLL_PARALLAX_FACTOR;
      currentRef.current += (target - currentRef.current) * SMOOTHING;
      setParallaxY(currentRef.current);
    });
  }, []);

  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => {
      reduceMotionRef.current = mq.matches;
      if (mq.matches) {
        currentRef.current = 0;
        setParallaxY(0);
      }
    };
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    if (globalThis.window === undefined) return;
    globalThis.window.addEventListener("scroll", onScroll, { passive: true });
    return () => globalThis.window.removeEventListener("scroll", onScroll);
  }, [onScroll]);

  return (
    <div
      className="global-atmosphere fixed inset-0 pointer-events-none"
      aria-hidden
      style={{ zIndex: -1 }}
    >
      {/* Base soft depth — static, matches existing layout gradient feel */}
      <div
        className="global-atmosphere-base absolute inset-0 opacity-100"
        style={{
          background: `
            radial-gradient(
              ellipse 80% 50% at 50% -20%,
              var(--glow-center),
              var(--glow-mid) 40%,
              var(--glow-edge) 70%
            ),
            radial-gradient(
              ellipse 60% 40% at 80% 100%,
              var(--glow-mid),
              var(--glow-edge) 60%
            ),
            radial-gradient(
              ellipse 50% 30% at 10% 80%,
              var(--glow-mid),
              var(--glow-edge) 55%
            )
          `,
        }}
      />

      {/* Layer 1 — very slow drift, scroll parallax */}
      <div
        className="global-atmosphere-layer global-atmosphere-layer-1"
        style={{
          transform: `translate3d(0, ${parallaxY}px, 0)`,
        }}
      >
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 90% 60% at 50% 30%, rgba(255,255,255,0.025) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Layer 2 — slow breathe only */}
      <div className="global-atmosphere-layer global-atmosphere-layer-2">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 70% 80% at 70% 70%, rgba(255,255,255,0.015) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Layer 3 — slow breathe, opposite phase */}
      <div className="global-atmosphere-layer global-atmosphere-layer-3">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 70% at 20% 20%, rgba(255,255,255,0.012) 0%, transparent 55%)",
          }}
        />
      </div>

      {/* Layer 4 — soft glass / liquid-metal abstract form, very slow drift */}
      <div className="global-atmosphere-layer global-atmosphere-layer-4">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 55% 55% at 40% 50%, rgba(255,255,255,0.028) 0%, rgba(255,255,255,0.008) 35%, transparent 60%)",
          }}
        />
      </div>

      {/* Edge falloff — subtle vignette so background feels alive */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 45%, rgba(0,0,0,0.12) 100%)",
        }}
      />
    </div>
  );
}
