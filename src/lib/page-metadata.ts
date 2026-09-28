import type { Metadata } from "next";
import { company } from "@/data/company";
import { getSiteUrl } from "@/lib/site-url";

export function createPageMetadata({ title, description, path }: { title: string; description: string; path: string }): Metadata {
  const siteUrl = getSiteUrl();
  const images = siteUrl ? [{ url: `${siteUrl}/sharing-image`, width: 1200, height: 630, alt: company.displayName }] : undefined;
  return {
    title,
    description,
    alternates: siteUrl ? { canonical: `${siteUrl}${path}` } : undefined,
    openGraph: {
      title, description, type: "website", locale: "fr_FR", siteName: company.displayName,
      ...(siteUrl ? { url: `${siteUrl}${path}`, images } : {}),
    },
    twitter: { card: "summary_large_image", title, description, ...(images ? { images } : {}) },
  };
}
