'use client';

import React from 'react';
import { Star, ArrowRight } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

export interface DealProduct {
  id: string;
  title: string;
  image: string;
  rating: number;
  price: string;
  originalPrice: string;
  discount: string;
}

const LATEST_DEALS: DealProduct[] = [
  {
    id: 'deal-1',
    title: 'Premium Wireless Headphones',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    price: '$149.99',
    originalPrice: '$299.99',
    discount: '-50%',
  },
  {
    id: 'deal-2',
    title: 'Modern Home Decor Set',
    image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=600&q=80',
    rating: 4.6,
    price: '$89.99',
    originalPrice: '$199.99',
    discount: '-55%',
  },
  {
    id: 'deal-3',
    title: 'Fitness Equipment Bundle',
    image: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    price: '$199.99',
    originalPrice: '$399.99',
    discount: '-50%',
  },
  {
    id: 'deal-4',
    title: 'Luxury Beauty Collection',
    image: 'https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&fit=crop&w=600&q=80',
    rating: 4.7,
    price: '$79.99',
    originalPrice: '$159.99',
    discount: '-50%',
  },
  {
    id: 'deal-5',
    title: 'Premium Sneakers Collection',
    image: 'https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=600&q=80',
    rating: 4.8,
    price: '$99.99',
    originalPrice: '$179.99',
    discount: '-45%',
  },
  {
    id: 'deal-6',
    title: 'Luxury Watch Collection',
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80',
    rating: 4.9,
    price: '$349.99',
    originalPrice: '$599.99',
    discount: '-40%',
  },
];

export const LatestDeals: React.FC = () => {
  const { currentTheme } = useTheme();

  return (
    <section id="latest-deals" className="py-16 bg-white transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-10 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Latest Deals
            </h2>
            <p className="text-base text-slate-500 mt-1">
              Freshly added deals on trending products
            </p>
          </div>

          <a
            href="#"
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-xl border text-sm font-bold transition-all duration-200 hover:bg-slate-50 self-start sm:self-auto"
            style={{
              borderColor: currentTheme.primary,
              color: currentTheme.primary,
            }}
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
          {LATEST_DEALS.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-2xl border border-slate-200/90 overflow-hidden hover:shadow-xl hover:border-slate-300 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div
                    className="absolute top-3 left-3 px-2.5 py-1 text-xs font-black text-white rounded-lg shadow-md"
                    style={{ backgroundColor: currentTheme.primary }}
                  >
                    {product.discount}
                  </div>
                </div>

                <div className="p-4 space-y-2">
                  <h3 className="text-sm font-bold text-slate-800 line-clamp-2 min-h-[2.5rem] group-hover:text-slate-900 transition-colors">
                    {product.title}
                  </h3>

                  <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <span>{product.rating}</span>
                  </div>

                  <div className="flex items-baseline gap-2 pt-1">
                    <span 
                      className="text-base font-extrabold"
                      style={{ color: currentTheme.primary }}
                    >
                      {product.price}
                    </span>
                    <span className="text-xs text-slate-400 line-through">
                      {product.originalPrice}
                    </span>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <button
                  className="w-full py-2.5 text-xs font-bold text-white rounded-xl shadow-md hover:shadow-lg hover:brightness-105 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-1"
                  style={{
                    background: `linear-gradient(135deg, ${currentTheme.primary}, ${currentTheme.secondary})`,
                  }}
                >
                  Get Deal
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
