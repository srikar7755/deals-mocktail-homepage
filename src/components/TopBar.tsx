'use client';

import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X, ArrowUpRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const TopBar: React.FC = () => {
  const { currentTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const navLinks = [
    { name: 'Latest Deals', href: '#latest-deals' },
    { name: 'Hot Deals', href: '#hot-deals' },
    { name: 'Top Savers', href: '#latest-deals' },
    { name: 'Categories', href: '#categories' },
    { name: 'Blog', href: '#latest-deals' },
  ];

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-4 sm:gap-8">
          
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group flex-shrink-0">
            <div 
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-white font-extrabold text-xl shadow-md transition-transform duration-300 group-hover:scale-105"
              style={{ background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})` }}
            >
              <span className="leading-none text-white drop-shadow-sm font-sans">d</span>
              <span className="absolute -top-0.5 -right-0.5 text-xs text-yellow-300 font-bold">$</span>
            </div>
            <div className="flex flex-col leading-none">
              <span 
                className="font-extrabold text-xl sm:text-2xl tracking-tight"
                style={{ color: currentTheme.primary }}
              >
                deal<span style={{ color: currentTheme.secondary }}>$</span>
              </span>
              <span className="text-[10px] sm:text-xs font-semibold tracking-widest text-slate-400 uppercase -mt-0.5">
                mocktail
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-800 hover:text-slate-900 transition-colors relative py-1 group"
              >
                {link.name}
                <span 
                  className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full rounded-full"
                  style={{ backgroundColor: currentTheme.primary }}
                />
              </a>
            ))}
          </nav>

          {/* Search Bar */}
          <div className="flex-1 max-w-xs sm:max-w-md hidden sm:block">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-4 h-4" />
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search deals, products..."
                className="w-full pl-10 pr-4 py-2 sm:py-2.5 text-sm bg-slate-100/80 border border-transparent rounded-full focus:outline-none focus:bg-white focus:border-slate-300 text-slate-800 placeholder-slate-400 transition-all duration-200"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-xs text-slate-400 hover:text-slate-600"
                >
                  Clear
                </button>
              )}
            </div>
          </div>

          {/* Right Controls: User Profile & Cart */}
          <div className="flex items-center gap-3 sm:gap-4">
            <button 
              className="p-2 sm:p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors"
              aria-label="User Account"
            >
              <User className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.2]" />
            </button>

            <button 
              className="relative p-2 sm:p-2.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-full transition-colors group"
              aria-label="Shopping Cart"
            >
              <ShoppingCart className="w-5 h-5 sm:w-5 sm:h-5 stroke-[2.2]" />
              <span 
                className="absolute top-1 right-1 w-4 h-4 sm:w-5 sm:h-5 text-[10px] sm:text-xs font-bold text-white rounded-full flex items-center justify-center border-2 border-white shadow-sm transition-transform group-hover:scale-110"
                style={{ backgroundColor: currentTheme.primary }}
              >
                3
              </span>
            </button>

            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-slate-600 hover:text-slate-900 rounded-lg hover:bg-slate-100"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Search Bar & Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top duration-200">
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
              <Search className="w-4 h-4" />
            </div>
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search deals, products..."
              className="w-full pl-10 pr-4 py-2.5 text-sm bg-slate-100 border border-slate-200 rounded-full focus:outline-none focus:bg-white text-slate-800"
            />
          </div>

          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-lg flex items-center justify-between"
              >
                {link.name}
                <ArrowUpRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};
