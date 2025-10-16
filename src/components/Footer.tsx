import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin, Facebook, Twitter } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-[#2C4563] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold mb-6">GenEngg</h3>
            <p className="text-gray-300 text-base leading-relaxed">
              Professional structural engineering and commercial real estate consultancy services.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors text-base">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white transition-colors text-base">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors text-base">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-300 hover:text-white transition-colors text-base">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3 text-gray-300 text-base">
              <li>Structural Design</li>
              <li>Retrofitting</li>
              <li>Earthquake-Resistant Design</li>
              <li>BIM Modeling</li>
              <li>Construction Supervision</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-base">info@genengg.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-base">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-white mt-0.5 flex-shrink-0" />
                <span className="text-gray-300 text-base">123 Engineering Plaza, City, State</span>
              </li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white hover:text-gray-300 transition-colors">
                <Twitter className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-600 mt-12 pt-8 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} GenEngg. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}