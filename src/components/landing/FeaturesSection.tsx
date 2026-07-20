import Reveal from "../motion/Reveal";
import StaggerGroup from "../motion/StaggerGroup";
import styles from "../marketing/interactive.module.css";

const smallCards = [
  {
    title: "Real-time verification",
    desc: "Every address is checked as you upload — invalid, risky, and disposable contacts flagged before they touch a send.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m22 4-10 10L9 11" />
      </svg>
    ),
  },
  {
    title: "Live analytics",
    desc: "Opens, clicks, and bounces stream in as they happen — read the campaign as it unfolds, not after.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
];

const wideCards = [
  {
    title: "Automation workflows",
    desc: "Sign-ups, expirations, and specific actions each trigger the right sequence — running quietly without a team watching.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Precise segmentation",
    desc: "Tags, filters, and custom fields tune each send to the person receiving it — the right message to the right reader.",
    icon: (
      <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
];

const smallCardStyle = {
  borderRadius: 18,
  border: "1px solid rgba(255,255,255,0.07)",
  background: "#121019",
  padding: 26,
};

export default function FeaturesSection() {
  return (
    <section id="features" style={{ position: "relative", padding: "60px 32px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
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
            The signal, up close
          </div>
          <h2 style={{ fontSize: "clamp(34px,4.5vw,52px)", lineHeight: 1.05, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 16px" }}>
            Deliverability, up close.
          </h2>
          <p style={{ maxWidth: 560, margin: "0 auto", fontSize: 17, color: "#A9A4B8", lineHeight: 1.6 }}>
            A closer look at the tools that keep your sends verified, paced, and landing in real inboxes.
          </p>
        </Reveal>

        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 20 }}>
          <div
            className={styles.liftCard}
            style={
              {
                gridRow: "span 2",
                borderRadius: 20,
                border: "1px solid rgba(255,255,255,0.07)",
                background: "linear-gradient(180deg,#141020,#0D0B14)",
                padding: 34,
                position: "relative",
                overflow: "hidden",
                "--hover-border": "rgba(139,92,246,0.35)",
              } as React.CSSProperties
            }
          >
            <div
              style={{
                position: "absolute",
                top: -60,
                right: -40,
                width: 340,
                height: 280,
                background: "radial-gradient(circle,rgba(108,43,223,0.35),transparent 68%)",
                filter: "blur(20px)",
              }}
            />
            <div style={{ position: "relative" }}>
              <div
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "rgba(124,58,237,0.16)",
                  border: "1px solid rgba(139,92,246,0.3)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 20,
                }}
              >
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
              </div>
              <h3 style={{ fontSize: 24, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 10px" }}>Deliverability, watched in real time</h3>
              <p style={{ fontSize: 15.5, color: "#A9A4B8", lineHeight: 1.6, margin: "0 0 26px", maxWidth: 420 }}>
                See exactly how providers are reading you — reputation, authentication, and inbox placement tracked continuously, so you catch a dip
                before it costs a campaign.
              </p>
              <div style={{ borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "#0F0C18", padding: 18 }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 14 }}>
                  <span style={{ fontSize: 12, color: "#8A85A0", fontWeight: 600 }}>Inbox placement</span>
                  <span style={{ fontSize: 12, color: "#4ADE9A", fontWeight: 700 }}>Healthy</span>
                </div>
                <svg viewBox="0 0 320 90" style={{ width: "100%", height: "auto", display: "block" }} preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lg" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0" stopColor="rgba(139,92,246,0.35)" />
                      <stop offset="1" stopColor="rgba(139,92,246,0)" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 70 L45 60 L90 66 L135 44 L180 50 L225 30 L270 34 L320 16"
                    fill="none"
                    stroke="#8B5CF6"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M0 70 L45 60 L90 66 L135 44 L180 50 L225 30 L270 34 L320 16 L320 90 L0 90 Z" fill="url(#lg)" />
                </svg>
                <div style={{ display: "flex", justifyContent: "space-between", marginTop: 10, fontSize: 10.5, color: "#5C5870" }}>
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </div>
            </div>
          </div>

          {smallCards.map((card) => (
            <div
              key={card.title}
              className={styles.liftCard}
              style={{ ...smallCardStyle, ["--hover-border" as string]: "rgba(139,92,246,0.3)" }}
            >
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
              <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 8px" }}>{card.title}</h3>
              <p style={{ fontSize: 14.5, color: "#A9A4B8", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </StaggerGroup>

        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, marginTop: 20 }}>
          {wideCards.map((card) => (
            <div
              key={card.title}
              className={styles.liftCard}
              style={{ ...smallCardStyle, ["--hover-border" as string]: "rgba(139,92,246,0.3)" }}
            >
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
              <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 8px" }}>{card.title}</h3>
              <p style={{ fontSize: 14.5, color: "#A9A4B8", lineHeight: 1.55, margin: 0, maxWidth: 420 }}>{card.desc}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
