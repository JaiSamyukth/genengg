"use client"

import { Button } from "@/components/ui/button"
import { Menu, Phone } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-white/20">
      <div className="w-full px-6 lg:px-12">
        <div className="flex justify-between items-center h-20">
          <Link href="/" className="flex items-center">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/document-uploads/logo-removebg-preview-1-1759896961543.png"
              alt="GenEngg Logo"
              width={120}
              height={60}
              className="h-14 w-auto"
              priority
            />
          </Link>
          
          {/* Desktop Navigation - Right Aligned with Rounded Buttons */}
          <div className="hidden md:flex items-center space-x-3">
            <Link href="/" className="bg-[#1F3B64] text-white hover:bg-[#1F3B64]/90 px-5 py-2.5 rounded-full font-medium transition-colors">
              Home
            </Link>
            <Link href="/services" className="bg-[#1F3B64] text-white hover:bg-[#1F3B64]/90 px-5 py-2.5 rounded-full font-medium transition-colors">
              Services
            </Link>
            <Link href="/projects" className="bg-[#1F3B64] text-white hover:bg-[#1F3B64]/90 px-5 py-2.5 rounded-full font-medium transition-colors">
              Projects
            </Link>
            <a href="#contact" className="bg-[#1F3B64] text-white hover:bg-[#1F3B64]/90 px-5 py-2.5 rounded-full font-medium transition-colors">
              Contact
            </a>
            
            {/* Toll Free Number next to Send Query */}
            <div className="flex items-center space-x-2 text-[#1F3B64] font-medium ml-2">
              <Phone className="w-4 h-4" />
              <span className="text-sm">1-855-444-9497</span>
            </div>
            
            <Button className="bg-[#00B7C2] hover:bg-[#00B7C2]/90 text-white px-6 py-2.5 rounded-full font-medium">
              Send Query
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#1F3B64]"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 bg-white/90 backdrop-blur-md rounded-lg mb-4">
            <div className="flex items-center space-x-2 text-[#1F3B64] font-medium px-4">
              <Phone className="w-4 h-4" />
              <span>Toll Free: 1-855-444-9497</span>
            </div>
            <Link href="/" className="block text-[#1F3B64] hover:text-[#1F3B64]/80 px-4">
              Home
            </Link>
            <Link href="/services" className="block text-[#1F3B64] hover:text-[#1F3B64]/80 px-4">
              Services
            </Link>
            <Link href="/projects" className="block text-[#1F3B64] hover:text-[#1F3B64]/80 px-4">
              Projects
            </Link>
            <a href="#contact" className="block text-[#1F3B64] hover:text-[#1F3B64]/80 px-4">
              Contact
            </a>
            <div className="px-4">
              <Button className="w-full bg-[#1F3B64] hover:bg-[#1F3B64]/90 text-white">
                Send Query
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}