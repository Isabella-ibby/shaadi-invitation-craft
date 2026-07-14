'use client';

import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import clientData from '@/data/client.json';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Hero() {
  return (
    <section 
      id="hero" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, var(--color-background), var(--color-secondary))'
      }}
    >
      {/* Background Image / Overlay could go here based on config */}
      
      <motion.div 
        variants={staggerContainer(0.2)}
        initial="initial"
        animate="animate"
        className="relative z-10 text-center px-4 max-w-4xl mx-auto flex flex-col items-center"
      >
        <motion.p 
          variants={fadeInUp}
          className="font-body text-sm uppercase tracking-[0.3em] mb-8"
          style={{ color: 'var(--color-text-muted)' }}
        >
          {clientData.heroSubtitle}
        </motion.p>
        
        <motion.h1 
          variants={fadeInUp}
          className="font-script leading-none"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-primary)' }}
        >
          {clientData.brideName}
        </motion.h1>
        
        <motion.div variants={fadeInUp} className="my-2 md:my-4">
          <span style={{ color: 'var(--color-accent)', fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}>✦</span>
        </motion.div>
        
        <motion.h1 
          variants={fadeInUp}
          className="font-script leading-none mb-10"
          style={{ fontSize: 'clamp(3rem, 8vw, 7rem)', color: 'var(--color-primary)' }}
        >
          {clientData.groomName}
        </motion.h1>
        
        <motion.div variants={fadeInUp} className="flex flex-col items-center gap-2 mb-8">
          <p className="font-heading text-xl md:text-2xl" style={{ color: 'var(--color-text)' }}>
            {new Date(clientData.weddingDate).toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}
          </p>
          <p className="font-body text-sm md:text-base uppercase tracking-widest" style={{ color: 'var(--color-text-muted)' }}>
            {clientData.venue}
          </p>
        </motion.div>
        
        <motion.p 
          variants={fadeInUp}
          className="font-body italic text-sm md:text-base max-w-md mx-auto"
          style={{ color: 'var(--color-text-muted)' }}
        >
          &quot;{clientData.quote}&quot;
        </motion.p>
      </motion.div>

      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          onClick={() => {
            const nextSection = document.getElementById('countdown');
            if (nextSection) {
              nextSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <ChevronDown size={32} style={{ color: 'var(--color-primary)' }} />
        </motion.div>
      </motion.div>
    </section>
  );
}
