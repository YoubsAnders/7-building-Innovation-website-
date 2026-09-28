import { Mail, MapPin, MessageCircle, Phone, ArrowUpRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { company, getCompanyWhatsAppUrl } from "@/data/company";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = createPageMetadata({
  title: "Contact et demande de devis",
  description: "Contactez 7 Building Innovation à Douala : téléphone, email et WhatsApp pour échanger sur vos études, travaux ou besoins d’expertise.",
  path: "/contact",
});

export default function ContactPage() {
  const { contact } = company;
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="relative overflow-hidden bg-brand-deep py-12 text-surface sm:py-20">
          <div aria-hidden="true" className="technical-grid absolute inset-0 opacity-25" />
          <Container className="relative">
            <Breadcrumbs inverse items={[{ label: "Accueil", href: "/" }, { label: "Contact" }]} />
            <p className="mt-10 text-sm font-semibold tracking-[0.15em] text-brand-light uppercase">Entrons en contact</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] sm:text-5xl">Votre projet commence par un échange.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/80">Études, construction, expertise ou accompagnement : précisez votre besoin à notre équipe pour préparer la suite de votre projet.</p>
          </Container>
        </section>
        <section className="bg-surface py-[var(--space-section)]">
          <Container className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
            <div className="min-w-0">
              <p className="text-sm font-semibold tracking-widest text-brand uppercase">Contact direct</p>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight">Échangez avec notre équipe.</h2>
              <div className="mt-8 divide-y border-y">
                {contact.phones.map((phone) => (
                  <a key={phone.href} href={phone.href} className="flex min-h-20 items-center gap-4 py-5 transition-colors hover:text-brand">
                    <Phone aria-hidden="true" className="size-5 shrink-0 text-brand" />
                    <span><span className="block text-xs text-muted">{phone.label}</span><span className="mt-1 block text-lg font-semibold">{phone.number}</span></span>
                  </a>
                ))}
                <a href={`mailto:${contact.email}`} className="flex min-h-20 items-center gap-4 py-5 transition-colors hover:text-brand">
                  <Mail aria-hidden="true" className="size-5 shrink-0 text-brand" />
                  <span className="min-w-0"><span className="block text-xs text-muted">Email</span><span className="mt-1 block break-all font-semibold">{contact.email}</span></span>
                </a>
              </div>
              <a href={getCompanyWhatsAppUrl("Bonjour, je souhaite échanger avec 7 Building Innovation concernant un projet.")} target="_blank" rel="noopener noreferrer" className="mt-7 inline-flex min-h-11 items-center gap-3 rounded-ui-sm bg-brand px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-brand-hover">
                <MessageCircle aria-hidden="true" className="size-5" />Écrire sur WhatsApp<span className="sr-only"> (nouvel onglet)</span>
              </a>
            </div>
            <div className="border-l-2 border-brand-border pl-6 sm:pl-8">
              <MapPin aria-hidden="true" className="size-6 text-brand" />
              <h2 className="mt-5 text-2xl font-semibold tracking-tight">Nous retrouver à Douala.</h2>
              <address className="mt-5 space-y-2 text-base leading-7 text-muted not-italic">
                <p className="font-semibold text-foreground">{company.legalName}</p>
                <p>{contact.address}</p><p>{contact.city}, {contact.country}</p><p>{contact.poBox}</p>
              </address>
              <p className="mt-7 max-w-md text-sm leading-7 text-muted">Pour préparer une visite, contactez l’équipe par téléphone ou WhatsApp.</p>
            </div>
          </Container>
        </section>
        <section className="bg-brand-soft py-[var(--space-section)]">
          <Container className="grid gap-10 lg:grid-cols-2">
            <div><p className="text-sm font-semibold tracking-widest text-brand uppercase">Préparer votre demande</p><h2 className="mt-4 max-w-lg text-3xl font-semibold tracking-tight">Quelques éléments pour un premier échange utile.</h2></div>
            <ul className="divide-y border-y">
              {["La nature et la localisation de votre projet", "La mission souhaitée et son état d’avancement", "Les plans, photos ou documents déjà disponibles", "Les contraintes et échéances à prendre en compte"].map((item, index) => (
                <li key={item} className="flex gap-4 py-5 text-sm leading-6"><span aria-hidden="true" className="font-mono text-brand">0{index + 1}</span>{item}</li>
              ))}
            </ul>
            <LinkButton href="/services" variant="secondary" className="w-fit">Explorer nos services<ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton>
          </Container>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
