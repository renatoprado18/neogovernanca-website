import { Lightbulb, Target, Cpu, Rocket, Users, Building } from "lucide-react";

const expertise = [
  { icon: Lightbulb, label: "NeoGovernança" },
  { icon: Target, label: "Estratégia de Futuro" },
  { icon: Cpu, label: "Inteligência Artificial" },
  { icon: Rocket, label: "Novas Tecnologias" },
  { icon: Users, label: "Liderança Inclusiva" },
  { icon: Building, label: "Cultura Organizacional" },
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
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/page-02.png"
                  alt="Renato de Faria e Almeida Prado"
                  className="w-full h-full object-cover"
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
                  Conselheiro em conselhos estratégicos e consultivos.
                </p>
              </div>

              <div className="space-y-4 text-lg text-secondary-foreground/90 leading-relaxed">
                <p>
                  Atua promovendo a NeoGovernança – o futuro da Governança -
                  baseada no equilíbrio entre progresso econômico, conexão
                  humana e harmonia com a natureza.
                </p>

                <p>
                  Implementa e lidera Conselhos Consultivos e de Administração
                  conectando estratégia e inovação.
                </p>

                <p>
                  Atuou como CEO e fundador em organizações dos setores de
                  tecnologia, alimentos e bebidas, e serviços, liderando
                  projetos voltados à criação de valor econômico, impacto social
                  e empreendedorismo inclusivo.
                </p>

                <p className="font-semibold text-secondary-foreground">
                  Certificado CCA-IBGC e PFCC-Board Academy.
                </p>
              </div>

              {/* Expertise */}
              <div>
                <h4 className="font-display text-2xl font-bold mb-6">
                  Expertise para Conselhos
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
