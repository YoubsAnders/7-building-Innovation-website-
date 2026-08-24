import { ArrowUpRight } from "lucide-react";
import { ServiceCard } from "@/components/services/service-card";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredServices, services } from "@/data/services";

export function ServicesSection() {
  const additionalServices = services.filter((service) => !service.isFeatured);
  return (
    <section id="services" className="scroll-mt-24 bg-mist py-[var(--space-section)]">
      <Container>
        <SectionHeading eyebrow="Nos services" title="Des compétences techniques organisées autour de votre projet." description="Les interventions sont adaptées aux besoins d’étude, de conception, de construction, d’expertise et de suivi." />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">{featuredServices.map((service) => <ServiceCard key={service.id} service={service} />)}</div>
        <div className="mt-14 border-t border-navy/15 pt-7">
          <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Autres domaines d’intervention</p><h3 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-navy">Une expertise étendue, sans surcharge visuelle.</h3></div><ArrowUpRight aria-hidden="true" className="hidden size-6 text-orange sm:block" /></div>
          <ul className="mt-7 grid border-t border-navy/15 md:grid-cols-2">
            {additionalServices.map((service) => <li key={service.id} className="flex items-start gap-4 border-b border-navy/15 py-4 text-sm font-medium text-navy"><span className="mt-0.5 text-orange">{String(service.displayOrder).padStart(2, "0")}</span><span>{service.name}</span></li>)}
          </ul>
        </div>
      </Container>
    </section>
  );
}
