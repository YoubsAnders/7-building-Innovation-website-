import Link from "next/link";
import { ChevronRight } from "lucide-react";

export type BreadcrumbItem = { label: string; href?: string };
export function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return <nav aria-label="Fil d’Ariane"><ol className="flex flex-wrap items-center gap-2 text-sm text-slate">{items.map((item, index) => <li key={`${item.label}-${index}`} className="flex items-center gap-2">{index > 0 ? <ChevronRight aria-hidden="true" className="size-3 text-orange" /> : null}{item.href ? <Link href={item.href} className="transition-colors hover:text-navy">{item.label}</Link> : <span aria-current="page" className="font-medium text-navy">{item.label}</span>}</li>)}</ol></nav>;
}
