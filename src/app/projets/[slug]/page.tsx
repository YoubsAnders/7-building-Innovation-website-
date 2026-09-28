import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { Container } from "@/components/ui/container";
import { createPageMetadata } from "@/lib/page-metadata";
import { getProjectBySlug, isProjectIndexable, projects } from "@/data/projects";

// Unknown slugs are handled explicitly by notFound(), including an empty project catalogue.
export const dynamicParams = true;
export function generateStaticParams() { return projects.filter(isProjectIndexable).map((project) => ({ slug: project.slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const { slug } = await params; const project = getProjectBySlug(slug); return project && isProjectIndexable(project) ? createPageMetadata({ title: project.seo?.title ?? project.title, description: project.seo?.description ?? project.description!, path: `/projets/${project.slug}` }) : {}; }

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params; const project = getProjectBySlug(slug); if (!project || !isProjectIndexable(project)) notFound();
  return <><SiteHeader /><main id="main-content" tabIndex={-1}><section className="bg-brand-soft py-12 sm:py-16"><Container><Breadcrumbs items={[{ label: "Accueil", href: "/" }, { label: "Projets", href: "/projets" }, { label: project.title }]} /><p className="mt-10 text-sm font-semibold tracking-[0.15em] text-brand uppercase">{project.category}</p><h1 className="mt-4 max-w-4xl text-4xl font-semibold tracking-[-0.055em] text-foreground sm:text-5xl">{project.title}</h1>{project.location || project.year ? <p className="mt-5 text-sm text-muted">{[project.location, project.year].filter(Boolean).join(" · ")}</p> : null}</Container></section><section className="bg-surface py-[var(--space-section)]"><Container className="grid gap-10 lg:grid-cols-[1.15fr_0.85fr]"><div className="overflow-hidden bg-brand-soft"><Image src={project.coverImage!.src} alt={project.coverImage!.alt} width={project.coverImage!.width} height={project.coverImage!.height} sizes="(max-width: 1023px) 100vw, 62vw" className="aspect-[4/3] h-auto w-full object-cover" /></div><div><p className="text-sm font-semibold tracking-[0.15em] text-brand uppercase">Présentation</p><p className="mt-5 text-base leading-8 text-muted">{project.description}</p>{project.mission ? <><h2 className="mt-8 text-xl font-semibold text-foreground">Mission</h2><p className="mt-3 text-sm leading-7 text-muted">{project.mission}</p></> : null}</div></Container></section>{project.gallery?.length ? <section className="bg-brand-soft py-[var(--space-section)]"><Container className="grid gap-4 md:grid-cols-2">{project.gallery.map((image) => <Image key={image.src} src={image.src} alt={image.alt} width={image.width} height={image.height} sizes="(max-width: 767px) 100vw, 50vw" className="aspect-[4/3] h-auto w-full object-cover" />)}</Container></section> : null}</main><SiteFooter /></>;
}
