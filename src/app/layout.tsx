import type { Metadata } from "next";
import "./globals.css";
import VisualEditsMessenger from "../visual-edits/VisualEditsMessenger";
import ErrorReporter from "@/components/ErrorReporter";
import Script from "next/script";
import StructuredData from "@/components/StructuredData";

export const metadata: Metadata = {
  title: "Gen Engineering INC - Professional Structural Steel Detailing, BIM Services & Connection Design | AISC Certified Since 2013",
  description: "Expert structural steel detailing, BIM coordination, and connection design services by AISC-certified engineers. Serving commercial, industrial, and infrastructure projects across USA, Canada, Australia, and India with ISO 9001:2015-aligned quality processes. Over 2000+ successful projects delivered with precision and compliance to AISC, BS, CAN, and European standards.",
  keywords: "structural steel detailing, AISC certified detailing, BIM services, Building Information Modeling, connection design, rebar detailing, steel fabrication drawings, shop drawings, erection drawings, 3D construction modeling, Tekla detailing, steel structure engineering, fabrication planning, clash detection, structural engineering consulting, commercial steel detailing, industrial steel detailing, ISO 9001 engineering, OSHA compliant detailing, Canadian steel standards, British steel standards, infrastructure engineering, mining project engineering, bridge steel detailing, material take-off services, construction documentation, steel estimation services, structural analysis, multidisciplinary coordination, 4D BIM scheduling",
  authors: [{ name: "Gen Engineering INC" }],
  creator: "Gen Engineering INC",
  publisher: "Gen Engineering INC",
  category: "Engineering Services",
  classification: "Professional Services",
  icons: {
    icon: '/favicon.svg',
  },
  metadataBase: new URL('https://www.genengg.com'),
  alternates: {
    canonical: 'https://www.genengg.com',
  },
  openGraph: {
    title: "Gen Engineering INC - Expert Structural Steel Detailing & BIM Services | AISC Certified",
    description: "Professional structural steel detailing and BIM coordination services with 10+ years of experience. AISC certified, ISO 9001:2015-aligned, serving 2000+ successful projects worldwide across commercial, industrial, and infrastructure sectors.",
    url: 'https://www.genengg.com',
    siteName: 'Gen Engineering INC',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: 'https://www.genengg.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Gen Engineering INC - Structural Steel Detailing & BIM Services',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Gen Engineering INC - Structural Steel Detailing & BIM Services",
    description: "AISC certified structural engineering and steel detailing services. Expert BIM coordination, connection design, and fabrication documentation for commercial and industrial projects worldwide.",
    images: ['https://www.genengg.com/twitter-image.jpg'],
    creator: '@genengineeringinc',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
  other: {
    'geo.region': 'US-DE',
    'geo.placename': 'Lewes',
    'geo.position': '38.7750;-75.1450',
    'ICBM': '38.7750, -75.1450',
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