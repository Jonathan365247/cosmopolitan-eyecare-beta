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
      faxNumber: "+1-212-504-8257",
      address: {
        "@type": "PostalAddress",
        streetAddress: "1166 Avenue of the Americas",
        addressLocality: "New York",
        addressRegion: "NY",
        postalCode: "10036",
        addressCountry: "US",
      },
      geo: { "@type": "GeoCoordinates", latitude: 40.7568582, longitude: -73.9820448 },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday"], opens: "10:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "10:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "16:00" },
      ],
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
