export default function PricingHero() {
  return (
    <section style={{ position: "relative", textAlign: "center", padding: "100px 32px 60px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: -40,
          left: "50%",
          width: 1000,
          height: 600,
          transform: "translateX(-50%)",
          background: "radial-gradient(ellipse 50% 45% at 50% 30%, rgba(124,58,237,0.35), transparent 68%)",
          filter: "blur(30px)",
          zIndex: 0,
          pointerEvents: "none",
        }}
      />
      <div style={{ position: "relative", zIndex: 2, maxWidth: 720, margin: "0 auto" }}>
        <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.16em", color: "#A78BFA", textTransform: "uppercase", marginBottom: 20 }}>
          Pricing
        </div>
        <h1 style={{ fontSize: "clamp(44px,6vw,74px)", lineHeight: 1.02, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 20px" }}>
          Pay as you grow
        </h1>
        <p style={{ fontSize: 18, lineHeight: 1.6, color: "#A9A4B8", margin: 0 }}>
          Choose the plan that fits your sending needs. Upgrade or downgrade anytime.
        </p>
      </div>
    </section>
  );
}
