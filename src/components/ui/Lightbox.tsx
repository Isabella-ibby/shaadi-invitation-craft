'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useCallback, useRef } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt: string;
}

interface LightboxProps {
  images: LightboxImage[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrev,
}: LightboxProps) {
  const touchStartX = useRef<number>(0);
  const touchEndX = useRef<number>(0);

  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [isOpen]);

  // Keyboard navigation
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      if (!isOpen) return;
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          onPrev();
          break;
        case 'ArrowRight':
          onNext();
          break;
      }
    },
    [isOpen, onClose, onNext, onPrev]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Touch swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = () => {
    const swipeDistance = touchStartX.current - touchEndX.current;
    const threshold = 50;

    if (Math.abs(swipeDistance) > threshold) {
      if (swipeDistance > 0) {
        onNext();
      } else {
        onPrev();
      }
    }
  };

  const currentImage = images[currentIndex];

  if (!currentImage) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          {/* Backdrop */}
          <motion.div
            className="absolute inset-0 bg-black/90"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />

          {/* Close button */}
          <button
            onClick={onClose}
            className="
              absolute top-4 right-4 z-[110]
              flex items-center justify-center
              w-12 h-12 min-w-[48px] min-h-[48px]
              rounded-full bg-white/10 backdrop-blur-sm
              text-white hover:bg-white/20
              transition-colors duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
            "
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onPrev();
              }}
              className="
                absolute left-4 top-1/2 -translate-y-1/2 z-[110]
                flex items-center justify-center
                w-12 h-12 min-w-[48px] min-h-[48px]
                rounded-full bg-white/10 backdrop-blur-sm
                text-white hover:bg-white/20
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
              "
              aria-label="Previous image"
            >
              <ChevronLeft size={28} />
            </button>
          )}

          {/* Next button */}
          {images.length > 1 && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                onNext();
              }}
              className="
                absolute right-4 top-1/2 -translate-y-1/2 z-[110]
                flex items-center justify-center
                w-12 h-12 min-w-[48px] min-h-[48px]
                rounded-full bg-white/10 backdrop-blur-sm
                text-white hover:bg-white/20
                transition-colors duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white
              "
              aria-label="Next image"
            >
              <ChevronRight size={28} />
            </button>
          )}

          {/* Image container */}
          <div
            className="relative z-[105] flex items-center justify-center w-full h-full p-16"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={currentImage.src}
                alt={currentImage.alt}
                className="max-w-[90vw] max-h-[90vh] object-contain select-none"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                draggable={false}
              />
            </AnimatePresence>
          </div>

          {/* Image counter */}
          {images.length > 1 && (
            <motion.div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2 z-[110]
                px-4 py-2 rounded-full
                bg-white/10 backdrop-blur-sm
                text-white text-sm font-body tracking-wide
              "
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              {currentIndex + 1} / {images.length}
            </motion.div>
          )}
        </motion.div>
      )}
    </AnimatePresence>
  );
}
