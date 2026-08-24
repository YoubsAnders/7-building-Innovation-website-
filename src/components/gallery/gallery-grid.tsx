"use client";

import { useMemo, useState } from "react";
import { GalleryFigure } from "@/components/gallery/gallery-figure";
import type { GalleryCategoryId, GalleryItem } from "@/data/gallery";
import { cn } from "@/lib/utils";

type GalleryCategoryOption = { id: GalleryCategoryId; label: string; description: string };
type GalleryGridProps = { items: GalleryItem[]; categories: GalleryCategoryOption[] };
type ActiveFilter = GalleryCategoryId | "all";

// Tous les visuels sont rendus côté serveur au premier chargement : le filtre n’ajoute qu’une sélection côté client.
export function GalleryGrid({ items, categories }: GalleryGridProps) {
  const [activeFilter, setActiveFilter] = useState<ActiveFilter>("all");
  const filters = useMemo(() => [{ id: "all" as const, label: "Tout voir", description: "L’ensemble des visuels disponibles." }, ...categories], [categories]);
  const visibleItems = activeFilter === "all" ? items : items.filter((item) => item.category === activeFilter);
  const activeDescription = filters.find((filter) => filter.id === activeFilter)?.description;

  return (
    <>
      <div className="flex flex-wrap gap-2.5" role="group" aria-label="Filtrer la galerie par catégorie">
        {filters.map((filter) => {
          const isActive = filter.id === activeFilter;
          return (
            <button key={filter.id} type="button" aria-pressed={isActive} onClick={() => setActiveFilter(filter.id)} className={cn(
              "inline-flex min-h-11 items-center rounded-ui-sm border px-4 text-sm font-semibold transition-[color,background-color,border-color] [transition-duration:var(--transition-base)]",
              isActive ? "border-brand bg-brand text-surface" : "border-brand-border bg-surface text-muted hover:border-brand hover:text-brand",
            )}>
              {filter.label}
            </button>
          );
        })}
      </div>
      {activeDescription ? <p className="mt-5 max-w-2xl text-sm leading-6 text-muted">{activeDescription}</p> : null}
      <p aria-live="polite" className="sr-only">{visibleItems.length} visuel{visibleItems.length > 1 ? "s" : ""} affiché{visibleItems.length > 1 ? "s" : ""}.</p>
      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {visibleItems.map((item) => <GalleryFigure key={item.id} item={item} sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw" />)}
      </div>
    </>
  );
}
