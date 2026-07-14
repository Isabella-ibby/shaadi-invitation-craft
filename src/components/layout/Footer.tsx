'use client';

import { motion } from 'framer-motion';
import { Instagram, Mail, Phone, Heart } from 'lucide-react';
import clientData from '@/data/client.json';
import { fadeInUp } from '@/lib/animations';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const brideInitial = clientData.brideName.charAt(0);
  const groomInitial = clientData.groomName.charAt(0);

  return (
    <footer className="py-20 relative overflow-hidden" style={{ backgroundColor: 'var(--color-background)' }}>
      {/* Subtle top border/gradient */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[var(--color-border)] to-transparent" />
      
      <div className="max-w-4xl mx-auto px-4 text-center">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInUp}
          className="flex flex-col items-center"
        >
          {/* Monogram */}
          <div className="mb-6 flex items-center gap-4">
            <span className="font-script text-5xl md:text-7xl" style={{ color: 'var(--color-primary)' }}>{brideInitial}</span>
            <span className="font-heading text-3xl md:text-5xl" style={{ color: 'var(--color-accent)' }}>&</span>
            <span className="font-script text-5xl md:text-7xl" style={{ color: 'var(--color-primary)' }}>{groomInitial}</span>
          </div>

          {/* Hashtag */}
          {clientData.coupleHashtag && (
            <h2 className="font-body text-xl md:text-2xl tracking-widest mb-10" style={{ color: 'var(--color-text-muted)' }}>
              {clientData.coupleHashtag}
            </h2>
          )}

          {/* Social / Contact Links */}
          <div className="flex items-center justify-center gap-6 mb-12">
            {clientData.instagram && (
              <a 
                href={`https://instagram.com/${clientData.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)' }}
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
            )}
            
            {clientData.email && (
              <a 
                href={`mailto:${clientData.email}`}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)' }}
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            )}
            
            {clientData.phone && (
              <a 
                href={`tel:${clientData.phone.replace(/[^0-9+]/g, '')}`}
                className="w-12 h-12 rounded-full flex items-center justify-center transition-transform hover:scale-110"
                style={{ backgroundColor: 'var(--color-surface)', color: 'var(--color-primary)' }}
                aria-label="Phone"
              >
                <Phone size={20} />
              </a>
            )}
          </div>

          <p className="font-body italic text-sm md:text-base max-w-lg mx-auto mb-12 leading-relaxed" style={{ color: 'var(--color-text-muted)' }}>
            "{clientData.thankYouMessage}"
          </p>

          <div className="w-24 h-[1px] mx-auto mb-12" style={{ backgroundColor: 'var(--color-border)' }} />

          <div className="font-body text-xs flex flex-col items-center gap-2" style={{ color: 'var(--color-text-muted)' }}>
            <p>© {currentYear} {clientData.brideName} & {clientData.groomName}. All rights reserved.</p>
            <p className="flex items-center gap-1">
              Made with <Heart size={12} className="text-red-500 fill-current" /> by Shaadi Studio
            </p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
