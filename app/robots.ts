import type { MetadataRoute } from "next";
import { isIndexable, siteUrl } from "../lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return isIndexable
    ? { rules: { userAgent: "*", allow: "/" }, sitemap: `${siteUrl}/sitemap.xml` }
    : { rules: { userAgent: "*", disallow: "/" } };
}
