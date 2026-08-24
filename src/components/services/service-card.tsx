import type { Service } from "@/data/services";
import Link from "next/link";

export function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon;
  return (
    <article className="group rounded-ui-md border bg-surface shadow-card transition-[transform,border-color,background-color] [transition-duration:var(--transition-base)] motion-safe:hover:-translate-y-1 hover:border-brand/30 hover:bg-brand-soft/40">
      <Link href={`/services/${service.slug}`} className="block p-6 focus-visible:outline-offset-[-3px]" aria-label={`Découvrir le service : ${service.name}`}>
        <Icon aria-hidden="true" className="size-6 text-brand transition-transform [transition-duration:var(--transition-base)] motion-safe:group-hover:rotate-3" strokeWidth={1.75} />
        <h3 className="mt-8 text-lg font-semibold tracking-[-0.02em] text-foreground">{service.name}</h3>
        <p className="mt-3 text-sm leading-6 text-muted">{service.shortDescription}</p>
      </Link>
    </article>
  );
}
