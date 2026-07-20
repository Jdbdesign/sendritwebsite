import type { Metadata } from "next";
import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import PricingHero from "@/components/pricing/PricingHero";
import PricingGrid from "@/components/pricing/PricingGrid";
import FAQ from "@/components/pricing/FAQ";

export const metadata: Metadata = {
  title: "Pricing — Sendrit",
  description: "Choose the plan that fits your sending needs. Upgrade or downgrade anytime.",
};

export default function PricingPage() {
  return (
    <div style={{ position: "relative", background: "#08070C", minHeight: "100vh" }}>
      <Nav variant="pricing" />
      <PricingHero />
      <PricingGrid />
      <FAQ />
      <Footer variant="pricing" />
    </div>
  );
}
