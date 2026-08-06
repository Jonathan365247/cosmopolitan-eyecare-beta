import Link from "next/link";
import Image from "next/image";
import { siteUrl } from "../lib/site-config";

type Topic = { label: string; title: string; copy: string };

export function SpecialtyDepth({ label, title, intro, topics, image, imageAlt }: { label: string; title: string; intro: string; topics: Topic[]; image?: string; imageAlt?: string }) {
  return <section className="specialty-depth" aria-labelledby={`${label}-depth`}>
    <div className="specialty-depth-intro"><p className="section-label">{label}</p><div><h2 id={`${label}-depth`}>{title}</h2><p>{intro}</p></div></div>
    {image && <figure className="specialty-feature-image"><Image src={image} alt={imageAlt ?? ""} fill sizes="(max-width: 900px) 100vw, 1400px" /></figure>}
    <div className="specialty-depth-grid">{topics.map((topic) => <article key={topic.title}><span>{topic.label}</span><h3>{topic.title}</h3><p>{topic.copy}</p></article>)}</div>
  </section>;
}

export function SpecialtyPathways({ links }: { links: readonly (readonly [string, string])[] }) {
  return <section className="specialty-pathways" aria-labelledby="related-care-heading"><p className="section-label">CONTINUE EXPLORING</p><h2 id="related-care-heading">Related care, clearly connected.</h2><div>{links.map(([label, href]) => <Link href={href} key={href}>{label}<span>→</span></Link>)}</div></section>;
}

export function SpecialtyPageStructuredData({ name, description, path }: { name: string; description: string; path: string }) {
  const schema = { "@context": "https://schema.org", "@type": "MedicalWebPage", "@id": `${siteUrl}${path}#webpage`, url: `${siteUrl}${path}`, name, description, inLanguage: "en-US", mainEntity: { "@type": "Service", name, description, provider: { "@id": `${siteUrl}/#practice` } } };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
