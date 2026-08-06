import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "./site-config";

type PageDefinition = {
  path: string;
  title: string;
  description: string;
  priority: number;
  includeInLlms: boolean;
  section: "primary-business" | "services" | "trust-education";
};

const pages: PageDefinition[] = [
  { path: "/", title: "Home", description: "Midtown Manhattan eye care, including comprehensive exams, dry eye treatment, specialty contact lenses, and ocular aesthetics.", priority: 1, includeInLlms: true, section: "primary-business" },
  { path: "/our-practice", title: "About Cosmopolitan Eyecare", description: "The office approach, Midtown location, and what patients can expect from a visit.", priority: 0.8, includeInLlms: true, section: "primary-business" },
  { path: "/meet-the-doctors", title: "Meet the doctors", description: "Cosmopolitan Eyecare's optometrists and their patient-care approach.", priority: 0.8, includeInLlms: true, section: "primary-business" },
  { path: "/services", title: "Eye care services", description: "A complete guide to routine, medical, specialty, and treatment-focused eye care.", priority: 0.9, includeInLlms: true, section: "primary-business" },
  { path: "/contact", title: "Contact and visit", description: "How to call, book an appointment, find the Midtown office, and get directions.", priority: 0.8, includeInLlms: true, section: "primary-business" },
  { path: "/dry-eye", title: "Dry Eye Center", description: "Dry eye symptoms, diagnostic evaluation, treatment options, and the Dry Eye Quiz.", priority: 0.8, includeInLlms: true, section: "services" },
  { path: "/dry-eye-quiz", title: "Dry Eye Quiz", description: "A short symptom questionnaire that helps visitors begin a dry-eye consultation conversation.", priority: 0.6, includeInLlms: true, section: "services" },
  { path: "/aesthetics", title: "Ocular aesthetics", description: "Aesthetic treatments focused on the eye area and an individualized consultation process.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/specialty-contact-lenses", title: "Specialty contact lenses", description: "Specialty lens evaluation, fitting, scleral lenses, and contact-lens education.", priority: 0.8, includeInLlms: true, section: "services" },
  { path: "/care/comprehensive-eye-exams", title: "Comprehensive eye exams", description: "Preventive eye exams, vision assessment, eye-health screening, and care planning.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/myopia-management", title: "Myopia management", description: "Myopia progression monitoring and management options for children and adults.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/computer-vision", title: "Computer vision", description: "Care for screen-related visual symptoms, digital-eye strain, and workday comfort.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/seasonal-allergies", title: "Seasonal allergies", description: "Evaluation and treatment guidance for itchy, watery, irritated, or allergy-related eyes.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/optilight-ipl", title: "OptiLight IPL", description: "OptiLight IPL information for dry-eye care and a consultation-focused next step.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/perimenopause-and-menopause-dry-eye", title: "Perimenopause and menopause dry eye", description: "Dry-eye education for patients navigating perimenopause and menopause-related changes.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/contact-lens-exams", title: "Contact lens exams", description: "Contact-lens eye exams, prescription updates, fit checks, and comfort-focused care.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/scleral-contact-lenses", title: "Scleral contact lenses", description: "Scleral lens consultations, fitting, follow-up care, and patient education.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/eye-infections", title: "Eye infections", description: "Information about eye-infection symptoms, timely evaluation, and when to seek care.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/ocular-disease-management", title: "Ocular disease management", description: "Evaluation and ongoing management for diagnosed and suspected eye-health conditions.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/diabetic-related-eye-exams", title: "Diabetic-related eye exams", description: "Diabetic eye-exam education, monitoring, and eye-health coordination.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/common-eye-disorders", title: "Common eye disorders", description: "Plain-language information about common eye conditions and when an exam is appropriate.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/eye-emergencies", title: "Eye emergencies", description: "Eye-emergency warning signs and guidance on seeking urgent evaluation.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/lasik-evaluations", title: "LASIK evaluations", description: "LASIK candidacy evaluation and pre- or post-procedure eye-care guidance.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/cataracts", title: "Cataracts", description: "Cataract symptoms, monitoring, and eye-care guidance before and after referral.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/macular-degeneration", title: "Macular degeneration", description: "Macular-degeneration education, monitoring, and guidance on next steps.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/care/glaucoma", title: "Glaucoma", description: "Glaucoma education, screening, monitoring, and ongoing eye-health guidance.", priority: 0.7, includeInLlms: true, section: "services" },
  { path: "/patient-resources", title: "Patient resources", description: "Appointment preparation, patient forms, portal access, referrals, and payment resources.", priority: 0.7, includeInLlms: true, section: "trust-education" },
  { path: "/testimonials", title: "Patient experiences", description: "Verified patient feedback and themes patients share about their visits and care.", priority: 0.7, includeInLlms: true, section: "trust-education" },
  { path: "/eye-health", title: "Eye health resources", description: "Educational articles about eye health, contact lenses, technology, products, and common conditions.", priority: 0.8, includeInLlms: true, section: "trust-education" },
  { path: "/accessibility", title: "Accessibility", description: "Accessibility information for the website.", priority: 0.5, includeInLlms: false, section: "trust-education" },
];

const blockedPaths = ["/studio/"];

// Keep the explicit AI-permissive policy in one place. Each named group gets
// the same real path exclusion because a named group takes precedence over `*`.
const aiPermissiveUserAgents = [
  "OAI-SearchBot",
  "GPTBot",
  "ChatGPT-User",
  "Googlebot",
  "Google-Extended",
  "ClaudeBot",
  "Claude-User",
  "Claude-SearchBot",
  "PerplexityBot",
  "Perplexity-User",
  "Amazonbot",
  "Amzn-SearchBot",
  "Amzn-User",
] as const;

