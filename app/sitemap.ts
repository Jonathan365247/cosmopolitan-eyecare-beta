import type { MetadataRoute } from "next";
import { getProductionSitemap } from "../lib/site-discovery";

export default function sitemap(): MetadataRoute.Sitemap {
  return getProductionSitemap();
}
