export default function StructuredData() {
  // Enhanced Organization Schema for GEO
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": ["ProfessionalService", "Organization", "Corporation"],
    "name": "Gen Engineering INC",
    "alternateName": ["GenEngg", "GEN Engineering INC", "Gen Engineering"],
    "legalName": "Gen Engineering INC",
    "description": "Professional structural engineering, steel detailing, BIM services, and connection design company established in 2013. AISC certified with ISO 9001:2015-aligned quality processes serving clients across United States, Canada, Australia, and India.",
    "slogan": "Shaping the Future of The Built Environment",
    "url": "https://www.genengg.com",
    "logo": {
      "@type": "ImageObject",
      "url": "https://www.genengg.com/logo.png",
      "width": "250",
      "height": "60"
    },
    "image": [
      "https://www.genengg.com/logo.png",
      "https://www.genengg.com/og-image.jpg"
    ],
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
    "areaServed": [
      {
        "@type": "Country",
        "name": "United States"
      },
      {
        "@type": "Country",
        "name": "Canada"
      },
      {
        "@type": "Country",
        "name": "Australia"
      },
      {
        "@type": "Country",
        "name": "India"
      }
    ],
    "serviceArea": {
      "@type": "GeoShape",
      "name": "International"
    },
    "foundingDate": "2013",
    "foundingLocation": {
      "@type": "Place",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Lewes",
        "addressRegion": "DE",
        "addressCountry": "US"
      }
    },
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": 25,
      "minValue": 20,
      "maxValue": 30
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "bestRating": "5",
      "worstRating": "1",
      "reviewCount": "150"
    },
    "priceRange": "$$-$$$",
    "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-14:00",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": "Saturday",
        "opens": "10:00",
        "closes": "14:00"
      }
    ],
    "sameAs": [
      "https://www.linkedin.com/company/gen-engineering-inc",
      "https://www.facebook.com/genengineeringinc",
      "https://twitter.com/genengineeringinc"
    ],
    "knowsAbout": [
      "Structural Engineering",
      "Steel Detailing",
      "Building Information Modeling (BIM)",
      "Connection Design",
      "Rebar Detailing",
      "AISC Standards",
      "3D Construction Modeling",
      "Fabrication Planning",
      "Structural Analysis",
      "Construction Engineering"
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Engineering Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Structural Steel Detailing",
            "name": "Structural Steel Detailing",
            "description": "Complete structural steel detailing solutions in compliance with AISC, OSHA, BS, Canadian, European, South African, and Indian standards. Our expertise spans detailing, fabrication planning, and erection coordination.",
            "provider": {
              "@type": "Organization",
              "name": "Gen Engineering INC"
            },
            "areaServed": "International",
            "availableChannel": {
              "@type": "ServiceChannel",
              "serviceUrl": "https://www.genengg.com/services"
            }
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "BIM Services",
            "name": "Building Information Modeling (BIM) Services",
            "description": "Building Information Modeling solutions for multidisciplinary coordination and project integration throughout the construction lifecycle including 3D BIM models, clash detection, and 4D erection scheduling.",
            "provider": {
              "@type": "Organization",
              "name": "Gen Engineering INC"
            },
            "areaServed": "International"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Connection Design",
            "name": "Structural Steel Connection Design",
            "description": "Structural steel connection design services in accordance with British, American, and Canadian standards, ensuring structural integrity and full code compliance.",
            "provider": {
              "@type": "Organization",
              "name": "Gen Engineering INC"
            },
            "areaServed": "International"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Rebar Detailing",
            "name": "Rebar Detailing Services",
            "description": "Precise rebar detailing services focused on accuracy, cost-efficiency, and constructability including bar bending schedules and shop drawings.",
            "provider": {
              "@type": "Organization",
              "name": "Gen Engineering INC"
            },
            "areaServed": "International"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "serviceType": "Estimation & Take-Off",
            "name": "Material Estimation & Take-Off",
            "description": "Accurate material take-offs for structural and miscellaneous steel with comprehensive detailing schedules, cost analyses, and 3D wireframe models.",
            "provider": {
              "@type": "Organization",
              "name": "Gen Engineering INC"
            },
            "areaServed": "International"
          }
        }
      ]
    },
    "award": [
      "AISC Certified",
      "ISO 9001:2015-Aligned Quality Process",
      "NISD Member",
      "BIM-Compliant",
      "OSHA Compliant"
    ],
    "makesOffer": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Free Project Consultation"
        }
      }
    ]
  }

  // FAQPage Schema for GEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is structural steel detailing?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Structural steel detailing is the process of creating detailed drawings and specifications for the fabrication and erection of steel structures. It involves preparing shop drawings, erection plans, and connection details that comply with engineering designs and industry standards such as AISC, BS, and Canadian codes. Gen Engineering provides comprehensive structural steel detailing services for commercial, industrial, and infrastructure projects worldwide."
        }
      },
      {
        "@type": "Question",
        "name": "What is AISC certification and why is it important?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "AISC (American Institute of Steel Construction) certification demonstrates that a company meets rigorous quality standards for steel fabrication and erection. Gen Engineering INC is AISC certified, which means our processes, personnel, and quality control systems have been independently verified to meet industry-leading standards. This certification ensures clients receive high-quality, code-compliant structural steel detailing services."
        }
      },
      {
        "@type": "Question",
        "name": "What is BIM and how does it benefit construction projects?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Building Information Modeling (BIM) is a digital representation of the physical and functional characteristics of a building. BIM enables multidisciplinary coordination, clash detection, quantity estimation, and 4D scheduling. Gen Engineering provides BIM services including 3D structural models, IFC models for coordination, clash detection reports, and 4D erection scheduling, which reduce errors, improve collaboration, and optimize project timelines."
        }
      },
      {
        "@type": "Question",
        "name": "What industries does Gen Engineering serve?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gen Engineering INC serves diverse industries including industrial facilities, commercial buildings, mining infrastructure, bridge and highway construction, residential projects, and retrofit/renovation work. Our structural engineering and steel detailing expertise applies to any project requiring steel structures, from small commercial buildings to large industrial complexes."
        }
      },
      {
        "@type": "Question",
        "name": "What standards and codes does Gen Engineering follow?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gen Engineering provides services compliant with international standards including AISC (American), BS (British Standards), CAN (Canadian), European codes, OSHA safety standards, South African standards, and Indian standards (IS codes). We also maintain ISO 9001:2015-aligned quality processes to ensure consistent, high-quality deliverables across all projects."
        }
      },
      {
        "@type": "Question",
        "name": "How long does structural steel detailing typically take?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The timeline for structural steel detailing depends on project size and complexity. Small projects may take 2-4 weeks, while large commercial or industrial projects can take 8-16 weeks or more. Gen Engineering works with clients to establish realistic schedules and provides dedicated project management to ensure timely delivery. Contact us with your project details for a specific timeline estimate."
        }
      },
      {
        "@type": "Question",
        "name": "What deliverables are included in steel detailing services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Gen Engineering's structural steel detailing services include comprehensive Bill of Materials (BOM), shop drawings, erection drawings, connection details, anchor bolt plans, part and assembly drawings, material lists, and fabrication documentation. All deliverables are prepared in accordance with project specifications and applicable codes."
        }
      },
      {
        "@type": "Question",
        "name": "Does Gen Engineering provide connection design services?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Gen Engineering provides structural steel connection design services in accordance with American (AISC), British (BS), and Canadian standards. Our services include connection design calculations, markup plans, connection sketches, and design tables. All connection designs ensure structural integrity and code compliance."
        }
      }
    ]
  }

  // WebSite Schema for site-wide search
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Gen Engineering INC",
    "alternateName": "GenEngg",
    "url": "https://www.genengg.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "https://www.genengg.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }

  // BreadcrumbList Schema
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.genengg.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "About",
        "item": "https://www.genengg.com/about"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Services",
        "item": "https://www.genengg.com/services"
      },
      {
        "@type": "ListItem",
        "position": 4,
        "name": "Projects",
        "item": "https://www.genengg.com/projects"
      },
      {
        "@type": "ListItem",
        "position": 5,
        "name": "Contact",
        "item": "https://www.genengg.com/contact"
      }
    ]
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  )
}
