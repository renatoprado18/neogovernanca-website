export default function EtymologySection() {
  return (
    <section className="py-20 md:py-32 bg-background">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-12 text-center">
            NeoGovernança
          </h2>

          {/* Etymology */}
          <div className="mb-12 text-center space-y-4">
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-xl md:text-2xl">
              <div>
                <span className="font-display font-bold text-primary">neo</span>
                <span className="text-muted-foreground ml-2">
                  (novo: para o futuro)
                </span>
              </div>
              <span className="text-muted-foreground hidden md:inline">+</span>
              <div>
                <span className="font-display font-bold text-secondary">
                  governança
                </span>
                <span className="text-muted-foreground ml-2">
                  (gular; dirigir, trilhar)
                </span>
              </div>
            </div>
          </div>



          {/* Road Image */}
          <div className="flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="aspect-[3/4] relative">
                <img
                  src="/images/page-09.png"
                  alt="Caminho da NeoGovernança"
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
