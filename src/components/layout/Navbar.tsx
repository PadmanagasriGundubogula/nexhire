"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Briefcase } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Our Services", href: "/services" },
    { name: "Current Openings", href: "/openings" },
    { name: "Contact Us", href: "/contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-brand-600 text-white p-2 rounded-xl group-hover:bg-brand-700 transition-colors">
              <Briefcase size={24} className="group-hover:scale-110 transition-transform" />
            </div>
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-brand-900 to-brand-600">
              NexHire
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-600 hover:text-brand-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/contact"
              className="bg-brand-600 hover:bg-brand-700 text-white px-6 py-2.5 rounded-full font-medium transition-all shadow-md shadow-brand-500/20 hover:shadow-lg hover:shadow-brand-500/30 active:scale-95"
            >
              Hire Talent
            </Link>
          </nav>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-slate-900 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 md:hidden"
          >
            <div className="flex flex-col py-4 px-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-slate-600 hover:text-brand-600 font-medium text-lg px-4 py-2 rounded-lg hover:bg-slate-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <div className="px-4 pt-2">
                <Link
                  href="/contact"
                  className="block text-center bg-brand-600 hover:bg-brand-700 text-white px-6 py-3 rounded-xl font-medium transition-colors shadow-md"
                  onClick={() => setIsOpen(false)}
                >
                  Hire Talent
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
