import React, { useState } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Settings, X, RotateCcw, Github, Linkedin, FileText } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function ConfigurationPanel() {
  const { config, updateConfig, resetConfig } = usePortfolio();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Settings Button */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-2">
        <button
          id="config-toggle-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="p-3.5 bg-zinc-900 text-white dark:bg-white dark:text-zinc-950 rounded-full shadow-2xl hover:scale-110 active:scale-95 transition-transform cursor-pointer border border-zinc-800 dark:border-zinc-200"
          title="Customize Portfolio Placeholders"
        >
          <Settings className={`w-5 h-5 ${isOpen ? 'animate-spin' : ''}`} />
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              id="config-backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.4 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black z-40"
            />

            {/* Slide-out Panel */}
            <motion.div
              id="config-panel"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 h-full w-full max-w-md bg-white/95 dark:bg-zinc-950/95 backdrop-blur-xl border-l border-zinc-200 dark:border-zinc-800 shadow-2xl z-50 overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between border-b border-zinc-200 dark:border-zinc-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Settings className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
                    <h3 className="font-display font-semibold text-lg text-zinc-900 dark:text-zinc-50">
                      Portfolio Customizer
                    </h3>
                  </div>
                  <button
                    id="config-close-btn"
                    onClick={() => setIsOpen(false)}
                    className="p-1 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg text-zinc-500 transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-6">
                  Update your links and live demo URLs. These will automatically update your portfolio.
                </p>

                <div className="space-y-5">
                  {/* Social Profiles */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Social Profiles
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          GitHub URL
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400">
                            <Github className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            value={config.githubUrl}
                            onChange={(e) => updateConfig('githubUrl', e.target.value)}
                            className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g. https://github.com/username"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          LinkedIn URL
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400">
                            <Linkedin className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            value={config.linkedinUrl}
                            onChange={(e) => updateConfig('linkedinUrl', e.target.value)}
                            className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g. https://linkedin.com/in/username"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          Resume Download/View URL
                        </label>
                        <div className="relative">
                          <span className="absolute inset-y-0 left-0 pl-3 flex items-center text-zinc-400">
                            <FileText className="w-4 h-4" />
                          </span>
                          <input
                            type="text"
                            value={config.resumeUrl}
                            onChange={(e) => updateConfig('resumeUrl', e.target.value)}
                            className="w-full pl-9 pr-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                            placeholder="e.g. https://drive.google.com/.../view"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Vercel Live Demos - ONLY DHMS and To-Do List */}
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-zinc-400 dark:text-zinc-500 mb-2">
                      Live Demo URLs
                    </h4>
                    <div className="space-y-3">
                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          DHMS Vercel URL
                        </label>
                        <input
                          type="text"
                          value={config.dhmsVercelUrl}
                          onChange={(e) => updateConfig('dhmsVercelUrl', e.target.value)}
                          className="w-full px-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="https://aau-dhms.vercel.app"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                          To-Do List Vercel URL
                        </label>
                        <input
                          type="text"
                          value={config.todoListVercelUrl}
                          onChange={(e) => updateConfig('todoListVercelUrl', e.target.value)}
                          className="w-full px-3 py-1.5 text-sm rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                          placeholder="https://cozy-paw-planner.vercel.app"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Reset & Apply Buttons */}
                <div className="flex items-center gap-3 border-t border-zinc-200 dark:border-zinc-800 pt-6 mt-6">
                  <button
                    id="config-reset-btn"
                    onClick={resetConfig}
                    className="flex-1 flex items-center justify-center gap-1 px-4 py-2 text-sm font-medium border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-300 rounded-lg transition-colors cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    Reset
                  </button>
                  <button
                    id="config-apply-btn"
                    onClick={() => setIsOpen(false)}
                    className="flex-1 px-4 py-2 text-sm font-medium bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow-md transition-colors cursor-pointer text-center"
                  >
                    Apply Config
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}