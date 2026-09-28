import { Container } from "@/components/ui/container";

const steps = [
  { title: "Comprendre le besoin", text: "Identifier les éléments techniques et les objectifs du projet." },
  { title: "Étudier et concevoir", text: "Préparer les études et documents nécessaires à l’avancement." },
  { title: "Valider techniquement", text: "Structurer les choix techniques avant leur mise en œuvre." },
  { title: "Accompagner et suivre", text: "Intervenir selon le cadre de mission défini pour le projet." },
];

export function ProcessSection() {
  return (
    <section id="demarche" aria-labelledby="process-title" className="scroll-mt-24 bg-brand-soft py-14 sm:py-20">
      <Container className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <div>
          <p className="text-xs font-semibold tracking-[0.15em] text-brand uppercase">Notre démarche</p>
          <h2 id="process-title" className="mt-4 max-w-md text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">Une mission structurée, de l’analyse au suivi.</h2>
        </div>
        <ol className="divide-y divide-brand-border border-y border-brand-border">
          {steps.map((step, index) => (
            <li key={step.title} className="grid grid-cols-[2rem_1fr] gap-3 py-5 sm:grid-cols-[2rem_0.85fr_1.15fr] sm:gap-5">
              <span aria-hidden="true" className="pt-1 font-mono text-xs font-semibold text-brand">0{index + 1}</span>
              <h3 className="text-base font-semibold tracking-tight text-foreground">{step.title}</h3>
              <p className="col-start-2 text-sm leading-6 text-muted sm:col-start-auto">{step.text}</p>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
