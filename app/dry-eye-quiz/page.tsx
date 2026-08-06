import type { Metadata } from "next";
import Link from "next/link";
import { InnerFooter, InnerHeader } from "../../components/InnerChrome";

export const metadata: Metadata = {
  title: "Dry Eye Quiz | Cosmopolitan Eyecare",
  description: "Take Cosmopolitan Eyecare's Dry Eye Quiz.",
};

export default function DryEyeQuizPage() {
  return <>
    <InnerHeader />
    <main id="main-content" className="detail-page quiz-page">
      <section className="quiz-intro">
        <Link href="/dry-eye" className="back-link">← Dry Eye Center</Link>
        <p className="kicker">DRY EYE QUIZ</p>
        <h1>Start with what your eyes are <em>telling you.</em></h1>
      <p className="detail-lede">Answer a few quick questions to help identify common dry eye symptoms and decide whether a consultation may be a helpful next step.</p>
      </section>
      <section className="quiz-frame" aria-label="Cosmopolitan Eyecare Dry Eye Quiz">
        <iframe src="https://uexv7fq5lfc.typeform.com/to/K2A1tFfR" title="Cosmopolitan Eyecare Dry Eye Quiz" loading="lazy" />
      </section>
    </main>
    <InnerFooter />
  </>;
}
