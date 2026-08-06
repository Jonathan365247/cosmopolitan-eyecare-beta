import { getProductionRobots } from "../../lib/site-discovery";
import { isIndexable } from "../../lib/site-config";

export const dynamic = "force-static";

export function GET() {
  if (!isIndexable) {
    return new Response(
      `# Cosmopolitan Eyecare review beta\n# This preview is intentionally excluded from indexing and crawling.\n# Direct-review files may be available, but they do not override this policy.\nUser-agent: *\nDisallow: /\n`,
      {
        headers: {
          "Content-Type": "text/plain; charset=utf-8",
          "Cache-Control": "public, max-age=0, must-revalidate",
        },
      },
    );
  }

  const production = getProductionRobots();
  const rules = Array.isArray(production.rules) ? production.rules : [production.rules];
  const body = [
    "# Cosmopolitan Eyecare",
    ...rules.map((rule) => [
      `User-agent: ${rule.userAgent}`,
      ...(rule.allow ? [`Allow: ${rule.allow}`] : []),
      ...(rule.disallow ? (Array.isArray(rule.disallow) ? rule.disallow : [rule.disallow]).map((path) => `Disallow: ${path}`) : []),
    ].join("\n")),
    ...(production.sitemap ? [`Sitemap: ${production.sitemap}`] : []),
  ].join("\n");

  return new Response(`${body}\n`, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
