import type { MetadataRoute } from "next";

const baseUrl = "https://cosmopolitan-eyecare-beta.vercel.app";
const corePaths = [
  "", "/our-practice", "/meet-the-doctors", "/services", "/dry-eye", "/aesthetics",
  "/specialty-contact-lenses", "/patient-resources", "/contact", "/testimonials", "/eye-health",
];
const servicePaths = [
  "/care/comprehensive-eye-exams", "/care/myopia-management", "/care/computer-vision", "/care/seasonal-allergies",
  "/care/dry-eye-treatment", "/care/optilight-ipl", "/care/perimenopause-and-menopause-dry-eye",
  "/care/contact-lens-exams", "/care/specialty-contact-lenses", "/care/scleral-contact-lenses", "/care/eye-infections",
  "/care/ocular-disease-management", "/care/diabetic-related-eye-exams", "/care/common-eye-disorders",
  "/care/eye-emergencies", "/care/lasik-evaluations", "/care/cataracts", "/care/macular-degeneration",
  "/care/glaucoma", "/care/ocular-aesthetics",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [...corePaths, ...servicePaths].map((path) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly",
    priority: path === "" ? 1 : path === "/services" ? 0.9 : 0.7,
  }));
}
