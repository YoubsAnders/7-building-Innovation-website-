import Image from "next/image";
import { UserRound } from "lucide-react";
import type { TeamMember } from "@/data/team";
import { cn } from "@/lib/utils";

type TeamPortraitProps = { member: TeamMember; compact?: boolean; interactive?: boolean; sizes?: string; className?: string };

// Portrait et placeholder partagent le même cadre 4:5 : la grille reste régulière quel que soit
// le nombre de photographies réellement disponibles.
export function TeamPortrait({ member, compact = false, interactive = false, sizes, className }: TeamPortraitProps) {
  if (member.image) {
    return (
      <div className={cn("relative aspect-[4/5] w-full overflow-hidden bg-brand-soft", className)}>
        <Image
          src={member.image.src}
          alt={member.image.alt}
          fill
          sizes={sizes ?? (compact ? "(max-width: 767px) 60vw, 36vw" : "(max-width: 1023px) 100vw, 42vw")}
          style={member.image.objectPosition ? { objectPosition: member.image.objectPosition } : undefined}
          className={cn("object-cover", interactive && "transition-transform duration-500 ease-out group-hover:scale-[1.02]")}
        />
      </div>
    );
  }
  return (
    <div className={cn("technical-grid flex aspect-[4/5] w-full items-center justify-center bg-brand-soft p-6 text-center text-muted", className)} role="img" aria-label={`Emplacement réservé au portrait de ${member.name}`}>
      <div>
        <UserRound aria-hidden="true" className="mx-auto size-10 text-brand" />
        <p className="mt-4 text-xs font-semibold tracking-[0.14em] uppercase">Portrait à venir</p>
      </div>
    </div>
  );
}
