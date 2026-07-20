import Nav from "@/components/marketing/Nav";
import Footer from "@/components/marketing/Footer";
import Hero from "@/components/landing/Hero";
import TrustStrip from "@/components/landing/TrustStrip";
import FeatureGridColorful from "@/components/landing/FeatureGridColorful";
import FeaturesSection from "@/components/landing/FeaturesSection";
import BuiltForGrowth from "@/components/landing/BuiltForGrowth";
import StatsBand from "@/components/landing/StatsBand";
import HowItWorks from "@/components/landing/HowItWorks";
import ProcessAccordion from "@/components/landing/ProcessAccordion";
import Solutions from "@/components/landing/Solutions";
import DeliverabilityDeepDive from "@/components/landing/DeliverabilityDeepDive";
import Testimonials from "@/components/landing/Testimonials";
import Integrations from "@/components/landing/Integrations";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <div style={{ position: "relative", background: "#08070C", minHeight: "100vh" }}>
      <Nav variant="landing" />
      <Hero />
      <TrustStrip />
      <FeatureGridColorful />
      <FeaturesSection />
      <StatsBand />
      <BuiltForGrowth />
      <HowItWorks />
      <ProcessAccordion />
      <Solutions />
      <DeliverabilityDeepDive />
      <Testimonials />
      <Integrations />
      <FinalCTA />
      <Footer variant="landing" />
    </div>
  );
}
