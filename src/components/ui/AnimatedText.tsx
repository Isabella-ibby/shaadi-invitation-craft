'use client';

import { motion, Variants } from 'framer-motion';
import React, { useMemo } from 'react';

type AnimationMode = 'words' | 'chars' | 'fade' | 'slide';
type TagType = 'h1' | 'h2' | 'h3' | 'p' | 'span';

interface AnimatedTextProps {
  text: string;
  as?: TagType;
  animation?: AnimationMode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
}

const containerVariants = (delay: number, staggerDelay: number): Variants => ({
  initial: {},
  animate: {
    transition: {
      delayChildren: delay,
      staggerChildren: staggerDelay,
    },
  },
});

const wordCharVariants: Variants = {
  initial: {
    opacity: 0,
    y: 20,
    rotateX: -40,
  },
  animate: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: {
      duration: 0.5,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

const fadeVariants: Variants = {
  initial: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: 'easeOut',
    },
  },
};

const slideVariants: Variants = {
  initial: {
    opacity: 0,
    y: 40,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  },
};

export default function AnimatedText({
  text,
  as = 'p',
  animation = 'fade',
  className = '',
  delay = 0,
  style,
}: AnimatedTextProps) {
  const Tag = as;
  const MotionTag = motion.create(Tag);

  const words = useMemo(() => text.split(' '), [text]);
  const chars = useMemo(() => text.split(''), [text]);

  if (animation === 'words') {
    return (
      <MotionTag
        className={`overflow-hidden ${className}`}
        style={{ ...style, perspective: '500px' }}
        variants={containerVariants(delay, 0.05)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        aria-label={text}
      >
        {words.map((word, i) => (
          <motion.span
            key={`${word}-${i}`}
            variants={wordCharVariants}
            className="inline-block"
            style={{ marginRight: '0.3em' }}
          >
            {word}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  if (animation === 'chars') {
    return (
      <MotionTag
        className={`overflow-hidden ${className}`}
        style={{ ...style, perspective: '500px' }}
        variants={containerVariants(delay, 0.025)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.5 }}
        aria-label={text}
      >
        {chars.map((char, i) => (
          <motion.span
            key={`${char}-${i}`}
            variants={wordCharVariants}
            className="inline-block"
            style={char === ' ' ? { width: '0.3em' } : undefined}
          >
            {char === ' ' ? '\u00A0' : char}
          </motion.span>
        ))}
      </MotionTag>
    );
  }

  if (animation === 'slide') {
    return (
      <div className="overflow-hidden">
        <MotionTag
          className={className}
          style={style}
          variants={slideVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay }}
        >
          {text}
        </MotionTag>
      </div>
    );
  }

  // Default: fade
  return (
    <MotionTag
      className={className}
      style={style}
      variants={fadeVariants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ delay }}
    >
      {text}
    </MotionTag>
  );
}
