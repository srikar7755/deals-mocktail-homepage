'use client';

import React, { useState, useEffect } from 'react';
import { Flame, Clock, TrendingUp, Zap } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface HotOfferProduct {
  id: string;
  title: string;
  image: string;
  price: number;
  originalPrice: number;
  discount: string;
  initialHours: number;
  initialMinutes: number;
  soldToday: number;
}

const HOT_OFFERS: HotOfferProduct[] = [
  {
    id: 'hot-1',
    title: 'Wireless Earbuds Pro',
    image: 'https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=600&q=80',
    price: 99,
    originalPrice: 199,
    discount: '-50% OFF',
    initialHours: 2,
    initialMinutes: 30,
    soldToday: 245,
  },
  {
    id: 'hot-2',
    title: 'Smart Watch Ultra',
    image: 'https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?auto=format&fit=crop&w=600&q=80',
    price: 299,
    originalPrice: 499,
    discount: '-40% OFF',
    initialHours: 5,
    initialMinutes: 15,
    soldToday: 189,
  },
  {
    id: 'hot-3',
    title: 'Premium Laptop Stand',
    image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?auto=format&fit=crop&w=600&q=80',
    price: 62,
    originalPrice: 89,
    discount: '-30% OFF',
    initialHours: 1,
    initialMinutes: 45,
    soldToday: 567,
  },
  {
    id: 'hot-4',
    title: 'Gaming Mouse RGB',
    image: 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80',
    price: 59,
    originalPrice: 149,
    discount: '-60% OFF',
    initialHours: 3,
    initialMinutes: 20,
    soldToday: 423,
  },
];

export const TodaysHottestOffers: React.FC = () => {
  const { currentTheme } = useTheme();

  // Seconds state for live ticking timer simulation
  const [secondsLeft, setSecondsLeft] = useState(7200);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecondsLeft((prev) => (prev > 0 ? prev - 1 : 7200));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = (hoursOffset: number, minsOffset: number) => {
    const totalSecs = secondsLeft + (hoursOffset * 3600) + (minsOffset * 60);
    const h = Math.floor((totalSecs % 86400) / 3600);
    const m = Math.floor((totalSecs % 3600) / 60);
    const s = totalSecs % 60;
    return `${h}h ${m < 10 ? '0' : ''}${m}m ${s < 10 ? '0' : ''}${s}s`;
  };

  return (
    <section 
      id="hot-deals"
      className="py-16 sm:py-20 text-white relative transition-colors duration-500 overflow-hidden"
      style={{
        background: `linear-gradient(135deg, ${currentTheme.primary} 0%, ${currentTheme.secondary} 100%)`,
      }}
    >
      {/* Decorative background glow shapes */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-black/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center space-y-3 mb-12 max-w-2xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-xs font-black uppercase tracking-wider text-white shadow-sm">
            <Flame className="w-4 h-4 fill-white text-white animate-bounce" />
            HOT DEALS
          </div>

          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight drop-shadow-sm">
            Today's Hottest Offers
          </h2>

          <p className="text-base sm:text-lg text-white/90 font-medium">
            Lightning deals that won't last long!
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {HOT_OFFERS.map((offer) => {
            const savings = offer.originalPrice - offer.price;

            return (
              <div
                key={offer.id}
                className="bg-white text-slate-900 rounded-2xl overflow-hidden shadow-2xl border border-white/40 hover:translate-y-[-4px] transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Top Image Container */}
                <div>
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <img
                      src={offer.image}
                      alt={offer.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />

                    {/* Top Left: Timer Overlay */}
                    <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md text-[11px] font-bold text-slate-800 flex items-center gap-1 shadow-md">
                      <Clock className="w-3.5 h-3.5 text-red-500 animate-pulse" />
                      <span>{formatTimer(offer.initialHours, offer.initialMinutes)}</span>
                    </div>

                    {/* Top Right: Discount Overlay */}
                    <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-red-600 text-[11px] font-black text-white uppercase shadow-md">
                      {offer.discount}
                    </div>

                    {/* Bottom Image Overlay: Sold Today */}
                    <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3 pt-6 flex items-center gap-1.5 text-xs text-white font-semibold">
                      <TrendingUp className="w-3.5 h-3.5 text-emerald-400" />
                      <span>{offer.soldToday} sold today</span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-5 space-y-4">
                    <h3 className="text-base font-bold text-slate-900 line-clamp-1 group-hover:text-slate-800">
                      {offer.title}
                    </h3>

                    {/* Price & Savings */}
                    <div className="flex items-center justify-between pt-1">
                      <div>
                        <div className="text-2xl font-black text-red-600 leading-none">
                          ${offer.price}
                        </div>
                        <div className="text-xs text-slate-400 line-through mt-1">
                          ${offer.originalPrice}
                        </div>
                      </div>

                      <div className="text-right">
                        <span className="text-[10px] uppercase font-bold text-slate-400 block">
                          You Save
                        </span>
                        <span className="text-sm font-extrabold text-emerald-600">
                          ${savings}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Button */}
                <div className="p-5 pt-0">
                  <button
                    className="w-full py-3 text-xs sm:text-sm font-bold text-white rounded-xl shadow-lg hover:shadow-xl hover:brightness-105 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1.5"
                    style={{
                      background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                    }}
                  >
                    <Zap className="w-4 h-4 fill-current" />
                    Grab This Deal
                  </button>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
