import { useState } from "react";
import { Link } from "wouter";
import { Linkedin, Mail, Phone } from "lucide-react";
import { useForm, type FieldValues, type Resolver } from "react-hook-form";
import { z } from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CONTATO_EMAIL = "renato@almeida-prado.com";

const FATURAMENTO_OPCOES = [
  "Menos de R$50M",
  "R$50-100M",
  "R$100-250M",
  "R$250-500M",
  "Mais de R$500M",
] as const;

const contatoSchema = z.object({
  nome: z
    .string()
    .trim()
    .min(2, "Informe seu nome completo"),
  cargo: z.string().trim().min(2, "Informe seu cargo"),
  empresa: z.string().trim().min(2, "Informe o nome da empresa"),
  faturamento: z.enum(FATURAMENTO_OPCOES, {
    message: "Selecione a faixa de faturamento",
  }),
  telefone: z
    .string()
    .trim()
    .min(10, "Informe o telefone com DDD")
    .regex(
      /^[\d\s()+\-]{10,}$/,
      "Use apenas números, espaços e os símbolos ( ) + -"
    ),
  email: z
    .string()
    .trim()
    .min(1, "Informe o e-mail corporativo")
    .email("E-mail inválido"),
  mensagem: z.string().trim().max(1000, "Máximo de 1000 caracteres").optional(),
  consentimento: z.literal(true, {
    message: "É necessário concordar com a Política de Privacidade",
  }),
});

type ContatoFormValues = z.infer<typeof contatoSchema>;

// Resolver zod inline (evita adicionar @hookform/resolvers como dep)
function zodResolver<
  TSchema extends z.ZodType<TValues>,
  TValues extends FieldValues = FieldValues,
>(schema: TSchema): Resolver<z.infer<TSchema>> {
  return async (values) => {
    const result = schema.safeParse(values);
    if (result.success) {
      return { values: result.data as z.infer<TSchema>, errors: {} };
    }
    const errors: Record<string, { type: string; message: string }> = {};
    for (const issue of result.error.issues) {
      const path = issue.path.join(".");
      if (path && !errors[path]) {
        errors[path] = { type: issue.code, message: issue.message };
      }
    }
    return { values: {}, errors: errors as never };
  };
}

function buildMailto(values: ContatoFormValues) {
  const subject = `Contato via site — ${values.empresa}`;
  const bodyLines = [
    `Nome: ${values.nome}`,
    `Cargo: ${values.cargo}`,
    `Empresa: ${values.empresa}`,
    `Faturamento anual: ${values.faturamento}`,
    `Telefone/WhatsApp: ${values.telefone}`,
    `E-mail: ${values.email}`,
    "",
    "Mensagem:",
    values.mensagem?.trim() || "(sem mensagem adicional)",
    "",
    "---",
    "Enviado a partir do formulário do site neogovernanca.com.br",
  ];
  const body = bodyLines.join("\n");
  return `mailto:${CONTATO_EMAIL}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(body)}`;
}

