import Image from "next/image";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { company, getCompanyExperienceLabel } from "@/data/company";
import { getGalleryImage } from "@/data/gallery";

export function HeroSection() {
  const experienceLabel = getCompanyExperienceLabel();
  const heroImage = getGalleryImage("chantier-03");

  return (
    <section className="relative overflow-hidden bg-brand-deep text-surface">
      {heroImage ? (
        // Composition différenciée : bandeau haut sur mobile — en plein cadre la photo serait rognée
        // à 30 % de sa largeur — et fond intégral à partir de lg, où elle reste presque entière.
        <div className="absolute inset-x-0 top-0 h-[55%] lg:inset-0 lg:h-full">
          <Image src={heroImage.src} alt={heroImage.alt} fill preload sizes="100vw" className="object-cover object-center" />
          {/* Voile de lisibilité : seule fonction de ces deux calques, aucun effet décoratif. */}
          <div aria-hidden="true" className="absolute inset-0 bg-brand-deep/78" />
          <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep via-brand-deep/35 to-transparent lg:bg-gradient-to-r lg:from-brand-deep lg:via-brand-deep/60 lg:to-transparent" />
        </div>
      ) : null}
      <div aria-hidden="true" className="technical-grid absolute inset-0 opacity-[0.13]" />

      <Container className="relative py-20 sm:py-24 lg:py-32">
        <div className="max-w-3xl">
          <p className="mb-6 text-sm font-semibold tracking-[0.15em] text-brand-soft uppercase">Bureau d’études · Ingénierie · Construction</p>
          <h1 className="text-4xl font-semibold tracking-[-0.055em] text-balance sm:text-5xl lg:text-6xl xl:text-7xl">Nous concevons et accompagnons des projets de construction durables.</h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-white/80 sm:text-lg sm:leading-8">{company.tagline} {company.displayName} intervient sur les études, l’ingénierie, la construction et l’accompagnement technique des ouvrages.</p>
          {experienceLabel ? <p className="mt-6 inline-flex border-l-2 border-accent pl-4 text-sm font-semibold text-white">{experienceLabel}</p> : null}
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <LinkButton href="/#services">Découvrir nos services <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton>
            <LinkButton href="/#contact" variant="secondary" className="border-white/30 bg-transparent text-surface hover:border-white hover:bg-white/10">Nous contacter</LinkButton>
          </div>
        </div>

        {/* Repères techniques discrets, dans la continuité de l’identité graphique. */}
        <div aria-hidden="true" className="mt-16 flex items-center gap-4 border-t border-white/15 pt-5 text-[0.625rem] font-semibold tracking-[0.18em] text-white/45 uppercase lg:mt-16">
          <span className="font-mono">01</span>
          <span className="h-px w-12 bg-accent" />
          <span>Étude · Construction · Expertise</span>
        </div>
      </Container>

      <Container className="relative hidden pb-10 lg:block">
        <a href="#a-propos" className="inline-flex items-center gap-3 text-xs font-medium tracking-[0.12em] text-white/60 uppercase transition-colors [transition-duration:var(--transition-base)] hover:text-white">
          <ArrowDown aria-hidden="true" className="size-4" /> Découvrir
        </a>
      </Container>
    </section>
  );
}
