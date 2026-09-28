export type ProjectImage = { src: string; alt: string; width: number; height: number };

export type Project = {
  id: string;
  slug: string;
  title: string;
  category: string;
  location?: string;
  year?: string;
  client?: string;
  mission?: string;
  description?: string;
  challenge?: string;
  solution?: string;
  services?: string[];
  coverImage?: ProjectImage;
  gallery?: ProjectImage[];
  featured: boolean;
  published: boolean;
  seo?: { title?: string; description?: string };
};

// Aucune réalisation n’est publiée avant validation de son contenu, de ses visuels et de son autorisation de publication.
export const projects: Project[] = [];
export type IndexableProject = Project & { description: string; coverImage: ProjectImage };

// One publication gate for cards, detailed pages, static parameters and sitemap.
export function isProjectIndexable(project: Project): project is IndexableProject {
  const image = project.coverImage;
  return project.published && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(project.slug)
    && Boolean(project.title.trim() && project.category.trim() && project.description?.trim())
    && Boolean(image?.src.trim() && image.alt.trim()
      && Number.isInteger(image.width) && image.width > 0
      && Number.isInteger(image.height) && image.height > 0);
}
export const publishedProjects = projects.filter((project) => project.published);
export const displayableProjects = projects.filter(isProjectIndexable);
export const featuredProjects = displayableProjects.filter((project) => project.featured);
export const projectCategories = [...new Set(displayableProjects.map((project) => project.category))];
export function getProjectBySlug(slug: string) { return projects.find((project) => project.slug === slug); }
