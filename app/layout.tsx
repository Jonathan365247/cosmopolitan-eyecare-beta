import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Website Beta Foundation",
  description: "A protected preview foundation for a considered website beta.",
  robots: { index: false, follow: false }
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>;
}
