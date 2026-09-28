export type CompanyPhone = { label: string; number: string; href: string };
export type CompanyWhatsapp = { number: string; href: string };

export type ContactInformation = {
  address: string;
  city: string;
  country: string;
  poBox: string;
  email: string;
  phones: CompanyPhone[];
  whatsapp: CompanyWhatsapp;
};

type Company = {
  legalName: string;
  name: string;
  displayName: string;
  tagline: string;
  description: string;
  experienceStartYear: number | null;
  contact: ContactInformation;
  socialLinks: { linkedin: string | null; facebook: string | null; instagram: string | null };
};

export const company: Company = {
  legalName: "7 Building Innovation SARL",
  name: "7 Building Innovation",
  displayName: "7 Building Innovation",
  tagline: "Votre partenaire technique de la conception à la réalisation.",
  description: "Bureau d’études, ingénierie et construction. 7 Building Innovation accompagne les projets de construction de la conception à la réalisation.",
  experienceStartYear: null,
  contact: {
    address: "Douala PK8 – Entrée Laïque",
    city: "Douala",
    country: "Cameroun",
    poBox: "BP 15176 Douala",
    email: "7buildinginnovation@gmail.com",
    phones: [
      { label: "Téléphone principal", number: "+237 699 15 14 48", href: "tel:+237699151448" },
      { label: "Téléphone secondaire", number: "+237 670 15 23 28", href: "tel:+237670152328" },
    ],
    whatsapp: { number: "+237 699 15 14 48", href: "https://wa.me/237699151448" },
  },
  socialLinks: { linkedin: null, facebook: null, instagram: null },
};

export const primaryNavigation = [
  { label: "Accueil", href: "/" }, { label: "À propos", href: "/#a-propos" },
  { label: "Services", href: "/#services" }, { label: "Projets", href: "/#projets" },
  { label: "Expertise", href: "/#expertise" }, { label: "Équipe", href: "/equipe" },
  { label: "Permis de bâtir", href: "/#permis-de-batir" }, { label: "Contact", href: "/#contact" },
] as const;

export const internalNavigation = [
  { label: "Accueil", href: "/" }, { label: "À propos", href: "/a-propos" },
  { label: "Services", href: "/services" }, { label: "Projets", href: "/projets" },
  { label: "Expertise", href: "/expertise" }, { label: "Équipe", href: "/equipe" },
  { label: "Permis de bâtir", href: "/permis-de-batir" }, { label: "Contact", href: "/contact" },
] as const;

export function getCompanyExperienceYears(currentYear = new Date().getFullYear()) {
  const startYear = company.experienceStartYear;
  if (startYear === null || !Number.isInteger(startYear) || startYear < 1 || !Number.isInteger(currentYear) || startYear > currentYear) return null;
  return currentYear - startYear;
}

export function getCompanyExperienceLabel(currentYear = new Date().getFullYear()) {
  const years = getCompanyExperienceYears(currentYear);
  return years === null ? null : `${years}+ ans d’expérience`;
}

export function getCompanyWhatsAppUrl(message?: string) {
  const { href } = company.contact.whatsapp;
  return message ? `${href}?text=${encodeURIComponent(message)}` : href;
}
