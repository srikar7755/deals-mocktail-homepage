'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

export type ThemePreset = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accentGradient: string;
  bgLight: string;
  cardBorder: string;
};

export const THEME_PRESETS: ThemePreset[] = [
  {
    id: 'flame',
    name: 'Flame Red (Default)',
    primary: '#E53E3E',
    secondary: '#FF6B00',
    accentGradient: 'from-[#FF3838] to-[#FF6B00]',
    bgLight: '#FFF8F5',
    cardBorder: 'rgba(255, 107, 0, 0.15)',
  },
  {
    id: 'violet',
    name: 'Neon Violet',
    primary: '#8B5CF6',
    secondary: '#D946EF',
    accentGradient: 'from-[#8B5CF6] to-[#D946EF]',
    bgLight: '#FBF7FF',
    cardBorder: 'rgba(139, 92, 246, 0.15)',
  },
  {
    id: 'emerald',
    name: 'Emerald Mint',
    primary: '#10B981',
    secondary: '#059669',
    accentGradient: 'from-[#10B981] to-[#047857]',
    bgLight: '#F2FBF7',
    cardBorder: 'rgba(16, 185, 129, 0.15)',
  },
  {
    id: 'sapphire',
    name: 'Ocean Blue',
    primary: '#2563EB',
    secondary: '#06B6D4',
    accentGradient: 'from-[#2563EB] to-[#06B6D4]',
    bgLight: '#F4F8FF',
    cardBorder: 'rgba(37, 99, 235, 0.15)',
  },
  {
    id: 'sunset',
    name: 'Sunset Rose',
    primary: '#F43F5E',
    secondary: '#FB923C',
    accentGradient: 'from-[#F43F5E] to-[#FB923C]',
    bgLight: '#FFF5F7',
    cardBorder: 'rgba(244, 63, 94, 0.15)',
  },
];

interface ThemeContextType {
  currentTheme: ThemePreset;
  setTheme: (theme: ThemePreset) => void;
  customPrimary: string;
  setCustomPrimary: (color: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState<ThemePreset>(THEME_PRESETS[0]);
  const [customPrimary, setCustomPrimary] = useState<string>('#E53E3E');

  useEffect(() => {
    // Update CSS custom variables dynamically
    const root = document.documentElement;
    root.style.setProperty('--brand-primary', currentTheme.primary);
    root.style.setProperty('--brand-secondary', currentTheme.secondary);
    root.style.setProperty('--brand-bg-light', currentTheme.bgLight);
  }, [currentTheme]);

  return (
    <ThemeContext.Provider value={{ currentTheme, setTheme: setCurrentTheme, customPrimary, setCustomPrimary }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
