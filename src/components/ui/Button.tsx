/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import React, { forwardRef } from 'react';

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonBaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  fullWidth?: boolean;
  href?: string;
  children: React.ReactNode;
  className?: string;
}

type ButtonProps = ButtonBaseProps &
  Omit<HTMLMotionProps<'button'>, keyof ButtonBaseProps> &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof ButtonBaseProps>;

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'h-10 px-4 text-sm min-h-[48px]',
  md: 'h-12 px-6 text-base min-h-[48px]',
  lg: 'h-14 px-8 text-lg min-h-[48px]',
};

const Spinner = () => (
  <svg
    className="animate-spin -ml-1 mr-2 h-4 w-4"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

const Button = forwardRef<HTMLButtonElement | HTMLAnchorElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      loading = false,
      fullWidth = false,
      href,
      children,
      className = '',
      disabled,
      ...props
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    const baseClasses = `
      relative inline-flex items-center justify-center
      font-body font-medium tracking-wide
      rounded-lg overflow-hidden
      transition-all duration-300 ease-out
      cursor-pointer select-none
      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed
      ${sizeClasses[size]}
      ${fullWidth ? 'w-full' : ''}
      ${className}
    `.trim();

    const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
      primary: {
        background: 'linear-gradient(135deg, var(--color-primary), var(--color-accent))',
        color: 'var(--color-background)',
        border: 'none',
      },
      secondary: {
        background: 'transparent',
        color: 'var(--color-primary)',
        border: '1px solid var(--color-primary)',
      },
      ghost: {
        background: 'transparent',
        color: 'var(--color-text)',
        border: '1px solid transparent',
      },
    };

    const shimmerOverlay = (
      <span
        className="
          absolute inset-0 opacity-0 hover:opacity-100
          transition-opacity duration-500
          pointer-events-none
        "
        style={{
          background:
            'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.15) 50%, transparent 60%)',
          backgroundSize: '200% 100%',
          animation: 'shimmer 1.5s infinite',
        }}
        aria-hidden="true"
      />
    );

    const content = (
      <>
        {shimmerOverlay}
        {loading && <Spinner />}
        <span className="relative z-10 flex items-center gap-2">{children}</span>
      </>
    );

    if (href && !isDisabled) {
      return (
        <motion.a
          ref={ref as React.Ref<HTMLAnchorElement>}
          href={href}
          className={baseClasses}
          style={variantStyles[variant]}
          whileHover={{ scale: 1.02, filter: 'brightness(1.1)' }}
          whileTap={{ scale: 0.98 }}
          {...(props as any)}
        >
          {content}
        </motion.a>
      );
    }

    return (
      <motion.button
        ref={ref as React.Ref<HTMLButtonElement>}
        className={baseClasses}
        style={variantStyles[variant]}
        disabled={isDisabled}
        whileHover={isDisabled ? {} : { scale: 1.02, filter: 'brightness(1.1)' }}
        whileTap={isDisabled ? {} : { scale: 0.98 }}
        {...(props as any)}
      >
        {content}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;

/*
 * Add this keyframe to your global CSS:
 *
 * @keyframes shimmer {
 *   0%   { background-position: 200% 0; }
 *   100% { background-position: -200% 0; }
 * }
 */
