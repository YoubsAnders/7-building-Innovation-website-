import type { Metadata } from "next";
import { ArrowUpRight, Check } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { ServiceCard } from "@/components/services/service-card";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { ServiceJsonLd } from "@/components/seo/service-json-ld";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { getRelatedServices, getServiceBySlug, servicePageContent, services } from "@/data/services";
import { getSiteUrl } from "@/lib/site-url";
import { GalleryFigure } from "@/components/gallery/gallery-figure";
import { getGalleryItem, serviceGalleryImages } from "@/data/gallery";

type Props = { params: Promise<{ slug: string }> };
export const dynamicParams = false;
export function generateStaticParams() { return services.map((service) => ({ slug: service.slug })); }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params; const service = getServiceBySlug(slug); if (!service) return {};
  const siteUrl = getSiteUrl(); const path = `/services/${service.slug}`;
  return { title: service.name, description: servicePageContent[service.slug].introduction, keywords: service.seoKeywords, alternates: siteUrl ? { canonical: path } : undefined, openGraph: { title: service.name, description: servicePageContent[service.slug].introduction, type: "website", ...(siteUrl ? { url: `${siteUrl}${path}` } : {}) } };
}

const missionSteps = ["Comprendre les besoins et les éléments disponibles", "Étudier les données utiles au périmètre de mission", "Préparer les éléments techniques nécessaires", "Accompagner les étapes prévues avec le projet"];

export default async function ServicePage({ params }: Props) {
  const { slug } = await params; const service = getServiceBySlug(slug); if (!service) notFound();
  const content = servicePageContent[service.slug]; const relatedServices = getRelatedServices(content.relatedSlugs); const serviceVisual = getGalleryItem(serviceGalleryImages[service.slug] ?? ""); const siteUrl = getSiteUrl(); const currentUrl = siteUrl ? `${siteUrl}/services/${service.slug}` : undefined;
  return <><SiteHeader /><main><section className="bg-mist py-10 sm:py-14"><Container><Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Services", href: "/services" }, { label: service.name }]} /><div className="mt-10 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Service</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">{service.name}</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-slate">{content.introduction}</p></div><div className="technical-grid hidden min-h-36 w-48 border border-navy/15 lg:block" aria-hidden="true" /></div></Container></section><section className="bg-surface py-[var(--space-section)]"><Container className="grid gap-12 lg:grid-cols-[1.05fr_0.75fr] lg:gap-20"><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Présentation</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-navy">Une intervention adaptée au contexte du projet.</h2><p className="mt-6 max-w-2xl leading-7 text-slate">{service.shortDescription} Les éléments étudiés et l’accompagnement apporté dépendent du besoin exprimé et du cadre de mission retenu.</p>{serviceVisual ? <GalleryFigure item={serviceVisual} sizes="(max-width: 1023px) 100vw, 55vw" className="mt-9" /> : null}</div><aside className="border-l-2 border-orange bg-mist p-6"><p className="text-sm font-semibold text-navy">Domaines d’intervention</p><ul className="mt-5 space-y-3">{content.interventionAreas.map((area) => <li key={area} className="flex gap-3 text-sm leading-6 text-slate"><Check aria-hidden="true" className="mt-1 size-4 shrink-0 text-orange" />{area}</li>)}</ul></aside></Container></section><section className="bg-mist py-[var(--space-section)]"><Container className="grid gap-12 lg:grid-cols-2"><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Prestations associées</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-navy">Des éléments techniques organisés avec cohérence.</h2><ul className="mt-8 divide-y border-y">{content.associatedServices.map((item, index) => <li key={item} className="flex gap-4 py-4 text-sm font-medium text-navy"><span className="font-mono text-orange">0{index + 1}</span>{item}</li>)}</ul></div><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Déroulement type</p><ol className="mt-8 space-y-5">{missionSteps.map((step, index) => <li key={step} className="grid grid-cols-[2rem_1fr] gap-3"><span className="flex size-8 items-center justify-center rounded-full bg-navy text-xs font-semibold text-surface">{index + 1}</span><p className="pt-1 text-sm leading-6 text-slate">{step}</p></li>)}</ol></div></Container></section><section className="bg-surface py-[var(--space-section)]"><Container><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Services complémentaires</p><h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-navy">Poursuivre l’exploration.</h2><div className="mt-9 grid gap-4 md:grid-cols-3">{relatedServices.map((relatedService) => <ServiceCard key={relatedService.id} service={relatedService} />)}</div></Container></section><section className="bg-navy py-14 text-surface"><Container className="flex flex-col justify-between gap-7 sm:flex-row sm:items-center"><div><h2 className="text-2xl font-semibold tracking-[-0.035em]">Échanger sur {service.name.toLocaleLowerCase("fr-FR")}</h2><p className="mt-2 text-sm leading-6 text-white/70">Le contact sera configuré dès validation des coordonnées de l’entreprise.</p></div><LinkButton href="/#contact" className="w-fit">Nous contacter <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton></Container></section></main><SiteFooter /><ServiceJsonLd service={service} /><BreadcrumbJsonLd items={[{ name: "Accueil", url: siteUrl ? `${siteUrl}/` : undefined }, { name: "Services", url: siteUrl ? `${siteUrl}/services` : undefined }, { name: service.name, url: currentUrl }]} /></>;
}
