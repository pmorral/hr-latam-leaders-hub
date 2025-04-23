
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import BenefitsSection from "@/components/BenefitsSection";
import MembersSection from "@/components/MembersSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ProviderSection from "@/components/ProviderSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <BenefitsSection />
      <MembersSection />
      <TestimonialsSection />
      <ProviderSection />
      <Footer />
    </div>
  );
};

export default Index;
