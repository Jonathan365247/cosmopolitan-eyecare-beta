import { siteUrl } from "../lib/site-config";

type PageStructuredDataProps = {
  name: string;
  description: string;
  path: string;
  breadcrumb?: string;
  mainEntity?: { name: string; description: string; serviceType?: string };
};

export function PageStructuredData({ name, description, path, breadcrumb = name, mainEntity }: PageStructuredDataProps) {
  const url = `${siteUrl}${path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
          { "@type": "ListItem", position: 2, name: breadcrumb, item: url },
        ],
      },
      {
        "@type": "MedicalWebPage",
        "@id": `${url}#webpage`,
        url,
        name,
        description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${siteUrl}/#practice` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        ...(mainEntity ? {
          mainEntity: {
            "@type": "Service",
            "@id": `${url}#service`,
            name: mainEntity.name,
            description: mainEntity.description,
            ...(mainEntity.serviceType ? { serviceType: mainEntity.serviceType } : {}),
            provider: { "@id": `${siteUrl}/#practice` },
            areaServed: { "@type": "City", name: "New York" },
          },
        } : {}),
      },
    ],
  };

  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
