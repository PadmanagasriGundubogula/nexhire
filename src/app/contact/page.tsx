"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, Phone, MapPin, Send, Plus, Minus } from "lucide-react";

export default function ContactPage() {
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const faqs = [
    { q: "What industries do you specialize in?", a: "We specialize in Healthcare, Hospitality, Online Marketplace, Renewable Energy, Agribusiness, and Investment Banking." },
    { q: "How long does the recruitment process take?", a: "The timeline varies depending on the complexity of the role, but typically we present our first slate of qualified candidates within 2-3 weeks." },
    { q: "Do you offer contract staffing?", a: "Yes, we provide flexible contract staffing solutions for short-term projects or specialized temporary roles." },
    { q: "How do you screen candidates?", a: "We use a rigorous multi-stage screening process including technical assessments, behavioral interviews, and cultural fit evaluations." }
  ];

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <section className="bg-brand-900 text-white py-24 mb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-800" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Get in Touch
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100"
          >
            We'd love to hear from you. Let us know how we can help you find the perfect talent or your next career move.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100"
          >
            <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h2>
            <form className="space-y-6" onSubmit={(e) => { e.preventDefault(); alert("Message Sent!"); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Email Address</label>
                <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Message</label>
                <textarea rows={5} required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg">
                <Send size={20} /> Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info & Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col gap-8"
          >
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 flex-1">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <MapPin className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Office Address</h4>
                    <p className="text-slate-600">123 Business Avenue, Suite 400<br/>New York, NY 10001</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <Phone className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Phone</h4>
                    <p className="text-slate-600">+1 (555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-brand-50 flex items-center justify-center shrink-0">
                    <Mail className="text-brand-600" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-slate-900 mb-1">Email</h4>
                    <p className="text-slate-600">contact@nexhire.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-200 rounded-3xl h-64 overflow-hidden relative shadow-sm">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d193595.25279998188!2d-74.14448772099304!3d40.6976637487848!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </div>

        {/* FAQs */}
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-slate-600">Find answers to common questions about our services and process.</p>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden">
                <button 
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none"
                  onClick={() => setActiveFaq(activeFaq === i ? null : i)}
                >
                  <span className="font-semibold text-slate-900 text-lg">{faq.q}</span>
                  {activeFaq === i ? <Minus className="text-brand-500" /> : <Plus className="text-brand-500" />}
                </button>
                <AnimatePresence>
                  {activeFaq === i && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="px-6 pb-5 text-slate-600"
                    >
                      {faq.a}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
