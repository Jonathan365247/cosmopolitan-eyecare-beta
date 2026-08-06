const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Optician",
      "@id": "https://www.cosmopolitaneyecare.com/#practice",
      name: "Cosmopolitan Eyecare",
      url: "https://www.cosmopolitaneyecare.com/",
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
      "@id": "https://www.cosmopolitaneyecare.com/#website",
      url: "https://www.cosmopolitaneyecare.com/",
      name: "Cosmopolitan Eyecare",
      publisher: { "@id": "https://www.cosmopolitaneyecare.com/#practice" },
      inLanguage: "en-US",
    },
  ],
};

export function PracticeStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }} />;
}
