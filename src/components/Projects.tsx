import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ExternalLink,
  Smartphone,
  Construction,
  Users,
  Code,
  Sparkles,
  Info,
  X,
  CheckCircle2,
  Cpu,
  Layers,
  Calendar,
  Camera,
  ChevronLeft,
  ChevronRight,
  Laptop,
} from 'lucide-react';

interface Project {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  extendedDescription: string;
  tech: string[];
  features: string[];
  techHighlights: string[];
  isMobile: boolean;
  isInProgress?: boolean;
  isTeam?: boolean;
  logoLetters: string;
  logoUrl: string;
  liveDemoUrl: string;
  screenshots: string[];
}

const PROJECTS_DATA: Project[] = [
  {
    id: 'isquiz',
    title: 'IsQuiz',
    subtitle: 'Mobile-Optimized Interactive Study Application',
    description: 'A highly polished, mobile-optimized interactive study application designed to help IS students review, practice, and master core topics.',
    extendedDescription: 'IsQuiz is designed to help Information Systems students review, practice, and master core topics in Mobile Computing, Networking, Database, Security, and Ecommerce.',
    tech: ['React Native', 'JavaScript', 'AsyncStorage'],
    features: [
      'Dual Theme Engine (☀️/🌙) for late-night exam prep.',
      'Mobile-First Simulator with category selectors.',
      'Feedback Cards with validation animations.',
      'Global Exam Speed Timer (⏱️) with 30-second limit.',
      'Smart Scoring & Performance Metrics.',
    ],
    techHighlights: [
      'Engineered responsive local states to manage asynchronous question flows.',
      'Developed custom layout algorithms optimized for mobile.',
    ],
    isMobile: true,
    logoLetters: '?Q',
    logoUrl: '/logos/isquiz_logo.png',
    liveDemoUrl: '#',
    screenshots: [
      '/screenshots/IS1.jpg',
      '/screenshots/IS2.jpg',
      '/screenshots/IS3.jpg',
      '/screenshots/IS4.jpg',
      '/screenshots/IS5.jpg',
      '/screenshots/IS6.jpg',
      '/screenshots/IS7.jpg',
      '/screenshots/IS8.jpg',
      '/screenshots/IS9.jpg',
    ],
  },
  {
    id: 'bet4rent',
    title: 'Bet4Rent',
    subtitle: 'Ethiopian Property Rental Marketplace',
    description: 'A secure, transparent property rental marketplace connecting landlords and tenants in Ethiopia with integrated payments and verified profiles.',
    extendedDescription: 'Bet4Rent is a modern rental marketplace built for Addis Ababa. It connects landlords and tenants through verified profiles, secure payment gateways, and fair refund policies.',
    tech: ['React Native', 'Django REST', 'Chapa API', 'Firebase Cloud Messaging'],
    features: [
      'Tenant Portal: Browse, filter, and book verified properties.',
      'Landlord Suite: Post listings and manage properties.',
      'Admin Panel: Moderates listings and reviews refund requests.',
      'Chapa & Telebirr integration with automated tiered commissions.',
      'Trust & Security: Profile validation and 3-day refund window.'
    ],
    techHighlights: [
      'Designed secure Django REST JWT-auth endpoints for React Native client.',
      'Integrated Chapa & Telebirr payment gateways with commission splits.',
      'Programmed a 3-day refund validation sequence.'
    ],
    isMobile: true,
    logoLetters: 'B4R',
    logoUrl: '/logos/bet4rent_icon.png',
    liveDemoUrl: '#',
    screenshots: [
      '/screenshots/BR19.jpg',
      '/screenshots/BR14.jpg',
      '/screenshots/BR17.jpg',
      '/screenshots/BR1.jpg',
      '/screenshots/BR13.jpg',
      '/screenshots/BR12.jpg',
      '/screenshots/BR11.jpg',
      '/screenshots/BR15.jpg',
      '/screenshots/BR16.jpg',
      '/screenshots/BR10.jpg',
      '/screenshots/BR9.jpg',
      '/screenshots/BR7.jpg',
      '/screenshots/BR8.jpg',
      '/screenshots/BR6.jpg',
      '/screenshots/BR5.jpg',
      '/screenshots/BR4.jpg',
      '/screenshots/BR3.jpg',
      '/screenshots/BR2.jpg',
      '/screenshots/BR18.jpg',
    ],
  },
  {
    id: 'dhms',
    title: 'DHMS',
    subtitle: 'AAU Housing & Dorm Portal',
    description: 'A robust web-based system designed to coordinate and streamline student dormitory operations at Addis Ababa University.',
    extendedDescription: 'DHMS (Dormitory Management System) is a collaborative team project built to manage housing facilities, simplify room allocation, and track maintenance records for AAU students.',
    tech: ['HTML', 'CSS', 'JavaScript', 'Django', 'PostgreSQL'],
    features: [
      'Automated Room Allocation: Intelligent bed allocation algorithms.',
      'Real-Time Maintenance Logs: Student reporting and technician tracking.',
      'Laundry Scheduler: Dynamic calendar for laundry slot booking.',
      'Admin Control Panel: Comprehensive system dashboard.'
    ],
    techHighlights: [
      'Formulated roommate-matching algorithms to automate placement.',
      'Designed database models for complex housing constraints.',
      'Created real-time laundry peak-usage visualization trackers.'
    ],
    isMobile: false,
    isTeam: true,
    logoLetters: 'DHMS',
    logoUrl: '/logos/aaudhms_logo.png',
    liveDemoUrl: 'https://aau-dhms.vercel.app/',
    screenshots: [
      '/screenshots/DH1.jpg',
      '/screenshots/DH2.jpg',
      '/screenshots/DH3.jpg',
      '/screenshots/DH4.jpg',
      '/screenshots/DH5.jpg',
      '/screenshots/DH6.jpg',
      '/screenshots/DH7.jpg',
      '/screenshots/DH8.jpg',
      '/screenshots/DH9.jpg',
      '/screenshots/DH10.jpg',
    ],
  },
  {
    id: 'jobfinder',
    title: 'Internship & Job Finder',
    subtitle: 'Unified Student Career Portal',
    description: 'A complete, role-based career platform designed to connect students with employers, featuring candidate tracking and job moderation.',
    extendedDescription: 'This platform bridges the gap between students and career opportunities with three distinct user roles: Students, Companies, and Admins.',
    tech: ['PHP', 'MySQL', 'JavaScript', 'HTML/CSS'],
    features: [
      'Student Space: Search jobs and quick-apply with CVs.',
      'Employer Dashboard: Post opportunities and track candidates.',
      'Admin Moderation: Screen and approve listings.',
      'Bulk Cleanup: 1-click purge of expired listings.',
      'Deadline Awareness: Automatic disabling of expired applications.'
    ],
    techHighlights: [
      'Constructed a multi-role RBAC system for Student, Employer, and Admin.',
      'Implemented 1-click cascade delete for expired job records.',
      'Formed Kanban candidate tracking using relational databases.'
    ],
    isMobile: false,
    logoLetters: 'IF',
    logoUrl: '/logos/internship&jobfinder_logo.png',
    liveDemoUrl: '#',
    screenshots: [
      '/screenshots/JF1.png',
      '/screenshots/JF2.png',
      '/screenshots/JF3.png',
      '/screenshots/JF4.png',
      '/screenshots/JF5.png',
      '/screenshots/JF6.png',
      '/screenshots/JF7.png',
      '/screenshots/JF8.png',
      '/screenshots/JF9.png',
      '/screenshots/JF10.png',
      '/screenshots/JF11.png',
      '/screenshots/JF12.png',
      '/screenshots/JF13.png',
      '/screenshots/JF22.png',
      '/screenshots/JF23.png',
      '/screenshots/JF14.png',
      '/screenshots/JF15.png',
      '/screenshots/JF17.png',
      '/screenshots/JF18.png',
      '/screenshots/JF19.png',
      '/screenshots/JF20.png',
      '/screenshots/JF21.png',
    ],
  },
  {
    id: 'todolist',
    title: 'Cozy Paw Planner',
    subtitle: 'Daily/Weekly/Monthly Planner & To-Do Suite',
    description: 'A multi-user personal and academic planner with editable time-blocked grids and priority-allocated To-Do lists.',
    extendedDescription: 'Cozy Paw Planner is an ES module-based local workspace application with login/registration, custom onboarding, and interactive schedule boards.',
    tech: ['HTML', 'CSS', 'JavaScript (ES modules)', 'Vite'],
    features: [
      'Daily, Weekly, & Monthly Planner with editable time slots.',
      'Priority To-Do Lists with color swatches and time allocations.',
      'Long-Press Row Shortcuts for quick editing.',
      'Recurring & Bulk Generator for calendar population.',
      'Local Multi-User Security with independent workspaces.'
    ],
    techHighlights: [
      'Programmed custom touch-and-hold gesture listeners.',
      'Engineered state persistence using partitioned localStorage.',
      'Assembled modular, framework-less frontend with Vite.'
    ],
    isMobile: false,
    logoLetters: 'CPP',
    logoUrl: '/logos/cozypawplanner_logo.png',
    liveDemoUrl: 'https://cozy-paw-planner.vercel.app/',
    screenshots: [
      '/screenshots/CP1.png',
      '/screenshots/CP8.png',
      '/screenshots/CP2.png',
      '/screenshots/CP3.png',
      '/screenshots/CP4.png',
      '/screenshots/CP5.png',
      '/screenshots/CP6.png',
      '/screenshots/CP7.png',
    ],
  },
];

