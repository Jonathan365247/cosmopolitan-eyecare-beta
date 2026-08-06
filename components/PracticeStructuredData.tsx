import { siteUrl } from "../lib/site-config";

const practiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalClinic",
      "@id": `${siteUrl}/#practice`,
      name: "Cosmopolitan Eyecare",
      description: "A Midtown Manhattan optometry practice providing comprehensive eye exams, dry eye care, specialty contact lens conversations, myopia management, medical eye care, and ocular aesthetics consultations.",
      medicalSpecialty: "https://schema.org/Optometric",
      url: `${siteUrl}/`,
      logo: `${siteUrl}/approved-assets/cosmopolitan-logo.png`,
      image: `${siteUrl}/approved-assets/cosmopolitan-logo.png`,
      telephone: "+1-212-302-4889",
      address: { "@type": "PostalAddress", streetAddress: "1166 Avenue of the Americas", addressLocality: "New York", addressRegion: "NY", postalCode: "10036", addressCountry: "US" },
      openingHoursSpecification: [
        { "@type": "OpeningHoursSpecification", dayOfWeek: "Monday", opens: "10:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday"], opens: "10:00", closes: "19:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Thursday", "Friday"], opens: "10:00", closes: "18:00" },
        { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday", "Sunday"], opens: "10:00", closes: "16:00" },
      ],
      hasMap: "https://maps.app.goo.gl/JCuUL9935ZF4yxYW8",
      contactPoint: [{ "@type": "ContactPoint", telephone: "+1-212-302-4889", contactType: "appointments and patient inquiries", areaServed: "US", availableLanguage: "en" }],
      availableService: ["Comprehensive eye exams", "Dry eye care", "Specialty contact lenses", "Myopia management", "Medical eye care", "Ocular aesthetics"].map((name) => ({ "@type": "Service", name, provider: { "@id": `${siteUrl}/#practice` } })),
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

const homepageSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "MedicalWebPage",
      "@id": `${siteUrl}/#homepage`,
      url: `${siteUrl}/`,
      name: "Cosmopolitan Eyecare | Midtown Manhattan",
      description: "Personalized eye care, dry eye treatment, specialty contact lenses, myopia management, medical eye care, and ocular aesthetics in Midtown Manhattan.",
      inLanguage: "en-US",
      isPartOf: { "@id": `${siteUrl}/#website` },
      about: { "@id": `${siteUrl}/#practice` },
      mainEntity: { "@id": `${siteUrl}/#care-pathways` },
    },
    {
      "@type": "ItemList",
      "@id": `${siteUrl}/#care-pathways`,
      name: "Cosmopolitan Eyecare care pathways",
      itemListElement: [
        ["Comprehensive eye exams", "/care/comprehensive-eye-exams"],
        ["Dry eye care", "/dry-eye"],
        ["Specialty contact lenses", "/specialty-contact-lenses"],
        ["Myopia management", "/care/myopia-management"],
        ["Medical eye care", "/care/ocular-disease-management"],
        ["Ocular aesthetics", "/aesthetics"],
      ].map(([name, path], position) => ({ "@type": "ListItem", position: position + 1, name, url: `${siteUrl}${path}` })),
    },
  ],
};

export function PracticeStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(practiceSchema) }} />;
}

export function HomePageStructuredData() {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(homepageSchema) }} />;
}
