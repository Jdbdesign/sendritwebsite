"use client";

import { Fragment, useEffect, useRef } from "react";
import StaggerGroup from "../motion/StaggerGroup";
import { prefersReducedMotion } from "@/lib/reducedMotion";
import styles from "./HowItWorks.module.css";

const steps = [
  {
    title: "1. Create",
    desc: "Build your email or start from a clean template.",
    gradient: "radial-gradient(circle at 35% 30%, #A78BFA, #6C2BDF 70%)",
    shadow: "0 0 34px rgba(124,58,237,0.5), inset 0 2px 6px rgba(255,255,255,0.25)",
    accent: "#7C3AED",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="4" width="20" height="16" rx="2" />
        <path d="m22 7-10 6L2 7" />
      </svg>
    ),
  },
  {
    title: "2. Target",
    desc: "Segment your audience and personalize the message.",
    gradient: "radial-gradient(circle at 35% 30%, #60A5FA, #2563EB 70%)",
    shadow: "0 0 34px rgba(59,130,246,0.5), inset 0 2px 6px rgba(255,255,255,0.25)",
    accent: "#3B82F6",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "3. Send",
    desc: "Send your campaign, paced to reach the right inboxes.",
    gradient: "radial-gradient(circle at 35% 30%, #34D399, #0D9488 70%)",
    shadow: "0 0 34px rgba(20,184,166,0.5), inset 0 2px 6px rgba(255,255,255,0.25)",
    accent: "#14B8A6",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 2 11 13" />
        <path d="M22 2 15 22 11 13 2 9 22 2Z" />
      </svg>
    ),
  },
  {
    title: "4. Track",
    desc: "Watch performance live and optimize the next send.",
    gradient: "radial-gradient(circle at 35% 30%, #FB923C, #C2410C 70%)",
    shadow: "0 0 34px rgba(249,115,22,0.5), inset 0 2px 6px rgba(255,255,255,0.25)",
    accent: "#F97316",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

// Timeline: dwell at each node, then a relay hop to the next. The final
// segment (index 3) isn't a visible hop — it's just Track releasing while
// Create crossfades back in, so the loop restarts cleanly instead of the
// signal flying all the way back across the row.
const HOLD = 1000;
const HOP_DURATIONS = [600, 600, 600, 600];
const RESET_SEGMENT = HOP_DURATIONS.length - 1;

function easeInOut(t: number) {
  return t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
}

function hexToRgb(hex: string): [number, number, number] {
  const v = parseInt(hex.slice(1), 16);
  return [(v >> 16) & 255, (v >> 8) & 255, v & 255];
}

function lerpColor(a: string, b: string, t: number) {
  const [ar, ag, ab] = hexToRgb(a);
  const [br, bg, bb] = hexToRgb(b);
  return `rgb(${Math.round(ar + (br - ar) * t)}, ${Math.round(ag + (bg - ag) * t)}, ${Math.round(ab + (bb - ab) * t)})`;
}

const N = steps.length;
const holdStart = steps.map((_, i) => {
  let acc = 0;
  for (let k = 0; k < i; k++) acc += HOLD + HOP_DURATIONS[k];
  return acc;
});
const holdEnd = holdStart.map((s) => s + HOLD);
const travelStart = holdEnd;
const travelEnd = travelStart.map((s, i) => s + HOP_DURATIONS[i]);
const TOTAL = travelEnd[N - 1];

const inWindow = (t: number, a: number, b: number) => t >= a && t < b;

export default function HowItWorks() {
  const wrapRef = useRef<HTMLDivElement | null>(null);
  const circleRefs = useRef<(HTMLDivElement | null)[]>([]);
  const glowRefs = useRef<(HTMLDivElement | null)[]>([]);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([]);
  const labelRefs = useRef<(HTMLDivElement | null)[]>([]);
  const chevronRefs = useRef<(HTMLDivElement | null)[]>([]);
  const signalRef = useRef<HTMLDivElement | null>(null);
  const haloRef = useRef<HTMLDivElement | null>(null);
  const coreRef = useRef<HTMLDivElement | null>(null);
  const trailRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const wrap = wrapRef.current;
    if (!wrap) return;

    if (prefersReducedMotion()) {
      const glow = glowRefs.current[0];
      const circle = circleRefs.current[0];
      const label = labelRefs.current[0];
      if (glow) {
        glow.style.opacity = "0.55";
        glow.style.transform = "translate(-50%, -50%) scale(1.05)";
        glow.style.background = `radial-gradient(circle, ${steps[0].accent} 0%, transparent 72%)`;
      }
      if (circle) circle.style.transform = "scale(1.1)";
      if (label) {
        label.style.filter = "brightness(1.12)";
        label.style.transform = "scale(1.02)";
      }
      return;
    }

    let positions: { x: number; y: number }[] = [];
    let lineY = 0;
    const measure = () => {
      const wrapRect = wrap.getBoundingClientRect();
      positions = circleRefs.current.map((el) => {
        if (!el) return { x: 0, y: 0 };
        const r = el.getBoundingClientRect();
        return {
          x: r.left + r.width / 2 - wrapRect.left,
          y: r.top + r.height / 2 - wrapRect.top,
        };
      });
      // Ride the same horizontal line the dashed connectors/arrows sit on,
      // not the (slightly different) node-circle center, so the dot is
      // exactly centered on them as it passes through.
      const chevronEl = chevronRefs.current.find((el) => el);
      if (chevronEl) {
        const r = chevronEl.getBoundingClientRect();
        lineY = r.top + r.height / 2 - wrapRect.top;
      }
    };
    measure();

    const ro = new ResizeObserver(() => measure());
    ro.observe(wrap);

    let rafId = 0;
    let startTs: number | null = null;
    let lastHoldNode = -1;

    const frame = (now: number) => {
      if (startTs === null) startTs = now;
      const t = (now - startTs) % TOTAL;

      let travelSeg = -1;
      for (let i = 0; i < N; i++) {
        if (inWindow(t, travelStart[i], travelEnd[i])) {
          travelSeg = i;
          break;
        }
      }

      let holdNode = -1;
      for (let i = 0; i < N; i++) {
        if (inWindow(t, holdStart[i], holdEnd[i])) {
          holdNode = i;
          break;
        }
      }

      for (let j = 0; j < N; j++) {
        let activation = 0;
        if (holdNode === j) {
          activation = 1;
        } else {
          const prevI = (j - 1 + N) % N;
          if (inWindow(t, travelStart[prevI], travelEnd[prevI])) {
            activation = easeInOut((t - travelStart[prevI]) / HOP_DURATIONS[prevI]);
          } else if (inWindow(t, travelStart[j], travelEnd[j])) {
            activation = 1 - easeInOut((t - travelStart[j]) / HOP_DURATIONS[j]);
          }
        }

        const circle = circleRefs.current[j];
        const glow = glowRefs.current[j];
        const label = labelRefs.current[j];
        if (circle) circle.style.transform = `scale(${1 + activation * 0.12})`;
        if (glow) {
          glow.style.opacity = String(activation * 0.85);
          glow.style.transform = `translate(-50%, -50%) scale(${0.85 + activation * 0.35})`;
          glow.style.background = `radial-gradient(circle, ${steps[j].accent} 0%, transparent 72%)`;
        }
        if (label) {
          label.style.filter = `brightness(${1 + activation * 0.14})`;
          label.style.transform = `scale(${1 + activation * 0.03})`;
        }
      }

      if (holdNode !== -1 && holdNode !== lastHoldNode) {
        const ring = ringRefs.current[holdNode];
        if (ring) {
          ring.style.borderColor = steps[holdNode].accent;
          ring.classList.remove(styles.play);
          void ring.offsetWidth;
          ring.classList.add(styles.play);
        }
      }
      if (holdNode !== -1) lastHoldNode = holdNode;

      let envelope = 0;
      const signal = signalRef.current;
      const halo = haloRef.current;
      const core = coreRef.current;
      const trail = trailRef.current;
      if (signal && halo && core && trail && positions.length === N) {
        // The reset segment (Track releasing back to Create) crossfades the
        // node glow directly, with no dot flying back across the row.
        if (travelSeg !== -1 && travelSeg !== RESET_SEGMENT) {
          const from = positions[travelSeg];
          const to = positions[travelSeg + 1];
          const dur = HOP_DURATIONS[travelSeg];
          const p = (t - travelStart[travelSeg]) / dur;
          const eased = easeInOut(p);
          envelope = Math.min(1, p * 6, (1 - p) * 6);

          const x = from.x + (to.x - from.x) * eased;
          const color = lerpColor(steps[travelSeg].accent, steps[travelSeg + 1].accent, eased);
          signal.style.transform = `translate(${x}px, ${lineY}px)`;
          signal.style.opacity = String(envelope);
          halo.style.background = `radial-gradient(circle, ${color} 0%, transparent 70%)`;
          core.style.background = color;

          trail.style.background = `linear-gradient(270deg, ${color}, transparent)`;
          trail.style.opacity = String(0.5 * envelope);
          trail.style.transform = `translateX(-130px) scaleX(${0.35 + eased * 0.65})`;
        } else {
          signal.style.opacity = "0";
        }
      }

      for (let c = 0; c < chevronRefs.current.length; c++) {
        const el = chevronRefs.current[c];
        if (!el) continue;
        const active = c === travelSeg ? envelope : 0;
        el.style.filter = `brightness(${1 + active * 0.8})`;
        el.style.opacity = String(0.55 + active * 0.45);
      }

      rafId = requestAnimationFrame(frame);
    };

    let running = false;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !running) {
            running = true;
            startTs = null;
            rafId = requestAnimationFrame(frame);
          } else if (!entry.isIntersecting && running) {
            running = false;
            cancelAnimationFrame(rafId);
          }
        });
      },
      { threshold: 0.2 }
    );
    io.observe(wrap);

    return () => {
      io.disconnect();
      ro.disconnect();
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section style={{ position: "relative", padding: "20px 32px 110px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.7fr 2.3fr", gap: 48, alignItems: "center" }}>
        <div>
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 14px",
              borderRadius: 999,
              border: "1px solid rgba(139,92,246,0.3)",
              background: "rgba(124,58,237,0.08)",
              fontSize: 12.5,
              fontWeight: 700,
              color: "#C4B5FD",
              marginBottom: 22,
            }}
          >
            Simple, yet precise
          </div>
          <h2 style={{ fontSize: "clamp(32px,3.6vw,44px)", lineHeight: 1.06, letterSpacing: "-0.03em", fontWeight: 800, margin: 0 }}>
            How Sendrit
            <br />
            works
          </h2>
        </div>
        <div ref={wrapRef} className={styles.trackWrap}>
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr", alignItems: "start", gap: 8 }}>
            {steps.map((step, i) => (
              <Fragment key={step.title}>
                <div style={{ textAlign: "center" }}>
                  <div className={styles.iconWrap}>
                    <div
                      ref={(el) => {
                        glowRefs.current[i] = el;
                      }}
                      className={styles.glowLayer}
                    />
                    <div
                      ref={(el) => {
                        ringRefs.current[i] = el;
                      }}
                      className={styles.ring}
                    />
                    <div
                      ref={(el) => {
                        circleRefs.current[i] = el;
                      }}
                      className={styles.circle}
                      style={{ background: step.gradient, boxShadow: step.shadow }}
                    >
                      {step.icon}
                    </div>
                  </div>
                  <div
                    ref={(el) => {
                      labelRefs.current[i] = el;
                    }}
                    className={styles.label}
                  >
                    {step.title}
                  </div>
                  <p style={{ fontSize: 13.5, color: "#A9A4B8", lineHeight: 1.55, margin: 0, maxWidth: 190, marginLeft: "auto", marginRight: "auto" }}>
                    {step.desc}
                  </p>
                </div>
                {i < steps.length - 1 && (
                  <div
                    ref={(el) => {
                      chevronRefs.current[i] = el;
                    }}
                    className={styles.chevron}
                  >
                    <span style={{ width: 36, borderTop: "2px dashed #3A3550" }} />
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m9 18 6-6-6-6" />
                    </svg>
                  </div>
                )}
              </Fragment>
            ))}
          </StaggerGroup>
          <div ref={signalRef} className={styles.signal}>
            <div ref={haloRef} className={styles.signalHalo} />
            <div ref={trailRef} className={styles.signalTrail} />
            <div ref={coreRef} className={styles.signalCore} />
          </div>
        </div>
      </div>
    </section>
  );
}
