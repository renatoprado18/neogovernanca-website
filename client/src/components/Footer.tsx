export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-8">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          {/* Copyright */}
          <p className="text-sm text-primary-foreground/80">
            © {currentYear} NeoGovernança. Todos os direitos reservados.
          </p>

          {/* Author Credit */}
          <p className="text-sm text-primary-foreground/80">
            Renato de Faria e Almeida Prado
          </p>

          {/* Tagline */}
          <p className="text-sm text-primary-foreground/80 italic">
            Em equilíbrio, tudo gira.
          </p>
        </div>
      </div>
    </footer>
  );
}
