import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

export type BreadcrumbItem = { label: string; href?: string };
export function Breadcrumbs({ items, inverse = false }: { items: BreadcrumbItem[]; inverse?: boolean }) {
  return (
    <nav aria-label="Fil d’Ariane">
      <ol className={cn("flex flex-wrap items-center gap-2 text-sm", inverse ? "text-white/80" : "text-muted")}>
        {items.map((item, index) => (
          <li key={`${item.label}-${index}`} className="flex items-center gap-2">
            {index > 0 ? <ChevronRight aria-hidden="true" className={cn("size-3 shrink-0", inverse ? "text-brand-light" : "text-brand")} /> : null}
            {item.href ? <Link href={item.href} className={cn("transition-colors", inverse ? "hover:text-white" : "hover:text-brand")}>{item.label}</Link> :
              <span aria-current="page" className={cn("font-medium", inverse ? "text-white" : "text-foreground")}>{item.label}</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
