import Image from "next/image";
import Reveal from "../motion/Reveal";
import StaggerGroup from "../motion/StaggerGroup";
import { integrations } from "@/lib/data/integrations";
import styles from "../marketing/interactive.module.css";

export default function Integrations() {
  return (
    <section id="integrations" style={{ position: "relative", padding: "20px 32px 110px", overflow: "hidden" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.85fr 2.15fr", gap: 48, alignItems: "center" }}>
        <Reveal>
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
              marginBottom: 20,
            }}
          >
            Works with your stack
          </div>
          <h2 style={{ fontSize: "clamp(28px,3.2vw,40px)", lineHeight: 1.1, letterSpacing: "-0.03em", fontWeight: 800, margin: 0, maxWidth: 320 }}>
            Connect with the tools you already use
          </h2>
        </Reveal>
        <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(7,1fr)", gap: 14 }}>
          {integrations.map((item) => (
            <div
              key={item.label}
              className={styles.liftCard}
              style={
                {
                  borderRadius: 16,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#121019",
                  padding: "20px 10px",
                  textAlign: "center",
                  "--hover-border": "rgba(139,92,246,0.3)",
                } as React.CSSProperties
              }
            >
              <div style={{ width: 44, height: 44, margin: "0 auto 12px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <Image src={item.icon} alt={item.alt} width={item.size} height={item.size} style={{ objectFit: "contain" }} />
              </div>
              <div style={{ fontSize: 12.5, fontWeight: 700, color: "#CFC9DE" }}>{item.label}</div>
            </div>
          ))}
          <div
            style={{
              borderRadius: 16,
              border: "1px dashed rgba(255,255,255,0.12)",
              background: "rgba(255,255,255,0.015)",
              padding: "20px 10px",
              textAlign: "center",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div style={{ display: "flex", gap: 5, marginBottom: 12 }}>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5C5870" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5C5870" }} />
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#5C5870" }} />
            </div>
            <div style={{ fontSize: 12.5, fontWeight: 700, color: "#75708A" }}>and more</div>
          </div>
        </StaggerGroup>
      </div>
    </section>
  );
}
