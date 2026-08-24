type BreadcrumbJsonLdProps = { items: Array<{ name: string; url?: string }> };
export function BreadcrumbJsonLd({ items }: BreadcrumbJsonLdProps) {
  const data = { "@context": "https://schema.org", "@type": "BreadcrumbList", itemListElement: items.map((item, index) => ({ "@type": "ListItem", position: index + 1, name: item.name, ...(item.url ? { item: item.url } : {}) })) };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
