import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "@/components/InnerChrome";
import { TestimonialsContent } from "@/components/TestimonialsContent";

export const metadata: Metadata = {
  title: "Patient Reviews & Experiences | Cosmopolitan Eyecare",
  description: "Read selected patient experiences with Cosmopolitan Eyecare in Midtown Manhattan, including comprehensive exams, dry eye care, and specialty contact lenses.",
};

export default function TestimonialsPage() {
  return <><InnerHeader /><main id="main-content" className="detail-page core-page"><section className="core-hero"><Link href="/" className="back-link">← Cosmopolitan Eyecare</Link><p className="kicker">PATIENT EXPERIENCES</p><h1>Care people remember for the <em>right reasons.</em></h1><p className="detail-lede">A closer look at the experiences patients have shared about comprehensive eye care, dry eye treatment, specialty contact lenses, and the people behind the visit.</p></section><TestimonialsContent /><section className="path-links"><p className="section-label">KEEP EXPLORING</p><Link href="/meet-the-doctors"><span>01</span>Meet the doctors<b>↗</b></Link><Link href="/contact"><span>02</span>Plan your visit<b>↗</b></Link></section></main><InnerFooter /></>;
}
