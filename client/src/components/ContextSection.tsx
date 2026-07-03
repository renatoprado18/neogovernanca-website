export default function ContextSection() {
  return (
    <section id="context" className="py-12 md:py-20 lg:py-32 bg-card">
      <div className="container px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-display text-3xl md:text-4xl lg:text-6xl font-bold text-card-foreground mb-6 md:mb-8 text-center">
            Um novo tempo exige
            <br />
            um novo modelo de liderança
          </h2>
          
          <p className="text-lg md:text-xl text-card-foreground/80 text-center mb-6 max-w-3xl mx-auto">
            Em um cenário de crescente complexidade, a governança tradicional não é mais suficiente.
          </p>
          
          <p className="text-lg md:text-xl lg:text-2xl text-card-foreground/80 text-center mb-6 md:mb-8 max-w-3xl mx-auto">
            Não estamos apenas em uma era de mudanças.
            <br />
            <strong>Estamos vivendo uma mudança de era.</strong>
          </p>
          
          <div className="bg-card-foreground/10 border border-card-foreground/20 rounded-lg p-6 md:p-8 max-w-2xl mx-auto mb-8 md:mb-12">
            <p className="text-base md:text-lg text-card-foreground/90 text-center">
              A maioria dos conselhos foi desenhada para um mundo que já não existe — e não está preparada para as próximas disrupções.
            </p>
          </div>

          {/* Logo Symbol */}
          <div className="mt-16 flex flex-col items-center gap-6">
            <div className="relative w-32 h-32 md:w-40 md:h-40">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/10 via-secondary/10 to-muted/10" />
              <div className="absolute inset-2 rounded-full bg-card flex items-center justify-center">
                <div className="w-20 h-20 md:w-24 md:h-24 relative">
                  {/* Tripartite symbol */}
                  <div className="absolute inset-0 rounded-full border-4 border-primary opacity-60" />
                  <div className="absolute inset-0 rounded-full border-4 border-secondary opacity-60 rotate-120" />
                  <div className="absolute inset-0 rounded-full border-4 border-muted opacity-60 rotate-240" />
                </div>
              </div>
            </div>

            <p className="font-display text-2xl md:text-3xl font-semibold text-card-foreground text-center">
              É neste contexto que a NeoGovernança surge para{" "}
              <span className="text-primary">guiar</span> as empresas rumo ao futuro.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
