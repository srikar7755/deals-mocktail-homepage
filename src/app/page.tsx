'use client';

import React from 'react';
import { TopBar } from '../components/TopBar';
import { CategoryStories } from '../components/CategoryStories';
import { HeroSection } from '../components/HeroSection';
import { LatestDeals } from '../components/LatestDeals';
import { TodaysHottestOffers } from '../components/TodaysHottestOffers';

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col bg-white">
      {/* 1. Navigation Header */}
      <TopBar />

      {/* 2. Category Avatars Row */}
      <CategoryStories />

      {/* 3. Hero Banner (Limited Time Offer) */}
      <HeroSection />

      {/* 4. Latest Deals Grid */}
      <LatestDeals />

      {/* 5. Today's Hottest Offers Section */}
      <TodaysHottestOffers />
    </main>
  );
}
