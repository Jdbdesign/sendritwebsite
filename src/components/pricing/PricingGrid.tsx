import { pricingPlans } from "@/lib/data/pricingPlans";
import styles from "../marketing/interactive.module.css";

export default function PricingGrid() {
  return (
    <section id="pricing" style={{ position: "relative", padding: "20px 32px 60px" }}>
      <div style={{ maxWidth: 1320, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}>
        {pricingPlans.map((plan, i) => (
          <div
            key={`${plan.tier}-${plan.price}-${i}`}
            style={{
              position: "relative",
              borderRadius: 20,
              border: `1px solid ${plan.popular ? "rgba(139,92,246,0.5)" : "rgba(255,255,255,0.07)"}`,
              background: plan.popular ? "linear-gradient(180deg,rgba(108,43,223,0.14),#100D18)" : "#100D18",
              padding: "28px 24px",
              boxShadow: plan.popular ? "0 0 50px rgba(108,43,223,0.25)" : "none",
            }}
          >
            {plan.popular && (
              <div
                style={{
                  position: "absolute",
                  top: -11,
                  left: "50%",
                  transform: "translateX(-50%)",
                  padding: "5px 14px",
                  borderRadius: 999,
                  background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                  color: "#fff",
                  fontSize: 11,
                  fontWeight: 700,
                  letterSpacing: "0.04em",
                  boxShadow: "0 6px 18px rgba(108,43,223,0.5)",
                  whiteSpace: "nowrap",
                }}
              >
                Most popular
              </div>
            )}
            <span
              style={{
                display: "inline-block",
                padding: "4px 12px",
                borderRadius: 8,
                background: plan.tagBg,
                color: plan.tagColor,
                fontSize: 11.5,
                fontWeight: 700,
                letterSpacing: "0.02em",
                marginBottom: 18,
              }}
            >
              {plan.tier}
            </span>
            <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>{plan.price}</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: "#EDEBF4", marginTop: 14 }}>{plan.emails}</div>
            <div style={{ fontSize: 12.5, color: "#75708A", marginTop: 3 }}>{plan.limit}</div>
            <button
              className={styles.planButton}
              style={{
                width: "100%",
                marginTop: 18,
                padding: 12,
                borderRadius: 11,
                border: `1px solid ${plan.popular ? "transparent" : "rgba(255,255,255,0.14)"}`,
                background: plan.popular ? "linear-gradient(135deg,#7C3AED,#6C2BDF)" : "rgba(255,255,255,0.04)",
                color: "#EDEBF4",
                fontWeight: 700,
                fontSize: 13.5,
                cursor: "pointer",
              }}
            >
              {plan.cta}
            </button>
            <div
              style={{
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.06em",
                color: "#75708A",
                textTransform: "uppercase",
                margin: "22px 0 14px",
              }}
            >
              {plan.includesLabel}
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
              {plan.features.map((feat) => (
                <div key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 9 }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A78BFA"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ flexShrink: 0, marginTop: 2 }}
                  >
                    <path d="M20 6 9 17l-5-5" />
                  </svg>
                  <span style={{ fontSize: 13, color: "#B4B0C2", lineHeight: 1.4 }}>{feat}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ textAlign: "center", marginTop: 44 }}>
        <a href="#compare" style={{ fontSize: 14.5, fontWeight: 700, color: "#A78BFA", borderBottom: "1px solid rgba(167,139,250,0.4)", paddingBottom: 2 }}>
          Compare all features
        </a>
      </div>
    </section>
  );
}
