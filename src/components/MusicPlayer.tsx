'use client';

import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from 'react';
import { Music } from 'lucide-react';
import { useMusicPlayer } from '@/hooks/useMusicPlayer';

interface MusicPlayerProps {
  src: string;
  autoplay?: boolean;
  loop?: boolean;
  volume?: number;
}

function EqualizerBars() {
  const barHeights = [
    { min: 4, max: 16, duration: 0.4 },
    { min: 6, max: 20, duration: 0.5 },
    { min: 3, max: 14, duration: 0.35 },
    { min: 5, max: 18, duration: 0.45 },
  ];

  return (
    <div className="flex items-end gap-[2px] h-5">
      {barHeights.map((bar, i) => (
        <motion.div
          key={i}
          className="w-[3px] rounded-full"
          style={{ backgroundColor: 'var(--color-background)' }}
          animate={{
            height: [bar.min, bar.max, bar.min],
          }}
          transition={{
            duration: bar.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.1,
          }}
        />
      ))}
    </div>
  );
}

export default function MusicPlayer({
  src,
  autoplay = false,
  loop = true,
  volume = 0.5,
}: MusicPlayerProps) {
  const { isPlaying, toggle } = useMusicPlayer({ src, autoplay, loop, volume });
  const [showTooltip, setShowTooltip] = useState(true);
  const [hasInteracted, setHasInteracted] = useState(false);

  // Hide tooltip after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const handleClick = () => {
    if (!hasInteracted) setHasInteracted(true);
    toggle();
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Tooltip */}
      <AnimatePresence>
        {showTooltip && !hasInteracted && (
          <motion.div
            className="
              px-4 py-2 rounded-full text-sm font-body
              whitespace-nowrap shadow-lg backdrop-blur-sm
            "
            style={{
              backgroundColor: 'var(--color-surface)',
              color: 'var(--color-text)',
              border: '1px solid var(--color-border)',
            }}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 10 }}
            transition={{ duration: 0.3 }}
          >
            🎵 Tap to play music
          </motion.div>
        )}
      </AnimatePresence>

      {/* Player button */}
      <div className="relative">
        {/* Pulsing ring – shows until user interacts */}
        {!hasInteracted && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              border: '2px solid var(--color-primary)',
            }}
            animate={{
              scale: [1, 1.4, 1.8],
              opacity: [0.6, 0.3, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeOut',
            }}
          />
        )}

        <motion.button
          onClick={handleClick}
          className="
            relative flex items-center justify-center
            w-14 h-14 min-w-[48px] min-h-[48px]
            rounded-full shadow-lg
            focus-visible:outline-none focus-visible:ring-2
            focus-visible:ring-offset-2
          "
          style={{
            background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
            color: 'var(--color-background)',
            focusVisibleRingColor: 'var(--color-primary)',
          }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          aria-label={isPlaying ? 'Pause music' : 'Play music'}
        >
          {isPlaying ? <EqualizerBars /> : <Music size={22} />}
        </motion.button>
      </div>
    </div>
  );
}
