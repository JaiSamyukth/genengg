"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Building2, Shield, Zap, Layers, ClipboardCheck, CheckCircle2, ArrowRight, Award, Users, Briefcase, TrendingUp, Target, Lightbulb, Hammer, BarChart3, Mail, Phone, MapPin, Send, Clock } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [scrollY, setScrollY] = useState(0)
  const statsRef = useRef(null)
  const isInView = useInView(statsRef, { once: true })
  const [stats, setStats] = useState({
    projects: 0,
    clients: 0,
    experience: 0
  })

  const backgroundImages = [
    "https://images.unsplash.com/photo-1533280385001-c32ffcbd52a7",
    "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=1920",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920"
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

  // Animated counter effect
  useEffect(() => {
    if (isInView) {
      const duration = 2000
      const steps = 60
      const interval = duration / steps
      
      const targets = { projects: 2000, clients: 25, experience: 10 }
      let step = 0

      const timer = setInterval(() => {
        step++
        const progress = step / steps
        
        setStats({
          projects: Math.floor(targets.projects * progress),
          clients: Math.floor(targets.clients * progress),
          experience: Math.floor(targets.experience * progress)
        })

        if (step >= steps) {
          setStats(targets)
          clearInterval(timer)
        }
      }, interval)

      return () => clearInterval(timer)
    }
  }, [isInView])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    setIsSubmitting(false)
    setSubmitStatus('success')
    console.log("Form submitted:", formData)
    
    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", phone: "", message: "", projectType: "" })
      setSubmitStatus('idle')
    }, 3000)
  }

  const services = [
    {
      icon: ClipboardCheck,
      title: "Estimation & Take-Off",
      description: "We deliver accurate material take-offs for structural and miscellaneous steel, complete with comprehensive detailing schedules and cost analyses tailored to your project requirements."
    },
    {
      icon: Building2,
      title: "Structural Steel Detailing",
      description: "Gen Engineering offers complete structural steel detailing solutions in compliance with AISC, OSHA, BS, Canadian, European, South African, and Indian standards. Our expertise spans detailing, fabrication planning, and erection coordination."
    },
    {
      icon: Shield,
      title: "Connection Design",
      description: "We provide structural steel connection design services in accordance with British, American, and Canadian standards, ensuring structural integrity and full code compliance."
    },
    {
      icon: Layers,
      title: "BIM Services",
      description: "Gen Engineering delivers Building Information Modeling solutions for multidisciplinary coordination and project integration throughout the construction lifecycle."
    },
    {
      icon: Target,
      title: "Rebar Detailing",
      description: "We provide precise rebar detailing services focused on accuracy, cost-efficiency, and constructability to meet your project specifications."
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
        <div className="relative w-full min-h-screen flex items-end justify-center pt- pb-0 z-10">
          <div className="w-full bg-white py-4 px-6 lg:px-12 shadow-2xl">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-center text-[#002060] uppercase tracking-wider leading-tight">
              Exceptional Engineering
              <br />
              Solutions That Inspire
            </h1>
          </div>
        </div>
      </section>

      {/* About Section - Full Width Design */}
      <section id="about" className="relative bg-white overflow-hidden">
        <div className="w-full">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center py-20 px-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Shaping the Future of
              <br />
              <span className="text-[#1F3B64]">The Built Environment</span>
            </h2>
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
              GEN Engineering INC is a multidisciplinary engineering consulting company, inaugurated in 2013, serving international clients. Our management team brings over 10 years of experience in 3D construction modelling and steel detailing.
            </p>
          </motion.div>

          {/* Split Section - Image Left, Content Right */}
          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative min-h-[500px] lg:min-h-[600px]"
            >
              <div className="absolute inset-0">
                <img 
                  src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=1920" 
                  alt="Modern engineering project" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              {/* Floating Stats Card */}
              <div className="absolute bottom-8 right-8 bg-white rounded-xl shadow-2xl p-6 max-w-xs">
                <div className="flex items-center space-x-4">
                  <div className="w-16 h-16 bg-[#1F3B64] rounded-lg flex items-center justify-center">
                    <Award className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">10+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center bg-gray-50"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About GEN Engineering INC
              </h3>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                GEN Engineering INC is a multidisciplinary engineering consulting company, inaugurated in 2013, serving international clients to shape the future of the built environment. Our management team brings over 10 years of experience in 3D construction modelling and steel detailing, delivering precision-driven, innovative, and client-focused engineering services.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Our expertise spans structural and miscellaneous steel detailing, connection design, estimation, and BIM services across diverse sectors including industrial, commercial, mining, and infrastructure projects worldwide.
              </p>
              
              {/* Feature List */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">AISC Certified</div>
                    <div className="text-sm text-gray-600">Industry-leading standards</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">2000+ Projects</div>
                    <div className="text-sm text-gray-600">Successfully delivered</div>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <CheckCircle2 className="w-6 h-6 text-[#1F3B64] flex-shrink-0 mt-1" />
                  <div>
                    <div className="font-semibold text-gray-900">ISO 9001:2015-Aligned</div>
                    <div className="text-sm text-gray-600">Quality process</div>
                  </div>
                </div>

              </div>

              <Button 
                size="lg" 
                className="mt-8 bg-[#1F3B64] hover:bg-[#003366] text-white font-semibold rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105"
                onClick={() => window.location.href = '/about'}
              >
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          {/* Stats Counter Section - Full Width */}
          <motion.div 
            ref={statsRef}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-0 border-y border-gray-200"
          >
            <div className="text-center p-12 lg:p-16 border-r border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-[#1F3B64] mb-3">{stats.projects}+</div>
              <div className="text-gray-600 font-medium text-lg">Completed Projects</div>
            </div>
            <div className="text-center p-12 lg:p-16 border-r border-gray-200 hover:bg-gray-50 transition-colors duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-[#1F3B64] mb-3">{stats.clients}+</div>
              <div className="text-gray-600 font-medium text-lg">Happy Clients</div>
            </div>
            <div className="text-center p-12 lg:p-16 hover:bg-gray-50 transition-colors duration-300">
              <div className="text-5xl lg:text-6xl font-bold text-[#1F3B64] mb-3">{stats.experience}+</div>
              <div className="text-gray-600 font-medium text-lg">Years of Expertise</div>
            </div>
          </motion.div>

          {/* Reverse Split Section - Content Left, Image Right */}
          <div className="grid lg:grid-cols-2 gap-0">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-8 lg:px-16 py-16 lg:py-20 flex flex-col justify-center lg:order-1"
            >
              <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
                Core Values That Define Our Excellence
              </h3>
              
              <div className="space-y-8">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Target className="w-6 h-6 text-[#1F3B64]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Precision in Design & Detailing</h4>
                    <p className="text-gray-600">
                      Every calculation and component reflects accuracy and discipline, ensuring structural 
                      integrity and fabrication excellence.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Lightbulb className="w-6 h-6 text-[#1F3B64]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Innovation in Practice</h4>
                    <p className="text-gray-600">
                      Embracing the latest tools and digital workflows to redefine engineering standards and 
                      deliver cutting-edge solutions.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-[#1F3B64]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Client-Centric Approach</h4>
                    <p className="text-gray-600">
                      We focus on becoming the most valuable asset to our clients—not just another service provider, 
                      but a trusted partner in success.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6 text-[#1F3B64]" />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-gray-900 mb-2">Safety & Compliance</h4>
                    <p className="text-gray-600">
                      Ensuring complete adherence to international codes and safety standards in every project 
                      we undertake.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:order-2 min-h-[500px] lg:min-h-[700px]"
            >
              <div className="h-full grid grid-rows-2 gap-0">
                <div className="relative overflow-hidden">
                  <img 
                    src="https://plus.unsplash.com/premium_photo-1663126874108-409fb65c879c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxODIxMzc4fA&ixlib=rb-4.1.0&q=80&w=1080" 
                    alt="Engineering team collaboration" 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="grid grid-cols-2 gap-0">
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://images.unsplash.com/photo-1758599543129-5269a8f29e68?ixlib=rb-4.1.0&q=85&fm=jpg&crop=entropy&cs=srgb&w=1080" 
                      alt="Structural analysis" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="relative overflow-hidden">
                    <img 
                      src="https://plus.unsplash.com/premium_photo-1723759366079-f92eb0aee298?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNzYxODIxMjE1fA&ixlib=rb-4.1.0&q=80&w=1080" 
                      alt="Construction site" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section - Best In Class Design */}
      <section id="services" className="relative py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 left-0 w-96 h-96 bg-indigo-500/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <Zap className="w-4 h-4" />
              OUR SERVICES
            </div>
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 leading-tight">
              Engineering Excellence
              <br />
              <span className="bg-gradient-to-r from-[#1F3B64] via-[#003366] to-[#1F3B64] bg-clip-text text-transparent">
                Built on Precision
              </span>
            </h2>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Delivering accurate, reliable structural steel detailing, connection design, and BIM services that meet international standards and exceed client expectations.
            </p>
          </motion.div>

          {/* Premium Services Grid with Images */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {/* Service 1 - Estimation & Take Off */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                {/* Image Section */}
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=600&q=80" 
                    alt="Estimation & Take Off" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  {/* Icon Badge */}
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <ClipboardCheck className="w-8 h-8 text-[#1F3B64]" />
                  </div>
                  {/* Title Overlay */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Estimation & Take-Off</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-400 to-transparent rounded-full"></div>
                  </div>
                </div>
                {/* Content Section */}
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We deliver accurate material take-offs for structural and miscellaneous steel, complete with comprehensive detailing schedules and cost analyses tailored to your project requirements.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#1F3B64] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 2 - Steel Detailing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=600&q=80" 
                    alt="Steel Detailing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Building2 className="w-8 h-8 text-[#1F3B64]" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Structural Steel Detailing</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-green-400 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Gen Engineering offers complete structural steel detailing solutions in compliance with AISC, OSHA, BS, Canadian, European, South African, and Indian standards. Our expertise spans detailing, fabrication planning, and erection coordination.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#1F3B64] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 3 - Connection Design */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1513467535987-fd81bc7d62f8?w=600&q=80" 
                    alt="Connection Design" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Shield className="w-8 h-8 text-[#1F3B64]" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Connection Design</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-yellow-400 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We provide structural steel connection design services in accordance with British, American, and Canadian standards, ensuring structural integrity and full code compliance in every connection design we produce.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#1F3B64] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 4 - BIM */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80" 
                    alt="BIM Modeling" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Layers className="w-8 h-8 text-[#1F3B64]" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">BIM Services</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-purple-400 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Gen Engineering delivers Building Information Modeling solutions for multidisciplinary coordination and project integration throughout the construction lifecycle.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#1F3B64] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Service 5 - Rebar Detailing */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-white shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=600&q=80" 
                    alt="Rebar Detailing" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  <div className="absolute top-6 right-6 w-16 h-16 bg-white/90 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <Zap className="w-8 h-8 text-[#1F3B64]" />
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-1">Rebar Detailing</h3>
                    <div className="w-16 h-1 bg-gradient-to-r from-orange-400 to-transparent rounded-full"></div>
                  </div>
                </div>
                <div className="p-8">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    We provide precise rebar detailing services focused on accuracy, cost-efficiency, and constructability to meet your project specifications.
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-[#1F3B64] font-semibold group-hover:gap-3 gap-2 transition-all duration-300">
                      <span>Explore Service</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Featured Service Card - Spanning 2 columns on desktop */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="md:col-span-2 lg:col-span-1 group relative"
            >
              <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#1F3B64] to-[#003366] shadow-xl hover:shadow-2xl transition-all duration-500 h-full">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=600&q=80')] bg-cover bg-center opacity-10"></div>
                <div className="relative p-8 lg:p-10 flex flex-col justify-center h-full min-h-[400px]">
                  <div className="w-20 h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-300">
                    <Award className="w-10 h-10 text-white" />
                  </div>
                  <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                    Full-Service Engineering Partnership
                  </h3>
                  <p className="text-lg text-gray-100 mb-8 leading-relaxed">
                    From initial consultation to final delivery, we provide comprehensive engineering support 
                    tailored to your project's unique requirements.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-center text-white">
                      <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 text-green-400" />
                      <span>Dedicated project management</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 text-green-400" />
                      <span>Dedicated technical support</span>
                    </li>
                    <li className="flex items-center text-white">
                      <CheckCircle2 className="w-6 h-6 mr-3 flex-shrink-0 text-green-400" />
                      <span>Quality assurance at every stage</span>
                    </li>
                  </ul>
                  <Button 
                    size="lg" 
                    className="bg-white text-[#1F3B64] hover:bg-gray-100 font-semibold rounded-full px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-fit"
                    onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    Schedule Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Technology Showcase Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative rounded-3xl overflow-hidden bg-white shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Image Collage */}
              <div className="relative h-[500px] lg:h-auto">
                <div className="absolute inset-0 grid grid-cols-2 gap-2 p-2">
                  <img 
                    src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=400&q=80" 
                    alt="Engineering technology" 
                    className="w-full h-full object-cover rounded-2xl"
                  />
                  <div className="space-y-2">
                    <img 
                      src="https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=400&q=80" 
                      alt="Construction tech" 
                      className="w-full h-[calc(50%-4px)] object-cover rounded-2xl"
                    />
                    <img 
                      src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=400&q=80" 
                      alt="Modern structure" 
                      className="w-full h-[calc(50%-4px)] object-cover rounded-2xl"
                    />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-12 lg:p-16 flex flex-col justify-center bg-gradient-to-br from-gray-50 to-white">
                <div className="inline-flex items-center gap-2 bg-blue-50 text-[#1F3B64] px-4 py-2 rounded-full text-sm font-semibold mb-6 w-fit">
                  <Lightbulb className="w-4 h-4" />
                  TECHNOLOGY & INNOVATION
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Powered by Cutting-Edge Engineering Technology
                </h3>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  We leverage industry-leading software and tools to deliver precise, efficient, 
                  and innovative engineering solutions.
                </p>
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Advanced BIM</h4>
                      <p className="text-sm text-gray-600">3D modeling & visualization</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <BarChart3 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Structural Analysis</h4>
                      <p className="text-sm text-gray-600">Precise load calculations</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Target className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">CAD Design</h4>
                      <p className="text-sm text-gray-600">Detailed engineering drawings</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-xl flex items-center justify-center flex-shrink-0">
                      <Hammer className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">Project Management</h4>
                      <p className="text-sm text-gray-600">Efficient workflow systems</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="relative py-24 lg:py-32 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
          {/* Enhanced Section Header */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 text-[#1F3B64] px-5 py-2 rounded-full text-sm font-semibold mb-6 border border-blue-100">
              <Mail className="w-4 h-4" />
              GET IN TOUCH
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Let's Build Something
              <br />
              <span className="bg-gradient-to-r from-[#1F3B64] via-[#003366] to-[#1F3B64] bg-clip-text text-transparent">
                Extraordinary Together
              </span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your vision into reality? Our expert team is here to discuss your project 
              and provide tailored engineering solutions.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-8 lg:gap-12">
            {/* Contact Information Cards - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Contact Info Card */}
              <div className="bg-white rounded-3xl shadow-xl p-8 border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
                
                <div className="space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Email Us</div>
                      <div className="text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors">
                        info@genengg.com
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Call Us</div>
                      <div className="text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors">
                        +1 302-499-2050
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-4 group cursor-pointer">
                    <div className="w-12 h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Visit Us</div>
                      <div className="text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors">
                        Gen Engineering INC<br />
                        16192 Coastal Highway<br />
                        Lewes, DE 19958
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-4 group">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-medium text-gray-500 mb-1">Business Hours (EST)</div>
                      <div className="text-gray-900 font-semibold">
                        Mon - Fri: 9:00 AM - 6:00 PM<br />
                        Sat: 10:00 AM - 2:00 PM
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              
            </motion.div>

            {/* Enhanced Contact Form - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              <Card className="shadow-2xl border-0 rounded-3xl overflow-hidden">
                <CardContent className="p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                          Full Name <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="name"
                          type="text"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          className="h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          className="h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
                        />
                      </div>
                    </div>

                    {/* Phone and Project Type Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="+1 (555) 123-4567"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-semibold text-gray-700 mb-2">
                          Project Type
                        </label>
                        <select
                          id="projectType"
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full h-12 border border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base px-3 bg-white"
                        >
                          <option value="">Select a project type</option>
                          <option value="residential">Residential</option>
                          <option value="commercial">Commercial</option>
                          <option value="industrial">Industrial</option>
                          <option value="infrastructure">Infrastructure</option>
                          <option value="retrofit">Retrofit/Renovation</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                        Project Details <span className="text-red-500">*</span>
                      </label>
                      <Textarea
                        id="message"
                        placeholder="Tell us about your project, timeline, and specific requirements..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        rows={6}
                        className="border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl resize-none text-base"
                      />
                      <div className="mt-2 text-sm text-gray-500">
                        Please include project scope, timeline, and budget range if available.
                      </div>
                    </div>

                    {/* Success/Error Messages */}
                    <AnimatePresence>
                      {submitStatus === 'success' && (
                        <motion.div
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -10 }}
                          className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl flex items-center space-x-3"
                        >
                          <CheckCircle2 className="w-6 h-6 text-green-600" />
                          <div>
                            <div className="font-semibold">Message sent successfully!</div>
                            <div className="text-sm">We'll get back to you within 24 hours.</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1F3B64] to-[#003366] hover:from-[#003366] hover:to-[#1F3B64] text-white text-lg font-semibold py-7 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending Message...
                        </span>
                      ) : (
                        <span className="flex items-center justify-center">
                          Send Message
                          <Send className="ml-2 w-5 h-5" />
                        </span>
                      )}
                    </Button>

                    {/* Privacy Notice */}
                    <p className="text-sm text-gray-500 text-center">
                      By submitting this form, you agree to our{' '}
                      <a href="#" className="text-[#1F3B64] hover:underline font-medium">Privacy Policy</a>
                      {' '}and{' '}
                      <a href="#" className="text-[#1F3B64] hover:underline font-medium">Terms of Service</a>.
                    </p>
                  </form>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}