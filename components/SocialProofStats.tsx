import { socialProof } from "../content/social-proof";

export function SocialProofStats() {
  const { practice } = socialProof;
  const stats = [
    [practice.displayValues.reviewCount, "Verified patient reviews"],
    [practice.displayValues.overallRating, "Overall practice rating"],
    [practice.displayValues.bedsideMannerRating, "Bedside-manner rating"],
  ] as const;

  return <section className="social-proof-stats section-pad" aria-labelledby="patient-trust-heading">
    <div><p className="section-label">PATIENT TRUST</p><h2 id="patient-trust-heading">Care reflected in hundreds of <em>verified patient reviews.</em></h2></div>
    <div className="social-proof-numbers">{stats.map(([value, label]) => <article key={label}><strong>{value}</strong><p>{label}</p></article>)}</div>
    <p className="social-proof-source">Based on verified patient feedback published on <a href={practice.sourceUrl} target="_blank" rel="noopener noreferrer">Zocdoc ↗</a>. Ratings and review totals may change over time.</p>
  </section>;
}
