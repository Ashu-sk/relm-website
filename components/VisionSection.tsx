"use client";

import { useEffect, useRef, useState } from "react";

export default function VisionSection() {
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
      id="vision"
      ref={ref}
      className="section-block section-padding-large"
      aria-labelledby="vision-heading"
    >
      <div className="section-container">
      <div
        className={`vision-reveal mx-auto max-w-2xl text-center ${revealed ? "revealed" : ""}`}
      >
        <h2
          id="vision-heading"
          className="vision-reveal-item vision-reveal-item-1 text-display font-semibold"
        >
          Vision
        </h2>
        <p className="vision-reveal-item vision-reveal-item-2 mt-4 text-headline font-semibold text-foreground">
          Built for what&apos;s next
        </p>

        <p className="vision-reveal-item vision-reveal-item-3 mt-6 text-body leading-relaxed text-(--fg-secondary)">
          Relm moves beyond flat feeds and endless scrolling.
          <br />
          It evolves into immersive, spatial social spaces where presence matters more than posts.
        </p>

        <div className="vision-reveal-item vision-reveal-item-4 vision-block mt-10">
          <p className="text-headline font-semibold text-foreground">
            Human-resembled avatars.
          </p>
          <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
            Not characters. Not filters. Digital bodies that reflect real people.
          </p>
        </div>

        <div className="vision-reveal-item vision-reveal-item-5 vision-block mt-8">
          <p className="text-headline font-semibold text-foreground">
            Spatial presence.
          </p>
          <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
            You don&apos;t scroll through conversations. You enter them.
            <br />
            You meet. You explore. You share space.
          </p>
        </div>

        <div className="vision-reveal-item vision-reveal-item-6 vision-block mt-8">
          <p className="text-headline font-semibold text-foreground">
            Less scrolling. More being there.
          </p>
          <p className="mt-2 text-body leading-relaxed text-(--fg-secondary)">
            Interaction becomes natural. Attention becomes intentional. Time feels spent — not wasted.
          </p>
        </div>

        <p className="vision-reveal-item vision-reveal-item-7 mt-10 text-body leading-relaxed text-(--fg-secondary)">
          Relm isn&apos;t building a virtual world for escape. It&apos;s building a social layer for reality.
          <br />
          A place where identity, trust, and value carry forward into immersive environments.
        </p>

        <p className="vision-reveal-item vision-reveal-item-8 mt-8 text-headline font-semibold text-foreground">
          What starts as verified social interaction evolves into spatial computing for real humans.
        </p>
      </div>
      </div>
    </section>
  );
}
