import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 mt-16 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center">
        <div className="flex justify-center gap-6 mb-6">
          <a href="#" className="hover:text-white"><Facebook size={24} /></a>
          <a href="#" className="hover:text-white"><Twitter size={24} /></a>
          <a href="#" className="hover:text-white"><Instagram size={24} /></a>
          <a href="#" className="hover:text-white"><Linkedin size={24} /></a>
        </div>
        <p className="text-sm">
          &copy; {new Date().getFullYear()} RISE Events. All rights reserved.
        </p>
        <p className="text-xs mt-2">
          One Night in Dubai | Venture Studio | Event Management
        </p>
      </div>
    </footer>
  )
}