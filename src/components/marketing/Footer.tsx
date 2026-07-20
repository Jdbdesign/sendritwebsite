import Link from "next/link";

const LOGO = (
  <div
    style={{
      width: 30,
      height: 30,
      borderRadius: 9,
      background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 2 11 13" />
      <path d="M22 2 15 22 11 13 2 9 22 2Z" />
    </svg>
  </div>
);

const linkStyle = { color: "#A9A4B8" };
const columnTitleStyle = {
  fontSize: 12,
  letterSpacing: "0.12em",
  color: "#5C5870",
  fontWeight: 700,
  textTransform: "uppercase" as const,
  marginBottom: 16,
};
const columnStyle = { display: "flex", flexDirection: "column" as const, gap: 11, fontSize: 14.5 };

export default function Footer({ variant }: { variant: "landing" | "pricing" }) {
  const tagline =
    variant === "landing"
      ? "Deliverability you can actually see. Every send verified, paced, and tracked."
      : "Smarter bulk email made simple. Design, send, and track campaigns all in one place.";

  const productLinks =
    variant === "landing" ? (
      <>
        <a href="#features" style={linkStyle}>Features</a>
        <Link href="/pricing" style={linkStyle}>Pricing</Link>
        <a href="#docs" style={linkStyle}>API Docs</a>
        <a href="#integrations" style={linkStyle}>Integrations</a>
      </>
    ) : (
      <>
        <Link href="/#features" style={linkStyle}>Features</Link>
        <a href="#pricing" style={linkStyle}>Pricing</a>
        <a href="#docs" style={linkStyle}>API Documentation</a>
        <a href="#integrations" style={linkStyle}>Integrations</a>
      </>
    );

  const bottomLinks =
    variant === "landing" ? (
      <>
        <a href="#privacy" style={{ color: "#5C5870" }}>Privacy</a>
        <a href="#terms" style={{ color: "#5C5870" }}>Terms</a>
        <a href="#gdpr" style={{ color: "#5C5870" }}>GDPR</a>
      </>
    ) : (
      <>
        <a href="#cookies" style={{ color: "#5C5870" }}>Cookies Policy</a>
        <a href="#privacy" style={{ color: "#5C5870" }}>Privacy Policy</a>
        <a href="#terms" style={{ color: "#5C5870" }}>Terms of Service</a>
      </>
    );

  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)", padding: "64px 32px 40px" }}>
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "1.6fr 1fr 1fr 1fr", gap: 40 }}>
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
            {LOGO}
            <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>Sendrit</span>
          </div>
          <p style={{ fontSize: 14.5, color: "#8A85A0", lineHeight: 1.6, maxWidth: 280, margin: 0 }}>{tagline}</p>
        </div>
        <div>
          <div style={columnTitleStyle}>Product</div>
          <div style={columnStyle}>{productLinks}</div>
        </div>
        <div>
          <div style={columnTitleStyle}>Company</div>
          <div style={columnStyle}>
            <a href="#about" style={linkStyle}>{variant === "landing" ? "About" : "About Us"}</a>
            <a href="#careers" style={linkStyle}>Careers</a>
            <a href="#blog" style={linkStyle}>Blog</a>
            <a href="#contact" style={linkStyle}>Contact</a>
          </div>
        </div>
        <div>
          <div style={columnTitleStyle}>Resources</div>
          <div style={columnStyle}>
            <a href="#help" style={linkStyle}>Help Center</a>
            <a href="#faq" style={linkStyle}>FAQs</a>
            <a href="#guides" style={linkStyle}>{variant === "landing" ? "Guides" : "Email Guides"}</a>
            <a href="#status" style={linkStyle}>Status</a>
          </div>
        </div>
      </div>
      <div
        style={{
          maxWidth: 1280,
          margin: "44px auto 0",
          paddingTop: 24,
          borderTop: "1px solid rgba(255,255,255,0.06)",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          flexWrap: "wrap",
          gap: 14,
          fontSize: 13,
          color: "#5C5870",
        }}
      >
        <span>© 2026 Sendrit. All rights reserved.</span>
        <div style={{ display: "flex", gap: 22 }}>{bottomLinks}</div>
      </div>
    </footer>
  );
}
