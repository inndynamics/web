import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import AgencySection from "@/components/sections/AgencySection";
import AgentCatalogSection from "@/components/sections/AgentCatalogSection";
import TopAgentsSection from "@/components/sections/TopAgentsSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import PricingSection from "@/components/sections/PricingSection";
import OnboardingSection from "@/components/sections/OnboardingSection";
import IntegrationsSection from "@/components/sections/IntegrationsSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import CTASection from "@/components/sections/CTASection";
import StatsSection from "@/components/sections/StatsSection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <AgencySection />
      <AgentCatalogSection />
      <TopAgentsSection />
      <ComparisonSection />
      <PricingSection />
      <OnboardingSection />
      <IntegrationsSection />
      <TestimonialsSection />
      <CTASection />
      <StatsSection />
      <Footer />
    </div>
  );
};

export default Index;
