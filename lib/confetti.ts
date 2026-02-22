/**
 * Fires full-page confetti for ~3 seconds.
 * Call on successful form submission.
 */
export function fireConfetti() {
  if (typeof window === "undefined") return;

  import("canvas-confetti").then(({ default: confetti }) => {
    const duration = 3000;
    const interval = 250;
    const end = Date.now() + duration;

    const frame = () => {
      const timeLeft = end - Date.now();
      if (timeLeft <= 0) return;

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        particleCount: Math.min(particleCount, 80),
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#f5f5f7", "#a1a1a6", "#6e6e73", "#ffffff", "#e8e8ed"],
      });

      setTimeout(frame, interval);
    };

    frame();
  });
}
