import { Circle, Sparkles, TrendingUp, CircleDot, Clock } from "lucide-react";

const philosophies = [
  {
    icon: Circle,
    name: "Wabi-Sabi",
    description: "A beleza da imperfeição, do que é natural e passageiro.",
    color: "text-primary",
  },
  {
    icon: Sparkles,
    name: "Kintsugi",
    description: "As cicatrizes não são escondidas — são valorizadas.",
    color: "text-secondary",
  },
  {
    icon: TrendingUp,
    name: "Kaizen",
    description: "Melhoria contínua, paciente e constante.",
    color: "text-muted",
  },
  {
    icon: CircleDot,
    name: "Yin-Yang",
    description: "Movimento e equilíbrio entre forças opostas e complementares.",
    color: "text-accent",
  },
  {
    icon: Clock,
    name: "Kairós (vs. Chronos)",
    description:
      "Nem sempre o relógio dita o tempo. A sabedoria está em agir no momento certo.",
    color: "text-primary",
  },
];

export default function PhilosophiesSection() {
  return (
    <section id="philosophies" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
            Filosofias que Inspiram
            <br />a NeoGovernança
          </h2>

          {/* Philosophies Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {philosophies.map((philosophy, index) => {
              const Icon = philosophy.icon;
              return (
                <div
                  key={index}
                  className="bg-primary-foreground/10 backdrop-blur-sm rounded-2xl p-8 hover:bg-primary-foreground/15 transition-all duration-300 border border-primary-foreground/20"
                >
                  {/* Icon */}
                  <div className="mb-6 flex justify-center">
                    <div className="w-20 h-20 rounded-full bg-primary-foreground/10 flex items-center justify-center">
                      <Icon className="w-10 h-10 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Name */}
                  <h3 className="font-display text-2xl md:text-3xl font-bold mb-4 text-center">
                    {philosophy.name}
                  </h3>

                  {/* Description */}
                  <p className="text-primary-foreground/90 text-center leading-relaxed">
                    {philosophy.description}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Bottom Note */}
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-primary-foreground/90 italic">
              Essas filosofias milenares nos ensinam a navegar a complexidade
              com sabedoria, paciência e equilíbrio.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
