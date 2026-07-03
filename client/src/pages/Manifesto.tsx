import { Link } from "wouter";
import { ArrowRight, Home as HomeIcon } from "lucide-react";
import Navigation from "@/components/Navigation";
import AbundanceSection from "@/components/AbundanceSection";
import DynamicEquilibriumSection from "@/components/DynamicEquilibriumSection";
import TripartiteGyroscopeSection from "@/components/TripartiteGyroscopeSection";
import EtymologySection from "@/components/EtymologySection";
import PhilosophiesSection from "@/components/PhilosophiesSection";
import Footer from "@/components/Footer";

export default function Manifesto() {
  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Mini-hero */}
      <section
        id="manifesto-hero"
        className="relative flex items-center justify-center bg-background pt-32 pb-16 md:pt-40 md:pb-24"
      >
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)`,
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="container relative z-10 px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <span className="font-display text-xs font-semibold uppercase tracking-widest text-primary md:text-sm">
              Manifesto
            </span>
            <h1 className="mt-4 font-display text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
              O Manifesto NeoGovernança
            </h1>
            <p className="mt-6 font-display text-xl italic text-foreground/80 md:text-2xl">
              Em equilíbrio, tudo gira. Em rigidez, tudo quebra.
            </p>
            <p className="mx-auto mt-8 max-w-2xl font-body text-base text-foreground/70 md:text-lg">
              Esta é a fundação filosófica do modelo — as ideias, símbolos e
              raízes que sustentam a NeoGovernança antes de qualquer prática de
              conselho. Aqui não há checklist. Há princípios.
            </p>
          </div>
        </div>
      </section>

      <AbundanceSection />
      <DynamicEquilibriumSection />
      <TripartiteGyroscopeSection />
      <EtymologySection />
      <PhilosophiesSection />

      {/* CTA de saída — resgata para ação */}
      <section className="bg-secondary py-20 text-secondary-foreground md:py-28">
        <div className="container px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-display text-3xl font-bold md:text-4xl lg:text-5xl">
              Quer aplicar isso ao seu conselho?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl font-body text-lg text-secondary-foreground/80 md:text-xl">
              Filosofia sem prática vira poesia. A NeoGovernança nasce para
              decidir melhor amanhã de manhã — na sua mesa, com o seu conselho,
              nas suas escolhas.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 font-body text-base font-semibold text-primary-foreground shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-xl"
              >
                Falar com o autor
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                href="/"
                className="inline-flex items-center gap-2 rounded-full border border-secondary-foreground/30 px-8 py-4 font-body text-base font-semibold text-secondary-foreground transition-all duration-300 hover:border-secondary-foreground/60 hover:bg-secondary-foreground/5"
              >
                <HomeIcon className="h-4 w-4" />
                Voltar ao início
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
