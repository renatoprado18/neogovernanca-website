import { useEffect } from "react";
import { Link } from "wouter";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";

const CONTROLADOR_EMAIL = "renato@almeida-prado.com";
const VIGENCIA = "3 de julho de 2026";

export default function Privacidade() {
  useEffect(() => {
    window.scrollTo(0, 0);
    const previousTitle = document.title;
    document.title = "Política de Privacidade | NeoGovernança";
    return () => {
      document.title = previousTitle;
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <main className="flex-1">
        <div className="container mx-auto px-4 py-16 md:py-24 max-w-3xl">
          <div className="mb-8">
            <Link href="/">
              <Button variant="ghost" size="sm" className="gap-2 -ml-3">
                <ChevronLeft className="w-4 h-4" />
                Voltar ao início
              </Button>
            </Link>
          </div>

          <header className="mb-10 border-b border-border pb-8">
            <h1 className="font-display text-3xl md:text-5xl font-bold text-foreground mb-3">
              Política de Privacidade
            </h1>
            <p className="text-sm md:text-base text-muted-foreground">
              Vigência: {VIGENCIA}
            </p>
          </header>

          <article className="space-y-10 text-foreground/90 leading-relaxed">
            <section>
              <p className="text-base md:text-lg">
                Esta Política de Privacidade descreve como a{" "}
                <strong>NeoGovernança</strong> coleta, utiliza e protege os
                dados pessoais fornecidos por visitantes e potenciais clientes,
                em conformidade com a Lei nº 13.709/2018 — Lei Geral de
                Proteção de Dados Pessoais (LGPD).
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                1. Controlador dos dados
              </h2>
              <p>
                O controlador dos dados pessoais é{" "}
                <strong>Renato de Faria e Almeida Prado</strong>, responsável
                pela iniciativa NeoGovernança. Contato:{" "}
                <a
                  href={`mailto:${CONTROLADOR_EMAIL}`}
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  {CONTROLADOR_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                2. Dados pessoais coletados
              </h2>
              <p className="mb-3">
                Ao preencher o formulário de contato deste site, coletamos os
                seguintes dados fornecidos voluntariamente pelo titular:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Nome completo</li>
                <li>Cargo</li>
                <li>Empresa</li>
                <li>Faixa de faturamento anual da empresa</li>
                <li>Telefone/WhatsApp com DDD</li>
                <li>E-mail corporativo</li>
                <li>Mensagem livre (quando preenchida pelo titular)</li>
              </ul>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                3. Finalidade do tratamento
              </h2>
              <p>
                Os dados são coletados exclusivamente para viabilizar contato
                comercial e o agendamento de diagnóstico de governança
                oferecido pela NeoGovernança. Não realizamos criação de perfis
                comportamentais nem tomada de decisões automatizadas com base
                nesses dados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                4. Base legal
              </h2>
              <p>
                O tratamento é fundamentado no{" "}
                <strong>consentimento</strong> do titular, nos termos do art.
                7º, inciso I, da Lei nº 13.709/2018 (LGPD), manifestado por
                meio do aceite expresso desta Política ao enviar o formulário.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                5. Compartilhamento de dados
              </h2>
              <p>
                Não compartilhamos, vendemos ou cedemos dados pessoais a
                terceiros, exceto para operadores legítimos que suportam a
                nossa comunicação com o titular (por exemplo, provedor de
                e-mail), todos contratados com obrigações contratuais de
                sigilo, segurança da informação e conformidade com a LGPD.
                Poderemos também compartilhar dados em cumprimento de
                obrigação legal, regulatória ou ordem judicial.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                6. Direitos do titular
              </h2>
              <p className="mb-3">
                Nos termos do art. 18 da LGPD, o titular pode, a qualquer
                momento, solicitar ao controlador:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>Confirmação da existência de tratamento;</li>
                <li>Acesso aos dados;</li>
                <li>Correção de dados incompletos, inexatos ou desatualizados;</li>
                <li>
                  Anonimização, bloqueio ou eliminação de dados desnecessários,
                  excessivos ou tratados em desconformidade com a LGPD;
                </li>
                <li>
                  Portabilidade dos dados a outro fornecedor de serviço ou
                  produto, mediante requisição expressa;
                </li>
                <li>
                  Eliminação dos dados pessoais tratados com o consentimento do
                  titular;
                </li>
                <li>
                  Informação sobre entidades públicas e privadas com as quais o
                  controlador realizou uso compartilhado de dados;
                </li>
                <li>
                  Informação sobre a possibilidade de não fornecer consentimento
                  e sobre as consequências da negativa;
                </li>
                <li>
                  Revogação do consentimento, a qualquer momento, mediante
                  manifestação expressa do titular.
                </li>
              </ul>
              <p className="mt-3">
                As solicitações podem ser enviadas para{" "}
                <a
                  href={`mailto:${CONTROLADOR_EMAIL}`}
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  {CONTROLADOR_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                7. Encarregado (DPO)
              </h2>
              <p>
                O encarregado pelo tratamento de dados pessoais é{" "}
                <strong>Renato de Faria e Almeida Prado</strong>, que pode ser
                contatado pelo e-mail{" "}
                <a
                  href={`mailto:${CONTROLADOR_EMAIL}`}
                  className="text-primary underline underline-offset-4 hover:no-underline"
                >
                  {CONTROLADOR_EMAIL}
                </a>
                .
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                8. Retenção dos dados
              </h2>
              <p>
                Os dados pessoais serão mantidos pelo prazo de{" "}
                <strong>24 (vinte e quatro) meses</strong> contados a partir do
                último contato entre o titular e a NeoGovernança, salvo
                obrigação legal, regulatória ou determinação judicial que
                exija prazo diverso. Após esse período, os dados serão
                eliminados ou anonimizados.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                9. Segurança da informação
              </h2>
              <p>
                Adotamos medidas técnicas e administrativas razoáveis para
                proteger os dados pessoais contra acessos não autorizados,
                situações acidentais ou ilícitas de destruição, perda,
                alteração, comunicação ou qualquer forma de tratamento
                inadequado.
              </p>
            </section>

            <section>
              <h2 className="font-display text-xl md:text-2xl font-semibold text-foreground mb-3">
                10. Alterações desta política
              </h2>
              <p>
                Esta Política de Privacidade pode ser atualizada a qualquer
                momento. A versão vigente é sempre a publicada nesta página,
                identificada pela data de vigência informada no topo. Alterações
                relevantes poderão ser comunicadas por meios adicionais quando
                aplicável.
              </p>
            </section>

            <section className="pt-6 border-t border-border">
              <p className="text-sm text-muted-foreground">
                Última atualização: {VIGENCIA}.
              </p>
            </section>
          </article>
        </div>
      </main>
      <Footer />
    </div>
  );
}
