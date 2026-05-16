"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, MapPin, Briefcase, DollarSign, X } from "lucide-react";

const jobs = [
  { id: 1, role: "Frontend Developer", company: "TechCorp Inc.", location: "Remote", salary: "$80k - $120k", experience: "2-4 Years", type: "Full-time" },
  { id: 2, role: "React Developer", company: "Innovate Solutions", location: "New York, NY", salary: "$100k - $140k", experience: "3-5 Years", type: "Full-time" },
  { id: 3, role: "AI Engineer", company: "Future Dynamics", location: "San Francisco, CA", salary: "$130k - $180k", experience: "4+ Years", type: "Full-time" },
  { id: 4, role: "Data Analyst", company: "Metrics Ltd.", location: "Remote", salary: "$70k - $90k", experience: "1-3 Years", type: "Contract" },
  { id: 5, role: "HR Manager", company: "Global Enterprises", location: "Chicago, IL", salary: "$90k - $110k", experience: "5+ Years", type: "Full-time" },
];

export default function OpeningsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredJobs = jobs.filter(job => 
    job.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
    job.company.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="pt-8 pb-24 bg-slate-50 min-h-screen">
      <section className="bg-brand-900 text-white py-20 mb-12 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 to-brand-800" />
        <div className="container mx-auto px-4 relative z-10 text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Current Openings</h1>
          <p className="text-xl text-brand-100">Find your next career opportunity with our partner companies.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 mb-8 flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
            <input 
              type="text" 
              placeholder="Search by role or company..." 
              className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select className="px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-700">
            <option value="">All Locations</option>
            <option value="remote">Remote</option>
            <option value="ny">New York</option>
            <option value="sf">San Francisco</option>
          </select>
          <select className="px-4 py-3 rounded-xl bg-slate-50 border-transparent focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all text-slate-700">
            <option value="">Experience Level</option>
            <option value="entry">Entry Level</option>
            <option value="mid">Mid Level</option>
            <option value="senior">Senior Level</option>
          </select>
        </div>

        <div className="space-y-4">
          {filteredJobs.map((job, i) => (
            <motion.div 
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 hover:shadow-md transition-shadow flex flex-col md:flex-row md:items-center justify-between gap-6"
            >
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{job.role}</h3>
                <div className="flex flex-wrap gap-4 text-sm text-slate-600">
                  <span className="flex items-center gap-1"><Briefcase size={16} /> {job.company}</span>
                  <span className="flex items-center gap-1"><MapPin size={16} /> {job.location}</span>
                  <span className="flex items-center gap-1"><DollarSign size={16} /> {job.salary}</span>
                  <span className="px-2 py-1 bg-brand-50 text-brand-700 rounded-md text-xs font-semibold">{job.type}</span>
                </div>
              </div>
              <button 
                onClick={() => setSelectedJob(job.id)}
                className="w-full md:w-auto px-6 py-2.5 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-medium transition-colors"
              >
                Apply Now
              </button>
            </motion.div>
          ))}
          {filteredJobs.length === 0 && (
            <div className="text-center py-12 text-slate-500">
              No jobs found matching your search.
            </div>
          )}
        </div>
      </div>

      {/* Application Modal */}
      <AnimatePresence>
        {selectedJob !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"
              onClick={() => setSelectedJob(null)}
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative bg-white rounded-3xl shadow-2xl p-8 max-w-lg w-full z-10 max-h-[90vh] overflow-y-auto"
            >
              <button 
                onClick={() => setSelectedJob(null)}
                className="absolute top-6 right-6 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X size={24} />
              </button>
              <h2 className="text-2xl font-bold text-slate-900 mb-6">Submit Application</h2>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Application Submitted!"); setSelectedJob(null); }}>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Full Name</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Email Address</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">LinkedIn URL</label>
                  <input type="url" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:border-brand-500 focus:ring-2 focus:ring-brand-200 outline-none transition-all" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">Resume / CV</label>
                  <div className="w-full px-4 py-8 rounded-xl border-2 border-dashed border-slate-300 bg-slate-50 text-center hover:bg-slate-100 transition-colors cursor-pointer text-slate-500 text-sm">
                    Click to upload or drag and drop<br/>PDF, DOCX up to 5MB
                  </div>
                </div>
                <button type="submit" className="w-full py-4 mt-4 bg-brand-600 hover:bg-brand-700 text-white rounded-xl font-bold transition-colors">
                  Submit Application
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
