import Link from "next/link";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";
import { FaqSection } from "../../components/FaqSection";
import { SpecialtyDepth, SpecialtyPageStructuredData, SpecialtyPathways } from "../../components/SpecialtyPageSupport";

export const metadata = { title: "Dry Eye Care | Cosmopolitan Eyecare" };

export default function DryEyePage() {
  return <>
    <InnerHeader />
    <main id="main-content" className="detail-page">
      <SpecialtyPageStructuredData name="Dry Eye Care" path="/dry-eye" description="Focused dry eye evaluation, education, and next-step pathways at Cosmopolitan Eyecare in Midtown Manhattan." />
      <section className="specialty-hero dry-eye-hero">
        <Link href="/" className="back-link">← Cosmopolitan Eyecare</Link>
        <p className="kicker">DRY EYE CENTER</p>
        <h1>Relief begins with being <em>heard.</em></h1>
        <p className="detail-lede">Persistent dry, irritated, or tired eyes deserve more than a quick fix. Our dry eye center is designed to help identify the factors behind your symptoms and discuss a thoughtful next step.</p>
      </section>
      <section className="detail-band">
        <p className="section-label">A MORE COMPLETE CONVERSATION</p>
        <div><h2>See beyond the surface.</h2><p>Dry eye can have more than one contributor. A focused visit makes room to talk through your symptoms, visual demands, and eye-health history before discussing a care plan.</p></div>
      </section>
      <SpecialtyDepth label="WHAT A FOCUSED VISIT CONSIDERS" title="The pattern behind your discomfort matters." intro="Dry-eye symptoms can show up differently from one person to the next. A focused conversation helps connect what you feel with the routines, visual demands, and eye-health context that may shape your care." image="/approved-assets/dry-eye-feature.png" imageAlt="A patient with a calm, comfortable expression in soft daylight." topics={[{ label: "SYMPTOMS", title: "Comfort is more than dryness.", copy: "Burning, grittiness, fluctuating vision, redness, watering, and end-of-day fatigue are all worth describing in your own words." }, { label: "DAILY LIFE", title: "Your day gives useful clues.", copy: "Screen time, contact lens habits, air travel, office environments, and the timing of symptoms can help make the conversation more specific." }, { label: "NEXT STEPS", title: "A plan should feel understood.", copy: "The goal is not a generic checklist. It is a clear discussion of the evaluation and care options that may be appropriate for you." }]} />
      <section className="steps">
        <p className="section-label">YOUR PATH</p>
        <ol>
          <li><span>01</span><div><h3>Tell us what is changing</h3><p>Start with the symptoms affecting your everyday life.</p></div></li>
          <li><span>02</span><div><h3>Get a focused evaluation</h3><p>Explore the right clinical conversation with the care team.</p></div></li>
          <li><span>03</span><div><h3>Choose a next step</h3><p>Move forward with a plan that makes sense for you.</p></div></li>
        </ol>
      </section>
      <section className="dry-eye-actions">
        <p className="section-label">START HERE</p>
        <h2>Get a clearer sense of your next step.</h2>
        <p>Use the practice’s approved Dry Eye Quiz or request a consultation directly.</p>
        <div>
          <Link className="service-contact" href="/dry-eye-quiz">Take the Dry Eye Quiz <span>→</span></Link>
          <a className="service-contact service-contact-secondary" href="https://www.cosmopolitaneyecare.com/request-a-dry-eye-consultation.html" target="_blank" rel="noreferrer">Request a consultation <span>↗</span></a>
        </div>
      </section>
      <SpecialtyPathways links={[["Take the Dry Eye Quiz", "/dry-eye-quiz"], ["Learn about OptiLight IPL", "/care/optilight-ipl"], ["Explore eye-health resources", "/eye-health"]]} />
      <FaqSection items={[
        { question: "What are common dry eye symptoms?", answer: "Dry, scratchy, burning, red, or watery eyes and blurry vision can all be associated with dry eye. An eye-care professional can help determine what may be contributing to your symptoms." },
        { question: "When should I schedule a dry eye evaluation?", answer: "If eye discomfort or changing vision is persistent, interferes with daily activities, or concerns you, contact the practice to discuss the most appropriate visit." },
        { question: "Does this page provide medical advice?", answer: "No. This is general educational information and is not a diagnosis or a substitute for a personal evaluation by an eye-care professional." },
      ]} />
    </main>
    <InnerFooter />
  </>;
}
