import { ArrowUpRight, Home } from "lucide-react";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";

export default function NotFound() {
  return <><SiteHeader /><main className="flex flex-1 items-center bg-mist py-[var(--space-section)]"><Container className="grid gap-10 lg:grid-cols-[1fr_0.65fr] lg:items-center"><div><p className="font-mono text-sm font-semibold tracking-[0.18em] text-orange">404 / PAGE INTROUVABLE</p><h1 className="mt-5 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">La page demandée n’est pas disponible.</h1><p className="mt-6 max-w-xl text-lg leading-8 text-slate">Elle a peut-être été déplacée ou son adresse est incorrecte. Vous pouvez revenir à l’accueil ou consulter les services du bureau.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><LinkButton href="/"><Home aria-hidden="true" className="mr-2 size-4" />Retour à l’accueil</LinkButton><LinkButton href="/services" variant="secondary">Voir les services <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton></div></div><div className="technical-grid hidden min-h-80 border border-navy/20 lg:block" aria-hidden="true" /></Container></main><SiteFooter /></>;
}
