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
          <div className="mb-16 space-y-6 max-w-3xl mx-auto">
            <p className="text-center text-xl md:text-2xl text-card-foreground/80">
              Governar no século XXI não é manter tudo sob controle.
              <br />
              É manter tudo em equilíbrio.
            </p>
            <p className="text-center text-lg md:text-xl text-card-foreground/70 mb-4">
              Vivemos em um mundo que exige decisões rápidas, mas conscientes. Tensões não devem ser eliminadas — devem ser navegadas.
            </p>
            <p className="text-center font-semibold text-card-foreground text-2xl md:text-3xl">
              Como um giroscópio: quanto mais gira, mais estável.
            </p>
          </div>

          {/* Gyroscope Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <img
                src="/images/pptx/image8.png"
                alt="Giroscópio - Equilíbrio Dinâmico"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
