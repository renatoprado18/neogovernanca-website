import { Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ContactSection() {
  return (
    <section id="contact" className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 opacity-10">
        <img
          src="/images/page-11.png"
          alt="Sala de reunião"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* CTA Headline */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 leading-tight">
            Transforme seu conselho
            <br />
            com <span className="text-accent">inteligência e equilíbrio</span>
          </h2>

          {/* Contact Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold"
              onClick={() =>
                window.open("https://www.linkedin.com/in/renatofap/", "_blank")
              }
            >
              <Linkedin className="w-6 h-6" />
              LinkedIn
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold"
              onClick={() =>
                window.open(
                  "https://wa.me/5511999999999?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20NeoGovernança",
                  "_blank"
                )
              }
            >
              <Phone className="w-6 h-6" />
              WhatsApp
            </Button>

            <Button
              size="lg"
              variant="secondary"
              className="w-full sm:w-auto gap-3 text-lg font-semibold"
              onClick={() =>
                (window.location.href = "mailto:contato@neogovernanca.com.br")
              }
            >
              <Mail className="w-6 h-6" />
              E-mail
            </Button>
          </div>

          {/* Logo Symbol */}
          <div className="flex justify-center mb-8">
            <div className="relative w-32 h-32">
              <div className="absolute inset-0 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <div className="w-20 h-20 relative">
                  <div className="absolute inset-0 rounded-full border-4 border-primary-foreground opacity-60" />
                  <div className="absolute inset-0 rounded-full border-4 border-accent opacity-60 rotate-120" />
                  <div className="absolute inset-0 rounded-full border-4 border-secondary-foreground opacity-60 rotate-240" />
                </div>
              </div>
            </div>
          </div>

          {/* Brand Name */}
          <p className="font-display text-2xl md:text-3xl font-bold">
            NeoGovernança
          </p>
          <p className="text-primary-foreground/80 mt-2">
            Progresso. Conexão. Harmonia.
          </p>
        </div>
      </div>
    </section>
  );
}
