import { siteUrl } from "../lib/site-config";

const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalBusiness",
      "@id": `${siteUrl}/#practice`,
      name: "Cosmopolitan Eyecare",
      medicalSpecialty: "Optometric",
      url: `${siteUrl}/`,
      telephone: "+1-212-302-4889",
      sameAs: [
        "https://www.instagram.com/cosmopolitaneyecare/",
        "https://www.facebook.com/Cosmopolitan.Eyecare.NY",
        "https://x.com/Cosmo_Eye",
      ],
    },
    {
      "@type": "WebSite",
      "@id": `${siteUrl}/#website`,
      url: `${siteUrl}/`,
      name: "Cosmopolitan Eyecare",
      publisher: { "@id": `${siteUrl}/#practice` },
      inLanguage: "en-US",
    },
  ],
};

export function PracticeStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }} />;
}
