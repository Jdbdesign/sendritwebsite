"use client";

import { useState } from "react";
import { faqs } from "@/lib/data/faqs";
import styles from "../marketing/interactive.module.css";

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState(0);

  return (
    <section style={{ position: "relative", padding: "80px 32px 100px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "20%",
          left: "-6%",
          width: 560,
          height: 520,
          background: "radial-gradient(circle at 40% 40%, rgba(124,58,237,0.14), transparent 62%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 1.3fr", gap: 56, alignItems: "start", position: "relative" }}>
        <div style={{ position: "sticky", top: 120 }}>
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
              color: "#C4B5FD",
              marginBottom: 24,
            }}
          >
            <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#8B5CF6" }} />
            FAQs
          </div>
          <h2 style={{ fontSize: "clamp(32px,3.8vw,46px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 28px" }}>
            Answers to common questions about Sendrit
          </h2>
          <button
            className={styles.primaryButton}
            style={
              {
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "13px 24px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 15,
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(108,43,223,0.45)",
                "--hover-shadow": "0 14px 40px rgba(108,43,223,0.7)",
              } as React.CSSProperties
            }
          >
            Get started
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
        <div style={{ borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "#100D18", padding: "12px 28px" }}>
          {faqs.map((faq, i) => {
            const on = i === openFaq;
            return (
              <div key={faq.q} style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }} onClick={() => setOpenFaq(on ? -1 : i)}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16, padding: "22px 0", cursor: "pointer" }}>
                  <span style={{ fontSize: 16, fontWeight: 700, color: "#EDEBF4" }}>{faq.q}</span>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, transition: "transform .3s ease", transform: on ? "rotate(180deg)" : "rotate(0deg)" }}
                  >
                    <path d="m6 9 6 6 6-6" />
                  </svg>
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    transition: "max-height .4s cubic-bezier(.16,1,.3,1), opacity .3s, padding-bottom .3s",
                    maxHeight: on ? 200 : 0,
                    opacity: on ? 1 : 0,
                    paddingBottom: on ? 22 : 0,
                  }}
                >
                  <p style={{ margin: 0, fontSize: 14.5, lineHeight: 1.6, color: "#A9A4B8" }}>{faq.a}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
