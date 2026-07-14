'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import sectionsData from '@/data/sections.json';

// We map section toggles to nav items
const allNavItems = [
  { id: 'hero', label: 'Home', show: sectionsData.showHero },
  { id: 'countdown', label: 'Date', show: sectionsData.showCountdown },
  { id: 'story', label: 'Story', show: sectionsData.showStory },
  { id: 'events', label: 'Events', show: sectionsData.showEvents },
  { id: 'gallery', label: 'Gallery', show: sectionsData.showGallery },
  { id: 'family', label: 'Family', show: sectionsData.showFamily },
  { id: 'venue', label: 'Venue', show: sectionsData.showVenue },
  { id: 'rsvp', label: 'RSVP', show: sectionsData.showRSVP },
  { id: 'gift', label: 'Gifts', show: sectionsData.showGift },
  { id: 'hotels', label: 'Stay', show: sectionsData.showHotels },
];

const navItems = allNavItems.filter((item) => item.show);

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Update scrolled state for background
      setIsScrolled(currentScrollY > 50);

      // Hide/Show logic based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }
      setLastScrollY(currentScrollY);

      // Intersection Observer alternative for active section detection
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = currentScrollY + window.innerHeight / 3;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.3 }}
        className={`fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
          isScrolled ? 'backdrop-blur-md shadow-sm' : 'bg-transparent'
        }`}
        style={{
          backgroundColor: isScrolled ? 'rgba(var(--color-background-rgb), 0.85)' : 'transparent',
          borderBottom: isScrolled ? '1px solid var(--color-border)' : 'none',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:justify-center">
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-1 lg:space-x-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative px-3 py-2 font-body text-sm uppercase tracking-wider transition-colors"
                  style={{ color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text)' }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 rounded-full"
                      style={{ backgroundColor: 'var(--color-primary)' }}
                      initial={false}
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex w-full justify-end">
              <button
                onClick={() => setMobileMenuOpen(true)}
                className="p-2 -mr-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-md"
                style={{ color: 'var(--color-text)' }}
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/60 z-[60] backdrop-blur-sm"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[80vw] max-w-sm z-[70] shadow-2xl flex flex-col"
              style={{ backgroundColor: 'var(--color-surface)' }}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-2 min-h-[48px] min-w-[48px] flex items-center justify-center rounded-full bg-white/5"
                  style={{ color: 'var(--color-text)' }}
                >
                  <X size={24} />
                </button>
              </div>
              <nav className="flex-1 overflow-y-auto py-6 px-8 flex flex-col gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="text-left font-body text-xl tracking-wide w-full"
                    style={{ color: activeSection === item.id ? 'var(--color-primary)' : 'var(--color-text)' }}
                  >
                    {item.label}
                  </button>
                ))}
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
