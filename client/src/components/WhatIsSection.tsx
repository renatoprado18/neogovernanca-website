import { TrendingUp, Heart, Leaf } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const pillars = [
  {
    icon: TrendingUp,
    title: "Progresso Econômico",
    description: "Sustentabilidade e inteligência financeira. Inovação com viabilidade. Reposicionar produtos, adotar IA com propósito, ampliar valor sem perder essência. Visão de longo prazo.",
    color: "from-primary to-primary/80",
  },
  {
    icon: Heart,
    title: "Conexão Humana",
    description: "Empatia, escuta coletiva e inteligência colaborativa. Liderança com escuta ativa. Cuidar das pessoas dentro e ao redor da empresa. Incluir vozes diversas e fortalecer vínculos de confiança.",
    color: "from-accent to-accent/80",
  },
  {
    icon: Leaf,
    title: "Harmonia com a Natureza",
    description: "Decisões alinhadas aos ciclos naturais e regenerativos. Respeito pelo tempo e pelo território. Tomar decisões com consciência ecológica, honrando os ritmos da natureza.",
    color: "from-muted to-muted/80",
  },
];

export default function WhatIsSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);

  return (
    <section
      id="what-is"
      ref={ref as React.RefObject<HTMLElement>}
      className="py-16 md:py-24 lg:py-32 bg-background"
    >
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2
            className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            O que é NeoGovernança?
          </h2>

          {/* Definition */}
          <div
            className={`text-center mb-16 space-y-6 transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl text-foreground/80">
              A NeoGovernança é uma <strong>filosofia viva</strong>: adaptável, humana, conectada à natureza.
            </p>
            <p className="text-lg md:text-xl text-foreground/70 mb-4">
              Uma abordagem sistêmica para conselhos que enfrentam o impossível: crescer sem destruir, inovar sem perder propósito, lucrar sem esgotar.
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Não é checklist. Não é compliance.
              <br />
              É <span className="text-primary">consciência aplicada à liderança</span> em tempos complexos.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-2xl bg-card p-8 shadow-lg hover-lift transition-all duration-700 ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{
                    transitionDelay: `${300 + index * 150}ms`,
                  }}
                >
                  {/* Gradient Background */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${pillar.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                  />

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="mb-6 inline-flex p-4 rounded-xl bg-gradient-to-br from-primary/10 to-accent/10 group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-8 h-8 text-primary group-hover:text-accent transition-colors duration-500" />
                    </div>

                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold mb-4 text-card-foreground">
                      {pillar.title}
                    </h3>

                    {/* Description */}
                    <p className="text-card-foreground/80 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Closing Statement */}
          <div
            className={`text-center max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="text-xl md:text-2xl font-display italic text-foreground/90">
              Esses três eixos giram juntos, criando estabilidade em meio ao
              movimento.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
