"use client";

import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "@/lib/reducedMotion";

/** Runs `callback` every `intervalMs`, pausing while the pointer is over the returned ref's element. */
export function useAutoplay<T extends HTMLElement = HTMLDivElement>(
  callback: () => void,
  intervalMs: number
) {
  const containerRef = useRef<T>(null);
  const callbackRef = useRef(callback);
  callbackRef.current = callback;

  useEffect(() => {
    const el = containerRef.current;
    if (prefersReducedMotion()) return;

    let paused = false;
    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };
    el?.addEventListener("mouseenter", pause);
    el?.addEventListener("mouseleave", resume);

    const id = setInterval(() => {
      if (!paused) callbackRef.current();
    }, intervalMs);

    return () => {
      clearInterval(id);
      el?.removeEventListener("mouseenter", pause);
      el?.removeEventListener("mouseleave", resume);
    };
  }, [intervalMs]);

  return containerRef;
}
