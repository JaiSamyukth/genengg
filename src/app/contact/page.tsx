"use client"

import Navigation from "@/components/Navigation"
import Footer from "@/components/Footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin, Send, Clock, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    projectType: ""
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

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

  return (
    <main className="w-full">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] sm:min-h-[50vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#f0f4ff] via-[#e6f0ff] to-[#dce8ff] pt-24">
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-[0.08]">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 40px, #1F3B64 40px, #1F3B64 41px),
                             repeating-linear-gradient(90deg, transparent, transparent 40px, #1F3B64 40px, #1F3B64 41px)`
          }}></div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-blue-300/30 to-indigo-300/30 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-cyan-300/30 to-blue-300/30 rounded-full blur-3xl"></div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-12 sm:py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-4 sm:mb-6"
          >
            <p className="text-xs sm:text-sm md:text-base tracking-[0.2em] sm:tracking-[0.3em] text-gray-400 font-light uppercase">
              Get In Touch
            </p>
          </motion.div>
          
          <motion.h1 
            className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light text-[#1F3B64] mb-4 sm:mb-8 leading-tight tracking-tight px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Let's Build Something
            <br />
            <motion.span 
              className="font-bold"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Extraordinary Together
            </motion.span>
          </motion.h1>
          
          <motion.p 
            className="text-base sm:text-lg md:text-xl text-gray-600 font-light max-w-2xl mx-auto px-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Ready to transform your vision into reality? Our expert team is here to help.
          </motion.p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="relative py-12 sm:py-16 lg:py-24 overflow-hidden">
        {/* Modern Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-blue-50/30 to-white"></div>
        
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-1/4 -right-20 w-48 h-48 sm:w-96 sm:h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 -left-20 w-48 h-48 sm:w-96 sm:h-96 bg-indigo-400/10 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 relative z-10">
          <div className="grid lg:grid-cols-5 gap-6 sm:gap-8 lg:gap-12">
            {/* Contact Information Cards - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2 space-y-4 sm:space-y-6"
            >
              {/* Contact Info Card */}
              <div className="bg-white rounded-2xl sm:rounded-3xl shadow-xl p-6 sm:p-8 border border-gray-100">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-4 sm:mb-6">Contact Information</h3>
                
                <div className="space-y-4 sm:space-y-6">
                  {/* Email */}
                  <div className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Email Us</div>
                      <div className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors break-words">
                        info@genengg.com
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Call Us</div>
                      <div className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors">
                        +1 302-499-2050
                      </div>
                    </div>
                  </div>

                  {/* Location */}
                  <div className="flex items-start space-x-3 sm:space-x-4 group cursor-pointer">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-orange-500 to-red-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Visit Us</div>
                      <div className="text-sm sm:text-base text-gray-900 font-semibold group-hover:text-[#1F3B64] transition-colors">
                        Gen Engineering INC<br />
                        16192 Coastal Highway<br />
                        Lewes, DE 19958
                      </div>
                    </div>
                  </div>

                  {/* Business Hours */}
                  <div className="flex items-start space-x-3 sm:space-x-4 group">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-purple-500 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="text-xs sm:text-sm font-medium text-gray-500 mb-1">Business Hours (EST)</div>
                      <div className="text-sm sm:text-base text-gray-900 font-semibold">
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
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-3"
            >
              <Card className="shadow-2xl border-0 rounded-2xl sm:rounded-3xl overflow-hidden">
                <CardContent className="p-6 sm:p-8 lg:p-10">
                  <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                    {/* Name and Email Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
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
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
                        />
                      </div>
                    </div>

                    {/* Phone and Project Type Row */}
                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
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
                          className="h-11 sm:h-12 border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base"
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
                          className="w-full h-11 sm:h-12 border border-gray-200 focus:border-[#1F3B64] focus:ring-[#1F3B64] rounded-xl text-base px-3 bg-white"
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
                      <div className="mt-2 text-xs sm:text-sm text-gray-500">
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
                          className="bg-green-50 border border-green-200 text-green-800 px-4 sm:px-6 py-3 sm:py-4 rounded-xl flex items-center space-x-3"
                        >
                          <CheckCircle2 className="w-5 h-5 sm:w-6 sm:h-6 text-green-600 flex-shrink-0" />
                          <div>
                            <div className="font-semibold text-sm sm:text-base">Message sent successfully!</div>
                            <div className="text-xs sm:text-sm">We'll get back to you within 24 hours.</div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>

                    {/* Submit Button */}
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-[#1F3B64] to-[#003366] hover:from-[#003366] hover:to-[#1F3B64] text-white text-base sm:text-lg font-semibold py-5 sm:py-7 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
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
                          <Send className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
                        </span>
                      )}
                    </Button>

                    {/* Privacy Notice */}
                    <p className="text-xs sm:text-sm text-gray-500 text-center px-2">
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

      {/* Map Section (Optional) */}
      <section className="relative py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Visit Our <span className="text-[#1F3B64]">Office</span>
            </h2>
            <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-2xl mx-auto px-4">
              Located in Lewes, Delaware, we serve clients globally with our engineering expertise.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl h-64 sm:h-96 lg:h-[500px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3091.8668!2d-75.145!3d38.775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzjCsDQ2JzMwLjAiTiA3NcKwMDgnNDIuMCJX!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Gen Engineering INC Location"
            ></iframe>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
