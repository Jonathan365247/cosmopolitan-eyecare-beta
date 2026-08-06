const requestedMode = process.env.NEXT_PUBLIC_SITE_MODE;

export const siteMode = requestedMode === "production" ? "production" : "beta";
export const isIndexable = siteMode === "production";
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://cosmopolitan-eyecare-beta.vercel.app").replace(/\/$/, "");

/**
 * This beta deliberately defaults to a non-indexable review mode. Before a
 * production launch, set NEXT_PUBLIC_SITE_MODE=production and
 * NEXT_PUBLIC_SITE_URL to the approved final canonical domain in Vercel.
 */
