import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";
import { SocialIconLinks } from "../../components/SocialIconLinks";
import { PageStructuredData } from "../../components/PageStructuredData";

const pages = {
  "our-practice": {
    eyebrow: "OUR PRACTICE",
    title: <>Care that keeps <em>New York moving.</em></>,
    lede: "Cosmopolitan Eyecare is a Midtown Manhattan optometry practice offering full-scope exams, specialty contact lens expertise, and thoughtful care for routine and changing eye-health needs.",
    heading: "Personal attention. Full perspective.",
    copy: "Our practice is built around a simple idea: patients should feel seen, informed, and well cared for. Full-scope eye exams, thoughtful listening, specialty contact lens expertise, and clear next steps come together in one Midtown Manhattan practice. We also work to make care practical for busy schedules, insurance questions, and urgent concerns that need prompt guidance.",
    links: [["Meet the doctors", "/meet-the-doctors"], ["Explore services", "/services"]],
  },
  "meet-the-doctors": {
    eyebrow: "MEET THE DOCTORS",
    title: <>A team with a sharper <em>point of view.</em></>,
    lede: "A coordinated group of optometrists, here to offer attentive care across routine and specialized eye health needs.",
    heading: "Experts in seeing what matters.",
    copy: "Our doctors bring experience across comprehensive eye care, dry eye treatment, specialty contact lenses, pediatrics, vision rehabilitation, myopia management, and preventive vision care. The team works together to make each visit feel personal and well considered.",
    links: [["Our practice", "/our-practice"], ["Contact the practice", "/contact"]],
  },
  services: {
    eyebrow: "SERVICES",
    title: <>Everyday care. <em>Extraordinary focus.</em></>,
    lede: "From annual exams to focused treatment pathways, start with what you need and let the care follow.",
    heading: "Find the right place to begin.",
    copy: "Whether you are due for an exam, managing persistent discomfort, exploring specialty lenses, or addressing a specific eye-health concern, these pathways make it easier to find the right place to begin.",
    links: [["Dry Eye Center", "/dry-eye"], ["Ocular aesthetics", "/aesthetics"], ["Specialty contact lenses", "/specialty-contact-lenses"]],
  },
  "patient-resources": {
    eyebrow: "PATIENT CENTER",
    title: <>Everything you need, <em>in one place.</em></>,
    lede: "A calmer, clearer starting point for existing and new Cosmopolitan Eyecare patients.",
    heading: "Made for your visit.",
    copy: "Use this page to reach the current patient portal, complete online forms, review insurance and payment information, and find referral guidance before your visit.",
    links: [["Plan a visit", "/contact"], ["Read patient reviews", "/testimonials"]],
  },
  contact: {
    eyebrow: "CONTACT & VISIT",
    title: <>Meet us in the <em>middle of it all.</em></>,
    lede: "Cosmopolitan Eyecare is located at 1166 Avenue of the Americas in Midtown Manhattan.",
    heading: "Start a conversation.",
    copy: "Call (212) 302-4889 for non-urgent questions, scheduling, or direction. Cosmopolitan Eyecare is located at 1166 Avenue of the Americas, New York, NY 10036, with appointments available seven days a week. For an urgent eye concern, call the practice promptly; for a life-threatening emergency, call 911.",
    links: [["Explore services", "/services"], ["Our practice", "/our-practice"]],
  },
  testimonials: {
    eyebrow: "PATIENT STORIES",
    title: <>Care people remember for the <em>right reasons.</em></>,
    lede: "A selection of patient perspectives on attentive, knowledgeable eye care in Midtown Manhattan.",
    heading: "Trust is earned in the details.",
    copy: "Patients often describe a team that listens closely, explains clearly, and makes visits feel more comfortable. These selected reviews reflect experiences shared on the current practice site.",
    links: [["Plan a visit", "/contact"], ["Meet the doctors", "/meet-the-doctors"]],
  },
} as const;

