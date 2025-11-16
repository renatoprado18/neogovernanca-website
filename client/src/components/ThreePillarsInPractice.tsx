import { TrendingUp, Heart, Sprout } from "lucide-react";

const practices = [
  {
    icon: TrendingUp,
    title: "Progresso Econômico",
    color: "text-primary",
    bgColor: "bg-primary",
    items: [
      "Inovação viável.",
      "Valor sem perder essência.",
    ],
  },
  {
    icon: Heart,
    title: "Conexão Humana",
    color: "text-secondary",
    bgColor: "bg-secondary",
    items: [
      "Escuta ativa.",
      "Vozes diversas.",
      "Vínculos de confiança.",
    ],
  },
  {
    icon: Sprout,
    title: "Harmonia com a Natureza",
    color: "text-muted",
    bgColor: "bg-muted",
    items: [
      "Respeito pelo tempo.",
      "Consciência ecológica.",
    ],
  },
];

export default function ThreePillarsInPractice() {
  return (
    <section id="three-pillars" className="py-20 md:py-32 bg-primary text-primary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
            Como os Três Eixos se
            <br />
            Manifestam na Prática
          </h2>

          {/* Practices Grid */}
          <div className="space-y-12 md:space-y-16">
            {practices.map((practice, index) => {
              const Icon = practice.icon;
              const isEven = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`flex flex-col ${
                    isEven ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-8 items-center`}
                >
                  {/* Icon Side */}
                  <div className="flex-shrink-0">
                    <div
                      className={`w-32 h-32 md:w-40 md:h-40 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center`}
                    >
                      <Icon className="w-16 h-16 md:w-20 md:h-20 text-primary-foreground" />
                    </div>
                  </div>

                  {/* Content Side */}
                  <div className="flex-1">
                    <h3 className="font-display text-3xl md:text-4xl font-bold mb-6 text-center md:text-left">
                      {practice.title}
                    </h3>
                    <ul className="space-y-4">
                      {practice.items.map((item, itemIndex) => (
                        <li
                          key={itemIndex}
                          className="flex items-start gap-3 text-lg md:text-xl text-primary-foreground/90"
                        >
                          <span className="flex-shrink-0 w-2 h-2 rounded-full bg-accent mt-2" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
