import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import ScrollRotateMandala from "@/components/ScrollRotateMandala";
import HeroSection from "@/components/HeroSection";
import DanceFormsSection from "@/components/DanceFormsSection";
import AboutSection from "@/components/AboutSection";
import ClassLevelsSection from "@/components/ClassLevelsSection";
import FeeStructureSection from "@/components/FeeStructureSection";
import StagePerformanceSection from "@/components/StagePerformanceSection";
import AdmissionsOpenSection from "@/components/AdmissionsOpenSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import JournalSection from "@/components/JournalSection";
import GallerySection from "@/components/GallerySection";
import BenefitsSection from "@/components/BenefitsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.replace("#", "");
      const el = document.getElementById(id);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth" }), 100);
      }
    }
  }, [hash]);

  return (
    <div className="min-h-screen scroll-smooth">
      <ScrollRotateMandala />
      <div className="relative z-10">
        <Navbar />
        <HeroSection />
        <DanceFormsSection />
        <AboutSection />
        <ClassLevelsSection />
        <FeeStructureSection />
        <StagePerformanceSection />
        <AdmissionsOpenSection />
        <TestimonialsSection />
        <JournalSection />
        <GallerySection />
        <BenefitsSection />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
