import Link from "next/link";
import { Container } from "@/components/ui/container";
import { BrandLogo } from "@/components/layout/brand-logo";
import { YoubsCredit } from "@/components/layout/youbs-credit";
import { company, internalNavigation } from "@/data/company";
import { services } from "@/data/services";

export function SiteFooter() {
  const mainServices = services.slice(0, 4);
  const primaryPhone = company.contact.phones[0];

  return <footer className="bg-brand-deep py-12 text-surface"><Container className="grid gap-10 lg:grid-cols-[1.15fr_0.75fr_0.75fr]"><div><BrandLogo inverse /><p className="mt-3 max-w-sm text-sm leading-6 text-white/70">{company.tagline}</p><address className="mt-5 space-y-1 not-italic text-sm leading-6 text-white/70"><p>{company.contact.address}</p><p>{company.contact.poBox}</p><p><a href={primaryPhone.href} className="transition-colors hover:text-brand-soft">{primaryPhone.number}</a></p><p><a href={`mailto:${company.contact.email}`} className="transition-colors hover:text-brand-soft">{company.contact.email}</a></p></address></div><nav aria-label="Navigation de pied de page"><p className="text-xs font-semibold tracking-[0.15em] text-brand-soft uppercase">Navigation</p><ul className="mt-4 space-y-3 text-sm text-white/75">{internalNavigation.map((item) => <li key={item.href}><Link href={item.href} className="transition-colors hover:text-brand-soft">{item.label}</Link></li>)}</ul></nav><div><p className="text-xs font-semibold tracking-[0.15em] text-brand-soft uppercase">Services</p><ul className="mt-4 space-y-3 text-sm text-white/75">{mainServices.map((service) => <li key={service.id}>{service.name}</li>)}</ul></div></Container><Container className="mt-12 flex flex-col gap-3 border-t border-white/15 pt-5 sm:flex-row sm:items-end sm:justify-between"><p className="text-xs text-white/50">© {new Date().getFullYear()} {company.legalName}. Tous droits réservés.</p><YoubsCredit /></Container></footer>;
}
