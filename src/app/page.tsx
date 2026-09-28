import { AboutSection } from "@/components/home/about-section";
import { ContactSection } from "@/components/home/contact-section";
import { ExpertiseSection } from "@/components/home/expertise-section";
import { HeroSection } from "@/components/home/hero-section";
import { PermitSection } from "@/components/home/permit-section";
import { ProcessSection } from "@/components/home/process-section";
import { ProjectsSection } from "@/components/home/projects-section";
import { ServicesSection } from "@/components/home/services-section";
import { TeamSection } from "@/components/home/team-section";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";

import { company } from "@/data/company";
import { createPageMetadata } from "@/lib/page-metadata";

export const metadata = {
  ...createPageMetadata({ title: company.name, description: company.description, path: "/" }),
  title: { absolute: company.name },
};

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <ExpertiseSection />
        <PermitSection />
        <TeamSection />
        <ProcessSection />
        <ContactSection />
      </main>
      <SiteFooter />
    </>
  );
}
