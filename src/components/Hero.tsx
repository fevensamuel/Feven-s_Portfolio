import React from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Github, ArrowRight, Code2, Sparkles, Linkedin, Download } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const { config } = usePortfolio();

  return (
    <section
      id="home"
      className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden py-20 px-4 sm:px-6 lg:px-8 transition-colors duration-300 bg-white dark:bg-[#050505]"
    >
      {/* Decorative background grid and gradients */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] dark:bg-[linear-gradient(to_right,rgba(139,92,246,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(139,92,246,0.04)_1px,transparent_1px)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 dark:bg-violet-500/5 rounded-full filter blur-[100px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-fuchsia-500/10 dark:bg-fuchsia-500/5 rounded-full filter blur-[100px] animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* Animated Greeting Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-100 dark:bg-[#0d0d0d] border border-zinc-200 dark:border-slate-800/60 text-zinc-700 dark:text-slate-400 text-xs font-mono mb-8 shadow-sm"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for Web &amp; Mobile Developer Roles</span>
        </motion.div>

        {/* Title */}
        <div className="mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
            className="font-display text-5xl sm:text-7xl lg:text-8xl font-black tracking-tight leading-[0.95] text-zinc-950 dark:text-white"
          >
            <span className="block font-black select-none tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-violet-600 via-fuchsia-600 to-indigo-600 dark:from-violet-400 dark:via-fuchsia-400 dark:to-indigo-400">
              Feven Samuel
            </span>
          </motion.h1>
        </div>

        {/* Sub-description */}
        <div className="space-y-3 mb-10 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100 tracking-tight leading-snug"
          >
            Front-end, React Native Mobile app Developer
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 font-medium font-sans"
          >
            3rd year Information Science Student @ AAU
          </motion.p>
        </div>

        {/* Stack Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25 }}
          className="flex flex-col items-center justify-center gap-4 mb-10 text-sm"
        >
          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-slate-500 mr-1.5">Primary Core:</span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-violet-50 border border-violet-200 text-violet-700 dark:bg-violet-950/40 dark:border-violet-800 dark:text-violet-300 shadow-sm">
              Front-End
            </span>
             <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-fuchsia-50 border border-fuchsia-200 text-fuchsia-700 dark:bg-fuchsia-950/40 dark:border-fuchsia-800 dark:text-fuchsia-300 shadow-sm">
              HTML/CSS/JS
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-purple-50 border border-purple-200 text-purple-700 dark:bg-purple-950/40 dark:border-purple-800 dark:text-purple-300 shadow-sm">
              React Native
            </span>
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-rose-50 border border-rose-200 text-rose-700 dark:bg-rose-950/40 dark:border-rose-800 dark:text-rose-300 shadow-sm">
              PHP
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-slate-500 mr-1.5">Currently Exploring:</span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-50 border border-zinc-200/60 text-zinc-500 dark:bg-zinc-900/40 dark:border-slate-800 dark:text-slate-400 shadow-sm">
              Back-End
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-50 border border-zinc-200/60 text-zinc-500 dark:bg-zinc-900/40 dark:border-slate-800 dark:text-slate-400 shadow-sm">
              React
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-50 border border-zinc-200/60 text-zinc-500 dark:bg-zinc-900/40 dark:border-slate-800 dark:text-slate-400 shadow-sm">
              Django
            </span>
            <span className="px-3 py-1 rounded-full text-xs font-semibold bg-zinc-50 border border-zinc-200/60 text-zinc-500 dark:bg-zinc-900/40 dark:border-slate-800 dark:text-slate-400 shadow-sm">
              Python
            </span>
          </div>
        </motion.div>

        {/* Call to Actions - UPDATED WITH WORKING LINKS */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 max-w-3xl mx-auto"
        >
          {/* GitHub Button - Direct link */}
          <a
            href="https://github.com/fevensamuel"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-zinc-950 text-white dark:bg-white dark:text-zinc-950 font-medium rounded-xl hover:shadow-lg dark:hover:shadow-violet-500/10 hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 group border border-zinc-800 dark:border-zinc-200 cursor-pointer text-sm"
          >
            <Github className="w-4 h-4" />
            <span>GitHub Profile</span>
            <ArrowRight className="w-3.5 h-3.5 text-zinc-400 group-hover:translate-x-1 transition-transform" />
          </a>

          {/* LinkedIn Button - Direct link */}
          <a
            href="https://www.linkedin.com/in/feven-samuel-087a23419/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-violet-600 text-white hover:bg-violet-700 dark:bg-violet-950 dark:text-violet-200 dark:border dark:border-violet-500/30 dark:hover:bg-violet-900/50 font-medium rounded-xl hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 cursor-pointer text-sm"
          >
            <Linkedin className="w-4 h-4" />
            <span>LinkedIn Profile</span>
          </a>

          {/* Resume Download Button - Direct link to PDF in public folder */}
          <a
            href="/FevenSamuel_Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-6 py-3 bg-zinc-100 text-zinc-900 hover:bg-zinc-200/80 dark:bg-zinc-900 dark:text-zinc-50 dark:hover:bg-zinc-800/80 font-medium rounded-xl hover:shadow-md hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2 border border-zinc-200/50 dark:border-zinc-800/50 cursor-pointer text-sm"
          >
            <Download className="w-4 h-4 text-emerald-500" />
            <span>Download Resume</span>
          </a>

          {/* Projects Button */}
          <a
            href="#projects"
            className="w-full sm:w-auto px-6 py-3 bg-zinc-50 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 dark:bg-zinc-950 dark:text-slate-400 dark:hover:text-zinc-200 dark:hover:bg-zinc-900 font-medium rounded-xl hover:shadow-sm transition-all flex items-center justify-center gap-2 border border-zinc-200/40 dark:border-zinc-800/40 cursor-pointer text-sm"
          >
            <Code2 className="w-4 h-4 text-violet-500" />
            <span>Explore Projects</span>
          </a>
        </motion.div>
      </div>

      {/* Slide down mouse indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-zinc-400 opacity-60">
        <div className="w-6 h-10 border-2 border-zinc-400 rounded-full p-1 flex justify-center">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1.5 h-1.5 bg-violet-600 dark:bg-violet-400 rounded-full"
          />
        </div>
      </div>
    </section>
  );
}