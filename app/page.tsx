import Link from "next/link";
import Image from "next/image";
import { InnerFooter } from "@/components/InnerChrome";

const focusAreas = [
  { number: "01", title: "Comprehensive eye exams", text: "A full picture of everyday vision, eye health, and the questions that matter to you.", href: "/care/comprehensive-eye-exams" },
  { number: "02", title: "Dry eye care", text: "A clearer path from persistent symptoms to thoughtful evaluation and treatment.", href: "/dry-eye" },
  { number: "03", title: "Specialty contact lenses", text: "Expert fitting for eyes and lives that need more than an off-the-shelf solution.", href: "/specialty-contact-lenses" },
  { number: "04", title: "Myopia management", text: "A measured approach to changing vision for children, teens, and adults.", href: "/care/myopia-management" },
  { number: "05", title: "Medical eye care", text: "Guidance for changing eye-health needs, from infections to ongoing conditions.", href: "/care/ocular-disease-management" },
  { number: "06", title: "Ocular aesthetics", text: "Eye-area care with a clinical point of view and a measured, personal approach.", href: "/aesthetics" },
];

const doctors = [
  { name: "Dr. Deeba Chaudri", image: "/approved-assets/dr-chaudri.png" },
  { name: "Dr. Lauren Strawn", image: "/approved-assets/dr-strawn.png" },
  { name: "Dr. Ethan Chan", image: "/approved-assets/dr-chan.png" },
  { name: "Dr. Tiffany Cong", image: "/approved-assets/dr-cong.png" },
  { name: "Dr. Serena Lu", image: "/approved-assets/dr-lu.png" },
];

export default function HomePage() {
  return (
    <main id="main-content">
      <section className="hero">
        <video className="hero-video" autoPlay muted loop playsInline preload="metadata" aria-hidden="true"><source src="/approved-assets/cosmopolitan-manhattan-hero.mp4" type="video/mp4" /></video>
        <nav aria-label="Primary navigation" className="nav">
          <Link className="brand-logo" href="/"><Image src="/approved-assets/cosmopolitan-logo-white.png" alt="Cosmopolitan Eyecare" width={1983} height={792} priority /></Link>
          <div className="nav-links"><Link href="/our-practice">About</Link><Link href="/services">Eye care</Link><Link href="/dry-eye">Dry Eye Center</Link><Link href="/aesthetics">Aesthetics</Link><Link href="/specialty-contact-lenses">Specialty lenses</Link><Link href="/patient-resources">Patient center</Link></div>
          <a className="nav-cta" href="https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725" target="_blank" rel="noreferrer">Book an appointment <i>↗</i></a>
          <details className="mobile-menu home-mobile-menu"><summary aria-label="Open site menu"><span className="hamburger" aria-hidden="true" /></summary><div><Link href="/our-practice">About Cosmopolitan</Link><Link href="/services">Eye care services</Link><Link href="/dry-eye">Dry Eye Center</Link><Link href="/aesthetics">Ocular aesthetics</Link><Link href="/specialty-contact-lenses">Specialty lenses</Link><Link href="/eye-health">Eye health resources</Link><Link href="/patient-resources">Patient center</Link><a href="https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725" target="_blank" rel="noreferrer">Book an appointment ↗</a></div></details>
        </nav>
        <div className="hero-copy">
          <p className="kicker">Midtown Manhattan · Since 2006</p>
          <h1>See better.<br /><em>Look good.</em></h1>
          <p className="lede">Personalized eye care, dry eye treatment, specialty contact lenses, and ocular aesthetics—right in the heart of New York City.</p>
          <Link className="text-link" href="/services">Explore our care <span>→</span></Link>
        </div>
        <p className="hero-note">1166 Avenue of the Americas · New York, NY</p>
      </section>

      <section id="practice" className="statement section-pad">
        <p className="section-label">THE PRACTICE</p>
        <div className="statement-headline"><h2>Care that sees the <em>whole picture.</em></h2></div><div className="statement-story"><p>Cosmopolitan Eyecare brings comprehensive optometry and a more specialized point of view under one roof. We listen closely, explain clearly, and create care plans that meet you where you are.</p><figure className="practice-photo"><Image src="/approved-assets/cosmopolitan-welcome.png" alt="The Cosmopolitan Eyecare practice reception" width={557} height={350} priority /><figcaption>Cosmopolitan Eyecare · Midtown Manhattan</figcaption></figure></div><aside className="practice-note"><p className="section-label">WHY COSMOPOLITAN</p><h3>Built for the pace of <em>Midtown.</em></h3><p>Full-scope eye care, dry eye conversations, specialty contact lens expertise, and a clear path forward—close to where New York works and moves.</p><ul><li>Thoughtful, full-scope care</li><li>Specialty lens experience</li><li>Open seven days a week</li></ul><Link href="/our-practice">Explore the practice <span>→</span></Link></aside>
      </section>

      <section id="care" className="focus section-pad">
        <div className="section-intro"><div><p className="section-label">EYE CARE SERVICES</p><h2>Find your place to <em>begin.</em></h2></div><p>Start with what brings you in. These are Cosmopolitan’s core care pathways, with deeper guidance available for each service.</p></div>
        <div className="focus-list">{focusAreas.map((area) => <Link href={area.href} className="focus-item" key={area.number}><span>{area.number}</span><div><h3>{area.title}</h3><p>{area.text}</p></div><b>↗</b></Link>)}</div>
        <Link className="focus-all-link" href="/services">Explore all eye care services <span>→</span></Link>
      </section>

      <section className="proof section-pad"><p className="section-label">WHY COSMOPOLITAN</p><div className="proof-grid"><h2>Expertise without the <em>rush.</em></h2><div><div className="doctor-roster">{doctors.map((doctor) => <Image key={doctor.name} src={doctor.image} alt={doctor.name} width={180} height={180} />)}</div><Link className="doctor-roster-link" href="/meet-the-doctors">Meet all five doctors <span>→</span></Link><p>From preventive exams to complex visual needs, our doctors take the time to understand your concerns and help you move forward with confidence.</p><div className="proof-accordions"><details><summary>Comprehensive eye health <span>+</span></summary><p>Routine exams look beyond a prescription, with attention to the eye-health questions that matter to your day-to-day vision.</p></details><details><summary>Individualized treatment plans <span>+</span></summary><p>Recommendations start with your symptoms, goals, visual demands, and comfort—not a one-size-fits-all checklist.</p></details><details><summary>Specialty contact lens expertise <span>+</span></summary><p>For more complex fitting needs, specialty lens options can help create a clearer, more comfortable visual experience.</p></details><details><summary>Midtown convenience <span>+</span></summary><p>Located at 1166 Avenue of the Americas, the practice is designed to fit naturally into a busy Midtown day.</p></details></div></div></div></section>

      <section id="visit" className="visit"><div className="visit-map" aria-hidden="true"><iframe src="https://www.google.com/maps?q=1166+Avenue+of+the+Americas,+New+York,+NY+10036&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} title="Map of Cosmopolitan Eyecare" /></div><div><p className="section-label">PLAN YOUR VISIT</p><h2>1166 Avenue of the Americas<br />New York, NY 10036</h2></div><div><p>For eye exams, dry eye consultations, specialty lenses, and aesthetics.</p><p className="phone">(212) 302-4889</p><a className="outline-button" href="https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725" target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a></div></section>

      <InnerFooter />
    </main>
  );
}
