
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import CtaSection from "../components/CtaSection";
import HeroSection from "../components/sections/HeroSection";
import AboutSection from "../components/sections/AboutSection";
import ServicesSection from "../components/sections/ServicesSection";
import SpeakingSection from "../components/sections/SpeakingSection";
import TestimonialsSection from "../components/sections/TestimonialsSection";
import useScrollAnimation from "../hooks/useScrollAnimation";

const Index = () => {
  // Use the scroll animation hook
  useScrollAnimation();

  return (
    <div className="min-h-screen bg-luxe-cream">
      <Navbar />
      
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <SpeakingSection />
      <TestimonialsSection />

      {/* Final CTA Section */}
      <CtaSection 
        title="Ready to Elevate Your Business Strategy?"
        subtitle="Schedule a consultation to discuss your specific challenges and objectives."
        buttonText="Book Your Consultation"
        buttonLink="/consultation"
        className="animate-on-scroll opacity-0"
      />

      <Footer />
    </div>
  );
};

export default Index;
