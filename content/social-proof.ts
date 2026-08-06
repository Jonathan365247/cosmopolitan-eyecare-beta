/**
 * Manually maintained review facts — never live data and never scraped at runtime.
 * Recheck before production launch, then at least every 90 days. Hide or lower a
 * public threshold if the underlying source no longer supports it.
 */
export const socialProof = {
  practice: {
    sourceName: "Zocdoc",
    sourceUrl: "https://www.zocdoc.com/practice/cosmopolitan-eyecare-69220",
    verifiedOn: "2026-08-05",
    nextReviewDate: "2026-11-05",
    scope: "practice",
    underlyingValues: { reviewCount: 686, overallRating: 4.82, bedsideMannerRating: 4.96, waitTimeRating: 4.76 },
    displayValues: { reviewCount: "650+", overallRating: "4.8 / 5", bedsideMannerRating: "4.9+" },
  },
  google: {
    sourceName: "Google",
    sourceUrl: "https://www.google.com/maps?cid=14498851427237372155",
    verifiedOn: "2026-08-05",
    scope: "practice",
    underlyingValues: { minimumReviewCount: 250, approximateRating: 4.6 },
    displayValues: { reviewCount: "250+", rating: "4.6 / 5" },
  },
  deebaChaudri: {
    enabled: false,
    scope: "individual-provider-only",
    sourceName: "Zocdoc",
    underlyingValues: { reviewCount: 358, rating: 4.87, fiveStarPercentage: 95, underThirtyMinuteWaitPercentage: 92 },
    displayValues: { reviewCount: "350+", rating: "4.8+", fiveStarPercentage: "95%", underThirtyMinuteWaitPercentage: "92%" },
  },
} as const;
