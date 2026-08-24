import { ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { sectors } from "@/data/sectors";

export function SectorsSection() {
  return <section className="bg-surface py-[var(--space-section)]"><Container><div className="max-w-2xl"><p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">Secteurs d’intervention</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.045em] text-foreground sm:text-4xl">Des solutions adaptées à chaque typologie de projet.</h2></div><div className="mt-12 grid gap-px overflow-hidden border border-brand-border bg-brand-border lg:grid-cols-3">{sectors.map((sector) => <article key={sector.id} className="group bg-surface p-7 sm:p-8"><div className="flex items-start justify-between"><span className="font-mono text-sm text-brand">{sector.number}</span><ArrowUpRight aria-hidden="true" className="size-5 text-brand opacity-60 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></div><h3 className="mt-12 text-2xl font-semibold tracking-[-0.035em] text-foreground">{sector.title}</h3><p className="mt-4 text-sm leading-7 text-muted">{sector.description}</p><ul className="mt-8 space-y-2 border-t border-brand-border pt-5 text-sm font-medium text-foreground">{sector.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div></Container></section>;
}
