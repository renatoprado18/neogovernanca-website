import HeroSection from "@/components/HeroSection";
import ContextSection from "@/components/ContextSection";
import WhatIsSection from "@/components/WhatIsSection";
import ThreePillarsInPractice from "@/components/ThreePillarsInPractice";
import AbundanceSection from "@/components/AbundanceSection";
import DynamicEquilibriumSection from "@/components/DynamicEquilibriumSection";
import TripartiteGyroscopeSection from "@/components/TripartiteGyroscopeSection";
import EtymologySection from "@/components/EtymologySection";
import PhilosophiesSection from "@/components/PhilosophiesSection";
import AuthorSection from "@/components/AuthorSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ComparisonSection from "@/components/ComparisonSection";
import AISection from "@/components/AISection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ContextSection />
      <WhatIsSection />
      <ThreePillarsInPractice />
      <AbundanceSection />
      <DynamicEquilibriumSection />
      <TripartiteGyroscopeSection />
      <EtymologySection />
      <PhilosophiesSection />
      <ComparisonSection />
      <AISection />
      <AuthorSection />
      <TestimonialsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
