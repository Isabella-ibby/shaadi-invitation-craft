'use client';

import React, { ReactNode } from 'react';

type BadgeVariant = 'default' | 'primary' | 'accent';

interface BadgeProps {
  children: ReactNode;
  variant?: BadgeVariant;
  className?: string;
}

const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
  default: {
    backgroundColor: 'color-mix(in srgb, var(--color-text-muted) 15%, transparent)',
    color: 'var(--color-text-muted)',
  },
  primary: {
    backgroundColor: 'color-mix(in srgb, var(--color-primary) 15%, transparent)',
    color: 'var(--color-primary)',
  },
  accent: {
    backgroundColor: 'color-mix(in srgb, var(--color-accent) 15%, transparent)',
    color: 'var(--color-accent)',
  },
};

export default function Badge({
  children,
  variant = 'default',
  className = '',
}: BadgeProps) {
  return (
    <span
      className={`
        inline-flex items-center
        rounded-full px-3 py-1
        text-xs uppercase tracking-wider
        font-medium font-body
        select-none
        ${className}
      `.trim()}
      style={variantStyles[variant]}
    >
      {children}
    </span>
  );
}