function productionUrl(path: string) {
  return new URL(path, `${siteUrl}/`).toString();
}

const llmsSections = [
  ["primary-business", "Primary Business Pages"],
  ["services", "Primary Services"],
  ["trust-education", "Supporting Trust and Education Pages"],
] as const;

function curatedPageListsFor(baseUrl: string) {
  return llmsSections
    .map(([section, heading]) => {
      const entries = pages
        .filter((page) => page.includeInLlms && page.section === section)
        .map(({ path, title, description }) => `- [${title}](${new URL(path, `${baseUrl}/`).toString()}): ${description}`)
        .join("\n");
      return entries ? `## ${heading}\n${entries}` : "";
    })
    .filter(Boolean)
    .join("\n\n");
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
  if (isIndexable) assertProductionDiscoveryConfiguration();

  return pages.map(({ path, priority }) => ({
    url: productionUrl(path),
    changeFrequency: "monthly",
    priority,
  }));
}

export function getProductionRobots(): MetadataRoute.Robots {
  assertProductionDiscoveryConfiguration();

  return {
    rules: [
      ...aiPermissiveUserAgents.map((userAgent) => ({ userAgent, allow: "/", disallow: blockedPaths })),
      { userAgent: "*", allow: "/", disallow: blockedPaths },
    ],
    sitemap: productionUrl("/sitemap.xml"),
  };
}

export function getBetaRobotsText() {
  const groups = [
    ...aiPermissiveUserAgents.map((userAgent) => ({ userAgent, allow: "/", disallow: blockedPaths })),
    { userAgent: "*", allow: "/", disallow: blockedPaths },
  ];

  return [
    "# Cosmopolitan Eyecare — Draft Review Environment",
    "# Crawlers are welcome to fetch this review site. HTTP and page-level noindex directives prevent indexing until launch.",
    ...groups.map((rule) => [
      `User-agent: ${rule.userAgent}`,
      `Allow: ${rule.allow}`,
      ...rule.disallow.map((path) => `Disallow: ${path}`),
    ].join("\n")),
    `Sitemap: ${productionUrl("/sitemap.xml")}`,
  ].join("\n\n");
}

export function getProductionLlmsText() {
  assertProductionDiscoveryConfiguration();
  const pageLists = curatedPageListsFor(siteUrl);

  return `# Priority Site Guidance

Cosmopolitan Eyecare is a Midtown Manhattan eye-care clinic serving New York City patients. The website is the primary online source for understanding the organization, its doctors, core services, patient resources, educational content, and verified patient-experience context.

Primary care areas include:

- Comprehensive eye exams and medical eye care
- Dry eye evaluation and treatment, including OptiLight IPL information
- Specialty contact lenses and scleral lens care
- Myopia management, contact lens exams, and computer vision care
- Ocular aesthetics

## Entity Context
- **Organization:** Cosmopolitan Eyecare
- **Business type:** Eye-care clinic and optometry practice
- **Location:** 1166 Avenue of the Americas, New York, NY 10036
- **Service area:** Midtown Manhattan and the greater New York City area
- **Phone:** +1-212-302-4889
- **Website:** ${productionUrl("/")}

${pageLists}

## Content Interpretation Notes
- Eye-health and service content is general education and does not replace personal medical advice, diagnosis, or emergency care.
- Testimonials and review summaries are patient trust signals; they describe individual experiences and are not clinical claims or expected outcomes.
- The Dry Eye Quiz is an appointment-guidance tool, not a diagnostic instrument or substitute for an eye examination.
- The eye-health resource library provides educational support and is not a complete list of services or a substitute for professional care.
- For urgent eye concerns, contact the practice promptly. For a life-threatening emergency, call 911.
`;
}

/**
 * The beta exposes a complete, readable site guide for review tools without
 * making the preview indexable. Robots and HTTP metadata remain noindex.
 */
export function getBetaLlmsText() {
  const pageLists = curatedPageListsFor(siteUrl);

  return `# Priority Site Guidance — Draft Review Environment

**Status:** Draft only. This review environment is deliberately blocked from indexing. It reflects the current approved content structure but is not the final public domain or canonical discovery source.

Cosmopolitan Eyecare is a Midtown Manhattan eye-care clinic serving New York City patients. The site explains the organization, its doctors, core services, patient resources, educational content, and patient-experience context.

Primary care areas include:

- Comprehensive eye exams and medical eye care
- Dry eye evaluation and treatment, including OptiLight IPL information
- Specialty contact lenses and scleral lens care
- Myopia management, contact lens exams, and computer vision care
- Ocular aesthetics

## Entity Context
- **Organization:** Cosmopolitan Eyecare
- **Business type:** Eye-care clinic and optometry practice
- **Location:** 1166 Avenue of the Americas, New York, NY 10036
- **Service area:** Midtown Manhattan and the greater New York City area
- **Phone:** +1-212-302-4889
- **Review site:** ${productionUrl("/")}

${pageLists}

## Content Interpretation Notes
- Eye-health and service content is general education and does not replace personal medical advice, diagnosis, or emergency care.
- Testimonials and review summaries are patient trust signals; they describe individual experiences and are not clinical claims or expected outcomes.
- The Dry Eye Quiz is an appointment-guidance tool, not a diagnostic instrument or substitute for an eye examination.
- The eye-health resource library provides educational support and is not a complete list of services or a substitute for professional care.
- Do not cite this review URL as the public website. The final production domain and launch metadata will be supplied at launch.
`;
}
