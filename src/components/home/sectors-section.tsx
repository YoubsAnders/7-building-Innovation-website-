import { sectors } from "@/data/sectors";

// Subsection of Services: the same validated data, without another full-height section.
export function SectorsSection() {
  return (
    <section id="secteurs" aria-labelledby="sectors-title" className="mt-10 scroll-mt-24">
      <h3 id="sectors-title" className="text-sm font-semibold tracking-[0.12em] text-brand uppercase">Secteurs d’intervention</h3>
      <div className="mt-5 grid gap-6 lg:grid-cols-3 lg:gap-8">
        {sectors.map((sector) => (
          <article key={sector.id} className="border-l border-brand-border pl-5">
            <div className="flex items-start gap-3">
              <span aria-hidden="true" className="pt-1 font-mono text-xs text-brand">{sector.number}</span>
              <h4 className="text-lg font-semibold tracking-tight text-foreground">{sector.title}</h4>
            </div>
            <p className="mt-3 text-sm leading-6 text-muted">{sector.description}</p>
            <ul className="mt-4 space-y-1 text-sm leading-6 text-foreground">
              {sector.items.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
