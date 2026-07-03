import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContextSection from "@/components/ContextSection";
import WhatIsSection from "@/components/WhatIsSection";
import ThreePillarsInPractice from "@/components/ThreePillarsInPractice";
import AuthorSection from "@/components/AuthorSection";
import ComparisonSection from "@/components/ComparisonSection";
import AISection from "@/components/AISection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <ContextSection />
      <WhatIsSection />

      {/* Convite discreto ao Manifesto — fundação filosófica */}
      <section className="bg-background py-10 md:py-14">
        <div className="container px-4">
          <Link
            href="/manifesto"
            className="group mx-auto flex max-w-3xl items-center justify-between gap-4 rounded-2xl border border-border/60 bg-card/50 px-6 py-5 shadow-sm transition-all duration-300 hover:border-primary/50 hover:bg-card hover:shadow-md"
          >
            <div className="flex flex-col gap-1">
              <span className="font-display text-xs font-semibold uppercase tracking-wider text-primary">
                Fundação filosófica
              </span>
              <span className="font-body text-base text-foreground/80 md:text-lg">
                Aprofunde-se na fundação filosófica da NeoGovernança
              </span>
            </div>
            <ArrowRight className="h-5 w-5 flex-shrink-0 text-primary transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <ComparisonSection />
      <ThreePillarsInPractice />
      <AuthorSection />
      <AISection />
      <ContactSection />
      <Footer />
    </div>
  );
}
