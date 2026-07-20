"use client";

import { useState } from "react";
import Reveal from "../motion/Reveal";
import { useAutoplay } from "@/hooks/useAutoplay";
import { processSteps } from "@/lib/data/processSteps";

function VerifyPanel({ active }: { active: boolean }) {
  return (
    <Panel active={active}>
      <div style={{ fontSize: 12, color: "#8A85A0", fontWeight: 600, marginBottom: 16 }}>Verifying contacts.csv · 24,891 addresses</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        <Row email="sarah.chen@work.com" status="Verified" />
        <Row email="m.torres@company.io" status="Verified" />
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 14px",
            borderRadius: 11,
            background: "rgba(124,58,237,0.1)",
            border: "1px solid rgba(139,92,246,0.3)",
          }}
        >
          <span style={{ fontSize: 13, color: "#CFC9DE" }}>info@temp-mail.xyz</span>
          <span style={{ fontSize: 11, color: "#C4B5FD", fontWeight: 700, animation: "softPulse 1.4s ease-in-out infinite" }}>Checking…</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "12px 14px",
            borderRadius: 11,
            background: "#151220",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <span style={{ fontSize: 13, color: "#75708A", textDecoration: "line-through" }}>bounce@dead.old</span>
          <span style={{ fontSize: 11, color: "#F59E0B", fontWeight: 700 }}>Flagged</span>
        </div>
      </div>
    </Panel>
  );
}

function Row({ email, status }: { email: string; status: string }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "12px 14px",
        borderRadius: 11,
        background: "#151220",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <span style={{ fontSize: 13, color: "#CFC9DE" }}>{email}</span>
      <span style={{ fontSize: 11, color: "#4ADE9A", fontWeight: 700, display: "flex", alignItems: "center", gap: 5 }}>
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ADE9A" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20 6 9 17l-5-5" />
        </svg>
        {status}
      </span>
    </div>
  );
}

function CampaignPanel({ active }: { active: boolean }) {
  const token = (text: string) => (
    <span style={{ display: "inline-block", padding: "1px 9px", borderRadius: 6, background: "rgba(124,58,237,0.22)", color: "#C4B5FD", fontWeight: 700, fontSize: 13 }}>
      {text}
    </span>
  );
  return (
    <Panel active={active}>
      <div style={{ fontSize: 12, color: "#8A85A0", fontWeight: 600, marginBottom: 16 }}>Campaign editor · Spring Launch</div>
      <div style={{ borderRadius: 12, background: "#151220", border: "1px solid rgba(255,255,255,0.06)", padding: 18, fontSize: 14.5, lineHeight: 1.7, color: "#CFC9DE" }}>
        Hi {token("first_name")},
        <br />
        <br />
        We just shipped the update you asked about. Here&apos;s what&apos;s new this month, hand-picked for {token("company")} —
      </div>
      <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
        <span style={{ padding: "6px 12px", borderRadius: 8, background: "#151220", border: "1px solid rgba(255,255,255,0.06)", fontSize: 12, color: "#8A85A0" }}>B</span>
        <span style={{ padding: "6px 12px", borderRadius: 8, background: "#151220", border: "1px solid rgba(255,255,255,0.06)", fontSize: 12, color: "#8A85A0" }}>i</span>
        <span style={{ padding: "6px 12px", borderRadius: 8, background: "rgba(124,58,237,0.14)", border: "1px solid rgba(139,92,246,0.3)", fontSize: 12, color: "#C4B5FD" }}>
          + Token
        </span>
      </div>
    </Panel>
  );
}

