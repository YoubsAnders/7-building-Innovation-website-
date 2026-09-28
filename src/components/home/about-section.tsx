import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import { Container } from "@/components/ui/container";

const principles = ["Précision technique", "Qualité de conception", "Vision durable", "Accompagnement de projet"];

export function AboutSection() {
  return (
    <section id="a-propos" aria-labelledby="about-title" className="scroll-mt-24 bg-surface py-12 sm:py-16">
      <Container>
        <div className="grid gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:items-start lg:gap-16">
          <div>
            <p className="text-xs font-semibold tracking-[0.15em] text-brand uppercase">À propos</p>
            <h2 id="about-title" className="mt-3 max-w-md text-2xl font-semibold tracking-[-0.035em] text-foreground sm:text-3xl">Un partenaire technique, de l’étude au chantier.</h2>
          </div>
          <div>
            <p className="max-w-2xl text-base leading-7 text-muted">7 Building Innovation réunit les compétences d’étude, de conception et d’accompagnement des travaux, avec méthode, précision et attention portée à la durabilité des ouvrages.</p>
            <Link href="/a-propos" className="mt-3 inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover">Découvrir le bureau <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </div>
        </div>
        <ul className="mt-6 grid gap-x-6 gap-y-3 border-t border-brand-border pt-5 sm:grid-cols-2 lg:grid-cols-4">
          {principles.map((principle) => <li key={principle} className="flex items-center gap-3 text-sm font-medium text-foreground"><Check aria-hidden="true" className="size-4 shrink-0 text-brand" />{principle}</li>)}
        </ul>
      </Container>
    </section>
  );
}
