import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { isProjectIndexable, projects } from "@/data/projects";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  const paths = ["/", "/a-propos", "/services", ...services.map((service) => `/services/${service.slug}`), "/projets", ...projects.filter(isProjectIndexable).map((project) => `/projets/${project.slug}`), "/expertise", "/equipe", "/permis-de-batir", "/contact"];
  return paths.map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
