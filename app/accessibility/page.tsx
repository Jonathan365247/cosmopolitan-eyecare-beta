import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "@/components/InnerChrome";

export const metadata: Metadata = {
  title: "Accessibility | Cosmopolitan Eyecare",
  description: "Accessibility information and assistance for Cosmopolitan Eyecare.",
};

export default function AccessibilityPage() {
  return <><InnerHeader /><main id="main-content" className="detail-page core-page">
    <section className="core-hero"><Link href="/" className="back-link">← Cosmopolitan Eyecare</Link><p className="kicker">ACCESSIBILITY</p><h1>Designed for a clearer, <em>more usable experience.</em></h1><p className="detail-lede">Cosmopolitan Eyecare is working to make its website useful and accessible for as many visitors as possible.</p></section>
    <section className="detail-band"><p className="section-label">OUR APPROACH</p><div><h2>Accessibility is part of the build.</h2><p>We aim to support keyboard navigation, readable color contrast, responsive layouts, descriptive alternative text, meaningful headings, and controls that work without a mouse. We review the site as it evolves and address issues as they are identified.</p></div></section>
    <section className="accessibility-tools"><p className="section-label">AVAILABLE SUPPORT</p><div><article><h2>Motion controls</h2><p>The homepage video includes a pause/play control. Visitors can also use their device or browser settings to reduce motion.</p></article><article><h2>Reading preferences</h2><p>Most browsers allow visitors to zoom text, adjust display settings, and use built-in reader or translation features according to their own needs.</p></article><article><h2>Need assistance?</h2><p>If something on this site is difficult to use, call the practice and share what you need help with. The team can help identify another way to access the information or complete the next step.</p><a href="tel:+12123024889">Call (212) 302-4889</a></article></div></section>
    <section className="accessibility-note"><p className="section-label">CONTINUING IMPROVEMENT</p><h2>Tell us where we can do better.</h2><p>Accessibility needs and technologies change. If you encounter a barrier, please contact Cosmopolitan Eyecare with the page you were using and a brief description of the issue. This statement describes the website’s current accessibility approach; it is not a certification or a guarantee of conformance.</p></section>
  </main><InnerFooter /></>;
}
