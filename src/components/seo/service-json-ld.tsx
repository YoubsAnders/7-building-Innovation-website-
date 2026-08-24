import { company } from "@/data/company";
import type { Service } from "@/data/services";

export function ServiceJsonLd({ service }: { service: Service }) {
  const data = { "@context": "https://schema.org", "@type": "Service", name: service.name, description: service.shortDescription, provider: { "@type": "Organization", name: company.name } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
