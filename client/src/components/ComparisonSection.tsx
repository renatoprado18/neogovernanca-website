import { ArrowRight } from "lucide-react";

const comparisons = [
  {
    traditional: "Controle rígido",
    neo: "Equilíbrio dinâmico",
  },
  {
    traditional: "Compliance como fim",
    neo: "Consciência como fundamento",
  },
  {
    traditional: "Foco em shareholder",
    neo: "Foco em stakeholders (progresso, pessoas, planeta)",
  },
  {
    traditional: "Decisões baseadas em Chronos (relógio)",
    neo: "Decisões baseadas em Kairós (momento certo)",
  },
  {
    traditional: "Escassez como premissa",
    neo: "Abundância como potencial",
  },
];

export default function ComparisonSection() {
  return (
    <section className="py-20 md:py-32 bg-muted">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 text-center">
            Tradicional vs. NeoGovernança
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            Uma mudança de paradigma, não apenas de processo
          </p>

          {/* Comparison Grid */}
          <div className="space-y-6">
            {comparisons.map((item, index) => (
              <div
                key={index}
                className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-8 items-center bg-card rounded-2xl p-6 md:p-8 shadow-lg hover-lift transition-all duration-300"
              >
                {/* Traditional */}
                <div className="text-center md:text-right">
                  <p className="text-base md:text-lg text-muted-foreground/80">
                    {item.traditional}
                  </p>
                </div>

                {/* Arrow */}
                <div className="flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <ArrowRight className="w-6 h-6 text-primary" />
                  </div>
                </div>

                {/* NeoGovernança */}
                <div className="text-center md:text-left">
                  <p className="text-base md:text-lg font-semibold text-primary">
                    {item.neo}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="text-lg md:text-xl italic text-muted-foreground">
              A NeoGovernança não rejeita o passado — ela o transcende, integrando sabedoria ancestral com as demandas do futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
