import StaggerGroup from "../motion/StaggerGroup";
import CountUp from "../motion/CountUp";

const cards = [
  {
    title: "Authentication, set up right",
    desc: "SPF, DKIM, and DMARC configured correctly from the first send — so providers trust your mail before they read a word.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    title: "List integrity, checked continuously",
    desc: "Sendrit doesn't verify once and move on — it watches for decay and flags risk before it shows up as a pattern of bounces.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m22 4-10 10L9 11" />
      </svg>
    ),
  },
  {
    title: "Reputation, watched in real time",
    desc: "See how mail providers read you as it changes — catch a dip while it's a note in the dashboard, not a problem you can't undo.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M23 6l-9.5 9.5-5-5L1 18" />
        <path d="M17 6h6v6" />
      </svg>
    ),
  },
];

export default function DeliverabilityDeepDive() {
  return (
    <section id="deliverability" style={{ position: "relative", padding: "100px 32px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          width: 900,
          height: 700,
          background: "radial-gradient(ellipse at center, rgba(124,58,237,0.32), rgba(108,43,223,0.08) 45%, transparent 70%)",
          filter: "blur(30px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1080, margin: "0 auto", position: "relative", textAlign: "center" }}>
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
            marginBottom: 28,
          }}
        >
          The signal
        </div>
        <CountUp
          target={98.5}
          decimals={1}
          suffix="%"
          duration={1700}
          threshold={0.4}
          style={{
            fontSize: "clamp(96px,16vw,190px)",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            lineHeight: 1,
            background: "linear-gradient(180deg,#fff,#B79BF5)",
            WebkitBackgroundClip: "text",
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        />
        <div style={{ fontSize: 15, letterSpacing: "0.14em", color: "#8A85A0", fontWeight: 700, textTransform: "uppercase", marginTop: 8 }}>
          Confirmed delivery, tracked live
        </div>
        <p style={{ maxWidth: 560, margin: "22px auto 0", fontSize: 17, color: "#A9A4B8", lineHeight: 1.6 }}>
          Not assumed from a bounce count days later. Verified as it happens, so you always know what actually reached an inbox.
        </p>

        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20, marginTop: 64, textAlign: "left" }}>
          {cards.map((card) => (
            <div key={card.title} style={{ borderRadius: 18, border: "1px solid rgba(255,255,255,0.07)", background: "#121019", padding: 26 }}>
              <div
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: 11,
                  background: "rgba(124,58,237,0.14)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontSize: 17, fontWeight: 800, margin: "0 0 8px" }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: "#A9A4B8", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
