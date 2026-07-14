import galleryData from '@/data/gallery.json';
import type { GalleryImage } from '@/types/config';

export const galleryConfig: GalleryImage[] = galleryData;

/** Get unique categories from gallery images */
export const galleryCategories: string[] = [
  'all',
  ...Array.from(new Set(galleryData.map((img: GalleryImage) => img.category))),
];
