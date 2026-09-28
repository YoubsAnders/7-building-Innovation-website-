import { company } from "@/data/company";
import { getSiteUrl } from "@/lib/site-url";

export function OrganizationJsonLd() {
  const siteUrl = getSiteUrl();
  const address = { "@type": "PostalAddress", streetAddress: company.contact.address, addressLocality: company.contact.city, addressCountry: company.contact.country, postOfficeBoxNumber: company.contact.poBox };
  const contactDetails = { name: company.displayName, legalName: company.legalName, description: company.description, email: company.contact.email, telephone: company.contact.phones.map((phone) => phone.href.replace("tel:", "")), address, ...(siteUrl ? { url: siteUrl } : {}) };
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "Organization", ...(siteUrl ? { "@id": `${siteUrl}/#organization` } : {}), ...contactDetails },
      { "@type": "LocalBusiness", ...(siteUrl ? { "@id": `${siteUrl}/#local-business` } : {}), ...contactDetails },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />;
}