function SendingPanel({ active }: { active: boolean }) {
  const bars = [40, 58, 50, 72, 22];
  return (
    <Panel active={active}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 20 }}>
        <span style={{ fontSize: 12, color: "#8A85A0", fontWeight: 600 }}>Sending · paced delivery</span>
        <span style={{ fontSize: 12, color: "#C4B5FD", fontWeight: 700 }}>4,201 / 12,450</span>
      </div>
      <div style={{ display: "flex", alignItems: "flex-end", gap: 12, height: 200 }}>
        {bars.map((h, i) => (
          <div key={i} style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end", height: "100%" }}>
            <div
              style={{
                width: "100%",
                height: `${h}%`,
                borderRadius: "6px 6px 0 0",
                background: i === 3 ? "linear-gradient(#A78BFA,#6C2BDF)" : "#3B2A5E",
                boxShadow: i === 3 ? "0 0 18px rgba(124,58,237,0.6)" : undefined,
                animation: i === 3 ? "softPulse 1.6s ease-in-out infinite" : undefined,
              }}
            />
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, height: 7, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
        <div style={{ height: "100%", width: "34%", background: "linear-gradient(90deg,#8B5CF6,#6C2BDF)", borderRadius: 999 }} />
      </div>
    </Panel>
  );
}

function ResultsPanel({ active }: { active: boolean }) {
  const metrics = [
    { label: "Opens", value: "8,124", highlight: false },
    { label: "Clicks", value: "2,046", highlight: false },
    { label: "Replies", value: "312", highlight: true },
  ];
  return (
    <Panel active={active}>
      <div style={{ fontSize: 12, color: "#8A85A0", fontWeight: 600, marginBottom: 18 }}>Live results · streaming</div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {metrics.map((m) => (
          <div
            key={m.label}
            style={{
              borderRadius: 12,
              background: m.highlight ? "rgba(124,58,237,0.1)" : "#151220",
              border: m.highlight ? "1px solid rgba(139,92,246,0.28)" : "1px solid rgba(255,255,255,0.06)",
              padding: 16,
            }}
          >
            <div style={{ fontSize: 12, color: m.highlight ? "#C4B5FD" : "#8A85A0", marginBottom: 6 }}>{m.label}</div>
            <div style={{ fontSize: 26, fontWeight: 800 }}>
              {m.value} <span style={{ fontSize: 12, color: "#4ADE9A" }}>▲ live</span>
            </div>
          </div>
        ))}
      </div>
    </Panel>
  );
}

function Panel({ active, children }: { active: boolean; children: React.ReactNode }) {
  return (
    <div
      style={{
        position: "absolute",
        inset: 0,
        padding: 28,
        transition: "opacity .35s ease, transform .35s ease",
        opacity: active ? 1 : 0,
        transform: `scale(${active ? 1 : 0.97})`,
      }}
    >
      {children}
    </div>
  );
}

const panels = [VerifyPanel, CampaignPanel, SendingPanel, ResultsPanel];

export default function ProcessAccordion() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useAutoplay<HTMLDivElement>(() => {
    setActiveStep((s) => (s + 1) % 4);
  }, 4200);

  return (
    <section
      ref={containerRef}
      style={{ position: "relative", padding: "60px 32px 120px", overflow: "hidden" }}
    >
      <div
        style={{
          position: "absolute",
          top: 120,
          left: "50%",
          transform: "translateX(-50%)",
          width: 900,
          height: 600,
          background: "radial-gradient(ellipse at center, rgba(108,43,223,0.16), transparent 68%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", position: "relative" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 56 }}>
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
              marginBottom: 22,
            }}
          >
            Process
          </div>
          <h2 style={{ fontSize: "clamp(34px,4.5vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 800, margin: 0 }}>
            How sending actually works,
            <br />
            end to end.
          </h2>
        </Reveal>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 40, alignItems: "center" }}>
          <div
            style={{
              position: "relative",
              height: 420,
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.08)",
              background: "linear-gradient(180deg,#100E18,#0B0A11)",
              boxShadow: "0 30px 80px -30px rgba(0,0,0,0.7)",
              overflow: "hidden",
            }}
          >
            {panels.map((PanelComponent, i) => (
              <PanelComponent key={i} active={activeStep === i} />
            ))}
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {processSteps.map((step, i) => {
              const on = i === activeStep;
              return (
                <div
                  key={step.n}
                  onClick={() => setActiveStep(i)}
                  style={{
                    borderRadius: 16,
                    border: `1px solid ${on ? "rgba(139,92,246,0.45)" : "rgba(255,255,255,0.07)"}`,
                    background: on ? "linear-gradient(160deg,rgba(108,43,223,0.14),#121019)" : "#121019",
                    padding: "22px 24px",
                    cursor: "pointer",
                    transition: "border-color .35s ease, background .35s ease",
                    boxShadow: on ? "0 0 40px rgba(108,43,223,0.18)" : "none",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
                    <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                      <span style={{ fontSize: 13, fontWeight: 800, color: on ? "#C4B5FD" : "#5C5870", letterSpacing: "0.04em" }}>{step.n}</span>
                      <span style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", color: "#EDEBF4" }}>{step.tab}</span>
                    </div>
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke={on ? "#C4B5FD" : "#5C5870"}
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      style={{ transition: "transform .35s ease", transform: on ? "rotate(180deg)" : "rotate(0deg)", flexShrink: 0 }}
                    >
                      <path d="m6 9 6 6 6-6" />
                    </svg>
                  </div>
                  <div
                    style={{
                      overflow: "hidden",
                      transition: "max-height .4s cubic-bezier(.16,1,.3,1), opacity .35s ease, margin-top .35s ease",
                      maxHeight: on ? 180 : 0,
                      opacity: on ? 1 : 0,
                      marginTop: on ? 14 : 0,
                    }}
                  >
                    <p style={{ margin: 0, fontSize: 15, lineHeight: 1.6, color: "#A9A4B8", paddingLeft: 36 }}>{step.body}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
