import Link from "next/link";
import { testimonials } from "@/content/testimonials";

function Attribution({ sourcePlatform, sourceDate, verifiedPatient }: (typeof testimonials)[number]) {
  return <small>{verifiedPatient ? "Verified patient · " : ""}{sourcePlatform} · {sourceDate}</small>;
}

export function HomepageReviews() {
  const featured = testimonials.filter((review) => review.homepage && review.featured);
  return <section className="homepage-reviews section-pad" aria-labelledby="homepage-reviews-heading"><div className="homepage-reviews-intro"><p className="section-label">PATIENT STORIES</p><h2 id="homepage-reviews-heading">Care patients <em>remember.</em></h2><p>Selected stories from patients who valued focused dry eye care, complex lens support, and an attentive approach.</p><Link href="/testimonials">Read more patient stories <span aria-hidden="true">→</span></Link></div><div className="homepage-featured-reviews">{featured.map((review) => <figure key={review.id}><p>{review.category}</p><blockquote>“{review.approvedExcerpt}”</blockquote><figcaption>{review.patientDisplayName}<Attribution {...review} /></figcaption></figure>)}</div></section>;
}
