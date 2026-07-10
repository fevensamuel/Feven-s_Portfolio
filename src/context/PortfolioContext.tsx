import React, { createContext, useContext, useState, useEffect } from 'react';
import { PortfolioConfig } from '../types';

const DEFAULT_CONFIG: PortfolioConfig = {
  githubUrl: 'https://github.com/fevensamuel',
  linkedinUrl: 'https://www.linkedin.com/in/feven-samuel-087a23419/',
  resumeUrl: '/FevenSamuel_Resume.pdf', 

  // Project Live Demo Links (Vercel URLs)
  dhmsVercelUrl: 'https://aau-dhms.vercel.app/', 
  todoListVercelUrl: 'https://cozy-paw-planner.vercel.app/',
};

interface PortfolioContextType {
  config: PortfolioConfig;
  updateConfig: (key: keyof PortfolioConfig, value: string) => void;
  resetConfig: () => void;
  isDarkMode: boolean;
  setIsDarkMode: (val: boolean) => void;
  isEditMode: boolean;
  setIsEditMode: (val: boolean) => void;
}

const PortfolioContext = createContext<PortfolioContextType | undefined>(undefined);

export const PortfolioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [config, setConfig] = useState<PortfolioConfig>(() => {
    const saved = localStorage.getItem('portfolio_config');
    if (saved) {
      try {
        return { ...DEFAULT_CONFIG, ...JSON.parse(saved) };
      } catch (e) {
        return DEFAULT_CONFIG;
      }
    }
    return DEFAULT_CONFIG;
  });

  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('portfolio_theme');
    if (saved) {
      return saved === 'dark';
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  const [isEditMode, setIsEditMode] = useState<boolean>(false);

  useEffect(() => {
    localStorage.setItem('portfolio_config', JSON.stringify(config));
  }, [config]);

  useEffect(() => {
    localStorage.setItem('portfolio_theme', isDarkMode ? 'dark' : 'light');
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  const updateConfig = (key: keyof PortfolioConfig, value: string) => {
    setConfig((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const resetConfig = () => {
    setConfig(DEFAULT_CONFIG);
  };

  return (
    <PortfolioContext.Provider
      value={{
        config,
        updateConfig,
        resetConfig,
        isDarkMode,
        setIsDarkMode,
        isEditMode,
        setIsEditMode,
      }}
    >
      {children}
    </PortfolioContext.Provider>
  );
};

export const usePortfolio = () => {
  const context = useContext(PortfolioContext);
  if (!context) {
    throw new Error('usePortfolio must be used within a PortfolioProvider');
  }
  return context;
};
