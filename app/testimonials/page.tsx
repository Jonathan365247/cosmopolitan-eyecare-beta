import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "@/components/InnerChrome";
import { TestimonialsContent } from "@/components/TestimonialsContent";
import { siteUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Patient Reviews and Experiences | Cosmopolitan Eyecare NYC",
  description: "Read verified patient feedback about Cosmopolitan Eyecare, including experiences with comprehensive exams, specialty contact lenses, dry-eye care, and its Midtown Manhattan doctors.",
};

export default function TestimonialsPage() {
  const schema = { "@context": "https://schema.org", "@graph": [{ "@type": "WebPage", name: "Patient Reviews and Experiences | Cosmopolitan Eyecare NYC", url: `${siteUrl}/testimonials`, about: { "@id": `${siteUrl}/#organization` } }, { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: siteUrl }, { "@type": "ListItem", position: 2, name: "Patient experiences", item: `${siteUrl}/testimonials` }] }] };
  return <><InnerHeader /><main id="main-content" className="detail-page core-page"><section className="core-hero core-hero-compact"><Link href="/" className="back-link">← Cosmopolitan Eyecare</Link><p className="kicker">PATIENT EXPERIENCES</p><h1>Care people remember for the <em>right reasons.</em></h1><p className="detail-lede">Patients frequently mention thorough examinations, clear explanations, specialized care, and a team that takes time to listen. Explore verified patient feedback about Cosmopolitan Eyecare and its doctors.</p><p className="hero-source-note">Selected from publicly available patient reviews. Sources and verification details are provided below.</p></section><TestimonialsContent /><section className="path-links"><p className="section-label">KEEP EXPLORING</p><Link href="/meet-the-doctors"><span>01</span>Meet the doctors<b>↗</b></Link><Link href="/services"><span>02</span>Explore eye-care services<b>↗</b></Link><Link href="/contact"><span>03</span>Plan your visit<b>↗</b></Link></section></main><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} /><InnerFooter /></>;
}
