import { Brain, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

const platforms = [
  {
    icon: Brain,
    name: "imensIAH",
    description:
      "Diagnósticos estratégicos completos (SWOT, PESTEL, OKRs) que transformam dados empresariais em decisões alinhadas aos princípios da NeoGovernança.",
    features: [
      "Análise SWOT com IA + IH",
      "Insights PESTEL estratégicos",
      "OKRs alinhados aos 3 eixos",
    ],
    url: "https://imensiah.com.br",
    color: "from-purple-500 to-pink-500",
  },
];

export default function AISection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-background via-muted/30 to-background">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 text-center">
            NeoGovernança Potencializada por IA
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground text-center mb-16 max-w-3xl mx-auto">
            A NeoGovernança ganha escala e profundidade quando combinada com Inteligência Artificial estratégica
          </p>

          {/* Platforms Grid */}
          <div className="grid gap-8 mb-16 max-w-2xl mx-auto">
            {platforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-3xl bg-card p-8 md:p-10 shadow-xl hover-lift transition-all duration-500 border border-border"
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${platform.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-2xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-10 h-10 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>

                    {/* Name */}
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-4 text-card-foreground">
                      {platform.name}
                    </h3>

                    {/* Description */}
                    <p className="text-card-foreground/80 leading-relaxed mb-6">
                      {platform.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-8">
                      {platform.features.map((feature, idx) => (
                        <li
                          key={idx}
                          className="flex items-start gap-3 text-card-foreground/70"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* CTA */}
                    <Button
                      variant="outline"
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                      onClick={() => window.open(platform.url, "_blank")}
                    >
                      Conheça {platform.name}
                      <ExternalLink className="ml-2 w-4 h-4" />
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom Statement */}
          <div className="text-center max-w-4xl mx-auto bg-card/50 backdrop-blur-sm rounded-2xl p-8 md:p-12 border border-border">
            <p className="text-xl md:text-2xl font-display text-foreground mb-4">
              Inteligência Artificial não substitui a sabedoria humana.
            </p>
            <p className="text-lg md:text-xl text-muted-foreground">
              Ela a amplifica, permitindo que conselhos naveguem a complexidade com clareza, velocidade e profundidade sem precedentes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
