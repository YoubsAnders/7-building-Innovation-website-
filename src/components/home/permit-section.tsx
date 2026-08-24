import { CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

const dossierItems = ["Plans", "Documents techniques", "Notes de calcul lorsqu’elles sont nécessaires", "Constitution du dossier", "Vérification des pièces", "Accompagnement administratif"];

export function PermitSection() {
  return (
    <section id="permis-de-batir" className="scroll-mt-24 bg-brand-soft py-[var(--space-section)]">
      <Container className="overflow-hidden rounded-ui-md bg-brand-soft px-6 py-10 sm:px-10 lg:grid lg:grid-cols-[1fr_0.9fr] lg:gap-16 lg:px-16 lg:py-16">
        <div><div className="flex size-12 items-center justify-center rounded-ui-sm bg-brand text-surface"><FileText aria-hidden="true" className="size-6" /></div><p className="mt-8 text-sm font-semibold tracking-[0.15em] text-brand uppercase">Permis de bâtir</p><h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl">Préparer un dossier technique avec méthode.</h2><p className="mt-6 max-w-xl leading-7 text-muted">7 Building Innovation accompagne la préparation des éléments techniques nécessaires à la constitution d’un dossier de permis de bâtir.</p><LinkButton href="/#contact" className="mt-8">Préparer mon dossier</LinkButton></div>
        <div className="mt-12 border-t border-brand/20 pt-5 lg:mt-0 lg:border-l lg:border-t-0 lg:pl-12 lg:pt-0"><p className="text-sm font-semibold text-foreground">Les éléments peuvent notamment inclure :</p><ul className="mt-5 space-y-4">{dossierItems.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-foreground"><CheckCircle2 aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-brand" />{item}</li>)}</ul><p className="mt-7 text-xs leading-5 text-muted">L’accompagnement ne constitue pas une promesse d’obtention du permis.</p></div>
      </Container>
    </section>
  );
}
