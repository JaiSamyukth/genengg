"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Shield, Zap, Layers, ClipboardCheck, CheckCircle2, ArrowRight } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  })

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)

  const backgroundImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920",
    "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1920",
    "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=1920",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % backgroundImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [backgroundImages.length])

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
  }

  const services = [
    {
      icon: Building2,
      title: "Structural Design",
      description: "Comprehensive structural engineering solutions for residential, commercial, and industrial projects."
    },
    {
      icon: Shield,
      title: "Retrofitting",
      description: "Expert retrofitting services to strengthen and modernize existing structures."
    },
    {
      icon: Zap,
      title: "Earthquake-Resistant Design",
      description: "Advanced seismic design ensuring safety and compliance with latest standards."
    },
    {
      icon: Layers,
      title: "BIM Modeling",
      description: "State-of-the-art Building Information Modeling for efficient project planning."
    },
    {
      icon: ClipboardCheck,
      title: "Construction Supervision",
      description: "Professional oversight ensuring quality and adherence to engineering specifications."
    }
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section with Parallax */}
      <section className="relative min-h-screen flex items-end justify-center text-white overflow-hidden">
        {/* Animated Background Images - Side by Side Sliding Carousel with Parallax */}
        <div 
          className="absolute inset-0 w-full h-full"
          style={{
            transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        >
          <AnimatePresence initial={false}>
            <motion.div
              key={currentImageIndex}
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{ duration: 1.2, ease: "easeInOut" }}
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url('${backgroundImages[currentImageIndex]}')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center'
              }}
            />
          </AnimatePresence>
        </div>
        
        {/* Dark overlay for text readability */}
        <div 
          className="absolute inset-0 w-full h-full bg-black/40 pointer-events-none"
          style={{
            transform: `translate3d(0, ${scrollY * 0.5}px, 0)`,
            willChange: 'transform',
            transition: 'transform 0.1s ease-out'
          }}
        ></div>

        {/* Foreground Content */}
        <div className="relative w-full min-h-screen flex items-end justify-center pt-24 pb-0 z-10">
          <div className="w-full bg-white py-16 px-6 lg:px-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[#002060] uppercase tracking-wider leading-tight">
              Engineering Excellence,
              <br />
              Built to Last
            </h1>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-20 bg-white">
        {/* Section Heading Button */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#1F3B64] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            About Us
          </div>
        </div>
        
        <div className="w-full px-6 lg:px-12 pt-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-[#1F3B64] mb-6">About GenEngg</h2>
              <p className="text-lg text-[#7C8A97] mb-4">
                GenEngg is a leading structural engineering and commercial real estate consultancy firm with a proven track record of delivering exceptional results.
              </p>
              <p className="text-lg text-[#7C8A97] mb-6">
                Our team of experienced engineers combines technical expertise with innovative thinking to provide comprehensive solutions for structural design, retrofitting, earthquake-resistant design, BIM modeling, and construction supervision.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64]" />
                  <span className="text-[#1F3B64] font-medium">AISC Certified</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64]" />
                  <span className="text-[#1F3B64] font-medium">NISD Member</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64]" />
                  <span className="text-[#1F3B64] font-medium">15+ Years Experience</span>
                </div>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800" 
                alt="Engineering team" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20 bg-gray-50">
        {/* Section Heading Button */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#1F3B64] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Our Services
          </div>
        </div>
        
        <div className="w-full px-6 lg:px-12 pt-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#1F3B64] mb-4">Our Services</h2>
            <p className="text-lg text-[#7C8A97] max-w-2xl mx-auto">
              Comprehensive engineering solutions tailored to your project needs
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-none shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white cursor-pointer">
                <CardHeader>
                  <div className="w-14 h-14 bg-[#1F3B64] rounded-lg flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <CardTitle className="text-xl text-[#1F3B64]">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-[#7C8A97]">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative py-20 bg-white">
        {/* Section Heading Button */}
        <div className="absolute top-6 right-6 z-10">
          <div className="bg-[#1F3B64] text-white px-6 py-3 rounded-full font-semibold shadow-lg">
            Contact
          </div>
        </div>
        
        <div className="max-w-3xl mx-auto px-6 lg:px-12 pt-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-[#1F3B64] mb-4">Get In Touch</h2>
            <p className="text-lg text-[#7C8A97]">
              Ready to start your project? Contact us today for a consultation.
            </p>
          </div>
          <Card className="shadow-xl">
            <CardContent className="pt-6">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-[#1F3B64] mb-2">
                    Full Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="border-[#C0C7CF]"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[#1F3B64] mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="border-[#C0C7CF]"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[#1F3B64] mb-2">
                    Phone Number
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="border-[#C0C7CF]"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-[#1F3B64] mb-2">
                    Project Details
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your project..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="border-[#C0C7CF]"
                  />
                </div>
                <Button type="submit" className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white text-lg py-6 transition-all hover:shadow-lg">
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </main>
  )
}