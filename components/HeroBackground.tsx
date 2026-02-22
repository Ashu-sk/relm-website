"use client";

import { useCallback, useEffect, useRef, useState } from "react";

const MAX_OFFSET = 10;
const PARALLAX_FACTORS = [0.25, 0.5, 0.75, 1] as const;

export default function HeroBackground() {
  const ref = useRef<HTMLDivElement>(null);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const rafRef = useRef<number | undefined>(undefined);
  const targetRef = useRef({ x: 0, y: 0 });
  const reduceMotionRef = useRef(false);

  const onMove = useCallback((e: MouseEvent) => {
    if (reduceMotionRef.current) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const normX = (e.clientX - centerX) / (rect.width / 2);
    const normY = (e.clientY - centerY) / (rect.height / 2);
    targetRef.current = {
      x: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, normX * MAX_OFFSET)),
      y: Math.max(-MAX_OFFSET, Math.min(MAX_OFFSET, normY * MAX_OFFSET)),
    };
    rafRef.current ??= requestAnimationFrame(() => {
      rafRef.current = undefined;
      setOffset({ ...targetRef.current });
    });
  }, []);

  useEffect(() => {
    const mq = globalThis.matchMedia("(prefers-reduced-motion: reduce)");
    const handler = () => {
      reduceMotionRef.current = mq.matches;
      if (mq.matches) setOffset({ x: 0, y: 0 });
    };
    handler();
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const controller = new AbortController();
    el.addEventListener("mousemove", onMove, { passive: true, signal: controller.signal });
    return () => {
      controller.abort();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [onMove]);

  return (
    <div
      ref={ref}
      className="absolute inset-0 overflow-hidden rounded-none"
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{ background: "var(--bg-base)" }}
      />
      {[
        {
          float: "hero-mesh-float-a",
          style: {
            left: "10%",
            top: "15%",
            width: "70%",
            height: "70%",
            background:
              "radial-gradient(ellipse 70% 70% at 50% 50%, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 45%, transparent 70%)",
          },
        },
        {
          float: "hero-mesh-float-b",
          style: {
            right: "5%",
            bottom: "20%",
            width: "60%",
            height: "60%",
            background:
              "radial-gradient(ellipse 60% 60% at 50% 50%, rgba(255,255,255,0.03) 0%, transparent 60%)",
          },
        },
        {
          float: "hero-mesh-float-c",
          style: {
            left: "30%",
            bottom: "10%",
            width: "50%",
            height: "50%",
            background:
              "radial-gradient(ellipse 50% 50% at 50% 50%, rgba(255,255,255,0.025) 0%, transparent 55%)",
          },
        },
        {
          float: "hero-mesh-float-d",
          style: {
            right: "25%",
            top: "25%",
            width: "55%",
            height: "55%",
            background:
              "radial-gradient(ellipse 55% 55% at 50% 50%, rgba(255,255,255,0.02) 0%, transparent 65%)",
          },
        },
      ].map((layer, i) => {
        const factor = PARALLAX_FACTORS[i];
        const px = offset.x * factor;
        const py = offset.y * factor;
        return (
          <div
            key={layer.float}
            className="absolute inset-0"
            style={{
              transform: `translate3d(${px}px, ${py}px, 0)`,
              transition: "transform 0.5s cubic-bezier(0.25, 0.1, 0.25, 1)",
            }}
          >
            <div
              className={`hero-mesh-layer ${layer.float}`}
              style={layer.style}
            />
          </div>
        );
      })}
    </div>
  );
}
