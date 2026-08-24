export type GalleryCategoryId = "construction" | "expertise" | "visualisation";
export type GalleryImage = { src: string; alt: string; width: number; height: number };
export type GalleryItem = {
  id: string;
  image: GalleryImage;
  category: GalleryCategoryId;
  type: string;
  caption: string;
  isRendering: boolean;
  featured: boolean;
};

// Les visuels décrivent uniquement ce que montre la photographie. Aucun nom de projet, client, localisation
// ou année n’est renseigné tant que ces informations n’ont pas été validées par 7 Building Innovation.
export const galleryItems: GalleryItem[] = [
  { id: "chantier-01", category: "construction", type: "Travaux / Construction", caption: "Gros œuvre d’un bâtiment à étages", isRendering: false, featured: true, image: { src: "/images/projects/chantier-construction-batiment-gros-oeuvre-01.jpg", alt: "Bâtiment à étages en cours de gros œuvre, avec structure en béton armé, maçonnerie et échafaudages.", width: 960, height: 1280 } },
  { id: "chantier-02", category: "construction", type: "Travaux / Construction", caption: "Travaux de fondation et de soubassement", isRendering: false, featured: true, image: { src: "/images/projects/chantier-travaux-fondation-maconnerie-02.jpg", alt: "Équipe de chantier réalisant les travaux de fondation et de soubassement en maçonnerie d’un bâtiment.", width: 1280, height: 960 } },
  { id: "chantier-03", category: "construction", type: "Travaux / Construction", caption: "Façade en cours d’enduit", isRendering: false, featured: false, image: { src: "/images/projects/chantier-batiment-facade-enduit-03.jpg", alt: "Façade d’un bâtiment à étages en cours d’enduit, avec échafaudages en bambou.", width: 1280, height: 960 } },
  { id: "expertise-01", category: "expertise", type: "Expertise technique", caption: "Contrôle du béton d’une poutre", isRendering: false, featured: true, image: { src: "/images/projects/expertise-technique-controle-poutre-beton-01.jpg", alt: "Technicien de 7 Building Innovation contrôlant le béton d’une poutre à l’aide d’un appareil de mesure.", width: 960, height: 1280 } },
  { id: "expertise-02", category: "expertise", type: "Expertise technique", caption: "Contrôle d’un poteau en béton", isRendering: false, featured: false, image: { src: "/images/projects/expertise-technique-controle-poteau-beton-02.jpg", alt: "Technicien contrôlant un poteau en béton armé sur un chantier de construction.", width: 960, height: 1280 } },
  { id: "expertise-03", category: "expertise", type: "Expertise technique", caption: "Inspection d’un élément de structure", isRendering: false, featured: false, image: { src: "/images/projects/expertise-technique-inspection-structure-beton-03.jpg", alt: "Technicien inspectant un élément de structure en béton dans un bâtiment en travaux.", width: 960, height: 1280 } },
  { id: "expertise-04", category: "expertise", type: "Expertise technique", caption: "Relevé d’une fouille de fondation", isRendering: false, featured: true, image: { src: "/images/projects/expertise-technique-releve-fouille-fondation-04.jpg", alt: "Technicien relevant au décamètre les dimensions d’une fouille de fondation dans un bâtiment existant.", width: 960, height: 1280 } },
  { id: "rendu-01", category: "visualisation", type: "Rendu de conception", caption: "Villa résidentielle à étage", isRendering: true, featured: false, image: { src: "/images/projects/rendu-architectural-villa-residentielle-01.jpg", alt: "Rendu architectural d’une villa résidentielle à étage avec galeries, colonnes et balcons.", width: 1280, height: 808 } },
  { id: "rendu-02", category: "visualisation", type: "Rendu de conception", caption: "Immeuble contemporain d’angle", isRendering: true, featured: true, image: { src: "/images/projects/rendu-architectural-immeuble-angle-rue-02.jpg", alt: "Rendu architectural d’un immeuble contemporain à étages implanté à l’angle de deux voies.", width: 1280, height: 920 } },
  { id: "rendu-03", category: "visualisation", type: "Rendu de conception", caption: "Villa à étages et balcons", isRendering: true, featured: false, image: { src: "/images/projects/rendu-architectural-villa-etage-balcons-03.jpg", alt: "Rendu architectural d’une villa à étages avec arcades, balcons et façade claire.", width: 1280, height: 886 } },
  { id: "rendu-04", category: "visualisation", type: "Rendu de conception", caption: "Immeuble de logements", isRendering: true, featured: false, image: { src: "/images/projects/rendu-architectural-immeuble-logements-balcons-04.jpg", alt: "Rendu architectural d’un immeuble de logements à plusieurs niveaux, avec balcons végétalisés.", width: 960, height: 1280 } },
  { id: "rendu-05", category: "visualisation", type: "Rendu de conception", caption: "Villa contemporaine", isRendering: true, featured: false, image: { src: "/images/projects/rendu-architectural-villa-contemporaine-05.jpg", alt: "Rendu architectural d’une villa contemporaine à étages avec parements de pierre et de bois.", width: 1254, height: 1254 } },
];

const categoryDefinitions: { id: GalleryCategoryId; label: string; description: string }[] = [
  { id: "construction", label: "Construction", description: "Photographies de chantiers et de travaux suivis par l’équipe." },
  { id: "expertise", label: "Expertise technique", description: "Contrôles, inspections et relevés réalisés sur les ouvrages." },
  { id: "visualisation", label: "Visualisations architecturales", description: "Rendus de conception : projections, non des ouvrages livrés." },
];

// Une catégorie n’est proposée en filtre que si elle contient réellement des visuels.
export const galleryCategories = categoryDefinitions.filter((category) => galleryItems.some((item) => item.category === category.id));
// Ordre de composition retenu pour la homepage : alternance chantier / expertise / rendu.
const featuredOrder = ["chantier-02", "expertise-01", "chantier-01", "rendu-02", "expertise-04"];
export const featuredGalleryItems = galleryItems.filter((item) => item.featured).sort((a, b) => featuredOrder.indexOf(a.id) - featuredOrder.indexOf(b.id));
export const hasGalleryItems = galleryItems.length > 0;

const galleryItemsById = new Map(galleryItems.map((item) => [item.id, item]));
export function getGalleryImage(id: string) { return galleryItemsById.get(id)?.image; }
export function getGalleryItem(id: string) { return galleryItemsById.get(id); }
export function getGalleryItemsByCategory(category: GalleryCategoryId) { return galleryItems.filter((item) => item.category === category); }


// Visuels associés à certaines fiches service, uniquement lorsque la photographie apporte une valeur réelle.
export const serviceGalleryImages: Record<string, string> = { "construction-de-batiments": "chantier-02", "calcul-de-structures": "chantier-01", "suivi-controle-travaux": "expertise-02", "rehabilitation-ouvrages": "expertise-04" };
