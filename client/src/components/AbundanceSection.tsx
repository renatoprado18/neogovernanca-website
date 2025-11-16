import { Infinity } from "lucide-react";

export default function AbundanceSection() {
  return (
    <section className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-12 text-center">
            A Abundância como
            <br />
            Fundamento da NeoGovernança
          </h2>

          {/* Symbol */}
          <div className="flex justify-center mb-12">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-secondary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Infinity className="w-20 h-20 md:w-24 md:h-24 text-secondary-foreground" />
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl text-secondary-foreground/90 leading-relaxed text-center">
            <p className="font-semibold text-secondary-foreground text-2xl">
              Escassez gera acumulação.
              <br />
              Abundância gera movimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
