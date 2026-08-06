import Link from "next/link";
import { testimonials } from "@/content/testimonials";

function Attribution({ sourcePlatform, sourceDate, verifiedPatient }: (typeof testimonials)[number]) {
  return <small>{verifiedPatient ? "Verified patient · " : ""}{sourcePlatform} · {sourceDate}</small>;
}

export function HomepageReviews({ eyebrow = "PATIENT STORIES", title = "Care patients", emphasis = "remember.", body = "Selected stories from patients who valued focused dry eye care, complex lens support, and an attentive approach." }: { eyebrow?: string; title?: string; emphasis?: string; body?: string }) {
  const featured = testimonials.filter((review) => review.homepage && review.featured);
  return <section className="homepage-reviews section-pad" aria-labelledby="homepage-reviews-heading"><div className="homepage-reviews-intro"><div className="homepage-reviews-heading"><p className="section-label">{eyebrow}</p><h2 id="homepage-reviews-heading">{title} <em>{emphasis}</em></h2></div><div className="homepage-reviews-context"><p>{body}</p><Link href="/testimonials">Read more patient stories <span aria-hidden="true">→</span></Link></div></div><div className="homepage-featured-reviews">{featured.map((review) => <figure key={review.id}><p>{review.category}</p><blockquote>“{review.approvedExcerpt}”</blockquote><figcaption>{review.patientDisplayName}<Attribution {...review} /></figcaption></figure>)}</div></section>;
}
