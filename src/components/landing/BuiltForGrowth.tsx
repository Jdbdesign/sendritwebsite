import StaggerGroup from "../motion/StaggerGroup";

const paletteItems = [
  {
    label: "Text",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" style={{ marginBottom: 8 }}>
        <path d="M4 7V4h16v3M9 20h6M12 4v16" />
      </svg>
    ),
  },
  {
    label: "Image",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <circle cx="9" cy="9" r="2" />
        <path d="m21 15-3.6-3.6a2 2 0 0 0-2.8 0L6 20" />
      </svg>
    ),
  },
  {
    label: "Button",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
        <rect x="4" y="8" width="16" height="8" rx="2" />
      </svg>
    ),
  },
  {
    label: "Divider",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" style={{ marginBottom: 8 }}>
        <path d="M3 12h18" />
      </svg>
    ),
  },
  {
    label: "Social",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
        <circle cx="18" cy="5" r="3" />
        <circle cx="6" cy="12" r="3" />
        <circle cx="18" cy="19" r="3" />
        <path d="m8.6 13.5 6.8 4M15.4 6.5l-6.8 4" />
      </svg>
    ),
  },
  {
    label: "HTML",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#C4B5FD" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: 8 }}>
        <path d="m8 6-6 6 6 6M16 6l6 6-6 6" />
      </svg>
    ),
  },
];

const checklist = [
  "Drag-and-drop email builder",
  "Mobile-responsive templates",
  "Personalization with merge tags",
  "Real-time preview & testing",
];

export default function BuiltForGrowth() {
  return (
    <section style={{ position: "relative", padding: "20px 32px 120px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: 0,
          right: "-4%",
          width: 620,
          height: 560,
          background: "radial-gradient(circle at 60% 40%, rgba(124,58,237,0.16), transparent 62%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <StaggerGroup
        style={{
          maxWidth: 1280,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.15fr 1fr",
          gap: 56,
          alignItems: "center",
          position: "relative",
        }}
      >
        {/* builder mockup */}
        <div
          style={{
            borderRadius: 20,
            border: "1px solid rgba(255,255,255,0.09)",
            background: "linear-gradient(180deg,#100E18,#0B0A11)",
            boxShadow: "0 40px 100px -30px rgba(0,0,0,0.8), 0 0 70px rgba(108,43,223,0.12)",
            padding: 22,
            position: "relative",
          }}
        >
          <div style={{ display: "flex", gap: 22, marginBottom: 20, padding: "0 4px" }}>
            <span style={{ fontSize: 13, fontWeight: 700, color: "#C4B5FD", paddingBottom: 8, borderBottom: "2px solid #7C3AED" }}>Design</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#8A85A0" }}>Content</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: "#8A85A0" }}>Settings</span>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "0.62fr 1.38fr", gap: 16 }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {paletteItems.map((item) => (
                <div
                  key={item.label}
                  style={{
                    borderRadius: 12,
                    border: "1px solid rgba(255,255,255,0.06)",
                    background: "#151220",
                    padding: "14px 8px",
                    textAlign: "center",
                  }}
                >
                  {item.icon}
                  <div style={{ fontSize: 11.5, color: "#9A96A8", fontWeight: 600 }}>{item.label}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                borderRadius: 14,
                border: "1px solid rgba(255,255,255,0.06)",
                background: "#0F0C18",
                padding: 20,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ textAlign: "center", fontSize: 13, color: "#B4B0C2", fontWeight: 600, marginBottom: 14 }}>Special offer inside ✨</div>
              <div style={{ textAlign: "center", flex: 1, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 10 }}>Get 20% off</div>
                <div style={{ fontSize: 14, color: "#9A96A8", marginBottom: 20 }}>your next purchase</div>
                <span
                  style={{
                    display: "inline-block",
                    padding: "10px 22px",
                    borderRadius: 9,
                    background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    alignSelf: "center",
                  }}
                >
                  Shop now
                </span>
              </div>
              <div style={{ display: "flex", gap: 5, justifyContent: "center", marginTop: 14 }}>
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#7C3AED" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#332C48" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#332C48" }} />
                <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#332C48" }} />
              </div>
            </div>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -22,
              left: -22,
              display: "flex",
              alignItems: "center",
              gap: 12,
              padding: "14px 18px",
              borderRadius: 14,
              background: "rgba(21,18,32,0.95)",
              border: "1px solid rgba(255,255,255,0.09)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.55)",
              backdropFilter: "blur(10px)",
            }}
          >
            <div
              style={{
                width: 36,
                height: 36,
                borderRadius: 10,
                background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
              </svg>
            </div>
            <div>
              <div style={{ fontSize: 11, color: "#8A85A0", fontWeight: 600 }}>Automation</div>
              <div style={{ fontSize: 13.5, fontWeight: 800 }}>Welcome Series</div>
              <div style={{ fontSize: 11, color: "#4ADE9A", fontWeight: 700 }}>Active</div>
            </div>
          </div>
        </div>

        {/* copy */}
        <div>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", color: "#A78BFA", textTransform: "uppercase", marginBottom: 20 }}>
            Built for growth
          </div>
          <h2 style={{ fontSize: "clamp(32px,3.8vw,46px)", lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 20px" }}>
            Create experiences
            <br />
            your audience{" "}
            <span
              style={{
                background: "linear-gradient(100deg,#F472B6,#FB923C)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              love.
            </span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#A9A4B8", margin: "0 0 28px", maxWidth: 440 }}>
            Design considered emails, automate the journeys behind them, and send messages that feel written for one person — not blasted at a
            list.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 30 }}>
            {checklist.map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <span style={{ fontSize: 15, color: "#CFC9DE", fontWeight: 500 }}>{item}</span>
              </div>
            ))}
          </div>
          <a href="#demo" style={{ display: "inline-flex", alignItems: "center", gap: 11, fontSize: 15, fontWeight: 700, color: "#EDEBF4" }}>
            <span
              style={{
                width: 36,
                height: 36,
                borderRadius: "50%",
                border: "1px solid rgba(139,92,246,0.4)",
                background: "rgba(124,58,237,0.1)",
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <svg width="15" height="15" viewBox="0 0 24 24" fill="#A78BFA" stroke="none">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            Watch 2-min demo
          </a>
        </div>
      </StaggerGroup>
    </section>
  );
}
