"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import FAQSection from "@/components/FAQSection"
import { Button } from "@/components/ui/button"
import { Building2, Shield, Zap, Layers, ClipboardCheck, CheckCircle2, ArrowRight, Award, Users, Target, Lightbulb, Hammer, BarChart3 } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence, useInView } from "framer-motion"

export default function Home() {
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

        {/* Foreground Content */}
        <div className="relative w-full min-h-screen flex items-end justify-center pt-0 pb-0 z-10">
          <div className="w-full bg-white py-3 sm:py-4 md:py-6 px-3 sm:px-6 lg:px-12 shadow-2xl">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-center text-[#002060] uppercase tracking-tight sm:tracking-wide md:tracking-wider leading-tight">
              Exceptional Engineering
              <br className="hidden sm:block" />
              <span className="sm:hidden"> </span>Solutions That Inspire
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
            className="text-center py-12 sm:py-16 md:py-20 px-4 sm:px-6"
          >
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
              Shaping the Future of
              <br />
              <span className="text-[#1F3B64]">The Built Environment</span>
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-2">
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
              className="relative min-h-[300px] sm:min-h-[400px] md:min-h-[500px] lg:min-h-[600px]"
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
              <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 bg-white rounded-lg sm:rounded-xl shadow-2xl p-3 sm:p-4 md:p-6 max-w-[180px] sm:max-w-xs">
                <div className="flex items-center space-x-2 sm:space-x-3 md:space-x-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-16 md:h-16 bg-[#1F3B64] rounded-lg flex items-center justify-center">
                    <Award className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 text-white" />
                  </div>
                  <div>
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">10+</div>
                    <div className="text-xs sm:text-sm text-gray-600">Years Experience</div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="px-4 sm:px-6 md:px-8 lg:px-16 py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col justify-center bg-gray-50"
            >
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 mb-4 sm:mb-6">
                About GEN Engineering INC
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-4 sm:mb-6">
                GEN Engineering INC is a multidisciplinary engineering consulting company, inaugurated in 2013, serving international clients to shape the future of the built environment. Our management team brings over 10 years of experience in 3D construction modelling and steel detailing, delivering precision-driven, innovative, and client-focused engineering services.
              </p>
              <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8">
                Our expertise spans structural and miscellaneous steel detailing, connection design, estimation, and BIM services across diverse sectors including industrial, commercial, mining, and infrastructure projects worldwide.
              </p>
              
              {/* Feature List */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4">
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F3B64] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">AISC Certified</div>
                    <div className="text-xs sm:text-sm text-gray-600">Industry-leading standards</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F3B64] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">2000+ Projects</div>
                    <div className="text-xs sm:text-sm text-gray-600">Successfully delivered</div>
                  </div>
                </div>
                <div className="flex items-start space-x-2 sm:space-x-3">
                  <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-[#1F3B64] flex-shrink-0 mt-0.5 sm:mt-1" />
                  <div>
                    <div className="font-semibold text-sm sm:text-base text-gray-900">ISO 9001:2015-Aligned</div>
                    <div className="text-xs sm:text-sm text-gray-600">Quality process</div>
                  </div>
                </div>

              </div>

              <Button 
                size="lg" 
                className="mt-6 sm:mt-8 bg-[#1F3B64] hover:bg-[#003366] text-white font-semibold rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
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
                    src="https://images.unsplash.com/photo-1648937740668-160a34e98653" 
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
                    src="https://images.unsplash.com/photo-1678517098615-95d02f7c49ff" 
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
                    src="https://images.unsplash.com/photo-1618385455730-2571c38966b7" 
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
                    src="https://images.unsplash.com/photo-1582540730843-f4418d96ccbe" 
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
                    onClick={() => window.location.href = '/contact'}
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

      {/* CTA Section - Contact */}
      <section className="relative py-16 sm:py-20 lg:py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-[#1F3B64] to-[#003366] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl"
          >
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 leading-tight">
                  Ready to Start Your
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
                    Next Project?
                  </span>
                </h2>
                
                <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-8 sm:mb-10 leading-relaxed">
                  Let's discuss how our expertise can bring your vision to life. 
                  Get in touch with our team today for a consultation.
                </p>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="bg-white text-[#1F3B64] hover:bg-gray-100 font-semibold rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.location.href = '/contact'}
                  >
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                  </Button>
                  <Button 
                    size="lg" 
                    variant="outline"
                    className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-[#1F3B64] font-semibold rounded-full px-6 sm:px-8 py-5 sm:py-6 text-base sm:text-lg transition-all duration-300 hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.location.href = '/projects'}
                  >
                    View Projects
                  </Button>
                </div>
              </div>

              <div className="relative h-64 sm:h-80 lg:h-auto">
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

      {/* FAQ Section - GEO Optimized */}
      <FAQSection />

      <Footer />
    </main>
  )
}