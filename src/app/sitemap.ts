import type { MetadataRoute } from "next";
import { services } from "@/data/services";
import { getSiteUrl } from "@/lib/site-url";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  if (!siteUrl) return [];
  return ["/", "/a-propos", "/services", ...services.map((service) => `/services/${service.slug}`), "/projets", "/expertise", "/equipe", "/permis-de-batir"].map((path) => ({ url: `${siteUrl}${path}`, changeFrequency: "monthly", priority: path === "/" ? 1 : 0.8 }));
}
