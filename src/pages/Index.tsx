
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import MembersSection from "@/components/MembersSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProviderSection from "@/components/ProviderSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <MembersSection />
      <BenefitsSection />
      <TestimonialsSection />
      <ProviderSection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
