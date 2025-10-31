import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Gen Engineering INC - Structural Steel Detailing & Engineering Services",
  description: "Professional structural engineering, steel detailing, BIM services, and connection design since 2013. AISC certified with 2000+ projects completed. Serving clients worldwide with ISO 9001:2015-aligned quality processes.",
  keywords: "structural steel detailing, AISC certified, BIM services, connection design, rebar detailing, steel fabrication, engineering consulting, 3D modeling, construction engineering",
  authors: [{ name: "Gen Engineering INC" }],
  creator: "Gen Engineering INC",
  publisher: "Gen Engineering INC",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://www.genengg.com'),
  openGraph: {
    title: "Gen Engineering INC - Structural Steel Detailing & Engineering Services",
    description: "Professional structural engineering and steel detailing services with 10+ years of experience. AISC certified, 2000+ projects completed.",
    url: 'https://www.genengg.com',
    siteName: 'Gen Engineering INC',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gen Engineering INC - Structural Steel Detailing",
    description: "Professional structural engineering and steel detailing services. AISC certified with 2000+ projects.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <StructuredData />
      </head>
      <body className="antialiased">
        <ErrorReporter />
        <Script
          src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/scripts//route-messenger.js"
          strategy="afterInteractive"
          data-target-origin="*"
          data-message-type="ROUTE_CHANGE"
          data-include-search-params="true"
          data-only-in-iframe="true"
          data-debug="true"
          data-custom-data='{"appName": "YourApp", "version": "1.0.0", "greeting": "hi"}'
        />
        {children}
        <VisualEditsMessenger />
      </body>
    </html>
  );
}