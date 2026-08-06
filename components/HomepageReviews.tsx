import Link from "next/link";
import { testimonials } from "@/content/testimonials";

function Attribution({ sourcePlatform, sourceDate, verifiedPatient }: (typeof testimonials)[number]) {
  return <small>{verifiedPatient ? "Verified patient · " : ""}{sourcePlatform} · {sourceDate}</small>;
}

export function HomepageReviews() {
  const featured = testimonials.filter((review) => review.homepage && review.featured);
  const supporting = testimonials.filter((review) => review.homepage && !review.featured);
  return <section className="homepage-reviews section-pad" aria-labelledby="homepage-reviews-heading"><div className="homepage-reviews-intro"><p className="section-label">PATIENT STORIES</p><h2 id="homepage-reviews-heading">Care patients <em>remember.</em></h2><p>From focused dry eye care to complex contact lenses and attentive examinations, these selected experiences reflect the reasons patients choose Cosmopolitan Eyecare.</p><Link href="/testimonials">Read patient experiences <span aria-hidden="true">→</span></Link></div><div className="homepage-review-themes" aria-label="Patient trust themes"><span>Thorough examinations</span><span>Clear explanations</span><span>Time to listen</span></div><div className="homepage-featured-reviews">{featured.map((review) => <figure key={review.id}><p>{review.category}</p><blockquote>“{review.approvedExcerpt}”</blockquote><figcaption>{review.patientDisplayName}<Attribution {...review} /></figcaption></figure>)}</div><div className="homepage-supporting-reviews">{supporting.map((review) => <figure key={review.id}><p>{review.category}</p><blockquote>“{review.approvedExcerpt}”</blockquote><figcaption>{review.patientDisplayName}<Attribution {...review} /></figcaption></figure>)}</div></section>;
}
