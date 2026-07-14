'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import dynamic from 'next/dynamic';

import Loader from '@/components/Loader';
import Hero from '@/components/sections/Hero';
import Countdown from '@/components/sections/Countdown';
import Story from '@/components/sections/Story';
import Events from '@/components/sections/Events';
import Gallery from '@/components/sections/Gallery';
import Family from '@/components/sections/Family';
import Venue from '@/components/sections/Venue';
import RSVP from '@/components/sections/RSVP';
import Gift from '@/components/sections/Gift';
import Hotels from '@/components/sections/Hotels';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';

const FloatingParticles = dynamic(
  () => import('@/components/effects/FloatingParticles'),
  { ssr: false }
);

import sectionsData from '@/data/sections.json';
import themeData from '@/data/theme.json';
import clientData from '@/data/client.json';
import { getThemePreset } from '@/lib/themes';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const theme = getThemePreset(themeData.preset);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Loader
            key="loader"
            brideName={clientData.brideName}
            groomName={clientData.groomName}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <>
          <FloatingParticles type={theme.effects.particleType} />
          <Navigation />
          <main>
            {sectionsData.showHero && <Hero />}
            {sectionsData.showCountdown && <Countdown />}
            {sectionsData.showStory && <Story />}
            {sectionsData.showEvents && <Events />}
            {sectionsData.showGallery && <Gallery />}
            {sectionsData.showFamily && <Family />}
            {sectionsData.showVenue && <Venue />}
            {sectionsData.showRSVP && <RSVP />}
            {sectionsData.showGift && <Gift />}
            {sectionsData.showHotels && <Hotels />}
          </main>
          <Footer />
        </>
      )}
    </>
  );
}
