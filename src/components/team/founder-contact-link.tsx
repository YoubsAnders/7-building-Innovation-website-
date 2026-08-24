import { MessageCircle } from "lucide-react";
import { company, getCompanyWhatsAppUrl } from "@/data/company";
import { founder, founderWhatsAppMessage } from "@/data/team";
import { TeamPortrait } from "@/components/team/founder-profile";

export function FounderContactLink({ compact = false }: { compact?: boolean }) {
  const href = getCompanyWhatsAppUrl(founderWhatsAppMessage);
  return <a href={href} target="_blank" rel="noopener noreferrer" aria-label="Contacter 7 Building Innovation via WhatsApp depuis le profil de Tiam Levi" className="group relative block overflow-hidden border border-brand-border sm:max-w-sm lg:max-w-none transition-colors hover:border-brand focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand"><TeamPortrait member={founder} compact={compact} interactive /><span className="absolute inset-x-0 bottom-0 flex items-center justify-center gap-2 bg-brand-deep/90 px-4 py-3 text-xs font-semibold text-surface transition-colors group-hover:bg-brand-dark"><MessageCircle aria-hidden="true" className="size-4" />Contacter via WhatsApp</span><span className="sr-only">Numéro WhatsApp de 7 Building Innovation : {company.contact.whatsapp.number}</span></a>;
}
