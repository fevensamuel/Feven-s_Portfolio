import React, { useState, useEffect } from 'react';
import { usePortfolio } from '../context/PortfolioContext';
import { Sun, Moon, Menu, X, Github, Linkedin } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Education', href: '#education' },
  { label: 'About', href: '#about' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDarkMode, setIsDarkMode, config } = usePortfolio();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="sticky top-0 z-30 w-full bg-white/75 dark:bg-zinc-950/75 backdrop-blur-md border-b border-zinc-200/50 dark:border-zinc-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Title */}
          <a
            href="#home"
            className="font-display font-bold text-xl tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-1.5"
          >
            <span className="text-violet-600 dark:text-violet-400 font-mono">&lt;</span>
            <span>Portfolio</span>
            <span className="text-violet-600 dark:text-violet-400 font-mono">/&gt;</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.substring(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors relative ${
                    isActive
                      ? 'text-violet-600 dark:text-violet-400 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100'
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-2 right-2 h-0.5 bg-violet-600 dark:bg-violet-400 rounded-full"
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Controls & External Links */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Social icons */}
            {config.githubUrl && config.githubUrl !== '[YOUR_GITHUB_URL]' && (
              <a
                href={config.githubUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                title="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
            )}
            {config.linkedinUrl && config.linkedinUrl !== '[YOUR_LINKEDIN_URL]' && (
              <a
                href={config.linkedinUrl}
                target="_blank"
                referrerPolicy="no-referrer"
                className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                title="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            )}

            {/* Dark/Light mode Toggle */}
            <button
              id="theme-toggle-desktop"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Mobile Right Controls (Menu & Theme) */}
          <div className="flex md:hidden items-center space-x-2">
            <button
              id="theme-toggle-mobile"
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-900 hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-700 dark:text-zinc-300 transition-colors"
              aria-label="Toggle mobile menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-2 pb-4 space-y-1 transition-colors duration-300"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  activeSection === link.href.substring(1)
                    ? 'bg-zinc-100 dark:bg-zinc-900 text-violet-600 dark:text-violet-400 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:bg-zinc-50 dark:hover:bg-zinc-900/50'
                }`}
              >
                {link.label}
              </a>
            ))}

            <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-start space-x-4 px-3">
              {config.githubUrl && config.githubUrl !== '[YOUR_GITHUB_URL]' && (
                <a
                  href={config.githubUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  title="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              {config.linkedinUrl && config.linkedinUrl !== '[YOUR_LINKEDIN_URL]' && (
                <a
                  href={config.linkedinUrl}
                  target="_blank"
                  referrerPolicy="no-referrer"
                  className="text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors"
                  title="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
