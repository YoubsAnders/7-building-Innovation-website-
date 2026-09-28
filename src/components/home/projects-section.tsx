import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FolderOpen } from "lucide-react";
import { GalleryFigure } from "@/components/gallery/gallery-figure";
import { Container } from "@/components/ui/container";
import { LinkButton } from "@/components/ui/link-button";
import { SectionHeading } from "@/components/ui/section-heading";
import { featuredGalleryItems } from "@/data/gallery";
import { featuredProjects } from "@/data/projects";

// Trois états successifs : fiches projets validées si elles existent, sinon la sélection de visuels réels, sinon l’attente.
export function ProjectsSection() {
  const [lead, second, ...secondary] = featuredGalleryItems;
  const hasGallery = Boolean(lead);

  return (
    <section id="projets" className="scroll-mt-24 bg-surface py-[var(--space-section)]">
      <Container>
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
          <SectionHeading
            eyebrow="Projets"
            title={featuredProjects.length ? "Des projets à découvrir." : hasGallery ? "Sur le terrain, en conception." : "Des réalisations à découvrir prochainement."}
            description={featuredProjects.length || hasGallery ? "Une sélection de chantiers, d’interventions techniques et de rendus de conception." : "Cette section est prête à accueillir les futures réalisations validées de 7 Building Innovation."}
          />
          {featuredProjects.length || hasGallery ? <LinkButton href="/projets" variant="secondary" className="w-fit shrink-0">Voir la galerie <ArrowUpRight aria-hidden="true" className="ml-2 size-4" /></LinkButton> : null}
        </div>

        {featuredProjects.length ? (
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            {featuredProjects.map((project, index) => (
              <Link key={project.id} href={`/projets/${project.slug}`} className={`group overflow-hidden border border-brand-border bg-surface ${index === 0 ? "lg:col-span-2" : ""}`}>
                <Image src={project.coverImage!.src} alt={project.coverImage!.alt} width={project.coverImage!.width} height={project.coverImage!.height} sizes={index === 0 ? "(max-width: 1023px) 100vw, 80vw" : "(max-width: 1023px) 100vw, 40vw"} className="aspect-[16/9] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
                <div className="flex items-end justify-between gap-5 p-6">
                  <div>
                    <p className="text-xs font-semibold tracking-[0.14em] text-brand uppercase">{project.category}</p>
                    <h3 className="mt-3 text-2xl font-semibold tracking-[-0.035em] text-foreground">{project.title}</h3>
                    {project.location || project.year ? <p className="mt-2 text-sm text-muted">{[project.location, project.year].filter(Boolean).join(" · ")}</p> : null}
                  </div>
                  <ArrowUpRight aria-hidden="true" className="size-5 shrink-0 text-brand" />
                </div>
              </Link>
            ))}
          </div>
        ) : hasGallery ? (
          <>
            <div className="mt-12 grid gap-4 lg:h-[30rem] lg:grid-cols-12">
              <GalleryFigure item={lead} sizes="(max-width: 1023px) 100vw, 58vw" className="lg:col-span-7 lg:aspect-auto lg:h-full" />
              {second ? <GalleryFigure item={second} sizes="(max-width: 1023px) 100vw, 40vw" className="lg:col-span-5 lg:aspect-auto lg:h-full" /> : null}
            </div>
            {secondary.length ? (
              <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:h-[19rem] lg:grid-cols-12">
                {secondary.map((item) => <GalleryFigure key={item.id} item={item} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 31vw" className="lg:col-span-4 lg:aspect-auto lg:h-full" />)}
              </div>
            ) : null}
            <p className="mt-8 max-w-2xl border-l-2 border-brand-border pl-5 text-sm leading-6 text-muted">Les visuels identifiés comme rendus de conception sont des projections architecturales, et non des ouvrages livrés.</p>
          </>
        ) : (
          <div className="technical-grid mt-12 flex min-h-72 items-center justify-center border border-dashed border-brand-deep/25 p-8 text-center">
            <div className="max-w-sm bg-surface p-6">
              <FolderOpen aria-hidden="true" className="mx-auto size-7 text-brand" />
              <p className="mt-5 text-lg font-semibold tracking-[-0.02em] text-brand-deep">Nos réalisations seront prochainement présentées ici.</p>
              <p className="mt-3 text-sm leading-6 text-muted">Aucun projet n’est affiché tant que les informations associées ne sont pas validées.</p>
            </div>
          </div>
        )}
      </Container>
    </section>
  );
}
