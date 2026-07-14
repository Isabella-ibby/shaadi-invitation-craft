export interface ClientConfig {
  brideName: string;
  groomName: string;
  coupleHashtag: string;
  weddingDate: string;
  weddingTime: string;
  venue: string;
  venueAddress: string;
  mapsLink: string;
  phone: string;
  email: string;
  instagram: string;
  quote: string;
  thankYouMessage: string;
  heroSubtitle: string;
  heroImage: string;
  coupleImage: string;
}

export interface EventConfig {
  title: string;
  date: string;
  time: string;
  venue: string;
  icon: string;
  description: string;
  dressCode?: string;
}

export interface StoryEvent {
  title: string;
  description: string;
  date: string;
  image: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
  width: number;
  height: number;
}

export interface FamilyMember {
  name: string;
  relation: string;
  side: 'bride' | 'groom';
  image: string;
  role?: string;
}

export interface FamilyGroup {
  side: 'bride' | 'groom';
  title: string;
  members: FamilyMember[];
}

export interface RegistryLink {
  name: string;
  url: string;
  icon: string;
}

export interface BankDetails {
  name: string;
  account: string;
  ifsc: string;
  bank: string;
}

export interface GiftConfig {
  showUPI: boolean;
  upiId: string;
  upiQR: string;
  showBank: boolean;
  bankDetails: BankDetails;
  showRegistry: boolean;
  registryLinks: RegistryLink[];
  message: string;
}

export interface HotelConfig {
  name: string;
  distance: string;
  priceRange: string;
  bookingUrl: string;
  image?: string;
  phone: string;
  address: string;
}

export interface SectionsConfig {
  showHero: boolean;
  showCountdown: boolean;
  showStory: boolean;
  showEvents: boolean;
  showGallery: boolean;
  showFamily: boolean;
  showVenue: boolean;
  showRSVP: boolean;
  showGift: boolean;
  showHotels: boolean;
  showMusic: boolean;
  showDressCode: boolean;
  showParking: boolean;
}

export interface RSVPSubmission {
  name: string;
  email: string;
  phone?: string;
  attending: 'yes' | 'no';
  guestCount?: number;
  mealPreference?: string;
  dietaryRestrictions?: string;
  message?: string;
  submittedAt?: string;
}

export interface NavigationItem {
  id: string;
  label: string;
}

export interface MusicConfig {
  src: string;
  autoplay: boolean;
  loop: boolean;
  volume: number;
}
