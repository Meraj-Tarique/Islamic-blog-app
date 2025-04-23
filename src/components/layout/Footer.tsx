import Link from "next/link"
import { Facebook, Twitter, Instagram } from 'lucide-react'

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Islamic Center</h3>
            <p className="text-gray-400">
              A place of worship, learning, and community building.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-[#C5A059]">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-[#C5A059]">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/events" className="text-gray-400 hover:text-[#C5A059]">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-[#C5A059]">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Gulistan -e- Johar</li>
              <li>Karachi, Sindh</li>
              <li>Phone: 0310-2460554</li>
              <li>Email: meraj.tarique1618@gmail.com</li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <Link href="#" className="text-gray-400 hover:text-[#C5A059]">
                <Facebook className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C5A059]">
                <Twitter className="w-6 h-6" />
              </Link>
              <Link href="#" className="text-gray-400 hover:text-[#C5A059]">
                <Instagram className="w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Islamic Center. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

