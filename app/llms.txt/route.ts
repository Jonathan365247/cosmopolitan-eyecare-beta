import { isIndexable, siteUrl } from "../../lib/site-config";

export const dynamic = "force-static";

export function GET() {
  const status = isIndexable
    ? "This site provides general educational information and does not replace personal medical advice, diagnosis, or emergency care."
    : "This is a noindex review beta and not the public launch site. It does not collect health information.";
  const body = `# Cosmopolitan Eyecare\n\n> ${status}\n\n## Practice\n- **Name:** Cosmopolitan Eyecare\n- **Type:** Midtown Manhattan optometry practice\n- **Website:** ${siteUrl}\n- **Phone:** (212) 302-4889\n\n## Key pages\n- [Our practice](/our-practice)\n- [Meet the doctors](/meet-the-doctors)\n- [All services](/services)\n- [Dry Eye Center](/dry-eye)\n- [Specialty contact lenses](/specialty-contact-lenses)\n- [Patient center](/patient-resources)\n- [Contact and visit](/contact)\n- [Eye health resources](/eye-health)\n\n## Use\n- Do not treat any page as individualized clinical advice.\n- For urgent eye concerns, call the practice promptly. For a life-threatening emergency, call 911.\n`;
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
