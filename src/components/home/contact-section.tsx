import { ArrowUpRight, Mail, Phone } from "lucide-react";
import { Container } from "@/components/ui/container";
import { company } from "@/data/company";

export function ContactSection() {
  const primaryPhone = company.contact.phones[0];
  return <section id="contact" className="scroll-mt-24 bg-navy py-[var(--space-section)] text-surface"><Container className="grid gap-10 lg:grid-cols-[1fr_auto] lg:items-end"><div><p className="text-sm font-semibold tracking-[0.15em] text-orange uppercase">Contact</p><h2 className="mt-4 max-w-3xl text-3xl font-semibold tracking-[-0.045em] sm:text-4xl">Parlons de votre projet et de ses besoins techniques.</h2><p className="mt-6 max-w-2xl text-base leading-7 text-white/75">Retrouvez 7 Building Innovation à {company.contact.city}, au Cameroun, pour échanger sur votre projet de construction.</p></div><address className="border-l-2 border-orange pl-5 not-italic text-sm leading-6 text-white/75"><ArrowUpRight aria-hidden="true" className="size-5 text-orange" /><p className="mt-4">{company.contact.address}</p><p>{company.contact.poBox}</p><a href={primaryPhone.href} className="mt-4 flex items-center gap-2 font-semibold text-surface transition-colors hover:text-brand-soft"><Phone aria-hidden="true" className="size-4" />{primaryPhone.number}</a><a href={`mailto:${company.contact.email}`} className="mt-2 flex items-center gap-2 transition-colors hover:text-brand-soft"><Mail aria-hidden="true" className="size-4" />{company.contact.email}</a></address></Container></section>;
}
