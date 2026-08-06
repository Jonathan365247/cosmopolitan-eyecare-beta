import Image from "next/image";
import Link from "next/link";
import { SocialIconLinks } from "./SocialIconLinks";

const careLinks = [
  ["Eye exams", "/care/comprehensive-eye-exams"],
  ["Dry eye treatment", "/care/dry-eye-treatment"],
  ["OptiLight IPL", "/care/optilight-ipl"],
  ["Specialty contact lenses", "/specialty-contact-lenses"],
  ["Scleral lenses", "/care/scleral-contact-lenses"],
  ["Myopia management", "/care/myopia-management"],
  ["Medical eye care", "/care/ocular-disease-management"],
  ["LASIK evaluations", "/care/lasik-evaluations"],
  ["Ocular aesthetics", "/aesthetics"],
] as const;

const bookingUrl = "https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725";
const mapsUrl = "https://maps.app.goo.gl/JCuUL9935ZF4yxYW8";
const privacyUrl = "https://www.cosmopolitaneyecare.com/privacy-policy.html";
const accessibilityUrl = "https://www.cosmopolitaneyecare.com/accessibility-statement.html";

export function InnerHeader() {
  return (
    <header className="inner-header">
      <Link className="inner-logo" href="/">
        <Image src="/approved-assets/cosmopolitan-logo.png" alt="Cosmopolitan Eyecare" width={310} height={120} priority />
      </Link>
      <nav aria-label="Primary navigation">
        <Link href="/our-practice">About</Link>
        <details className="nav-menu">
          <summary>Eye care</summary>
          <div>
            {careLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
            <Link href="/services">View all services →</Link>
          </div>
        </details>
        <Link href="/dry-eye">Dry Eye Center</Link>
        <Link href="/aesthetics">Aesthetics</Link>
        <Link href="/eye-health">Resources</Link>
        <Link href="/patient-resources">Patient center</Link>
      </nav>
      <a className="inner-call" href={bookingUrl} target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a>
      <details className="mobile-menu inner-mobile-menu">
        <summary aria-label="Open site menu"><span className="hamburger" aria-hidden="true" /></summary>
        <div>
          <Link href="/our-practice">About Cosmopolitan</Link>
          <Link href="/services">All eye care services</Link>
          {careLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
          <Link href="/dry-eye">Dry Eye Center</Link>
          <Link href="/aesthetics">Ocular aesthetics</Link>
          <Link href="/eye-health">Eye health resources</Link>
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
        <p className="footer-label">Explore</p>
        <Link href="/our-practice">Our practice</Link>
        <Link href="/meet-the-doctors">Meet the doctors</Link>
        <Link href="/testimonials">Patient stories</Link>
        <Link href="/services">All services</Link>
        <Link href="/eye-health">Eye health resources</Link>
        <Link href="/patient-resources">Patient center</Link>
        <Link href="/contact">Contact & visit</Link>
      </div>
      <div>
        <p className="footer-label">Specialty care</p>
        <Link href="/dry-eye">Dry Eye Center</Link>
        <Link href="/care/optilight-ipl">OptiLight IPL</Link>
        <Link href="/aesthetics">Ocular aesthetics</Link>
        <Link href="/specialty-contact-lenses">Specialty contact lenses</Link>
        <Link href="/care/scleral-contact-lenses">Scleral contact lenses</Link>
      </div>
      <div>
        <p className="footer-label">Eye care services</p>
        {careLinks.map(([label, href]) => <Link href={href} key={href}>{label}</Link>)}
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
        <a href={accessibilityUrl} target="_blank" rel="noreferrer">Accessibility statement ↗</a>
      </div>
      <p className="footer-note">Private beta preview · Booking and patient resources open on their current destinations.</p>
    </footer>
  );
}
