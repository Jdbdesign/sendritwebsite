import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Sendrit — Bulk email that cuts through the noise",
  description:
    "Sendrit verifies your list, paces every send, and tracks what lands — so your campaigns reach real inboxes, not spam folders.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={manrope.variable}>
      <body style={{ fontFamily: "var(--font-manrope), system-ui, sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
