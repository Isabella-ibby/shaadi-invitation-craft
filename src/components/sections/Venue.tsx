'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Button from '@/components/ui/Button';
import clientData from '@/data/client.json';
import { fadeInLeft, fadeInRight } from '@/lib/animations';

export default function Venue() {
  return (
    <SectionWrapper id="venue" title="Wedding Venue" subtitle="Where we'll say 'I Do'">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12 items-center max-w-6xl mx-auto">
        
        {/* Venue Info */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInLeft}
          className="flex flex-col space-y-6 md:pr-8 text-center lg:text-left"
        >
          <h3 className="font-heading text-4xl lg:text-5xl font-semibold" style={{ color: 'var(--color-primary)' }}>
            {clientData.venue}
          </h3>
          
          <div className="flex flex-col gap-4 mx-auto lg:mx-0 max-w-md">
            <div className="flex items-start gap-3 justify-center lg:justify-start">
              <MapPin className="shrink-0 mt-1" style={{ color: 'var(--color-primary)' }} />
              <p className="font-body text-lg" style={{ color: 'var(--color-text-muted)' }}>
                {clientData.venueAddress}
              </p>
            </div>
            
            {clientData.phone && (
              <div className="flex items-center gap-3 justify-center lg:justify-start">
                <Phone className="shrink-0" style={{ color: 'var(--color-primary)' }} />
                <a href={`tel:${clientData.phone.replace(/[^0-9+]/g, '')}`} className="font-body text-lg hover:underline transition-all" style={{ color: 'var(--color-text-muted)' }}>
                  {clientData.phone}
                </a>
              </div>
            )}
          </div>
          
          <div className="pt-4 flex justify-center lg:justify-start">
            <Button 
              variant="primary" 
              size="lg" 
              href={clientData.mapsLink}
              className="flex items-center gap-2"
            >
              Get Directions <ExternalLink size={18} />
            </Button>
          </div>
        </motion.div>
        
        {/* Google Maps Embed */}
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={fadeInRight}
          className="w-full"
        >
          <div 
            className="w-full aspect-video md:aspect-[4/3] rounded-2xl overflow-hidden border-4 shadow-xl"
            style={{ borderColor: 'var(--color-surface)' }}
          >
            <iframe
              src={`https://www.google.com/maps?q=${encodeURIComponent(clientData.venueAddress)}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[30%] contrast-[1.1] opacity-90 hover:grayscale-0 transition-all duration-700"
            />
          </div>
        </motion.div>
        
      </div>
    </SectionWrapper>
  );
}
