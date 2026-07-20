"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { prefersReducedMotion } from "@/lib/reducedMotion";

function format(value: number, decimals: number, comma: boolean) {
  if (comma) {
    const n = decimals > 0 ? Number(value.toFixed(decimals)) : Math.round(value);
    return n.toLocaleString("en-US");
  }
  return decimals > 0 ? value.toFixed(decimals) : String(Math.round(value));
}

export default function CountUp({
  target,
  suffix = "",
  decimals = 0,
  comma = false,
  duration = 1500,
  threshold = 0.6,
  style,
  className,
}: {
  target: number;
  suffix?: string;
  decimals?: number;
  comma?: boolean;
  duration?: number;
  threshold?: number;
  style?: CSSProperties;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [display, setDisplay] = useState(() =>
    prefersReducedMotion() ? format(target, decimals, comma) : format(0, decimals, comma)
  );

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (prefersReducedMotion()) {
      setDisplay(format(target, decimals, comma));
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.unobserve(el);
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min(1, (now - start) / duration);
            const eased = 1 - Math.pow(1 - p, 3);
            setDisplay(format(target * eased, decimals, comma));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        });
      },
      { threshold }
    );
    io.observe(el);
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [target, duration, threshold]);

  return (
    <div ref={ref} style={style} className={className}>
      {display}
      {suffix}
    </div>
  );
}
