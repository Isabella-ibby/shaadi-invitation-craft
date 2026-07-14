'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useEffect, useState } from 'react';

interface LoaderProps {
  brideName: string;
  groomName: string;
  onComplete: () => void;
}

export default function Loader({ brideName, groomName, onComplete }: LoaderProps) {
  const [isVisible, setIsVisible] = useState(true);

  const brideInitial = brideName.charAt(0).toUpperCase();
  const groomInitial = groomName.charAt(0).toUpperCase();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  const handleExitComplete = () => {
    onComplete();
  };

  return (
    <AnimatePresence onExitComplete={handleExitComplete}>
      {isVisible && (
        <motion.div
          className="fixed inset-0 z-[200] flex items-center justify-center"
          style={{ backgroundColor: 'var(--color-background)' }}
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.6, ease: 'easeInOut' }}
        >
          <div className="flex flex-col items-center gap-8">
            {/* Monogram with ornamental ring */}
            <div className="relative flex items-center justify-center">
              {/* Expanding ornamental ring */}
              <motion.div
                className="absolute rounded-full"
                style={{
                  border: '1px solid var(--color-primary)',
                  width: 160,
                  height: 160,
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.4 }}
                transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
              />
              <motion.div
                className="absolute rounded-full"
                style={{
                  border: '1px solid var(--color-primary)',
                  width: 190,
                  height: 190,
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 0.2 }}
                transition={{ duration: 1.4, delay: 0.5, ease: 'easeOut' }}
              />

              {/* Monogram */}
              <motion.div
                className="relative z-10 flex items-center gap-2 font-script select-none"
                style={{
                  color: 'var(--color-primary)',
                  fontSize: 'clamp(2.5rem, 8vw, 4.5rem)',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{
                  duration: 0.8,
                  delay: 0.1,
                  ease: [0.25, 0.46, 0.45, 0.94],
                }}
              >
                <span>{brideInitial}</span>
                <motion.span
                  style={{
                    fontSize: 'clamp(1.5rem, 4vw, 2.5rem)',
                    color: 'var(--color-accent)',
                  }}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  &amp;
                </motion.span>
                <span>{groomInitial}</span>
              </motion.div>
            </div>

            {/* Shimmer progress bar */}
            <motion.div
              className="w-48 h-1 rounded-full overflow-hidden"
              style={{ backgroundColor: 'var(--color-border)' }}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <motion.div
                className="h-full rounded-full"
                style={{
                  background:
                    'linear-gradient(90deg, var(--color-primary), var(--color-accent), var(--color-primary))',
                  backgroundSize: '200% 100%',
                }}
                initial={{ width: '0%' }}
                animate={{
                  width: '100%',
                  backgroundPosition: ['0% 0%', '200% 0%'],
                }}
                transition={{
                  width: { duration: 2.2, ease: 'easeInOut' },
                  backgroundPosition: {
                    duration: 1.5,
                    repeat: Infinity,
                    ease: 'linear',
                  },
                }}
              />
            </motion.div>

            {/* Loading text */}
            <motion.p
              className="font-body text-xs uppercase tracking-[0.3em]"
              style={{ color: 'var(--color-text-muted)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0.5, 1] }}
              transition={{ delay: 1, duration: 2, repeat: Infinity }}
            >
              Preparing your invitation
            </motion.p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
