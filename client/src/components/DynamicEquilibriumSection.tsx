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
            <p className="text-center font-semibold text-card-foreground text-2xl">
              Governar no século XXI não é controlar.
              <br />
              É equilibrar.
            </p>

            <p>
              Tensões não devem ser eliminadas. Devem ser navegadas.
            </p>

            <p className="text-center italic text-2xl md:text-3xl font-display text-card-foreground">
              Como um giroscópio: quanto mais gira, mais estável.
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
