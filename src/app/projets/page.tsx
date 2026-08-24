import Image from "next/image";
import Link from "next/link";
import { FolderOpen } from "lucide-react";
import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { createPageMetadata } from "@/lib/page-metadata";
import { galleryCategories, galleryItems, hasGalleryItems } from "@/data/gallery";
import { displayableProjects, projectCategories } from "@/data/projects";

export const metadata = createPageMetadata({ title: "Projets et interventions", description: "Galerie des chantiers suivis, des interventions techniques et des visualisations de conception réalisés par 7 Building Innovation.", path: "/projets" });

export default function ProjectsPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <section className="bg-mist py-12 sm:py-16">
          <Container>
            <Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Projets" }]} />
            <p className="mt-10 text-sm font-semibold tracking-[0.15em] text-orange uppercase">Projets</p>
            <h1 className="mt-4 max-w-3xl text-4xl font-semibold tracking-[-0.055em] text-navy sm:text-5xl">Galerie de projets et interventions.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate">Chantiers suivis, contrôles techniques sur ouvrages et visualisations de conception. Les fiches projets détaillées seront publiées au fur et à mesure de la validation de leur contexte et de leurs informations.</p>
          </Container>
        </section>

        <section className="bg-surface py-[var(--space-section)]">
          <Container>
            {displayableProjects.length ? (
              <>
                {projectCategories.length > 1 ? (
                  <nav aria-label="Catégories de projets" className="mb-10 flex flex-wrap gap-3">
                    {projectCategories.map((category) => <span key={category} className="border border-brand-border px-4 py-2 text-sm font-semibold text-foreground">{category}</span>)}
                  </nav>
                ) : null}
                <div className="grid gap-6 md:grid-cols-2">
                  {displayableProjects.map((project) => (
                    <Link key={project.id} href={`/projets/${project.slug}`} className="group overflow-hidden border border-brand-border">
                      <Image src={project.coverImage!.src} alt={project.coverImage!.alt} width={project.coverImage!.width} height={project.coverImage!.height} sizes="(max-width: 767px) 100vw, 50vw" className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                      <div className="p-6">
                        <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">{project.category}</p>
                        <h2 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-foreground">{project.title}</h2>
                        {project.location || project.year ? <p className="mt-2 text-sm text-muted">{[project.location, project.year].filter(Boolean).join(" · ")}</p> : null}
                      </div>
                    </Link>
                  ))}
                </div>
              </>
            ) : hasGalleryItems ? (
              <GalleryGrid items={galleryItems} categories={galleryCategories} />
            ) : (
              <div className="technical-grid flex min-h-96 items-center justify-center border border-dashed border-navy/25 p-8 text-center">
                <div className="max-w-md bg-surface p-7">
                  <FolderOpen aria-hidden="true" className="mx-auto size-8 text-orange" />
                  <h2 className="mt-5 text-2xl font-semibold tracking-[-0.035em] text-navy">Nos réalisations seront prochainement présentées ici.</h2>
                  <p className="mt-4 text-sm leading-6 text-slate">Aucun projet n’est affiché avant la validation de ses informations, visuels et éléments de contexte.</p>
                  <LinkButton href="/#contact" className="mt-7">Nous contacter</LinkButton>
                </div>
              </div>
            )}
          </Container>
        </section>

        {hasGalleryItems && !displayableProjects.length ? (
          <section className="bg-mist py-14">
            <Container className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
              <div className="border-l-2 border-brand pl-5">
                <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground">Lecture des visuels</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-muted">Les photographies documentent des chantiers et des interventions réelles. Les visuels signalés comme rendus de conception sont des projections architecturales : ils ne représentent pas des ouvrages livrés. Le détail de chaque opération sera publié après validation.</p>
              </div>
              <LinkButton href="/#contact" className="w-fit">Échanger sur un projet</LinkButton>
            </Container>
          </section>
        ) : null}
      </main>
      <SiteFooter />
    </>
  );
}
