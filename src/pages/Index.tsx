import Navigation from "@/components/Navigation";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import ServicesSection from "@/components/sections/ServicesSection";
import TechStackSection from "@/components/sections/TechStackSection";
import MethodologySection from "@/components/sections/MethodologySection";
import IdealCustomerSection from "@/components/sections/IdealCustomerSection";
import DifferentiatorsSection from "@/components/sections/DifferentiatorsSection";
import CasesSection from "@/components/sections/CasesSection";
import TeamSection from "@/components/sections/TeamSection";
import FAQSection from "@/components/sections/FAQSection";
import CTASection from "@/components/sections/CTASection";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ValueProposition />
      <ServicesSection />
      <TechStackSection />
      <MethodologySection />
      <IdealCustomerSection />
      <DifferentiatorsSection />
      <CasesSection />
      <TeamSection />
      <FAQSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Index;
