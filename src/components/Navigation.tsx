"use client"

import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
        <div className="w-full px-4 lg:px-12">
          <div className="flex justify-between items-center h-24">
            {/* Left Side: Logo and Licenses as One Unit */}
            <div className="flex items-center gap-4">
              {/* Company Logo */}
              <Link href="/" className="flex items-center">
                <Image 
                  src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-removebg-preview-1-1759896961543.png"
                  alt="GenEngg Logo"
                  width={120}
                  height={60}
                  className="h-16 w-auto"
                  priority
                />
              </Link>
              
              {/* GenEngg Text */}
              <h1 className="hidden md:block text-4xl font-bold text-[#003366]">
                GenEngg
              </h1>
              
              {/* License Badges and Text */}
              <div className="hidden md:flex flex-col gap-1 items-center">
                {/* License Logos Row */}
                <div className="flex items-center gap-3">
                  {/* AISC License */}
                  <div className="relative h-14 w-20">
                    <Image 
                      src="/aisc-license.png"
                      alt="AISC Certified"
                      fill
                      className="object-contain"
                    />
                  </div>
                  
                  {/* NISD License */}
                  <div className="relative h-14 w-20">
                    <Image 
                      src="/nisd-licence.png"
                      alt="NISD Member"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                
                {/* Membership Text */}
                <p className="text-xs font-bold text-[#333333] whitespace-nowrap text-center">
                  Member of AISC and NISD
                </p>
              </div>
            </div>
            
            {/* Right Side: Toll Free, Send Query Button, Menu Icon */}
            <div className="flex items-center gap-4">
              {/* Toll Free Number */}
              <div className="hidden md:flex items-center gap-2 text-[#1F3B64]">
                <Phone className="w-5 h-5" />
                <span className="font-semibold">Toll Free: 1800-123-4567</span>
              </div>
              
              {/* Send Query Button */}
              <Button 
                asChild
                className="hidden md:flex bg-[#003366] hover:bg-[#003366]/90 text-white px-6 py-2 rounded-lg transition-all hover:shadow-lg"
              >
                <Link href="/#contact">
                  Send Query
                </Link>
              </Button>
              
              {/* Menu Button */}
              <button
                className="text-[#1F3B64] p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
              >
                <Menu className="w-7 h-7" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Side Panel Navigation */}
      <div 
        className={`fixed inset-0 z-[60] transition-opacity duration-300 ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
        onClick={() => setMenuOpen(false)}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />
        
        {/* Side Panel */}
        <div 
          className={`absolute top-0 right-0 h-full w-full max-w-md bg-white shadow-2xl transform transition-transform duration-300 ease-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-[#1F3B64]">Menu</h2>
              <button
                className="text-[#1F3B64] p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => setMenuOpen(false)}
                aria-label="Close menu"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Navigation Links */}
            <div className="flex-1 overflow-y-auto">
              <div className="p-6 space-y-1">
                <Link 
                  href="/" 
                  className="block text-[#1F3B64] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all hover:translate-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Home
                </Link>
                <Link 
                  href="/about" 
                  className="block text-[#1F3B64] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all hover:translate-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  About
                </Link>
                <Link 
                  href="/services" 
                  className="block text-[#1F3B64] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all hover:translate-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Services
                </Link>
                <Link 
                  href="/projects" 
                  className="block text-[#1F3B64] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all hover:translate-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Projects
                </Link>
                <Link 
                  href="/#contact" 
                  className="block text-[#1F3B64] hover:bg-gray-50 px-4 py-3 rounded-lg font-medium transition-all hover:translate-x-1"
                  onClick={() => setMenuOpen(false)}
                >
                  Contact
                </Link>
              </div>
            </div>

            {/* Footer with Contact Info */}
            <div className="p-6 border-t border-gray-200 space-y-4">
              <div className="flex items-center space-x-3 text-[#1F3B64] bg-gray-50 p-4 rounded-lg">
                <Phone className="w-5 h-5" />
                <div>
                  <div className="text-xs text-gray-500">Toll Free</div>
                  <div className="font-semibold">1-855-444-9497</div>
                </div>
              </div>
              
              <Button 
                asChild
                className="w-full bg-[#003366] hover:bg-[#003366]/90 text-white py-6 text-lg rounded-lg transition-all hover:shadow-lg"
              >
                <Link href="/#contact" onClick={() => setMenuOpen(false)}>
                  Send Query
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}