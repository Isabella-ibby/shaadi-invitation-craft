'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import { useCountdown } from '@/hooks/useCountdown';
import clientData from '@/data/client.json';
import { flipAnimation, staggerContainer, fadeInUp } from '@/lib/animations';

export default function Countdown() {
  const { days, hours, minutes, seconds, isExpired } = useCountdown(clientData.weddingDate);

  const units = [
    { label: 'Days', value: days },
    { label: 'Hours', value: hours },
    { label: 'Minutes', value: minutes },
    { label: 'Seconds', value: seconds },
  ];

  return (
    <SectionWrapper id="countdown" title="Save the Date">
      <div className="flex justify-center items-center">
        {isExpired ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center gap-4 py-8"
          >
            <Heart size={48} style={{ color: 'var(--color-primary)' }} className="animate-pulse" />
            <h3 className="font-script text-4xl md:text-6xl" style={{ color: 'var(--color-primary)' }}>
              Happily Married
            </h3>
          </motion.div>
        ) : (
          <motion.div 
            variants={staggerContainer(0.1)}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-4 md:gap-8"
          >
            {units.map((unit) => (
              <motion.div 
                key={unit.label}
                variants={fadeInUp}
                className="flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border w-24 md:w-32"
                style={{ 
                  backgroundColor: 'var(--color-surface)',
                  borderColor: 'var(--color-border)',
                }}
              >
                <div className="relative overflow-hidden w-full text-center h-[3rem] md:h-[4rem]">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={unit.value}
                      variants={flipAnimation}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="font-heading font-semibold"
                      style={{ 
                        fontSize: 'clamp(2rem, 5vw, 4rem)',
                        color: 'var(--color-primary)'
                      }}
                    >
                      {unit.value.toString().padStart(2, '0')}
                    </motion.div>
                  </AnimatePresence>
                </div>
                <span className="font-body text-xs md:text-sm uppercase tracking-widest mt-2" style={{ color: 'var(--color-text-muted)' }}>
                  {unit.label}
                </span>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </SectionWrapper>
  );
}
