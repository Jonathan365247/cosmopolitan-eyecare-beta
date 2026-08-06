import Link from "next/link";

const themes = [
  ["Time to listen", "Patients frequently describe doctors who explain findings, answer questions, and make room for concerns rather than treating an eye exam as a transaction."],
  ["Specialized help", "Reviews point to thoughtful dry eye care, detailed contact lens fittings, and support when a routine solution has not been enough."],
  ["A helpful Midtown team", "From check-in through follow-up, patients often mention a welcoming staff, practical guidance, and help when a vision need feels time-sensitive."],
] as const;

const reviews = [
  ["The doctors are very personable and understanding. They take their time evaluating your condition.", "Asia Aziz", "Annual eye care"],
  ["Dr. Chan went above and beyond to be informative and detailed with my fitting. Learned eye care tips that no optometrist in my entire life had ever bothered to share before.", "Yiwa ‘Kiwi’ Wang", "Contact lens fitting"],
  ["Dr. Chaudri was friendly, thorough, informative and took time to answer all my questions.", "Mark Wuillamey", "Comprehensive exam"],
  ["I went from using drops hourly to not needing them at all. The whole experience from Dr. Chan and his team was outstanding.", "William Wright", "Dry eye care"],
  ["I am absolutely thrilled with the results of my scleral lenses. I had previously seen specialists in Europe, but no one was able to achieve the right fit and results I was looking for.", "S. M.", "Scleral lenses"],
  ["We were traveling and my daughter forgot her contacts and glasses at home. They were able to get us a pair in no more than 10 minutes. So friendly too.", "Amy Rominger", "Contact lens help"],
  ["Dr. Chan was thorough and took the time to explain everything clearly. The staff were friendly and helpful from check-in to check-out.", "Philip D.", "Eye exam"],
  ["The doctor was concerned about my eyes and gave me drops and a prescription. All were friendly.", "Sherily T.", "Medical eye care"],
  ["Quick and thorough eye exam.", "Luke Wise", "Annual eye care"],
] as const;

export function TestimonialsContent() {
  return <>
    <section className="review-overview"><p className="section-label">WHAT PATIENTS MENTION</p><div><h2>A practice remembered for the <em>way it feels to be cared for.</em></h2><p>Public patient reviews of Cosmopolitan Eyecare repeatedly describe attentive doctors, clear explanations, a welcoming team, and specialized care for dry eye and complex contact lens needs. The experiences below are selected excerpts, shared to help prospective patients understand what others have valued about their care.</p></div></section>
    <section className="review-themes"><p className="section-label">RECURRING THEMES</p><div>{themes.map(([title, copy]) => <article key={title}><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <section className="testimonial-grid testimonial-grid-expanded"><p className="section-label">SELECTED PATIENT PERSPECTIVES</p>{reviews.map(([quote, name, category]) => <figure key={`${name}-${category}`}><span>{category}</span><blockquote>“{quote}”</blockquote><figcaption>{name} <small>Google review</small></figcaption></figure>)}</section>
    <section className="review-note"><p className="section-label">ABOUT THESE REVIEWS</p><div><h2>Real experiences, selected with care.</h2><p>These excerpts are drawn from public Google reviews supplied from the practice’s current review record. They have been selected to reflect common themes and may be lightly edited for length or punctuation. Individual experiences vary, and reviews are not a substitute for a conversation with the practice about your own needs.</p><Link href="/contact">Plan your visit <span>→</span></Link></div></section>
  </>;
}
