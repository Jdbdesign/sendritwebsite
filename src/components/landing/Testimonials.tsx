"use client";

import { useState } from "react";
import Reveal from "../motion/Reveal";
import { useAutoplay } from "@/hooks/useAutoplay";
import { testimonials } from "@/lib/data/testimonials";
import styles from "../marketing/interactive.module.css";

const maxIndex = Math.max(0, testimonials.length - 3);
const CARD_STEP = 402; // 380px card + 22px gap

export default function Testimonials() {
  const [index, setIndex] = useState(0);
  const containerRef = useAutoplay<HTMLDivElement>(() => {
    setIndex((i) => (i >= maxIndex ? 0 : i + 1));
  }, 4800);

  const next = () => setIndex((i) => Math.min(maxIndex, i + 1));
  const prev = () => setIndex((i) => Math.max(0, i - 1));

  return (
    <section ref={containerRef} style={{ position: "relative", padding: "60px 32px 120px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 44, flexWrap: "wrap", gap: 20 }}>
          <Reveal>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "6px 14px",
                borderRadius: 999,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.03)",
                fontSize: 12.5,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#C4B5FD",
                textTransform: "uppercase",
                marginBottom: 20,
              }}
            >
              Loved by marketers
            </div>
            <h2 style={{ fontSize: "clamp(32px,4.5vw,50px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 800, margin: 0 }}>
              Real teams. Real results.
            </h2>
          </Reveal>
          <div style={{ display: "flex", gap: 12 }}>
            <button onClick={prev} aria-label="Previous testimonial" className={styles.roundIconButton} style={roundButtonStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button onClick={next} aria-label="Next testimonial" className={styles.roundIconButton} style={roundButtonStyle}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>

        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: 22,
              transition: "transform .5s cubic-bezier(.16,1,.3,1)",
              transform: `translateX(-${index * CARD_STEP}px)`,
            }}
          >
            {testimonials.map((t) => (
              <div
                key={t.n}
                style={{
                  flex: "0 0 380px",
                  maxWidth: 380,
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#121019",
                  padding: 28,
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
                    {Array.from({ length: 5 }).map((_, i) => (
                      <span key={i} style={{ color: "#8B5CF6" }}>
                        ★
                      </span>
                    ))}
                  </div>
                  <p style={{ fontSize: 16, lineHeight: 1.6, color: "#D4D0E0", margin: "0 0 24px", fontWeight: 500 }}>&quot;{t.q}&quot;</p>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <div
                    style={{
                      width: 42,
                      height: 42,
                      borderRadius: "50%",
                      background: t.avatar,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: 14,
                      fontWeight: 800,
                      color: "#fff",
                      flexShrink: 0,
                    }}
                  >
                    {t.init}
                  </div>
                  <div>
                    <div style={{ fontSize: 14, fontWeight: 800 }}>{t.n}</div>
                    <div style={{ fontSize: 12.5, color: "#8A85A0" }}>{t.r}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const roundButtonStyle: React.CSSProperties = {
  width: 46,
  height: 46,
  borderRadius: "50%",
  background: "rgba(255,255,255,0.04)",
  border: "1px solid rgba(255,255,255,0.12)",
  color: "#EDEBF4",
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
};
