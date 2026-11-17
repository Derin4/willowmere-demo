"use client";

import { useEffect, useRef, useState } from "react";

// Fills from zero when it scrolls into view.
export default function ProgressBar({
  pct,
  track = "bg-line",
  bar = "bg-forest",
  h = "h-2.5",
}) {
  const ref = useRef(null);
  const [on, setOn] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        setOn(true);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      className={`${h} overflow-hidden rounded-full ${track}`}
      role='progressbar'
      aria-valuenow={pct}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className={`h-full rounded-full transition-[width] duration-[1400ms] ease-out ${bar}`}
        style={{ width: on ? `${pct}%` : "0%" }}
      />
    </div>
  );
}
