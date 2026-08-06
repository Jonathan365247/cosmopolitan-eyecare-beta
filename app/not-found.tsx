import Link from "next/link";
import { InnerFooter, InnerHeader } from "../components/InnerChrome";

export default function NotFound() {
  return <>
    <InnerHeader />
    <main id="main-content" className="detail-page core-page">
      <section className="core-hero">
        <p className="kicker">PAGE NOT FOUND</p>
        <h1>Let’s get you back to <em>clearer ground.</em></h1>
        <p className="detail-lede">The page you requested is not available in this review beta. Explore care options, contact the practice, or return to the homepage.</p>
      </section>
      <section className="path-links">
        <p className="section-label">START HERE</p>
        <Link href="/services"><span>01</span>Explore eye care services<b>→</b></Link>
        <Link href="/contact"><span>02</span>Contact &amp; visit<b>→</b></Link>
        <Link href="/"><span>03</span>Return home<b>→</b></Link>
      </section>
    </main>
    <InnerFooter />
  </>;
}
