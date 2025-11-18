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
          <div className="space-y-6 text-lg md:text-xl text-secondary-foreground/90 leading-relaxed max-w-3xl mx-auto">
            <p className="text-center">
              O símbolo da NeoGovernança é inspirado no infinito — mas com três alças, representando os três eixos que sustentam esse novo modelo: <strong>progresso econômico, conexão humana e harmonia com a natureza</strong>.
            </p>
            <p className="text-center">
              Enquanto o mundo atual ainda baseia seus modelos de negócio na <strong>escassez</strong> — gerando acumulação, destruição e competição — a NeoGovernança propõe um novo fundamento: <strong className="text-secondary-foreground text-2xl">a abundância</strong>.
            </p>
            <p className="font-semibold text-secondary-foreground text-2xl text-center">
              Abundância não é excesso.
              <br />
              É fluidez, regeneração e interdependência.
            </p>
            <p className="text-center italic">
              O movimento só é possível onde há abundância.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
