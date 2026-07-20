"use client";

import { useTilt } from "@/hooks/useTilt";

const metricCardStyle = {
  borderRadius: 14,
  border: "1px solid rgba(255,255,255,0.06)",
  background: "#151220",
  padding: 16,
};

export default function DashboardMockup() {
  const { containerRef, targetRef } = useTilt<HTMLDivElement, HTMLDivElement>();

  return (
    <div ref={containerRef} style={{ position: "relative", zIndex: 2, maxWidth: 1120, margin: "64px auto 0" }}>
      {/* floating widgets */}
      <div
        style={{
          position: "absolute",
          top: 52,
          left: -38,
          zIndex: 5,
          padding: "12px 16px",
          borderRadius: 14,
          background: "rgba(21,18,32,0.9)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          animation: "floaty 6s ease-in-out infinite",
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: 11, color: "#8A85A0", fontWeight: 600, marginBottom: 3 }}>Open rate</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
          <span style={{ fontSize: 20, fontWeight: 800 }}>32.6%</span>
          <span style={{ fontSize: 11, color: "#4ADE9A", fontWeight: 700 }}>+6.8%</span>
        </div>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: 70,
          right: -34,
          zIndex: 5,
          padding: "12px 16px",
          borderRadius: 14,
          background: "rgba(21,18,32,0.9)",
          border: "1px solid rgba(139,92,246,0.3)",
          boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
          backdropFilter: "blur(10px)",
          animation: "floaty2 7s ease-in-out infinite",
          textAlign: "left",
        }}
      >
        <div style={{ fontSize: 11, color: "#8A85A0", fontWeight: 600, marginBottom: 3 }}>Bounce rate</div>
        <div style={{ display: "flex", alignItems: "baseline", gap: 7 }}>
          <span style={{ fontSize: 20, fontWeight: 800 }}>0.4%</span>
          <span style={{ fontSize: 11, color: "#4ADE9A", fontWeight: 700 }}>−1.2%</span>
        </div>
      </div>

      <div
        ref={targetRef}
        style={{
          position: "relative",
          borderRadius: 20,
          border: "1px solid rgba(255,255,255,0.09)",
          background: "linear-gradient(180deg,#100E18,#0B0A11)",
          boxShadow: "0 40px 100px -20px rgba(0,0,0,0.8), 0 0 0 1px rgba(139,92,246,0.06), 0 0 90px rgba(108,43,223,0.18)",
          overflow: "hidden",
          textAlign: "left",
        }}
      >
        {/* top bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "15px 20px",
            borderBottom: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <div
                style={{
                  width: 22,
                  height: 22,
                  borderRadius: 7,
                  background: "linear-gradient(135deg,#7C3AED,#6C2BDF)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 2 11 13" />
                  <path d="M22 2 15 22 11 13 2 9 22 2Z" />
                </svg>
              </div>
              <span style={{ fontWeight: 800, fontSize: 14 }}>Sendrit</span>
            </div>
            <div style={{ display: "flex", gap: 6 }}>
              <span style={{ padding: "5px 12px", borderRadius: 8, background: "rgba(124,58,237,0.18)", color: "#C4B5FD", fontSize: 12.5, fontWeight: 600 }}>
                Overview
              </span>
              <span style={{ padding: "5px 12px", borderRadius: 8, color: "#8A85A0", fontSize: 12.5, fontWeight: 600 }}>Campaigns</span>
              <span style={{ padding: "5px 12px", borderRadius: 8, color: "#8A85A0", fontSize: 12.5, fontWeight: 600 }}>Contacts</span>
              <span style={{ padding: "5px 12px", borderRadius: 8, color: "#8A85A0", fontSize: 12.5, fontWeight: 600 }}>Analytics</span>
            </div>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ padding: "6px 12px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.08)", color: "#B4B0C2", fontSize: 12, fontWeight: 600 }}>
              Last 30 days
            </span>
            <div
              style={{
                width: 28,
                height: 28,
                borderRadius: "50%",
                background: "linear-gradient(135deg,#8B5CF6,#4C1D95)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 11,
                fontWeight: 700,
                color: "#fff",
              }}
            >
              JD
            </div>
          </div>
        </div>

        <div style={{ padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
          {/* Row 1 metrics */}
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 14 }}>
            <div style={metricCardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12.5, color: "#8A85A0", fontWeight: 600 }}>Emails sent</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6C6880" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-10 6L2 7" />
                </svg>
              </div>
              <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: "-0.02em" }}>128,540</div>
              <div
                style={{
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "rgba(74,222,154,0.12)",
                  color: "#4ADE9A",
                  fontSize: 11.5,
                  fontWeight: 700,
                }}
              >
                ▲ 12.5%
              </div>
            </div>
            <div
              style={{
                borderRadius: 14,
                border: "1px solid rgba(139,92,246,0.4)",
                background: "linear-gradient(160deg,rgba(108,43,223,0.28),rgba(21,18,32,0.6))",
                padding: 16,
                position: "relative",
                boxShadow: "inset 0 0 34px rgba(124,58,237,0.22), 0 0 30px rgba(108,43,223,0.2)",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  left: 0,
                  top: 14,
                  bottom: 14,
                  width: 3,
                  borderRadius: 3,
                  background: "linear-gradient(#A78BFA,#6C2BDF)",
                }}
              />
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12.5, color: "#C4B5FD", fontWeight: 700 }}>Delivery rate</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <path d="m22 4-10 10L9 11" />
                </svg>
              </div>
              <div style={{ fontSize: 30, fontWeight: 800, letterSpacing: "-0.02em", color: "#fff" }}>98.5%</div>
              <div
                style={{
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "rgba(167,139,250,0.16)",
                  color: "#C4B5FD",
                  fontSize: 11.5,
                  fontWeight: 700,
                }}
              >
                ▲ 0.8%
              </div>
            </div>
            <div style={metricCardStyle}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 10 }}>
                <span style={{ fontSize: 12.5, color: "#8A85A0", fontWeight: 600 }}>Open rate</span>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#6C6880" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M23 6l-9.5 9.5-5-5L1 18" />
                  <path d="M17 6h6v6" />
                </svg>
              </div>
              <div style={{ fontSize: 27, fontWeight: 800, letterSpacing: "-0.02em" }}>32.6%</div>
              <div
                style={{
                  marginTop: 8,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  padding: "3px 8px",
                  borderRadius: 999,
                  background: "rgba(74,222,154,0.12)",
                  color: "#4ADE9A",
                  fontSize: 11.5,
                  fontWeight: 700,
                }}
              >
                ▲ 6.8%
              </div>
            </div>
          </div>

          {/* Row 2 */}
          <div style={{ display: "grid", gridTemplateColumns: "1.35fr 1fr", gap: 14 }}>
            <div style={{ ...metricCardStyle, padding: 18, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
                <div>
                  <div style={{ fontSize: 12.5, color: "#8A85A0", fontWeight: 600, marginBottom: 8 }}>Sent this month</div>
                  <div style={{ fontSize: 38, fontWeight: 800, letterSpacing: "-0.03em", lineHeight: 1 }}>84,320</div>
                  <div style={{ fontSize: 12.5, color: "#75708A", marginTop: 8 }}>of 120,000 in your plan</div>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 9,
                    padding: "7px 12px",
                    borderRadius: 10,
                    background: "rgba(124,58,237,0.14)",
                    border: "1px solid rgba(139,92,246,0.28)",
                  }}
                >
                  <span style={{ fontSize: 12, color: "#C4B5FD", fontWeight: 700 }}>Auto-pacing</span>
                  <span
                    style={{
                      width: 30,
                      height: 17,
                      borderRadius: 999,
                      background: "linear-gradient(90deg,#7C3AED,#6C2BDF)",
                      position: "relative",
                      display: "inline-block",
                    }}
                  >
                    <span style={{ position: "absolute", top: 2, right: 2, width: 13, height: 13, borderRadius: "50%", background: "#fff" }} />
                  </span>
                </div>
              </div>
              <div style={{ marginTop: 18 }}>
                <div style={{ height: 8, borderRadius: 999, background: "rgba(255,255,255,0.06)", overflow: "hidden" }}>
                  <div
                    style={{
                      height: "100%",
                      width: "70%",
                      borderRadius: 999,
                      background: "linear-gradient(90deg,#8B5CF6,#6C2BDF)",
                      boxShadow: "0 0 14px rgba(124,58,237,0.6)",
                    }}
                  />
                </div>
              </div>
            </div>
            <div style={metricCardStyle}>
              <div style={{ fontSize: 12.5, color: "#8A85A0", fontWeight: 600, marginBottom: 12 }}>Recent activity</div>
              <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                {[
                  { name: "Spring Launch", meta: "24,891 recipients · 2h", status: "Delivered", color: "#4ADE9A", bg: "rgba(74,222,154,0.12)" },
                  { name: "Weekly Digest", meta: "18,204 recipients · 5h", status: "Delivered", color: "#4ADE9A", bg: "rgba(74,222,154,0.12)" },
                  { name: "Product Update", meta: "9,540 recipients · 1d", status: "Sending", color: "#C4B5FD", bg: "rgba(124,58,237,0.16)" },
                ].map((row) => (
                  <div key={row.name} style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: 8,
                        background: row.bg,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                      }}
                    >
                      {row.status === "Sending" ? (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10" />
                          <path d="M12 6v6l4 2" />
                        </svg>
                      ) : (
                        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#4ADE9A" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 6 9 17l-5-5" />
                        </svg>
                      )}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontSize: 12.5, fontWeight: 700 }}>{row.name}</div>
                      <div style={{ fontSize: 11, color: "#75708A" }}>{row.meta}</div>
                    </div>
                    <span style={{ fontSize: 10.5, color: row.color, fontWeight: 700 }}>{row.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Row 3 chart */}
          <div style={{ ...metricCardStyle, padding: 18 }}>
            <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 18 }}>
              <div>
                <div style={{ fontSize: 12.5, color: "#8A85A0", fontWeight: 600, marginBottom: 6 }}>Send volume · this quarter</div>
                <div style={{ fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em" }}>
                  412,908 <span style={{ fontSize: 13, color: "#4ADE9A", fontWeight: 700 }}>▲ 18%</span>
                </div>
              </div>
              <div style={{ display: "flex", gap: 14, fontSize: 11, color: "#75708A" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: "#3B2A5E" }} />
                  Monthly
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 5 }}>
                  <span style={{ width: 8, height: 8, borderRadius: 2, background: "#8B5CF6" }} />
                  Current
                </span>
              </div>
            </div>
            <div style={{ display: "flex", alignItems: "flex-end", gap: 14, height: 120 }}>
              {[
                { h: 52, month: "Jan", peak: false },
                { h: 63, month: "Feb", peak: false },
                { h: 57, month: "Mar", peak: false },
                { h: 72, month: "Apr", peak: false },
                { h: 81, month: "May", peak: false },
                { h: 97, month: "Jun", peak: true },
              ].map((bar) => (
                <div key={bar.month} style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", gap: 8, height: "100%" }}>
                  <div style={{ flex: 1, width: "100%", display: "flex", alignItems: "flex-end" }}>
                    <div
                      style={{
                        width: "100%",
                        height: `${bar.h}%`,
                        borderRadius: "7px 7px 0 0",
                        background: bar.peak ? "linear-gradient(#A78BFA,#6C2BDF)" : "#3B2A5E",
                        boxShadow: bar.peak ? "0 0 20px rgba(124,58,237,0.6)" : undefined,
                        transformOrigin: "bottom",
                        animation: "barGrow .7s cubic-bezier(.16,1,.3,1) both",
                      }}
                    />
                  </div>
                  <span style={{ fontSize: 11, color: bar.peak ? "#C4B5FD" : "#75708A", fontWeight: bar.peak ? 700 : 400 }}>{bar.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
