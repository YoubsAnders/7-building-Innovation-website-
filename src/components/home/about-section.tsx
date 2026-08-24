import { Check } from "lucide-react";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";

const principles = ["Précision technique", "Qualité de conception", "Vision durable", "Accompagnement de projet"];

export function AboutSection() {
  return (
    <section id="a-propos" className="scroll-mt-24 bg-surface py-[var(--space-section)]">
      <Container className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-20">
        <SectionHeading eyebrow="À propos" title="Une expertise complète pour vos projets." />
        <div>
          <p className="max-w-2xl text-lg leading-8 text-slate">De l’étude à l’accompagnement des travaux, 7 Building Innovation réunit les compétences nécessaires pour aborder les projets de construction avec méthode, précision et attention portée à la durabilité des ouvrages.</p>
          <ul className="mt-9 grid gap-x-8 gap-y-4 sm:grid-cols-2">
            {principles.map((principle) => <li key={principle} className="flex items-center gap-3 border-t pt-4 text-sm font-semibold text-navy"><Check aria-hidden="true" className="size-4 text-orange" />{principle}</li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
