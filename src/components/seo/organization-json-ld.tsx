import { company } from "@/data/company";

export function OrganizationJsonLd() {
  const data = { "@context": "https://schema.org", "@type": "Organization", name: company.displayName, legalName: company.legalName, description: company.description, email: company.contact.email, telephone: company.contact.phones.map((phone) => phone.href.replace("tel:", "")), address: { "@type": "PostalAddress", streetAddress: company.contact.address, addressLocality: company.contact.city, addressCountry: company.contact.country, postOfficeBoxNumber: company.contact.poBox } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
