"use client";

import Link from "next/link";
import { useScrollSpy } from "@/hooks/useScrollSpy";
import styles from "./nav.module.css";

const INACTIVE = "#B4B0C2";
const ACTIVE = "#C4B5FD";

export default function Nav({ variant }: { variant: "landing" | "pricing" }) {
  const activeId = useScrollSpy(variant === "landing" ? ["features", "deliverability"] : []);

  return (
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 60,
        backdropFilter: "blur(18px)",
        WebkitBackdropFilter: "blur(18px)",
        background: "rgba(8,7,12,0.72)",
        borderBottom: "1px solid rgba(255,255,255,0.05)",
      }}
    >
      <div
        style={{
          margin: "0 70px",
          padding: "16px 0",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {variant === "pricing" ? (
            <Link href="/" style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em", color: "#EDEBF4" }}>
              Sendrit
            </Link>
          ) : (
            <span style={{ fontWeight: 800, fontSize: 19, letterSpacing: "-0.02em" }}>Sendrit</span>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 34, fontSize: 15, color: INACTIVE, fontWeight: 500 }}>
          {variant === "landing" ? (
            <>
              <a href="#features" style={{ color: activeId === "features" ? ACTIVE : INACTIVE }}>
                Product
              </a>
              <a href="#deliverability" style={{ color: activeId === "deliverability" ? ACTIVE : INACTIVE }}>
                Deliverability
              </a>
              <Link href="/pricing" style={{ color: INACTIVE }}>
                Pricing
              </Link>
              <a href="#docs" style={{ color: INACTIVE }}>
                Docs
              </a>
            </>
          ) : (
            <>
              <Link href="/#features" style={{ color: INACTIVE }}>
                Features
              </Link>
              <Link href="/#deliverability" style={{ color: INACTIVE }}>
                Deliverability
              </Link>
              <a href="#pricing" style={{ color: ACTIVE }}>
                Pricing
              </a>
              <Link href="/" style={{ color: INACTIVE }}>
                Testimonials
              </Link>
            </>
          )}
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <a href="#login" style={{ color: INACTIVE, fontSize: 15, fontWeight: 600 }}>
            Log in
          </a>
          <button className={styles.ctaButton}>{variant === "landing" ? "Start sending" : "Get started"}</button>
        </div>
      </div>
    </nav>
  );
}
