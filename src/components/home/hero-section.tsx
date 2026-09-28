import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { company } from "@/data/company";
import { CompanyExperience } from "@/components/company-experience";
import { getGalleryItem } from "@/data/gallery";

export function HeroSection() {
  const heroVisual = getGalleryItem("chantier-03");

  return (
    <section aria-labelledby="hero-title" className="relative overflow-hidden bg-brand-deep text-surface">
      <div aria-hidden="true" className="technical-grid pointer-events-none absolute inset-0 opacity-[0.12]" />
      <Container className="relative pt-10 pb-8 sm:pt-14 sm:pb-10 lg:pt-16 lg:pb-8">
        <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.05fr] lg:gap-12">
          <div className="min-w-0">
            <p className="flex items-center gap-3 text-[0.6875rem] leading-5 font-semibold tracking-[0.13em] text-brand-light uppercase sm:text-xs">
              <span aria-hidden="true" className="h-px w-7 shrink-0 bg-brand-light/65" />
              Bureau d’études · Ingénierie · Construction
            </p>
            <h1 id="hero-title" className="mt-6 text-[clamp(2.5rem,4.6vw,4.25rem)] leading-[1.06] font-semibold tracking-[-0.055em]">
              <span className="block">De la conception</span>{" "}
              <span className="block text-brand-light">à la réalisation.</span>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/80 sm:text-lg sm:leading-8">
              {company.displayName} réunit études, ingénierie et construction pour accompagner votre projet à chaque étape.
            </p>
            <CompanyExperience className="mt-6 inline-flex border-l-2 border-brand-light pl-4 text-sm font-semibold text-white" />
            <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3">
              <LinkButton href="/contact" variant="dark" className="min-h-12">
                Parlons de votre projet <ArrowUpRight aria-hidden="true" className="ml-3 size-4" />
              </LinkButton>
              <Link href="/#services" className="inline-flex min-h-12 items-center gap-2 text-sm font-medium text-white/85 underline decoration-white/35 underline-offset-8 transition-colors hover:text-white hover:decoration-white">
                Nos services <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </div>

          {heroVisual ? (
            <figure className="min-w-0">
              {/* Reserved ratio; the photograph remains unobscured and separate from the text. */}
              <div className="relative aspect-[4/3] overflow-hidden border border-white/15 bg-brand-dark">
                <Image src={heroVisual.image.src} alt={heroVisual.image.alt} fill preload
                  sizes="(max-width: 639px) calc(100vw - 40px), (max-width: 1023px) calc(100vw - 64px), (max-width: 1199px) 46vw, 550px"
                  className="object-cover object-center" />
                <span aria-hidden="true" className="pointer-events-none absolute top-3 left-3 size-6 border-t border-l border-white/70" />
                <span aria-hidden="true" className="pointer-events-none absolute right-3 bottom-3 size-6 border-r border-b border-white/70" />
              </div>
              <figcaption className="mt-3 flex flex-wrap items-center justify-between gap-x-4 gap-y-1 text-xs leading-5 text-white/75">
                <span>{heroVisual.caption}</span>
                <span className="text-brand-light">Photographie de chantier</span>
              </figcaption>
            </figure>
          ) : null}
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-between gap-3 border-t border-white/15 pt-5 lg:mt-12">
          <p className="text-xs leading-5 tracking-wide text-white/65">Études · Construction · Expertise</p>
          <a href="#a-propos" className="inline-flex min-h-11 items-center gap-3 text-xs font-medium text-white/80 transition-colors hover:text-white">
            Découvrir 7 Building <ArrowDown aria-hidden="true" className="size-4" />
          </a>
        </div>
      </Container>
    </section>
  );
}
