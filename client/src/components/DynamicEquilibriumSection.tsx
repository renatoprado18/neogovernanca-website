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
          <div className="mb-16">
            <p className="text-center font-semibold text-card-foreground text-3xl md:text-4xl">
              Quanto mais gira, mais estável.
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
