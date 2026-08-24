import Image from "next/image";
import type { GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryFigureProps = { item: GalleryItem; sizes: string; preload?: boolean; className?: string };

// Le cadrage par défaut suit l’orientation réelle du fichier afin d’éviter les recadrages excessifs sur mobile.
// Les rendus 3D portent un badge encadré distinct des photographies réelles : la distinction doit rester
// lisible d’un coup d’œil, sans qu’on puisse les confondre avec des ouvrages livrés.
export function GalleryFigure({ item, sizes, preload = false, className }: GalleryFigureProps) {
  const isLandscape = item.image.width >= item.image.height;
  return (
    <figure className={cn("group relative overflow-hidden rounded-ui-md bg-brand-soft", isLandscape ? "aspect-[4/3]" : "aspect-[4/5]", className)}>
      <Image src={item.image.src} alt={item.image.alt} fill sizes={sizes} preload={preload} className="object-cover transition-transform [transition-duration:var(--transition-media)] [transition-timing-function:var(--ease-soft)] group-hover:scale-[1.04]" />
      <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-brand-deep/85 via-brand-deep/30 to-brand-deep/0" />
      <div aria-hidden="true" className="absolute inset-0 bg-brand/0 transition-colors [transition-duration:var(--transition-base)] group-hover:bg-brand/15" />
      <figcaption className="absolute inset-x-0 bottom-0 p-5">
        {item.isRendering ? (
          <span className="inline-flex items-center rounded-ui-sm border border-white/45 bg-brand-deep/55 px-2.5 py-1 text-[0.625rem] font-semibold tracking-[0.14em] text-white uppercase">{item.type}</span>
        ) : (
          <span className="text-[0.625rem] font-semibold tracking-[0.16em] text-white/80 uppercase">{item.type}</span>
        )}
        <p className="mt-2 text-pretty text-base font-semibold leading-6 text-white">{item.caption}</p>
      </figcaption>
    </figure>
  );
}
