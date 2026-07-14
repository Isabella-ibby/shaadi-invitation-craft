import { sectionsConfig } from './sections';
import type { NavigationItem } from '@/types/config';

/** All possible navigation items */
const allNavItems: (NavigationItem & { configKey: keyof typeof sectionsConfig })[] = [
  { id: 'hero', label: 'Home', configKey: 'showHero' },
  { id: 'countdown', label: 'Save the Date', configKey: 'showCountdown' },
  { id: 'story', label: 'Our Story', configKey: 'showStory' },
  { id: 'events', label: 'Events', configKey: 'showEvents' },
  { id: 'gallery', label: 'Gallery', configKey: 'showGallery' },
  { id: 'family', label: 'Family', configKey: 'showFamily' },
  { id: 'venue', label: 'Venue', configKey: 'showVenue' },
  { id: 'rsvp', label: 'RSVP', configKey: 'showRSVP' },
  { id: 'gift', label: 'Gifts', configKey: 'showGift' },
  { id: 'hotels', label: 'Stay', configKey: 'showHotels' },
];

/** Navigation items filtered by enabled sections */
export const navigationItems: NavigationItem[] = allNavItems
  .filter((item) => sectionsConfig[item.configKey])
  .map(({ id, label }) => ({ id, label }));