const getTechBadgeStyles = (tech: string): string => {
  const normalized = tech.toLowerCase().trim();
  switch (normalized) {
    case 'react native':
      return 'bg-purple-50 text-purple-700 border-purple-200/80 dark:bg-purple-950/40 dark:text-purple-300 dark:border-purple-800/40';
    case 'react':
      return 'bg-sky-50 text-sky-700 border-sky-200/80 dark:bg-sky-950/40 dark:text-sky-300 dark:border-sky-800/40';
    case 'javascript':
    case 'js':
      return 'bg-amber-50 text-amber-700 border-amber-200/80 dark:bg-amber-950/30 dark:text-amber-300 dark:border-amber-800/40';
    case 'php':
      return 'bg-indigo-50 text-indigo-700 border-indigo-200/80 dark:bg-indigo-950/40 dark:text-indigo-300 dark:border-indigo-800/40';
    case 'mysql':
      return 'bg-blue-50 text-blue-700 border-blue-200/80 dark:bg-blue-950/40 dark:text-blue-300 dark:border-blue-800/40';
    case 'rest api':
      return 'bg-emerald-50 text-emerald-700 border-emerald-200/80 dark:bg-emerald-950/40 dark:text-emerald-300 dark:border-emerald-800/40';
    case 'node.js':
    case 'node':
      return 'bg-green-50 text-green-700 border-green-200/80 dark:bg-green-950/40 dark:text-green-300 dark:border-green-800/40';
    case 'express':
      return 'bg-zinc-100 text-zinc-800 border-zinc-200 dark:bg-zinc-800/80 dark:text-zinc-200 dark:border-zinc-700';
    case 'mongodb':
      return 'bg-teal-50 text-teal-700 border-teal-200/80 dark:bg-teal-950/40 dark:text-teal-300 dark:border-teal-800/40';
    case 'html':
    case 'html/css':
      return 'bg-orange-50 text-orange-700 border-orange-200/80 dark:bg-orange-950/40 dark:text-orange-300 dark:border-orange-800/40';
    case 'css':
      return 'bg-pink-50 text-pink-700 border-pink-200/80 dark:bg-pink-950/40 dark:text-pink-300 dark:border-pink-800/40';
    case 'asyncstorage':
      return 'bg-cyan-50 text-cyan-700 border-cyan-200/80 dark:bg-cyan-950/40 dark:text-cyan-300 dark:border-cyan-800/40';
    default:
      return 'bg-zinc-100 text-zinc-700 border-zinc-200 dark:bg-zinc-800 dark:text-zinc-300 dark:border-zinc-700';
  }
};

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [selectedScreenshotsProject, setSelectedScreenshotsProject] = useState<Project | null>(null);
  const [activeScreenshotIndex, setActiveScreenshotIndex] = useState<number>(0);

  return (
    <section
      id="projects"
      className="py-24 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#050505] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1 px-3 py-1 bg-violet-50 dark:bg-violet-950/40 text-violet-700 dark:text-violet-400 text-xs font-mono rounded-full mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Product Showcase</span>
          </div>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-zinc-900 dark:text-zinc-50 tracking-tight mb-4">
            Featured Projects
          </h2>
          <div className="h-1.5 w-16 bg-violet-600 dark:bg-violet-400 mx-auto rounded-full mb-4" />
          <p className="text-zinc-600 dark:text-zinc-400">
            A selection of my professional work, research, and hobby projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS_DATA.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col bg-zinc-50 dark:bg-[#111] rounded-2xl border border-zinc-200/60 dark:border-slate-800 shadow-md hover:shadow-xl hover:border-zinc-300 dark:hover:border-violet-500/50 transition-all overflow-hidden h-full relative"
            >
              <div className="relative bg-gradient-to-br from-violet-900/10 via-purple-900/5 to-violet-950/20 dark:bg-[#070208] h-52 border-b border-zinc-200/50 dark:border-slate-800/50 flex flex-col justify-center items-center p-8 select-none overflow-hidden group">
                <div className="absolute inset-0 bg-grid-pattern opacity-[0.03] dark:opacity-[0.05]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-violet-500/10 rounded-full filter blur-2xl group-hover:scale-125 transition-transform duration-500" />
                
                <div className="relative w-32 h-32 rounded-2xl bg-white dark:bg-[#111] border border-zinc-200/80 dark:border-zinc-800 shadow-xl flex items-center justify-center p-1 transition-all duration-300 group-hover:scale-105 group-hover:border-violet-500/50">
                  <img
                    src={project.logoUrl}
                    alt={`${project.title} logo`}
                    className="w-full h-full object-contain z-10 rounded-xl"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-violet-700 to-violet-950 rounded-xl text-white shadow-inner select-none p-1 z-0">
                    <span className="font-display font-extrabold text-4xl tracking-tight leading-none text-white">
                      {project.logoLetters}
                    </span>
                    <span className="text-[8px] font-mono uppercase tracking-widest text-violet-200/80 mt-1">
                      {project.isMobile ? 'Mobile' : 'Web App'}
                    </span>
                  </div>
                </div>

                <div className="absolute top-4 right-4 bg-violet-600/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold flex items-center gap-1 border border-violet-500/10">
                  {project.isMobile ? (
                    <>
                      <Smartphone className="w-3 h-3" />
                      Mobile App
                    </>
                  ) : project.isTeam ? (
                    <>
                      <Users className="w-3 h-3" />
                      Team Work
                    </>
                  ) : (
                    <>
                      <Code className="w-3 h-3" />
                      Full Stack
                    </>
                  )}
                </div>

                {project.isInProgress && (
                  <div className="absolute bottom-4 right-4 bg-amber-600/15 text-amber-700 dark:bg-amber-400/20 dark:text-amber-300 text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded-full font-bold flex items-center gap-1 animate-pulse border border-amber-300/30">
                    <Construction className="w-3 h-3" />
                    In Progress
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 mb-2">
                  {project.title}
                </h3>
                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed flex-grow mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className={`text-xs font-mono px-2.5 py-0.5 border rounded-full font-medium transition-all ${getTechBadgeStyles(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col gap-2.5 mt-auto">
                  {project.isInProgress ? (
                    <div className="grid grid-cols-2 gap-2.5">
                      <button
                        disabled
                        className="px-3 py-2 bg-amber-100/50 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300 font-medium text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-not-allowed opacity-80"
                      >
                        <Construction className="w-3.5 h-3.5" />
                        <span>In Progress</span>
                      </button>
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-medium text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                      >
                        <Info className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                        <span>Detail</span>
                      </button>
                    </div>
                  ) : (
                    <>
                      {!project.isMobile && project.liveDemoUrl !== '#' && (
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full px-3 py-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold text-xs rounded-xl shadow-md transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                          <span>Live Demo</span>
                        </a>
                      )}

                      <div className="grid grid-cols-2 gap-2.5">
                        <button
                          onClick={() => {
                            setSelectedScreenshotsProject(project);
                            setActiveScreenshotIndex(0);
                          }}
                          className="px-3 py-2 bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-700 dark:text-zinc-300 font-semibold text-xs rounded-xl hover:bg-zinc-300/80 dark:hover:bg-zinc-800/85 transition-all text-center flex items-center justify-center gap-1 cursor-pointer border border-zinc-300/20 dark:border-zinc-700/30"
                        >
                          {project.isMobile ? (
                            <Smartphone className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          ) : (
                            <Camera className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          )}
                          <span>Screenshots</span>
                        </button>

                        <button
                          onClick={() => setSelectedProject(project)}
                          className="px-3 py-2 border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 font-semibold text-xs rounded-xl transition-all text-center flex items-center justify-center gap-1 cursor-pointer"
                        >
                          <Info className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                          <span>Detail</span>
                        </button>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ====== DETAIL MODAL ====== */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/70 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-white dark:bg-[#0d0d0d] w-full max-w-2xl rounded-3xl border border-zinc-200 dark:border-slate-800 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:text-slate-400 dark:hover:text-zinc-100 p-2 rounded-full transition-colors z-20 cursor-pointer border border-zinc-200/50 dark:border-slate-800"
              >
                <X className="w-4 h-4" />
              </button>

              <div className="relative bg-gradient-to-br from-violet-900/15 via-purple-900/10 to-violet-950/30 dark:bg-[#08020a] p-8 border-b border-zinc-200/50 dark:border-slate-800/50">
                <div className="flex items-start gap-5">
                  <div className="relative w-24 h-24 rounded-xl bg-white dark:bg-[#111] border border-zinc-200 dark:border-zinc-800 shadow-lg flex items-center justify-center p-2 shrink-0 select-none">
                    <img
                      src={selectedProject.logoUrl}
                      alt={`${selectedProject.title} logo`}
                      className="w-full h-full object-contain z-10 rounded-lg"
                      onError={(e) => {
                        e.currentTarget.style.display = 'none';
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-violet-700 to-violet-950 rounded-xl text-white shadow-inner">
                      <span className="font-display font-black text-2xl tracking-tight text-white select-none">
                        {selectedProject.logoLetters}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-1">
                    <span className="inline-block px-2.5 py-0.5 bg-violet-600/10 text-violet-600 dark:bg-violet-400/10 dark:text-violet-400 text-[10px] font-mono font-bold uppercase rounded-full border border-violet-500/10">
                      {selectedProject.isMobile ? 'Mobile Product' : selectedProject.isTeam ? 'Team Project' : 'Web Product'}
                    </span>
                    <h3 className="font-display font-bold text-2xl text-zinc-900 dark:text-zinc-50 leading-tight">
                      {selectedProject.title}
                    </h3>
                    <p className="text-sm font-medium text-violet-600 dark:text-violet-400">
                      {selectedProject.subtitle}
                    </p>
                  </div>
                </div>
              </div>

              <div className="overflow-y-auto p-8 space-y-6 flex-grow custom-scrollbar">
                <div className="space-y-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500">
                    Product Overview
                  </h4>
                  <p className="text-zinc-700 dark:text-slate-300 text-sm leading-relaxed">
                    {selectedProject.extendedDescription}
                  </p>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Layers className="w-3.5 h-3.5 text-violet-500" />
                    <span>Key Features</span>
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-2 bg-zinc-50 dark:bg-[#111] p-3 rounded-xl border border-zinc-150 dark:border-slate-800/40">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="text-xs text-zinc-600 dark:text-slate-300 leading-snug">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-3">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500 flex items-center gap-1.5">
                    <Cpu className="w-3.5 h-3.5 text-violet-500" />
                    <span>Architecture Highlights</span>
                  </h4>
                  <div className="space-y-2.5">
                    {selectedProject.techHighlights.map((highlight, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-violet-500 rounded-full mt-2 shrink-0 animate-pulse" />
                        <p className="text-xs text-zinc-600 dark:text-slate-400 leading-relaxed">
                          {highlight}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="space-y-2.5 pt-2">
                  <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-zinc-400 dark:text-slate-500">
                    Technology Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className={`px-3 py-1.5 border text-xs font-mono rounded-lg font-semibold transition-all ${getTechBadgeStyles(tech)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-zinc-100 dark:border-slate-800/80 p-6 bg-zinc-50 dark:bg-[#0a0a0a] flex items-center justify-between gap-4 flex-wrap">
                <span className="text-[10px] font-mono text-zinc-400 dark:text-slate-500 flex items-center gap-1">
                  <Calendar className="w-3.5 h-3.5 text-violet-500" />
                  Academic &amp; Professional Projects
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-4 py-2 border border-zinc-200 dark:border-slate-800 text-zinc-700 dark:text-slate-300 font-medium text-xs rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 transition-colors cursor-pointer"
                  >
                    Close
                  </button>

                  <button
                    onClick={() => {
                      setSelectedScreenshotsProject(selectedProject);
                      setActiveScreenshotIndex(0);
                      setSelectedProject(null);
                    }}
                    className="px-4 py-2 bg-zinc-150 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-700 dark:text-slate-300 border border-zinc-250 dark:border-slate-800/85 font-medium text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-sm"
                  >
                    <Camera className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                    <span>View Screenshots</span>
                  </button>

                  {!selectedProject.isMobile && selectedProject.liveDemoUrl !== '#' && (
                    <a
                      href={selectedProject.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-violet-600 hover:bg-violet-700 text-white font-medium text-xs rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-md shadow-violet-500/10"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* ====== SCREENSHOTS MODAL - DEFINITIVE FIX ====== */}
      <AnimatePresence>
        {selectedScreenshotsProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedScreenshotsProject(null)}
              className="absolute inset-0 bg-black/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative bg-white dark:bg-[#0c0c0e] w-full max-w-3xl rounded-3xl border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden max-h-[90vh] flex flex-col z-10 p-6 md:p-8"
            >
              <div className="flex justify-between items-center mb-6 shrink-0 border-b border-zinc-150 dark:border-zinc-850 pb-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <Smartphone className="w-5 h-5 text-violet-500" />
                    <h3 className="font-display font-bold text-xl text-zinc-900 dark:text-zinc-50 leading-tight">
                      {selectedScreenshotsProject.title} Showcase
                    </h3>
                  </div>
                  <p className="text-xs text-zinc-500 dark:text-zinc-400">
                    {selectedScreenshotsProject.screenshots.length} screenshots available – Scroll vertically to see full image
                  </p>
                </div>
                <button
                  onClick={() => setSelectedScreenshotsProject(null)}
                  className="bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-900 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-800 dark:text-slate-400 dark:hover:text-zinc-100 p-2 rounded-full transition-colors border border-zinc-200/50 dark:border-slate-800/80 cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="flex-grow overflow-y-auto py-2 custom-scrollbar">
                <div className="w-full flex items-center justify-center gap-2 md:gap-4">
                  <button
                    onClick={() => {
                      const total = selectedScreenshotsProject.screenshots.length;
                      setActiveScreenshotIndex(prev => (prev === 0 ? total - 1 : prev - 1));
                    }}
                    className="p-2 md:p-3 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  <div className="w-full flex justify-center">
                    {selectedScreenshotsProject.isMobile ? (
                      <div className="relative w-[300px] h-[500px] rounded-[36px] border-[10px] border-zinc-900 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden">
                        <div className="absolute top-0 left-0 right-0 z-20 h-6 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-between px-6 text-[8px] font-mono text-zinc-500 dark:text-zinc-400 pt-1">
                          <span>09:41 AM</span>
                          <div className="flex items-center gap-1">
                            <span>5G</span>
                            <div className="w-3 h-2 bg-zinc-400/80 rounded-sm" />
                          </div>
                        </div>

                        <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-28 h-[18px] bg-zinc-900 dark:bg-zinc-800 rounded-b-xl flex items-center justify-center">
                          <div className="w-8 h-1 bg-zinc-700/80 rounded-full mb-1" />
                        </div>

                        <div className="absolute inset-x-0 top-0 bottom-0 z-10 overflow-y-auto pt-7 pb-4 bg-zinc-100 dark:bg-zinc-900/60">
                          {selectedScreenshotsProject.screenshots[activeScreenshotIndex] ? (
                            <img
                              src={selectedScreenshotsProject.screenshots[activeScreenshotIndex]}
                              alt={`${selectedScreenshotsProject.title} screen ${activeScreenshotIndex + 1}`}
                              className="w-full h-auto block"
                              onError={() => {}}
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 text-xs p-4 text-center">
                              <Camera className="w-8 h-8 mb-2 opacity-30" />
                              <span>No screenshot available</span>
                            </div>
                          )}
                        </div>

                        <div className="absolute bottom-0 left-0 right-0 z-20 h-4 bg-zinc-50 dark:bg-zinc-900/60 flex items-center justify-center pb-1">
                          <div className="w-20 h-0.5 bg-zinc-300 dark:bg-zinc-700 rounded-full" />
                        </div>
                      </div>
                    ) : (
                      <div className="relative w-full max-w-[520px] rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-2xl overflow-hidden max-h-[500px]">
                        <div className="h-9 bg-zinc-100 dark:bg-zinc-900/85 border-b border-zinc-200 dark:border-zinc-800 shrink-0 flex items-center px-4 gap-3 z-20">
                          <div className="flex gap-1.5 shrink-0">
                            <span className="w-2.5 h-2.5 rounded-full bg-red-400 block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-yellow-400 block" />
                            <span className="w-2.5 h-2.5 rounded-full bg-green-400 block" />
                          </div>
                          <div className="bg-zinc-200/60 dark:bg-zinc-800/60 text-zinc-500 dark:text-zinc-400 text-[9px] font-mono py-1 px-3 rounded-md flex-grow flex items-center justify-between">
                            <span className="truncate flex items-center gap-1">
                              <Laptop className="w-2.5 h-2.5 text-zinc-400" />
                              {selectedScreenshotsProject.liveDemoUrl !== '#'
                                ? selectedScreenshotsProject.liveDemoUrl
                                : `${selectedScreenshotsProject.id}.vercel.app`}
                            </span>
                            <span>🔒 SECURE</span>
                          </div>
                        </div>

                        <div className="overflow-y-auto bg-zinc-100 dark:bg-zinc-900/60 max-h-[400px]">
                          {selectedScreenshotsProject.screenshots[activeScreenshotIndex] ? (
                            <img
                              src={selectedScreenshotsProject.screenshots[activeScreenshotIndex]}
                              alt={`${selectedScreenshotsProject.title} screen ${activeScreenshotIndex + 1}`}
                              className="w-full h-auto block"
                            />
                          ) : (
                            <div className="w-full h-full flex flex-col items-center justify-center text-zinc-400 dark:text-zinc-600 text-xs p-4 text-center">
                              <Camera className="w-8 h-8 mb-2 opacity-30" />
                              <span>No screenshot available</span>
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  <button
                    onClick={() => {
                      const total = selectedScreenshotsProject.screenshots.length;
                      setActiveScreenshotIndex(prev => (prev === total - 1 ? 0 : prev + 1));
                    }}
                    className="p-2 md:p-3 bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full transition-all border border-zinc-200 dark:border-zinc-800 shadow-sm shrink-0 cursor-pointer"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>

              <div className="border-t border-zinc-150 dark:border-zinc-850 pt-4 mt-3 shrink-0">
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-center text-[9px] font-mono text-zinc-400">
                    <span>INDEX: {activeScreenshotIndex + 1} / {selectedScreenshotsProject.screenshots.length}</span>
                    <span className="text-violet-500 font-bold uppercase tracking-wider">Click to jump</span>
                  </div>

                  <div className="flex flex-wrap justify-center gap-1.5 md:gap-2">
                    {selectedScreenshotsProject.screenshots.map((_, index) => {
                      const isActive = index === activeScreenshotIndex;
                      return (
                        <button
                          key={index}
                          onClick={() => setActiveScreenshotIndex(index)}
                          className={`w-7.5 h-7.5 rounded-full flex items-center justify-center text-[10px] font-mono font-bold transition-all border cursor-pointer ${
                            isActive
                              ? 'bg-violet-600 border-violet-600 text-white shadow-md shadow-violet-500/20 scale-110'
                              : 'bg-zinc-100 dark:bg-zinc-900 border-zinc-200 dark:border-zinc-800 text-zinc-600 dark:text-zinc-400 hover:bg-zinc-200 dark:hover:bg-zinc-800'
                          }`}
                        >
                          {String(index + 1).padStart(2, '0')}
                        </button>
                      );
                    })}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}