import StaggerGroup from "../motion/StaggerGroup";
import styles from "../marketing/interactive.module.css";

const brands = ["Luminous", "CloudSync", "Quantum", "EchoWave", "Pulse", "Greenfield"];

export default function TrustStrip() {
  return (
    <section style={{ position: "relative", zIndex: 2, padding: "56px 32px 80px", textAlign: "center" }}>
      <div
        style={{
          fontSize: 12,
          letterSpacing: "0.18em",
          color: "#75708A",
          fontWeight: 700,
          marginBottom: 30,
          textTransform: "uppercase",
        }}
      >
        Trusted by modern teams sending 10M+ emails a month
      </div>
      <StaggerGroup
        style={{
          maxWidth: 1120,
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 28,
        }}
      >
        {brands.map((name) => (
          <span
            key={name}
            className={styles.dimLabel}
            style={{ fontSize: 20, fontWeight: 800, color: "#5C5870", letterSpacing: "-0.02em" }}
          >
            {name}
          </span>
        ))}
      </StaggerGroup>
    </section>
  );
}
