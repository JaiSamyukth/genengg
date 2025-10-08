import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#1F3B64] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-bold mb-4">GenEngg</h3>
            <p className="text-[#C0C7CF] text-sm">
              Professional structural engineering and commercial real estate consultancy services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-[#C0C7CF] hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-[#C0C7CF] hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-[#C0C7CF] hover:text-white transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="#contact" className="text-[#C0C7CF] hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-[#C0C7CF] text-sm">
              <li>Structural Design</li>
              <li>Retrofitting</li>
              <li>Earthquake-Resistant Design</li>
              <li>BIM Modeling</li>
              <li>Construction Supervision</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-[#C0C7CF] text-sm">info@genengg.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-[#C0C7CF] text-sm">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-[#C0C7CF] text-sm">123 Engineering Plaza, City, State</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-[#C0C7CF] hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#C0C7CF] hover:text-white transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="text-[#C0C7CF] hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#7C8A97] mt-8 pt-8 text-center text-[#C0C7CF] text-sm">
          <p>© {new Date().getFullYear()} GenEngg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}