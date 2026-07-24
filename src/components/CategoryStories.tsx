'use client';

import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';

export interface CategoryItem {
  id: string;
  name: string;
  image: string;
  badge?: string;
}

const CATEGORIES: CategoryItem[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'mens',
    name: "Men's",
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'watches',
    name: 'Watches',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'sneakers',
    name: 'Sneakers',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'beauty',
    name: 'Beauty',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'home',
    name: 'Home',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'fitness',
    name: 'Fitness',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=300&q=80',
  },
  {
    id: 'tech',
    name: 'Tech',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=300&q=80',
  },
];

export const CategoryStories: React.FC = () => {
  const { currentTheme } = useTheme();
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  return (
    <div id="categories" className="bg-white py-4 border-b border-slate-100 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center space-x-6 sm:space-x-8 overflow-x-auto pb-2 pt-1 scrollbar-none justify-start md:justify-center">
          {CATEGORIES.map((cat) => {
            const isSelected = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(isSelected ? null : cat.id)}
                className="flex flex-col items-center group flex-shrink-0 focus:outline-none"
              >
                {/* Gradient ring container */}
                <div
                  className="p-[2.5px] rounded-full transition-transform duration-300 group-hover:scale-105 shadow-sm"
                  style={{
                    background: isSelected
                      ? `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`
                      : `linear-gradient(135deg, ${currentTheme.primary}88, ${currentTheme.secondary}aa)`,
                  }}
                >
                  <div className="bg-white p-[2px] rounded-full">
                    <img
                      src={cat.image}
                      alt={cat.name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full object-cover group-hover:brightness-105 transition-all"
                    />
                  </div>
                </div>
                
                <span className={`mt-1.5 text-xs font-semibold tracking-tight transition-colors ${
                  isSelected ? 'text-slate-900 font-bold' : 'text-slate-600 group-hover:text-slate-900'
                }`}>
                  {cat.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};
