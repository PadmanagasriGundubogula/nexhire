import Link from "next/link";
import { Briefcase, Mail, Phone, MapPin, Hash, Globe, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-950 text-slate-300 py-16 border-t border-brand-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center gap-2 group inline-block">
              <div className="bg-brand-600 text-white p-2 rounded-xl group-hover:bg-brand-500 transition-colors">
                <Briefcase size={24} />
              </div>
              <span className="text-2xl font-bold text-white">
                NexHire
              </span>
            </Link>
            <p className="text-slate-400 leading-relaxed max-w-sm">
              Smart Hiring Starts Here. We connect organizations with candidates who possess both potential and experience through strategic recruitment.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Hash size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Globe size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <MessageCircle size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-brand-900 flex items-center justify-center hover:bg-brand-600 hover:text-white transition-colors">
                <Share2 size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/" className="hover:text-brand-400 transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-400 transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-brand-400 transition-colors">Our Services</Link>
              </li>
              <li>
                <Link href="/openings" className="hover:text-brand-400 transition-colors">Current Openings</Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-400 transition-colors">Contact Us</Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Executive Search</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Leadership Hiring</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Technical Recruitment</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Startup Hiring</li>
              <li className="hover:text-brand-400 transition-colors cursor-pointer">Contract Staffing</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-brand-500 shrink-0 mt-1" />
                <span>123 Business Avenue, Suite 400<br />New York, NY 10001</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-brand-500 shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-brand-500 shrink-0" />
                <span>contact@nexhire.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-brand-800 text-center text-slate-500">
          <p>&copy; {new Date().getFullYear()} NexHire. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
