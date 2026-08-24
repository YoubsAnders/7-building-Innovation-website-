export type TeamImage = { src: string; alt: string; width: number; height: number; objectPosition?: string };

export type TeamMember = {
  id: string;
  slug: string;
  name: string;
  role: string;
  position: string;
  specialty: string | null;
  bioShort: string | null;
  bioLong: string | null;
  qualifications: string[];
  diplomas: string[];
  certifications: string[];
  expertiseAreas: string[];
  image: TeamImage | null;
  imageReference: string;
  professionalLinks: { linkedin: string | null };
  featured: boolean;
  order: number;
};

export const teamMembers: TeamMember[] = [
  { id: "tiam-levi", slug: "tiam-levi", name: "Tiam Levi", role: "Fondateur", position: "Fondateur — Expert Judiciaire & Expert Technique", specialty: null, bioShort: "Tiam Levi porte l’expertise judiciaire et technique de 7 Building Innovation, au service de l’analyse des ouvrages, des travaux et des dossiers nécessitant une lecture rigoureuse.", bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: ["Expertise judiciaire", "Expertise technique"], image: { src: "/images/team/tiam-levi.png", alt: "Tiam Levi, fondateur de 7 Building Innovation, Expert Judiciaire et Expert Technique", width: 1122, height: 1402 }, imageReference: "/images/team/tiam-levi.*", professionalLinks: { linkedin: null }, featured: true, order: 1 },
  { id: "loick", slug: "loick", name: "Ing. Loick", role: "Ingénieur", position: "Ingénieur", specialty: null, bioShort: null, bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: [], image: { src: "/images/team/loick.png", alt: "Ing. Loick, ingénieur chez 7 Building Innovation", width: 1122, height: 1402 }, imageReference: "/images/team/loick.*", professionalLinks: { linkedin: null }, featured: false, order: 2 },
  { id: "geraldin", slug: "geraldin", name: "Ing. Geraldin", role: "Ingénieur", position: "Ingénieur", specialty: null, bioShort: null, bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: [], image: { src: "/images/team/geraldin.png", alt: "Ing. Geraldin, ingénieur chez 7 Building Innovation", width: 1122, height: 1402 }, imageReference: "/images/team/geraldin.*", professionalLinks: { linkedin: null }, featured: false, order: 3 },
  { id: "jires", slug: "jires", name: "Ing. Jires", role: "Ingénieur", position: "Ingénieur", specialty: null, bioShort: null, bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: [], image: { src: "/images/team/jires.png", alt: "Ing. Jires, ingénieur chez 7 Building Innovation", width: 1086, height: 1448, objectPosition: "center top" }, imageReference: "/images/team/jires.*", professionalLinks: { linkedin: null }, featured: false, order: 4 },
  { id: "augustin", slug: "augustin", name: "Ing. Augustin", role: "Ingénieur", position: "Ingénieur", specialty: null, bioShort: null, bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: [], image: { src: "/images/team/augustin.png", alt: "Ing. Augustin, ingénieur chez 7 Building Innovation", width: 1122, height: 1402 }, imageReference: "/images/team/augustin.*", professionalLinks: { linkedin: null }, featured: false, order: 5 },
  { id: "leonard", slug: "leonard", name: "Leonard", role: "Superviseur de chantier", position: "Superviseur de chantier", specialty: null, bioShort: null, bioLong: null, qualifications: [], diplomas: [], certifications: [], expertiseAreas: [], image: null, imageReference: "/images/team/leonard.*", professionalLinks: { linkedin: null }, featured: false, order: 6 },
];

export const founder = teamMembers.find((member) => member.featured)!;
export const otherTeamMembers = teamMembers.filter((member) => !member.featured);
export const founderWhatsAppMessage = "Bonjour, je souhaite échanger avec 7 Building Innovation concernant un projet.";
