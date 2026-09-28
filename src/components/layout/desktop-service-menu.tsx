"use client";

import { ChevronDown, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type NavigationItem = { label: string; href: string };

export function DesktopServiceMenu({ items, pathname }: { items: readonly NavigationItem[]; pathname: string }) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const isActive = (href: string) => pathname === href || pathname.startsWith(href + "/");

  useEffect(() => {
    const closeOutside = (event: PointerEvent) => {
      const details = detailsRef.current;
      if (details?.open && event.target instanceof Node && !details.contains(event.target)) details.open = false;
    };
    const closeOnEscape = (event: KeyboardEvent) => {
      const details = detailsRef.current;
      if (event.key === "Escape" && details?.open) {
        details.open = false;
        details.querySelector("summary")?.focus();
      }
    };
    document.addEventListener("pointerdown", closeOutside);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("pointerdown", closeOutside);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  return (
    <details ref={detailsRef} className="group relative"
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) event.currentTarget.open = false;
      }}>
      <summary className={cn("flex min-h-11 cursor-pointer list-none items-center gap-2 text-sm font-medium transition-colors hover:text-brand [&::-webkit-details-marker]:hidden", items.some((item) => isActive(item.href)) ? "text-brand" : "text-muted")}>
        Services <ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-180 motion-reduce:transition-none" />
      </summary>
      <div className="absolute top-full left-0 z-10 w-64 border border-brand-border bg-surface p-2 shadow-card">
        {items.map((item) => (
          <Link key={item.label} href={item.href} aria-current={isActive(item.href) ? "page" : undefined}
            onClick={() => { if (detailsRef.current) detailsRef.current.open = false; }}
            className={cn("flex min-h-12 items-center justify-between gap-4 rounded-ui-sm px-3 py-3 text-sm transition-colors hover:bg-brand-soft hover:text-brand", isActive(item.href) ? "bg-brand-soft text-brand" : "text-foreground")}>
            {item.label === "Services" ? "Tous les services" : item.label}
            <ArrowUpRight aria-hidden="true" className="size-4 shrink-0 text-brand" />
          </Link>
        ))}
      </div>
    </details>
  );
}
