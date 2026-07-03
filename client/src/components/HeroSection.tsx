import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToNext = () => {
    const element = document.querySelector("#context");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-background overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="container relative z-10 text-center px-4 py-12 md:py-20">
        {/* Logo Symbol */}
        <div className="mb-6 md:mb-8 flex justify-center animate-scale-in delay-200">
          <img
            src="/images/pptx/image1.png"
            alt="Símbolo NeoGovernança"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 hover-lift transition-smooth"
          />
        </div>

        {/* Audience Badge */}
        <div className="mb-4 md:mb-6 flex justify-center animate-fade-in delay-250">
          <span className="inline-block text-[11px] md:text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground/80 border border-border/70 rounded-full px-4 py-1.5 bg-background/40 backdrop-blur-sm">
            Para conselhos, sócios e presidentes de empresas de R$50M a R$500M
          </span>
        </div>

        {/* Brand Name */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-3 md:mb-4 animate-fade-in-up delay-300">
          NeoGovernança
        </h1>

        {/* Main Tagline */}
        <p className="font-display text-2xl md:text-3xl lg:text-4xl font-semibold text-primary mb-4 md:mb-6 animate-fade-in delay-350">
          Progresso. Conexão. Harmonia.
        </p>

        {/* Tagline */}
        <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto italic animate-fade-in delay-400">
          Em equilíbrio, tudo gira. Em rigidez, tudo quebra.
        </p>

        {/* Gyroscope Image */}
        <div className="mb-12 flex justify-center animate-fade-in-up delay-500">
          <div className="relative w-full max-w-md aspect-square group">
            <img
              src="/images/pptx/image8.png"
              alt="Giroscópio NeoGovernança"
              className="w-full h-full object-contain transition-smooth group-hover:scale-105 animate-float"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground mb-6 md:mb-8 max-w-4xl mx-auto leading-tight animate-fade-in-up delay-600">
          A nova inteligência para conselhos do século XXI
        </h2>

        {/* Author Credit */}
        <div className="border-t border-border pt-6 max-w-2xl mx-auto animate-fade-in delay-700">
          <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            Renato de Faria e Almeida Prado
          </p>
          <p className="text-sm md:text-base text-muted-foreground">
            Conselheiro do Futuro | AI Thinker
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8 animate-fade-in delay-700">
          <Button
            size="lg"
            onClick={() => {
              const element = document.querySelector("#contato");
              if (element) element.scrollIntoView({ behavior: "smooth" });
            }}
            className="hover-lift text-base md:text-lg px-6 md:px-8 py-4 md:py-6"
          >
            Agende Diagnóstico Gratuito
          </Button>
          <Button
            size="lg"
            variant="outline"
            onClick={scrollToNext}
            className="hover-lift text-base md:text-lg px-6 md:px-8 py-4 md:py-6 bg-transparent"
          >
            Conheça a Metodologia
          </Button>
        </div>

        {/* Scroll Down Button */}
        <Button
          onClick={scrollToNext}
          variant="ghost"
          size="icon"
          className="mt-4 mx-auto rounded-full animate-bounce hover:animate-none transition-smooth"
          aria-label="Rolar para próxima seção"
        >
          <ChevronDown className="w-6 h-6" />
        </Button>
      </div>
    </section>
  );
}
