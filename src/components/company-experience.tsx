import { company } from "@/data/company";
import { ExperienceLabel } from "@/components/experience-label";

// Keep the static HTML useful while the client refreshes the year without hydration mismatch.
export function CompanyExperience({ className }: { className?: string }) {
  if (company.experienceStartYear === null) return null;
  return <ExperienceLabel initialYear={new Date().getFullYear()} className={className} />;
}
