'use client';

import { motion } from 'framer-motion';
import { Building2, MapPin, Phone, ExternalLink } from 'lucide-react';
import SectionWrapper from '@/components/ui/SectionWrapper';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import hotelsData from '@/data/hotels.json';
import { staggerContainer, fadeInUp } from '@/lib/animations';

export default function Hotels() {
  if (!hotelsData || hotelsData.length === 0) return null;

  return (
    <SectionWrapper id="hotels" title="Where to Stay" subtitle="Recommended accommodations near the venue">
      <motion.div 
        variants={staggerContainer(0.1)}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.1 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
      >
        {hotelsData.map((hotel, index) => (
          <motion.div key={index} variants={fadeInUp}>
            <Card variant="solid" className="h-full flex flex-col p-6 hoverable group">
              <div className="flex items-center justify-center w-14 h-14 rounded-full mb-5" style={{ backgroundColor: 'rgba(212, 175, 55, 0.1)' }}>
                <Building2 size={24} style={{ color: 'var(--color-primary)' }} />
              </div>
              
              <h3 className="font-heading text-xl mb-2 font-semibold" style={{ color: 'var(--color-text)' }}>
                {hotel.name}
              </h3>
              
              <p className="font-body text-sm font-medium mb-1" style={{ color: 'var(--color-primary)' }}>
                {hotel.distance}
              </p>
              
              <p className="font-body text-sm mb-5" style={{ color: 'var(--color-text-muted)' }}>
                {hotel.priceRange}
              </p>
              
              <div className="flex-grow space-y-3 mb-6">
                <div className="flex items-start gap-3">
                  <MapPin size={16} className="mt-0.5 shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                  <span className="font-body text-sm" style={{ color: 'var(--color-text-muted)' }}>{hotel.address}</span>
                </div>
                {hotel.phone && (
                  <div className="flex items-center gap-3">
                    <Phone size={16} className="shrink-0" style={{ color: 'var(--color-text-muted)' }} />
                    <a href={`tel:${hotel.phone.replace(/[^0-9+]/g, '')}`} className="font-body text-sm hover:underline" style={{ color: 'var(--color-text)' }}>
                      {hotel.phone}
                    </a>
                  </div>
                )}
              </div>
              
              <div className="mt-auto pt-4 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <Button 
                  variant="secondary" 
                  size="sm" 
                  fullWidth 
                  href={hotel.bookingUrl}
                  className="flex justify-center items-center gap-2"
                >
                  Book Now <ExternalLink size={14} />
                </Button>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
