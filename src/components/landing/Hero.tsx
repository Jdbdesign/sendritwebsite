import DashboardMockup from "./DashboardMockup";
import styles from "../marketing/interactive.module.css";

export default function Hero() {
  return (
    <section style={{ position: "relative", textAlign: "center", padding: "80px 32px 40px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 340,
          left: "50%",
          width: 1300,
          height: 900,
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse 55% 45% at 50% 40%, rgba(124,58,237,0.55), rgba(108,43,223,0.16) 42%, transparent 70%)",
          filter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none",
          animation: "glowIn 1.3s cubic-bezier(.16,1,.3,1) 0.55s both",
        }}
      />

      <div style={{ position: "relative", zIndex: 2, maxWidth: 920, margin: "0 auto" }}>
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 9,
            padding: "7px 15px",
            borderRadius: 999,
            border: "1px solid rgba(255,255,255,0.1)",
            background: "rgba(255,255,255,0.03)",
            fontSize: 13.5,
            fontWeight: 600,
            color: "#CFC9DE",
            marginBottom: 30,
            animation: "fadeUp .6s cubic-bezier(.16,1,.3,1) 0.05s both",
          }}
        >
          <span
            style={{
              width: 7,
              height: 7,
              borderRadius: "50%",
              background: "#4ADE9A",
              boxShadow: "0 0 10px #4ADE9A",
              animation: "softPulse 2s ease-in-out infinite",
            }}
          />
          Real-time deliverability tracking
        </div>
        <h1
          style={{
            fontSize: "clamp(46px,7vw,88px)",
            lineHeight: 1.02,
            letterSpacing: "-0.03em",
            fontWeight: 800,
            margin: "0 0 24px",
            animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) 0.15s both",
          }}
        >
          Smarter Bulk Email
          <br />
          <span
            style={{
              background: "linear-gradient(105deg,#A78BFA,#7C3AED 55%,#6C2BDF)",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            for Modern Businesses
          </span>
        </h1>
        <p
          style={{
            maxWidth: 640,
            margin: "0 auto 38px",
            fontSize: 19,
            lineHeight: 1.6,
            color: "#A9A4B8",
            fontWeight: 500,
            animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) 0.25s both",
          }}
        >
          Sendrit verifies your list, paces every send, and tracks what lands — so your campaigns reach real inboxes, not spam folders.
        </p>
        <div
          style={{
            display: "flex",
            gap: 14,
            justifyContent: "center",
            alignItems: "center",
            flexWrap: "wrap",
            animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) 0.35s both",
          }}
        >
          <button
            className={styles.primaryButton}
            style={
              {
                display: "inline-flex",
                alignItems: "center",
                gap: 9,
                padding: "15px 30px",
                borderRadius: 999,
                border: "none",
                background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 16,
                cursor: "pointer",
                boxShadow: "0 10px 34px rgba(108,43,223,0.5)",
              } as React.CSSProperties
            }
          >
            Start sending
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
          <button
            className={styles.ghostButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              padding: "15px 28px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#EDEBF4",
              fontWeight: 600,
              fontSize: 16,
              cursor: "pointer",
            }}
          >
            See how it works
          </button>
        </div>
        <div
          style={{
            marginTop: 26,
            fontSize: 13.5,
            color: "#75708A",
            fontWeight: 500,
            animation: "fadeUp .7s cubic-bezier(.16,1,.3,1) 0.45s both",
          }}
        >
          No credit card required &nbsp;·&nbsp; Free 14-day trial &nbsp;·&nbsp; Cancel anytime
        </div>
      </div>

      <DashboardMockup />
    </section>
  );
}
