"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Building } from "lucide-react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ProjectsPage() {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const heroImages = [
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920",
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920",
    "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=1920"
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const projects = [
    {
      title: "Downtown Commercial Tower",
      location: "New York, NY",
      year: "2023",
      category: "Commercial",
      description: "40-story mixed-use tower featuring advanced seismic design and sustainable engineering solutions.",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800",
      services: ["Structural Design", "BIM Modeling", "Construction Supervision"]
    },
    {
      title: "Riverside Residential Complex",
      location: "San Francisco, CA",
      year: "2022",
      category: "Residential",
      description: "Luxury residential complex with earthquake-resistant design and modern architectural features.",
      image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800",
      services: ["Earthquake-Resistant Design", "Structural Design"]
    },
    {
      title: "Historic Building Retrofit",
      location: "Boston, MA",
      year: "2023",
      category: "Retrofitting",
      description: "Comprehensive seismic retrofitting of a century-old landmark building while preserving its architectural integrity.",
      image: "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?w=800",
      services: ["Retrofitting", "Structural Assessment"]
    },
    {
      title: "Industrial Manufacturing Facility",
      location: "Chicago, IL",
      year: "2022",
      category: "Industrial",
      description: "State-of-the-art manufacturing facility with heavy load-bearing structures and advanced material handling systems.",
      image: "https://images.unsplash.com/photo-1565008576549-57569a49371d?w=800",
      services: ["Structural Design", "Construction Supervision"]
    },
    {
      title: "University Science Building",
      location: "Austin, TX",
      year: "2023",
      category: "Educational",
      description: "Modern research facility with specialized laboratory spaces and sustainable design features.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?w=800",
      services: ["Structural Design", "BIM Modeling"]
    },
    {
      title: "Healthcare Center Expansion",
      location: "Seattle, WA",
      year: "2022",
      category: "Healthcare",
      description: "Critical care facility expansion with stringent safety standards and seismic resilience.",
      image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800",
      services: ["Structural Design", "Earthquake-Resistant Design"]
    },
    {
      title: "Transit Hub Renovation",
      location: "Los Angeles, CA",
      year: "2023",
      category: "Infrastructure",
      description: "Major transportation hub modernization with enhanced structural capacity and safety features.",
      image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800",
      services: ["Retrofitting", "Structural Design", "BIM Modeling"]
    },
    {
      title: "Waterfront Office Complex",
      location: "Miami, FL",
      year: "2022",
      category: "Commercial",
      description: "Premium office development with advanced wind-resistant design and sustainable features.",
      image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800",
      services: ["Structural Design", "Construction Supervision"]
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
            Our Projects
          </h1>
          <p className="text-xl md:text-2xl text-[#C0C7CF] max-w-3xl mx-auto">
            Showcasing excellence in structural engineering across diverse sectors
          </p>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="w-full px-6 lg:px-12">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card 
                key={index}
                className="overflow-hidden border-none shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === index ? 'scale-110' : 'scale-100'
                    }`}
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-[#1F3B64] to-transparent transition-opacity duration-300 ${
                    hoveredProject === index ? 'opacity-90' : 'opacity-60'
                  }`}></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <Badge className="bg-[#1F3B64] text-white mb-2">{project.category}</Badge>
                    <h3 className="text-white font-bold text-xl">{project.title}</h3>
                  </div>
                </div>
                <CardHeader>
                  <div className="flex items-center space-x-4 text-sm text-[#7C8A97] mb-2">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{project.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{project.year}</span>
                    </div>
                  </div>
                  <CardDescription className="text-[#7C8A97]">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {project.services.map((service, idx) => (
                      <Badge key={idx} variant="outline" className="border-[#1F3B64] text-[#1F3B64]">
                        {service}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-[#1F3B64] text-white">
        <div className="w-full px-6 lg:px-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-5xl font-bold text-white mb-2">2000+</div>
              <div className="text-[#C0C7CF]">Projects Completed</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">25+</div>
              <div className="text-[#C0C7CF]">Happy Clients</div>
            </div>
            <div>
              <div className="text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-[#C0C7CF]">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}