import Link from "next/link";
import { patientExperiences } from "@/content/patient-experiences";
import { socialProof } from "@/content/social-proof";

const themes = [
  ["Thorough examinations", "Selected reviews often mention careful exams and clinicians who take time to understand a concern.", "/care/comprehensive-eye-exams", "Explore comprehensive eye exams"],
  ["Clear explanations", "Patients describe practical explanations, thoughtful answers, and an easier understanding of their next step.", "/meet-the-doctors", "Meet the doctors"],
  ["Time to listen", "Several reviewers specifically value an unhurried conversation and the chance to ask questions.", "/our-practice", "Learn about the practice"],
  ["Specialized support", "Reviews describe dry eye care and contact lens fittings when a more routine solution has not been enough.", "/specialty-contact-lenses", "Explore specialty contact lenses"],
  ["Midtown convenience", "Patients also mention a welcoming team and practical help when eye-care needs feel time-sensitive.", "/contact", "Plan your visit"],
] as const;

const careGroups = [
  ["Comprehensive eye exams", "Experiences that mention thorough visits, clear communication, and time for questions.", "/care/comprehensive-eye-exams", ["asia-exam", "mark-exam", "philip-exam"]],
  ["Specialty contact lenses", "Feedback from patients who valued detailed lens fittings and tailored support.", "/specialty-contact-lenses", ["sm-scleral", "yiwa-lenses", "amy-contact-help"]],
  ["Dry eye care", "A selected experience from a patient who shared their dry eye care journey.", "/dry-eye", ["william-dry-eye"]],
  ["Medical eye care", "A selected experience that mentions a medical concern and an attentive visit.", "/care/ocular-disease-management", ["sherily-medical"]],
] as const;

function ExperienceCard({ experience, featured = false }: { experience: (typeof patientExperiences)[number]; featured?: boolean }) {
  return <figure className={featured ? "review-card review-card-featured" : "review-card"}>
    <p className="review-card-service"><Link href={experience.serviceHref}>{experience.service}</Link></p>
    <blockquote>“{experience.excerpt}”</blockquote>
    <figcaption>{experience.reviewerDisplayName} <small>{experience.platform} review{experience.reviewDate ? ` · ${experience.reviewDate}` : ""}</small>{experience.excerptWasShortened ? <em>Excerpt shortened for length.</em> : null}</figcaption>
    <a className="review-source-link" href={experience.sourceUrl} target="_blank" rel="noopener noreferrer">Read more on {experience.platform} <span aria-hidden="true">↗</span></a>
  </figure>;
}

export function TestimonialsContent() {
  const featured = patientExperiences.filter((experience) => experience.featured);
  const supporting = patientExperiences.filter((experience) => !experience.featured).slice(0, 6);
  const byId = new Map(patientExperiences.map((experience) => [experience.id, experience]));
  const { practice, google } = socialProof;

  return <>
    <section className="review-trust-summary" aria-labelledby="review-trust-heading"><div><p className="section-label">PUBLIC FEEDBACK AT A GLANCE</p><h2 id="review-trust-heading">Two sources. <em>Never one combined total.</em></h2><p>These figures are displayed separately because they come from distinct public platforms and change over time.</p></div><div className="review-source-stats"><article><strong>{practice.displayValues.reviewCount}</strong><p>Verified patient reviews on <a href={practice.sourceUrl} target="_blank" rel="noopener noreferrer">Zocdoc ↗</a></p></article><article><strong>{practice.displayValues.overallRating}</strong><p>Overall practice rating on Zocdoc</p></article><article><strong>{practice.displayValues.bedsideMannerRating}</strong><p>Bedside-manner rating on Zocdoc</p></article><article><strong>{google.displayValues.reviewCount}</strong><p><a href={google.sourceUrl} target="_blank" rel="noopener noreferrer">Google reviews ↗</a></p></article></div><p className="review-verified-date">Review totals and ratings were last checked on {practice.verifiedOn} and may change over time.</p></section>
    <section className="review-overview"><p className="section-label">WHAT PATIENTS MENTION</p><div><h2>A practice remembered for the <em>way it feels to be cared for.</em></h2><p>Public patient reviews of Cosmopolitan Eyecare repeatedly describe attentive doctors, clear explanations, a welcoming team, and specialized care for dry eye and complex contact lens needs. The experiences below are selected excerpts, shared to help prospective patients understand what others have valued about their care.</p></div></section>
    <section className="review-themes"><p className="section-label">RECURRING THEMES</p><div>{themes.map(([title, copy, href, label]) => <article key={title}><h3>{title}</h3><p>{copy}</p><Link href={href}>{label} <span aria-hidden="true">→</span></Link></article>)}</div></section>
    <section className="review-featured"><p className="section-label">FEATURED PATIENT EXPERIENCES</p><div>{featured.map((experience) => <ExperienceCard key={experience.id} experience={experience} featured />)}</div></section>
    <section className="review-supporting"><p className="section-label">MORE PATIENT PERSPECTIVES</p><div>{supporting.map((experience) => <ExperienceCard key={experience.id} experience={experience} />)}</div></section>
    <section className="review-care-groups"><p className="section-label">EXPERIENCES BY TYPE OF CARE</p><div>{careGroups.map(([title, copy, href, ids]) => <article key={title}><h2>{title}</h2><p>{copy}</p><ul>{ids.map((id) => { const experience = byId.get(id); return experience ? <li key={id}>“{experience.excerpt}” <span>— {experience.reviewerDisplayName}</span></li> : null; })}</ul><Link href={href}>Learn about {title.toLowerCase()} <span aria-hidden="true">→</span></Link></article>)}</div></section>
    <section className="review-note"><p className="section-label">HOW THESE EXPERIENCES ARE SELECTED</p><div><h2>Real experiences, selected with care.</h2><p>The excerpts on this page were selected from publicly available reviews associated with Cosmopolitan Eyecare or an identified practice doctor. We preserve each reviewer’s meaning and identify the source platform. Some excerpts may be shortened for clarity or length without changing the substance of the review. Ratings and totals are checked periodically and may change as new reviews are published.</p><ul><li>Original source and reviewer display name are recorded.</li><li>Provider and service labels follow only what the review supports.</li><li>Material edits are prohibited; any shortening is disclosed.</li></ul></div></section>
    <section className="review-sources"><p className="section-label">READ MORE PATIENT FEEDBACK</p><div><a href={practice.sourceUrl} target="_blank" rel="noopener noreferrer">Cosmopolitan Eyecare on Zocdoc <span aria-hidden="true">↗</span></a><a href={google.sourceUrl} target="_blank" rel="noopener noreferrer">Cosmopolitan Eyecare on Google <span aria-hidden="true">↗</span></a><a href={socialProof.deebaChaudri.sourceUrl} target="_blank" rel="noopener noreferrer">Dr. Deeba Chaudri on Zocdoc <span aria-hidden="true">↗</span></a></div><p>Patient experiences vary. Reviews describe individual experiences and are not a guarantee of treatment results. Medical recommendations depend on each patient’s symptoms, examination findings, health history, and clinical needs.</p></section>
  </>;
}
