import type { Metadata } from "next";
import { PracticeStructuredData } from "../components/PracticeStructuredData";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cosmopolitan Eyecare | Midtown Manhattan",
  description: "Personalized eye care, dry eye treatment, specialty contact lenses, and ocular aesthetics in Midtown Manhattan.",
  robots: { index: false, follow: false },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PracticeStructuredData /><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
