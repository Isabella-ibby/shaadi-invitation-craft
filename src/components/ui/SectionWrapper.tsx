'use client';

import { motion } from 'framer-motion';
import { ReactNode } from 'react';
import { fadeInUp, staggerContainer } from '@/lib/animations';
import Divider from './Divider';

interface SectionWrapperProps {
  id: string;
  title?: string;
  subtitle?: string;
  children: ReactNode;
  className?: string;
  showDivider?: boolean;
  fullWidth?: boolean;
}

export default function SectionWrapper({
  id,
  title,
  subtitle,
  children,
  className = '',
  showDivider = true,
  fullWidth = false,
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-20 md:py-32 relative overflow-hidden ${className}`}>
      <div className={fullWidth ? 'w-full' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        {showDivider && <Divider className="mb-12" />}
        {(title || subtitle) && (
          <motion.div
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.3 }}
            className="text-center mb-16"
          >
            {title && (
              <motion.h2
                variants={fadeInUp}
                className="font-heading font-semibold tracking-wide mb-4"
                style={{
                  fontSize: 'clamp(2rem, 5vw, 3.5rem)',
                  color: 'var(--color-primary)',
                }}
              >
                {title}
              </motion.h2>
            )}
            {subtitle && (
              <motion.p
                variants={fadeInUp}
                className="font-body max-w-2xl mx-auto"
                style={{
                  fontSize: 'clamp(0.9rem, 2vw, 1.125rem)',
                  color: 'var(--color-text-muted)',
                }}
              >
                {subtitle}
              </motion.p>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
