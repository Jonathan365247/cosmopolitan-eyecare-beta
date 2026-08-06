import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";

const bookingUrl = "https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725";
const mapsUrl = "https://maps.app.goo.gl/JCuUL9935ZF4yxYW8";

export const metadata: Metadata = {
  title: "Contact & Visit | Cosmopolitan Eyecare",
  description: "Book an appointment, call Cosmopolitan Eyecare, or plan your visit to our Midtown Manhattan office.",
};

export default function ContactPage() {
  return (
    <>
      <InnerHeader />
      <main className="detail-page core-page contact-page">
        <section className="core-hero contact-hero" aria-labelledby="contact-title">
          <p className="back-link">CONTACT &amp; VISIT</p>
          <h1 id="contact-title">Meet us in the <em>middle of it all.</em></h1>
          <p className="detail-lede">Choose the easiest way to reach us. Our Midtown Manhattan team is ready to help you plan your next eye-care visit.</p>
        </section>

        <section className="contact-actions" aria-labelledby="contact-actions-title">
          <div className="contact-actions-intro">
            <p className="section-label">GET STARTED</p>
            <h2 id="contact-actions-title">How can we help?</h2>
          </div>
          <div className="contact-action-grid">
            <a className="contact-action contact-action-primary" href={bookingUrl} target="_blank" rel="noreferrer">
              <span>01</span><strong>Book an appointment</strong><p>Choose a convenient time online.</p><b aria-hidden="true">↗</b>
            </a>
            <a className="contact-action" href="tel:+12123024889">
              <span>02</span><strong>Call the practice</strong><p>(212) 302-4889</p><b aria-hidden="true">→</b>
            </a>
            <a className="contact-action" href={mapsUrl} target="_blank" rel="noreferrer">
              <span>03</span><strong>Get directions</strong><p>1166 Avenue of the Americas</p><b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>

        <section className="contact-visit" aria-labelledby="visit-title">
          <div>
            <p className="section-label">PLAN YOUR VISIT</p>
            <h2 id="visit-title">Everything you need, before you arrive.</h2>
          </div>
          <div className="contact-visit-grid">
            <article>
              <p className="section-label">OFFICE</p>
              <h3>Midtown Manhattan</h3>
              <p>1166 Avenue of the Americas<br />New York, NY 10036</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Open directions ↗</a>
            </article>
            <article>
              <p className="section-label">HOURS</p>
              <h3>Here when you need us.</h3>
              <p>Appointments are available seven days a week. Call the office for the current schedule and specialty-care availability.</p>
              <a href="tel:+12123024889">Call (212) 302-4889</a>
            </article>
            <article>
              <p className="section-label">PREPARE</p>
              <h3>A smoother visit starts here.</h3>
              <p>Find patient forms, portal access, payment information, and referral resources before your appointment.</p>
              <Link href="/patient-resources">Visit patient center →</Link>
            </article>
          </div>
        </section>

        <section className="contact-support" aria-labelledby="contact-support-title">
          <p className="section-label">NEED SOMETHING SPECIFIC?</p>
          <h2 id="contact-support-title">A few helpful next steps.</h2>
          <div>
            <Link href="/dry-eye">Dry eye care <span>→</span></Link>
            <Link href="/services">Explore all services <span>→</span></Link>
            <Link href="/eye-health">Eye-health resources <span>→</span></Link>
          </div>
        </section>
      </main>
      <InnerFooter />
    </>
  );
}
