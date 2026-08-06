import type { Metadata } from "next";
import { PracticeStructuredData } from "../components/PracticeStructuredData";
import { isIndexable, siteUrl } from "../lib/site-config";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Cosmopolitan Eyecare | Midtown Manhattan",
  description: "Personalized eye care, dry eye treatment, specialty contact lenses, and ocular aesthetics in Midtown Manhattan.",
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: "Cosmopolitan Eyecare", title: "Cosmopolitan Eyecare | Midtown Manhattan", description: "Personalized eye care in Midtown Manhattan." },
  robots: { index: isIndexable, follow: isIndexable },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><PracticeStructuredData /><a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
