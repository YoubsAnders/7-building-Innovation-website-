import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const steps = [
  { title: "Comprendre le besoin", text: "Identifier les éléments techniques et les objectifs du projet." },
  { title: "Étudier et concevoir", text: "Préparer les études et documents nécessaires à l’avancement." },
  { title: "Valider techniquement", text: "Structurer les choix techniques avant leur mise en œuvre." },
  { title: "Accompagner et suivre", text: "Intervenir selon le cadre de mission défini pour le projet." },
];

export function ProcessSection() {
  return (
    <section className="bg-surface py-[var(--space-section)]">
      <Container><SectionHeading eyebrow="Notre démarche" title="Une mission structurée, de l’analyse au suivi." />
        <ol className="mt-12 grid gap-0 border-t border-navy/20 lg:grid-cols-4">{steps.map((step, index) => <li key={step.title} className="relative border-b border-navy/20 py-7 lg:border-b-0 lg:border-r lg:px-7 lg:first:pl-0 lg:last:border-r-0"><span className="font-mono text-xs font-semibold text-orange">0{index + 1}</span><h3 className="mt-7 text-xl font-semibold tracking-[-0.03em] text-navy">{step.title}</h3><p className="mt-3 max-w-xs text-sm leading-6 text-slate">{step.text}</p></li>)}</ol>
      </Container>
    </section>
  );
}
