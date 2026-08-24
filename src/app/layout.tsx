import type { Metadata } from "next";
import localFont from "next/font/local";
import { OrganizationJsonLd } from "@/components/seo/organization-json-ld";
import { company } from "@/data/company";
import "./globals.css";

const geistSans = localFont({
  src: "../assets/fonts/geist-latin.woff2",
  variable: "--font-geist-sans",
  display: "swap",
  weight: "100 900",
});
const metadataBase = process.env.NEXT_PUBLIC_SITE_URL ? new URL(process.env.NEXT_PUBLIC_SITE_URL) : undefined;

export const metadata: Metadata = {
  metadataBase,
  title: { default: company.name, template: `%s | ${company.name}` },
  description: company.description,
  openGraph: {
    type: "website", locale: "fr_FR", title: company.name,
    description: company.description, siteName: company.name,
  },
  twitter: { card: "summary", title: company.name, description: company.description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr" className={`${geistSans.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col">
        {children}
        <OrganizationJsonLd />
      </body>
    </html>
  );
}
