import { TrendingUp, Users, Leaf } from "lucide-react";

export default function TripartiteGyroscopeSection() {
  return (
    <section className="py-20 md:py-32 bg-muted text-muted-foreground">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-12 text-center">
            O Giroscópio Tripartido:
            <br />
            o Coração da NeoGovernança
          </h2>

          {/* Intro */}
          <p className="text-xl md:text-2xl text-background/90 mb-12 text-center leading-relaxed">
            Giroscópio, abundância, yin-yang:
            <br />
            equilíbrio entre opostos.
          </p>

          {/* Three Elements */}
          <div className="mb-16">
            <ul className="space-y-4 text-lg md:text-xl text-background/90">
              <li className="flex items-center gap-3">
                <TrendingUp className="w-6 h-6 text-primary flex-shrink-0" />
                <span>O impulso do Progresso Econômico</span>
              </li>
              <li className="flex items-center gap-3">
                <Users className="w-6 h-6 text-secondary flex-shrink-0" />
                <span>A sensibilidade da Conexão Humana</span>
              </li>
              <li className="flex items-center gap-3">
                <Leaf className="w-6 h-6 text-accent flex-shrink-0" />
                <span>A sabedoria da Harmonia com a Natureza</span>
              </li>
            </ul>
          </div>

          {/* Symbol Display */}
          <div className="flex justify-center mb-16">
            <div className="relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 rounded-full bg-background/20 backdrop-blur-sm animate-pulse" />
              <div className="absolute inset-4 rounded-full bg-background flex items-center justify-center">
                <div className="w-32 h-32 md:w-40 md:h-40 relative">
                  {/* Tripartite symbol with animation */}
                  <div className="absolute inset-0 rounded-full border-[6px] border-primary opacity-70 animate-spin-slow" />
                  <div className="absolute inset-0 rounded-full border-[6px] border-secondary opacity-70 rotate-120 animate-spin-slow" />
                  <div className="absolute inset-0 rounded-full border-[6px] border-accent opacity-70 rotate-240 animate-spin-slow" />
                  {/* Center dots */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-accent" />
                </div>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl text-background/90 leading-relaxed">
            <p className="font-semibold text-background text-2xl">
              O giro sustenta a estabilidade.
              <br />
              Não a rigidez.
            </p>

            <p className="text-center text-2xl md:text-3xl font-display font-bold text-background pt-8">
              Abundância nasce quando giramos juntos.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
