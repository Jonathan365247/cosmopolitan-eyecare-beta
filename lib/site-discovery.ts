import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "./site-config";

type PageDefinition = {
  path: string;
  title: string;
  description: string;
  priority: number;
  includeInLlms: boolean;
};

const pages: PageDefinition[] = [
  { path: "/", title: "Home", description: "Cosmopolitan Eyecare's Midtown Manhattan optometry practice.", priority: 1, includeInLlms: true },
  { path: "/our-practice", title: "Our practice", description: "Practice approach, location, and patient experience.", priority: 0.8, includeInLlms: true },
  { path: "/meet-the-doctors", title: "Meet the doctors", description: "Information about the practice's eye-care clinicians.", priority: 0.8, includeInLlms: true },
  { path: "/services", title: "Eye care services", description: "Overview of the practice's optometry and eye-care services.", priority: 0.9, includeInLlms: true },
  { path: "/dry-eye", title: "Dry Eye Center", description: "Dry-eye evaluation and treatment information.", priority: 0.8, includeInLlms: true },
  { path: "/aesthetics", title: "Ocular aesthetics", description: "Ocular aesthetics information.", priority: 0.7, includeInLlms: true },
  { path: "/specialty-contact-lenses", title: "Specialty contact lenses", description: "Specialty contact-lens services and education.", priority: 0.8, includeInLlms: true },
  { path: "/patient-resources", title: "Patient resources", description: "Patient resources and visit preparation.", priority: 0.7, includeInLlms: false },
  { path: "/contact", title: "Contact and visit", description: "Contact details and visit information.", priority: 0.8, includeInLlms: true },
  { path: "/testimonials", title: "Testimonials", description: "Patient testimonials about their experience.", priority: 0.7, includeInLlms: true },
  { path: "/eye-health", title: "Eye health resources", description: "General eye-health educational resources.", priority: 0.8, includeInLlms: true },
  { path: "/accessibility", title: "Accessibility", description: "Accessibility information for the website.", priority: 0.5, includeInLlms: false },
  { path: "/care/comprehensive-eye-exams", title: "Comprehensive eye exams", description: "Comprehensive eye-exam service information.", priority: 0.7, includeInLlms: false },
  { path: "/care/myopia-management", title: "Myopia management", description: "Myopia-management service information.", priority: 0.7, includeInLlms: false },
  { path: "/care/computer-vision", title: "Computer vision", description: "Computer-vision care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/seasonal-allergies", title: "Seasonal allergies", description: "Seasonal eye-allergy care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/optilight-ipl", title: "OptiLight IPL", description: "OptiLight IPL service information.", priority: 0.7, includeInLlms: false },
  { path: "/care/perimenopause-and-menopause-dry-eye", title: "Perimenopause and menopause dry eye", description: "Dry-eye education related to perimenopause and menopause.", priority: 0.7, includeInLlms: false },
  { path: "/care/contact-lens-exams", title: "Contact lens exams", description: "Contact-lens exam service information.", priority: 0.7, includeInLlms: false },
  { path: "/care/scleral-contact-lenses", title: "Scleral contact lenses", description: "Scleral contact-lens service information.", priority: 0.7, includeInLlms: false },
  { path: "/care/eye-infections", title: "Eye infections", description: "Eye-infection care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/ocular-disease-management", title: "Ocular disease management", description: "Ocular-disease management information.", priority: 0.7, includeInLlms: false },
  { path: "/care/diabetic-related-eye-exams", title: "Diabetic-related eye exams", description: "Diabetic-related eye-exam information.", priority: 0.7, includeInLlms: false },
  { path: "/care/common-eye-disorders", title: "Common eye disorders", description: "General educational information about common eye disorders.", priority: 0.7, includeInLlms: false },
  { path: "/care/eye-emergencies", title: "Eye emergencies", description: "Eye-emergency care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/lasik-evaluations", title: "LASIK evaluations", description: "LASIK evaluation information.", priority: 0.7, includeInLlms: false },
  { path: "/care/cataracts", title: "Cataracts", description: "Cataract care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/macular-degeneration", title: "Macular degeneration", description: "Macular-degeneration care information.", priority: 0.7, includeInLlms: false },
  { path: "/care/glaucoma", title: "Glaucoma", description: "Glaucoma care information.", priority: 0.7, includeInLlms: false },
];

const blockedPaths = ["/studio/"];

function productionUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

function assertProductionDiscoveryConfiguration() {
  const canonical = new URL(siteUrl);
  const blockedHosts = ["localhost", "127.0.0.1", "::1"];

  if (canonical.protocol !== "https" || blockedHosts.includes(canonical.hostname) || canonical.hostname.endsWith(".vercel.app")) {
    throw new Error("Production discovery files require an approved HTTPS canonical domain, not a local, beta, or Vercel URL.");
  }

  const paths = pages.map(({ path }) => path);
  if (new Set(paths).size !== paths.length) throw new Error("Discovery configuration contains duplicate public paths.");
  if (pages.some(({ path }) => blockedPaths.some((blockedPath) => path.startsWith(blockedPath)))) {
    throw new Error("A blocked path cannot be included in the sitemap or llms.txt configuration.");
  }
}

export function getProductionSitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  assertProductionDiscoveryConfiguration();

  return pages.map(({ path, priority }) => ({
    url: productionUrl(path),
    changeFrequency: "monthly",
    priority,
  }));
}

export function getProductionRobots(): MetadataRoute.Robots {
  assertProductionDiscoveryConfiguration();

  return {
    // One verified catch-all policy is safer than unverified crawler-specific rules.
    rules: { userAgent: "*", allow: "/", disallow: blockedPaths },
    sitemap: productionUrl("/sitemap.xml"),
  };
}

export function getProductionLlmsText() {
  assertProductionDiscoveryConfiguration();
  const priorityPages = pages.filter(({ includeInLlms }) => includeInLlms);
  const pageList = priorityPages
    .map(({ path, title, description }) => `- [${title}](${productionUrl(path)}): ${description}`)
    .join("\n");

  return `# Cosmopolitan Eyecare

> Cosmopolitan Eyecare is a Midtown Manhattan optometry practice. This file is a curated guide to public, production pages; it is not a sitemap or a source of individualized medical advice.

## Practice
- **Name:** Cosmopolitan Eyecare
- **Type:** Optometry practice
- **Location:** 1166 Avenue of the Americas, New York, NY 10036
- **Phone:** +1-212-302-4889
- **Website:** ${productionUrl("/")}

## Priority pages
${pageList}

## Interpretation notes
- Eye-health and service content is general education and does not replace personal medical advice, diagnosis, or emergency care.
- Testimonials describe individual patient experiences and should not be treated as clinical claims or expected outcomes.
- For urgent eye concerns, contact the practice promptly. For a life-threatening emergency, call 911.
`;
}