export default function ContactSection() {
  const { ref, isVisible } = useScrollAnimation(0.2);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ContatoFormValues>({
    resolver: zodResolver(contatoSchema),
    defaultValues: {
      nome: "",
      cargo: "",
      empresa: "",
      faturamento: undefined as unknown as ContatoFormValues["faturamento"],
      telefone: "",
      email: "",
      mensagem: "",
      consentimento: false as unknown as true,
    },
    mode: "onBlur",
  });

  const onSubmit = (values: ContatoFormValues) => {
    setIsSubmitting(true);
    try {
      window.location.href = buildMailto(values);
      toast.success("Abrindo seu cliente de e-mail…", {
        description:
          "Se nada abrir automaticamente, envie diretamente para " +
          CONTATO_EMAIL,
      });
      form.reset();
    } catch (error) {
      console.error(error);
      toast.error("Não foi possível abrir o cliente de e-mail", {
        description: `Por favor, escreva diretamente para ${CONTATO_EMAIL}.`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contato"
      ref={ref as React.RefObject<HTMLElement>}
      className="relative py-20 md:py-32 bg-gradient-to-br from-primary via-primary to-secondary text-primary-foreground overflow-hidden"
    >
      <div className="container px-4 relative z-10">
        <div className="max-w-3xl mx-auto">
          {/* CTA Headline */}
          <h2
            className={`font-display text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight text-center transition-all duration-1000 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            Agende 30 minutos com Renato para
            <br className="hidden md:block" />{" "}
            um diagnóstico do seu conselho
          </h2>
          <p
            className={`text-base md:text-lg text-primary-foreground/80 text-center mb-10 transition-all duration-1000 delay-100 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            Sem custo. Sem compromisso. Uma conversa objetiva sobre onde o seu
            conselho está travando e o que pode destravar nos próximos 90 dias.
          </p>

          {/* Formulário */}
          <div
            className={`rounded-2xl bg-primary-foreground/95 text-foreground p-6 md:p-10 shadow-2xl transition-all duration-1000 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <div className="mb-6">
              <h3 className="font-display text-xl md:text-2xl font-semibold mb-1">
                Entre em contato
              </h3>
              <p className="text-sm md:text-base text-muted-foreground">
                Preencha os campos abaixo. Retornamos em até 2 dias úteis.
              </p>
            </div>

            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-5"
                noValidate
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="nome"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Nome <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="name"
                            placeholder="Como você gostaria de ser chamado(a)"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="cargo"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Cargo <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="organization-title"
                            placeholder="Ex.: Presidente do Conselho"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="empresa"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Empresa <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            autoComplete="organization"
                            placeholder="Nome da sua empresa"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="faturamento"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Faturamento anual</FormLabel>
                        <Select
                          value={field.value ?? ""}
                          onValueChange={field.onChange}
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Selecione a faixa" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {FATURAMENTO_OPCOES.map((opcao) => (
                              <SelectItem key={opcao} value={opcao}>
                                {opcao}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <FormField
                    control={form.control}
                    name="telefone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Telefone/WhatsApp com DDD{" "}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="tel"
                            autoComplete="tel"
                            placeholder="(11) 99999-9999"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          E-mail corporativo{" "}
                          <span className="text-destructive">*</span>
                        </FormLabel>
                        <FormControl>
                          <Input
                            type="email"
                            autoComplete="email"
                            placeholder="voce@empresa.com.br"
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="mensagem"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Mensagem (opcional)</FormLabel>
                      <FormControl>
                        <Textarea
                          rows={4}
                          placeholder="Conte brevemente o contexto do seu conselho ou o que gostaria de discutir."
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="consentimento"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex items-start gap-3">
                        <FormControl>
                          <Checkbox
                            checked={field.value === true}
                            onCheckedChange={(checked) =>
                              field.onChange(checked === true)
                            }
                            className="mt-0.5"
                          />
                        </FormControl>
                        <div className="space-y-1">
                          <FormLabel className="font-normal cursor-pointer">
                            Concordo com a{" "}
                            <Link
                              href="/privacidade"
                              className="text-primary underline underline-offset-4 hover:no-underline"
                            >
                              Política de Privacidade
                            </Link>{" "}
                            e autorizo o contato para fins de agendamento do
                            diagnóstico.
                          </FormLabel>
                          <FormMessage />
                        </div>
                      </div>
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  size="lg"
                  className="w-full text-base font-semibold"
                  disabled={isSubmitting || form.formState.isSubmitting}
                >
                  {isSubmitting || form.formState.isSubmitting
                    ? "Enviando…"
                    : "Enviar mensagem"}
                </Button>
              </form>
            </Form>
          </div>

          {/* Canais alternativos */}
          <div
            className={`mt-10 text-center transition-all duration-1000 delay-300 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            <p className="text-sm text-primary-foreground/80 mb-3">
              Prefere outro canal?
            </p>
            <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-2">
              <a
                href="https://www.linkedin.com/in/renatoaprado"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline transition-colors"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://wa.me/5511984153337?text=Olá,%20gostaria%20de%20saber%20mais%20sobre%20NeoGovernança"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline transition-colors"
              >
                <Phone className="w-4 h-4" />
                WhatsApp
              </a>
              <a
                href={`mailto:${CONTATO_EMAIL}`}
                className="inline-flex items-center gap-2 text-sm text-primary-foreground/90 hover:text-primary-foreground underline-offset-4 hover:underline transition-colors"
              >
                <Mail className="w-4 h-4" />
                E-mail
              </a>
            </div>
          </div>

          {/* Brand Name */}
          <div
            className={`mt-16 text-center transition-all duration-1000 delay-400 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-10"
            }`}
          >
            <p className="font-display text-2xl md:text-3xl font-bold">
              NeoGovernança
            </p>
            <p className="text-primary-foreground/80 mt-2">
              Progresso. Conexão. Harmonia.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
