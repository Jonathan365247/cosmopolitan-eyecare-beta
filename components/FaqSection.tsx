type Faq = { question: string; answer: string };

export function FaqSection({ items }: { items: Faq[] }) {
  const schema = { "@context": "https://schema.org", "@type": "FAQPage", mainEntity: items.map((item) => ({ "@type": "Question", name: item.question, acceptedAnswer: { "@type": "Answer", text: item.answer } })) };
  return <section className="faq-section" aria-labelledby="faq-heading"><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><p className="section-label">FREQUENTLY ASKED QUESTIONS</p><h2 id="faq-heading">Helpful answers, before your visit.</h2><div>{items.map((item) => <details key={item.question}><summary>{item.question}<span>+</span></summary><p>{item.answer}</p></details>)}</div></section>;
}
