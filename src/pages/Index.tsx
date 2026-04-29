import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import AgentCatalogSection from "@/components/sections/AgentCatalogSection";
import TopAgentsSection from "@/components/sections/TopAgentsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import OnboardingSection from "@/components/sections/OnboardingSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CasesSection from "@/components/sections/CasesSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import LocationsSection from "@/components/sections/LocationsSection";
import PrivateEquitySection from "@/components/sections/PrivateEquitySection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <PrivateEquitySection />
      <AgentCatalogSection />
      <TopAgentsSection />
      <ComparisonSection />
      <PricingSection />
      <OnboardingSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CasesSection />
      <LocationsSection />
      <CTASection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
