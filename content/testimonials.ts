export type Testimonial = {
  id: string;
  category: string;
  fullOriginalText: string;
  approvedExcerpt: string;
  patientDisplayName: string;
  sourcePlatform: "Google" | "Zocdoc";
  sourceUrl: string;
  sourceDate: string;
  verifiedPatient: boolean;
  serviceAssociation: string;
  serviceHref: string;
  providerAssociation?: "deeba-chaudri" | "ethan-chan";
  featured: boolean;
  homepage: boolean;
  approvedForPublication: true;
  lastVerifiedOn: "2026-08-06";
  internalNotes: string;
};

const googlePracticeUrl = "https://www.google.com/maps?cid=14498851427237372155";
const deebaZocdocUrl = "https://www.zocdoc.com/doctor/deeba-chaudri-od-337990";

/**
 * Source-controlled public review excerpts. Components render only
 * `approvedExcerpt`; full source text and notes support provenance review.
 */
export const testimonials: readonly Testimonial[] = [
  {
    id: "william-dry-eye", category: "DRY EYE CARE", fullOriginalText: "I came to Dr. Chan suffering from severe dry eyes. I had four sessions of Intense-Pulsed Therapy and have had amazing results. I went from using drops hourly to not needing them at all. The whole experience from Dr. Chan and his team was outstanding. Highly recommend!!", approvedExcerpt: "I went from using drops hourly to not needing them at all. The whole experience from Dr. Chan and his team was outstanding.", patientDisplayName: "William Wright", sourcePlatform: "Google", sourceUrl: googlePracticeUrl, sourceDate: "February 2026", verifiedPatient: false, serviceAssociation: "Dry eye care", serviceHref: "/dry-eye", providerAssociation: "ethan-chan", featured: true, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Continuous excerpt; individual outcome only."
  },
  {
    id: "sm-scleral", category: "SCLERAL LENSES", fullOriginalText: "I am absolutely thrilled with the results of my scleral lenses. I had previously seen specialists in Europe, but unfortunately, no one was able to achieve the right fit and results I was looking for.", approvedExcerpt: "I am absolutely thrilled with the results of my scleral lenses. I had previously seen specialists in Europe, but no one was able to achieve the right fit and results I was looking for.", patientDisplayName: "S. M.", sourcePlatform: "Google", sourceUrl: googlePracticeUrl, sourceDate: "August 2026", verifiedPatient: false, serviceAssociation: "Scleral lenses", serviceHref: "/specialty-contact-lenses", featured: true, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Continuous excerpt; preserves difficult-fitting context."
  },
  {
    id: "asia-thorough-exam", category: "THOROUGH EXAMINATIONS", fullOriginalText: "Have been coming here for my annual eye exam for years and honestly- I have always received quality care. The doctors are very personable and understanding. They take their time evaluating your condition which is so much better than a rushed appointment.", approvedExcerpt: "They take their time evaluating your condition, which is so much better than a rushed appointment.", patientDisplayName: "Asia Aziz", sourcePlatform: "Google", sourceUrl: googlePracticeUrl, sourceDate: "August 2025", verifiedPatient: false, serviceAssociation: "Comprehensive eye exams", serviceHref: "/care/comprehensive-eye-exams", featured: false, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Continuous excerpt."
  },
  {
    id: "digestible-explanations", category: "CLEAR EXPLANATIONS", fullOriginalText: "Dr. Chaudry was a great listener, and especially great at explaining my exam in a digestible manner. Made me really feel like I was getting attentive and thorough care. Office staff are all so friendly and helpful!", approvedExcerpt: "She was especially great at explaining my exam in a digestible manner. I felt like I was getting attentive, thorough care.", patientDisplayName: "Initials hidden", sourcePlatform: "Zocdoc", sourceUrl: deebaZocdocUrl, sourceDate: "January 2024", verifiedPatient: true, serviceAssociation: "Comprehensive eye exams", serviceHref: "/care/comprehensive-eye-exams", providerAssociation: "deeba-chaudri", featured: false, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Shortened continuously with pronoun normalization only; source calls Dr. Chaudri a great listener."
  },
  {
    id: "listened-not-rushed", category: "TIME TO LISTEN", fullOriginalText: "The staff was friendly and knowledgeable, the doctor was wonderful. I felt listened to and competently advised. Doctor visits can often feel rushed, this wasn't the case here. Will be going back.", approvedExcerpt: "I felt listened to and competently advised. Doctor visits can often feel rushed; this wasn’t the case here.", patientDisplayName: "Initials hidden", sourcePlatform: "Zocdoc", sourceUrl: deebaZocdocUrl, sourceDate: "June 2024", verifiedPatient: true, serviceAssociation: "Comprehensive eye exams", serviceHref: "/care/comprehensive-eye-exams", featured: false, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Continuous excerpt with punctuation normalized."
  },
  {
    id: "rashna-medical-attentiveness", category: "MEDICAL ATTENTIVENESS", fullOriginalText: "Dr Deeba is one of the finest. She hears you out and addresses all of your concerns without making you feel rushed and uncared for. Even in the past she pointed out a condition that other Dr's, in the past had seemed to overlook. She is meticulous and thorough in her examination and I feel a sense of calm after my appointment with her.", approvedExcerpt: "She pointed out a condition that other doctors had seemed to overlook. She is meticulous and thorough in her examination.", patientDisplayName: "Rashna H.", sourcePlatform: "Zocdoc", sourceUrl: deebaZocdocUrl, sourceDate: "September 2024", verifiedPatient: true, serviceAssociation: "Medical attentiveness", serviceHref: "/care/ocular-disease-management", providerAssociation: "deeba-chaudri", featured: false, homepage: true, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Continuous excerpt; individual patient experience, no generalized diagnostic claim."
  },
  {
    id: "ruby-provider-listening", category: "PROVIDER FEEDBACK", fullOriginalText: "I love Dr Chaudri! She’s quick and efficient but also takes time to listen and offer alternatives. I thoroughly enjoyed my recent appointment and trust her with my eye health.", approvedExcerpt: "She’s quick and efficient but also takes time to listen and offer alternatives.", patientDisplayName: "Ruby F.", sourcePlatform: "Zocdoc", sourceUrl: deebaZocdocUrl, sourceDate: "November 2025", verifiedPatient: true, serviceAssociation: "Provider care", serviceHref: "/meet-the-doctors", providerAssociation: "deeba-chaudri", featured: false, homepage: false, approvedForPublication: true, lastVerifiedOn: "2026-08-06", internalNotes: "Dedicated provider-only display; distinct from practice review set."
  },
] as const;
