export type PatientExperience = {
  id: string;
  excerpt: string;
  reviewerDisplayName: string;
  platform: "Google";
  sourceUrl: string;
  service: string;
  serviceHref: string;
  reviewDate?: string;
  retrievedOn: string;
  excerptWasShortened?: boolean;
  featured?: boolean;
};

const googlePracticeUrl = "https://www.google.com/maps?cid=14498851427237372155";

/**
 * Public excerpts only. Source text, retrieval date, and any shortening are
 * tracked here so the rendered page does not imply unmaintained live reviews.
 */
export const patientExperiences: readonly PatientExperience[] = [
  { id: "william-dry-eye", excerpt: "I went from using drops hourly to not needing them at all. The whole experience from Dr. Chan and his team was outstanding.", reviewerDisplayName: "William Wright", platform: "Google", sourceUrl: googlePracticeUrl, service: "Dry eye care", serviceHref: "/dry-eye", retrievedOn: "2026-08-05", featured: true },
  { id: "sm-scleral", excerpt: "I am absolutely thrilled with the results of my scleral lenses. I had previously seen specialists in Europe, but no one was able to achieve the right fit and results I was looking for.", reviewerDisplayName: "S. M.", platform: "Google", sourceUrl: googlePracticeUrl, service: "Scleral lenses", serviceHref: "/specialty-contact-lenses", retrievedOn: "2026-08-05", featured: true },
  { id: "asia-exam", excerpt: "The doctors are very personable and understanding. They take their time evaluating your condition.", reviewerDisplayName: "Asia Aziz", platform: "Google", sourceUrl: googlePracticeUrl, service: "Comprehensive eye care", serviceHref: "/care/comprehensive-eye-exams", retrievedOn: "2026-08-05" },
  { id: "yiwa-lenses", excerpt: "Dr. Chan went above and beyond to be informative and detailed with my fitting. Learned eye care tips that no optometrist in my entire life had ever bothered to share before.", reviewerDisplayName: "Yiwa ‘Kiwi’ Wang", platform: "Google", sourceUrl: googlePracticeUrl, service: "Contact lens fitting", serviceHref: "/care/contact-lens-exams", retrievedOn: "2026-08-05" },
  { id: "mark-exam", excerpt: "Dr. Chaudri was friendly, thorough, informative and took time to answer all my questions.", reviewerDisplayName: "Mark Wuillamey", platform: "Google", sourceUrl: googlePracticeUrl, service: "Comprehensive eye exam", serviceHref: "/care/comprehensive-eye-exams", retrievedOn: "2026-08-05" },
  { id: "amy-contact-help", excerpt: "We were traveling and my daughter forgot her contacts and glasses at home. They were able to get us a pair in no more than 10 minutes. So friendly too.", reviewerDisplayName: "Amy Rominger", platform: "Google", sourceUrl: googlePracticeUrl, service: "Contact lens help", serviceHref: "/care/contact-lens-exams", retrievedOn: "2026-08-05" },
  { id: "philip-exam", excerpt: "Dr. Chan was thorough and took the time to explain everything clearly. The staff were friendly and helpful from check-in to check-out.", reviewerDisplayName: "Philip D.", platform: "Google", sourceUrl: googlePracticeUrl, service: "Eye exam", serviceHref: "/care/comprehensive-eye-exams", retrievedOn: "2026-08-05" },
  { id: "sherily-medical", excerpt: "The doctor was concerned about my eyes and gave me drops and a prescription. All were friendly.", reviewerDisplayName: "Sherily T.", platform: "Google", sourceUrl: googlePracticeUrl, service: "Medical eye care", serviceHref: "/care/ocular-disease-management", retrievedOn: "2026-08-05" },
] as const;
