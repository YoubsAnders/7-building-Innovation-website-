import Link from "next/link";
import { ArrowUpRight, CheckCircle2, FileText } from "lucide-react";
import { Container } from "@/components/ui/container";

const dossierItems = ["Plans", "Documents techniques", "Notes de calcul lorsqu’elles sont nécessaires", "Constitution du dossier", "Vérification des pièces", "Accompagnement administratif"];

export function PermitSection() {
  return (
    <section id="permis-de-batir" aria-labelledby="permit-title" className="scroll-mt-24 bg-brand-deep pb-14 text-surface sm:pb-20">
      <Container>
        <div className="grid gap-8 border-t border-white/20 pt-10 lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            <p className="flex items-center gap-3 text-xs font-semibold tracking-[0.15em] text-brand-light uppercase"><FileText aria-hidden="true" className="size-4" />Permis de bâtir</p>
            <h2 id="permit-title" className="mt-4 max-w-lg text-2xl font-semibold tracking-[-0.035em] sm:text-3xl">Préparer votre dossier avec méthode.</h2>
            <p className="mt-4 max-w-xl text-sm leading-7 text-white/80">7 Building Innovation accompagne la préparation des éléments techniques nécessaires à la constitution d’un dossier de permis de bâtir.</p>
            <Link href="/permis-de-batir" className="mt-4 inline-flex min-h-11 items-center gap-3 text-sm font-semibold text-brand-light transition-colors hover:text-white">Découvrir l’accompagnement <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
          </div>
          <div>
            <p className="text-sm font-semibold text-white/90">Les éléments peuvent notamment inclure :</p>
            <ul className="mt-5 grid gap-x-6 gap-y-3 sm:grid-cols-2">
              {dossierItems.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-white/80"><CheckCircle2 aria-hidden="true" className="mt-1 size-4 shrink-0 text-brand-light" />{item}</li>)}
            </ul>
            <p className="mt-5 border-t border-white/15 pt-4 text-xs leading-5 text-white/70">L’accompagnement ne constitue pas une promesse d’obtention du permis.</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
