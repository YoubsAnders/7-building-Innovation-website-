import { FileSearch, Scale, ShieldAlert } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

const interventionPoints = ["Diagnostics techniques", "Analyse de désordres et de malfaçons", "Examen de problématiques structurelles", "Constats et rapports techniques", "Accompagnement dans le cadre d’expertises"];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="scroll-mt-24 bg-navy py-[var(--space-section)] text-surface">
      <Container className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
        <div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Expertise</p><h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Une lecture technique claire des situations complexes.</h2><p className="mt-6 max-w-lg text-base leading-7 text-white/75">L’expertise technique et judiciaire permet d’éclairer les problématiques liées aux ouvrages, aux travaux et à leur état.</p><LinkButton href="/#contact" variant="secondary" className="mt-8 border-white/30 bg-transparent text-surface hover:border-white hover:bg-white/10">Échanger sur une situation</LinkButton></div>
        <div className="relative border-y border-white/15 py-2"><div className="technical-grid pointer-events-none absolute inset-0 opacity-25" aria-hidden="true" /><ul className="relative divide-y divide-white/15">
          {interventionPoints.map((point, index) => <li key={point} className="flex gap-5 py-5"><span className="font-mono text-xs text-orange">0{index + 1}</span><span className="text-base font-medium leading-6 text-white/90">{point}</span></li>)}
        </ul></div>
      </Container>
      <Container className="mt-12 grid gap-4 sm:grid-cols-3"><div className="border-t border-white/20 pt-4"><FileSearch aria-hidden="true" className="size-5 text-orange" /><p className="mt-4 text-sm text-white/70">Lecture des éléments techniques disponibles.</p></div><div className="border-t border-white/20 pt-4"><ShieldAlert aria-hidden="true" className="size-5 text-orange" /><p className="mt-4 text-sm text-white/70">Identification des points nécessitant une attention particulière.</p></div><div className="border-t border-white/20 pt-4"><Scale aria-hidden="true" className="size-5 text-orange" /><p className="mt-4 text-sm text-white/70">Appui technique dans un cadre d’expertise.</p></div></Container>
    </section>
  );
}
