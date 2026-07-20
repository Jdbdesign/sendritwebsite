"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/reducedMotion";

/**
 * Pointer-driven 3D tilt: `containerRef` (the mouse-tracking area) gets
 * perspective and listeners, `targetRef` (the card) gets the rotation.
 */
export function useTilt<
  C extends HTMLElement = HTMLDivElement,
  T extends HTMLElement = HTMLDivElement,
>() {
  const containerRef = useRef<C>(null);
  const targetRef = useRef<T>(null);

  useEffect(() => {
    const container = containerRef.current;
    const target = targetRef.current;
    if (!container || !target || prefersReducedMotion()) return;

    container.style.perspective = "1500px";
    let raf: number | null = null;

    const move = (ev: MouseEvent) => {
      const r = target.getBoundingClientRect();
      const px = (ev.clientX - r.left) / r.width - 0.5;
      const py = (ev.clientY - r.top) / r.height - 0.5;
      if (raf) cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        target.style.transition = "transform .18s cubic-bezier(.16,1,.3,1)";
        target.style.transform = `rotateY(${(px * 5).toFixed(2)}deg) rotateX(${(-py * 5).toFixed(2)}deg) translateY(-2px)`;
      });
    };
    const leave = () => {
      target.style.transition = "transform .5s cubic-bezier(.16,1,.3,1)";
      target.style.transform = "rotateY(0deg) rotateX(0deg)";
    };

    container.addEventListener("mousemove", move);
    container.addEventListener("mouseleave", leave);
    return () => {
      container.removeEventListener("mousemove", move);
      container.removeEventListener("mouseleave", leave);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return { containerRef, targetRef };
}
