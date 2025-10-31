export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Gen Engineering INC",
    "alternateName": "GenEngg",
    "description": "Professional structural engineering, steel detailing, BIM services, and connection design. AISC certified with ISO 9001:2015-aligned quality processes.",
    "url": "https://www.genengg.com",
    "logo": "https://www.genengg.com/logo.png",
    "image": "https://www.genengg.com/logo.png",
    "telephone": "+1-302-499-2050",
    "email": "info@genengg.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "16192 Coastal Highway",
      "addressLocality": "Lewes",
      "addressRegion": "DE",
      "postalCode": "19958",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "38.7750",
      "longitude": "-75.1450"
    },
    "areaServed": {
      "@type": "Place",
      "name": "Worldwide"
    },
    "foundingDate": "2013",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "15+"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "25"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
    "sameAs": [
      "https://www.linkedin.com/company/gen-engineering-inc",
      "https://www.facebook.com/genengineeringinc",
      "https://twitter.com/genengineeringinc"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Structural Steel Detailing",
            "description": "Complete structural steel detailing solutions in compliance with AISC, OSHA, BS, Canadian, European, South African, and Indian standards."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "BIM Services",
            "description": "Building Information Modeling solutions for multidisciplinary coordination and project integration throughout the construction lifecycle."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Connection Design",
            "description": "Structural steel connection design services in accordance with British, American, and Canadian standards."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Rebar Detailing",
            "description": "Precise rebar detailing services focused on accuracy, cost-efficiency, and constructability."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Estimation & Take-Off",
            "description": "Accurate material take-offs for structural and miscellaneous steel with comprehensive detailing schedules."
          }
        }
      ]
    },
    "award": [
      "AISC Certified",
      "ISO 9001:2015-Aligned",
      "NISD Member",
      "BIM-Compliant",
      "OSHA Compliant"
    ]
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
    />
  )
}
