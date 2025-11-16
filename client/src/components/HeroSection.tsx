import { ArrowDown } from "lucide-react";
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
        <div className="mb-6 md:mb-8 flex justify-center">
          <img
            src="/images/pptx/image1.png"
            alt="Símbolo NeoGovernança"
            className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40"
          />
        </div>

        {/* Brand Name */}
        <h1 className="font-display text-4xl md:text-6xl lg:text-8xl font-bold text-foreground mb-3 md:mb-4">
          NeoGovernança
        </h1>

        {/* Tagline */}
        <p className="font-body text-base md:text-lg lg:text-xl text-muted-foreground mb-6 md:mb-8 max-w-2xl mx-auto italic">
          Em equilíbrio, tudo gira.
        </p>

        {/* Gyroscope Image */}
        <div className="mb-12 flex justify-center">
          <div className="relative w-full max-w-md aspect-square">
            <img
              src="/images/page-01.png"
              alt="Giroscópio NeoGovernança"
              className="w-full h-full object-contain mix-blend-multiply"
            />
          </div>
        </div>

        {/* Main Headline */}
        <h2 className="font-display text-2xl md:text-3xl lg:text-5xl font-semibold text-foreground mb-6 md:mb-8 max-w-4xl mx-auto leading-tight">
          Uma postura diante da complexidade
        </h2>

        {/* Author Credit */}
        <div className="border-t border-border pt-6 max-w-2xl mx-auto">
          <p className="font-display text-xl md:text-2xl font-semibold text-foreground mb-2">
            Renato de Faria e Almeida Prado
          </p>
          <p className="font-body text-sm md:text-base text-muted-foreground">
            Conselheiro e estrategista em NeoGovernança
          </p>
        </div>

        {/* Scroll Indicator */}
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce hover:text-primary transition-colors"
        >
          <ArrowDown className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
