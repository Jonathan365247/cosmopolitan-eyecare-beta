import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "../lib/site-config";

type Topic = { label: string; title: string; copy: string };

const serviceReviews: Record<string, { quote: string; author: string; placement: "left" | "right" }> = {
  "/approved-assets/specialty-lenses-feature.png": { quote: "I am absolutely thrilled with the results of my scleral lenses.", author: "S. M. · Google review", placement: "right" },
};

export function SpecialtyDepth({ label, title, intro, topics, image, imageAlt }: { label: string; title: string; intro: string; topics: Topic[]; image?: string; imageAlt?: string }) {
  const review = image ? serviceReviews[image] : undefined;
  return <section className="specialty-depth" aria-labelledby={`${label}-depth`}>
    <div className="specialty-depth-intro"><p className="section-label">{label}</p><div><h2 id={`${label}-depth`}>{title}</h2><p>{intro}</p></div></div>
    {image && <figure className={`specialty-feature-image ${review ? `specialty-feature-review ${review.placement}` : ""}`}><Image src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 1400px" />{review && <figcaption><span>Patient review · Google</span><blockquote>“{review.quote}”</blockquote><p>— {review.author}</p></figcaption>}</figure>}
    <div className="specialty-depth-grid">{topics.map((topic) => <article key={topic.title}><span>{topic.label}</span><h3>{topic.title}</h3><p>{topic.copy}</p></article>)}</div>
  </section>;
}

export function SpecialtyPathways({ links }: { links: readonly (readonly [string, string])[] }) {
  return <section className="specialty-pathways" aria-labelledby="related-care-heading"><p className="section-label">CONTINUE EXPLORING</p><h2 id="related-care-heading">Related care, clearly connected.</h2><div>{links.map(([label, href]) => <Link href={href} key={href}>{label}<span>→</span></Link>)}</div></section>;
}

export function SpecialtyPageStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  const url = `${siteUrl}${path}`;
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "BreadcrumbList", "@id": `${url}#breadcrumb`, itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name, item: url }] }, { "@type": "MedicalWebPage", "@id": `${url}#webpage`, url, name, description, inLanguage: "en-US", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@id": `${siteUrl}/#practice` }, breadcrumb: { "@id": `${url}#breadcrumb` }, mainEntity: { "@type": "Service", "@id": `${url}#service`, name, description, serviceType: name, provider: { "@id": `${siteUrl}/#practice` }, areaServed: { "@type": "City", name: "New York" } } }] };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
