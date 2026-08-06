import Link from "next/link";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";
import { FaqSection } from "../../components/FaqSection";
import { siteUrl } from "../../lib/site-config";

const resources = [
  { category: "Dry eye", title: "Understanding dry eye symptoms", copy: "A patient-friendly starting point for dry, irritated, burning, watery, or changing vision concerns.", href: "/dry-eye" },
  { category: "Contact lenses", title: "Care that starts with the right fit", copy: "Explore the specialty lens pathway and learn how to start a fitting conversation.", href: "/specialty-contact-lenses" },
  { category: "Preventive care", title: "The value of a comprehensive eye exam", copy: "Learn where preventive vision and eye-health care fit into your overall wellness.", href: "/care/comprehensive-eye-exams" },
  { category: "Conditions", title: "Trusted national eye-health information", copy: "Browse broader eye-condition education from the National Eye Institute.", href: "https://www.nei.nih.gov/eye-health-information", external: true },
  { category: "Cosmopolitan archive", title: "Read the practice blog", copy: "Browse the current approved Cosmopolitan Eyecare blog and article archive.", href: "https://www.cosmopolitaneyecare.com/blog.html", external: true },
  { category: "Education library", title: "Explore all approved guides", copy: "Access the practice’s complete current library of eye-health, contact lens, technology, and procedure guides.", href: "https://www.cosmopolitaneyecare.com/sitemap.html", external: true },
] as const;

const categories = [
  { id: "dry-eye", title: "Dry eye & eye comfort", description: "Symptoms, diagnostic conversations, OptiLight IPL, and day-to-day comfort questions.", links: [["Dry Eye Center", "/dry-eye"], ["OptiLight IPL", "/care/optilight-ipl"], ["Dry Eye Quiz", "/dry-eye-quiz"]] },
  { id: "contact-lenses", title: "Contact lenses & specialty fits", description: "Everyday contact lens care, scleral lenses, specialty fittings, and comfort considerations.", links: [["Specialty contact lenses", "/specialty-contact-lenses"], ["Scleral lenses", "/care/scleral-contact-lenses"], ["Contact lens exams", "/care/contact-lens-exams"]] },
  { id: "eye-health", title: "Eye health & common conditions", description: "Preventive care, changing vision, common conditions, and when to seek prompt guidance.", links: [["Comprehensive exams", "/care/comprehensive-eye-exams"], ["Medical eye care", "/care/ocular-disease-management"], ["Urgent eye concerns", "/care/eye-emergencies"]] },
  { id: "vision-correction", title: "Vision correction & changing vision", description: "Myopia management, computer vision, cataracts, LASIK evaluations, and visual changes over time.", links: [["Myopia management", "/care/myopia-management"], ["Computer vision", "/care/computer-vision"], ["LASIK evaluations", "/care/lasik-evaluations"]] },
  { id: "aesthetics", title: "Ocular aesthetics", description: "Educational guidance for eye-area aesthetics and a thoughtful consultation pathway.", links: [["Ocular aesthetics", "/aesthetics"], ["Contact & visit", "/contact"], ["Practice blog", "https://www.cosmopolitaneyecare.com/blog.html"]] },
] as const;

export const metadata = { title: "Eye Health Resources & Guides | Cosmopolitan Eyecare", description: "Explore dry eye, contact lens, preventive eye health, vision correction, and ocular aesthetics resources from Cosmopolitan Eyecare." };

export default function EyeHealthPage() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      { "@type": "BreadcrumbList", itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` }, { "@type": "ListItem", position: 2, name: "Eye Health Resources", item: `${siteUrl}/eye-health` }] },
      { "@type": "CollectionPage", "@id": `${siteUrl}/eye-health#collection`, url: `${siteUrl}/eye-health`, name: "Cosmopolitan Eyecare Resources & Guides", description: "Educational categories and care pathways from Cosmopolitan Eyecare in Midtown Manhattan.", isPartOf: { "@id": `${siteUrl}/#website` }, about: { "@type": "MedicalBusiness", name: "Cosmopolitan Eyecare" }, mainEntity: { "@type": "ItemList", itemListElement: categories.map((category, index) => ({ "@type": "ListItem", position: index + 1, name: category.title, url: `${siteUrl}/eye-health#${category.id}` })) } },
    ],
  };

  return <>
    <InnerHeader />
    <main id="main-content" className="detail-page resource-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <section className="specialty-hero">
        <Link href="/" className="back-link">← Cosmopolitan Eyecare</Link>
        <p className="kicker">EYE HEALTH RESOURCES</p>
        <h1>Better information makes <em>better decisions.</em></h1>
        <p className="detail-lede">Clear, practical eye-health education from Cosmopolitan Eyecare—with organized care pathways and approved archive access when you want to go deeper.</p>
      </section>
      <section className="resource-grid">
        <p className="section-label">START HERE</p>
        {resources.map((resource, index) => resource.href.startsWith("http") ? <a className="resource-card" href={resource.href} target="_blank" rel="noreferrer" key={resource.title}><span>0{index + 1} · {resource.category}</span><h2>{resource.title}</h2><p>{resource.copy}</p><b>↗</b></a> : <Link className="resource-card" href={resource.href} key={resource.title}><span>0{index + 1} · {resource.category}</span><h2>{resource.title}</h2><p>{resource.copy}</p><b>→</b></Link>)}
      </section>
      <section className="resource-categories">
        <p className="section-label">EXPLORE BY TOPIC</p>
        <div>
          {categories.map((category, index) => <article id={category.id} key={category.id}><span>0{index + 1}</span><h2>{category.title}</h2><p>{category.description}</p><nav aria-label={`${category.title} resources`}>{category.links.map(([label, href]) => href.startsWith("http") ? <a href={href} target="_blank" rel="noreferrer" key={href}>{label} ↗</a> : <Link href={href} key={href}>{label} →</Link>)}</nav></article>)}
        </div>
      </section>
      <section className="resource-note"><p className="section-label">A NOTE ON HEALTH INFORMATION</p><p>Educational resources can help you prepare for a conversation, but they do not replace personal medical advice. Contact the practice if you have concerns about your vision or eye comfort.</p><Link href="/contact">Contact the practice →</Link></section>
      <FaqSection items={[
        { question: "Where should I start if I have a new eye concern?", answer: "If you have a new or changing concern, contact the practice and explain what you are experiencing. The team can help you identify the appropriate appointment path." },
        { question: "Can online resources replace an eye exam?", answer: "No. Online information can help you prepare questions, but it cannot diagnose an eye condition or replace a comprehensive examination." },
        { question: "What should I bring to an eye appointment?", answer: "Bring your current glasses or contact lens information, a list of medications, and any questions about changes in your vision or comfort." },
      ]} />
    </main>
    <InnerFooter />
  </>;
}
