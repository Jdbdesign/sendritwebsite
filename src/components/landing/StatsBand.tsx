import StaggerGroup from "../motion/StaggerGroup";
import CountUp from "../motion/CountUp";
import { stats } from "@/lib/data/stats";

export default function StatsBand() {
  return (
    <section style={{ position: "relative", padding: "100px 32px 120px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto" }}>
        <div
          style={{
            position: "relative",
            borderRadius: 24,
            border: "1px solid rgba(139,92,246,0.22)",
            background: "linear-gradient(120deg,#151027,#0E0B18 60%,#100C1C)",
            padding: "48px 52px",
            overflow: "hidden",
            boxShadow: "0 30px 90px -40px rgba(0,0,0,0.8), 0 0 70px rgba(108,43,223,0.14)",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: "-40%",
              right: "-8%",
              width: 640,
              height: 520,
              background: "radial-gradient(circle at 60% 40%, rgba(124,58,237,0.28), transparent 62%)",
              filter: "blur(30px)",
              pointerEvents: "none",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "radial-gradient(rgba(167,139,250,0.16) 1px, transparent 1.4px)",
              backgroundSize: "14px 14px",
              WebkitMaskImage: "linear-gradient(90deg, transparent 46%, #000 78%)",
              maskImage: "linear-gradient(90deg, transparent 46%, #000 78%)",
              opacity: 0.7,
              pointerEvents: "none",
            }}
          />
          <div style={{ position: "relative", display: "grid", gridTemplateColumns: "0.95fr 1.6fr", gap: 48, alignItems: "center" }}>
            <div>
              <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.06em", color: "#C4B5FD", textTransform: "uppercase", marginBottom: 16 }}>
                Built for performance
              </div>
              <h2 style={{ fontSize: "clamp(30px,3.6vw,40px)", lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 16px" }}>
                Real results for
                <br />
                ambitious teams
              </h2>
              <p style={{ fontSize: 15, lineHeight: 1.6, color: "#A9A4B8", margin: 0, maxWidth: 300 }}>
                Join thousands of marketers and businesses who trust Sendrit to power their sending.
              </p>
            </div>
            <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 24 }}>
              {stats.map((stat) => (
                <div key={stat.label}>
                  <CountUp
                    target={stat.target}
                    decimals={stat.decimals}
                    suffix={stat.suffix}
                    style={{
                      fontSize: "clamp(32px,3.4vw,44px)",
                      fontWeight: 800,
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                      background: stat.gradient,
                      WebkitBackgroundClip: "text",
                      backgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  />
                  <div style={{ fontSize: 13.5, color: "#9A96A8", marginTop: 10, fontWeight: 500 }}>{stat.label}</div>
                </div>
              ))}
            </StaggerGroup>
          </div>
        </div>
      </div>
    </section>
  );
}
