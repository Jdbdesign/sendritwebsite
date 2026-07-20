"use client";

import type { CSSProperties } from "react";
import Reveal from "../motion/Reveal";
import StaggerGroup from "../motion/StaggerGroup";
import { useSpotlight } from "@/hooks/useSpotlight";
import styles from "../marketing/interactive.module.css";

const cards = [
  {
    title: "Advanced Analytics",
    desc: "Track opens, clicks, and replies with clean, easy-to-read reports.",
    gradient: "linear-gradient(140deg,#7C3AED,#A78BFA)",
    shadow: "0 8px 22px rgba(124,58,237,0.45)",
    hoverBorder: "rgba(139,92,246,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <line x1="12" y1="20" x2="12" y2="10" />
        <line x1="18" y1="20" x2="18" y2="4" />
        <line x1="6" y1="20" x2="6" y2="16" />
      </svg>
    ),
  },
  {
    title: "Smart Automations",
    desc: "Build workflows that send the right message at the perfect time.",
    gradient: "linear-gradient(140deg,#059669,#34D399)",
    shadow: "0 8px 22px rgba(16,185,129,0.4)",
    hoverBorder: "rgba(52,211,153,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
  {
    title: "Contact Management",
    desc: "Organize, segment, and manage your contacts with ease.",
    gradient: "linear-gradient(140deg,#2563EB,#60A5FA)",
    shadow: "0 8px 22px rgba(59,130,246,0.4)",
    hoverBorder: "rgba(96,165,250,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Email Templates",
    desc: "Professionally designed templates that convert. Customize or build your own.",
    gradient: "linear-gradient(140deg,#EA580C,#FB923C)",
    shadow: "0 8px 22px rgba(249,115,22,0.4)",
    hoverBorder: "rgba(251,146,60,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M3 9h18" />
        <path d="M9 21V9" />
      </svg>
    ),
  },
  {
    title: "A/B Testing",
    desc: "Test subject lines, content, and send times to maximize results.",
    gradient: "linear-gradient(140deg,#D97706,#FBBF24)",
    shadow: "0 8px 22px rgba(245,158,11,0.4)",
    hoverBorder: "rgba(251,191,36,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18" />
        <rect x="7" y="12" width="3" height="6" />
        <rect x="14" y="7" width="3" height="11" />
      </svg>
    ),
  },
  {
    title: "Deliverability Suite",
    desc: "Industry-leading tools and best practices to land in the inbox.",
    gradient: "linear-gradient(140deg,#DB2777,#F472B6)",
    shadow: "0 8px 22px rgba(236,72,153,0.4)",
    hoverBorder: "rgba(244,114,182,0.3)",
    icon: (
      <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
        <path d="m22 4-10 10L9 11" />
      </svg>
    ),
  },
];

export default function FeatureGridColorful() {
  const gridRef = useSpotlight<HTMLDivElement>();

  return (
    <section style={{ position: "relative", padding: "40px 32px 100px", overflow: "hidden" }}>
      <div
        style={{
          position: "absolute",
          top: "-10%",
          right: "-6%",
          width: 600,
          height: 520,
          background: "radial-gradient(circle at 60% 40%, rgba(236,72,153,0.1), transparent 62%)",
          filter: "blur(40px)",
          pointerEvents: "none",
        }}
      />
      <div style={{ maxWidth: 1280, margin: "0 auto", display: "grid", gridTemplateColumns: "0.9fr 2.1fr", gap: 56, position: "relative" }}>
        <Reveal style={{ alignSelf: "center" }}>
          <div style={{ fontSize: 12.5, fontWeight: 700, letterSpacing: "0.14em", color: "#A78BFA", textTransform: "uppercase", marginBottom: 22 }}>
            Built for modern teams
          </div>
          <h2 style={{ fontSize: "clamp(34px,4vw,50px)", lineHeight: 1.08, letterSpacing: "-0.03em", fontWeight: 800, margin: "0 0 22px" }}>
            Everything you
            <br />
            need to <span style={{ color: "#8B5CF6" }}>send,</span>
            <br />
            <span style={{ color: "#8B5CF6" }}>scale and</span>
            <br />
            <span
              style={{
                background: "linear-gradient(100deg,#F472B6,#F0779A)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              succeed.
            </span>
          </h2>
          <p style={{ fontSize: 16, lineHeight: 1.6, color: "#A9A4B8", margin: "0 0 30px", maxWidth: 300 }}>
            Powerful tools. Smart automation. Deeper insights. All in one place.
          </p>
          <button
            className={styles.ghostButton}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 10,
              padding: "14px 26px",
              borderRadius: 14,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "#EDEBF4",
              fontWeight: 700,
              fontSize: 15,
              cursor: "pointer",
            }}
          >
            Explore all features
            <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </Reveal>
        <StaggerGroup ref={gridRef} style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {cards.map((card) => (
            <div
              key={card.title}
              className={styles.liftCard}
              style={
                {
                  borderRadius: 18,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "#121019",
                  padding: 26,
                  "--hover-border": card.hoverBorder,
                } as CSSProperties
              }
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 13,
                  background: card.gradient,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 18,
                  boxShadow: card.shadow,
                }}
              >
                {card.icon}
              </div>
              <h3 style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em", margin: "0 0 9px" }}>{card.title}</h3>
              <p style={{ fontSize: 14, color: "#A9A4B8", lineHeight: 1.55, margin: 0 }}>{card.desc}</p>
            </div>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
