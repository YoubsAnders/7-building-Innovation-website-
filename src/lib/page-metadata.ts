import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

export function createPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const siteUrl = getSiteUrl();
  return { title, description, alternates: siteUrl ? { canonical: path } : undefined, openGraph: { title, description, type: "website", ...(siteUrl ? { url: `${siteUrl}${path}` } : {}) } };
}
