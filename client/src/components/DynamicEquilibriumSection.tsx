export default function DynamicEquilibriumSection() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="container px-4">
        <div className="max-w-5xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-card-foreground mb-12 text-center">
            O Equilíbrio Dinâmico
            <br />
            <span className="text-primary">a nova inteligência da liderança</span>
          </h2>

          {/* Content */}
          <div className="space-y-8 text-lg md:text-xl text-card-foreground/80 leading-relaxed mb-16">
            <p className="text-center font-semibold text-card-foreground">
              Governar no século XXI não é manter tudo sob controle. É manter
              tudo em equilíbrio.
            </p>

            <p>
              Vivemos em um mundo que exige decisões rápidas, mas conscientes.
              Tensões não devem ser eliminadas - devem ser navegadas.
            </p>

            <p>
              A NeoGovernança propõe uma nova inteligência: liderar em
              movimento, ajustado com precisão entre os eixos do progresso, da
              conexão e da harmonia.
            </p>

            <p className="text-center italic text-2xl md:text-3xl font-display text-card-foreground">
              Assim como um giroscópio: quanto mais gira, mais estável se torna.
            </p>
          </div>

          {/* Gyroscope Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-lg">
              <div className="aspect-square relative">
                <img
                  src="/images/page-07.png"
                  alt="Giroscópio - Equilíbrio Dinâmico"
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
