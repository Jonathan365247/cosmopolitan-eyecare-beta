import type { Metadata } from "next";
import Script from "next/script";
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
  const accessiYesWidgetId = process.env.NEXT_PUBLIC_ACCESSIYES_WIDGET_ID;
  const accessiYesConfig = JSON.stringify({
    iconId: "default",
    color: "#114d89",
    size: 48,
    buttonLabel: "Accessibility options",
    position: { desktop: "bottom-left", mobile: "bottom-left" },
    offset: { desktop: { horizontal: 20, vertical: 20 }, mobile: { horizontal: 16, vertical: 80 } },
    language: { default: "en", selected: ["en", "es", "zh"] },
    keyboard: { enabled: false, key: "a" },
    modules: { statement: { enabled: true, url: `${siteUrl}/accessibility` } },
  });

  return <html lang="en">{accessiYesWidgetId && <Script id="accessiyes-config" strategy="beforeInteractive">{`window._cyA11yConfig = ${accessiYesConfig};`}</Script>}<body><PracticeStructuredData />{accessiYesWidgetId && <Script id="accessiyes-widget" src={`https://cdn-cookieyes.com/widgets/accessibility.js?id=${accessiYesWidgetId}`} strategy="afterInteractive" />}<a className="skip-link" href="#main-content">Skip to content</a>{children}</body></html>;
}
