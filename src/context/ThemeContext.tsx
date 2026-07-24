'use client';

import React, { createContext, useContext } from 'react';

export type ThemePreset = {
  id: string;
  name: string;
  primary: string;
  secondary: string;
  accentGradient: string;
  bgLight: string;
  cardBorder: string;
};

export const ATTRACTIVE_THEME: ThemePreset = {
  id: 'flame',
  name: 'Attractive Fiery Crimson',
  primary: '#FF334B',
  secondary: '#FF6B00',
  accentGradient: 'from-[#FF334B] to-[#FF6B00]',
  bgLight: '#FFF8F6',
  cardBorder: 'rgba(255, 51, 75, 0.15)',
};

interface ThemeContextType {
  currentTheme: ThemePreset;
}

const ThemeContext = createContext<ThemeContextType>({ currentTheme: ATTRACTIVE_THEME });

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <ThemeContext.Provider value={{ currentTheme: ATTRACTIVE_THEME }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
