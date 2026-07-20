import Reveal from "../motion/Reveal";
import StaggerGroup from "../motion/StaggerGroup";
import styles from "../marketing/interactive.module.css";

const solutions = [
  {
    title: "Marketing Teams",
    desc: "Launch campaigns that drive engagement and revenue.",
    color: "#A78BFA",
    hoverBorder: "rgba(139,92,246,0.3)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="m3 11 18-5v12L3 14v-3z" />
        <path d="M11.6 16.8a3 3 0 1 1-5.8-1.6" />
      </svg>
    ),
  },
  {
    title: "E-commerce Brands",
    desc: "Recover carts and grow sales with automated workflows.",
    color: "#FB923C",
    hoverBorder: "rgba(251,146,60,0.3)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#FB923C" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="8" cy="21" r="1" />
        <circle cx="19" cy="21" r="1" />
        <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
      </svg>
    ),
  },
  {
    title: "SaaS Companies",
    desc: "Nurture leads and onboard users with targeted journeys.",
    color: "#60A5FA",
    hoverBorder: "rgba(96,165,250,0.3)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#60A5FA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: "Agencies",
    desc: "Manage multiple clients and deliver results at scale.",
    color: "#C084FC",
    hoverBorder: "rgba(167,139,250,0.35)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#C084FC" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="9" cy="7" r="4" />
        <path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2" />
        <circle cx="17" cy="9" r="2.5" />
        <path d="M21 21v-1a3 3 0 0 0-3-3" />
      </svg>
    ),
  },
  {
    title: "Creators & Startups",
    desc: "Build relationships and grow your audience with ease.",
    color: "#34D399",
    hoverBorder: "rgba(52,211,153,0.3)",
    icon: (
      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
      </svg>
    ),
  },
];

export default function Solutions() {
  return (
    <section style={{ position: "relative", padding: "20px 32px 110px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <Reveal style={{ textAlign: "center", marginBottom: 48 }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", color: "#A78BFA", textTransform: "uppercase", marginBottom: 16 }}>
            Solutions for every business
          </div>
          <h2 style={{ fontSize: "clamp(30px,3.8vw,46px)", lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800, margin: 0 }}>
            Designed for teams of every size and industry.
          </h2>
        </Reveal>
        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 18 }}>
          {solutions.map((s) => (
            <div
              key={s.title}
              className={styles.liftCard}
              style={
                {
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#121019",
                  padding: "30px 22px",
                  textAlign: "center",
                  "--hover-border": s.hoverBorder,
                } as React.CSSProperties
              }
            >
              <div
                style={{
                  width: 56,
                  height: 56,
                  margin: "0 auto 20px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  filter: `drop-shadow(0 0 12px ${s.color}8C)`,
                }}
              >
                {s.icon}
              </div>
              <h3 style={{ fontSize: 16, fontWeight: 800, margin: "0 0 10px" }}>{s.title}</h3>
              <p style={{ fontSize: 13.5, color: "#A9A4B8", lineHeight: 1.55, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
