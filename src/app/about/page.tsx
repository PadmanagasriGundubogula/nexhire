"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, TrendingUp, Users, Target } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="pt-8 pb-24">
      {/* Header */}
      <section className="bg-brand-50 py-20 mb-16 relative overflow-hidden">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">About NexHire</h1>
            <p className="text-xl text-slate-600">
              Connecting organizations with candidates who possess both potential and experience.
            </p>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-slate-600">
              <p>
                Any company is known by its leadership and team, and they are two of the most crucial elements driving business success today. Understanding this, we help companies with the best hiring solutions. 
              </p>
              <p>
                We specialize in functional specifications essential for senior board management. Our team understands the qualities needed in leadership, and our solutions are tailored accordingly.
              </p>
              <p>
                We take a strategic approach to recruitment and selection, involving market research, capability assessment, validation procedures, and skill evaluation to ensure the highest level of competence.
              </p>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-3xl overflow-hidden bg-brand-100 relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-brand-600/20 to-transparent mix-blend-overlay z-10" />
              {/* Replace with real image later */}
              <div className="w-full h-full flex items-center justify-center text-brand-300">
                <Users size={120} opacity={0.5} />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <Target className="text-brand-600 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
            <p className="text-slate-600 leading-relaxed">
              To empower organizations by providing unparalleled recruitment solutions, identifying top-tier talent that drives innovation, growth, and long-term success.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white p-10 rounded-3xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow"
          >
            <TrendingUp className="text-brand-600 w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
            <p className="text-slate-600 leading-relaxed">
              To be the globally recognized benchmark for strategic hiring, known for redefining how companies and talent discover perfect synergy.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {[
              { title: "Integrity", desc: "Honesty and transparency in every interaction." },
              { title: "Excellence", desc: "Commitment to delivering the highest quality service." },
              { title: "Innovation", desc: "Embracing modern techniques and AI in recruitment." },
              { title: "Partnership", desc: "Building long-term, strategic client relationships." }
            ].map((value, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-slate-50 p-8 rounded-2xl"
              >
                <div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="text-brand-600" />
                </div>
                <h4 className="text-xl font-semibold text-slate-900 mb-2">{value.title}</h4>
                <p className="text-slate-600 text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
