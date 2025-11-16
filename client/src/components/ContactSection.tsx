import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="contact"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden"
    >
      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Headline */}
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Transforme seu conselho
            <br />
            com <span className="text-accent">inteligência e equilíbrio</span>
          </h2>

          {/* Contact Buttons */}
          <div
            className={`flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold hover-lift transition-smooth group"
              onClick={() =>
                window.open("https://www.linkedin.com/in/renatoaprado", "_blank")
              }
            >
              <Linkedin className="w-6 h-6 group-hover:scale-110 transition-transform" />
              LinkedIn
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold hover-lift transition-smooth group"
              onClick={() =>
                window.open(
                  "https://wa.me/5511984153337?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20NeoGovernança",
                  "_blank"
                )
              }
            >
              <Phone className="w-6 h-6 group-hover:scale-110 transition-transform" />
              WhatsApp
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold hover-lift transition-smooth group"
              onClick={() =>
                (window.location.href = "mailto:renato@almeida-prado.com")
              }
            >
              <Mail className="w-6 h-6 group-hover:scale-110 transition-transform" />
              E-mail
            </Button>
          </div>

          {/* Logo Symbol */}
          <div
            className={`flex justify-center mb-8 transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 scale-100"
                : "opacity-0 scale-90"
            }`}
          >
            <div className="relative w-32 h-32 animate-float">
              <div className="absolute inset-0 rounded-full glass flex items-center justify-center shadow-2xl">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-primary-foreground opacity-60 transition-all group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full border-4 border-accent opacity-60 rotate-120 transition-all group-hover:scale-110" />
                  <div className="absolute inset-0 rounded-full border-4 border-secondary-foreground opacity-60 rotate-240 transition-all group-hover:scale-110" />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-display text-2xl md:text-3xl font-bold">
              NeoGovernança
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Progresso. Conexão. Harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
