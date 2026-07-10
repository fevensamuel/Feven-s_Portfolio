import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Milestone, Code2, Smartphone } from 'lucide-react';

export default function About() {
  return (
    <section
      id="about"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-zinc-50 dark:bg-[#0a0a0a] border-y border-zinc-200/50 dark:border-slate-800/50 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Visual Highlight Left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            {/* Ambient Background Blur */}
            <div className="absolute inset-0 bg-violet-500/10 rounded-3xl filter blur-xl" />

            <div className="relative bg-white dark:bg-[#0d0d0d] p-8 rounded-3xl border border-zinc-200 dark:border-slate-800/60 shadow-xl overflow-hidden">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <h4 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-50">
                    Developer Info
                  </h4>
                  <p className="text-sm font-mono text-violet-600 dark:text-violet-400 font-semibold mt-0.5">
                    Web &amp; Mobile Developer
                  </p>
                </div>
                <div className="p-3 bg-violet-50 dark:bg-[#050505] border dark:border-slate-800/40 rounded-2xl">
                  <Code2 className="w-6 h-6 text-violet-600 dark:text-violet-400" />
                </div>
              </div>

              <blockquote className="text-zinc-600 dark:text-slate-400 text-sm italic mb-6 leading-relaxed">
                &quot;I am passionate about solving real-world Ethiopian local problems through technology..&quot;
              </blockquote>

              {/* Stats Highlights */}
              <div className="grid grid-cols-2 gap-4 border-t border-zinc-100 dark:border-slate-800/40 pt-6">
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 font-mono">
                    100%
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 font-sans">
                    Production Build Rates
                  </div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-zinc-900 dark:text-zinc-50 font-mono">
                    5+
                  </div>
                  <div className="text-xs text-zinc-500 mt-1 font-sans">
                    Core Tech Stacks Mastered
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bio Text Right */}
          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 space-y-6"
          >
            <div>
              <div className="flex items-center gap-1.5 px-3 py-1 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 text-xs font-mono rounded-full w-fit mb-4">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Professional Background</span>
              </div>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight">
                About Me
              </h2>
              <div className="h-1.5 w-16 bg-violet-600 dark:bg-violet-400 rounded-full mt-4" />
            </div>

            <div className="space-y-4 text-zinc-600 dark:text-slate-400 text-base leading-relaxed">
              <p>
                I am a dedicated Information Science student at Addis Ababa University, 
                currently advancing into my 4th year. My academic journey in database systems and web development,
                combined with my hands-on Udacity certification, allows me to build user-centric applications 
                from the ground up.
                I am passionate about solving real-world Ethiopian local problems through technology.
              </p>
              <p>
                To expand my backend capabilities, I am currently taking my first steps into Python and Django. I am actively applying these technologies to design and develop <strong className="text-zinc-900 dark:text-zinc-50 font-semibold">Bet4Rent</strong>, a professional digital platform aimed at streamlining and modernizing rental housing processes in Ethiopia.
              </p>
            </div>

            {/* Quick badges of specialization */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-start gap-3">
                <div className="p-2 bg-violet-50 dark:bg-violet-950/40 rounded-xl mt-1 text-violet-600 dark:text-violet-400">
                  <Smartphone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                    Mobile Development
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    React Native, iOS &amp; Android, local DB, push notifications.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2 bg-violet-50 dark:bg-violet-950/40 rounded-xl mt-1 text-violet-600 dark:text-violet-400">
                  <Code2 className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-display font-semibold text-sm text-zinc-800 dark:text-zinc-200">
                    Web App Engineer
                  </h4>
                  <p className="text-xs text-zinc-500 mt-0.5">
                    PHP, Django, custom REST APIs.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
