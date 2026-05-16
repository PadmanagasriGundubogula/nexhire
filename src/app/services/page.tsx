"use client";

import { motion } from "framer-motion";
import { 
  Briefcase, Award, Code, Rocket, 
  Clock, LineChart, FileCheck, Users 
} from "lucide-react";

export default function ServicesPage() {
  const services = [
    {
      title: "Executive Search",
      desc: "Specialized recruitment for highly qualified senior executive level roles. We identify visionaries who can steer your company towards its long-term goals.",
      icon: <Briefcase className="w-8 h-8 text-white" />
    },
    {
      title: "Leadership Hiring",
      desc: "Finding leaders who possess both the required experience and the potential to drive organizational transformation and team success.",
      icon: <Award className="w-8 h-8 text-white" />
    },
    {
      title: "Technical Recruitment",
      desc: "Sourcing top-tier engineers, developers, and IT professionals who excel in modern tech stacks and innovative environments.",
      icon: <Code className="w-8 h-8 text-white" />
    },
    {
      title: "Startup Hiring",
      desc: "Agile and rapid recruitment solutions tailored for startups to help build foundational teams that scale with your vision.",
      icon: <Rocket className="w-8 h-8 text-white" />
    },
    {
      title: "Contract Staffing",
      desc: "Flexible staffing solutions providing skilled professionals for short-term projects or specialized temporary roles.",
      icon: <Clock className="w-8 h-8 text-white" />
    },
    {
      title: "Recruitment Consulting",
      desc: "Strategic advice on optimizing your internal hiring processes, employer branding, and talent acquisition strategies.",
      icon: <LineChart className="w-8 h-8 text-white" />
    },
    {
      title: "Talent Screening & Assessment",
      desc: "Comprehensive evaluation of candidates through rigorous technical, cultural, and cognitive assessments.",
      icon: <FileCheck className="w-8 h-8 text-white" />
    },
    {
      title: "HR Advisory",
      desc: "Expert guidance on human resources policies, organizational design, and employee engagement and retention.",
      icon: <Users className="w-8 h-8 text-white" />
    }
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
            Our Services
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-brand-100"
          >
            Comprehensive recruitment solutions designed to meet the unique hiring needs of modern organizations.
          </motion.p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl border border-slate-100 transition-all group"
            >
              <div className="w-16 h-16 rounded-2xl bg-brand-600 group-hover:bg-brand-500 flex items-center justify-center mb-6 shadow-md transition-colors">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-brand-600 transition-colors">{service.title}</h3>
              <p className="text-slate-600 leading-relaxed">
                {service.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
