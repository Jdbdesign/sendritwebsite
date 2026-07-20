"use client";

import { useEffect, useRef } from "react";

const BASE = "#121019";

/** Attaches a mouse-following radial-gradient spotlight to each direct child card. */
export function useSpotlight<T extends HTMLElement = HTMLDivElement>() {
  const gridRef = useRef<T>(null);

  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const cards = Array.from(grid.children) as HTMLElement[];
    const cleanups: Array<() => void> = [];

    cards.forEach((card) => {
      const move = (ev: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const x = ev.clientX - r.left;
        const y = ev.clientY - r.top;
        card.style.background = `radial-gradient(240px circle at ${x}px ${y}px, rgba(139,92,246,0.16), transparent 68%), ${BASE}`;
      };
      const leave = () => {
        card.style.background = BASE;
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => cleanups.forEach((fn) => fn());
  }, []);

  return gridRef;
}
