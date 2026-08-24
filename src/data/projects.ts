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
export const publishedProjects = projects.filter((project) => project.published);
export const displayableProjects = publishedProjects.filter((project) => project.coverImage);
export const featuredProjects = displayableProjects.filter((project) => project.featured);
export const projectCategories = [...new Set(displayableProjects.map((project) => project.category))];
export function isProjectIndexable(project: Project) { return project.published && Boolean(project.slug && project.title && project.description && project.coverImage); }
export function getProjectBySlug(slug: string) { return projects.find((project) => project.slug === slug); }
