"use client"

import React from "react"
import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { 
  Building2, Shield, Users, Award, Target, TrendingUp, 
  CheckCircle2, ArrowRight, Lightbulb, Heart, Globe, 
  Hammer, HardHat, Ruler, Calculator, Briefcase, GraduationCap,
  Trophy, Star, Zap, Clock, ThumbsUp, Sparkles
} from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Image from "next/image"

export default function AboutPage() {
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0,
    team: 0
  })

  const [currentValueIndex, setCurrentValueIndex] = useState(0)

  const values = [
    {
      icon: Target,
      title: "Precision Engineering",
      description: "Every calculation, every detail matters. We apply meticulous precision to ensure structural integrity and optimal performance in all our projects.",
      color: "from-blue-500 to-indigo-600",
      image: "https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80"
    },
    {
      icon: Lightbulb,
      title: "Innovation First",
      description: "Leveraging cutting-edge technology and sustainable practices to deliver forward-thinking engineering solutions that shape the future.",
      color: "from-yellow-500 to-orange-600",
      image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80"
    },
    {
      icon: Shield,
      title: "Safety & Compliance",
      description: "Uncompromising commitment to safety standards and regulatory compliance, ensuring every structure meets the highest industry benchmarks.",
      color: "from-green-500 to-emerald-600",
      image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80"
    },
    {
      icon: Heart,
      title: "Client-Centric Approach",
      description: "Building lasting relationships through transparent communication, dedicated support, and unwavering commitment to client satisfaction.",
      color: "from-red-500 to-pink-600",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80"
    },
    {
      icon: TrendingUp,
      title: "Excellence Delivered",
      description: "Consistently exceeding expectations with superior results that stand the test of time, delivered on schedule and within budget.",
      color: "from-purple-500 to-violet-600",
      image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80"
    },
    {
      icon: Globe,
      title: "Sustainable Solutions",
      description: "Committed to environmentally responsible engineering practices that minimize impact while maximizing efficiency and durability.",
      color: "from-cyan-500 to-teal-600",
      image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=600&q=80"
    }
  ]

  // Auto-carousel for values
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentValueIndex((prev) => (prev + 1) % values.length)
    }, 5000) // Change every 5 seconds

    return () => clearInterval(interval)
  }, [values.length])

  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps
      
      const targets = { projects: 250, clients: 150, experience: 15, team: 25 }
      let step = 0

      const timer = setInterval(() => {
        step++
        const progress = step / steps
        
        setStats({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          experience: Math.floor(targets.experience * progress),
          team: Math.floor(targets.team * progress)
        })

        if (step >= steps) {
          setStats(targets)
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const teamMembers = [
    {
      name: "Dr. Rajesh Kumar",
      role: "Founder & Chief Structural Engineer",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80",
      credentials: "PhD in Structural Engineering, PE, LEED AP",
      specialization: "Seismic Design & High-Rise Structures"
    },
    {
      name: "Priya Sharma",
      role: "Senior Project Manager",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&q=80",
      credentials: "M.Tech Structural Engineering, PMP",
      specialization: "Commercial & Industrial Projects"
    },
    {
      name: "Amit Patel",
      role: "Lead BIM Specialist",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&q=80",
      credentials: "B.Tech Civil, Revit Certified Professional",
      specialization: "3D Modeling & Visualization"
    },
    {
      name: "Sneha Desai",
      role: "Structural Analysis Expert",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&q=80",
      credentials: "M.Eng Structural Engineering",
      specialization: "FEA & Load Analysis"
    }
  ]

  const milestones = [
    { year: "2009", title: "Foundation", description: "GenEngg established with a vision to revolutionize structural engineering" },
    { year: "2012", title: "ISO Certification", description: "Achieved ISO 9001:2015 quality management certification" },
    { year: "2015", title: "Major Expansion", description: "Expanded team to 15+ engineers, opened second office" },
    { year: "2018", title: "100+ Projects", description: "Successfully delivered 100th major infrastructure project" },
    { year: "2020", title: "BIM Excellence", description: "Became certified BIM Level 2 consultancy" },
    { year: "2022", title: "Sustainability Leader", description: "Recognized as leader in sustainable engineering practices" },
    { year: "2024", title: "250+ Milestone", description: "Celebrating 250+ successful projects and 15 years of excellence" }
  ]

  const certifications = [
    { name: "ISO 9001:2015", description: "Quality Management" },
    { name: "AISC Certified", description: "Steel Construction" },
    { name: "LEED Certified", description: "Green Building" },
    { name: "BIM Level 2", description: "Building Information" },
    { name: "OSHA Compliant", description: "Safety Standards" },
    { name: "PE Licensed", description: "Professional Engineer" }
  ]

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section - Minimal and Elegant with Blue Background */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#e6f0ff] to-[#dce8ff]">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #1F3B64 40px, #1F3B64 41px),
                             repeating-linear-gradient(90deg, transparent, transparent 40px, #1F3B64 40px, #1F3B64 41px)`
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-96 h-96 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-indigo-200/20 to-blue-200/20 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-32 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="mb-6"
          >
            <p className="text-sm md:text-base tracking-[0.3em] text-gray-400 font-light uppercase">
              About GenEngg
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-light text-[#1F3B64] mb-8 leading-tight tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            We excel in<br />
            <motion.span 
              className="font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              engineering excellence
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1 }}
          >
            since 2009
          </motion.p>
        </div>

        {/* Floating Stats - Minimalist */}
        <div className="absolute bottom-12 left-0 right-0 z-20">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.4 }}
              ref={statsRef}
              className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
            >
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-[#1F3B64] mb-2">{stats.projects}+</div>
                <div className="text-xs md:text-sm text-gray-500 font-light tracking-wide uppercase">Projects Completed</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-[#1F3B64] mb-2">{stats.clients}+</div>
                <div className="text-xs md:text-sm text-gray-500 font-light tracking-wide uppercase">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-[#1F3B64] mb-2">{stats.experience}+</div>
                <div className="text-xs md:text-sm text-gray-500 font-light tracking-wide uppercase">Years of Expertise</div>
              </div>
              <div className="text-center">
                <div className="text-4xl lg:text-5xl font-light text-[#1F3B64] mb-2">{stats.team}+</div>
                <div className="text-xs md:text-sm text-gray-500 font-light tracking-wide uppercase">Expert Engineers</div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section id="our-story" className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6">
                <Sparkles className="w-4 h-4" />
                OUR JOURNEY
              </div>
              
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                A Legacy of
                <span className="block text-[#1F3B64]">Engineering Excellence</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Founded in 2009 by Dr. Rajesh Kumar, GenEngg began with a singular vision: to redefine 
                  structural engineering through innovation, precision, and unwavering commitment to excellence. 
                  What started as a small consultancy has grown into one of the region's most trusted engineering firms.
                </p>
                
                <p>
                  Over the past 15 years, we've had the privilege of working on some of the most challenging 
                  and prestigious projects in the industry. From towering skyscrapers to complex industrial 
                  facilities, from earthquake-resistant residential complexes to heritage structure retrofitting – 
                  each project has strengthened our expertise and deepened our commitment.
                </p>

                <p>
                  Today, GenEngg stands as a testament to what dedicated professionals can achieve when 
                  they combine technical mastery with genuine passion for their craft. Our team of 25+ 
                  certified engineers brings together decades of collective experience, cutting-edge technology, 
                  and innovative thinking to deliver solutions that exceed expectations.
                </p>
              </div>

              <div className="mt-10 grid grid-cols-2 gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">Industry Leader</div>
                    <div className="text-sm text-gray-600">Award-winning firm</div>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                    <ThumbsUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="font-bold text-gray-900 text-xl">100% Satisfaction</div>
                    <div className="text-sm text-gray-600">Client success rate</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=600&q=80" 
                      alt="Construction site" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" 
                      alt="Engineering team" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
                <div className="space-y-4 mt-8">
                  <div className="relative h-48 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80" 
                      alt="Blueprint planning" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="relative h-64 rounded-2xl overflow-hidden shadow-xl">
                    <img 
                      src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80" 
                      alt="Modern structure" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Floating Badge */}
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-xl flex items-center justify-center">
                    <Trophy className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-gray-900">15 Years</div>
                    <div className="text-sm text-gray-600">Engineering Excellence</div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section - Horizontal Carousel */}
      <section className="relative py-24 lg:py-32 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-sm tracking-[0.3em] text-gray-400 font-light uppercase mb-4">
              Our Core Values
            </p>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-[#1F3B64] mb-6 leading-tight">
              Principles That
              <span className="block font-bold">Drive Our Success</span>
            </h2>
          </motion.div>

          {/* Horizontal Carousel */}
          <div className="relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Side - Values Content */}
              <motion.div
                key={currentValueIndex}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 30 }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                {/* Icon and Number */}
                <div className="flex items-center gap-6">
                  <div className={`w-20 h-20 bg-gradient-to-br ${values[currentValueIndex].color} rounded-2xl flex items-center justify-center shadow-xl`}>
                    {React.createElement(values[currentValueIndex].icon, { className: "w-10 h-10 text-white" })}
                  </div>
                  <div className="text-6xl font-light text-gray-200">
                    0{currentValueIndex + 1}
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-4xl md:text-5xl font-light text-[#1F3B64]">
                  <span className="font-bold">{values[currentValueIndex].title.split(' ')[0]}</span>{' '}
                  {values[currentValueIndex].title.split(' ').slice(1).join(' ')}
                </h3>

                {/* Description */}
                <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                  {values[currentValueIndex].description}
                </p>

                {/* Carousel Indicators */}
                <div className="flex items-center gap-3 pt-8">
                  {values.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentValueIndex(index)}
                      className={`relative h-1 transition-all duration-500 rounded-full ${
                        index === currentValueIndex 
                          ? 'w-16 bg-[#1F3B64]' 
                          : 'w-8 bg-gray-300 hover:bg-gray-400'
                      }`}
                      aria-label={`Go to value ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Navigation Dots with Labels */}
                <div className="grid grid-cols-3 gap-4 pt-4">
                  {values.slice(0, 6).map((value, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentValueIndex(index)}
                      className={`text-left p-3 rounded-lg transition-all duration-300 ${
                        index === currentValueIndex
                          ? 'bg-blue-50 border border-[#1F3B64]'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                    >
                      <div className={`text-xs font-semibold mb-1 ${
                        index === currentValueIndex ? 'text-[#1F3B64]' : 'text-gray-500'
                      }`}>
                        {value.title}
                      </div>
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Right Side - Image */}
              <motion.div
                key={`img-${currentValueIndex}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  <img 
                    src={values[currentValueIndex].image}
                    alt={values[currentValueIndex].title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1F3B64]/30 via-transparent to-transparent"></div>
                  
                  {/* Floating Counter Badge */}
                  <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-2xl px-6 py-4 shadow-xl">
                    <div className="text-4xl font-bold text-[#1F3B64]">
                      {currentValueIndex + 1}/{values.length}
                    </div>
                  </div>
                </div>

                {/* Decorative Element */}
                <div className={`absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br ${values[currentValueIndex].color} rounded-3xl opacity-20 blur-2xl -z-10`}></div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline / Milestones Section */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6">
              <Clock className="w-4 h-4" />
              OUR JOURNEY
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Milestones That
              <span className="block text-[#1F3B64]">Define Our Legacy</span>
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-200 via-indigo-200 to-blue-200"></div>

            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <div className="bg-white rounded-2xl shadow-xl p-8 hover:shadow-2xl transition-shadow duration-300 border-l-4 border-[#1F3B64]">
                      <div className="text-3xl font-bold text-[#1F3B64] mb-2">{milestone.year}</div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-3">{milestone.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>

                  <div className="relative z-10 flex-shrink-0">
                    <div className="w-16 h-16 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-full flex items-center justify-center shadow-xl border-4 border-white">
                      <Zap className="w-8 h-8 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 hidden lg:block"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="relative py-24 lg:py-32 bg-gradient-to-br from-gray-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <Users className="w-4 h-4" />
              OUR LEADERSHIP TEAM
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Meet the Experts
              <span className="block bg-gradient-to-r from-[#1F3B64] via-[#003366] to-[#1F3B64] bg-clip-text text-transparent">
                Behind Our Success
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our team of certified professionals brings together decades of experience, 
              innovative thinking, and unwavering commitment to excellence.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <Card className="border-0 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 bg-white rounded-3xl overflow-hidden">
                  <div className="relative h-72 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                  
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <div className="text-[#1F3B64] font-semibold mb-3">{member.role}</div>
                    <div className="text-sm text-gray-600 mb-3">{member.credentials}</div>
                    <div className="flex items-start space-x-2">
                      <GraduationCap className="w-4 h-4 text-[#1F3B64] mt-0.5 flex-shrink-0" />
                      <div className="text-sm text-gray-700">{member.specialization}</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications & Accreditations */}
      <section className="relative py-24 lg:py-32 bg-gradient-to-br from-[#1F3B64] to-[#003366] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 50px, #fff 50px, #fff 51px),
                             repeating-linear-gradient(90deg, transparent, transparent 50px, #fff 50px, #fff 51px)`
          }}></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-white/20">
              <Award className="w-4 h-4" />
              CERTIFICATIONS & ACCREDITATIONS
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Industry-Leading
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                Certifications & Standards
              </span>
            </h2>
            
            <p className="text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
              Our commitment to excellence is validated by industry-leading certifications and 
              adherence to the highest professional standards.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-center hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-8 h-8 text-white" />
                </div>
                <div className="font-bold text-white mb-1">{cert.name}</div>
                <div className="text-sm text-gray-300">{cert.description}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 lg:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  Ready to Start Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Next Project?
                  </span>
                </h2>
                
                <p className="text-xl text-gray-200 mb-10 leading-relaxed">
                  Let's discuss how our expertise can bring your vision to life. 
                  Get in touch with our team today for a consultation.
                </p>

                <div className="flex flex-wrap gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#1F3B64] hover:bg-gray-100 font-semibold rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = '/'}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1F3B64] font-semibold rounded-full px-8 py-6 text-lg transition-all duration-300 hover:scale-105"
                    onClick={() => window.location.href = '/projects'}
                  >
                    View Projects
                  </Button>
                </div>
              </div>

              <div className="relative h-64 lg:h-auto">
                <img 
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80" 
                  alt="Construction project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#1F3B64]/50 to-transparent"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
