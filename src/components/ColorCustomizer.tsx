'use client';

import React, { useState } from 'react';
import { useTheme, THEME_PRESETS } from '../context/ThemeContext';
import { Palette, Check, Sparkles, X, ChevronRight } from 'lucide-react';

export const ColorCustomizer: React.FC = () => {
  const { currentTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="flex items-center gap-2.5 px-4 py-3 bg-slate-900 text-white rounded-full shadow-2xl hover:scale-105 transition-all duration-300 border border-slate-700/50 group"
          title="Customize Theme Colors"
        >
          <div className="p-1.5 rounded-full bg-brand-gradient text-white animate-pulse">
            <Palette className="w-4 h-4" />
          </div>
          <span className="text-sm font-semibold tracking-wide">Color Theme</span>
          <span className="flex h-2 w-2 rounded-full" style={{ backgroundColor: currentTheme.primary }} />
        </button>
      ) : (
        <div className="bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-2xl border border-slate-200 w-80 animate-in fade-in slide-in-from-bottom-5 duration-300">
          <div className="flex items-center justify-between pb-3 border-b border-slate-100 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-brand-primary" style={{ color: currentTheme.primary }} />
              <h3 className="font-bold text-slate-800 text-base">Theme Color Palette</h3>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-1 text-slate-400 hover:text-slate-600 rounded-lg hover:bg-slate-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <p className="text-xs text-slate-500 mb-3">
            Choose a color theme to instantly restyle the entire DealsMocktail homepage:
          </p>

          <div className="space-y-2 mb-4">
            {THEME_PRESETS.map((preset) => {
              const isSelected = currentTheme.id === preset.id;
              return (
                <button
                  key={preset.id}
                  onClick={() => setTheme(preset)}
                  className={`w-full flex items-center justify-between p-2.5 rounded-xl text-left transition-all ${
                    isSelected
                      ? 'bg-slate-100 font-semibold ring-2 ring-slate-900/10'
                      : 'hover:bg-slate-50 text-slate-600'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className="w-6 h-6 rounded-full shadow-sm flex items-center justify-center text-white text-xs font-bold"
                      style={{ background: `linear-gradient(135deg, ${preset.primary}, ${preset.secondary})` }}
                    >
                      {isSelected && <Check className="w-3.5 h-3.5 stroke-[3]" />}
                    </div>
                    <span className="text-xs font-medium text-slate-800">{preset.name}</span>
                  </div>
                  <div className="flex gap-1">
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.primary }} />
                    <div className="w-3 h-3 rounded-full" style={{ backgroundColor: preset.secondary }} />
                  </div>
                </button>
              );
            })}
          </div>

          <div className="pt-3 border-t border-slate-100 flex justify-between items-center text-xs text-slate-400">
            <span>Figma Spec Matching</span>
            <button
              onClick={() => setIsOpen(false)}
              className="text-xs font-medium flex items-center gap-1 text-slate-700 hover:text-slate-900"
            >
              Apply Theme <ChevronRight className="w-3 h-3" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
