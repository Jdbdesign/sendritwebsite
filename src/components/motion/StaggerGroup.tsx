"use client";

import { forwardRef, useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import { prefersReducedMotion } from "@/lib/reducedMotion";
import { mergeRefs } from "@/lib/mergeRefs";

const EASE = "opacity .8s cubic-bezier(.16,1,.3,1), transform .8s cubic-bezier(.16,1,.3,1)";

/**
 * The grid/row container itself — fades its direct children up into place,
 * staggered 85ms apart, the first time it scrolls into view. Forwards its
 * ref so callers (e.g. the spotlight hook) can also attach to the same node.
 */
const StaggerGroup = forwardRef<
  HTMLDivElement,
  { children: ReactNode; style?: CSSProperties; className?: string }
>(function StaggerGroup({ children, style, className }, forwardedRef) {
  const innerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = innerRef.current;
    if (!el || prefersReducedMotion()) return;

    const kids = Array.from(el.children) as HTMLElement[];
    kids.forEach((child) => {
      child.style.opacity = "0";
      child.style.transform = "translateY(30px)";
      child.style.transition = EASE;
      child.style.willChange = "opacity, transform";
    });

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          kids.forEach((child, i) => {
            child.style.transitionDelay = `${i * 85}ms`;
            child.style.opacity = "1";
            child.style.transform = "translateY(0)";
          });
          io.unobserve(el);
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={mergeRefs(innerRef, forwardedRef)} style={style} className={className}>
      {children}
    </div>
  );
});

export default StaggerGroup;
