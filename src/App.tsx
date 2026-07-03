/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import About from './components/About';
import Contact from './components/Contact';
import ConfigurationPanel from './components/ConfigurationPanel';

export default function App() {
  return (
    <PortfolioProvider>
      <div className="min-h-screen bg-white dark:bg-[#050505] text-zinc-900 dark:text-slate-300 transition-colors duration-300 font-sans selection:bg-indigo-500/30">
        {/* Navigation bar */}
        <Navbar />

        {/* Portfolio main structure */}
        <main className="relative">
          {/* Hero Section */}
          <Hero />

          {/* Technical Skills Section */}
          <Skills />

          {/* Projects Showcases Section */}
          <Projects />

          {/* Education & Certifications Section */}
          <Education />

          {/* About Me Details Section */}
          <About />

          {/* Contact Form Section */}
          <Contact />
        </main>

        {/* Footer */}
        <footer className="py-8 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-50 dark:bg-[#0a0a0a] text-center text-xs text-zinc-500 dark:text-slate-500 transition-colors duration-300">
          <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p>&copy; {new Date().getFullYear()} Portfolio. All rights reserved.</p>
              <p className="text-[11px] text-zinc-400 dark:text-slate-600 mt-1">Proudly built by a future AAU Information Science Graduate.</p>
            </div>
            <p className="font-mono">
              Crafted with <span className="text-rose-500">&hearts;</span> &bull; Sophisticated Dark Theme
            </p>
          </div>
        </footer>

        {/* Dynamic Placeholders Customize Panel */}
        <ConfigurationPanel />
      </div>
    </PortfolioProvider>
  );
}

