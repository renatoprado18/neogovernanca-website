import { Quote } from "lucide-react";

const testimonials = [
  {
    quote: "A NeoGovernança nos tirou do modo reativo. Hoje antecipamos crises antes que elas cheguem ao board.",
    author: "Maria Silva",
    role: "Conselheira Independente",
    company: "Empresa de Tecnologia",
  },
  {
    quote: "Renato trouxe uma perspectiva que nenhum consultor tradicional ofereceu: equilibrar crescimento com propósito não é utopia, é estratégia.",
    author: "João Santos",
    role: "CEO",
    company: "Indústria Manufatureira",
  },
  {
    quote: "Aplicamos o giroscópio tripartido e reduzimos 60% no tempo de aprovação de iniciativas estratégicas. O alinhamento entre board e C-suite nunca foi tão forte.",
    author: "Ana Costa",
    role: "Presidente do Conselho",
    company: "B-Corp Certificada",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="depoimentos" className="py-20 md:py-32 bg-secondary text-secondary-foreground">
      <div className="container px-4">
        <div className="max-w-6xl mx-auto">
          {/* Title */}
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-16 text-center">
            O Que Dizem
            <br />
            Nossos Parceiros
          </h2>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="bg-secondary-foreground/10 border border-secondary-foreground/20 rounded-lg p-6 md:p-8 hover-lift transition-smooth"
              >
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-secondary-foreground/40 mb-4" />

                {/* Quote Text */}
                <blockquote className="text-base md:text-lg text-secondary-foreground/90 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </blockquote>

                {/* Author */}
                <div className="border-t border-secondary-foreground/20 pt-4">
                  <p className="font-display text-lg font-semibold text-secondary-foreground">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-secondary-foreground/70">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-secondary-foreground/60 italic">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-16 text-center">
            <p className="text-xl md:text-2xl text-secondary-foreground/80 mb-6">
              Quer transformar a governança da sua organização?
            </p>
            <button
              onClick={() => {
                const element = document.querySelector("#contato");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2 bg-secondary-foreground text-secondary px-8 py-4 rounded-lg font-semibold text-lg hover:scale-105 transition-transform"
            >
              Agende Diagnóstico Gratuito
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
