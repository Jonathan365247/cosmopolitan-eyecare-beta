import Image from "next/image";
import Link from "next/link";
import { SocialIconLinks } from "./SocialIconLinks";

const primaryCareLinks = [
  ["Comprehensive eye exams", "/care/comprehensive-eye-exams"],
  ["Medical eye care", "/care/ocular-disease-management"],
  ["Myopia management", "/care/myopia-management"],
  ["LASIK evaluations", "/care/lasik-evaluations"],
] as const;

const specialtyLinks = [
  ["Dry Eye Center", "/dry-eye"],
  ["Take the Dry Eye Quiz", "/dry-eye-quiz"],
  ["Specialty contact lenses", "/specialty-contact-lenses"],
  ["Scleral lenses", "/care/scleral-contact-lenses"],
  ["OptiLight IPL", "/care/optilight-ipl"],
  ["Ocular aesthetics", "/aesthetics"],
] as const;

const bookingUrl = "https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725";
const mapsUrl = "https://maps.app.goo.gl/JCuUL9935ZF4yxYW8";
const privacyUrl = "https://www.cosmopolitaneyecare.com/privacy-policy.html";

export function InnerHeader() {
  return (
    <header className="inner-header">
      <Link className="inner-logo" href="/">
        <Image src="/approved-assets/cosmopolitan-logo.png" alt="Cosmopolitan Eyecare" width={310} height={120} priority />
      </Link>
      <nav aria-label="Primary navigation">
        <details className="nav-menu">
          <summary>Care</summary>
          <div className="nav-groups">
            <section><p>Everyday eye care</p>{primaryCareLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</section>
            <section><p>Focused care</p>{specialtyLinks.filter(([, href]) => href !== "/aesthetics").map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}</section>
            <section><p>Complete care guide</p><Link href="/services">Explore all services →</Link><Link href="/aesthetics">Ocular aesthetics →</Link></section>
          </div>
        </details>
        <details className="nav-menu">
          <summary>Specialty programs</summary>
          <div className="nav-groups nav-groups-specialty">
            <section><p>Dry eye</p><Link href="/dry-eye">Dry Eye Center</Link><Link href="/dry-eye-quiz">Take the Dry Eye Quiz →</Link><Link href="/care/optilight-ipl">OptiLight IPL →</Link></section>
            <section><p>Specialty vision</p><Link href="/specialty-contact-lenses">Specialty contact lenses</Link><Link href="/care/scleral-contact-lenses">Scleral contact lenses</Link><Link href="/care/myopia-management">Myopia management →</Link></section>
          </div>
        </details>
        <details className="nav-menu">
          <summary>Resources</summary>
          <div className="nav-groups nav-groups-specialty">
            <section><p>Learn</p><Link href="/eye-health">Eye health resources</Link><a href="https://www.cosmopolitaneyecare.com/blog.html" target="_blank" rel="noreferrer">Blog &amp; article archive ↗</a></section>
            <section><p>Patients</p><Link href="/patient-resources">Patient center</Link><Link href="/contact">Contact &amp; visit →</Link></section>
          </div>
        </details>
        <details className="nav-menu">
          <summary>About &amp; visit</summary>
          <div className="nav-groups nav-groups-specialty">
            <section><p>Practice</p><Link href="/our-practice">Our practice</Link><Link href="/meet-the-doctors">Meet the doctors</Link><Link href="/testimonials">Patient stories</Link></section>
            <section><p>Plan your visit</p><Link href="/contact">Contact &amp; directions</Link><Link href="/patient-resources">Forms, portal &amp; payments →</Link></section>
          </div>
        </details>
      </nav>
      <a className="inner-call" href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a>
      <details className="mobile-menu inner-mobile-menu">
        <summary aria-label="Open site menu"><span className="hamburger" aria-hidden="true" /></summary>
        <div>
          <Link href="/our-practice">About Cosmopolitan</Link>
          <Link href="/services">All eye care services</Link>
          <p className="mobile-menu-label">Everyday eye care</p>
          {primaryCareLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <p className="mobile-menu-label">Specialty care</p>
          {specialtyLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/eye-health">Eye health resources</Link>
          <a href="https://www.cosmopolitaneyecare.com/blog.html" target="_blank" rel="noreferrer">Blog &amp; articles ↗</a>
          <Link href="/patient-resources">Patient center</Link>
          <Link href="/contact">Contact & visit</Link>
          <a href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment ↗</a>
        </div>
      </details>
    </header>
  );
}

export function InnerFooter() {
  return (
    <footer className="inner-footer">
      <div>
        <Link className="footer-brand-link" href="/" aria-label="Cosmopolitan Eyecare home">
          <Image className="footer-brand" src="/approved-assets/cosmopolitan-logo-white.png" alt="Cosmopolitan Eyecare — return home" width={1983} height={792} />
        </Link>
        <p>Thoughtful eye care in Midtown Manhattan.</p>
        <a className="footer-book" href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment ↗</a>
      </div>
      <div>
        <p className="footer-label">Eye care</p>
        <Link href="/care/comprehensive-eye-exams">Comprehensive eye exams</Link>
        <Link href="/care/ocular-disease-management">Medical eye care</Link>
        <Link href="/care/myopia-management">Myopia management</Link>
        <Link href="/care/lasik-evaluations">LASIK evaluations</Link>
        <Link href="/services">All services</Link>
      </div>
      <div>
        <p className="footer-label">Specialty care</p>
        <Link href="/dry-eye">Dry Eye Center</Link>
        <Link href="/dry-eye-quiz">Dry Eye Quiz</Link>
        <Link href="/care/optilight-ipl">OptiLight IPL</Link>
        <Link href="/specialty-contact-lenses">Specialty contact lenses</Link>
        <Link href="/care/scleral-contact-lenses">Scleral lenses</Link>
        <Link href="/aesthetics">Ocular aesthetics</Link>
      </div>
      <div>
        <p className="footer-label">Resources &amp; practice</p>
        <Link href="/our-practice">Our practice</Link>
        <Link href="/meet-the-doctors">Meet the doctors</Link>
        <Link href="/eye-health">Eye health resources</Link>
        <a href="https://www.cosmopolitaneyecare.com/blog.html" target="_blank" rel="noreferrer">Blog &amp; articles ↗</a>
        <Link href="/patient-resources">Patient center</Link>
        <Link href="/contact">Contact &amp; visit</Link>
      </div>
      <div>
        <p className="footer-label">Visit</p>
        <a href={mapsUrl} target="_blank" rel="noreferrer">1166 Avenue of the Americas<br />New York, NY 10036 ↗</a>
        <a href="tel:+12123024889">(212) 302-4889</a>
        <p>Fax: (212) 504-8257</p>
        <p className="footer-label footer-social-label">Follow</p>
        <SocialIconLinks />
        <p className="footer-label footer-social-label">Policies</p>
        <a href={privacyUrl} target="_blank" rel="noreferrer">Privacy policy ↗</a>
        <Link href="/accessibility">Accessibility statement</Link>
      </div>
      <p className="footer-note">Private beta preview · Booking and patient resources open on their current destinations.</p>
    </footer>
  );
}
