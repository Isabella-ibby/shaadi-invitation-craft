'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ZoomIn } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Lightbox from '@/components/ui/Lightbox';
import galleryData from '@/data/gallery.json';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!galleryData || galleryData.length === 0) return null;

  const categories = ['all', ...Array.from(new Set(galleryData.map(img => img.category)))];
  
  const filteredImages = activeCategory === 'all' 
    ? galleryData 
    : galleryData.filter(img => img.category === activeCategory);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  return (
    <SectionWrapper id="gallery" title="Our Gallery" subtitle="Moments captured forever">
      {/* Category Tabs */}
      <div className="flex overflow-x-auto pb-4 mb-8 justify-start md:justify-center gap-2 no-scrollbar px-4">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className="px-6 py-2 rounded-full font-body text-sm whitespace-nowrap transition-all duration-300 capitalize"
            style={{
              backgroundColor: activeCategory === cat ? 'var(--color-primary)' : 'transparent',
              color: activeCategory === cat ? 'var(--color-background)' : 'var(--color-text-muted)',
              border: `1px solid ${activeCategory === cat ? 'var(--color-primary)' : 'var(--color-border)'}`
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Masonry Grid */}
      <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 px-2">
        <AnimatePresence mode="popLayout">
          {filteredImages.map((image, idx) => {
            // Find the actual index in the full galleryData array for the lightbox
            const globalIndex = galleryData.findIndex(img => img.src === image.src);
            
            return (
              <motion.div
                key={image.src}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="relative break-inside-avoid rounded-xl overflow-hidden group cursor-pointer"
                onClick={() => openLightbox(globalIndex)}
              >
                <div 
                  className="relative w-full"
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm p-3 rounded-full text-white">
                      <ZoomIn size={24} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {/* Lightbox */}
      <Lightbox
        images={galleryData}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setCurrentIndex((prev) => (prev === galleryData.length - 1 ? 0 : prev + 1))}
        onPrev={() => setCurrentIndex((prev) => (prev === 0 ? galleryData.length - 1 : prev - 1))}
      />
    </SectionWrapper>
  );
}
