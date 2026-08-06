import Image from "next/image";
import Link from "next/link";
import { testimonials } from "@/content/testimonials";
import { socialProof } from "@/content/social-proof";

const themes = [
  ["Thorough examinations", "Patients often mention careful exams and clinicians who take time to understand a concern.", "/care/comprehensive-eye-exams", "Explore comprehensive eye exams"],
  ["Clear explanations", "Reviews describe practical answers and a clearer understanding of the next step.", "/meet-the-doctors", "Meet the doctors"],
  ["Time to listen", "Several patients value a conversation that leaves room for questions and concerns.", "/our-practice", "Learn about the practice"],
] as const;

const careGroups = [
  ["Comprehensive eye exams", "For patients looking for a thorough visit and time for questions.", "/care/comprehensive-eye-exams"],
  ["Specialty contact lenses", "For patients who need detailed fitting support and a more tailored lens plan.", "/specialty-contact-lenses"],
  ["Dry eye care", "For patients exploring focused care for persistent dry eye symptoms.", "/dry-eye"],
  ["Medical eye care", "For patients seeking help with an eye concern that needs clinical attention.", "/care/ocular-disease-management"],
] as const;

function ExperienceCard({ experience, featured = false }: { experience: (typeof testimonials)[number]; featured?: boolean }) {
  return <figure className={featured ? "review-card review-card-featured" : "review-card"}>
    <p className="review-card-service"><Link href={experience.serviceHref}>{experience.category}</Link></p>
    <blockquote>“{experience.approvedExcerpt}”</blockquote>
    <div className="review-card-footer"><figcaption>{experience.patientDisplayName}<small>{experience.verifiedPatient ? "Verified patient · " : ""}{experience.sourcePlatform} · {experience.sourceDate}</small></figcaption><a className="review-source-link" href={experience.sourceUrl} target="_blank" rel="noopener noreferrer">Read more on {experience.sourcePlatform} <span aria-hidden="true">↗</span></a></div>
  </figure>;
}

export function TestimonialsContent() {
  const featured = testimonials.filter((experience) => experience.homepage && experience.featured);
  const supporting = testimonials.filter((experience) => experience.homepage && !experience.featured);
  const deebaReview = testimonials.find((experience) => experience.id === "ruby-provider-listening");
  const { practice, google, deebaChaudri } = socialProof;

  return <>
    <section className="review-trust-summary" aria-labelledby="review-trust-heading"><div className="review-trust-inner"><div><p className="section-label">PATIENT TRUST</p><h2 id="review-trust-heading">Trusted by hundreds of patients.</h2><p>Public patient reviews frequently highlight thorough care, clear explanations, specialized support, and a team that takes time to listen.</p></div><div className="review-source-stats"><article><strong>{practice.displayValues.reviewCount}</strong><p>Verified Zocdoc reviews</p></article><article><strong>{practice.displayValues.overallRating}</strong><p>Overall practice rating</p></article><article><strong>{practice.displayValues.bedsideMannerRating}</strong><p>Bedside-manner rating</p></article><article><strong>{google.displayValues.reviewCount}</strong><p>Google reviews</p></article></div><p className="review-verified-date">Ratings and review totals were last checked in August 2026 and may change over time.</p></div></section>
    <section className="review-overview"><p className="section-label">WHAT PATIENTS MENTION MOST</p><div><h2>A practice remembered for the <em>way it feels to be cared for.</em></h2><p>Public patient reviews of Cosmopolitan Eyecare describe attentive doctors, clear explanations, a welcoming team, and specialized care for dry eye and complex contact lens needs. These selected experiences give prospective patients a sense of what others have valued about their visit.</p></div></section>
    <section className="review-themes"><p className="section-label">WHAT PATIENTS MENTION MOST</p><div>{themes.map(([title, copy, href, label]) => <article key={title}><h3>{title}</h3><p>{copy}</p><Link href={href}>{label} <span aria-hidden="true">→</span></Link></article>)}</div></section>
    <section className="review-featured"><p className="section-label">FEATURED PATIENT STORIES</p><div>{featured.map((experience) => <ExperienceCard key={experience.id} experience={experience} featured />)}</div></section>
    <section className="review-supporting"><p className="section-label">MORE PATIENT PERSPECTIVES</p><div>{supporting.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}</div></section>
    <section className="review-care-groups"><p className="section-label">EXPLORE CARE PATHWAYS</p><div>{careGroups.map(([title, copy, href]) => <article key={title}><h2>{title}</h2><p>{copy}</p><Link href={href}>Learn about {title.toLowerCase()} <span aria-hidden="true">→</span></Link></article>)}</div></section>
    {deebaChaudri.enabled && deebaReview ? <section className="doctor-feedback" aria-labelledby="doctor-feedback-heading"><p className="section-label">PATIENT FEEDBACK ABOUT OUR DOCTORS</p><div><div className="doctor-feedback-portrait"><Image src="/approved-assets/dr-chaudri.png" alt="Dr. Deeba Chaudri" fill sizes="(max-width: 760px) 100vw, 22rem" /></div><div className="doctor-feedback-copy"><h2 id="doctor-feedback-heading">Dr. Deeba Chaudri, <em>OD</em></h2><p>Patients who mention Dr. Chaudri often speak to her thorough approach, clear communication, and time for questions.</p><div className="doctor-feedback-stats"><article><strong>{deebaChaudri.displayValues.reviewCount}</strong><span>Verified patient reviews</span></article><article><strong>{deebaChaudri.displayValues.rating}</strong><span>Patient rating</span></article><article><strong>{deebaChaudri.displayValues.fiveStarPercentage}</strong><span>Five-star ratings</span></article></div><blockquote>“{deebaReview.approvedExcerpt}”<cite>— {deebaReview.patientDisplayName} · Verified patient · Zocdoc · {deebaReview.sourceDate}</cite></blockquote><div className="doctor-feedback-links"><Link href="/meet-the-doctors">Meet the doctors <span aria-hidden="true">→</span></Link><a href={deebaChaudri.sourceUrl} target="_blank" rel="noopener noreferrer">Dr. Chaudri on Zocdoc <span aria-hidden="true">↗</span></a></div><p className="doctor-feedback-note">These figures apply to Dr. Chaudri’s individual Zocdoc profile.</p></div></div></section> : null}
    <section className="review-note"><p className="section-label">PATIENT FEEDBACK</p><div><h2>Real experiences, shared with care.</h2><p>These reviews were shared publicly by patients of Cosmopolitan Eyecare or one of our doctors. We identify the source beside each excerpt so you can explore the original review whenever you wish.</p><p>A few excerpts are shortened for length while keeping their meaning intact. Review totals and ratings naturally change as new feedback is shared.</p></div></section>
    <section className="review-sources"><p className="section-label">READ MORE PATIENT FEEDBACK</p><div><a href={practice.sourceUrl} target="_blank" rel="noopener noreferrer">Cosmopolitan Eyecare on Zocdoc <span aria-hidden="true">↗</span></a><a href={google.sourceUrl} target="_blank" rel="noopener noreferrer">Cosmopolitan Eyecare on Google <span aria-hidden="true">↗</span></a><a href={deebaChaudri.sourceUrl} target="_blank" rel="noopener noreferrer">Dr. Deeba Chaudri on Zocdoc <span aria-hidden="true">↗</span></a></div><p>Patient experiences vary. Reviews describe individual experiences and are not a guarantee of treatment results. Medical recommendations depend on each patient’s symptoms, examination findings, health history, and clinical needs.</p></section>
  </>;
}
