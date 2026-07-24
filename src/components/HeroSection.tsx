'use client';

import React from 'react';
import { ArrowRight, Flame, Star, ShoppingBag, Users } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export const HeroSection: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section 
      className="relative py-12 lg:py-16 transition-colors duration-500 overflow-hidden"
      style={{ backgroundColor: currentTheme.bgLight }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-7 space-y-6 text-left">
            
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-slate-200/60 shadow-sm backdrop-blur-sm">
              <Flame className="w-4 h-4 text-orange-500 animate-bounce" />
              <span className="text-xs font-bold uppercase tracking-wider text-slate-800">
                Limited Time Offer
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-2">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1]">
                Summer Sale <br />
                <span 
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  }}
                >
                  Up to 70% Off
                </span>
              </h1>
            </div>

            {/* Subtitle Paragraph */}
            <p className="text-base sm:text-lg text-slate-600 max-w-xl leading-relaxed">
              Discover amazing deals on top brands. Shop the latest trends and save big on fashion, electronics, home decor, and more.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#hot-deals"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold text-white rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 group"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              >
                Shop Now
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#latest-deals"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-bold rounded-xl border-2 transition-all duration-200 hover:bg-white/80 active:scale-[0.98]"
                style={{
                  borderColor: currentTheme.primary,
                  color: currentTheme.primary,
                }}
              >
                View All Deals
              </a>
            </div>

            {/* Key Statistics */}
            <div className="pt-6 border-t border-slate-200/60 grid grid-cols-3 gap-4 max-w-md">
              <div>
                <p 
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: currentTheme.primary }}
                >
                  500+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Active Deals
                </p>
              </div>

              <div>
                <p 
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight"
                  style={{ color: currentTheme.primary }}
                >
                  50K+
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Happy Shoppers
                </p>
              </div>

              <div>
                <p 
                  className="text-2xl sm:text-3xl font-extrabold tracking-tight flex items-center"
                  style={{ color: currentTheme.primary }}
                >
                  4.8 <Star className="w-5 h-5 ml-1 fill-current" />
                </p>
                <p className="text-xs sm:text-sm font-medium text-slate-500 mt-0.5">
                  Rating
                </p>
              </div>
            </div>

          </div>

          {/* Right Column Banner Image */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative background glow ring */}
              <div 
                className="absolute -inset-4 rounded-3xl opacity-20 blur-2xl transition-colors duration-500"
                style={{
                  background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                }}
              />

              {/* Main Banner Image Container */}
              <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-slate-200/80 bg-slate-900 group">
                <img
                  src="https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=80"
                  alt="Summer Sale Banner Shopping Street"
                  className="w-full h-[340px] sm:h-[420px] object-cover grayscale contrast-110 group-hover:scale-105 transition-transform duration-700"
                />
                
                {/* Subtle dark overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />

                {/* Floating offer tag on top of image */}
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-white/90 backdrop-blur-md border border-white/40 shadow-lg flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-orange-100 text-orange-600">
                      <ShoppingBag className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 font-medium">Trending Category</p>
                      <p className="text-sm font-bold text-slate-900">Streetwear & Electronics</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 text-xs font-extrabold text-white rounded-full bg-slate-900">
                    NEW
                  </span>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
