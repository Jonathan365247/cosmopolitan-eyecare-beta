const requestedMode = process.env.NEXT_PUBLIC_SITE_MODE;
const configuredSiteUrl = process.env.NEXT_PUBLIC_SITE_URL;

export const siteMode = requestedMode === "production" ? "production" : "beta";
export const isIndexable = siteMode === "production";
export const siteUrl = (configuredSiteUrl ?? "https://cosmopolitan-eyecare-beta.vercel.app").replace(/\/$/, "");

if (isIndexable && (!configuredSiteUrl || /(^https?:\/\/[^/]*vercel\.app)|beta/i.test(siteUrl))) {
  throw new Error("Production mode requires an approved non-beta canonical NEXT_PUBLIC_SITE_URL.");
}

/**
 * This beta deliberately defaults to a non-indexable review mode. Before a
 * production launch, set NEXT_PUBLIC_SITE_MODE=production and
 * NEXT_PUBLIC_SITE_URL to the approved final canonical domain in Vercel.
 */
