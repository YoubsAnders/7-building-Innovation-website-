import { ProjectGrid } from "@/components/projects/project-grid";
import { FolderOpen } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/page-metadata";
import { galleryCategories, galleryItems, hasGalleryItems } from "@/data/gallery";
import { displayableProjects } from "@/data/projects";

export const metadata = createPageMetadata({ title: "Projets et interventions", description: "Galerie des chantiers suivis, des interventions techniques et des visualisations de conception réalisés par 7 Building Innovation.", path: "/projets" });

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <section className="bg-brand-soft py-12 sm:py-16">
          <Container>
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Projets" }]} />
            <p className="mt-10 text-sm font-semibold tracking-[0.15em] text-brand uppercase">Projets</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-brand-deep sm:text-5xl">Galerie de projets et interventions.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-muted">Chantiers suivis, contrôles techniques sur ouvrages et visualisations de conception. Les fiches projets détaillées seront publiées au fur et à mesure de la validation de leur contexte et de leurs informations.</p>
          </Container>
        </section>

        <section className="bg-surface py-[var(--space-section)]">
          <Container>
            {displayableProjects.length ? <div className="mb-14"><h2 className="mb-8 text-2xl font-semibold">Fiches projets</h2><ProjectGrid projects={displayableProjects} /></div> : null}
            {hasGalleryItems ? (
              <><h2 className="mb-8 text-2xl font-semibold">Galerie des interventions et conceptions</h2><GalleryGrid items={galleryItems} categories={galleryCategories} /></>
            ) : !displayableProjects.length ? (
              <div className="technical-grid flex min-h-96 items-center justify-center border border-dashed border-brand-deep/25 p-8 text-center">
                <div className="max-w-md bg-surface p-7">
                  <FolderOpen aria-hidden="true" className="mx-auto size-8 text-brand" />
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-brand-deep">Nos réalisations seront prochainement présentées ici.</h2>
                  <p className="mt-4 text-sm leading-6 text-muted">Aucun projet n’est affiché avant la validation de ses informations, visuels et éléments de contexte.</p>
                  <LinkButton href="/contact" className="mt-7">Nous contacter</LinkButton>
                </div>
              </div>
            ) : null}
          </Container>
        </section>

        {hasGalleryItems ? (
          <section className="bg-brand-soft py-14">
            <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="border-l-2 border-brand pl-5">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Lecture des visuels</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Les photographies documentent des chantiers et des interventions réelles. Les visuels signalés comme rendus de conception sont des projections architecturales : ils ne représentent pas des ouvrages livrés. Le détail de chaque opération sera publié après validation.</p>
              </div>
              <LinkButton href="/contact" className="w-fit">Échanger sur un projet</LinkButton>
            </Container>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