const serviceSlug = (name: string) => name.toLowerCase().replace(/&/g, "and").replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
const serviceGroups = [
  ["Eye exams & preventive care", ["Comprehensive eye exams", "Myopia management", "Computer vision", "Seasonal allergies"]],
  ["Dry eye care", ["Dry eye treatment", "OptiLight IPL", "Perimenopause & menopause dry eye"]],
  ["Contact lens care", ["Contact lens exams", "Specialty contact lenses", "Scleral contact lenses"]],
  ["Medical eye care", ["Eye infections", "Ocular disease management", "Diabetic-related eye exams", "Common eye disorders", "Eye emergencies"]],
  ["Vision correction", ["LASIK evaluations", "Cataracts", "Macular degeneration", "Glaucoma"]],
  ["Ocular aesthetics", ["Ocular aesthetics"]],
] as const;

const team = [
  { name: "Dr. Deeba Chaudri", image: "/approved-assets/dr-chaudri.png", focus: "Comprehensive optometry · specialty contact lenses", bio: "With more than 15 years in full-scope optometry, Dr. Chaudri brings particular experience in specialty, multifocal, and bifocal contact lens fittings. She founded the practice around personal, thorough care for the full range of everyday and more complex visual needs." },
  { name: "Dr. Lauren Strawn", image: "/approved-assets/dr-strawn.png", focus: "Pediatrics · vision rehabilitation", bio: "Dr. Strawn has practiced in the tri-state area since 2015 and brings focused interests in pediatric eye care and vision rehabilitation. Her background in biology and child-centered care helps families approach changing vision with clarity and patience." },
  { name: "Dr. Ethan Chan", image: "/approved-assets/dr-chan.png", focus: "Dry eye · myopia management · ocular disease", bio: "Dr. Chan earned his Doctorate of Optometry cum laude from Southern California College of Optometry and completed clinical training in VA, university eye-center, and vision-institute settings. His clinical interests include dry eye care, myopia management, contact lenses, preventive eye health, and ocular disease management." },
  { name: "Dr. Tiffany Cong", image: "/approved-assets/dr-cong.png", focus: "Ocular disease · dry eye · specialty contact lenses", bio: "Dr. Cong earned her Doctorate of Optometry from the Pennsylvania College of Optometry and trained across eye-care, corneal, and VA settings. Her clinical interests include ocular disease management, dry eye and IPL conversations, myopia management, and specialty contact lens fitting." },
  { name: "Dr. Serena Lu", image: "/approved-assets/dr-lu.png", focus: "Dry eye · myopia management · preventive vision care", bio: "A board-certified optometrist and native New Yorker, Dr. Lu earned her Doctorate of Optometry from SUNY College of Optometry. She is especially interested in dry eye care, myopia management, contact lenses, and preventive vision care—and in making sure each patient feels heard and informed." },
] as const;
const patientTools = [
  { title: "Patient portal", description: "Access the current patient portal.", href: "https://www.crystalpm.com/PatientPortal.jsp?crystalpmid=2054", external: true },
  { title: "Online forms", description: "Access current new-patient, release, and background-information forms before your visit.", href: "https://www.cosmopolitaneyecare.com/patient-forms.html", external: true },
  { title: "Insurance & payments", description: "Review current payment options and how vision insurance differs from medical insurance.", href: "https://www.cosmopolitaneyecare.com/payment-options.html", external: true },
  { title: "Doctor referrals", description: "Use the current referral destination for referring providers and patients.", href: "https://www.cosmopolitaneyecare.com/doctor-referrals.html", external: true },
] as const;
const testimonials = [
  { quote: "The doctors are very personable and understanding. They take their time evaluating your condition.", name: "Asia Aziz" },
  { quote: "Dr. Chan went above and beyond to be informative and detailed with my fitting.", name: "Yiwa ‘Kiwi’ Wang" },
  { quote: "Dr. Chaudri was friendly, thorough, informative and took time to answer all my questions.", name: "Mark Wuillamey" },
] as const;
const pageAccents: Partial<Record<keyof typeof pages, { word: string }>> = {
  "our-practice": { word: "Perspective" },
  "meet-the-doctors": { word: "Expertise" },
  "patient-resources": { word: "Clarity" },
  contact: { word: "Midtown" },
};
export function generateStaticParams() { return Object.keys(pages).filter((page) => page !== "contact" && page !== "testimonials").map((page) => ({ page })); }
export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ page: keyof typeof pages }> }): Promise<Metadata> {
  const { page } = await params;
  return { title: `${pages[page].eyebrow} | Cosmopolitan Eyecare`, description: pages[page].lede };
}

