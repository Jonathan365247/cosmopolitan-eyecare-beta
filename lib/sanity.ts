import { createClient } from "next-sanity";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET;

export const isSanityConfigured = Boolean(projectId && dataset);

export const sanityClient = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion: "2026-08-06",
      useCdn: false,
      token: process.env.SANITY_API_READ_TOKEN,
      perspective: "published",
    })
  : null;

export type HomepageContent = {
  heroEyebrow?: string;
  heroTitle?: string;
  heroEmphasis?: string;
  heroLede?: string;
  practiceEyebrow?: string;
  practiceTitle?: string;
  practiceEmphasis?: string;
  practiceBody?: string;
  careEyebrow?: string;
  careTitle?: string;
  careEmphasis?: string;
  careBody?: string;
  proofEyebrow?: string;
  proofTitle?: string;
  proofEmphasis?: string;
  proofBody?: string;
  visitEyebrow?: string;
  visitDescription?: string;
  reviewsEyebrow?: string;
  reviewsTitle?: string;
  reviewsEmphasis?: string;
  reviewsBody?: string;
};

export async function getHomepageContent(): Promise<HomepageContent | null> {
  if (!sanityClient) return null;

  try {
    return await sanityClient.fetch<HomepageContent | null>(
      `*[_type == "siteSettings" && _id == "siteSettings"][0]{heroEyebrow, heroTitle, heroEmphasis, heroLede, practiceEyebrow, practiceTitle, practiceEmphasis, practiceBody, careEyebrow, careTitle, careEmphasis, careBody, proofEyebrow, proofTitle, proofEmphasis, proofBody, visitEyebrow, visitDescription, reviewsEyebrow, reviewsTitle, reviewsEmphasis, reviewsBody}`,
      {},
      { next: { revalidate: 60, tags: ["siteSettings"] } },
    );
  } catch {
    return null;
  }
}
