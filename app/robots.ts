import type { MetadataRoute } from "next";
import { getProductionRobots } from "../lib/site-discovery";
import { isIndexable } from "../lib/site-config";

export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) return { rules: { userAgent: "*", disallow: "/" } };
  return getProductionRobots();
}
