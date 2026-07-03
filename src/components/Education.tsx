import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { GraduationCap, Award, Check, Eye, X } from 'lucide-react';

export default function Education() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section
      id="education"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight mb-2">
            Education &amp; Certifications
          </h2>
          <div className="h-1.5 w-16 bg-violet-600 dark:bg-violet-400 mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-slate-400">
            My academic foundation and professional credentials 
          </p>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Card 1: University */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5 }}
            className="bg-zinc-50 dark:bg-[#0d0d0d] p-8 rounded-2xl border border-zinc-200/60 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-zinc-300 dark:hover:border-violet-500/50 transition-all flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="p-4 bg-violet-50 dark:bg-[#050505] border dark:border-slate-800/40 text-violet-600 dark:text-violet-400 rounded-xl shrink-0">
              <GraduationCap className="w-8 h-8" />
            </div>
            <div className="space-y-3">
              <span className="inline-block px-2.5 py-0.5 rounded-full bg-violet-100 dark:bg-violet-950/40 text-violet-800 dark:text-violet-300 text-xs font-mono font-semibold">
                Degree Program
              </span>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 leading-snug">
                Addis Ababa University – B.Sc. in Information Science (Rising 4th Year)
              </h3>
              <p className="text-sm text-zinc-600 dark:text-slate-400 leading-relaxed font-sans">
                <span className="font-semibold text-zinc-800 dark:text-slate-300">Relevant Studies:</span> Database Systems (MySQL), Software Engineering, Web Dev (PHP), DSA.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Certification */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-zinc-50 dark:bg-[#0d0d0d] p-8 rounded-2xl border border-zinc-200/60 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-zinc-300 dark:hover:border-violet-500/50 transition-all flex flex-col md:flex-row gap-6 items-start"
          >
            <div className="p-4 bg-amber-50 dark:bg-[#050505] border dark:border-slate-800/40 text-amber-500 dark:text-amber-400 rounded-xl shrink-0">
              <Award className="w-8 h-8" />
            </div>
            <div className="space-y-3 flex-1 w-full">
              <div className="flex flex-wrap items-center gap-2">
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-amber-100 dark:bg-amber-950/40 text-amber-800 dark:text-amber-300 text-xs font-mono font-semibold">
                  Certification
                </span>
                <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-emerald-100 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 text-xs font-semibold">
                  <Check className="w-3 h-3" />
                  Verified
                </span>
              </div>
              <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 leading-snug">
                Udacity Programming Fundamentals Nanodegree
              </h3>
              <p className="text-sm text-zinc-600 dark:text-slate-400 leading-relaxed font-sans">
                Completed rigorous training in Responsive Design, JavaScript, HTML, CSS, and Git.
              </p>

              {/* Certificate Image Thumbnail */}
              <div className="pt-2">
                <div 
                  onClick={() => setIsModalOpen(true)}
                  className="relative group overflow-hidden rounded-xl border border-zinc-200 dark:border-zinc-800 cursor-pointer aspect-[4/3] max-w-sm bg-zinc-100 dark:bg-zinc-900 transition-all duration-300 hover:border-violet-500/50 hover:shadow-lg"
                >
                  <img
                    src="/screenshots/Certificate.png"
                    alt="Udacity Certificate of Completion"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white text-xs font-medium font-mono">
                    <Eye className="w-4 h-4 text-white" />
                    <span>Click to Enlarge</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Certificate Lightbox Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.85 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-zinc-950"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="relative max-w-4xl w-full bg-white dark:bg-zinc-950 rounded-2xl shadow-2xl overflow-hidden border border-zinc-200 dark:border-zinc-800 z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 p-2 bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="p-4 sm:p-6 flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <span className="text-xs font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest">Verification ID</span>
                    <h4 className="font-display font-bold text-lg text-zinc-900 dark:text-zinc-50">
                      Udacity Front End Web Developer Nanodegree Certificate
                    </h4>
                  </div>
                </div>

                {/* ✅ FIXED: Main Large Image - uses the SAME path as thumbnail */}
                <div className="aspect-[4/3] w-full bg-zinc-100 dark:bg-zinc-900 rounded-xl overflow-hidden border border-zinc-200 dark:border-zinc-800">
                  <img
                    src="/screenshots/Certificate.png"
                    alt="Udacity Front End Web Developer Nanodegree Certificate of Completion"
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}