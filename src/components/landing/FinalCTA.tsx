import Reveal from "../motion/Reveal";
import styles from "../marketing/interactive.module.css";

export default function FinalCTA() {
  return (
    <section style={{ position: "relative", padding: "120px 32px", overflow: "hidden", textAlign: "center" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 1100,
          height: 700,
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.4), rgba(108,43,223,0.1) 44%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />
      <Reveal style={{ maxWidth: 760, margin: "0 auto", position: "relative" }}>
        <h2 style={{ fontSize: "clamp(40px,6vw,72px)", lineHeight: 1.04, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 22px" }}>
          Ready to cut through
          <br />
          the noise?
        </h2>
        <p style={{ fontSize: 19, color: "#A9A4B8", lineHeight: 1.6, margin: "0 0 38px", maxWidth: 560, marginLeft: "auto", marginRight: "auto" }}>
          Verify your list, pace every send, and watch it land — from your first campaign to your millionth.
        </p>
        <button
          className={styles.primaryButton}
          style={
            {
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "17px 36px",
              borderRadius: 999,
              border: "none",
              background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 17,
              cursor: "pointer",
              boxShadow: "0 12px 44px rgba(108,43,223,0.6)",
              "--hover-shadow": "0 16px 60px rgba(108,43,223,0.85)",
            } as React.CSSProperties
          }
        >
          Start sending
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </button>
        <div style={{ marginTop: 22, fontSize: 13.5, color: "#75708A", fontWeight: 500 }}>No credit card required · Free 14-day trial · Cancel anytime</div>
      </Reveal>
    </section>
  );
}
