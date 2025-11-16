import { Waves, Users, Leaf } from "lucide-react";

const pillars = [
  {
    icon: Waves,
    title: "Progresso Econômico",
    color: "text-primary",
    bgColor: "bg-primary/10",
    description: "Sustentabilidade financeira, Inovação e visão de longo prazo.",
  },
  {
    icon: Users,
    title: "Conexão Humana",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    description: "Empatia, escuta e inteligência coletiva.",
  },
  {
    icon: Leaf,
    title: "Harmonia com a Natureza",
    color: "text-muted",
    bgColor: "bg-muted/10",
    description: "Decisões alinhadas aos ciclos naturais e regenerativos.",
  },
];

export default function WhatIsSection() {
  return (
    <section id="what-is" className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-8 text-center">
            O que é NeoGovernança?
          </h2>

          {/* Definition */}
          <div className="text-center mb-16 space-y-6">
            <p className="text-xl md:text-2xl text-foreground/80">
              Uma filosofia viva: adaptável, humana, conectada à natureza.
            </p>
            <p className="text-2xl md:text-3xl font-display font-semibold text-foreground">
              Não é fórmula. É consciência aplicada.
            </p>
          </div>

          {/* Three Pillars */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={index}
                  className="group relative bg-card rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-border hover:border-accent"
                >
                  {/* Icon */}
                  <div
                    className={`w-16 h-16 md:w-20 md:h-20 rounded-full ${pillar.bgColor} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className={`w-8 h-8 md:w-10 md:h-10 ${pillar.color}`} />
                  </div>

                  {/* Title */}
                  <h3
                    className={`font-display text-xl md:text-2xl font-semibold ${pillar.color} mb-4 text-center`}
                  >
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-card-foreground/80 text-center leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              );
            })}
          </div>


        </div>
      </div>
    </section>
  );
}