export default async function CorePage({ params }: { params: Promise<{ page: keyof typeof pages }> }) {
  const { page } = await params;
  const item = pages[page];
  const accent = pageAccents[page];
  return <><InnerHeader /><main id="main-content" className="detail-page core-page"><PageStructuredData name={`${item.eyebrow} | Cosmopolitan Eyecare`} description={item.lede} path={`/${page}`} breadcrumb={item.eyebrow} /><section className="core-hero"><Link href="/" className="back-link">← Cosmopolitan Eyecare</Link><p className="kicker">{item.eyebrow}</p><h1>{item.title}</h1><p className="detail-lede">{item.lede}</p></section><section className="detail-band"><p className="section-label">THE PRACTICE</p><div><h2>{item.heading}</h2><p>{item.copy}</p></div></section>{accent && <div className={`interior-visual ${page}-visual`} aria-hidden="true"><span>{accent.word}</span><i /></div>}{page === "services" && <section className="service-groups"><p className="section-label">FULL CARE INVENTORY</p>{serviceGroups.map(([group, services]) => <article key={group}><h3>{group}</h3><ul>{services.map((service) => <li key={service}><Link href={`/care/${serviceSlug(service)}`}>{service}</Link></li>)}</ul></article>)}</section>}{page === "meet-the-doctors" && <section className="team-list"><p className="section-label">THE TEAM</p>{team.map((doctor, index) => <article key={doctor.name}><span>0{index + 1}</span><Image className="team-photo" src={doctor.image} alt={doctor.name} width={180} height={180} /><div><h3>{doctor.name}</h3><p>{doctor.focus}</p><p className="team-bio">{doctor.bio}</p></div></article>)}</section>}{page === "patient-resources" && <section className="patient-tools"><p className="section-label">PATIENT TOOLS</p>{patientTools.map((tool, index) => <a href={tool.href} target="_blank" rel="noreferrer" key={tool.title}><span>0{index + 1}</span><h3>{tool.title}</h3><p>{tool.description} <b>↗</b></p></a>)}</section>}{page === "testimonials" && <section className="testimonial-grid"><p className="section-label">FROM CURRENT PATIENT REVIEWS</p>{testimonials.map((review) => <figure key={review.name}><blockquote>“{review.quote}”</blockquote><figcaption>{review.name}</figcaption></figure>)}</section>}{page === "contact" && <section className="visit-details"><p className="section-label">VISIT HOURS</p><div><p><strong>Monday</strong> 10:00 AM–6:00 PM</p><p><strong>Tuesday & Wednesday</strong> 10:00 AM–7:00 PM</p><p><strong>Thursday & Friday</strong> 10:00 AM–6:00 PM</p><p><strong>Saturday & Sunday</strong> 10:00 AM–4:00 PM</p><p><strong>Fax</strong> (212) 504-8257</p><p><a href="https://maps.app.goo.gl/JCuUL9935ZF4yxYW8" target="_blank" rel="noreferrer">Open in Google Maps ↗</a></p></div></section>}{page === "contact" && <section className="social-section"><p className="section-label">STAY CONNECTED</p><h2>Follow Cosmopolitan</h2><p>News, practice updates, and a closer look at eye care in Midtown Manhattan.</p><SocialIconLinks /></section>}<section className="path-links"><p className="section-label">KEEP EXPLORING</p>{item.links.map(([label, href], index) => <Link href={href} key={href}><span>0{index + 1}</span>{label}<b>↗</b></Link>)}</section></main><InnerFooter /></>;
}
