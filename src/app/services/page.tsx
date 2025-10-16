"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Shield, Zap, Layers, ClipboardCheck, CheckCircle2 } from "lucide-react"
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
      icon: Building2,
      title: "Structural Design",
      description: "Comprehensive structural engineering solutions for residential, commercial, and industrial projects.",
      details: [
        "Load-bearing capacity analysis",
        "Foundation design and engineering",
        "Steel and concrete structure design",
        "Multi-story building design",
        "Industrial facility structures"
      ]
    },
    {
      icon: Shield,
      title: "Retrofitting",
      description: "Expert retrofitting services to strengthen and modernize existing structures.",
      details: [
        "Structural assessment and evaluation",
        "Seismic retrofitting solutions",
        "Foundation strengthening",
        "Historic building preservation",
        "Code compliance upgrades"
      ]
    },
    {
      icon: Zap,
      title: "Earthquake-Resistant Design",
      description: "Advanced seismic design ensuring safety and compliance with latest standards.",
      details: [
        "Seismic hazard analysis",
        "Base isolation systems",
        "Energy dissipation devices",
        "Performance-based design",
        "Code-compliant solutions"
      ]
    },
    {
      icon: Layers,
      title: "BIM Modeling",
      description: "State-of-the-art Building Information Modeling for efficient project planning.",
      details: [
        "3D structural modeling",
        "Clash detection and coordination",
        "Quantity takeoff and estimation",
        "4D construction sequencing",
        "As-built documentation"
      ]
    },
    {
      icon: ClipboardCheck,
      title: "Construction Supervision",
      description: "Professional oversight ensuring quality and adherence to engineering specifications.",
      details: [
        "On-site quality control",
        "Progress monitoring",
        "Material testing coordination",
        "RFI and submittal reviews",
        "Final inspection and certification"
      ]
    }
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section with Sliding Carousel */}
      <section className="relative min-h-[50vh] flex items-center justify-center bg-gradient-to-r from-[#1F3B64] to-[#1F3B64] text-white pt-20 overflow-hidden">
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
        
        <div className="relative w-full px-6 lg:px-12 py-24 text-center z-10">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Our Services
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C7CF] max-w-3xl mx-auto">
            Comprehensive engineering solutions backed by expertise and innovation
          </p>
        </div>
      </section>

      {/* Services Detail Section */}
      <section className="py-20 bg-white">
        <div className="w-full px-6 lg:px-12">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`grid md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                  <Card className="shadow-xl border-none bg-gradient-to-br from-white to-gray-50 hover:shadow-2xl transition-shadow">
                    <CardHeader>
                      <div className="w-16 h-16 bg-[#1F3B64] rounded-lg flex items-center justify-center mb-4">
                        <service.icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-3xl text-[#1F3B64]">{service.title}</CardTitle>
                      <CardDescription className="text-lg text-[#7C8A97] mt-2">
                        {service.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <h4 className="font-semibold text-[#1F3B64] mb-3">Key Offerings:</h4>
                      <ul className="space-y-2">
                        {service.details.map((detail, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle2 className="w-5 h-5 text-[#1F3B64] mt-0.5 flex-shrink-0" />
                            <span className="text-[#7C8A97]">{detail}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </div>
                <div className={`relative h-96 rounded-lg overflow-hidden shadow-xl ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                  <img 
                    src={`https://images.unsplash.com/photo-${
                      index === 0 ? '1503387762-592deb58ef4e' :
                      index === 1 ? '1541888946425-d81bb19240f5' :
                      index === 2 ? '1590069261209-f8e9b8642343' :
                      index === 3 ? '1454165804606-c3d57bc86b40' :
                      '1581094794329-c8112a89af12'
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
      <section className="py-20 bg-[#1F3B64] text-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-xl text-[#C0C7CF] mb-8">
            Our team of expert engineers is ready to bring your vision to life with precision and excellence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-[#1F3B64] hover:bg-gray-100 text-lg px-8">
              <Link href="/#contact">
                Request a Consultation
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-2 border-white text-white hover:bg-white hover:text-[#1F3B64] text-lg px-8">
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