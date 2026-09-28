"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import type { IndexableProject } from "@/data/projects";
import { cn } from "@/lib/utils";

export function ProjectGrid({ projects }: { projects: IndexableProject[] }) {
  const [category, setCategory] = useState<string | null>(null);
  const categories = [...new Set(projects.map((project) => project.category))];
  const visible = projects.filter((project) => category === null || project.category === category);
  return (
    <div>
      {categories.length > 1 ? <div aria-label="Filtrer les fiches projets" className="mb-6 flex flex-wrap gap-3">
        {[null, ...categories].map((value) => <button key={value ?? "__all"} type="button" onClick={() => setCategory(value)} aria-pressed={category === value} aria-controls="project-results"
          className={cn("min-h-11 rounded-ui-sm border px-4 py-2 text-sm font-semibold transition-colors", category === value ? "border-brand bg-brand text-white" : "border-brand-border bg-surface text-foreground hover:border-brand")}>{value ?? "Tous les projets"}</button>)}
      </div> : null}
      <p role="status" className="mb-6 text-sm text-muted">{visible.length} {visible.length === 1 ? "fiche projet" : "fiches projets"}</p>
      <div id="project-results" className="grid gap-6 md:grid-cols-2">
        {visible.map((project) => <Link key={project.id} href={`/projets/${project.slug}`} className="group overflow-hidden border border-brand-border bg-surface">
          <Image {...project.coverImage} alt={project.coverImage.alt} sizes="(max-width: 767px) 100vw, 50vw" className="aspect-[4/3] h-auto w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]" />
          <div className="p-6"><p className="text-xs font-semibold tracking-widest text-brand uppercase">{project.category}</p><h3 className="mt-3 text-2xl font-semibold tracking-tight">{project.title}</h3>
            {project.location || project.year ? <p className="mt-2 text-sm text-muted">{[project.location, project.year].filter(Boolean).join(" · ")}</p> : null}
          </div>
        </Link>)}
      </div>
    </div>
  );
}
