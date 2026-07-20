import { Fragment } from "react";
import StaggerGroup from "../motion/StaggerGroup";

const steps = [
  {
    title: "1. Create",
    desc: "Build your email or start from a clean template.",
    gradient: "radial-gradient(circle at 35% 30%, #A78BFA, #6C2BDF 70%)",
    shadow: "0 0 34px rgba(124,58,237,0.5), inset 0 2px 6px rgba(255,255,255,0.25)",
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
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

const Chevron = () => (
  <div style={{ alignSelf: "flex-start", marginTop: 38, color: "#4A4560", display: "flex", alignItems: "center", gap: 4 }}>
    <span style={{ width: 36, borderTop: "2px dashed #3A3550" }} />
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
      <path d="m9 18 6-6-6-6" />
    </svg>
  </div>
);

export default function HowItWorks() {
  return (
    <section style={{ position: "relative", padding: "20px 32px 110px", overflow: "hidden" }}>
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
        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "1fr auto 1fr auto 1fr auto 1fr", alignItems: "start", gap: 8 }}>
          {steps.map((step, i) => (
            <Fragment key={step.title}>
              <div style={{ textAlign: "center" }}>
                <div
                  style={{
                    width: 80,
                    height: 80,
                    margin: "0 auto 20px",
                    borderRadius: "50%",
                    background: step.gradient,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    boxShadow: step.shadow,
                  }}
                >
                  {step.icon}
                </div>
                <div style={{ fontSize: 16, fontWeight: 800, marginBottom: 8 }}>{step.title}</div>
                <p style={{ fontSize: 13.5, color: "#A9A4B8", lineHeight: 1.55, margin: 0, maxWidth: 190, marginLeft: "auto", marginRight: "auto" }}>
                  {step.desc}
                </p>
              </div>
              {i < steps.length - 1 && <Chevron />}
            </Fragment>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
