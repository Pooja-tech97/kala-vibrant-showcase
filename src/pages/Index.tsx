import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import DanceFormsSection from "@/components/DanceFormsSection";
import AboutSection from "@/components/AboutSection";
import ScheduleSection from "@/components/ScheduleSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <DanceFormsSection />
      <AboutSection />
      <ScheduleSection />
      <TestimonialsSection />
      <GallerySection />
      <BenefitsSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
