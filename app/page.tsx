import Link from "next/link";
import Image from "next/image";
import { InnerFooter, SiteHeader } from "@/components/InnerChrome";
import { HeroVideo } from "@/components/HeroVideo";
import { SocialProofPanel } from "@/components/SocialProofStats";
import { ProofAccordion } from "@/components/ProofAccordion";
import { HomepageReviews } from "@/components/HomepageReviews";

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
  return <main id="main-content">
    <section className="hero">
      <HeroVideo />
      <SiteHeader mode="overlay" />
      <div className="hero-copy"><p className="kicker">Midtown Manhattan</p><h1>See better.<br /><em>Look good.</em></h1><p className="lede">Personalized eye care, dry eye treatment, specialty contact lenses, and ocular aesthetics—right in the heart of New York City.</p><Link className="text-link hero-care-link" href="/services">Explore our care <span>→</span></Link></div>
      <p className="hero-note">1166 Avenue of the Americas · New York, NY</p>
    </section>
    <section id="practice" className="practice-credibility section-pad"><div className="practice-credibility-copy"><p className="section-label">MORE TIME. CLEARER ANSWERS.</p><h2>Advanced eye care, with <em>time to be heard.</em></h2><p>From comprehensive eye exams to complex dry eye and specialty lens care, our doctors take a thorough, personal approach to every visit. We combine modern diagnostics with clear explanations and recommendations shaped around your daily life.</p></div><SocialProofPanel /></section>
    <section id="care" className="focus section-pad"><div className="section-intro"><div><p className="section-label">EYE CARE SERVICES</p><h2>Start with the care you <em>need.</em></h2><p>Start with what brings you in. These are Cosmopolitan’s core care pathways, with deeper guidance available for each service.</p></div></div><div className="focus-list">{focusAreas.map((area, index) => <Link href={area.href} className={`focus-item${index < 3 ? " focus-item-primary" : ""}`} key={area.number}><span>{area.number}</span><div><h3>{area.title}</h3><p>{area.text}</p></div><b aria-hidden="true">↗</b><span className="sr-only">Learn more about {area.title}</span></Link>)}</div><Link className="focus-all-link" href="/services">Explore all eye care services <span>→</span></Link></section>
    <section className="proof section-pad"><p className="section-label">WHY COSMOPOLITAN</p><div className="proof-grid"><h2>Expertise without the <em>rush.</em></h2><div><div className="doctor-roster">{doctors.map((doctor) => <Image key={doctor.name} src={doctor.image} alt={doctor.name} width={180} height={180} />)}</div><Link className="doctor-roster-link" href="/meet-the-doctors">Meet our doctors <span>→</span></Link><p>From preventive exams to complex visual needs, our doctors take the time to understand your concerns and help you move forward with confidence.</p><div className="proof-accordions"><ProofAccordion title="Comprehensive eye health">Routine exams look beyond a prescription, with attention to the eye-health questions that matter to your day-to-day vision.</ProofAccordion><ProofAccordion title="Individualized treatment plans">Recommendations start with your symptoms, goals, visual demands, and comfort—not a one-size-fits-all checklist.</ProofAccordion><ProofAccordion title="Specialty contact lens expertise">For more complex fitting needs, specialty lens options can help create a clearer, more comfortable visual experience.</ProofAccordion><ProofAccordion title="Midtown convenience">Located at 1166 Avenue of the Americas, the practice is designed to fit naturally into a busy Midtown day.</ProofAccordion></div></div></div></section>
    <HomepageReviews />
    <section id="visit" className="visit"><div className="visit-map" aria-hidden="true"><iframe src="https://www.google.com/maps?q=1166+Avenue+of+the+Americas,+New+York,+NY+10036&output=embed" loading="lazy" referrerPolicy="no-referrer-when-downgrade" tabIndex={-1} title="Map of Cosmopolitan Eyecare" /></div><div><p className="section-label">PLAN YOUR VISIT</p><h2>1166 Avenue of the Americas<br />New York, NY 10036</h2><a className="visit-directions" href="https://maps.app.goo.gl/JCuUL9935ZF4yxYW8" target="_blank" rel="noreferrer">Get directions <span>↗</span></a></div><div><p>For eye exams, dry eye consultations, specialty lenses, and aesthetics.</p><p className="visit-call-label">Call us</p><a className="phone" href="tel:+12123024889">(212) 302-4889</a><a className="outline-button" href="https://www.lenscrafters.com/webapp/wcs/stores/servlet/ScheduleExamView?catalogId=11651&langId=-1&storeId=10851&storeNumber=3725" target="_blank" rel="noreferrer">Book an appointment <span>↗</span></a></div></section>
    <InnerFooter />
  </main>;
}
