"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  Users, Building, Target, CheckCircle2, 
  TrendingUp, Award, Zap, Shield
} from "lucide-react";

export default function Home() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const industries = [
    { name: "Healthcare", icon: <Users size={24} className="text-brand-500" /> },
    { name: "Hospitality", icon: <Building size={24} className="text-brand-500" /> },
    { name: "Online Marketplace", icon: <TrendingUp size={24} className="text-brand-500" /> },
    { name: "Renewable Energy", icon: <Zap size={24} className="text-brand-500" /> },
    { name: "Agribusiness", icon: <Target size={24} className="text-brand-500" /> },
    { name: "Investment Banking", icon: <Award size={24} className="text-brand-500" /> },
  ];

  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-slate-50 pt-20 pb-32">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-50 to-white -z-10" />
        {/* Abstract decorative shapes */}
        <div className="absolute top-0 right-0 -translate-y-12 translate-x-1/3 w-96 h-96 bg-brand-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob" />
        <div className="absolute top-0 left-0 -translate-y-12 -translate-x-1/3 w-96 h-96 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-8">
            <motion.div 
              className="flex-1 text-center lg:text-left pt-12 lg:pt-0"
              initial="hidden"
              animate="visible"
              variants={staggerContainer}
            >
              <motion.div variants={fadeIn} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-100 text-brand-700 text-sm font-medium mb-6">
                <span className="w-2 h-2 rounded-full bg-brand-600"></span>
                Smart Hiring Starts Here
              </motion.div>
              <motion.h1 
                variants={fadeIn}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"
              >
                Helping Companies Find the <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-brand-400">Perfect Talent</span>
              </motion.h1>
              <motion.p 
                variants={fadeIn}
                className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              >
                NexHire provides strategic recruitment and selection solutions to connect organizations with candidates possessing true potential and experience.
              </motion.p>
              <motion.div 
                variants={fadeIn}
                className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4"
              >
                <Link href="/contact" className="w-full sm:w-auto px-8 py-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-semibold text-lg transition-all shadow-lg shadow-brand-500/30 hover:shadow-xl hover:shadow-brand-500/40 hover:-translate-y-1">
                  Hire Talent
                </Link>
                <Link href="/openings" className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 rounded-xl font-semibold text-lg transition-all shadow-sm hover:shadow-md hover:-translate-y-1">
                  Find Jobs
                </Link>
              </motion.div>
            </motion.div>

            <motion.div 
              className="flex-1 w-full max-w-xl lg:max-w-none"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="relative rounded-2xl overflow-hidden shadow-2xl glass p-2">
                <Image 
                  src="/hero_illustration.png" 
                  alt="Talent Acquisition" 
                  width={800} 
                  height={600} 
                  className="rounded-xl w-full h-auto object-cover"
                  priority
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-slate-100">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="pt-8 sm:pt-0"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">500+</h3>
              <p className="text-slate-600 font-medium">Successful Hires</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="pt-8 sm:pt-0"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">100+</h3>
              <p className="text-slate-600 font-medium">Partner Companies</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="pt-8 sm:pt-0"
            >
              <h3 className="text-4xl md:text-5xl font-bold text-brand-600 mb-2">95%</h3>
              <p className="text-slate-600 font-medium">Client Satisfaction</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Industries */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Industries We Serve</h2>
            <p className="text-lg text-slate-600">Our expertise spans across multiple sectors, allowing us to find the right leadership and functional talent for your specific industry.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center justify-center gap-4 text-center group hover:shadow-md transition-all"
              >
                <div className="w-16 h-16 rounded-full bg-brand-50 flex items-center justify-center group-hover:bg-brand-100 transition-colors">
                  {industry.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-800">{industry.name}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="flex-1">
              <motion.h2 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-slate-900 mb-6"
              >
                Why Choose NexHire?
              </motion.h2>
              <motion.p 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-600 mb-8"
              >
                We go beyond matching resumes to job descriptions. We take a strategic approach to recruitment, involving market research, capability assessment, and validation procedures.
              </motion.p>
              
              <div className="space-y-6">
                {[
                  { title: "Strategic Approach", desc: "Comprehensive market research and capability assessments.", icon: <Target className="text-brand-600" /> },
                  { title: "Quality Validation", desc: "Rigorous skill evaluation to ensure the highest competence.", icon: <CheckCircle2 className="text-brand-600" /> },
                  { title: "Data-Driven Matching", desc: "Using advanced insights to find the perfect cultural and technical fit.", icon: <Shield className="text-brand-600" /> }
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                    className="flex gap-4"
                  >
                    <div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div className="flex-1 w-full relative">
              <div className="absolute inset-0 bg-brand-100 rounded-3xl transform rotate-3" />
              <div className="relative bg-white rounded-3xl shadow-xl border border-slate-100 p-8 z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-16 h-16 rounded-full bg-brand-100 flex items-center justify-center">
                    <Users size={32} className="text-brand-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900">AI-Powered Matching</h3>
                    <p className="text-slate-500">Smart candidate profiling</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center gap-4 p-4 rounded-xl border border-slate-100 hover:border-brand-200 hover:bg-brand-50 transition-colors cursor-pointer">
                      <div className="w-12 h-12 rounded-full bg-slate-200 animate-pulse" />
                      <div className="flex-1">
                        <div className="h-4 w-1/3 bg-slate-200 rounded mb-2" />
                        <div className="h-3 w-1/2 bg-slate-100 rounded" />
                      </div>
                      <div className="text-brand-600 font-semibold text-sm bg-brand-100 px-3 py-1 rounded-full">
                        9{i}% Match
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-brand-900" />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-900 to-brand-800" />
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Build Your Dream Team?</h2>
          <p className="text-xl text-brand-100 mb-10 max-w-2xl mx-auto">
            Partner with NexHire to find the perfect candidates that align with your company's vision and technical requirements.
          </p>
          <Link href="/contact" className="inline-block px-8 py-4 bg-white text-brand-900 hover:bg-brand-50 rounded-xl font-semibold text-lg transition-all shadow-lg hover:shadow-xl hover:-translate-y-1">
            Get in Touch Today
          </Link>
        </div>
      </section>
    </>
  );
}
