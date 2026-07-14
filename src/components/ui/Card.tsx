'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import React, { ReactNode } from 'react';

type CardVariant = 'glass' | 'solid' | 'outlined' | 'elevated';

interface CardProps extends Omit<HTMLMotionProps<'div'>, 'children'> {
  variant?: CardVariant;
  children: ReactNode;
  className?: string;
  hoverable?: boolean;
  onClick?: () => void;
}

const variantClasses: Record<CardVariant, string> = {
  glass: 'backdrop-blur-xl bg-white/5 border border-white/10',
  solid: '',
  outlined: 'bg-transparent',
  elevated: 'shadow-lg',
};

const variantStyles: Record<CardVariant, React.CSSProperties> = {
  glass: {},
  solid: {
    backgroundColor: 'var(--color-surface)',
  },
  outlined: {
    border: '1px solid var(--color-border)',
  },
  elevated: {
    backgroundColor: 'var(--color-surface)',
  },
};

export default function Card({
  variant = 'solid',
  children,
  className = '',
  hoverable = false,
  onClick,
  ...motionProps
}: CardProps) {
  return (
    <motion.div
      className={`
        rounded-2xl overflow-hidden
        transition-shadow duration-300
        ${variantClasses[variant]}
        ${hoverable ? 'cursor-pointer' : ''}
        ${className}
      `.trim()}
      style={variantStyles[variant]}
      whileHover={
        hoverable
          ? {
              scale: 1.02,
              boxShadow:
                variant === 'elevated'
                  ? '0 20px 40px rgba(0,0,0,0.15)'
                  : undefined,
            }
          : undefined
      }
      whileTap={hoverable ? { scale: 0.99 } : undefined}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      onKeyDown={
        onClick
          ? (e: React.KeyboardEvent) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onClick();
              }
            }
          : undefined
      }
      {...motionProps}
    >
      {children}
    </motion.div>
  );
}
