import { Lightbulb, Brain, Sparkles, TrendingUp, Leaf, Heart } from "lucide-react";

const expertise = [
  { icon: Lightbulb, label: "NeoGovernança" },
  { icon: Brain, label: "AI Board Advisory" },
  { icon: Sparkles, label: "IA Generativa" },
  { icon: TrendingUp, label: "Estratégia & M&A" },
  { icon: Leaf, label: "ESG & B-Corp" },
  { icon: Heart, label: "Impacto Social" },
];

export default function AuthorSection() {
  return (
    <section id="author" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
            Sobre o Autor
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Author Image */}
            <div className="order-2 md:order-1">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/author-renato.jpg"
                  alt="Renato de Faria e Almeida Prado"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>

            {/* Author Info */}
            <div className="order-1 md:order-2 space-y-8">
              <div>
                <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                  Renato de Faria e Almeida Prado
                </h3>
                <p className="text-xl text-secondary-foreground/90 mb-6">
                  Conselheiro do Futuro | AI Thinker | Co-fundador 10XMentorAI
                </p>
              </div>

              <div className="space-y-4 text-lg text-secondary-foreground/90 leading-relaxed">
                <p>
                  Quase 30 anos em conselhos, inovação e liderança com propósito.
                </p>

                <p className="font-semibold text-secondary-foreground">
                  CCA-IBGC | AI on Board - Board Academy
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="font-display text-2xl font-bold mb-6">
                  Expertise
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  {expertise.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={index}
                        className="flex items-center gap-3 bg-secondary-foreground/10 backdrop-blur-sm rounded-lg p-3"
                      >
                        <Icon className="w-5 h-5 text-secondary-foreground flex-shrink-0" />
                        <span className="text-sm font-medium">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
