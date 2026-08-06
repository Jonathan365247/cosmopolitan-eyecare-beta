import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";
import { PageStructuredData } from "../../components/PageStructuredData";

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
      <main className="detail-page core-page contact-page"><PageStructuredData name="Contact & Visit | Cosmopolitan Eyecare" description="Book an appointment, call Cosmopolitan Eyecare, or plan your visit to the Midtown Manhattan office." path="/contact" breadcrumb="Contact & Visit" />
        <section className="core-hero contact-hero" aria-labelledby="contact-title">
          <div className="contact-hero-copy">
            <p className="back-link">CONTACT &amp; VISIT</p>
            <h1 id="contact-title">Meet us in the <em>middle of it all.</em></h1>
            <p className="detail-lede">Choose the easiest way to reach us. Our Midtown Manhattan team is ready to help you plan your next eye-care visit.</p>
          </div>
          <aside className="contact-hero-details" aria-label="Office hours and contact information">
            <p className="section-label">PLAN YOUR VISIT</p>
            <a href="tel:+12123024889" className="contact-hero-phone">(212) 302-4889</a>
            <a href={mapsUrl} target="_blank" rel="noreferrer" className="contact-hero-address">1166 Avenue of the Americas<br />New York, NY 10036 ↗</a>
            <div className="contact-hours"><p className="section-label">OFFICE HOURS</p><dl><div><dt>Monday</dt><dd>10:00am – 6:00pm</dd></div><div><dt>Tuesday</dt><dd>10:00am – 7:00pm</dd></div><div><dt>Wednesday</dt><dd>10:00am – 7:00pm</dd></div><div><dt>Thursday</dt><dd>10:00am – 6:00pm</dd></div><div><dt>Friday</dt><dd>10:00am – 6:00pm</dd></div><div><dt>Saturday</dt><dd>10:00am – 4:00pm</dd></div><div><dt>Sunday</dt><dd>10:00am – 4:00pm</dd></div></dl></div>
            <a className="contact-hero-google" href={mapsUrl} target="_blank" rel="noreferrer">Find us on Google <span>↗</span></a>
          </aside>
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
            <a className="contact-action contact-action-call" href="tel:+12123024889">
              <span>02</span><strong>Call the practice</strong><p>(212) 302-4889</p><b aria-hidden="true">→</b>
            </a>
            <a className="contact-action contact-action-directions" href={mapsUrl} target="_blank" rel="noreferrer">
              <span>03</span><strong>Get directions</strong><p>1166 Avenue of the Americas</p><b aria-hidden="true">↗</b>
            </a>
          </div>
        </section>

        <section className="contact-map-section" aria-labelledby="contact-map-title">
          <div><p className="section-label">FIND THE OFFICE</p><h2 id="contact-map-title">A Midtown location that fits your day.</h2><p>Steps from Rockefeller Center and easy to reach from throughout Manhattan.</p><a href={mapsUrl} target="_blank" rel="noreferrer">Open in Google Maps <span>↗</span></a></div>
          <iframe src="https://www.google.com/maps?q=1166+Avenue+of+the+Americas,+New+York,+NY+10036&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Map to Cosmopolitan Eyecare" />
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
              <p className="section-label">GOOGLE</p>
              <h3>Find us on the map.</h3>
              <p>View the practice’s Google Maps profile for directions, the latest reviews, and location details.</p>
              <a href={mapsUrl} target="_blank" rel="noreferrer">Open Google Maps ↗</a>
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
