"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Zap, Layers, ClipboardCheck, CheckCircle2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"

export default function ServicesPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const services = [
    {
      icon: ClipboardCheck,
      title: "Estimation & Take-Off",
      description: "We deliver accurate material take-offs for structural and miscellaneous steel, complete with comprehensive detailing schedules and cost analyses tailored to your project requirements.",
      details: [
        "Material summary lists",
        "Area and linear meter calculations",
        "Non-standard formed member drawings",
        "3D wireframe models for visualization",
        "Preliminary RFIs for project clarity"
      ]
    },
    {
      icon: Building2,
      title: "Structural Steel Detailing",
      description: "Gen Engineering offers complete structural steel detailing solutions in compliance with AISC, OSHA, BS, Canadian, European, South African, and Indian standards. Our expertise spans detailing, fabrication planning, and erection coordination.",
      details: [
        "Comprehensive Bill of Materials (BOM)",
        "Non-standard formed member drawings",
        "Part and assembly drawings",
        "Complete fabrication documentation"
      ]
    },
    {
      icon: Shield,
      title: "Connection Design",
      description: "We provide structural steel connection design services in accordance with British, American, and Canadian standards, ensuring structural integrity and full code compliance.",
      details: [
        "Connection design markup plans",
        "Structural design calculations",
        "Connection sketches and tables"
      ]
    },
    {
      icon: Layers,
      title: "BIM Services",
      description: "Gen Engineering delivers Building Information Modeling solutions for multidisciplinary coordination and project integration throughout the construction lifecycle.",
      details: [
        "3D BIM structural or IFC models for coordination",
        "2D coordination drawings",
        "Quantity and quality estimation",
        "Clash detection reports",
        "4D BIM-based erection scheduling and simulation"
      ]
    },
    {
      icon: Target,
      title: "Rebar Detailing",
      description: "We provide precise rebar detailing services focused on accuracy, cost-efficiency, and constructability to meet your project specifications.",
      details: [
        "Rebar estimation",
        "Rebar shop drawings",
        "Bar bending schedules",
        "Material, assembly, and part lists",
        "As-built drawings"
      ]
    }
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section with Sliding Carousel */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#1F3B64] to-[#1F3B64] text-white pt-20 overflow-hidden">
        {/* Animated Background Images - Sliding Carousel */}
        <div className="absolute inset-0 flex">
          <AnimatePresence initial={false} mode="popLayout">
            <motion.div
              key={currentImageIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center will-change-transform"
              style={{
                backgroundImage: `url('${heroImages[currentImageIndex]}')`
              }}
            />
          </AnimatePresence>
        </div>
        
        <div className="absolute inset-0 bg-black/40"></div>
        
        <div className="relative w-full px-4 sm:px-6 lg:px-12 py-16 sm:py-20 md:py-24 text-center z-10">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-[#C0C7CF] max-w-3xl mx-auto px-4">
            Comprehensive engineering solutions backed by expertise and innovation
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-white">
        <div className="w-full px-4 sm:px-6 lg:px-12">
          <div className="space-y-8 sm:space-y-12 lg:space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-shadow">
                    <CardHeader>
                      <div className="w-12 h-12 sm:w-16 sm:h-16 bg-[#1F3B64] rounded-lg flex items-center justify-center mb-3 sm:mb-4">
                        <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                      </div>
                      <CardTitle className="text-xl sm:text-2xl md:text-3xl text-[#1F3B64]">{service.title}</CardTitle>
                      <CardDescription className="text-sm sm:text-base md:text-lg text-[#7C8A97] mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-sm sm:text-base text-[#1F3B64] mb-2 sm:mb-3">Key Offerings:</h4>
                      <ul className="space-y-1.5 sm:space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-2 sm:space-x-3">
                            <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-[#1F3B64] mt-0.5 flex-shrink-0" />
                            <span className="text-sm sm:text-base text-[#7C8A97]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative h-64 sm:h-80 md:h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1454165804606-c3d57bc86b40' :
                      index === 1 ? '1648937740668-160a34e98653' :
                      index === 2 ? '1678517098615-95d02f7c49ff' :
                      index === 3 ? '1618385455730-2571c38966b7' :
                      '1582540730843-f4418d96ccbe'
                    }?w=800`}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 sm:py-16 lg:py-20 bg-[#1F3B64] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-12 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Ready to Start Your Project?</h2>
          <p className="text-base sm:text-lg md:text-xl text-[#C0C7CF] mb-6 sm:mb-8">
            Our team of expert engineers is ready to bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#1F3B64] hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8">
              <Link href="/contact">
                Request a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1F3B64] text-base sm:text-lg px-6 sm:px-8 bg-transparent">
              <Link href="/projects">
                View Portfolio
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}