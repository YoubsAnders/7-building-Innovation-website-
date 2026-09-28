import Link from "next/link";
import { ArrowUpRight, ChevronDown } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";
import { SectorsSection } from "@/components/home/sectors-section";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredServices, services } from "@/data/services";

export function ServicesSection() {
  const additionalServices = services.filter((service) => !service.isFeatured);
  return (
    <section id="services" className="scroll-mt-24 bg-brand-soft py-14 sm:py-20">
      <Container>
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <SectionHeading eyebrow="Nos services" title="Les compétences dont votre projet a besoin." description="Études, conception, construction et suivi : des interventions adaptées à chaque étape." />
          <Link href="/services" className="inline-flex min-h-11 shrink-0 items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-brand-hover">Tous les services <ArrowUpRight aria-hidden="true" className="size-4" /></Link>
        </div>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        {additionalServices.length ? (
          <details className="group mt-6 border-y border-brand-border">
            <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 py-4 text-sm font-semibold text-foreground transition-colors hover:text-brand [&::-webkit-details-marker]:hidden">
              Autres domaines d’intervention
              <ChevronDown aria-hidden="true" className="size-4 shrink-0 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
            </summary>
            <ul className="grid gap-x-8 border-t border-brand-border pb-2 md:grid-cols-2">
              {additionalServices.map((service) => (
                <li key={service.id} className="border-b border-brand-border last:border-0">
                  <Link href={`/services/${service.slug}`} className="flex min-h-12 items-start gap-4 py-3 text-sm font-medium text-foreground transition-colors hover:text-brand">
                    <span aria-hidden="true" className="font-mono text-brand">{String(service.displayOrder).padStart(2, "0")}</span>
                    <span>{service.name}<span className="sr-only"> — découvrir le service</span></span>
                  </Link>
                </li>
              ))}
            </ul>
          </details>
        ) : null}
        <SectorsSection />
      </Container>
    </section>
  );
}
