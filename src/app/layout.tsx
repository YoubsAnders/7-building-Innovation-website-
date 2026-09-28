import type { Metadata } from "next";
import localFont from "next/font/local";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/page-metadata";
import { getSiteUrl } from "@/lib/site-url";
import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});
const siteUrl = getSiteUrl();

export const metadata: Metadata = {
  ...createPageMetadata({ title: company.name, description: company.description, path: "/" }),
  metadataBase: siteUrl ? new URL(siteUrl) : undefined,
  title: { default: company.name, template: `%s | ${company.name}` },
  // Canonical belongs to each page, never inherited from the root layout.
  alternates: undefined,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        <a href="#main-content" className="skip-link">Aller au contenu principal</a>
        {children}
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
